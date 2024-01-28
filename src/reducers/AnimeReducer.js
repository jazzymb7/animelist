import { v4 as uuidv4 } from 'uuid';

export const animeReducer = (state, action) => {
    switch(action.type) {
        case "ADD_ANIME":
            return [...state, {
                title: action.anime.title,
                animeRating: action.anime.animeRating,
                id: uuidv4()
            }]
        case "REMOVE_ANIME":
            return state.filter(anime => anime.id !== action.id)
        default:
            return state;
    }
}