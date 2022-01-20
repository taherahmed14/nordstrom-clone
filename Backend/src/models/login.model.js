const { Schema, model } = require('mongoose');

const loginSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    status: { type: Boolean, required: false },
  },
  {
    versionKey: false,
    timestamps: true,
  },
)

module.exports = model('login', loginSchema);
