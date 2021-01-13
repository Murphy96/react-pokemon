import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom';
import pokeList from './containers/pokemonList'
import pokeCard from './containers/pokeCard';
import HomeScreen from './components/Home/HomeScreen';
import NavBar from './components/layout/NavBar';

const App = () => {
  return (
    <div>
      <div>

      </div>
      <NavBar />
      <Switch>
        <Route path='/poke-list/:id' component={ pokeList } />
        <Route path='/pokemon/:pokemonIndex' component={ pokeCard } />
        <Route path='/' component={HomeScreen} />
      </Switch>
    </div>
  )
}
export default App;
