const express = require('express')
const bodyParser = require('./middleware/bodyParser')
const monitor=require('./middleware/morgan')
const port = 5000
const route=require('./routes/todoRoute')
const app = express()
const Post=require('./config/mongodb')
const { post } = require('./routes/mainRoute')

app.use(monitor.morgan)

app.use(bodyParser.parse)


app.use('/',route)

app.get('/',( req,res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



