import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import withDrizzle from '../DrizzleContainer';

const Home = (props) => {

    const contract = props.drizzle.contracts.CryptoTruffles;

    return (
        <Fragment>
            <h1>CryptoTruffles</h1>    
            <p><strong>Welcome to CryptoTruffles</strong>! The world's most delicious (albeit inedible) treat. Get started by taking a look at <Link to="/collection">the collection</Link>.</p>
            <p>Contract Address: {contract.address}</p>
        </Fragment>
    )
}

export default withDrizzle(Home);