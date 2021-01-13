import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
const HomeScreen = () => {
    return (
        <div>
            <Container className="mt-5">
                <Row >
                    <Col xs={6} >
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/assets/pokemonLogo.png?text=First slide&bg=373940"
                                    alt="First slide"
                                />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/assets/pokemon.png?text=First slide&bg=373940"
                                    alt="First slide"
                                />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>
                    </Col>
                    <Col xs={6}>
                        <Container fluid>
                            <Row>
                                <Col>
                                    <Link to="/poke-list/1">
                                        <Button className="btn btn-danger btn-lg btn-block p-3 mb-3">
                                            Lista de pokemones
                                        </Button>
                                    </Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Link to="/pokemon/1">
                                        <Button className="btn btn-danger btn-lg btn-block p-3 mb-3">
                                            Todos los pokemones
                                        </Button>
                                    </Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Link to="/pokemon/1">
                                        <Button className="btn btn-danger btn-lg btn-block p-3 mb-3">
                                            Todos los pokemones
                                        </Button>
                                    </Link>
                                </Col>
                            </Row>
                            
                        </Container>
                    </Col>
                </Row>
            </Container>

           
        </div>
    )
}

export default HomeScreen;
