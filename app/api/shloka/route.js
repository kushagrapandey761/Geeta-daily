import { connectDb } from "@/lib/db";
import Shloka from "@/models/Shloka";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(req) {
  connectDb();
  const email = req.headers.get("email");
  const user = await User.findOne({ email });
  const shlokaIdx = user.shlokaIdx;
  const shlokas = await Shloka.find({ ID: { $lte: shlokaIdx } });
  await User.updateOne(
    { email },
    {
      $set: { lastAccessed: new Date() },
    }
  );
  return NextResponse.json({ shlokas });
}
