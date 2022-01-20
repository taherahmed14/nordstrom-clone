const express = require('express');

const router = express();
const Login = require('../models/login.model');

router.post('/', async (req, res) => {
  const login = await Login.create(req.body);
  return res.status(201).send(login);
})

router.get('/', async (req, res) => {
  const login = await Login.find();
  return res.status(201).send(login);
})

module.exports = router
