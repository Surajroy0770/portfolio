const express = require('express')
const connectToMongo = require('./db')
const cors = require('cors')
connectToMongo();

const app = express()
const port = 8000

app.use(cors())
app.use(express.json());

app.use('/api/protfoliodata',require('./routes'))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})