import { connectDb } from "@/lib/db";
import Image from "@/models/Image";
import Shloka from "@/models/Shloka";
import { NextResponse } from "next/server";

export async function POST(req) {
  connectDb();
  const { Chapter, Verse } = await req.json();
  const shloka = await Shloka.findOne({ Chapter, Verse });
  const { url } = await Image.findOne({ ID: Chapter });
  if (shloka) {
    return NextResponse.json({ shloka, url });
  } else
    return NextResponse.json({ error: "There was some error fetching shloka" });
}
