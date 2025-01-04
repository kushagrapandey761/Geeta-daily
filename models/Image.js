import mongoose from "mongoose";
var ImageSchema = new mongoose.Schema({
  ID: Number,
  url: String,
});
for (let model in mongoose.models) delete mongoose.models[model];
export default mongoose.model("Image", ImageSchema);
