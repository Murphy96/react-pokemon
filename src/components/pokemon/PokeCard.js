import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { history } from '../../store/configure_store'
import TypePokemon from './TypePokemon';
import PokemonPowerList from './PokemonPowerList';
import LoadingScreen from '../Loading/LoadingScreen';
import { LIMIT_OF_POKEMON } from '../../config/constants';


const PokeCard = ({ Pokemon, getPokemon, loadPokemon, loadPokemonError }) => {

  let { pokemonIndex } = useParams();

  useEffect(() => {
    if ((!isNaN(pokemonIndex) && (pokemonIndex <= 0)) || (pokemonIndex > LIMIT_OF_POKEMON)) {
      pokemonIndex = "1";
    }
    pokemonIndex = pokemonIndex.toLowerCase();
    getPokemon(pokemonIndex);
  }, [getPokemon, pokemonIndex]);

  const [currentPokemon, setCurrentPokemon] = useState(pokemonIndex);

  const AfterOrBeforePokemon = num => {
    let nextPokemon;
    if (isNaN(pokemonIndex)) {
      nextPokemon = (+(Pokemon.pokemonIndex) + num) % LIMIT_OF_POKEMON;
    } else {
      nextPokemon = (+(currentPokemon) + num) % LIMIT_OF_POKEMON;
    }
    setCurrentPokemon(nextPokemon <= 0 ? nextPokemon + LIMIT_OF_POKEMON : nextPokemon);
  };

  useEffect(() => {
    history.push(`/pokemon/${(currentPokemon)}`);
  }, [currentPokemon]);

  const transformEachLetterOfEachWordInCapitalLetter = ( namePokemon) => (
    namePokemon
    .toLowerCase()
    .split(' ')
    .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
    .join(' ')
  );

  return (
    <>
      {
        loadPokemon ? (
          <LoadingScreen />
        ) : (
          <div className="col">
            <div className="card">
              <TypePokemon Pokemon={Pokemon} />
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-md-3 ">
                    <img
                      src={Pokemon.imageUrl}
                      className="card-img-top rounded mx-auto mt-2"
                      alt={Pokemon.name}
                    />
                  </div>
                  <div className="col-md-9">
                    <h4 className="mx-auto">
                      {transformEachLetterOfEachWordInCapitalLetter(Pokemon.name)}
                    </h4>
                    <PokemonPowerList Pokemon={Pokemon} />
                  </div>

                </div>
                <button type="button" className="btn btn-danger" onClick={() => AfterOrBeforePokemon(-1)} >
                  BEFORE
              </button>&nbsp;
              <button type="button" className="btn btn-danger" onClick={() => AfterOrBeforePokemon(1)} >
                  AFTER
              </button>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}
export default PokeCard;
