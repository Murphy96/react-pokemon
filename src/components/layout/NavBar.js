import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, Form, Dropdown } from 'react-bootstrap';

const NavBar = ({ createPokemons, pokemon }) => {
    return (
        
        <React.Fragment>
           
            <header className="header">
            <div>  <center>
                <nav  className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <a  className="navbar-brand col-sn-3 col-md-2 mr-0 align-items-center">
                      <h1>Pokedex      </h1>
                        {/*<li className="sidebar-list-item">*/}
                        {   
                            <>
                                <button type="button" class="btn btn-danger">
                                <div className="sidebar-list-item">
                                    < NavLink div className="sidebar-link text-muted" to="/poke-List/1" >
                                        <i className="o-table-content-1 mr-3 text-gray"></i>
                                        <span>Listas</span>
                                    </NavLink>
                                    
                                </div>
                                </button>
                                
                                
                               
                            </>
                        }
                    </a>
                </nav>
                <br></br></center> 
            </div>
            </header>
           
        </React.Fragment>
    )
}    
export default NavBar;