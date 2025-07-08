const users = require('./users.json');

const names = users.every(user => user.address.city === ("South Christy"))

console.log(names)