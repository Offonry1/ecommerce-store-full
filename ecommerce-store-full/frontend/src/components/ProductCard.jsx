import React from 'react'

export default function ProductCard({ product, onAdd, added }) {
  return (
    <div style={{
      background: '#111', border: '1px solid #1e1e1e',
      borderRadius: '12px', overflow: 'hidden',
      transition: 'transform 0.2s, border-color 0.2s',
      cursor: 'pointer',
    }}
      onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = '#2a2a2a' }}
      onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#1e1e1e' }}
    >
      <div style={{
        height: '180px', overflow: 'hidden', position: 'relative',
        background: '#1a1a1a'
      }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={e => { e.target.style.display = 'none' }}
        />
        {product.rating >= 4.8 && (
          <span style={{
            position: 'absolute', top: '8px', left: '8px',
            background: '#f97316', color: '#fff',
            fontSize: '0.65rem', fontWeight: '700',
            padding: '0.2rem 0.5rem', borderRadius: '4px'
          }}>🔥 HOT</span>
        )}
        {product.price > 500 && (
          <span style={{
            position: 'absolute', top: '8px', right: '8px',
            background: '#1a1040', color: '#a78bfa',
            border: '1px solid #a78bfa',
            fontSize: '0.65rem', fontWeight: '700',
            padding: '0.2rem 0.5rem', borderRadius: '4px'
          }}>PREMIUM</span>
        )}
      </div>

      <div style={{ padding: '1rem' }}>
        {product.category && (
          <span style={{
            fontSize: '0.7rem', color: '#a78bfa',
            textTransform: 'uppercase', letterSpacing: '0.08em'
          }}>{product.category}</span>
        )}
        <h3 style={{
          color: '#e8e8e8', fontSize: '0.9rem', fontWeight: '500',
          margin: '0.3rem 0 0.4rem 0', lineHeight: '1.3'
        }}>{product.name}</h3>
        <p style={{
          color: '#555', fontSize: '0.78rem',
          margin: '0 0 0.8rem 0', lineHeight: '1.4'
        }}>{product.description}</p>

        {product.rating && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.8rem' }}>
            <span style={{ color: '#f59e0b', fontSize: '0.75rem' }}>
              {'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}
            </span>
            <span style={{ color: '#555', fontSize: '0.72rem' }}>{product.rating}</span>
            <span style={{ color: '#444', fontSize: '0.72rem' }}>({product.reviews?.toLocaleString()} reviews)</span>
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ color: '#34d399', fontWeight: '700', fontSize: '1.1rem' }}>
              ${(product.price || 0).toFixed(2)}
            </span>
            <span style={{ color: '#333', fontSize: '0.75rem', marginLeft: '0.4rem', textDecoration: 'line-through' }}>
              ${((product.price || 0) * 1.2).toFixed(2)}
            </span>
          </div>
          <button
            onClick={() => onAdd(product)}
            style={{
              background: added ? '#34d399' : '#a78bfa',
              color: '#fff', border: 'none',
              padding: '0.45rem 1rem', borderRadius: '6px',
              fontSize: '0.78rem', fontWeight: '600',
              cursor: 'pointer', transition: 'background 0.2s',
              whiteSpace: 'nowrap'
            }}
          >{added ? '✓ Added!' : '+ Add to Cart'}</button>
        </div>
      </div>
    </div>
  )
}
