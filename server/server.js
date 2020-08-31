require('dotenv').config()
const express 		= require('express')
const helmet    	= require('helmet')
const compression 	= require('compression')
const cors          = require('cors')
const app 			= express()
const PORT 			= process.env.EXPRESS_PORT || 3000

app.use( helmet() )
app.use( compression() )
app.use( cors() )
app.use( express.json() )
app.use( express.urlencoded({ extended: true }) )

app.use( '/contact', require('./routes/contact') )

app.listen( PORT, () => console.log(`running in port, ${ PORT }`) )