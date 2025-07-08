const users = require('./users.json');

const mapUsers = users.filter(user => user.address.zipcode[0] === ('5')).map(user => user.id)
console.log(mapUsers)