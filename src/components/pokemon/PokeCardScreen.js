import React from 'react';
import PokeCard from './PokeCard';

const PokeCardScreen = ({ Pokemon, getPokemon, loadPokemon, loadPokemonError }) => {

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <PokeCard Pokemon={Pokemon} getPokemon={getPokemon} loadPokemon={loadPokemon} loadPokemonError={loadPokemonError} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default PokeCardScreen;
