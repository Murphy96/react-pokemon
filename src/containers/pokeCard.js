import { connect } from 'react-redux'
import {withRouter} from "react-router-dom";
import { getPokemon } from '../store/actions/pokeCard';
import PokeCardScreen from '../components/pokemon/PokeCardScreen';

const mapStateToProps = (state) => {
    return {
      Pokemon: state.Pokemon,
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
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter ( PokeCardScreen ));