const mongoose = require('mongoose')

module.exports = () => {
  return mongoose.connect(
    `mongodb+srv://Gaurav16:gaurav16@cluster0.5rsgd.mongodb.net/Nordstorm`,
  )
}
