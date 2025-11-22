const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, default: '' },
  price: { type: Number, required: true },
  image: { type: String, default: '' },
  stock: { type: Number, default: 0 },
}, { timestamps: true })

module.exports = mongoose.model('Product', ProductSchema)
