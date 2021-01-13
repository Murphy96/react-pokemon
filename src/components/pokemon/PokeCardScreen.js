import React from 'react';
import PokeCard from './PokeCard';

const PokeCardScreen = ({ Pokemon, getPokemon }) => {
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
