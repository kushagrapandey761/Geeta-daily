import { jwtVerify } from "jose";
import { NextResponse } from "next/server";
import { JWT_SECRET } from "./app/api/login/route";
import { TextEncoder } from "util";

export default async function middleware(req) {
  const token = req.headers.get("authorization")?.split(" ")[1];


  if (!token) {
    return NextResponse.redirect(new URL("/log-in", req.url));
  }

  try {
    const secretKey = Buffer.from(JWT_SECRET, "base64");

    const payload = await jwtVerify(token, secretKey);
    const clonedReq = req.clone();
    clonedReq.headers.set("email", payload.payload.email);
    return NextResponse.next({ request: clonedReq });
  } catch (error) {
    console.error("Token verification failed:", error);
    return NextResponse.json({ msg: "Invalid token" }, { status: 401 });
  }
}

export const config = {
  matcher: ["/api/shloka/:path*"],
  runtime: "nodejs",
};
