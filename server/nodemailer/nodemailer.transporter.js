const nodemailer = require("nodemailer")
const defaults = require("./nodemailer.defaults")
const HOST = process.env.NODEMAILER_HOST
const PORT = process.env.NODEMAILER_PORT
const SECURE = process.env.NODEMAILER_SECURE
const USER = process.env.NODEMAILER_USER
const PASS = process.env.NODEMAILER_PASSWORD
const SUBJECT = process.env.NODEMAILER_SUBJECT

const transporter = nodemailer.createTransport(
    {
        host: HOST,
        port: PORT,
        secure: SECURE,
        auth: {
            user: USER,
            pass: PASS,
        },
    },
    defaults
)

module.exports = transporter
