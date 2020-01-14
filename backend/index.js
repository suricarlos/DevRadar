const express = require('express')

const app = express()

// get, post, put, delele

app.get('/', (request, response) => {
  return response.json({ msg: 'Hello Omnistack' })
})

app.listen(3333)