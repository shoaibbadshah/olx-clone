import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    mongoose.connect(process.env.MongoURL, {
      useUnifiedTopology: true,
    });
    console.log("database connection established");
  } catch (error) {
    throw new Error("Error connecting to the database");
  }
};
export default connectDB;
