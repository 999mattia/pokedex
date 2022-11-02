import styles from "../styles/contact.module.css"
import Head from 'next/head'
import Footer from "../components/Footer"
import { useState } from "react"

const defaultModel = {
    name: "",
    email: "",
    text: ""
}

export default function Contact() {
    const [mail, setMail] = useState(defaultModel)
    const [error, setError] = useState("")

    const sendEmail = async () => {
        if (checkInput()) {
            const res = await fetch("/api/mail", {
                method: "POST",
                body: JSON.stringify(mail)
            })
            setMail(defaultModel)
        } else {
            return
        }
    }

    const checkInput = () => {
        if (mail.name.length < 3) {
            setError("Enter a name")
            return false
        } else if (mail.email.length < 3) {
            setError("Enter a valid email address")
            return false
        } else if (!mail.email.includes("@")) {
            setError("Enter a valid email address")
            return false
        } else if (mail.text.length < 1) {
            setError("Enter a text")
            return false
        } else {
            return true
        }
    }

    const handleChange = (e) => {
        const target = e.target;
        const name = e.target.name;
        const value = target.value;
        setMail({
            ...mail,
            [name]: value,
        });
        setError("")
    };

    return (
        <>
            <Head>
                <title>Pokedex | Contact and Impressum</title>
            </Head>
            <div className={styles.container}>
                <h2>Contact</h2>

                <form>
                    <div>
                        <input className={styles.input} type="text" placeholder="Full name..." name="name" onChange={handleChange} value={mail.name} />
                    </div>

                    <div>
                        <input className={styles.input} type="text" placeholder="E-Mail..." name="email" onChange={handleChange} value={mail.email} />
                    </div>

                    <div>
                        <input className={styles.input} type="text" placeholder="Text..." name="text" onChange={handleChange} value={mail.text} />
                    </div>
                </form>

                <button className={styles.btn} onClick={() => sendEmail()}>Send message</button>

                {error.length > 0 && <div className={styles.error}>
                    {error}
                </div>}

                <h2>Impressum</h2>

                <h3>Pokedex</h3>
                <h4>Mattia Gisiger</h4>
                <h4>Lernender Informatik gibb</h4>
                <h4>mattia.gisiger@gmail.com</h4>
                <h4>Lorrainestrasse 5</h4>
                <h4>3013 Bern</h4>

                <h4>Haftungsausschluss</h4>
                <div>
                    <p>Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen. Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.</p>
                </div>

                <h2>
                    Big Thanks to PokeApi (https://pokeapi.co/) for providing the data about the pokemon!
                </h2>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </>
    )
}