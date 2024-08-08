const express = require('express')

//other packages
const logger = require('morgan')
const cors = require('cors')
const userRouter = require('./routes/suggestions/suggestionRouter')

//start express app
const app = express()

//use middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use('/api/suggestions', userRouter)

module.exports = app