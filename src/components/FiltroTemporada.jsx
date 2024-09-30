"use client"
import React, { useContext } from 'react'
import { AcontextPagination } from '../contexts/PaginationProvider'
import styles from "./../styles/fetchEpisodes.module.css"

export const FiltroTemporada = () => {
    const {setEpisode} = useContext(AcontextPagination)

  return (
    <div className={styles.container__season}>
        <button className={styles.button__season} onClick={()=>setEpisode("S01")}>Temporada 1</button>
        <button className={styles.button__season} onClick={()=>setEpisode("S02")}>Temporada 2</button>
        <button className={styles.button__season} onClick={()=>setEpisode("S03")}>Temporada 3</button>
        <button className={styles.button__season} onClick={()=>setEpisode("S04")}>Temporada 4</button>
        <button className={styles.button__season} onClick={()=>setEpisode("S05")}>Temporada 5</button>
    </div>
  )
}