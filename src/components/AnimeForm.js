import { useContext, useState } from "react";
import { AnimeContext } from "../contexts/AnimeContext";

const AnimeForm = () => {
    const { dispatch } = useContext(AnimeContext);
    const [title, setTitle] = useState("");
    const [animeRating, setAnimeRating] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "ADD_ANIME", anime: {title, animeRating}});
        setTitle("");
        setAnimeRating("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Anime Title..." value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="number" placeholder="Anime Rating..." value={animeRating} onChange={(e) => setAnimeRating(e.target.value)} min="0" max="10" required />
            <input type="submit" value="Add Anime" />
        </form>
    )

}

export default AnimeForm;