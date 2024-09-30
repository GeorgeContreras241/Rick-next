"use client"
import styles from "./../styles/fetchCharacters.module.css"
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useState } from "react"

export const Fetch = ({ characters, filteredData, search }) => {
    const [firtsIndex, setFirtsIndex] = useState(0)
    const [lastIndex, setLastIndex] = useState(10)


    let filtered = characters.slice(firtsIndex, lastIndex)
    const disminuir = () => {
        if (firtsIndex > 0) {
            setLastIndex(lastIndex - 10)
            setFirtsIndex(firtsIndex - 10)
        } else {
            return
        }
    }
    const aumentar = () => {
        if (lastIndex < filteredData.length) {
            setLastIndex(lastIndex + 10)
            setFirtsIndex(firtsIndex + 10)
        } else {
            return
        }
    }
    return (
        <div className={styles.container__list}>
            <ul className={styles.flex__list}>
                {search == "" ? (<p className={styles.text__res} >Esperando Busqueda ...</p>) : filteredData.length == 0 ? <p className={styles.text__res}>No Encontramos a tus Protas</p> :
                    filtered.map((item) => (
                        <li key={item.id} className={styles.container__card}>
                            <img className={styles.img} src={item.image} alt={item.name} width={250} />
                            <div className={styles.container__text}>
                                <p className={styles.title}>{item.name}</p>
                                <div className={styles.text_flex__title}>
                                    <span>Estado</span>
                                    <span>Especie</span>
                                </div>
                                <div className={styles.text_flex}>
                                    <p>{item.status}</p>
                                    <p>{item.species}</p>
                                </div>
                                <div className={styles.origen}>
                                    <span>Origen</span>
                                    <p className={styles.location}>{item.origin.name}</p>
                                </div>
                            </div>
                        </li>
                    ))}
            </ul>
            {search !== ""?
                <div className={styles.container__bottuns}>
                    <button className={styles.container__bottuns_pagination} onClick={disminuir} disabled={firtsIndex <= 0 || filteredData.length == 0}><MdNavigateBefore className={styles.icon} /></button>
                    <button className={styles.container__bottuns_pagination} onClick={aumentar} disabled={lastIndex > filteredData.length || search == ""}><MdNavigateNext className={styles.icon} /></button>
                </div> : ""}

        </div>

    )
}
