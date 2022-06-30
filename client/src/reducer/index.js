import {
    ADD_QUOTE,
    GET_CHARACTERS,
    EMPTY_CHARACTERS,
    GET_CHARACTER_DETAIL,
    EMPTY_CHARACTER_DETAIL,
    GET_EPISODES,
    EMPTY_EPISODES,
    EMPTY_EPISODE_DETAIL,
    GET_EPISODE_DETAIL,
    GET_DEATHS,
    GET_DEATH_DETAIL,
    EMPTY_DEATH_DETAIL
} from "../actions/index";

const initialState = {
    //este es nuestro estado global, aca definimos las propiedades que vamos a utilizar para manejar nuestros estados.
    quote: {},
    characters: [],
    characterDetail: {},
    episodes: [],
    episodeDetail: {},
    deaths: [],
    deathDetail: {},
    page: 0,
};

function rootReducer(state = initialState, action) {
    // acá reducimos las acciones que despachamos a una sola
    if (action.type === ADD_QUOTE) {
        return {
            ...state, //spread operator (recomendamos aprender al máximo ES6, es la única clase importante de la primera semana para ustedes)
            quote: action.payload,
        };
    }
    if (action.type === GET_CHARACTERS) {
        return {
            ...state,
            characters: action.payload,
        };
    }
    if (action.type === EMPTY_CHARACTERS) {
        return {
            ...state,
            characters: [],
        };
    }
    if (action.type === GET_CHARACTER_DETAIL) {
        return {
            ...state,
            characterDetail: action.payload,
        };
    }
    if (action.type === EMPTY_CHARACTER_DETAIL) {
        return {
            ...state,
            characterDetail: {},
        };
    }
    if (action.type === GET_EPISODES) {
        return {
            ...state,
            episodes: action.payload,
        };
    }
    if (action.type === EMPTY_EPISODES) {
        return {
            ...state,
            episodes: [],
        };
    }
    if (action.type === EMPTY_EPISODE_DETAIL) {
        return {
            ...state,
            episodeDetail: {},
        };
    }
    if (action.type === GET_EPISODE_DETAIL) {
        return {
            ...state,
            episodeDetail: action.payload,
        };
    }
    if (action.type === GET_DEATHS) {
        return {
            ...state,
            deaths: action.payload,
        };
    }
    if (action.type === GET_DEATH_DETAIL) {
        return {
            ...state,
            deathDetail: action.payload,
        };
    }
    if (action.type === EMPTY_DEATH_DETAIL) {
        return {
            ...state,
            deathDetail: {},
        };
    }

    return state; //recordar poner un caso default para evitar errores
}

export default rootReducer; // exportamos la función que vamos a recibir en el store, recuerden que debe ser el mismo nombre!
