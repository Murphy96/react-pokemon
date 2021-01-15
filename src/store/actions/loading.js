import { LOAD_POKEMONS } from "../types/pokemon"

export const loadPokemon = () => {
    return {
        type: LOAD_POKEMONS,
    }
}