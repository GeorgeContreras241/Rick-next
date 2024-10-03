
import { Fetch } from "@/components/FetchCharacters";
import { Search } from "../../components/Search";
import fetchCharacters from "../../utils/useFetchCharacters";
import { useContext } from "react";
import { AcontextPagination } from "@/contexts/PaginationProvider";

export default async function characters() {
    
    return (
       <div>
        <Search></Search>
        
       </div>
    )
}