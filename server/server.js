require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
})

const URL           = process.env.EXPRESS_URL || "http://localhost"
const PORT          = process.env.EXPRESS_PORT || 3000
const express       = require('express')
const helmet        = require('helmet')
const compression   = require('compression')
const cors          = require('cors')
const fs            = require('fs')
const app           = express()

const server = require('http').createServer( app )

app.use( helmet() )
app.use( compression() )
app.use( cors() )
app.use( express.json() )
app.use( express.urlencoded({ extended: true }) )

app.use( '/contact', require('./routes/contact') )

server.listen( PORT, () => console.log(`running in ${ URL } on port, ${ PORT }`) )
