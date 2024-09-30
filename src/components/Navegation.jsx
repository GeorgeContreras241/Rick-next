"use client"
import React from 'react'
import styles from "./../styles/navegation.module.css"
import Link from 'next/link'




export const Navegation = () => {

    return (
        <nav className={styles.navegation}>
            <div className={styles.rick}>
                Rick and Morty
            </div>
            <ul className={styles.ul}>
                <li>
                    <Link className={styles.link__isActive} href="/">Inicio</Link>
                </li>
                <li>
                    <Link  href="/characters">Personajes</Link>
                </li>
                <li>
                    <Link href="/episodes">Episodios</Link>
                </li>
                <li>
                    <Link className={styles.link} href="">Exit</Link>
                </li>
            </ul>
        </nav>
    )
}