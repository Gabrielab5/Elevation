const express = require('express')
const port = 3000
const app = express()

const users = {
    tilda: "You've done a wonderful job",
    riva: "You need to improve your form, but good perseverance",
    jeremy: "You're incredible"
}


app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})

app.get('/', function (request, response) {
    console.log("Someone has come into the server. Brace yourselves.")
    response.send("Ending the cycle, thanks for visiting")
})

app.get('/life', function (request, response) {
    response.send("42")
})

app.get('/users/:username', function (request, response) {
    response.send(`Hi there, ${request.params.username}`)
})

app.get('/details', function (request, response) {
    const city = request.query.city;
  const zipcode = request.query.zipcode;
  const middleName = request.query.middleName;

  response.send(`city: ${city}, zipcode: ${zipcode}, middle name: ${middleName}`);
})

