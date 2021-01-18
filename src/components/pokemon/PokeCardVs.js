import React, { useEffect, useState } from 'react';
import TypePokemon from './TypePokemon';
import PokemonPowerListVs from './PokemonPowerListVs';


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

  
    return (
     <>
      <div className="col">
      <div className="card">
            
          <TypePokemon Pokemon={Pokemon} />
          
          <div className="card-body">
              <div className="row align-items-center">
                  <div className="col-md-3 ">
                      <img
                          src={Pokemon.imageUrl}
                          className="card-img-top rounded mx-auto mt-2"
                          alt={ Pokemon.name }
                      />
                  </div>
                  <div className="col-md-9">
                      <h4 className="mx-auto">
                          {
                              // fix convert to function, 
                              // CapitalWord (s) => { .... }
                              Pokemon.name
                                  .toLowerCase()
                                  .split(' ')
                                  .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                                  .join(' ')
                          }
                      </h4>
                      <PokemonPowerListVs Pokemon={ Pokemon } newPokemon={NewPokemon} />
                  </div>

              </div>
          </div>
      </div>
  </div>


  <div className="col">
      <div className="card">
            
          <TypePokemon Pokemon={NewPokemon} />
          
          <div className="card-body">
              <div className="row align-items-center">
                  <div className="col-md-3 ">
                      <img
                          src={NewPokemon.imageUrl}
                          className="card-img-top rounded mx-auto mt-2"
                          alt={ NewPokemon.name }
                      />
                  </div>
                  <div className="col-md-9">
                      <h4 className="mx-auto">
                          {
                              // fix convert to function, 
                              // CapitalWord (s) => { .... }
                              NewPokemon.name
                                  .toLowerCase()
                                  .split(' ')
                                  .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                                  .join(' ')
                          }
                      </h4>
                      <PokemonPowerListVs Pokemon={ NewPokemon } newPokemon={Pokemon} />
                  </div>

              </div>
          </div>
      </div>
  </div>
           
      </>    

  );
  
  
}
export default PokeCardVs;
