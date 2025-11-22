import React from 'react'

export default function ProductCard({product}) {
  return (
    <div className="card">
      <div className="media">{product.image || '🛠️'}</div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="price">${product.price.toFixed(2)}</div>
    </div>
  )
}
