const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  isFinished: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Item', ItemSchema)
