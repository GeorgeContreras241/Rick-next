"use client"
import React, { useState } from 'react'
import styles from "./../styles/navegation.module.css"
import Link from 'next/link'
import { Dancing_Script } from 'next/font/google'

export const roboto = Dancing_Script({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})



export const Navegation = () => {
    const [menu, setMenu] = useState(false)
    const handleMenu = () => {
        menu == "" ? setMenu("open") : setMenu("")
    }
    const handleHiden = () => {
        if (menu == "") {
            setMenu(true)
        }else{
            setMenu(false)
        }
        
    }
    return (
        <>
            <nav className='navegation'>
                <div className={styles.title}>
                    <p className={roboto.className}>Rick and Morty</p>
                </div>
                <ul className="nav__ul">
                    <li>
                        <Link href="/">Inicio</Link>
                    </li>
                    <li>
                        <Link href="/characters">Personajes</Link>
                    </li>
                    <li>
                        <Link href="/episodes">Episodios</Link>
                    </li>
                    <li>
                        <Link href="">Exit</Link>
                    </li>
                </ul>
                <div className='hidden__menu'>
                    <div onClick={handleMenu} className={`menu-toggle ${menu?"open":""}`}>
                        <i></i>
                    </div>
                </div>

            </nav>
            
            <div className={`menu__desplegable ${menu?"open":""}`} >
                <ul>
                    <li>
                        <Link className={styles.link__isActive} href="/">Inicio</Link>
                    </li>
                    <li>
                        <Link href="/characters">Personajes</Link>
                    </li>
                    <li>
                        <Link href="/episodes">Episodios</Link>
                    </li>
                    <li>
                        <Link className={styles.link} href="">Exit</Link>
                    </li>
                </ul>
            </div>
        </>
    ) 
}