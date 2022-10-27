export async function getAll() {
    let pokemon = []

    for (let i = 1; i <= 15; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        const data = await res.json()
        pokemon[i - 1] = data
    }

    return pokemon
}

export async function getByName(name) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await res.json()
    return data
}