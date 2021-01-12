import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap'
import NavBar from '../layout/NavBar'
import {  NavLink, Link, Redirect,useParams } from 'react-router-dom';
import {history} from '../../store/configure_store'
import pokemonList from '../../containers/pokemonList';

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

const PokeCard = ({ Pokemon, getPokemon }) => { 
  const { pokemonIndex } = useParams(); 
  useEffect(() => {
    
    getPokemon(pokemonIndex);
  }, [pokemonIndex]);

  const After = ()=>{
    if(pokemonIndex === 898){
      history.push(`/pokemon/${( +pokemonIndex) - 897}`);
    }
    else{
      history.push(`/pokemon/${( +pokemonIndex) + 1}`);
    }
  }

  const Before = ()=>{
    if(pokemonIndex === 1){
      history.push(`/pokemon/${( +pokemonIndex) + 897}`);
    }
    else{
      history.push(`/pokemon/${( +pokemonIndex) - 1}`);
    }        
  }
   // const [data, setPokemon]= useState({name:''})
    
    /*useEffect(()=>{ if(Pokemon){
        console.log("********",Pokemon)
        setPokemon ({...data,name: Pokemon.name})}
    },[Pokemon])*/
    
  const rows =[];
  rows.push(
    <>
    <div className="col">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-5">
              <h5>{Pokemon.pokemonIndex}</h5>
            </div>
            <div className="col-7">
              <div className="float-right">
                {Pokemon.types.map(type => (
                  <span
                    key={type}
                    className="badge badge-pill mr-1"
                    style={{
                      backgroundColor: `#${TYPE_COLORS[type]}`,
                      color: 'white'
                    }}>
                    {type
                      .toLowerCase()
                      .split(' ')
                      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                      .join(' ')}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row align-items-center">
            <div className=" col-md-3 ">
              <img
                  src={Pokemon.imageUrl}
                  className="card-img-top rounded mx-auto mt-2"
              />
            </div>
            <div className="col-md-9">
              <h4 className="mx-auto">
                  {Pokemon.name
                  .toLowerCase()
                  .split(' ')
                  .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(' ')}
              </h4>
                <div className="row align-items-center">
                  <div className={`col-12 col-md-${Pokemon.statTitleWidth}`}>
                    HP
                  </div>
                  <div className={`col-12 col-md-${Pokemon.statBarWidth}`}>
                    <div className="progress">
                      <div
                        className="progress-bar "
                        role="progressbar"
                        style={{
                        width: `${Pokemon.stats.hp.base_stat}%`,
                        backgroundColor: `#${Pokemon.themeColor}`
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{Pokemon.stats.hp.base_stat}</small>
                       </div>
                    </div>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className={`col-12 col-md-${Pokemon.statTitleWidth}`}>
                    Attack
                  </div>
                  <div className={`col-12 col-md-${Pokemon.statBarWidth}`}>
                    <div className="progress">
                      <div
                          className="progress-bar"
                          role="progressbar"
                          style={{
                          width: `${Pokemon.stats.attack.base_stat}%`,
                          backgroundColor: `#${Pokemon.themeColor}`
                          }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                      >
                        <small>{Pokemon.stats.attack.base_stat}</small>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="row align-items-center">
                  <div className={`col-12 col-md-${Pokemon.statTitleWidth}`}>
                   Defense
                  </div>
                  <div className={`col-12 col-md-${Pokemon.statBarWidth}`}>
                    <div className="progress">
                     <div
                        className="progress-bar "
                        role="progressbar"
                        style={{
                          width: `${Pokemon.stats.defense.base_stat}%`,
                          backgroundColor: `#${Pokemon.themeColor}`
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{Pokemon.stats.defense.base_stat}</small>
                     </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className={`col-12 col-md-${Pokemon.statTitleWidth}`}>
                    Speed
                  </div>
                  <div className={`col-12 col-md-${Pokemon.statBarWidth}`}>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${Pokemon.stats.speed.base_stat}%`,
                          backgroundColor: `#${Pokemon.themeColor}`
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{Pokemon.stats.speed.base_stat}</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className={`col-12 col-md-${Pokemon.statTitleWidth}`}>
                    Sp Atk
                  </div>
                  <div className={`col-12 col-md-${Pokemon.statBarWidth}`}>
                    <div className="progress">
                      <div
                        className="progress-bar "
                        role="progressbar"
                        style={{
                          width: `${Pokemon.stats.specialAttack.base_stat}%`,
                          backgroundColor: `#${Pokemon.themeColor}`
                        }}
                        aria-valuenow={Pokemon.stats.specialAttack.base_stat}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{Pokemon.stats.specialAttack.base_stat}</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className={`col-12 col-md-${Pokemon.statTitleWidth}`}>
                    Sp Def
                  </div>
                  <div className={`col-12 col-md-${Pokemon.statBarWidth}`}>
                    <div className="progress">
                      <div
                        className="progress-bar "
                        role="progressbar"
                        style={{
                          width: `${Pokemon.stats.specialDefense.base_stat}%`,
                          backgroundColor: `#${Pokemon.themeColor}`
                        }}
                        aria-valuenow={Pokemon.stats.specialDefense.base_stat}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{Pokemon.stats.specialDefense.base_stat}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <br></br>
              <br></br>
              <button type="button" class="btn btn-danger" onClick ={ ()=>{console.log("cli")
              Before()  } } > 
                  <div className="sidebar-list-item">
                          <i className="o-table-content-1 mr-3 text-gray"></i>
                          Before
                  </div>
              </button>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button type="button" class="btn btn-danger" onClick ={ ()=>{console.log("cli")
              After()  } } > 
                  <div className="sidebar-list-item">
                          <i className="o-table-content-1 mr-3 text-gray"></i>
                          After
                  </div>
              </button>
        </div>
      </div>
    </div>
    </>
  )

  return (
        <>
          <div className="App">
            <div className="d-flex align-items-stretch" style={{ width: "10000px" }}>
                    <NavBar />
            </div>
            <br></br>
            <br></br>
            
            <div className="container">
                <div className="row">
                    <div className="col">
                         <div className="row">{rows}</div>
                    </div>
                </div>
            </div>  
          </div>      
        </>
    );
}
export default PokeCard;
