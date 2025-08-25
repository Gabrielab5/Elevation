const http = require('http')

const server = http.createServer(function (request, response) {
    if (request.method === 'GET') {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    if (request.url === '/') response.write('Welcome to my server!')
    if (request.url === '/about') response.write('This is the about page!')
    if (request.url === '/contact') response.write(`contact information : Gabriela 0523381612`)
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' })
    response.write('404 - Page not found')
  }
    response.end();
})

const port = 3000
server.listen(port, function () {
    console.log(`Node server created at port ${port}`)
})
