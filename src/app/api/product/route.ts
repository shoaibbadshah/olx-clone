import connectDB from "@/lib/db";
import ProductModel from "@/lib/schema/schema";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDB();
    const product = await ProductModel.find();
    console.log("Products fetched successfully", product);

    return NextResponse.json({
      status: 200,
      product,
    });
  } catch (error) {
    console.error("Error retrieving products:", error);
    return NextResponse.json({
      status: 501,
      error: "Error retrieving products" + error,
    });
  }
};

export const POST = async (request: Request) => {
  const body = await request.json();
  console.log("🚀 ~ file: route.ts:26 ~ POST ~ body:", body);
  const {
    title,
    description,
    price,
    discountPercentage,
    brand,
    category,
    thumbnail,
    images,
  } = body;

  try {
    await connectDB();
    const newProduct = new ProductModel({
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
    return NextResponse.json({
      success: true,
      message: "Product uploaded successfully",
    });
  } catch (error) {
    return NextResponse.json({ error: "Error uploading product" + error });
  }
};
