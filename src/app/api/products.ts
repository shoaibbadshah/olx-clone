// @ts-nocheck
import mongoose from "mongoose";

import { connectionStr } from "../../lib/db";
import Product from "@/app/product/page";

mongoose.connect(connectionStr, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: "Error retrieving products" });
    }
  } else if (req.method === "POST") {
    const {
      title,
      description,
      price,
      discountPercentage,
      brand,
      category,
      thumbnail,
      images,
    } = req.body;

    try {
      const newProduct = new Product({
        title,
        description,
        price,
        discountPercentage,
        brand,
        category,
        thumbnail,
        images,
      });

      await newProduct.save();
      res
        .status(201)
        .json({ success: true, message: "Product uploaded successfully" });
    } catch (error) {
      res.status(500).json({ error: "Error uploading product" });
    }
  } else if (req.method === "DELETE") {
    try {
      await Product.deleteMany({ stock: 0 });
      res.status(200).json({
        success: true,
        message: "Out-of-stock products deleted successfully",
      });
    } catch (error) {
      res.status(500).json({ error: "Error deleting out-of-stock products" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
