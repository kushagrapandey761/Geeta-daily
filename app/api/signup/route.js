import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";

import User from "@/models/User";
import { connectDb } from "@/lib/db";

export async function POST(req) {
  connectDb();
  const body = await req.json();
  const { username, email, password } = body;
  const isExisting = await User.findOne({ email });
  if (isExisting) {
    return NextResponse.json({ error: "User exists with the provided email" });
  } else {
    
    const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT_ROUNDS));
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      shlokaIdx: 1,
      lastAccessed: new Date(),
    });
    await newUser.save();
    const secretKey = Buffer.from(process.env.JWT_SECRET, "base64");
    var token = await new SignJWT({ email })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(secretKey);
    console.log(token);
    return NextResponse.json({ token });
  }
}
