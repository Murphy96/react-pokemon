import React from 'react';

const TYPE_COLORS = {
    bug: 'B1C12E',
    dark: '4F3A2D',
    dragon: '755EDF',
    electric: 'FCBC17',
    fairy: 'F4B1F4',
    fighting: '823551D',
    fire: 'E73B0C',
    flying: 'A3B3F7',
    ghost: '6060B2',
    grass: '74C236',
    ground: 'D3B357',
    ice: 'A3E7FD',
    normal: 'C8C4BC',
    poison: '934594',
    psychic: 'ED4882',
    rock: 'B9A156',
    steel: 'B5B5C3',
    water: '3295F6'
};

const TypePokemon = ({ Pokemon }) => {
    return (
        <div className="card-header">
            <div className="row">
                <div className="col-5">
                    <h5>{Pokemon.pokemonIndex}</h5>
                </div>
                <div className="col-7">
                    <div className="float-right">
                        {
                            Pokemon.types.map(type => (
                                <span
                                    key={type}
                                    className="badge badge-pill mr-4"
                                    style={{
                                        backgroundColor: `#${TYPE_COLORS[type]}`,
                                        color: 'white'
                                    }}
                                >
                                    {
                                        type
                                            .toLowerCase()
                                            .split(' ')
                                            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                                            .join(' ')
                                    }
                                </span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TypePokemon;
