import mongoose from "mongoose";

var ShlokaSchema = new mongoose.Schema({
  ID: Number,
  Chapter: Number,
  Verse: Number,
  Shloka: String,
  Transliteration: String,
  HinMeaning: String,
  EngMeaning: String,
  WordMeaning: String,
});
for (let model in mongoose.models) delete mongoose.models[model];

export default mongoose.model("Shloka", ShlokaSchema);
