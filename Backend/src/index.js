const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const registerController = require('./controllers/register.controller');
const loginController = require('./controllers/login.controller');
const cartController = require('./controllers/Cart.controller');
const productController = require('./controllers/product.controller');

app.use('/register', registerController);
app.use('/login', loginController);
app.use('/products', productController);
app.use('/cart', cartController);

app.use("/", require("./controllers/noteRoute.controller"));


module.exports = app
