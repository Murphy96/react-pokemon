import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'
import { history } from "./store/configure_store";
import pokeList from './containers/pokemonList'
import pokeCard from './containers/pokeCard';

ReactDOM.render(
  <Provider store={store}>
            <ConnectedRouter history={history}>
               {/* <App></App>*/}
               <Switch>
                  <Route path='/poke-List/:id' component={pokeList}/>
                  <Route path='/pokemon/:pokemonIndex' component={pokeCard}/>
                  
              </Switch>
            </ConnectedRouter>    
  </Provider>, document.getElementById('root')
);
reportWebVitals()