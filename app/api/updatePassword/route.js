import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const { oldPassword, newPassword } = await req.json();
  const email = req.headers.get("email");
  const user = await User.findOne({ email });
  const isPasswordCorrect = bcrypt.compareSync(oldPassword, user.password);
  if (isPasswordCorrect) {
    const hashedPassword = await bcrypt.hash(newPassword, Number(process.env.SALT_ROUNDS));
    user.password = hashedPassword;
    user.save();
    return NextResponse.json({
      Success: "Your password has been changed successfully",
    });
  } else {
    return NextResponse.json({ error: "Incorrect Old Password" });
  }
}
