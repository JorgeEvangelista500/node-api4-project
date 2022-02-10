const express = require('express');
const server = express();
const users = require('./mockResponses')

require('dotenv').config();

server.use(express.json())

const PORT = process.env.PORT

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

server.get('/api/users',(req, res) => {
    res.status(200).json(users)
})

server.post('/api/register',(req, res) => {
    const user = req.body
    res.status(200).json(user)
})

server.post('/api/login', (req,res) => {
    
})