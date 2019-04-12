import React from 'react';
import withDrizzle from './DrizzleContainer';

const CryptoTruffles = (props) => {
    return (
        <div>
            Contract Address: {props.drizzle.contracts.CryptoTruffles.address}
        </div>
    )
}

export default withDrizzle(CryptoTruffles);