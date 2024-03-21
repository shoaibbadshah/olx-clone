// Import necessary dependencies
import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import ProductModel from "@/lib/schema/schema";

// Function to fetch products
export const GET = async () => {
  try {
    await connectDB();

    const products = await ProductModel.find();

    console.log("Products fetched successfully", products);

    return NextResponse.json({
      status: 200,
      products,
    });
  } catch (error) {
    console.error("Error retrieving products:", error);
    return NextResponse.json({
      status: 501,
      error: "Error retrieving products" + error,
    });
  }
};

// Function to insert a new product
// export const POST = async (request) => {
//   const body = await request.json();
//   console.log("🚀 ~ POST ~ body:", body);

//   try {
//     await connectDB();
//     const newProduct = new ProductModel(body);
//     await newProduct.save();

//     return NextResponse.json({
//       success: true,
//       message: "Product uploaded successfully",
//     });
//   } catch (error) {
//     console.error("Error uploading product:", error);
//     return NextResponse.json({
//       error: "Error uploading product" + error,
//     });
//   }
// };
