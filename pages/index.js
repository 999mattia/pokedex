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
				<center>
					<h1>Pokedex</h1>
					<h2>Click the pokeball in the header to acces the menu</h2>
				</center>
				<div className={styles.footer}>
					<Footer />
				</div>

			</div>
		</>
	)


}

