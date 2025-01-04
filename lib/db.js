import mongoose from "mongoose";

let isConnected = false;

const connectDb = async () => {
  if (isConnected) {
    console.log("Database is already connected.");
    return;
  }

  try {
    await mongoose.connect(
      process.env.MONGO_URL,
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
