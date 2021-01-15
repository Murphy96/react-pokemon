import { getData } from "../../config/datasets"
import { SERVER } from "../../config/server_conf"
import { FETCH_TYPES_POKEMONS_FAILURE, FETCH_TYPES_POKEMONS_REQUEST, FETCH_TYPES_POKEMONS_SUCCESS } from "../types/typesOfPokemons"

export const fetchTypesOfPokemonsRequest = () => {
    return {
        type: FETCH_TYPES_POKEMONS_REQUEST,
    }
}
export const fetchTypesOfPokemonsSuccess = ( typesOfPokemons ) => {
    return {
        type: FETCH_TYPES_POKEMONS_SUCCESS,
        typesOfPokemons
    }
}

export const fetchTypesOfPokemonsFailure = ( error ) => {
    return {
        type: FETCH_TYPES_POKEMONS_FAILURE,
        error
    }
}


export const getPokemonsByType = ( typePokemon ) => {
    return async ( dispatch ) => {
        dispatch(fetchTypesOfPokemonsRequest())
        await getData(SERVER.URL_TYPE(typePokemon),null)
            .then( response => (
                dispatch(fetchTypesOfPokemonsSuccess(response))
            ) )
            .catch( error => (
                dispatch(fetchTypesOfPokemonsFailure(error))
            ))
    }
}