import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import User from "../../../../server/models/user.js";
import connectMongoClient from "../../../../server/database/mongodb.js";

export async function POST(res) {
  try {
    await connectMongoClient();
    const data = await res.json();
    const { username, email, password } = data;
    console.log("data", data);

    // const user = await User.findOne({ email });
    // console.log("user", user);
    // if (user) {
    //   return res.status(400).json({ error: "User already exists" });
    // }

    const salt = 12;
    const hashPwd = bcrypt.hashSync(password, salt);

    const savedUser = await User({
      username,
      email,
      password: hashPwd,
    }).save();
    console.log("savedUser", savedUser);

    return NextResponse.json({ savedUser });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
