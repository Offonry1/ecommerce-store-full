import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'

const DUMMY_PRODUCTS = [
  { _id: '1', name: 'Sony WH-1000XM5 Headphones', description: 'Industry-leading noise cancelling with 30hr battery', price: 279.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80', rating: 4.8, reviews: 12341 },
  { _id: '2', name: 'Apple Watch Series 9', description: 'Advanced health tracking with Always-On display', price: 399.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&q=80', rating: 4.9, reviews: 8921 },
  { _id: '3', name: 'Nike Air Max 270', description: 'Lightweight foam sole for maximum all-day comfort', price: 129.99, category: 'Fashion', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80', rating: 4.7, reviews: 23100 },
  { _id: '4', name: 'Hydro Flask Water Bottle', description: 'Keeps drinks cold 24hrs, hot 12hrs — 32oz', price: 44.99, category: 'Home', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80', rating: 4.9, reviews: 45621 },
  { _id: '5', name: 'JBL Flip 6 Speaker', description: 'Waterproof, bold sound, 12hr playtime', price: 99.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80', rating: 4.6, reviews: 7890 },
  { _id: '6', name: 'Leather Tote Handbag', description: 'Genuine leather, spacious and stylish', price: 89.99, category: 'Fashion', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80', rating: 4.5, reviews: 3421 },
  { _id: '7', name: 'Instant Pot Duo 7-in-1', description: 'Pressure cooker, slow cooker, rice cooker and more', price: 79.99, category: 'Home', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80', rating: 4.8, reviews: 34102 },
  { _id: '8', name: 'MacBook Pro Stand', description: 'Aluminium ergonomic design, foldable and portable', price: 49.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80', rating: 4.6, reviews: 12198 },
  { _id: '9', name: 'Lululemon Yoga Mat', description: 'Non-slip surface, extra thick 6mm, carry strap included', price: 68.99, category: 'Sports', image: 'https://images.unsplash.com/photo-1601925228184-35172d926a22?w=400&q=80', rating: 4.7, reviews: 9876 },
  { _id: '10', name: 'Ralph Lauren Polo Shirt', description: '100% cotton pique, classic fit, 12 colours', price: 89.99, category: 'Fashion', image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&q=80', rating: 4.5, reviews: 16543 },
  { _id: '11', name: 'Roomba i7+ Robot Vacuum', description: 'Auto-emptying, smart mapping, works with Alexa', price: 599.99, category: 'Home', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', rating: 4.5, reviews: 8234 },
  { _id: '12', name: 'Bowflex Resistance Bands', description: '5 levels of resistance, includes carry bag and handles', price: 39.99, category: 'Sports', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80', rating: 4.8, reviews: 18901 },
  { _id: '13', name: 'Canon EOS M50 Camera', description: 'Mirrorless, 24.1MP, 4K video, WiFi enabled', price: 649.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80', rating: 4.7, reviews: 5432 },
  { _id: '14', name: 'Ray-Ban Aviator Sunglasses', description: 'Classic gold frame with green G-15 lenses', price: 154.99, category: 'Fashion', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80', rating: 4.6, reviews: 9871 },
  { _id: '15', name: 'Dyson V15 Vacuum', description: 'Laser dust detection, 60min runtime, HEPA filter', price: 749.99, category: 'Home', image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&q=80', rating: 4.8, reviews: 7654 },
  { _id: '16', name: 'Garmin Forerunner 255', description: 'GPS running watch, heart rate, VO2 max tracking', price: 349.99, category: 'Sports', image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&q=80', rating: 4.7, reviews: 4321 },
]

const CATEGORIES = ['All', 'Electronics', 'Fashion', 'Home', 'Sports']

const BANNERS = [
  { title: 'Flash Sale Today!', sub: 'Up to 50% off Electronics', color: '#1a1040', accent: '#a78bfa', emoji: '⚡' },
  { title: 'New Arrivals', sub: 'Fresh styles just dropped', color: '#041a10', accent: '#34d399', emoji: '✨' },
  { title: 'Free Shipping', sub: 'On all orders over $50', color: '#0a1628', accent: '#38bdf8', emoji: '🚚' },
]

export default function Home() {
  const [products, setProducts] = useState(DUMMY_PRODUCTS)
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState([])
  const [banner, setBanner] = useState(0)
  const [added, setAdded] = useState(null)
  const [sort, setSort] = useState('default')

  useEffect(() => {
    axios.get((import.meta.env.VITE_API_URL || 'http://localhost:4000') + '/api/products')
      .then(r => { if (r.data && r.data.length > 0) setProducts(r.data) })
      .catch(() => {})
  }, [])

  useEffect(() => {
    const t = setInterval(() => setBanner(b => (b + 1) % BANNERS.length), 3500)
    return () => clearInterval(t)
  }, [])

  let filtered = products.filter(p => {
    const matchCat = category === 'All' || p.category === category
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  if (sort === 'low') filtered = [...filtered].sort((a, b) => a.price - b.price)
  if (sort === 'high') filtered = [...filtered].sort((a, b) => b.price - a.price)
  if (sort === 'rating') filtered = [...filtered].sort((a, b) => b.rating - a.rating)

  function addToCart(product) {
    setCart(c => [...c, product])
    setAdded(product._id)
    setTimeout(() => setAdded(null), 1500)
  }

  const b = BANNERS[banner]

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', fontFamily: "'Segoe UI', Arial, sans-serif" }}>
      <div style={{
        background: '#111', borderBottom: '1px solid #1e1e1e',
        padding: '0 2.5rem', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', height: '64px',
        position: 'sticky', top: 0, zIndex: 100
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <span style={{ fontSize: '1.4rem' }}>🛒</span>
          <span style={{ color: '#fff', fontWeight: '700', fontSize: '1.2rem', letterSpacing: '-0.5px' }}>
            Industrial<span style={{ color: '#a78bfa' }}>Shop</span>
          </span>
        </div>
        <div style={{ flex: 1, maxWidth: '500px', margin: '0 2rem', position: 'relative' }}>
          <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#555' }}>🔍</span>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search for products..."
            style={{
              width: '100%', padding: '0.6rem 1rem 0.6rem 2.5rem',
              background: '#1a1a1a', border: '1px solid #2a2a2a',
              borderRadius: '8px', color: '#e8e8e8', fontSize: '0.9rem',
              outline: 'none', boxSizing: 'border-box'
            }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ position: 'relative', cursor: 'pointer' }}>
            <span style={{ fontSize: '1.4rem' }}>🛍️</span>
            {cart.length > 0 && (
              <span style={{
                position: 'absolute', top: '-8px', right: '-8px',
                background: '#a78bfa', color: '#fff', borderRadius: '50%',
                width: '18px', height: '18px', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                fontSize: '0.7rem', fontWeight: '700'
              }}>{cart.length}</span>
            )}
          </div>
          <div style={{
            width: '34px', height: '34px', background: '#1a1040',
            border: '1px solid #a78bfa', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#a78bfa', fontWeight: '700', fontSize: '0.85rem'
          }}>M</div>
        </div>
      </div>

      <div style={{
        background: b.color, borderBottom: `2px solid ${b.accent}`,
        padding: '2.5rem 2.5rem', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', transition: 'all 0.5s'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '2rem' }}>{b.emoji}</span>
            <h2 style={{ color: '#fff', fontSize: '2rem', fontWeight: '700', margin: 0 }}>{b.title}</h2>
          </div>
          <p style={{ color: b.accent, margin: 0, fontSize: '1rem' }}>{b.sub}</p>
        </div>
        <button style={{
          background: b.accent, color: '#000', border: 'none',
          padding: '0.85rem 2.5rem', borderRadius: '8px',
          fontWeight: '700', fontSize: '1rem', cursor: 'pointer'
        }}>Shop Now</button>
      </div>

      <div style={{
        padding: '1rem 2.5rem', display: 'flex', gap: '0.8rem',
        alignItems: 'center', borderBottom: '1px solid #1e1e1e',
        background: '#0d0d0d', flexWrap: 'wrap'
      }}>
        {CATEGORIES.map(cat => (
          <button key={cat} onClick={() => setCategory(cat)} style={{
            padding: '0.4rem 1.2rem',
            background: category === cat ? '#a78bfa' : '#1a1a1a',
            color: category === cat ? '#fff' : '#888',
            border: `1px solid ${category === cat ? '#a78bfa' : '#2a2a2a'}`,
            borderRadius: '999px', fontSize: '0.85rem',
            cursor: 'pointer', fontWeight: category === cat ? '600' : '400',
          }}>{cat}</button>
        ))}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <span style={{ color: '#444', fontSize: '0.85rem' }}>{filtered.length} products</span>
          <select value={sort} onChange={e => setSort(e.target.value)} style={{
            background: '#1a1a1a', border: '1px solid #2a2a2a',
            color: '#888', borderRadius: '6px', padding: '0.3rem 0.6rem',
            fontSize: '0.8rem', outline: 'none'
          }}>
            <option value="default">Sort by</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      <div style={{ padding: '2rem 2.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1.2rem'
        }}>
          {filtered.map(p => (
            <ProductCard key={p._id} product={p} onAdd={addToCart} added={added === p._id} />
          ))}
        </div>
      </div>

      <div style={{
        background: '#111', borderTop: '1px solid #1e1e1e',
        padding: '2rem 2.5rem', marginTop: '2rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <div>
          <span style={{ color: '#fff', fontWeight: '700', fontSize: '1rem' }}>
            Industrial<span style={{ color: '#a78bfa' }}>Shop</span>
          </span>
          <p style={{ color: '#444', fontSize: '0.8rem', margin: '0.3rem 0 0 0' }}>
            © 2026 IndustrialShop. Built with MongoDB · Express · React · Node.js
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {['MongoDB', 'Express', 'React', 'Node.js', 'Docker'].map(tag => (
            <span key={tag} style={{
              fontSize: '0.7rem', padding: '0.2rem 0.6rem',
              background: '#1a1a1a', border: '1px solid #2a2a2a',
              borderRadius: '4px', color: '#555'
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
