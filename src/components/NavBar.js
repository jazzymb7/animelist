import { useContext } from "react";
import { AnimeContext } from "../contexts/AnimeContext";

const NavBar = () => {
    const { anime } = useContext(AnimeContext);
    return (
        <div className="navbar">
            <h1>Anime List Jazzy</h1>
            <p>Current watching streak is {anime.length}.</p>
        </div>
    );
}

export default NavBar;