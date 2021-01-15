import { FETCH_TYPES_POKEMONS_FAILURE, FETCH_TYPES_POKEMONS_REQUEST, FETCH_TYPES_POKEMONS_SUCCESS } from "../types/typesOfPokemons";


const initialState = {
    loading: false,
    typesOfPokemons: [],
    error: '',
}


export const typesOfPokemons = ( state = initialState, action ) => {
    switch (action.type) {
        case FETCH_TYPES_POKEMONS_REQUEST:
            return{
                ...state,
                loading: true,
            }
        case FETCH_TYPES_POKEMONS_SUCCESS:
            return {
                loading: false,
                typesOfPokemons: action.typesOfPokemons,
                error: '',
            }
        case FETCH_TYPES_POKEMONS_FAILURE:
            return {
                loading: false,
                typesOfPokemons: [],
                error: action.error
            }
        default:
            return state;
    }
}