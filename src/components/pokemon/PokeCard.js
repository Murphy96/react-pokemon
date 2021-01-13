import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { history } from '../../store/configure_store'
import TypePokemon from './TypePokemon';
import PokemonPowerList from './PokemonPowerList';

const PokeCard = ({ Pokemon, getPokemon }) => {
    const { pokemonIndex } = useParams();
    useEffect(() => {
        getPokemon(pokemonIndex);
    }, [getPokemon, pokemonIndex]);
    const After = () => {
        if (pokemonIndex === 898) {
            history.push(`/pokemon/${(+pokemonIndex) - 897}`);
        }
        else {
            history.push(`/pokemon/${(+pokemonIndex) + 1}`);
        }
    }
    const Before = () => {
        console.log( pokemonIndex );
        if (pokemonIndex === 1) {
            history.push(`/pokemon/${(+pokemonIndex) + 897}`);
        }
        else {
            history.push(`/pokemon/${(+pokemonIndex) - 1}`);
        }
    }
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
                    <button type="button" className="btn btn-danger" onClick={ Before } >
                        BEFORE
                    </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" className="btn btn-danger" onClick={ After } >
                        AFTER
                    </button>
                </div>
            </div>
        </div>
    )
}
export default PokeCard;
