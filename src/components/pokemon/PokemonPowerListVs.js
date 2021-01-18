import React from 'react'
import PokemonPowerVs from './PokemonPowerVs'

const PokemonPowerListVs = ({ Pokemon, newPokemon }) => {
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
                powersPokemon.map( (power, index) => (
                    <PokemonPowerVs 
                        key={ `${power}_${index}` } 
                        stats={ Pokemon.stats[power].base_stat } 
                        kindOfPower={ power } 
                        newStats ={newPokemon.stats[power].base_stat}
                        
                    />
                ))
            }
         
        </>
    )
}

export default PokemonPowerListVs;