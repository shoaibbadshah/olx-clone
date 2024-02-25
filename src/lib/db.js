import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  try {
    mongoose.connect(process.env.MongoURL, {
      useNewUrlParser: true,
      userUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    throw new error("database connection error: " + error);
  }
};
export default connectDB;
