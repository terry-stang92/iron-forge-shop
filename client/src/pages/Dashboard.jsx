import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import { Navigate } from 'react-router-dom'

function Dashboard() {
  const [stats, setStats] = useState({})
  const token = localStorage.getItem('token')

  if (!token) return <Navigate to="/login" />

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setStats(res.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-6xl mx-auto px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
        <p className="text-gray-500 mb-8">IronForge Shop — Overview</p>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <p className="text-gray-500 mb-2 font-medium">Total Users</p>
            <p className="text-6xl font-bold text-red-500">{stats.totalUsers}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <p className="text-gray-500 mb-2 font-medium">Total Products</p>
            <p className="text-6xl font-bold text-red-500">{stats.totalProducts}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard