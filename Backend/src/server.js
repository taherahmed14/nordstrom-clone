const connect = require('./configs/db');

const app = require('.');

const path = require("path");

const port = process.env.PORT || 4500;

app.listen(port, async (req, res) => {
    await connect();

    console.log(`Listening on PORT ${port}`)
})
