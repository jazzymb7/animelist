import { useContext } from "react";
import { AnimeContext } from "../contexts/AnimeContext";
import AnimeDetails from "./AnimeDetails";

const AnimeList = () => {
    const { anime } = useContext(AnimeContext);
    return anime.length ? (
        <div className="anime-list">
            <ul>
                {
                    anime.map(anime => {
                        return ( <AnimeDetails anime={anime} key={anime.id} />)
                    })
                }
            </ul>
        </div>
    ) : (
        <div className="empty">No Anime to watch</div>
    )
}

export default AnimeList;