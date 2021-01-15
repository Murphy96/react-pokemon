import React from 'react';

const PokemonPower = ({ stats, kindOfPower, numberScale = 250 }) => {


    const numberToConvertToAnotherScale = ( number ) => ( 100/number );

    return (
        <div className="row">
            <div className={`col-12 col-md-3`}>
                { kindOfPower }
            </div>
            <div className={`col-12 col-md-9`}>
                <div className="progress">
                    <div
                        className="progress-bar "
                        role="progressbar"
                        style={{
                            width: `${ parseInt( stats *numberToConvertToAnotherScale(numberScale))}%`,
                            backgroundColor: `#EF5350`
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    >
                        <small>{ `${ parseInt( stats*numberToConvertToAnotherScale(numberScale))}%`}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonPower;
