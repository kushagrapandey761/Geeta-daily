import mongoose from "mongoose";

let isConnected = false; // To avoid multiple connections

const connectDb = async () => {
  if (isConnected) {
    console.log("Database is already connected.");
    return;
  }

  try {
    await mongoose.connect(
      "mongodb+srv://admin:89XXa0wAeiSnhvyU@cluster0.3p7wx.mongodb.net/geeta-daily",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    isConnected = true;
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};



export { connectDb };
