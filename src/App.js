import React from 'react'
import './App.css'
import { Redirect, Route, Switch } from 'react-router-dom';
import pokeList from './containers/pokemonList'
import pokeCard from './containers/pokeCard';
import HomeScreen from './components/Home/HomeScreen';
import NavBar from './components/layout/NavBar';
import typesOfPokemons from './containers/typesOfPokemons';
import TypesOfPokemonsScreen from './components/pokemon/TypesOfPokemons/TypesOfPokemonsScreen';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path='/poke-list/:id' component={ pokeList } />
        <Route path='/pokemon/:pokemonIndex' component={ pokeCard } />
        <Route path='/type-of-pokemons/:typePokemon' component={ typesOfPokemons } />
        <Route path='/type-of-pokemons' component={ TypesOfPokemonsScreen } />
        <Route path='/' component={ HomeScreen } />
        <Redirect to='/'/>
      </Switch>
    </div>
  )
}
export default App;
