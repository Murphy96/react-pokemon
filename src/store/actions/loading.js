import { LOADING_PAGE_FAILURE, LOADING_PAGE_REQUEST, LOADING_PAGE_SUCCESS } from '../types/loading';

export const loadPokemonRequest = () => {
    return {
        type: LOADING_PAGE_REQUEST,
    }
}
export const loadPokemonSuccess = () => {
    return {
        type: LOADING_PAGE_SUCCESS,
    }
}
export const loadPokemonFailure = ( error ) => {
    return {
        type: LOADING_PAGE_FAILURE,
        error

    }
}

