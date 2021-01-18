import { connect } from 'react-redux'
import {withRouter} from "react-router-dom";
import { getPokemon } from '../store/actions/pokeCard';
import { getNewPokemon } from '../store/actions/newPoke';
import { loadPokemons } from '../store/actions/randomPokemons';

import Pokemonvs from '../components/pokemon/Pokemonvs';

const mapStateToProps = (state) => {
    return {
      Pokemon: state.Pokemon,
      NewPokemon: state.NewPokemon,
      randomPoke: state.randomPoke,
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        /*loadAllPokemon() {
            dispatch(loadAllPokemon());
        }*/
          getPokemon: (idPoke) => {
            dispatch (getPokemon(idPoke));
            //console.log("Dispach")
        },



        getNewPokemon: (idPoke) => {
            dispatch (getNewPokemon(idPoke));
        },

        loadPokemons: (number) => {
            dispatch (loadPokemons(number));

        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter (Pokemonvs));