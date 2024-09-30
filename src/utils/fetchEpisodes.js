export async function apiCallEpisodes() {
    let continueFetch = true
    let temp = 1
    let episodios = []

    while (continueFetch) {
        const res = await fetch(`https://rickandmortyapi.com/api/episode?page=${temp}`)
        const data = await res.json()
        episodios = [...episodios, ...data.results]
        temp++;
        continueFetch = data.info.next !== null
    }
    return episodios
}