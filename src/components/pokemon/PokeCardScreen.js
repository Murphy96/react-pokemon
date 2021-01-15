import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { getPokemon as getPokemonDispatch } from '../../store/actions/pokeCard';

import PokeCard from './PokeCard';

const PokeCardScreen = ({ Pokemon, getPokemon }) => {
    
    // const dispatch = useDispatch()
    // const Pokemon = useSelector(state => state.Pokemon);

    // const getPokemon = (id) => {
    //     dispatch(getPokemonDispatch(id));
    // }

    
    // const { pokemonIndex } = useParams();

    // useEffect(() => {
    //     dispatch(getPokemon(pokemonIndex))
    // }, [dispatch, pokemonIndex]);

    // if( ...){
    //     return
    // }
    // else{

    // }
    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <PokeCard Pokemon={ Pokemon } getPokemon={ getPokemon } />
                    </div>
                </div>
            </div>
        </div>

    );
}
export default PokeCardScreen;
