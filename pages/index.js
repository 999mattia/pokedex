import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from "../components/Footer"

export default function Home({ }) {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>

        <div className={styles.footer}>
          <Footer />
        </div>\

      </div>
    </>
  )


}

