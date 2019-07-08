require('dotenv').config()

const express = require('express')
const validate = require('express-validation')
const cors = require('cors')
const mongoose = require('mongoose')

class App {
  constructor () {
    this.express = express()
    this.database()
    this.middlewares()
    this.routes()
    this.exceptions()
  }

  database () {
    mongoose.connect(process.env.MONGO_URL, {
      useCreateIndex: true,
      useNewUrlParser: true
    })
  }

  middlewares () {
    this.express.use(express.json())
    this.express.use(cors())
  }

  routes () {
    this.express.use(require('./routes'))
  }

  exceptions () {
    this.express.use((err, req, resp, next) => {
      if (err instanceof validate.ValidationError) {
        return resp.status(err.status).json(err)
      }

      return resp
        .status(err.status || 500)
        .json({ error: 'Internal Server Error', text: err.message })
    })
  }
}

module.exports = new App().express
