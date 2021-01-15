import * as TYPES from '../types/pokeCard';


export const defaultPokemon = {   
    name: '',
    pokemonIndex: '',
    imageUrl: '',
    types: [],
    description: '',
    stats: {
      hp: '',
      attack: '',
      defense: '',
      speed: '',
      specialAttack: '',
      specialDefense: ''
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
    themeColor: '#EF5350',
  }

export const Pokemon = (state = {...defaultPokemon}, action) => {
    switch (action.type) {
      case TYPES.CREATE_POKEMON:
          return {
            ...state,
            Pokemon: action.Pokemon
          }
        case TYPES.GET_POKEMON:
            return {
              ...state, 
              ...action.Pokemon,
            }
        default:
            return state;
    }
}
