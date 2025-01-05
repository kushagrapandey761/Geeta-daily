import { connectDb } from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  connectDb();
  const {newusername} = await req.json();
  const user = await User.findOne({ email:req.headers.get('email') });
  user.username = newusername;
  user.save();
  return NextResponse.json({ Success: "Username changed successfully!!" });
}
