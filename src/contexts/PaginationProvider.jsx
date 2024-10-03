"use client";
import { createContext, useState } from "react";

export const AcontextPagination = createContext(null);

export const PaginationProvider = ({ children }) => {
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character/?page=1")
  const [search, setSearch] = useState("")
  const [episode, setEpisode] = useState("S01")

  return (
    <AcontextPagination.Provider
      value={{ url, setUrl, search, setSearch, episode, setEpisode}}>
      {children}
    </AcontextPagination.Provider>
  );
};