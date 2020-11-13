import React from "react";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Paper,Typography,Grid,Divider} from "@material-ui/core";
import headerLogo from "../../Assets/cardPropBanner.JPG";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 550,
            margin:'auto',
        
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



const TestProp = (props) =>{
    
    const classes = useStyles();


const [expanded1, setExpanded1] = React.useState(false);
const [expanded2, setExpanded2] = React.useState(false);
const [expanded3, setExpanded3] = React.useState(false);

const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };




return(
    <div>
<div className={classes.root}>
    <Paper elevation={14} style={{borderRadius:'25px'}}>
                <Card className={classes.root} style={{borderRadius:'25px'}} >
                    <CardActionArea onClick={handleExpandClick3}>
                        <CardMedia
                            className={classes.media}
                            image={headerLogo}
                            title="The Middle Space"
                        />
                    </CardActionArea>
                
                    <CardContent>
                        <Paper elevation={!4}>
                            <div className={classes.section1}>

                                <Grid container alignItems="center">
                                    <CardContent>
                                    <Typography variant="h3" gutterBottom>
                                        {props.subject}
                                    </Typography>
                                    <Typography variant="h5" gutterBottom>
                                       {props.grade} Grade
                                           </Typography>
                                           <Typography variant="h5" gutterBottom>
                                       {props.lessonType}
                                       </Typography>
                                       <CardMedia
                            className={classes.media}
                            image={props.imageUrl}
                            title="The Middle Space"
                        />
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        {props.introduction}
                                         
                                                   </Typography>
                                                   
                                     
                                                   
                                                  
                                        <Typography variant="h7"  className={classes.title}  style={{textAlign:'right'}} component="h2">
                                           
                                                         </Typography>



                                       <CardActionArea  onClick={handleExpandClick1} disableSpacing style={{margin:'auto', textAlign:'center'}}>
                                           <div style={{margin:'auto'}}>
                                                 <IconButton aria-label="add to favorites">
                                                   <EmojiPeopleIcon />
                                                  </IconButton>
                                                    <IconButton >
                                                        Opening Exercises
                                                 
                                              </IconButton>
                                          <IconButton
                                             className={clsx(classes.expand, {
                                                [classes.expandOpen]: expanded1,
                                            })}
                                           
                                            aria-expanded={expanded1}
                                            aria-label="show more"
                                                                    >
                                <ExpandMoreIcon />
                                </IconButton>
                                </div>
                            </CardActionArea>
                            <Collapse in={expanded1} timeout="auto" unmountOnExit>
                                <CardContent>
                                <Typography paragraph>Verses</Typography>
                                <Typography paragraph>
                                  {props.verses}
                                </Typography>
                                <Typography paragraph style={{marginBottom:"5%"}}>{props.verseAuthor}</Typography>
                                <Typography paragraph>Songs</Typography>
                                <Typography paragraph>
                                  {props.songs}
                                </Typography>
                                <Typography paragraph style={{marginBottom:"5%"}}>{props.songAuthor}</Typography>
                                <Typography paragraph >Activities</Typography>
                                <Typography paragraph>
                                  {props.openingExercises}
                                </Typography>
                                
                                </CardContent>
                            </Collapse>
                            <CardActionArea  onClick={handleExpandClick2} disableSpacing style={{margin:'auto', textAlign:'center'}}>
                                           <div style={{margin:'auto'}}>
                                                 <IconButton aria-label="add to favorites">
                                                   <LocalLibraryIcon />
                                                  </IconButton>
                                                    <IconButton >
                                                        Main Lesson
                                                 
                                              </IconButton>
                                          <IconButton
                                             className={clsx(classes.expand, {
                                                [classes.expandOpen]: expanded1,
                                            })}
                                           
                                            aria-expanded={expanded1}
                                            aria-label="show more"
                                                                    >
                                <ExpandMoreIcon />
                                </IconButton>
                                </div>
                            </CardActionArea>
                            <Collapse in={expanded2} timeout="auto" unmountOnExit>
                                <CardContent>
                                <Typography paragraph>{props.lessonPlans}</Typography>
                              
                                </CardContent>
                            </Collapse>
                                                            </CardContent>
                                                        
                                                        </Grid>


                                                    </div>
                                                    <Divider variant="middle" />

                        </Paper>
                    </CardContent>
                    <CardActionArea  onClick={handleExpandClick3} disableSpacing style={{margin:'auto', textAlign:'center'}}>
                                           <div style={{margin:'auto'}}>
                                                 <IconButton aria-label="add to favorites">
                                                  <PhotoLibraryIcon /> 
                                                  </IconButton>
                                                  Images and Resources
                                          <IconButton
                                             className={clsx(classes.expand, {
                                                [classes.expandOpen]: expanded3,
                                            })}
                                           
                                            aria-expanded={expanded3}
                                            aria-label="show more"
                                                                    >
                                <ExpandMoreIcon />
                                </IconButton>
                                </div>
                            </CardActionArea>


                            
                            <Collapse in={expanded3} timeout="auto" unmountOnExit>
                                <CardContent>
                                <Typography paragraph>Method:</Typography>
                                <Typography paragraph>
                                   images
                                </Typography>
                              
                                </CardContent>
                            </Collapse>

                </Card>
                </Paper>
            </div>

        </div>
    )
}


export default TestProp;