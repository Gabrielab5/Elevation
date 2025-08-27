const express = require('express')

const app = express()
const port = 3000
let requestCount = 0

// Test data
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
]

const loggerMiddleware = (req, res, next) => {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`)
  next()
}

const counterMiddleware = (req, res, next) => {
  requestCount++
  req.requestCount = requestCount
  next()
}

const validateIdMiddleware = (req, res, next) => {
  const id = parseInt(req.params.id, 10)
   if (isNaN(id)) {    
    const error = new Error('Invalid ID format. ID must be a number.')
    error.status = 400
    return next(error)
  }
  req.parsedId = id;
  next()
}

const checkResourceExists = (req, res, next) => {
  const user = users.find(u => u.id === req.parsedId)
  if (!user) {
    const error = new Error('User not found.')
    error.status = 404;
    return next(error)
  }
  req.user = user
  next()
}

const errorHandler = (err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).json({
    message: err.message || 'An unexpected error occurred.',
    status: err.status || 500
  })
}

app.use(loggerMiddleware)
app.use(counterMiddleware)

app.get('/', (req, res) => {
  res.json({
    message: "Welcome!",
    requestCount: req.requestCount
  })
})

app.get('/about', (req, res) => {
  res.json({
    message: "This is a simple Express.js app.",
    requestCount: req.requestCount
  })
})

app.get('/users', (req, res) => {
  res.json(users);
})

app.get('/users/:id', validateIdMiddleware, checkResourceExists, (req, res) => {
  res.json(req.user)
})

app.post('/users', (req, res) => {
  res.status(201).json({ message: 'User created successfully' })
})

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
  console.log('Open a browser and navigate to http://localhost:3000 and http://localhost:3000/about')
  console.log(' - GET http://localhost:3000/users')
  console.log(' - GET http://localhost:3000/users/1')
  console.log(' - GET http://localhost:3000/users/999')
  console.log(' - GET http://localhost:3000/users/abc')
})
