"use client"
import { useContext } from 'react'
import { AcontextPagination } from '../contexts/PaginationProvider'
import styles from "./../styles/fetchEpisodes.module.css"

export const FetchEpisode = ({ episodios }) => {
    const { episode } = useContext(AcontextPagination)

    const filtered = episodios.filter((item) => item.episode.includes(episode))
    return (
        <ul className={styles.container__ul}>
            {
                filtered.map((item) => (
                    <details key={item.id}>
                        <summary>{item.episode} : {item.name}</summary>
                        <p className={styles.list__li} key={item.id}>{item.name}<span>. En aire desde el: {item.air_date}</span></p>
                        
                        
                    </details>
                ))
            }
        </ul>
    )
}
