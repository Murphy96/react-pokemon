import { combineReducers } from 'redux';
// import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

import { pokemons } from './pokemon';
import {Pokemon} from './pokeCard'
import { loadPokemon } from './loading';
import { typesOfPokemons } from './typesOfPokemons';
const rootReducer = (history)=> combineReducers({
  pokemons,
  Pokemon,
  loadPokemon,
  typesOfPokemons,
  router: connectRouter(history)
})

export default rootReducer;
