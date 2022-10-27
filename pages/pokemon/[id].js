import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { getByName } from '../../utils/pokeApi';
import styles from "../../styles/[id].module.css"
import getColorByType from "../../utils/colorType"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function PokemonDetails() {
    const router = useRouter();
    const { id } = router.query;

    const [pokemon, setPokemon] = useState(null)
    const [color, setColor] = useState("transparent")

    useEffect(() => {
        const getPokemon = async () => {
            let res = await getByName(id)
            setPokemon(res)
        }
        if (id != undefined) {
            getPokemon()
        }
    }, [id])

    useEffect(() => {
        if (pokemon != null) {
            setColor(getColorByType(pokemon.types[0].type.name))
        }
    }, [pokemon])

    return (<>
        {pokemon ?
            <center><div className={styles.container} style={{ borderColor: color }}><h2>{pokemon.name}</h2> <h4>type: {pokemon.types[0].type.name}</h4> <h4>height: {pokemon.height}</h4> <h4>weight: {pokemon.weight}</h4>
                <Carousel showStatus={false} showThumbs={false}>
                    <div>
                        <img src={pokemon.sprites.front_default} />
                        <p className="front"></p>
                    </div>
                    <div>
                        <img src={pokemon.sprites.back_default} />
                        <p className="back"></p>
                    </div>

                </Carousel></div></center> : null}</>)
}