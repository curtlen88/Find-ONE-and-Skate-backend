// require mongoose ODM
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  favSpots: [{
    type: mongoose.Schema.Types.ObjectId,
    
    ref: 'Spot'
  }]
}, {
  timestamps: true
})

module.exports = mongoose.model('User', UserSchema)