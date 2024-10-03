"use client"
import characters from "@/app/characters/page"
import styles from "./../styles/fetchCharacters.module.css"
import { useContext } from "react"
import { AcontextPagination } from "@/contexts/PaginationProvider"


export const Fetch = ({characters,info}) => {
    const {setUrl} = useContext(AcontextPagination)

    const fetchNextPage = (info) => {
        if (info.next !== null) {
          setUrl(info.next)
          
        }
      }
      const fetchLastPage = (info) => {
        if (info.prev !== null) {
          setUrl(info.prev)
        }
      }
    return (
        <div className={styles.container__list}>
            <ul>
                {
                    characters.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))
                }
            </ul>
            <button onClick={()=> fetchLastPage(info)}>disminuir</button>
            <button onClick={()=> fetchNextPage(info)}>aumentar</button>
        </div>

    )
}
