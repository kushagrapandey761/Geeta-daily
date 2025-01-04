import { jwtVerify } from "jose";
import { NextResponse } from "next/server";


export default async function middleware(req) {
  const token = req.headers.get("authorization")?.split(" ")[1];

  if (!token) {
    return NextResponse.redirect(new URL("/log-in", req.url));
  }

  try {
    const secretKey = Buffer.from(process.env.JWT_SECRET, "base64");

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
  matcher: ["/api/shloka/:path*", "/api/shlokaID/:path*"],
  runtime: "nodejs",
};
