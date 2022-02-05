const express = require('express');

const router = express();
const Register = require('../models/register.model');

router.post('/', async (req, res) => {
  const register = await Register.create(req.body);
  return res.status(201).send(register);
})

router.get('/', async (req, res) => {
  const register = await Register.find();
  return res.status(201).send(register);
})

module.exports = router
