import { LOADING_PAGE_FAILURE, LOADING_PAGE_REQUEST, LOADING_PAGE_SUCCESS } from '../types/loading';

const initialState = {
    loading: false,
    error: '',
}
export const loadPokemon = ( state = initialState , action ) =>{    
    switch ( action.type ) {
        case LOADING_PAGE_REQUEST:
            return{
                loading: true,
                error: '',
            }
        case LOADING_PAGE_SUCCESS:
            return {
                loading: false,
                error: '',
            }
        case LOADING_PAGE_FAILURE:
            return {
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}