import styles from "../styles/contact.module.css"
import Head from 'next/head'
import Footer from "../components/Footer"

export default function Contact() {
    return (
        <>
            <Head>
                <title>Pokedex | Contact</title>
            </Head>
            <center>
                <h2>Contact</h2>
                <div className={styles.footer}>
                    <Footer /></div>
            </center>
        </>
    )
}