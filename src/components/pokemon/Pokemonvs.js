import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Nav, Button } from 'react-bootstrap'
import NavBar from '../layout/NavBar'
import {  NavLink, Link, Redirect , useParams} from 'react-router-dom';
import {history} from '../../store/configure_store'
import SelectPoke from '../layout/SelectPoke';
import PokeCardVs from './PokeCardVs';
//sin containers
import { useDispatch, useSelector } from 'react-redux';
//import {loadPokemons} from '../../store/actions/randomPokemons'

const Pokemonvs = ({Pokemon, getPokemon, NewPokemon, getNewPokemon, loadPokemons, randomPoke }) =>{

    const { id } = useParams();
    //const dispatch = useDispatch();
    //const randomPoke = useSelector(state => state.randomPoke);

    const [pokeId, setPokeId] = useState('');

    let pokesRandom = Math.floor(Math.random() * 800) + 1

    useEffect(() => {

        loadPokemons(pokesRandom);
        getPokemon(id);

      }, [id]);
    
      console.log('AAAYUDA', randomPoke)


      

    const option =[];
    randomPoke.pokemones.forEach((data)=>{
        console.log(data.pokeIndex)
        option.push(
            <option value={data.pokeIndex}> {data.name}</option>
        )
    });

    const comparePokemon = (id) => {
        //let car = randomPoke.pokemones.find(car => car.pokeIndex === id);
        setPokeId(id);
        getNewPokemon(id);
        console.log('comparame', NewPokemon)
    }

    return(
        <>
        
        <div className="App">
            <div className="d-flex align-items-stretch" style={{ width: "10000px" }}>
                    {/*<NavBar />*/}
            </div>
            <br></br>
            <br></br>
            
            <div className="container">
                <div className="row">
                    <div className="col">
                        <select onChange={(e) => comparePokemon(e.target.value) }>
                            <option selected value=''>Choose Pokemon</option>
                            {option}
                        </select>
                        <div>
        
                        </div>
                        <PokeCardVs Pokemon={Pokemon} NewPokemon={NewPokemon}/>
                    </div>
                </div>
            </div>  
          

          </div> 
        
        </>
    )

}

export default Pokemonvs;