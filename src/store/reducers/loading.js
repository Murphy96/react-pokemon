import { LOAD_POKEMONS } from "../types/pokemon";
const initialState = {
    loading: false,
    error: '',
}
export const loadPokemon = ( state = initialState , action ) =>{
    switch ( action.type ) {
        case LOAD_POKEMONS:
            return{
                loading: true,
                error: '',
            }
        default:
            return state;
    }
}