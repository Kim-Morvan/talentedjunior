import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

import User from "../../../../models/user.js";
import connectMongoClient from "../../../../database/mongodb.js";

export async function POST(req) {
  try {
    await connectMongoClient();
    const data = await req.json();
    const { email, password } = data;
    console.log("data", data);

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User does not exists" });
    }

    const matchPwd = bcrypt.compareSync(password, user.password);
    if (!matchPwd) {
      return NextResponse.json({ error: "Invalid email and password" });
    }

    const accessToken = () => {
      return jwt.sign(
        {
          id: user._id,
          username: user.username,
          email: user.email,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "5m" },
      );
    };

    const res = NextResponse.json({
      message: "Login successful",
      success: true,
    });

    res.cookies("token", accessToken, {
      httpOnly: true,
    });

    return res;
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
