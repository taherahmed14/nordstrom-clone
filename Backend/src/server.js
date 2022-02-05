const connect = require('./configs/db');

const express = require("express");

const app = require('./index');

const path = require("path");

// ** MIDDLEWARE ** //
// const whitelist = ['http://localhost:3000', 'http://localhost:4500', 'https://git.heroku.com/nordstrom-clone.git']
// const corsOptions = {
//   origin: function (origin, callback) {
//     console.log("** Origin of request " + origin)
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       console.log("Origin acceptable")
//       callback(null, true)
//     } else {
//       console.log("Origin rejected")
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
//app.use(cors(corsOptions))

const port = process.env.PORT || 4500;

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../Frontend/build')))

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../Frontend/public/index.html'))
})

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('Frontend/public')); //check
//     app.get('*', function(req, res) {
//       req.sendFile(path.resolve(__dirname, 'Frontend/public', 'index.html'));
//     });
//   }


app.listen(port, async (req, res) => {
    await connect();

    console.log(`Listening on PORT ${port}`)
})
