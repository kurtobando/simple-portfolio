const express 		= require('express')
const router 		= express.Router()
const transporter 	= require('../nodemailer/nodemailer.transporter')
const RECIPIENT 	= process.env.NODEMAILER_RECIPIENT

router.post( '/send', async ( req, res ) => {
	const { name, email, message } = req.body

	const mailer = await transporter.sendMail({
		to: RECIPIENT,
		text:
		`
Name: 
${ name }

Email Address: 
${ email }

Message: 
${ message }
		`,
	})

	res.status( 200 ).send({ response : mailer, params : req.body })
})

module.exports = router