import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
const LoadingScreen = () => {
    return (
        <div className="p-5 m-5 text-center">
            <h1 className="text-danger">Loading...</h1>
            <Spinner animation="border" role="status" className="text-danger" />
        </div>
    )
}

export default LoadingScreen;
