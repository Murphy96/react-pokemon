import React, { useEffect, useState } from 'react';


const SelectPoke = ({Pokemons}) => {


    
    console.log('select', Pokemons.pokemones.key)

    const [pokeId, setPokeId] = useState('');

    const option =[];
        Pokemons.pokemones.forEach((data)=>{
        console.log(data.pokeIndex)
        option.push(
            <option value={data.pokeIndex}> {data.name}</option>
        )
    });

    /*const filterPoke = () => {

    }*/


return(
    <>
    <select onChange={(e) => setPokeId(e.target.value)}>
        {option}
    </select>
    <div>
    {pokeId}
    </div>
    </>
)

}

export default SelectPoke;