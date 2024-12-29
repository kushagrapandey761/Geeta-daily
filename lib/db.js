import mongoose from "mongoose";

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://admin:89XXa0wAeiSnhvyU@cluster0.3p7wx.mongodb.net/geeta-daily",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Define the User schema
const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  shlokaIdx: Number,
  lastAccessed: Date,
});

// Check if the model already exists in mongoose.models to prevent overwriting
const User = mongoose.models.User || mongoose.model("User", UserSchema);

export { User };
