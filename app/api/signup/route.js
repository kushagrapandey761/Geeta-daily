import { User } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../login/route";
const saltRounds = 10;

export async function POST(req) {
  const body = await req.json();
  const { username, email, password } = body;
  const isExisting = await User.findOne({ email });
  if (isExisting) {
    return NextResponse.json({ error: "User exists with the provided email" });
  } else {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      shlokaIdx: 0,
      lastAccessed: new Date(),
    });
    await newUser.save();
    var token = jwt.sign({ email }, JWT_SECRET);
    return NextResponse.json({ token });
  }
}
