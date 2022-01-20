// const { Schema, model } = require('mongoose')

// const productSchema = new Schema(
//   {
//     name: { type: String, required: true },
//     price: { type: Number, required: true },
//     rating: { type: String, required: true },
//     product_type: { type: String, required: true },
//     brand: { type: String, required: true },
//     img1: { type: String, required: true },
//     img2: { type: String, required: true },
//     img3: { type: String, required: true },
//     img4: { type: String, required: true },
//     img5: { type: String, required: true },
//     description: { type: String, required: true },
//   },
//   {
//     versionKey: false,
//     timestamps: true,
//   },
// )

// module.exports = model('product', productSchema)


const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter product Name"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Please Enter product Price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },

  description: {
    type: String,
    required: [true, "Please Enter product Description"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
     {
      type: String,
      required: [true, "Please Enter Produc images"],
    },
  ],

  category: {
    type: String,
    required: [true, "Please Enter Product Category"],
  },
  brand: {
    type: String,
    required: [true, "Please Enter Product Brand"],
  },

  Stock: {
    type: Number,
    required: [true, "Please Enter product Stock"],
    maxLength: [10, "Stock cannot exceed 4 characters"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },

  
});

module.exports = mongoose.model("Product", productSchema);
