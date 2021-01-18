import { connect } from 'react-redux'
import {withRouter} from "react-router-dom";
import { loadPokemons } from '../store/actions/randomPokemons';
import Pokemonvs from '../components/pokemon/Pokemonvs';


const mapStateToProps = (state) => {
    return {
      Pokemons: state.Pokemons,
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        /*loadAllPokemon() {
            dispatch(loadAllPokemon());
        }*/
        loadPokemons: (idPoke) => {
            dispatch (loadPokemons(idPoke));
            //console.log("Dispach")
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter (Pokemonvs));