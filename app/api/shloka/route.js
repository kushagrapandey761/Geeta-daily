import { connectDb } from "@/lib/db";
import Shloka from "@/models/Shloka";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(req) {
  connectDb();
  const email = req.headers.get("email");
  const user = await User.findOne({ email });
  var shlokas;
  
  if(user.shlokaIdx<=701){
    const lastAccessedDate = new Date(
      user.lastAccessed.getFullYear(),
      user.lastAccessed.getMonth(),
      user.lastAccessed.getDate()
    );
    const currentDateOnly = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    );

    const msInADay = 24 * 60 * 60 * 1000;
    const dayDifference = (currentDateOnly - lastAccessedDate) / msInADay;

    if (dayDifference > 0) {
      user.shlokaIdx += Math.floor(dayDifference);
      user.lastAccessed = new Date();
    }
    
  }
  if(user.shlokaIdx>701){
    user.shlokaIdx = 701;
    await user.save();
  }
  shlokas = await Shloka.find({ ID: { $lte: user.shlokaIdx } });
  return NextResponse.json({ shlokas });
}
