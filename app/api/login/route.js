import { User } from "@/lib/db";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
const JWT_SECRET = "h7VNCJ@1";
export async function POST(req) {
  const body = await req.json();
  const { email, password } = body;
  const result = await User.findOne({ email });
  if (result) {
    var token = jwt.sign({ email }, JWT_SECRET);

    return NextResponse.json({ token });
  } else {
    return NextResponse.json({ error: "User does not exist" });
  }
}
export { JWT_SECRET };
