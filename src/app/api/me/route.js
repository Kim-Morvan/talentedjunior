import { NextResponse } from "next/server";

import User from "../../../models/user.js";
import connectMongoClient from "../../../database/mongodb.js";

export async function GET(req) {
  try {
    await connectMongoClient();
    const me = await User.findById(req.body._id);
    console.log(me);
    return new NextResponse(JSON.stringify(me));
  } catch (error) {
    return new NextResponse({ error: error.message });
  }
}
