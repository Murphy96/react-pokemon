import * as TYPES from '../types/newPoke';
import * as dataset from "../../config/datasets"
import {SERVER} from '../../config/server_conf';
import { postData, getData } from '../../config/datasets'
//import { NewPokemon } from '../reducers/newPoke';
//import { NewPokemon } from '../reducers/newPoke';


export const createPokemon = (NewPokemon) => {
    return {
        type: TYPES.CREATE_NEW_POKEMON,
        NewPokemon: NewPokemon,
        
    }
}

export const getNewPokemon = (idPoke) => {
    console.log(idPoke, "entra acition" )
    return async (dispatch) => {
        //const poke= await fetch(SERVER.URL_BASE );
        //const result= await poke.json();
        const pokemon = await getData(SERVER.URL_POKEMON(idPoke,), null)
        const especie = await getData(SERVER.URL_SPECIE(idPoke), null)
        console.log (pokemon ," POKEMON", especie)
        if (pokemon ) {
            console.log("entra");
            console.log (pokemon.name);
            let  stat = pokemon.stats
            let NewPokemon = {
                name: pokemon.name,
                pokemonIndex:pokemon.id,
                imageUrl: pokemon.sprites.front_default,
                types: pokemon.types.map(type => type.type.name),
                description: '3',
                statTitleWidth: 3,
                statBarWidth: 9,
                stats: {
                    hp: stat[0],
                    attack: stat[1],
                    defense: stat[2],
                    speed: stat[3],
                    specialAttack:stat[4],
                    specialDefense: stat[5]
                    },
                height: '',
                weight: '',
                eggGroups: '',
                catchRate: '',
                abilities: '',
                genderRatioMale: '',
                genderRatioFemale: '',
                evs: '',
                hatchSteps: '',
                themeColor: '#EF5350'
            }
            console.log ("Aqui esta el Pokemon", NewPokemon);
            dispatch({type: TYPES.GET_NEW_POKEMON, NewPokemon})
        }
    }
};