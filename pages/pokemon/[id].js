import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { getByName } from '../../utils/pokeApi';
import styles from "../../styles/[id].module.css"
import getColorByType from "../../utils/colorType"

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
            <center><div className={styles.container} style={{ borderColor: color }}><h2>{pokemon.name}</h2> {pokemon.id} </div></center> : null}</>)
}