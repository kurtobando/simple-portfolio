// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import validator from "validator"
import mailer from "../../lib/mailer"

interface formData {
    name: string
    email_address: string
    message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { name = "", email_address = "", message = "" }: formData = req.body

    if (req.method === "GET") {
        return res.status(403).json({ message: `GET request declined` })
    }

    if (name.trim().length === 0) {
        return res.status(400).json({ message: `Bad Request` })
    }

    if (email_address.trim().length === 0) {
        return res.status(400).json({ message: `Bad Request` })
    }

    if (message.trim().length === 0) {
        return res.status(400).json({ message: `Bad Request` })
    }

    if (!validator.isEmail(email_address.trim())) {
        return res.status(400).json({ message: `${email_address} is not a valid email address` })
    }

    mailer({ name, message, email: email_address })
        .then((data) => {
            return res.status(200).json({ message: "Message sent!" })
        })
        .catch((error) => {
            return res.status(200).json({ message: "Message sent!" })
        })
}
