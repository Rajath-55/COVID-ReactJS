import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './cards.module.css';
const Cards = ({data : {confirmed, recovered,deaths, lastUpdate}}) =>{
    console.log(confirmed);
    if(!confirmed){
        return 'Loading...';

    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} className={cx(styles.card, styles.infected)} xs={12} md={3}>
                    <CardContent>
                    <Typography color="textSecondary" gutterbottom>Infected</Typography>
                    <Typography variant="h5"><CountUp start={0} end={confirmed.value} duration={2.0} separator=","/></Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">No of active cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className={cx(styles.card, styles.recovered)} xs={12} md={3}>
                    <CardContent>
                    <Typography color="textSecondary" gutterbottom>Recovered</Typography>
                    <Typography variant="h5"><CountUp start={0} end={recovered.value} duration={2.0} separator=","/></Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">No of recovered cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className={cx(styles.card, styles.deaths)} xs={12} md={3}>
                    <CardContent>
                    <Typography color="textSecondary" gutterbottom>Deaths</Typography>
                    <Typography variant="h5"><CountUp start={0} end={deaths.value} duration={2.0} separator=","/></Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">No of deaths caused by COVID 19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
