"use client"
import React, { useContext, useState } from 'react'
import { AcontextPagination } from '../contexts/PaginationProvider'
import styles from "./../styles/navegation.module.css"
import { useFetchCharacters } from '@/hooks/useFetchCharacters'
import { Fetch } from './FetchCharacters'

export const Search = () => {
    const { url, setUrl, search, setSearch } = useContext(AcontextPagination)

    const { characters, info } = useFetchCharacters(url)
    
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    const onSubmit = (e) => {
        setUrl(`https://rickandmortyapi.com/api/character/?page=1&name=${search}`)
        e.preventDefault()
        
    }

    return (
        <div className={styles.container__characters}>
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    placeholder="Nombre Personaje"
                    value={search}
                    onChange={handleSearch}
                    className={styles.characters__input}
                />
                <button>buscar</button>
            </form>
            <Fetch characters={characters} info={info}></Fetch>
        </div>
    )
}
