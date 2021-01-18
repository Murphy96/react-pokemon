import React from 'react';

const PokemonPowerVs = ({ stats, kindOfPower, numberScale = 250, newStats }) => {

    const numberToConvertToAnotherScale = ( number ) => ( 100/number );

    const statsCompare = stats - newStats;

    return (
        <div className="row">
            <div className={`col-12 col-md-3`}>
                { kindOfPower }
                <p>{statsCompare}</p>
            </div>
            
            <div className={`col-12 col-md-9`}>
                <div className="progress">
                    <div
                        className="progress-bar "
                        role="progressbar"
                        style={{
                            width: `${ +(stats * numberToConvertToAnotherScale(numberScale)) }%`,
                            backgroundColor: `#EF5350`
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    >
                        <small>{ `${ stats }`}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonPowerVs;