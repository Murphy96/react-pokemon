import * as TYPES from '../types/newPoke';


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

/*export const NewPokemon = (state = {...defaultPokemon}, action) => {
    let newState;
    console.log('REDUCER NewPokemon', action);

  if (action.type === NEW_POKE) {
    return {...state, NewPokemon: action.NewPokemon}
  }
    return state;
}*/

export const NewPokemon = (state = {...defaultPokemon}, action) => {
    let newState;
    console.log('REDUCER NewPokemon', action);
    switch (action.type) {
      case TYPES.CREATE_NEW_POKEMON:
          return {...state, NewPokemon: action.NewPokemon}
        case TYPES.GET_NEW_POKEMON:
           // console.log(action.pokemones)
            return {...state, ...action.NewPokemon}
       
        default:
            return state;
    }
}
