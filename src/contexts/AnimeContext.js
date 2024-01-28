import { createContext, useReducer, useEffect } from "react";
import { animeReducer } from "../reducers/AnimeReducer";

export const AnimeContext = createContext();

const AnimeContextProvider = (props) => {
    const [anime, dispatch] = useReducer(animeReducer, [], () => {
        const localData = localStorage.getItem("anime");
        return localData ? JSON.parse(localData) : []
    });

    useEffect(() => {
        localStorage.setItem("anime", JSON.stringify(anime));
    }, [anime])

    return (
        <AnimeContext.Provider value={{anime, dispatch}}>
            { props.children }
        </AnimeContext.Provider>
    )
}

export default AnimeContextProvider;



