const express = require('express')

const app = express()
const port = 3000

let requestCount = 0

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

app.use(loggerMiddleware);
app.use(counterMiddleware);

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

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
  console.log('Open a browser and navigate to http://localhost:3000 and http://localhost:3000/about')
})
