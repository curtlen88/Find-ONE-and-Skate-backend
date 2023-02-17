// require packages
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const rowdy = require('rowdy-logger')


// config express app
const app = express()
const PORT = process.env.PORT || 8000 
// for debug logging 
const rowdyResults = rowdy.begin(app)
// cross origin resource sharing 
app.use(cors())
// request body parsing
app.use(express.json())

const myMiddleware = (req, res, next) => {
  // I am a middleware
  console.log('Hi 👋 the middleware has been invoked!')
  next() // makes express move on to the next route/middleware
}

// app.use(myMiddleware)

// GET / -- test index route
// defining a function as route specific middleware
app.get('/', myMiddleware, (req, res) => {
  res.json({ msg: 'hello backend 🤖' })
})

// controllers
app.use('/users', require('./controllers/users.js'))
app.use('/spots', require('./controllers/spots.js'))
app.use('/images', require('./controllers/images.js'))
// app.use('/videos', require('./controllers/videos.js'))
app.use('/favorites', require('./controllers/favorites.js'))



// hey listen
app.listen(PORT, () => {
  rowdyResults.print()
  console.log(`is that port ${PORT} I hear? 🙉`)
})

