import React, { Component } from 'react';
import withDrizzle from '../DrizzleContainer';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { Link } from 'react-router-dom';

const styles = {
  card: {
    maxWidth: 345,
    backgroundColor: "#fff"
  },
  media: {
    height: 160,
    width: 180,
    marginTop: 20
  },
  title: {
    color: "#5E464D",
    textDecoration: "none"
  }
};

class Truffle extends Component {
  constructor(props) {
    super(props);

    const { CryptoTruffles } = this.props.drizzle.contracts;
    this.dataKey = CryptoTruffles.methods.getTruffle.cacheCall(props.truffleId);
  }

  render() {

    const { CryptoTruffles } = this.props.drizzleState.contracts;

    // If the data isn't here yet, show loading
    if(!(this.dataKey in CryptoTruffles.getTruffle)) {
      return (
        <span>Loading...</span>
      )
    }

    const contract = CryptoTruffles.getTruffle[this.dataKey];

    var title = contract.value["title"];
    var color = contract.value["color"];
    var emotion = contract.value["emotion"];
    
    const { classes } = this.props;

    return (
      <Grid item>
        <Card className={classes.card}>
          <CardActionArea>
            <Link to={`/truffle/${this.props.truffleId}`}>
              <CardMedia
                className={classes.media}
                image={`/truffles/${emotion}.png`}
                title={title}
              />
            </Link>
            <CardContent>
            <Typography 
              gutterBottom 
              variant="h5" 
              component="h2"
              className={classes.title}
              component={Link} 
              to={`/truffle/${this.props.truffleId}`}>
                {title}
            </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" component={Link} to={`/truffle/${this.props.truffleId}`}>
              View
            </Button>
            <Button size="small" component={Link} to={`/transfer/${this.props.truffleId}`}>
              Transfer
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

Truffle.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(withDrizzle(Truffle));