import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const TYPE_COLORS = {
    // Capital Letter fix
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

const TypesOfPokemonsList = () => {
    const powersPokemon = [
        'dragon',
        'electric',
        'fairy',
        'fighting',
        'fire',
        'flying',
        'ghost',
        'grass',
        'ground',
        'ice',
        'normal',
        'poison',
        'psychic',
        'rock',
        'steel',
        'water',
    ]
    return (
        <div>
            <Container >
                <Row className="col-md-offset-10 mb-5 mt-3">
                    {
                        powersPokemon.map((power, index) => (
                            <Button
                                style={{
                                    backgroundColor: `#${TYPE_COLORS[power]}`,
                                    color: 'white'
                                }}
                                className="btn-lg btn-block mt-2"
                                key={`${power}_${index}`}
                            >
                                <Link to={`/type-of-pokemons/${power}`} >
                                    { power }
                                </Link>
                            </Button>


                        ))
                    }
                </Row>
            </Container>
        </div>
    )
    
}

export default TypesOfPokemonsList;
