import { connectDb } from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  connectDb();
  const body = await req.json();
  const email = body.email;
  const user = await User.findOne({ email });
  return NextResponse.json({username: user.username});
}
