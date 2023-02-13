// require packages
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const rowdy = require('rowdy-logger')
const morgan = require('morgan')
// connct to the db
const db = require('./models')
db.connect()


// config express app
const app = express()
const PORT = process.env.PORT || 3001 
// for debug logging 
const rowdyResults = rowdy.begin(app)
app.use(morgan('tiny'))
// cross origin resource sharing 
app.use(cors())
// request body parsing
app.use(express.urlencoded({ extended: false })) // optional 
app.use(express.json())

// app.use((req, res, next) => {
//   console.log('im a middleware 😬!')
//   next()
// })

const middleWare = (req, res, next) => {
  console.log('im a middleware 😬!')
  res.locals.myData = '👾'
  next()
}

// GET / -- test index route
app.get('/', middleWare, (req, res) => {
  console.log(res.locals)
  res.json({ msg: 'hello backend 🤖' })
})

// controllers
app.use('/api-v1/users', require('./controllers/api-v1/users.js'))

// hey listen
app.listen(PORT, () => {
  rowdyResults.print()
  console.log(`is that port ${PORT} I hear? 🙉`)
})

