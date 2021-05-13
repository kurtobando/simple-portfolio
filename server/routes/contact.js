const { body, validationResult } = require("express-validator")
const express = require("express")
const router = express.Router()
const transporter = require("../nodemailer/nodemailer.transporter")
const RECIPIENT = process.env.NODEMAILER_RECIPIENT

router.use([
    body("name").trim().not().isEmpty().escape(),
    body("message").trim().not().isEmpty().escape(),
    body("email").trim().not().isEmpty().isEmail().escape(),
])

router.post("/send", async (req, res) => {
    const { name, email, message } = req.body
    const errors = validationResult(req)
    // validation error message
    if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() })
    }
    // send email
    const mailer = await transporter.sendMail({
        to: RECIPIENT,
        text: `
Name:
${name}

Email Address:
${email}

Message:
${message}
		`,
    })
    // return
    res.status(200).send({ response: mailer, params: req.body })
})

module.exports = router
