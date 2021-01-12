import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

import { pokemons } from './pokemon';
import {Pokemon} from './pokeCard'

const rootReducer = (history)=> combineReducers({
  pokemons,Pokemon,
  router: connectRouter(history)
})

export default rootReducer;
