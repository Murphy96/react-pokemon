import * as TYPES from '../types/pokemon';


export const defaultPokemons = {   
    name: '',
    Url:'',
    pokemones: []
  };

export const pokemons = (state = {...defaultPokemons}, action) => {
    switch (action.type) {
        case TYPES.GET_POKEMONS:
           // console.log(action.pokemones)
            return {...state, pokemones: action.pokemones}
        case TYPES.LOAD_POKEMONS:
                // console.log(action.pokemones)
            return {...state, pokemones: action.pokemones}    
        default:
            return state;
    }
}
