import React from "react";
import { Menu, Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import date from 'date-and-time';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import verseImage from "../../Assets/slideFour.jpg";
import SongGrid from "./songs";
import YouTubeIcon from '@material-ui/icons/YouTube';
import IconButton from "@material-ui/core/IconButton";
import ActivityCard from "./activity";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 550,


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
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 16,
    },
    pos: {
        marginBottom: 12,
    },
}));

const MenuPropDisplay = (props) => {

    const classes = useStyles();
    const now = new Date();
    let newDate = date.format(now, 'ddd, MMM DD YYYY');
    const bull = <span className={classes.bullet}>•</span>;
    if (props.menu === 0) {
        return (
            <div className={classes.root}>
                <div className={classes.section1}>

                    <SongGrid />

                </div>
            </div>



        )

    }

    else if (props.menu === 2) {
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
                        Pinstriped cornflower blue cottonrk or just down the
                        hall.
          </Typography>
                </div>
                <Divider variant="middle" />
                <ActivityCard />
                <div className={classes.section3}>
                    <Button color="primary">Add to cart</Button>
                </div>
            </div>
        )
    }



    else {
        return (
            <div className={classes.root}>
                <Card className={classes.root} style={{borderRadius:'25px'}}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={verseImage}
                            title="Contemplative Reptile"
                        />
                    </CardActionArea>
                    <CardContent>
                        <Paper elevation={!4}>
                            <div className={classes.section1}>

                                <Grid container alignItems="center">
                                    <CardContent>
                                    <Typography variant="h7"  className={classes.title}  style={{marginBottom:'5%' }} component="h2">
                                            Calendar of the Soul Verse
        </Typography>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>

                                            The light from Spirit depths
                                           
                                            Strives outward like the sun itself:
                                                   </Typography>
                                                   
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                     
                                                    It becomes life’s will force
                                                            And shines into the senses’ dullness <br></br>
                                                            </Typography>
                                                   
                                                   <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            To liberate the forces
                                                    Whereby creative powers ripen
                                                <br></br>
                                                </Typography>
                                                   
                                                   <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                            From soul incentives in the works of Man.
                                                  </Typography>
                                        <Typography variant="h7"  className={classes.title}  style={{textAlign:'right'}} component="h2">
                                            R{bull}Steiner{bull}Week 34
        </Typography>
                                      
                                    </CardContent>
                                </Grid>


                            </div>
                            <Divider variant="middle" />

                        </Paper>
                    </CardContent>


                </Card>

            </div>
        )
    }


}

export default MenuPropDisplay;