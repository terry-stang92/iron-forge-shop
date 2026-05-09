import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-6xl mx-auto px-8 py-24 text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          TRAIN HARD.<br />
          <span className="text-red-500">FUEL HARDER.</span>
        </h1>
        <p className="text-gray-500 text-xl mb-8">
          Premium supplements and clothing for serious athletes.
        </p>
        <Link to="/products" className="bg-red-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-600 transition">
          SHOP NOW
        </Link>
      </div>
    </div>
  )
}

export default Home