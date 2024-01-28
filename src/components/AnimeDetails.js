import { useContext } from "react";
import { AnimeContext } from "../contexts/AnimeContext";

const AnimeDetails = ({ anime }) => {
    const { dispatch } = useContext(AnimeContext);
    return (
        <li onClick={() => dispatch({type: "REMOVE_ANIME", id: anime.id})}>
            <div className="title">{anime.title}</div>
            <div className="rating">{anime.animeRating}</div>
        </li>
    )
}

export default AnimeDetails;