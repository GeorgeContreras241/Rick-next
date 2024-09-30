export default async function fetchCharacters(){
    let characters = []
    let numberPage = 1
    let stateWhile = true 

    while (stateWhile) {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${numberPage}`)
        const data = await res.json()
        characters = [...characters, ...data.results ]
        numberPage++;

        stateWhile = data.info.next !== null
    }
    return characters
}