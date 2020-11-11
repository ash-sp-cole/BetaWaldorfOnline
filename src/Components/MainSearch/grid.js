import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import PropCard from "./propCard";
import PropCardBlue from './propCardBlue';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 'auto',
        borderRadius:'25px',
        marginBottom:'15%'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius:'25px'
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={4}>
                    <PropCard />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                  <PropCardBlue/>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <PropCard />
                </Grid>
              
            </Grid>
        </div>
    );
}