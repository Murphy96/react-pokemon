import { connect } from 'react-redux'
import {withRouter} from "react-router-dom";
import { getPokemonsByType } from '../store/actions/typesOfPokemons';
import TypesOfPokemons from '../components/pokemon/TypesOfPokemons/TypesOfPokemons';

const mapStateToProps = (state) => {
    return {
        typesOfPokemons: state.typesOfPokemons,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPokemonsByType: (typePokemon) => {
            dispatch (getPokemonsByType(typePokemon));  
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter ( TypesOfPokemons ));