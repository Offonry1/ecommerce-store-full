const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

// GET /api/products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 }).limit(100)
    res.json(products)
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
})

// GET /api/products/:id
router.get('/:id', async (req, res) => {
  try {
    const p = await Product.findById(req.params.id)
    if(!p) return res.status(404).json({ error: 'Not found' })
    res.json(p)
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
})

// POST /api/products (simple admin create - no auth for demo)
router.post('/', async (req, res) => {
  try {
    const newP = new Product(req.body)
    await newP.save()
    res.status(201).json(newP)
  } catch (err) {
    res.status(400).json({ error: 'Invalid data' })
  }
})

module.exports = router
