import * as TYPES from '../types/pokeCard.js';
import { SERVER } from '../../config/server_conf';
import { getData } from '../../config/datasets'
import { loadPokemonFailure, loadPokemonRequest, loadPokemonSuccess } from './loading.js';
export const createPokemon = (Pokemon) => {
    return {
        type: TYPES.CREATE_POKEMON,
        Pokemon: Pokemon,

    }
}

export const getPokemon = (idPoke) => {
    return async (dispatch) => {
        dispatch(loadPokemonRequest())
        await getData(SERVER.URL_POKEMON(idPoke), null)
            .then( pokemon => {
                let stat = pokemon.stats
                let Pokemon = {
                    name: pokemon.name,
                    pokemonIndex: pokemon.id,
                    imageUrl: pokemon.sprites.front_default,
                    types: pokemon.types.map(type => type.type.name),
                    description: '3',
                    stats: {
                        hp: stat[0],
                        attack: stat[1],
                        defense: stat[2],
                        speed: stat[3],
                        specialAttack: stat[4],
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
                }
                return dispatch({ type: TYPES.GET_POKEMON, Pokemon })                
            })
            .then( res => {
                dispatch(loadPokemonSuccess())
            })
            .catch( error => {
                // console.log('##$################')
                // console.log( error ,'##########')
                dispatch(loadPokemonFailure('404'))
            })
    }
};