import { RANDOM_POKEMONS } from '../types/randomPokemons';

export const defaultPokemons = {   
  name: '',
  Url:'',
  pokemones: []
};

export const randomPoke = (state = {...defaultPokemons}, action) => {
  console.log('REDUCER RANDOM POKEMONS', action);
  if (action.type === RANDOM_POKEMONS) {
    
    return {...state, pokemones: action.pokemones}
  }
  return state;
}
