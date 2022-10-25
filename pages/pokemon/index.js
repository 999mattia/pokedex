import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import { getAll } from "../../utils/pokeApi";
import Pokemon from "../../components/Pokemon";

export default function AllPokemon({ pokemon }) {
  // const pokemon = [
  //   {
  //     name: "Glumanda",
  //     type: "fire",
  //     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  //   },
  //   {
  //     name: "Glumanda",
  //     type: "fire",
  //     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  //   },
  //   {
  //     name: "Glumanda",
  //     type: "fire",
  //     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  //   },
  //   {
  //     name: "Glumanda",
  //     type: "fire",
  //     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  //   },
  //   {
  //     name: "Glumanda",
  //     type: "fire",
  //     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  //   },
  //   {
  //     name: "Glumanda",
  //     type: "fire",
  //     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  //   },
  //   {
  //     name: "Glumanda",
  //     type: "fire",
  //     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  //   },
  //   {
  //     name: "Glumanda",
  //     type: "fire",
  //     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  //   },
  //   {
  //     name: "Glumanda",
  //     type: "fire",
  //     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  //   },
  //   {
  //     name: "Glumanda",
  //     type: "fire",
  //     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  //   },
  // ];

  return (
    <>
      <Head>
        <title>Pokedex | All</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <center>
          {pokemon.map((i) => {
            return <Pokemon key={i.name} name={i.name} type={i.types[0].type.name} img={i.sprites.front_default} />;
          })}
        </center>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const pokemon = await getAll()

  return {
    props: {
      pokemon,
    }
  }
}
