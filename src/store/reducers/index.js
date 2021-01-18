import { combineReducers } from 'redux';
// import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { pokemons } from './pokemon';
import {Pokemon} from './pokeCard'
import { loadPokemon } from './loading';
import { typesOfPokemons } from './typesOfPokemons';

import {randomPoke} from './randomPokemons';
import {NewPokemon} from './newPoke';
const rootReducer = (history)=> combineReducers({
  pokemons,
  Pokemon,
  loadPokemon,
  typesOfPokemons,
  randomPoke,
  NewPokemon,

  router: connectRouter(history)

})

export default rootReducer;
