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
});

router.patch("/:id", async(req, res) => {
  try{
    const login = await Login.findByIdAndUpdate(req.params.id, { status: req.body.status });
    return res.status(201).send(login);
  }
  catch(e){
    return res.status(500).json({
      message: e.message, 
      status: "Failed"
    });
  }
});

module.exports = router
