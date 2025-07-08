const users = require('./users.json');

const mapUsers = users.map(user => {return { email: user.email ,companyName: user.companyName}})

console.log(mapUsers)