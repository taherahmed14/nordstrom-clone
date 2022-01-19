const connect = require('./configs/db')

const app = require('./index')

app.listen(4500, async (req, res) => {
  await connect()

  console.log('Listening on PORT 4500')
})
