"use client";
import { createContext, useState } from "react";
import characters from "./../utils/fetchCharacters";


export const AcontextPagination = createContext(null);

export const PaginationProvider = ({ children }) => {
  const [inicio, setInicio] = useState(0);
  const [fin, setFin] = useState(20);
  const [search, setSearch] = useState("")
  const [episode, setEpisode] = useState("S01")

  
  

  return (
    <AcontextPagination.Provider 
    value={{ inicio, fin, setInicio, setFin,search,setSearch,episode,setEpisode}}>
      {children}
    </AcontextPagination.Provider>
  );
};