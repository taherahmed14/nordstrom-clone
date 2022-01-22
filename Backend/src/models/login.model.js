const { Schema, model } = require('mongoose');

const loginSchema = new Schema(
  {
    email: { type: String, required: false },
    password: { type: String, required: false },
    first_name: { type: String, required: false },
    otp: { type: Number, required: false },
    status: { type: Boolean, required: false, default: true },
  },
  {
    versionKey: false,
    timestamps: true,
  },
)

module.exports = model('login', loginSchema);
