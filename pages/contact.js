import styles from "../styles/contact.module.css"
import Head from 'next/head'

export default function Contact() {
    return (
        <>
            <Head>
                <title>Pokedex | Contact</title>
            </Head>
            <center>
                <h2>Contact</h2>
                <div className={styles.filler}></div>
            </center>
        </>
    )
}