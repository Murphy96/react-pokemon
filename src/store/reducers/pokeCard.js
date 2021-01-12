import * as TYPES from '../types/pokeCard';


export const defaultPokemon = {   
    name: '',
    pokemonIndex: '',
    imageUrl: '',
    types: [],
    description: '',
    statTitleWidth: 3,
    statBarWidth: 9,
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
    themeColor: '#EF5350'
  };

export const Pokemon = (state = {...defaultPokemon}, action) => {
    let newState;
    console.log('REDUCER Pokemon', action);
    switch (action.type) {
      case TYPES.CREATE_POKEMON:
          return {...state, Pokemon: action.Pokemon}
        case TYPES.GET_POKEMON:
           // console.log(action.pokemones)
            return {...state, ...action.Pokemon}
       
        default:
            return state;
    }
}
