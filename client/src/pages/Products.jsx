import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'

function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <div className="max-w-6xl mx-auto px-8 py-12">
        <h1 className="text-3xl font-bold mb-2">Supplements & Clothing</h1>
        <p className="text-gray-500 mb-8">Premium products for serious athletes</p>
        <div className="grid grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
              <img
                src={product.image || 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400'}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <span className="text-xs font-bold uppercase text-red-500 tracking-widest">
                  {product.category}
                </span>
                <h2 className="text-lg font-bold mt-1 mb-1">{product.name}</h2>
                <p className="text-gray-500 text-sm mb-3">{product.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold">${product.price}</p>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-600 transition">
                    ADD TO CART
                  </button>
                </div>
                <p className="text-gray-400 text-xs mt-2">Stock: {product.stock}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products