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
}));

const MenuPropDisplay = (props) => {

    const classes = useStyles();
    const now = new Date();
    let newDate = date.format(now, 'ddd, MMM DD YYYY');

    if (props.menu === 0) {
        return (
            <div className={classes.root}>
                <div className={classes.section1}>
                    <Grid container alignItems="center">
                        <Grid item xs>
                        <SongGrid/>
                            <Typography gutterBottom variant="h6">
                                Sing along with Joe, Anna and the Family.
          </Typography>
                        </Grid>
                        
                    </Grid>
                    <Typography color="textSecondary" variant="body2" style={{marginRight:'5%',marginLeft:'5%', marginBottom:'5%'}}>
                        The Camphill School presents series: available on YouTube. 
      </Typography>
      <div>
               <IconButton color="secondary" aria-label="add an alarm"  >
           <YouTubeIcon/>
          </IconButton>
     <IconButton color="secondary" style={{marginRight:'15%', marginLeft:'15%'}} aria-label="add an alarm"  >
           <YouTubeIcon/>
          </IconButton>
          <IconButton color="secondary" aria-label="add an alarm"  >
           <YouTubeIcon/>
          </IconButton>
                    </div>
                </div>
                <Divider variant="middle" />
                <div className={classes.section2}>
               
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
                        Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the
                        hall.
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
        )
    }


    else {
        return (
            <div className={classes.root}>
                <Card className={classes.root}>
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

                                        <Grid item xs>

                                            <Typography gutterBottom variant="h5" style={{ marginBottom: '7%', marginTop: '-10%' }}>
                                                Calendar of the Soul for this week
        </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography gutterBottom variant="h6">

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
                                    <Typography gutterBottom variant="h6" style={{ textAlign: 'right', fontSize: '1em', marginTop: '15px' }}>
                                        R.Steiner week 34
</Typography>
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