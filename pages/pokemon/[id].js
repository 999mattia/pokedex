import { useEffect, useState } from 'react';
import { getByName, getAll } from '../../utils/pokeApi';
import styles from "../../styles/[id].module.css"
import getColorByType from "../../utils/colorType"



export default function PokemonDetails({ pokemon }) {
    const [color, setColor] = useState("transparent")
    const [image, setImage] = useState(1)

    useEffect(() => {
        if (pokemon != null) {
            setColor(getColorByType(pokemon.types[0].type.name))
        }
    }, [pokemon])

    const changeImage = () => {
        if (image == 1) {
            setImage(2)
        } else {
            setImage(1)
        }
    }

    return (<>
        {pokemon ?
            <center><div className={styles.container} style={{ borderColor: color }}><h2>{pokemon.name}</h2> <h4>type: {pokemon.types[0].type.name}</h4> <h4>height: {pokemon.height}</h4> <h4>weight: {pokemon.weight}</h4>
                {image == 1 ? <a onClick={() => changeImage()}>
                    <img src={pokemon.sprites.front_default} className={styles.img} />
                    <p className="front"></p>
                </a> : <a onClick={() => changeImage()}>
                    <img src={pokemon.sprites.back_default} className={styles.img} />
                    <p className="back"></p>
                </a>}
                (Click on image to switch image)
            </div></center> : null}</>)
}

export const getStaticPaths = async () => {
    const data = await getAll()

    const paths = data.map(pokemon => {
        return {
            params: { id: pokemon.name }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const data = await getByName(id)

    return {
        props: { pokemon: data }
    }
}