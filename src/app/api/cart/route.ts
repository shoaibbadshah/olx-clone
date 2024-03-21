import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
import connectDB from "@/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end(); // Method Not Allowed
  }

  const { id } = req.query;

  try {
    const { db } = await connectDB();
    const product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(id as string) });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
