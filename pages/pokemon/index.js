import Head from "next/head";
import { useEffect, useState } from "react";
import { getAll } from "../../utils/pokeApi";
import Pokemon from "../../components/Pokemon";
import styles from "../../styles/AllPokemon.module.css"
import Footer from "../../components/Footer"

export default function AllPokemon({ pokemon }) {
  const [pokemonToRender, setPokemonToRender] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const filterPokemon = () => {
      if (query.trim() === "") {
        setPokemonToRender(pokemon);
      } else {
        const filtered = pokemon.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(query.toLowerCase())

        );
        setPokemonToRender(filtered);
      }
    };
    filterPokemon();
  }, [query, pokemon]);

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    setQuery(value);
  };

  return (
    <>
      <Head>
        <title>Pokedex | All</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <center>
          <input
            className={styles.searchbar}
            onChange={handleChange}
            type="text"
            name="query"
            placeholder="Search Product"
            value={query}
          ></input>
          {pokemonToRender.map((i) => {
            return <Pokemon key={i.name} name={i.name} type={i.types[0].type.name} img={i.sprites.front_default} />;
          })}
          <div className={styles.footer}>
            <Footer />
          </div>
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