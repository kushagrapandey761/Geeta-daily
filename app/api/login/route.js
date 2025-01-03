import { connectDb } from "@/lib/db";
import { SignJWT } from "jose";
import { NextResponse } from "next/server";
import { TextEncoder } from "util";

import bcrypt from "bcryptjs";
import User from "@/models/User";
const JWT_SECRET = "h7VNCJ@1";
export async function POST(req) {
  connectDb();
  const body = await req.json();
  const { email, password } = body;
  const result = await User.findOne({ email });
  const isPasswordCorrect = bcrypt.compareSync(password, result.password);
  if (result && isPasswordCorrect) {
    const secretKey = Buffer.from(JWT_SECRET, "base64");

    var token = await new SignJWT({ email })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(secretKey);

    return NextResponse.json({ token });
  } else {
    return NextResponse.json({ error: "User does not exist" });
  }
}

export { JWT_SECRET };
