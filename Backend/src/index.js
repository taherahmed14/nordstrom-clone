const express = require('express')
const cors = require('cors')
const app = express();

const path = require("path");

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

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../Frontend/build')))

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../Frontend/build/index.html'))
})


module.exports = app
