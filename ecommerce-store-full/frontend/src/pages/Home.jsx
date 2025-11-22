import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'

export default function Home(){
  const [products, setProducts] = useState([])

  useEffect(()=> {
    axios.get((import.meta.env.VITE_API_URL || 'http://localhost:4000') + '/api/products').then(r=> setProducts(r.data)).catch(()=>{})
  }, [])

  return (
    <div className="container">
      <h1>Industrial Shop</h1>
      <div className="grid">
        {products.map(p => <ProductCard key={p._id} product={p} />)}
      </div>
    </div>
  )
}
