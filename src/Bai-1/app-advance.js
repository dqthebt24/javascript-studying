const express = require('express')
const app = express()

const port = 3001

app.get('/', (request, response) => {
  response.send('This is index.html')
})

app.get('/users', (request, response) => {
  response.send('This is users page')
})

app.post('/', (request, response) => {
  response.send('This is post method!')
})

app.listen(port, (err) => {
  console.log(`server is listening on ${port}`)
})
