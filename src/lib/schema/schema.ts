// lib/models/Product.js
import mongoose, { Document, Schema } from "mongoose";

export interface ProductInterface extends Document {
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

const productSchema = new Schema<ProductInterface>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discountPercentage: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  stock: {
    type: Number,
    default: 0,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
});

const ProductModel = mongoose.models.products || mongoose.model<ProductInterface>("products", productSchema);

export default ProductModel;



// // lib/models/Product.js
// import mongoose, { Document, Schema } from "mongoose";


// export interface ProductInterface extends Document {
//   title: string;
//   description: string;
//   price: number;
//   discountPercentage: number;
//   rating: number;
//   stock: number;
//   brand: string;
//   category: string;
//   thumbnail: string;
//   images: string[];
// }

// const productSchema =
//   new Schema() <
//   ProductInterface >
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     discountPercentage: {
//       type: Number,
//       required: true,
//     },
//     rating: {
//       type: Number,
//       default: 0,
//     },
//     stock: {
//       type: Number,
//       default: 0,
//     },
//     brand: {
//       type: String,
//       required: true,
//     },
//     category: {
//       type: String,
//       required: true,
//     },
//     thumbnail: {
//       type: String,
//       required: true,
//     },
//     images: {
//       type: [String],
//       required: true,
//     },
//   };

// const Product =
//   mongoose.models.products ||
//   mongoose.model < ProductInterface > ("products", productSchema);

// export default Product;
