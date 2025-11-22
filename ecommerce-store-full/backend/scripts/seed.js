/*
  Run with: node scripts/seed.js
  Makes sample products in the database defined by MONGO_URL
*/
require('dotenv').config()
const mongoose = require('mongoose')
const Product = require('../models/Product')

const MONGO = process.env.MONGO_URL || 'mongodb://localhost:27017/ecom'

const sample = [
  { name: 'Industrial Sensor A1', description: 'Temperature & vibration sensor', price: 199.99, stock: 25, image: '' },
  { name: 'PLC Controller X5', description: 'Programmable logic controller', price: 1299.00, stock: 5, image: '' },
  { name: 'Conveyor Belt Motor', description: 'High-torque motor for conveyors', price: 499.5, stock: 8, image: '' }
]

mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async ()=> {
    console.log('connected, seeding...')
    await Product.deleteMany({})
    await Product.insertMany(sample)
    console.log('seed done')
    mongoose.disconnect()
  })
  .catch(err => {
    console.error(err)
  })
