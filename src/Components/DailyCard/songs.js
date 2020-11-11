import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import YouTubeIcon from '@material-ui/icons/YouTube';

import FsLightbox from 'fslightbox-react'
import {Paper, Grid, Divider, IconButton} from "@material-ui/core";
import { YoutubeSearchedFor } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        flexGrow: 1,
      },
      maxWidth: 650,
      margin: 'auto',
      borderRadius: '25px'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    media: {
      height: 0,
      marginLeft:'-12px',
      paddingTop: '56.25%', // 16:9
    },
    button: {
        margin: theme.spacing(1),
      },
  }));
  
export default function SongGrid() {
    const classes = useStyles();
    const [toggler, setToggler] = useState(false);
    return (
        <div>
            <Card className={classes.root}>
            <CardActionArea    onClick={() => setToggler(!toggler)}>
            <CardMedia
             
                className={classes.media}
                image="http://i3.ytimg.com/vi/0LSQeg3qW8U/maxresdefault.jpg"
                title="Contemplative Reptile"
            />

                        <CardContent>
                            <Paper elevation={!4}>
                                <div className={classes.section1}>

                                    <Grid container alignItems="center">

                                        <Grid item xs>

                                          
                                        </Grid>
                                        <Grid item>
                                            <Typography gutterBottom variant="h6">

                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Typography color="textSecondary" variant="body2">
                                       Anna, Joe and family share some songs. Courtesy of The Camphill School
              
    </Typography>
                                    <Typography gutterBottom variant="subtitle2" style={{ textAlign: 'right', marginTop: '15px' }}>
                                    <Button
                                style={{paddingRight:'11px'}}
                                         variant="contained"
                                        color="secondary"
                                          className={classes.button}
                                           startIcon={<YouTubeIcon/>}
      >
       
      </Button>
</Typography>
                                </div>
                                <Divider variant="middle" />

                            </Paper>
                        </CardContent>
                   
                        </CardActionArea>
                </Card>
                <FsLightbox
                toggler={toggler}
                sources={[
                 
                    "https://www.youtube.com/embed/0LSQeg3qW8U",
                    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                ]}
            />
        </div>
    )
}