const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')

const server = express();

const breedsRouter = require('../helpers-dogs/dogsRouter')

server.use(helmet())
server.use(express.json())
server.use(cors())
server.use(morgan())


server.use('/api/breeds', breedsRouter);



server.get('/', (req,res)=> {
    res.send('its running')
})



module.exports = server 