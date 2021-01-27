import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router';

import { Link } from 'react-router-dom';
import LoadingScreen from '../../Loading/LoadingScreen';

const TypesOfPokemons = ({ typesOfPokemons, getPokemonsByType }) => {

  const { typePokemon: typeOrPowerPokemon } = useParams();
  useEffect(() => {
    getPokemonsByType(typeOrPowerPokemon)
  }, [getPokemonsByType, typeOrPowerPokemon])

  const { pokemon: ListOfPokemonsWithPower, name: typeOfPower } = typesOfPokemons.typesOfPokemons;

  console.log(typesOfPokemons.typesOfPokemons.pokemon);
  if (typesOfPokemons.loading) {
    return (
      <LoadingScreen />
      //  <div>Loading</div>
    )
  }

  else {
    return (
      <div>
        <h2 className="text-center">{typeOfPower?.toUpperCase()}</h2>
        <Container>
          <Row className="col-md-offset-10 mb-5 mt-3">
            {
              ListOfPokemonsWithPower?.map((pokemon, index) => {
                const newUrl = pokemon.pokemon.url.split('/');

                /*

                */
                return (
                  <Col
                    xs={2}
                    key={`${pokemon.pokemon}_${index}`}
                    className="p-3 mr-2"
                  >
                    <Card style={{ width: '18rem' }}>
                      <Card.Body>
                        <Card.Title> {pokemon.pokemon.name}</Card.Title>
                        <Link to={`/pokemon/${newUrl[6]}`}>Go to Poke</Link>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              })
            }
          </Row>
        </Container>
      </div>
    )
  }

}

export default TypesOfPokemons
