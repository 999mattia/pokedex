import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from "../components/Footer"
import { useState, useEffect } from 'react'
import { getById } from '../utils/pokeApi'
import Link from 'next/link'

export default function Home() {
	const [pokemon, setPokemon] = useState(null)

	const getRandomImage = async () => {
		let id = Math.round(Math.random() * (151 - 1) + 1);

		let pokemon = await getById(id)

		setPokemon(pokemon)
	}

	useEffect(() => {
		getRandomImage()
	}, [])

	useEffect(() => {
		const interval = setInterval(() => {
			getRandomImage()
		}, 3000);
		return () => clearInterval(interval);
	}, [])

	return (
		<>
			<Head>
				<title>Pokedex</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.container}>
				<h1>Welcome to Pokedex</h1>
				<h2>Click the pokeball in the header to acces the menu</h2>
				{pokemon != null &&
					<Link href={`/pokemon/${pokemon.name}`}>
						<div className={styles.imgContainer}>
							<img src={pokemon.sprites.front_default} className={styles.img} />
						</div>
					</Link>}
				<div className={styles.footer}>
					<Footer />
				</div>

			</div >
		</>
	)


}

