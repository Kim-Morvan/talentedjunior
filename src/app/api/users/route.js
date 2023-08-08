import { NextResponse } from "next/server";

import User from "../../../models/user.js";
import connectMongoClient from "../../../database/mongodb.js";

export async function GET(req) {
  try {
    await connectMongoClient();
    const users = await User.find();
    return new NextResponse(JSON.stringify(users));
  } catch (error) {
    return new NextResponse({ error: error.message });
  }
}
