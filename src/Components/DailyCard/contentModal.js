import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    chip: {
        margin: theme.spacing(0.5),
    },
    section1: {
        margin: theme.spacing(3, 2),
    },
    section2: {
        margin: theme.spacing(2),
    },
    section3: {
        margin: theme.spacing(3, 1, 1),
    },
}));

export default function ContentModal() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.section1}>
                <Grid container alignItems="center">
                    <Grid item xs>
                        <Typography gutterBottom variant="h4">
                            Toothbrush
            </Typography>
                    </Grid>
                    <Grid item>
                        <Typography gutterBottom variant="h6">
                            $4.50
            </Typography>
                    </Grid>
                </Grid>
                <Typography color="textSecondary" variant="body2">
                    The light from Spirit depths
                    Strives outward like the sun itself:
                    <br></br>
                    It becomes life’s will force
                    And shines into the senses’ dullness <br></br>
                    To liberate the forces
                    Whereby creative powers ripen
                    <br></br>
                    From soul incentives in the works of Man.
        </Typography>
            </div>
            <Divider variant="middle" />
            <div className={classes.section2}>
                <Typography gutterBottom variant="body1">
                    Select type
        </Typography>
                <div>
                    <Chip className={classes.chip} label="Extra Soft" />
                    <Chip className={classes.chip} color="primary" label="Soft" />
                    <Chip className={classes.chip} label="Medium" />
                    <Chip className={classes.chip} label="Hard" />
                </div>
            </div>
            <div className={classes.section3}>
                <Button color="primary">Add to cart</Button>
            </div>
        </div>
    );
}