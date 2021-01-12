import React, { Component } from 'react'
import PokemonList from '../../containers/pokemonList'

export default class Deshboard extends Component{
    render(){
        return(
            <div className="row">
                <div className="col">
                    
                    <PokemonList/>
                </div>
            </div>
             
        )
    }
}