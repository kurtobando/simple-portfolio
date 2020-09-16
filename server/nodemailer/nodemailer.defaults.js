const NAME    = process.env.NODEMAILER_NAME
const USER    = process.env.NODEMAILER_USER
const SUBJECT = process.env.NODEMAILER_SUBJECT

const defaults = {
	from: `${ NAME } <${ USER }>`,
	subject: SUBJECT,
}

module.exports = defaults