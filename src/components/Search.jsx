"use client"
import React, { useContext, useState } from 'react'
import { AcontextPagination } from '../contexts/PaginationProvider'
import { Fetch } from './FetchCharacters'
import styles from "./../styles/navegation.module.css"

export const Search = ({characters}) => {
    const {search, setSearch} = useContext(AcontextPagination)
    const filteredData = characters.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase()))
    
    const handleSearch = (e) => {
        setSearch(e.target.value)
        
    }
    const onSubmit = (e) => {
        e.preventDefault()
    }
    

    return (
        <div className={styles.container__characters}>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder='Nombre Personaje'
                    value={search}
                    onChange={handleSearch}
                    className={styles.characters__input}
                />
            </form>
            <Fetch characters={filteredData} filteredData={filteredData} search={search}></Fetch>
            
        </div>
    )
}
