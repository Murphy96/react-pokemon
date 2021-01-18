import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { history } from '../../store/configure_store'
import TypePokemon from './TypePokemon';
import PokemonPowerList from './PokemonPowerList';
//import LoadingScreen from '../Loading/LoadingScreen';


const PokeCard = ({ Pokemon, getPokemon,  loadPokemon, loadPokemonError }) => {
    
    let { pokemonIndex } = useParams();
    // this code was planned to control the error, but this error is a process  async

    // if( loadPokemonError ==='404' ){
    // console.log( loadPokemonError );
    //     console.log( pokemonIndex );
    //     pokemonIndex = "1";
    //     console.log( pokemonIndex );
    // }

    // NO DEBERIA ESTAR ACA
    const LIMIT_OF_POKEMON = 897;
    if((!isNaN(pokemonIndex) && (pokemonIndex <= 0)) || (pokemonIndex > LIMIT_OF_POKEMON)){
        pokemonIndex = "1";
    }
    pokemonIndex = pokemonIndex.toLowerCase();
    useEffect(() => {
        getPokemon(pokemonIndex)
    }, [getPokemon, pokemonIndex]);
    
    // const [actualPokemon, setNextPokemon] = useState(isNaN(pokemonIndex)?"1":pokemonIndex);
    // const [actualPokemon, setNextPokemon] = useState(loadPokemonError?"1":pokemonIndex);
    const [currentPokemon, setCurrentPokemon] = useState(pokemonIndex);
    
    const AfterOrBeforePokemon = num => {
        let nextPokemon;
        if(isNaN(pokemonIndex)){
            //parseInt fix
            nextPokemon = (parseInt(Pokemon.pokemonIndex) + num) % LIMIT_OF_POKEMON;
        }else{
            nextPokemon = (parseInt(currentPokemon) + num) % LIMIT_OF_POKEMON;
        }
        setCurrentPokemon(nextPokemon <= 0 ? nextPokemon + LIMIT_OF_POKEMON : nextPokemon);
    }
    useEffect(() => {
        history.push(`/pokemon/${(currentPokemon)}`);
    }, [currentPokemon])


    if( loadPokemon ){
        return(
            //<LoadingScreen/>
            <div>Loading</div>
        )
    }else{
        return (
            <div className="col">
                <div className="card">
    
                    <TypePokemon Pokemon={Pokemon} />
                    
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-md-3 ">
                                <img
                                    src={Pokemon.imageUrl}
                                    className="card-img-top rounded mx-auto mt-2"
                                    alt={ Pokemon.name }
                                />
                            </div>
                            <div className="col-md-9">
                                <h4 className="mx-auto">
                                    {
                                        // fix convert to function, 
                                        // CapitalWord (s) => { .... }
                                        Pokemon.name
                                            .toLowerCase()
                                            .split(' ')
                                            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                                            .join(' ')
                                    }
                                </h4>
                                <PokemonPowerList Pokemon={ Pokemon } />
                            </div>
    
                        </div>
                        <button type="button" className="btn btn-danger" onClick={ () => AfterOrBeforePokemon(-1) } >
                            BEFORE
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button type="button" className="btn btn-danger" onClick={ () => AfterOrBeforePokemon(1) } >
                            AFTER
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    
}
export default PokeCard;
