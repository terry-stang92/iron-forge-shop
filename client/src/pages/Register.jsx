import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password
      })
      localStorage.setItem('token', res.data.token)
      navigate('/products')
    } catch (err) {
      alert('Error registering')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex items-center justify-center py-20">
        <div className="bg-white p-8 rounded-xl shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Register</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 p-3 rounded-lg mb-4 text-gray-900"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 p-3 rounded-lg mb-4 text-gray-900"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 p-3 rounded-lg mb-6 text-gray-900"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-red-500 text-white font-bold py-3 rounded-lg hover:bg-red-600"
            >
              REGISTER
            </button>
          </form>
          <p className="mt-4 text-center text-gray-500">
            Already have an account? <Link to="/login" className="text-red-500 font-bold">Login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register