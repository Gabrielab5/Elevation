const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
];

const http = require('http');

const server = http.createServer((req, res) => {
  const urlParts = req.url.split("/")
  if (req.method === 'GET' && urlParts[1] === 'api' && urlParts[2] === 'users' && urlParts[3]) {
    const userId = parseInt(urlParts[3]); 
    if (isNaN(userId)) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Invalid user ID provided');
      return; 
    }

    const user = users.find(u => u.id === userId);     
    if (user) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(user));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('User not found');
    }
  } else if (req.method === 'GET' && req.url === '/api/users') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));

  } else if (req.method === 'POST' && req.url === '/api/users') {
      let body = '';  
      req.on('data', chunk => {
        body += chunk.toString(); 
      });
      req.on('end', () => {
        try {
          const newUser = JSON.parse(body);

          if (!newUser.name || !newUser.email) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Missing required fields: name or email');
            return;
          }
          const newId = users.length > 0 ? Math.max(...users.map(u=> u.id)) : 1;
          newUser.id = newId; 
          users.push(newUser);

          res.writeHead(201, {'Content-Type': 'application/json'});
          res.end(JSON.stringify(newUser))

        } catch (err) {
          res.writeHead(400, { 'Content-Type': 'text/plain' });
          res.end('Invalid JSON');
        }
    });
  } else {   
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Page not found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Node server created at port ${port}`);
});