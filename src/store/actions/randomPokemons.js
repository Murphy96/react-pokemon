import {RANDOM_POKEMONS} from '../types/randomPokemons';
import {SERVER} from '../../config/server_conf'
import { getData } from '../../config/datasets';

export const changePokemons = ([data]) => {
    return {
      type: RANDOM_POKEMONS,
      payload:{
        data
    }
        
    
        
      
    }
}
  

export const loadPokemons = (number) => {

    return async (dispatch) => {
        //const poke= await fetch(SERVER.URL_BASE );
        //const result= await poke.json();
        const result = await getData(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${number}`, null)
        let pokemones= [];
        if (result) {
            console.log(result.results);
            result.results.forEach(data => {
                //crear el id del pokemon
                const num= data.url.split(`/`)[data.url.split(`/`).length -2] //https://pokeapi.co/api/v2/pokemon/1/ ---> "https:","","pokeapi.co","api","v2", "pokemon", "1", ""

                pokemones.push({
                    pokeIndex: num,
                    name: data.name,
                    url: data.url,
                    imageUrl:`https://pokeres.bastionbot.org/images/pokemon/${num}.png`,
                    imageLoading: true,
                    toManyRequests: false
                });
            });

            
             console.log ('POKIMONES',pokemones);
             dispatch({type: RANDOM_POKEMONS, pokemones})
        }
    }

}
  