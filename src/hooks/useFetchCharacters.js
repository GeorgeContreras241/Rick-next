"use client"
import { useEffect, useState } from "react"

export const useFetchCharacters = (url) => {
    const [characters, setCharacters] = useState([])
    const [info, setInfo] = useState({})
    const fetchCharacters = async(url) =>{
        try {
            const res = await fetch(url)
            const data = await res.json()
            setCharacters(data.results || [])
            setInfo(data.info || {})
        } catch (error) {
            console.log(error.error)
        }
    }
    useEffect(() => {
      fetchCharacters(url)
    }, [url])
    
   return {
        characters, info
   }
 }
 