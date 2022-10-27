export async function getAll() {
    let pokemon = []

    for (let i = 1; i <= 151; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        const data = await res.json();
        pokemon[i - 1] = data
        console.log(i)
    }

    return pokemon
}