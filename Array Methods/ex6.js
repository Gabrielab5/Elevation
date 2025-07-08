const users = require('./users.json');

const userSuite = users.filter(user => user.address.suite === ("Apt. 950")).map(user => user.company.name)

console.log(userSuite)