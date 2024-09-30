import { FetchEpisode } from "../../components/FetchEpisodes";
import { FiltroTemporada } from "../../components/FiltroTemporada";
import { apiCallEpisodes } from "../../utils/fetchEpisodes";
import styles from "./../../styles/fetchEpisodes.module.css"

export default async function Episodios() {
  const episodios = await apiCallEpisodes()

  return (
    <div className={styles.container__episodes}>
      <h1>Rick and Morty Seasons</h1>
      <FiltroTemporada></FiltroTemporada>
      <FetchEpisode episodios={episodios}></FetchEpisode>
    </div>
  )
}