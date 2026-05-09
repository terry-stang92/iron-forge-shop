

const jwt = require('jsonwebtoken')

const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]
  console.log('TOKEN:', token)
  console.log('SECRET:', process.env.JWT_SECRET)



  if (!token) return res.status(401).json({ msg: 'No token, access denied' })

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (err) {
     console.log('ERROR:', err.message)
    res.status(401).json({ msg: 'Invalid token' })
  }
}

const adminOnly = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ msg: 'Access denied, admins only' })
  }
  next()
}

module.exports = { protect, adminOnly }