const express 	= require('express')
const router 	= express.Router()

router.post( '/send', ( req, res ) => {
	res.status( 200 ).send({ response : 'hello world', params : req.body })
})

module.exports = router