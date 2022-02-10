const express = require('express');
const server = express();
const users = require('./mockResponses')

require('dotenv').config();

server.use(express.json())

const PORT = process.env.PORT

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

server.get('/', (req, res) => {
    res.send(`<h1>Heroku-App!</h1>`)
})

server.get('/api/users',(req, res) => {
    res.send(users)
})

server.post('/api/register',(req, res) => {
    const user = req.body
    res.send(user)
})

server.post('/api/login', (req,res) => {
    
})