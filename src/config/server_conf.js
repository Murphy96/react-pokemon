
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'
const SPECIE_URL = 'https://pokeapi.co/api/v2/pokemon-species'
const URL_ALL2='https://pokeapi.co/api/v2/pokemon?limit=100&offset=200'
const URL_ALL='https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
export const SERVER= (function () {
    const URL_BASE ={
        BASE: BASE_URL,
        SPECIE: SPECIE_URL,
        ALL: URL_ALL
    }
    return {
        URL_ALL: URL_BASE.ALL,

        URL_ALL_LIMIT: (limit, offset)=>{
            return  `${URL_BASE.BASE}?limit=${limit}&offset=${offset}`
        },
        URL_POKEMON:(idPoke)=>{
            
            return `${URL_BASE.BASE}${idPoke}`
        },
        URL_SPECIE:(idPoke)=>{
            console.log (idPoke, "serverConf", `${URL_BASE.SPECIE}/${idPoke}`)
            return `${URL_BASE.SPECIE}/${idPoke}`
        }

    }


}

)()



