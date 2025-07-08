const users = require('./users.json');

const summary = user =>
    console.log(`${user.name} lives in ${user.address.city}, and owns the company ${user.company.name}`)

users.forEach(user => {summary(user)});