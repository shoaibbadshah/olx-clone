// lib/db.js
import dotenv from "dotenv";

dotenv.config();

try {
  mongoose.connect(process.env.MongoURL, {
    useUnifiedTopology: true,
  });
  console.log("database connection established");
} catch (error) {
  throw new Error("Error connecting to the database");
}

export default connectDB;
