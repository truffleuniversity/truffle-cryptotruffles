import React, { Fragment } from 'react';
import withDrizzle from '../DrizzleContainer';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

import logo from '../logo.svg';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const Header = (props) => {

    const { classes } = props;

    return (
        <Fragment>
            <AppBar position="static" color="default">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <img src={logo} className="App-logo" alt="logo" />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        <strong>Truffle</strong> University
                    </Typography>
                    <div className={classes.grow} />
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/collection">The Collection</Button>
                    <Button color="inherit" component={Link} to="/my">My Truffles</Button>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withDrizzle(Header));