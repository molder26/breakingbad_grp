export const ADD_QUOTE = "ADD_QUOTE"; //esto es lo que utilizaremos como actions types ("son simplemente strings"), esto lo podemos hacer en archivo aparte(modularizar)
export const GET_CHARACTERS = "GET_CHARACTERS";
export const EMPTY_CHARACTERS = "EMPTY_CHARACTERS";
export const GET_CHARACTER_DETAIL = "GET_CHARACTER_DETAIL";
export const EMPTY_CHARACTER_DETAIL = "EMPTY_CHARACTER_DETAIL";
export const GET_EPISODES = "GET_EPISODES";
export const EMPTY_EPISODES = "EMPTY_EPISODES";
export const EMPTY_EPISODE_DETAIL = "EMPTY_EPISODE_DETAIL";
export const GET_EPISODE_DETAIL = "GET_EPISODE_DETAIL";
export const GET_DEATHS = "GET_DEATHS";
export const GET_DEATH_DETAIL = "GET_DEATH_DETAIL";
export const EMPTY_DEATH_DETAIL = "EMPTY_DEATH_DETAIL";
export const SET_PAGE = "SET_PAGE";
export const EMPTY_PAGE = "EMPTY_PAGE";

//================================AGREGAR UNA CITA (QUOTE)========================================//
export function addQuote(name) {
    return function (dispatch) {
        if (name) {
            return fetch(`http://localhost:3001/quote?name=${name}`) // https://www.breakingbadapi.com/api/quote/random Leer MUCHO la documentación de la API a utilizar, esto ahorra tiempo después
                .then((res) => res.json())
                .then((json) => {
                    dispatch({ type: ADD_QUOTE, payload: json[0] }); // Atentos a cómo tratar a los arrays, objetos, strings, etc
                });
        } else {
            return fetch("https://www.breakingbadapi.com/api/quote/random") // https://www.breakingbadapi.com/api/quote/random Leer MUCHO la documentación de la API a utilizar, esto ahorra tiempo después
                .then((res) => res.json())
                .then((json) => {
                    dispatch({ type: ADD_QUOTE, payload: json[0] }); // Atentos a cómo tratar a los arrays, objetos, strings, etc
                });
        }
    };
}

//==================================OBTENER TODOS LOS PERSONAJES (CHARACTERS)======================================//
// el resto de funciones creadoras de acciones serán similares..

export function getCharacters(query, pagina) {
    return function (dispatch) {
        return fetch(
            `http://localhost:3001/characters?name=${query}&pagina=${pagina}`
        ) // "https://www.breakingbadapi.com/api/characters?name="+query aca estaba el error que vimos en el repaso tenia mal puesta la url(tenia:https://www.breakingbadapi.com/characters?name="+query)
            .then((res) => res.json())
            .then((json) => {
                dispatch({ type: GET_CHARACTERS, payload: json }); //recordar que el dispatch lo que hace es enviar un objeto con la propiedad type y payload al reducer.
            });
    };
}

//==================================LIMPIEMOS EL ESTADO GLOBAL PARA MÁS PROLIJIDAD "pro"======================================//

export function emptyCharacters() {
    return function (dispatch) {
        dispatch({ type: EMPTY_CHARACTERS });
    };
}

//==================================OBTENER EL DETALLE DE UN PERSONAJE======================================//
export function getCharacterDetail(num) {
    return function (dispatch) {
        return fetch(
            `http://localhost:3001/characters/${num}` // `https://www.breakingbadapi.com/api/characters/${num}`
        )
            .then((res) => res.json())
            .then((json) => {
                dispatch({ type: GET_CHARACTER_DETAIL, payload: json[0] });
            });
    };
}

//==================================LIMPIEMOS EL ESTADO GLOBAL PARA MÁS PROLIJIDAD "pro"======================================//

export function emptyCharacterDetail(num) {
    return function (dispatch) {
        dispatch({ type: EMPTY_CHARACTER_DETAIL });
    };
}

//===============================OBTENEMOS LOS EPISODIOS DE LA API=========================================//

export function getEpisodes(query, pagina) {
    return function (dispatch) {
        return fetch(
            `http://localhost:3001/episodes?name=${query}&pagina=${pagina}` // "http://localhost:3001/episodes"
        )
            .then((res) => res.json())
            .then((json) => {
                dispatch({ type: GET_EPISODES, payload: json });
            });
    };
}

//==================================LIMPIEMOS EL ESTADO GLOBAL PARA MÁS PROLIJIDAD "pro"======================================//

export function emptyEpisodes() {
    return function (dispatch) {
        dispatch({ type: EMPTY_EPISODES });
    };
}

// todo lo que exportamos de acciones, NO son default, por lo que se deberán "destructurar" en el Reducer!, paso 2 posterior a la acción.

//==================================LIMPIEMOS EL ESTADO GLOBAL PARA MÁS PROLIJIDAD "pro"======================================//
export function emptyEpisodeDetail(num) {
    return function (dispatch) {
        dispatch({ type: EMPTY_EPISODE_DETAIL });
    };
}

//==================================OBTENER EL DETALLE DE UN EPISODIO ======================================//
export function getEpisodeDetail(num) {
    return function (dispatch) {
        return fetch(
            `http://localhost:3001/episodes/${num}` // `https://www.breakingbadapi.com/api/episodes/${num}`
        )
            .then((res) => res.json())
            .then((json) => {
                dispatch({ type: GET_EPISODE_DETAIL, payload: json[0] });
            });
    };
}

//===============================OBTENEMOS LOS deaths DE LA API=========================================//

export function getDeaths() {
    return function (dispatch) {
        return fetch(
            `http://localhost:3001/deaths` // "http://localhost:3001/episodes"
        )
            .then((res) => res.json())
            .then((json) => {
                dispatch({ type: GET_DEATHS, payload: json });
            });
    };
}

//===============================OBTENEMOS LOS detalles deaths DE LA API=========================================//

export function getDeathDetail(name) {
    return function (dispatch) {
        return fetch(
            `http://localhost:3001/deaths/${name}` // "http://localhost:3001/episodes"
        )
            .then((res) => res.json())
            .then((json) => {
                dispatch({ type: GET_DEATH_DETAIL, payload: json });
            });
    };
}

//==================================LIMPIEMOS EL ESTADO GLOBAL PARA MÁS PROLIJIDAD "pro"======================================//
export function emptyDeathDetail(name) {
    return function (dispatch) {
        dispatch({ type: EMPTY_DEATH_DETAIL });
    };
}

//================================== Establecer la pagina nueva ======================================//
export function setPage(page) {
    return function (dispatch) {
        dispatch({ type: SET_PAGE, payload: page });
    };
}

export function emptyPage() {
    return function (dispatch) {
        dispatch({ type: EMPTY_PAGE });
    };
}
