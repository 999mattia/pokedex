import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { getAll } from '../utils/pokeApi'


export default function Home({ pokemon }) {
  //const [pokemon, setPokemon] = useState([])

  // useEffect(() => {
  //   const getPokemon = async () => {
  //     const pokemon = await getAll();
  //     setPokemon(pokemon)
  //   }

  //   getPokemon()
  // }, [])

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        {
          pokemon.map((i) => {
            return (
              <>
                <h2>{i.name}</h2>
                <img src={i.sprites.front_default} />
              </>
            )
          })
        }
      </div>
    </>
  )


}

export async function getStaticProps() {
  const pokemon = await getAll()

  return {
    props: {
      pokemon,
    }
  }
}
