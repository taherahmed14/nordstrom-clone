const express = require("express");
const { Module } = require("module");

const router = express.Router();

const Note = require("../models/noteModel");

router.route("/create").post((req, res) => {
  const email = req.body.email;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const address = req.body.address;
  const postalcode = req.body.postalcode;
  const city = req.body.city;
  const phone = req.body.phone;
  const country = req.body.country;

  const newNote = new Note({
    email,
    firstname,
    lastname,
    address,
    postalcode,
    city,
    phone,
    country,
  });

  newNote.save();
});

router.route("/tweets").get((req, res) => {
  Note.find().then((foundNotes) => res.json(foundNotes));
});

module.exports = router;
