const sgMail = require('@sendgrid/mail')
let key = ""
sgMail.setApiKey(key)

export default function handler(req, res) {
    if (req.method == "POST") {

        const body = JSON.parse(req.body)

        const msg = {
            to: 'mattia.gisiger@gmail.com',
            from: 'mgi132389@stud.gibb.ch',
            subject: `Message from ${body.name}, ${body.email}`,
            text: body.text
        }

        sgMail
            .send(msg)
            .then(() => {
                console.log('Email sent')
                res.status(200).json({ message: 'Email sent' })
            })
            .catch((error) => {
                res.status(400).json({ message: 'Error while sending email' })
            })

    }
}
