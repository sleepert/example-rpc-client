const express = require('express')
const rpc = require('./rpc');
const logger = require("./logger")
const dotenv = require('dotenv');

dotenv.config()

const listen = () => {
  const app = express()

  app.get('/GetData', rpc.getData)

  app.listen(process.env.LISTEN_PORT, () => {
    logger.info(`Listening on port ${process.env.LISTEN_PORT}`)
  })
}

module.exports = { listen }