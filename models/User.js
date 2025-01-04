import mongoose from "mongoose";

var UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  shlokaIdx: Number,
  lastAccessed: Date,
});

for (let model in mongoose.models) delete mongoose.models[model];

export default mongoose.model("User", UserSchema);
