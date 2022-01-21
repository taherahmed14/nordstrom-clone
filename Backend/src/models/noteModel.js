const mongoose = require("mongoose");

const notesSchema = {
  email: String,
  firstname: String,
  lastname: String,
  address: String,
  postalcode: Number,
  city: String,
  phone: Number,
  country: String,
};

const Note = mongoose.model("Note", notesSchema);

module.exports = Note;
