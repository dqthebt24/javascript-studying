const express = require('express')
const app = express()

const port = 3001

app.get('/', (request, response) => {
  response.send('This is index.html')
})

app.get('/users', (request, response) => {
  // Too simple
  //response.send('[{"user":"Nhân"},{"user": "Thế"}]')

  let users = [{name: 'Nhan'}, {name: 'The'}];

  response.send(`[{"name": "${users[0].name}"}, {"name": "${users[1].name}"}]`);
})

app.post('/', (request, response) => {
  response.send('This is post method!')
})

app.listen(port, (err) => {
  console.log(`server is listening on ${port}`)
})
