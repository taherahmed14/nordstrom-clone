const mongoose = require('mongoose')

require('dotenv').config();

// module.exports = () => {
//   return mongoose.connect(
//     `mongodb+srv://Gaurav16:gaurav16@cluster0.5rsgd.mongodb.net/Nordstorm`,
//   )
// }


module.exports = () => {
  return mongoose.connect(
    `mongodb+srv://Gaurav16:${process.env.DB_PASS}@cluster0.5rsgd.mongodb.net/Nordstorm`,
  )
}
