import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux'
import { history } from "./store/configure_store";
import pokeList from './containers/pokemonList'
import pokeCard from './containers/pokeCard';
import pokemonvs from './containers/pokemonvs';
import store from './store'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <Provider store={store}>
            <ConnectedRouter history={history}>
              <App></App>
               <Switch>
                  <Route path='/poke-List/:id' component={pokeList}/>
                  <Route path='/pokemon/:pokemonIndex' component={pokeCard}/>
                  <Route path='/pokemonvs/:id' component={pokemonvs}/>
                  
              </Switch>
            </ConnectedRouter>    
  </Provider>, document.getElementById('root')
);
reportWebVitals()