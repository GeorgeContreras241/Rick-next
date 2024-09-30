import { Search } from "../../components/Search";
import fetchCharacters from "../../utils/fetchCharacters";

export default async function characters() {
    const characters = await fetchCharacters()
    
    return (
       <div>
        <Search characters={characters}></Search>
        
        
       </div>
    )
}