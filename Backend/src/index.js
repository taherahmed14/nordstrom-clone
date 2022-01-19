const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const loginController = require('./controllers/login.controller')

const productController = require('./controllers/product.controller')

app.use('/user', loginController)
app.use('/products', productController)

module.exports = app
