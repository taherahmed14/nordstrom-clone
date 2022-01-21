
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
    required: [true, "Please Enter Product Description"],
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
  gender: {
    type: String,
    required: [true, "Please Enter Gender"],
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
