import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { TYPE_COLORS } from '../../../config/constants';

const TypesOfPokemonsList = () => {
  const powersPokemon = [
    'DRAGON',
    'ELECTRIC',
    'FAIRY',
    'FIGHTING',
    'FIRE',
    'FLYING',
    'GHOST',
    'GRASS',
    'GROUND',
    'ICE',
    'NORMAL',
    'POISON',
    'PSYCHIC',
    'ROCK',
    'STEEL',
    'WATER',
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
                <Link to={`/type-of-pokemons/${power.toLowerCase()}`} >
                {power}
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
