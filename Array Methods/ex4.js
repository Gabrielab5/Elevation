const users = require('./users.json');

const names = users.filter(user => user.name[0] === ('C')).map(user => user.name)

console.log(names)