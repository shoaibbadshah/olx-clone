// // @ts-nocheck
// import type { NextApiRequest, NextApiResponse } from "next";
// import mongoose from "mongoose";
// import Product from "@/schema/schema";
// import connectDB from "@/lib/db";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   // Disable type-checking for the following block
//   // @ts-ignore
//   await connectDB();

//   switch (req.method) {
//     case "GET":
//       try {
//         const product = await Product.find();
//         res.status(200).json(product);
//         console.log("Products fetched successfully");
//       } catch (error) {
//         console.error("Error retrieving products:", error);
//         res.status(500).json({ error: "Error retrieving products" });
//       }
//       break;
//     case "POST":
//       // Handle logic for POST request (if needed)
//       break;
//     case "PUT":
//       // Handle logic for PUT request (if needed)
//       break;
//     case "DELETE":
//       // Handle logic for DELETE request (if needed)
//       break;
//     default:
//       res.status(405).json({ error: "Method Not Allowed" });
//       break;
//   }
// }
