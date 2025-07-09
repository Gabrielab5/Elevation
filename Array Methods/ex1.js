const users = require('./users.json');

const mapUsers = users.map(user => {return { email: user.email ,companyName: user.company.name}})

console.log(mapUsers)