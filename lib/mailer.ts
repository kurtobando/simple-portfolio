import nodemailer from "nodemailer"
import {
    NODEMAILER_NAME,
    NODEMAILER_HOST,
    NODEMAILER_USER,
    NODEMAILER_PASSWORD,
    NODEMAILER_PORT,
    NODEMAILER_SECURE,
    NODEMAILER_SUBJECT,
    NODEMAILER_RECIPIENT,
} from "../config/config"

interface Props {
    name: string
    email: string
    message: string
}

export default async function mailer({ name, email, message }: Props) {
    // https://nodemailer.com/about/
    // Create a Nodemailer transporter using either SMTP or some other transport mechanism
    const transporter = nodemailer.createTransport({
        host: NODEMAILER_HOST,
        port: NODEMAILER_PORT,
        secure: NODEMAILER_SECURE,
        auth: {
            user: NODEMAILER_USER,
            pass: NODEMAILER_PASSWORD,
        },
    })

    // Set up message options (who sends what to whom)
    const messageOptions = {
        from: `"${NODEMAILER_NAME}" <${NODEMAILER_USER}>`,
        to: `${NODEMAILER_RECIPIENT}, ${NODEMAILER_USER}`,
        subject: `${NODEMAILER_SUBJECT}`,
        text: `
${name} | ${email}

${message}
`,
    }

    // Deliver the message object using the sendMail() method of your previously created transporter
    return await transporter.sendMail(messageOptions)
}
