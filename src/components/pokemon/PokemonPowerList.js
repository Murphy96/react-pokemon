import React from 'react'
import PokemonPower from './PokemonPower'

const PokemonPowerList = ({ Pokemon }) => {
    return (
        <>
            <PokemonPower Pokemon={ Pokemon } kindOfPower='hp'/>
            <PokemonPower Pokemon={ Pokemon } kindOfPower='attack'/>
            <PokemonPower Pokemon={ Pokemon } kindOfPower='defense'/>
            <PokemonPower Pokemon={ Pokemon } kindOfPower='speed'/>
            <PokemonPower Pokemon={ Pokemon } kindOfPower='specialAttack'/>
            <PokemonPower Pokemon={ Pokemon } kindOfPower='specialDefense'/>
         
        </>
    )
}

export default PokemonPowerList
