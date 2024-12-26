"use client"
import { useContext} from 'react'
import { AcontextPagination } from '../contexts/PaginationProvider'
import styles from "@/styles/search.module.css"
import { useFetchCharacters } from '@/hooks/useFetchCharacters'
import { Fetch } from './FetchCharacters'
import { CiSearch } from "react-icons/ci";

export const Search = () => {
    const { url, setUrl, search, setSearch } = useContext(AcontextPagination)

    const { characters, info } = useFetchCharacters(url)
    
    const handleSearch = (e) => {
        const value = e.target.value
        setSearch(value)
        setUrl(`https://rickandmortyapi.com/api/character/?page=1&name=${value}`)
    }
  

    return (
        <div className={styles.container__characters}>
            <form>
                <input 
                    type="text" 
                    placeholder="Nombre Personaje"
                    value={search}
                    onChange={handleSearch}
                    className={styles.characters__input}
                />
            </form>
            <Fetch characters={characters} info={info}></Fetch>
        </div>
    )
}
