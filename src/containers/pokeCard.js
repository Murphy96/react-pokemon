import { connect } from 'react-redux'
import {withRouter} from "react-router-dom";
import { getPokemon } from '../store/actions/pokeCard';
import PokeCard from '../components/pokemon/PokeCard';
import { Pokemon } from '../store/reducers/pokeCard';

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
export default connect(mapStateToProps, mapDispatchToProps)(withRouter (PokeCard));