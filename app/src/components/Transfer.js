import React, { Component } from 'react';
import withDrizzle from '../DrizzleContainer';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    notchedOutline: {
        borderWidth: "1px",
        borderColor: "#fff !important"
    },
    multilineColor:{
        color: '#fff'
    },
    floatingLabelFocusStyle: {
        color: "#fff"
    },
    button: {

    }
  });

class Transfer extends Component {
    constructor(props) {
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        address: '0x...'
    }

    handleChange = address => event => {
        this.setState({
            [address]: event.target.value,
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        
        const { CryptoTruffles } = this.props.drizzle.contracts;

        const truffleId = this.props.match.params.id;
        const from = this.props.drizzle.web3.eth.accounts.givenProvider.selectedAddress;
        const to = this.state.address;

        const stackId = CryptoTruffles.methods.transferFrom.cacheSend(
            from,
            to,
            truffleId,
            { from }
        );
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid container justify="center" direction="row" spacing={16}>
                <Grid item>
                    <h2>Transfer</h2>
                    <p>Who's the lucky person?</p>
                    <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                        <Grid container justify="center" spacing={8}>
                            <Grid item xs={8}>
                                <TextField
                                        id="outlined-name"
                                        label="Destination Address"
                                        InputProps={{
                                            classes: {
                                            notchedOutline: classes.notchedOutline,
                                            input: classes.multilineColor
                                            }
                                        }}
                                        InputLabelProps={{
                                            className: classes.floatingLabelFocusStyle,
                                        }}
                                        value={this.state.address}
                                        onChange={this.handleChange('address')}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </Grid>
                            <Grid item xs={8}>
                                <Button type="submit" variant="contained" className={classes.button}>
                                    Transfer Truffle
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        );
    }
}

Transfer.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(withDrizzle(Transfer));