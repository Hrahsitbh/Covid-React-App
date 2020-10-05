import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import './Cards.css';

const cardsData = {
    infected: {
        title: "Infected",
        text: "No. of active cases of COVID-19"
    },
    recovered: {
        title: "Recovered",
        text: "No. of recoveries from COVID-19"
    },
    deaths: {
        title: "Deaths",
        text: "No. of deaths caused by COVID-19"
    }
};

function Cards(props) {
    const { data: { confirmed, deaths, recovered, lastUpdate } } = props;
    if (!confirmed || !deaths || !recovered) return 'Loading...';
    const date = new Date(lastUpdate).toDateString();
    return (
        <div className="cards-container">
            <Grid container spacing={3} justify="center">
                {
                    Object.keys(cardsData).map((item, index) => {
                        return (
                            <Grid item xs={12} md={3} key={index} component={Card} className={`card ${item}`}>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>{cardsData[item].title}</Typography>
                                    <Typography variant="h6">
                                        <CountUp
                                            start={0}
                                            end={confirmed.value}
                                            duration={2.5}
                                            separator=","
                                        />
                                    </Typography>
                                    <Typography color="textSecondary">{date}</Typography>
                                    <Typography variant="body2">{cardsData[item].text}</Typography>
                                </CardContent>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </div>
    );
}

export default Cards;