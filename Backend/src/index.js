const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const registerController = require('./controllers/register.controller')

const productController = require('./controllers/product.controller')

app.use('/register', registerController);
app.use('/products', productController);

module.exports = app;
