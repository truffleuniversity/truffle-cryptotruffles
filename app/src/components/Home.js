import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import withDrizzle from '../DrizzleContainer';
import Grid from '@material-ui/core/Grid';

import collection from '../assets/collect-them-all.jpg';

const Home = (props) => {

    const contract = props.drizzle.contracts.CryptoTruffles;

    return (
        <Fragment>
            <Grid item xs={12}>
                <h1>CryptoTruffles</h1>    
                <p><strong>Welcome to CryptoTruffles</strong>! The world's most delicious (albeit inedible) treat.</p>
                <p>Get started by taking a look at <Link to="/collection">the collection</Link>.</p>
                <p><img src={collection} className="Home-logo" alt="Collect them all" /></p>
                <p>Contract Address: {contract.address}</p>
            </Grid>
            
            
        </Fragment>
    )
}

export default withDrizzle(Home);