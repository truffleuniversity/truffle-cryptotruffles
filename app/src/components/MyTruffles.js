import React, { Component, Fragment } from 'react';
import withDrizzle from '../DrizzleContainer';

import Truffle from './Truffle';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
    }
  });
class MyTruffles extends Component {
    constructor(props) {
        super(props);

        const { CryptoTruffles } = this.props.drizzle.contracts;
        this.dataKey = CryptoTruffles.methods.tokensOfOwner.cacheCall(this.props.drizzleState.accounts[0]);
    }

    render() {

        const { classes } = this.props;
        const { CryptoTruffles } = this.props.drizzleState.contracts;

        if(!(this.dataKey in CryptoTruffles.tokensOfOwner)) {
            return (
              <span>Loading...</span>
            )
          }

        const tokens = CryptoTruffles.tokensOfOwner[this.dataKey].value;

        const truffles = tokens.map(function(e){
            return (<Truffle truffleId={e} key={e} />);
        })

        return(
            <Fragment>
                <Grid item xs={12}>
                    <h2>My Truffles</h2>
                </Grid>
                <Grid container className={classes.root} justify="center" spacing={16}>
                    {truffles.length !== 0 ? truffles : (<p>You don't currently have any Truffles. <span role="img" aria-label="sad">😢</span></p>)}
                </Grid>
            </Fragment>
        );
    }
}

export default withStyles(styles)(withDrizzle(MyTruffles));