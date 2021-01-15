import { connect } from 'react-redux'
import {withRouter} from "react-router-dom";
import { getPokemon } from '../store/actions/pokeCard';
import PokeCardScreen from '../components/pokemon/PokeCardScreen';

const mapStateToProps = (state) => {
    return {
      Pokemon: state.Pokemon,
      loadPokemon: state.loadPokemon.loading,
      loadPokemonError: state.loadPokemon.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPokemon: (idPoke) => {
          dispatch (getPokemon(idPoke));
        }
    };
};
// pasar los props, donde se usan
export default connect(mapStateToProps, mapDispatchToProps)(withRouter ( PokeCardScreen ));