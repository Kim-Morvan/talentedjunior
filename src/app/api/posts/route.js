import { NextResponse, NextRequest } from "next/server";

import Post from "../../../models/post.js";
import connectMongoClient from "../../../database/mongodb.js";

export async function GET(req) {
  try {
    await connectMongoClient();
    const posts = await Post.find();
    return new NextResponse(JSON.stringify(posts));
  } catch (error) {
    return new NextResponse({ error: error.message });
  }
}
