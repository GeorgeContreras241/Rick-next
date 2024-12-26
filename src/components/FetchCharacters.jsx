"use client"
import styles from "./../styles/fetchCharacters.module.css"
import { useContext } from "react"
import { AcontextPagination } from "@/contexts/PaginationProvider"
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";



export const Fetch = ({ characters, info }) => {
  const { setUrl } = useContext(AcontextPagination)

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
    <>
      <section className={styles.character__profile}>
        <div className={styles.character__container}>
          {
            characters.map((item) => (
              <div className={styles.character__card} key={item.id}>
                <div class={styles.character__image}>
                  <img src={item.image} alt={item.name} className={styles.image}></img>
                </div>
                <article class={styles.character__info}>
                  <h3>{item.name}</h3>
                  <div className={styles.character__info__state}>
                    <span className={item.status !== "Alive" ? styles.span__status : `${styles.span__status} ${styles.live}`}></span>
                    <span className={styles.span__info}>{item.status} - {item.species}</span>
                  </div>
                  <p>Last known location:</p>
                  <span>{item.origin.name}</span>
                  <p>First seen in:</p>
                  <span>{item.location.name}</span>
                </article>
              </div>
            ))
          }
        </div>
      </section>
      <div className={styles.navegation__buttons}>
        <button onClick={() => fetchLastPage(info)}><GrFormPrevious className={styles.navegation__icons}/></button>
        <button onClick={() => fetchNextPage(info)}><MdOutlineNavigateNext className={styles.navegation__icons}/></button>
      </div>
    </>

  )
}
