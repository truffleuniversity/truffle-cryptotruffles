import React, { Component } from 'react';
import withDrizzle from '../DrizzleContainer';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
  card: {
    maxWidth: 460,
    backgroundColor: "#fff",
    paddingTop: 20,
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  media: {
    height: 460,
    width: 460,
    marginTop: 20
  },
  title: {
    color: "#5E464D"
  },
  owner: {
    color: "#5E464D",
    fontSize: "14"
  }
};

class TruffleDetail extends Component {
  constructor(props) {
    super(props);
    
    const { CryptoTruffles } = this.props.drizzle.contracts;
    this.dataKey = CryptoTruffles.methods.getTruffle.cacheCall(this.props.match.params.id);
    this.ownerKey = CryptoTruffles.methods.ownerOf.cacheCall(this.props.match.params.id);
  }

  render() {

    const { CryptoTruffles } = this.props.drizzleState.contracts;

    // If the data isn't here yet, show loading
    if(!(this.dataKey in CryptoTruffles.getTruffle) || !(this.ownerKey in CryptoTruffles.ownerOf)) {
      return (
        <span>Loading...</span>
      )
    }

    const contract = CryptoTruffles.getTruffle[this.dataKey];
    const owner = CryptoTruffles.ownerOf[this.ownerKey];

    const title = contract.value["title"];
    // const color = contract.value["color"];
    const emotion = contract.value["emotion"];
    
    const { classes } = this.props;

    return (
        <Grid container className={classes.root} justify="center" spacing={16}>
            <Grid item>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={`/truffles/${emotion}.png`}
                        title={title}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                            {title}
                        </Typography>
                        <Typography gutterBottom className={classes.owner}>
                            <strong>Owned by</strong> {owner.value}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    );
  }
}

TruffleDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(withDrizzle(TruffleDetail));