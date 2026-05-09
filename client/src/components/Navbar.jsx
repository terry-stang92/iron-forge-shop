import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold tracking-widest text-red-500">
        IRONFORGE
      </Link>
      <div className="flex gap-6 items-center">
        <Link to="/products" className="text-gray-700 hover:text-red-500 font-medium">Products</Link>
        <Link to="/dashboard" className="text-gray-700 hover:text-red-500 font-medium">Dashboard</Link>
        <Link to="/login" className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-600">Login</Link>
        <Link to="/register" className="border border-red-500 text-red-500 px-4 py-2 rounded-lg font-bold hover:bg-red-50">Register</Link>
      </div>
    </nav>
  )
}

export default Navbar