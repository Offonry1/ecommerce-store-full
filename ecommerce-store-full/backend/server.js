require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const productsRouter = require('./routes/products')

const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/api/products', productsRouter)

const PORT = process.env.PORT || 4000
const MONGO = process.env.MONGO_URL || 'mongodb://localhost:27017/ecom'

mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> {
    console.log('MongoDB connected')
    app.listen(PORT, ()=> console.log('Server listening on', PORT))
  })
  .catch(err => {
    console.error('DB connect error', err)
  })
