import React, { Fragment } from 'react';
import withDrizzle from '../DrizzleContainer';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import logo from '../logo.svg';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const Header = (props) => {

    const contract = props.drizzle.contracts.CryptoTruffles;
    const { classes } = props;

    return (
        <Fragment>
            <AppBar position="static" color="default">
                <Toolbar>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                    <img src={logo} className="App-logo" alt="logo" />
                </IconButton>
                <Typography variant="h6" color="inherit">
                Truffle University
                </Typography>
                </Toolbar>
            </AppBar>
            <h1>CryptoTruffles</h1>            
            <p>Welcome to CryptoTruffles ({contract.address}).</p>
        </Fragment>
    )
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withDrizzle(Header));