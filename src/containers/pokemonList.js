import { connect } from 'react-redux'
import {withRouter} from "react-router-dom";
import { getPokemons, LoadPokemon } from '../store/actions/pokemon';
import PokemonList from '../components/pokemon/PokemonList';
import { pokemons } from '../store/reducers/pokemon';

const mapStateToProps = (state) => {
    return {
      pokemons: state.pokemons,
    };
};
const limit = 8;
const mapDispatchToProps = (dispatch) => {
    return {
        /*loadAllPokemon() {
            dispatch(loadAllPokemon());
        }*/
        LoadPokemon: (id) => {
          dispatch (LoadPokemon(id, limit));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter (PokemonList));