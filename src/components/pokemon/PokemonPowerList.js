import React from 'react'
import PokemonPower from './PokemonPower'

const PokemonPowerList = ({ Pokemon }) => {
  const powersPokemon = [
    'hp',
    'attack',
    'defense',
    'speed',
    'specialAttack',
    'specialDefense',
  ]
  return (
    <>
      {
        powersPokemon.map((power, index) => (
          <PokemonPower
            key={`${power}_${index}`}
            stats={Pokemon.stats[power].base_stat}
            kindOfPower={power}
          />
        ))
      }
    </>
  )
}

export default PokemonPowerList
