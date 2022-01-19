const express = require('express')

const router = express()
const User = require('../models/login.model')
router.post('/', async (req, res) => {
  const user = await User.create(req.body)
  return res.status(201).send(user)
})

router.get('/', async (req, res) => {
  const user = await User.find()
  return res.status(201).send(user)
})

module.exports = router
