
import * as TYPES from '../types/pokemon';
import * as dataset from "../../config/datasets"
import {SERVER} from '../../config/server_conf';
import { postData, getData } from '../../config/datasets'
export const createPokemons = ({data}) => {
    return {
        type: TYPES.GET_POKEMONS,
        //pokemons: pokemons,
        playload:{
            data
        }
    }
}
export const LoadPokemon = (idPoke, limit) => {
    return async (dispatch) => {
        //const poke= await fetch(SERVER.URL_BASE );
        //const result= await poke.json();
        const result = await getData(SERVER.URL_ALL_LIMIT(limit, idPoke - 1), null)
        let pokemones= [];
        if (result) {
            console.log("muere");
            console.log(result.results);
            result.results.forEach(data => {
                //crear el id del pokemon
                const num= data.url.split(`/`)[data.url.split(`/`).length -2];//https://pokeapi.co/api/v2/pokemon/1/ ---> "https:","","pokeapi.co","api","v2", "pokemon", "1", ""
                pokemones.push({
                    pokeIndex: num,
                    name: data.name,
                    url: data.url,
                    imageUrl:`https://pokeres.bastionbot.org/images/pokemon/${num}.png`,
                    imageLoading: true,
                    toManyRequests: false
                
                });
            });
            console.log("entra");
            
             console.log (pokemones);
            dispatch({type: TYPES.LOAD_POKEMONS, pokemones})
        }
    }
}
export const getPokemons = () => {
    return async (dispatch) => {
        //const poke= await fetch(SERVER.URL_BASE );
        //const result= await poke.json();
        const result = await getData(SERVER.URL_ALL, null)
        let pokemones= [];
        if (result) {
            console.log("muere");
            console.log(result.results);
            result.results.forEach(data => {
                //crear el id del pokemon
                const num= data.url.split(`/`)[data.url.split(`/`).length -2] //https://pokeapi.co/api/v2/pokemon/1/ ---> "https:","","pokeapi.co","api","v2", "pokemon", "1", ""
                console.log(num,"Numero ")
                pokemones.push({
                    pokeIndex: num,
                    name: data.name,
                    url: data.url,
                    imageUrl:`https://pokeres.bastionbot.org/images/pokemon/${num}.png`,
                    imageLoading: true,
                    toManyRequests: false
                });
            });
            console.log("entra");
            
             console.log (pokemones);
            dispatch({type: TYPES.GET_POKEMONS, pokemones})
        }
    }
};




