import React from 'react';
import { TYPE_COLORS } from '../../config/constants';

const TypePokemon = ({ Pokemon }) => {
  return (
    <div className="card-header">
      <div className="row">
        <div className="col-5">
          <h5>{Pokemon.pokemonIndex}</h5>
        </div>
        <div className="col-7">
          <div className="float-right">
            {
              Pokemon.types.map(type => (
                <span
                  key={type}
                  className="badge badge-pill mr-4"
                  style={{
                    backgroundColor: `#${TYPE_COLORS[type.toUpperCase()]}`,
                    color: 'black'
                  }}
                >
                  {
                    type
                      .toLowerCase()
                      .split(' ')
                      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                      .join(' ')
                  }
                </span>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default TypePokemon;
