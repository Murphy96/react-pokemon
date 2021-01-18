import React, { useEffect, useState } from 'react';


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

const PokeCardVs = ({Pokemon, NewPokemon}) => { 
  
  //Componente para cada (row) pokemon y componente para los stats

  const pokeStats = {
    hp : Pokemon.stats.hp.base_stat,
    attack : Pokemon.stats.attack.base_stat,
    defense : Pokemon.stats.defense.base_stat,
    speed : Pokemon.stats.speed.base_stat,
    spAttack : Pokemon.stats.specialAttack.base_stat,
    spDefense : Pokemon.stats.specialDefense.base_stat
  };
  
  const newPokeStats = {
    hp : NewPokemon.stats.hp.base_stat,
    attack : NewPokemon.stats.attack.base_stat,
    defense : NewPokemon.stats.defense.base_stat,
    speed : NewPokemon.stats.speed.base_stat,
    spAttack : NewPokemon.stats.specialAttack.base_stat,
    spDefense : NewPokemon.stats.specialDefense.base_stat
  };


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
              <div className="float-right" className="capital">
                {Pokemon.types.map(type => (
                  <span
                    key={type}
                    className="badge badge-pill mr-1"
                    style={{
                      backgroundColor: `#${TYPE_COLORS[type]}`,
                      color: 'white'
                    }}>
                    {type //Convierte primera letra a mayuscula
                      }
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
              <h4 className="mx-auto" className="capital">
                  {Pokemon.name}
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
        </div>
      </div>
    </div> 
    </>
  )

  const newRows =[];
  newRows.push(
    <>
    <div className="col">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-5">
              <h5>{NewPokemon.pokemonIndex}</h5>
            </div>
            <div className="col-7">
              <div className="float-right" className="capital">
                {NewPokemon.types.map(type => (
                  <span
                    key={type}
                    className="badge badge-pill mr-1"
                    style={{
                      backgroundColor: `#${TYPE_COLORS[type]}`,
                      color: 'white'
                    }}>
                    {type}
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
                  src={NewPokemon.imageUrl}
                  className="card-img-top rounded mx-auto mt-2"
              />
            </div>
            <div className="col-md-9">
              <h4 className="mx-auto" className="capital">
                  {NewPokemon.name}
              </h4>
                <div className="row align-items-center">
                  <div className={`col-12 col-md-${NewPokemon.statTitleWidth}`}>
                    HP
                  </div>
                  <div className={`col-12 col-md-${NewPokemon.statBarWidth}`}>
                    <div className="progress">
                      <div
                        className="progress-bar "
                        role="progressbar"
                        style={{
                        width: `${NewPokemon.stats.hp.base_stat}%`,
                        backgroundColor: `#${NewPokemon.themeColor}`
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{NewPokemon.stats.hp.base_stat}</small>
                       </div>
                    </div>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className={`col-12 col-md-${NewPokemon.statTitleWidth}`}>
                    Attack
                  </div>
                  <div className={`col-12 col-md-${NewPokemon.statBarWidth}`}>
                    <div className="progress">
                      <div
                          className="progress-bar"
                          role="progressbar"
                          style={{
                          width: `${NewPokemon.stats.attack.base_stat}%`,
                          backgroundColor: `#${NewPokemon.themeColor}`
                          }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                      >
                        <small>{NewPokemon.stats.attack.base_stat}</small>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="row align-items-center">
                  <div className={`col-12 col-md-${NewPokemon.statTitleWidth}`}>
                   Defense
                  </div>
                  <div className={`col-12 col-md-${NewPokemon.statBarWidth}`}>
                    <div className="progress">
                     <div
                        className="progress-bar "
                        role="progressbar"
                        style={{
                          width: `${NewPokemon.stats.defense.base_stat}%`,
                          backgroundColor: `#${NewPokemon.themeColor}`
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{NewPokemon.stats.defense.base_stat}</small>
                     </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className={`col-12 col-md-${NewPokemon.statTitleWidth}`}>
                    Speed
                  </div>
                  <div className={`col-12 col-md-${NewPokemon.statBarWidth}`}>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${NewPokemon.stats.speed.base_stat}%`,
                          backgroundColor: `#${NewPokemon.themeColor}`
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{NewPokemon.stats.speed.base_stat}</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className={`col-12 col-md-${NewPokemon.statTitleWidth}`}>
                    Sp Atk
                  </div>
                  <div className={`col-12 col-md-${NewPokemon.statBarWidth}`}>
                    <div className="progress">
                      <div
                        className="progress-bar "
                        role="progressbar"
                        style={{
                          width: `${NewPokemon.stats.specialAttack.base_stat}%`,
                          backgroundColor: `#${NewPokemon.themeColor}`
                        }}
                        aria-valuenow={NewPokemon.stats.specialAttack.base_stat}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{NewPokemon.stats.specialAttack.base_stat}</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className={`col-12 col-md-${NewPokemon.statTitleWidth}`}>
                    Sp Def
                  </div>
                  <div className={`col-12 col-md-${NewPokemon.statBarWidth}`}>
                    <div className="progress">
                      <div
                        className="progress-bar "
                        role="progressbar"
                        style={{
                          width: `${NewPokemon.stats.specialDefense.base_stat}%`,
                          backgroundColor: `#${NewPokemon.themeColor}`
                        }}
                        aria-valuenow={NewPokemon.stats.specialDefense.base_stat}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{NewPokemon.stats.specialDefense.base_stat}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <br></br>
              <br></br>
        </div>
      </div>
    </div> 
    </>
  )

  
    return (
     
        <div className="App">
          <div className="container">
              <div className="row">
                  <div className="col">
                       <div className="row">{rows}</div>
                  </div>
              </div>
          </div> 

          <div className="container">
              <div className="row">
                  <div className="col">
                       <div className="row">{newRows}</div>
                  </div>
              </div>
          </div>   
        </div>    
  );
  
  
}
export default PokeCardVs;
