// lib/db.js
import dotenv from "dotenv";

dotenv.config();

if (!process.env.USERNAME || !process.env.PASSWORD) {
  throw new Error("MongoDB credentials are not provided.");
}

const { USERNAME, PASSWORD } = process.env;
// export const connectionStr = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.skdksx7.mongodb.net/olxclone?retryWrites=true&w=majority`;
export const connectionStr = `mongodb+srv://root:root@cluster0.p7wcehp.mongodb.net/`;
