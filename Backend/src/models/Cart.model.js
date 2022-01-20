const { Schema, model } = require('mongoose')

const cartSchema = new Schema(
  {
    brand: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },

    images: [{ type: String, required: true }],

    description: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  },
)

module.exports = model('cart', cartSchema)
