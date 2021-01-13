import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
const NavBar = ({ createPokemons, pokemon }) => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand href="/">
                    <Image 
                        src="/assets/pokemonLogo.png" 
                        rounded 
                        width="200"
                    />
                </Navbar.Brand>
            </Navbar>
        </>
    )
}
export default NavBar;