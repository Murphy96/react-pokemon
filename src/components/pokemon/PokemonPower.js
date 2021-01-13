import React from 'react';

const PokemonPower = ({ Pokemon, kindOfPower, numberScale = 250 }) => {

    const powerOfPokemon = `Pokemon.stats.${kindOfPower}.base_stat`;
    const numberToConvertToAnotherScale = ( number ) => ( 100/number );

    return (
        <div className="row">
            <div className={`col-12 col-md-${Pokemon.statTitleWidth}`}>
                { kindOfPower }
            </div>
            <div className={`col-12 col-md-${Pokemon.statBarWidth}`}>
                <div className="progress">
                    <div
                        className="progress-bar "
                        role="progressbar"
                        style={{
                            width: `${ parseInt( eval(powerOfPokemon)*numberToConvertToAnotherScale(numberScale))}%`,
                            backgroundColor: `#${Pokemon.themeColor}`
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    >
                        <small>{ `${ parseInt( eval(powerOfPokemon)*numberToConvertToAnotherScale(numberScale))}%`}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonPower;
