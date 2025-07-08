const users = require('./users.json');

const mapUsers = users.filter(user => user.address.zipcode[0] === ('5'));
console.log(mapUsers)