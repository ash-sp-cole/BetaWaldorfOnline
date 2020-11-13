import React from "react";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Paper,Typography,Grid,Divider} from "@material-ui/core";
import headerLogo from "../../Assets/welcomeLogoRed.JPG";
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



const PropCardRed = (props) =>{
    
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
                                        Ancient Rome
                                    </Typography>
                                    <Typography variant="h5" gutterBottom>
                                       Fifth Grade
                                           </Typography>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Finally, the students explore the life of the ancient Greeks, focusing on Grecian  <b> art,
                                         culture, language,</b> and  <b> movement </b>. 
                                         
                                                   </Typography>
                                                   
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                     
                                        The students learn about many ancient Greek contributions
                                          to the present day, including ideas about beauty, truth, courage, and the social order. 
                                                            </Typography>
                                                   
                                                   <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                   The  <b> Pentathlon </b> helps the children experience firsthand the wonderful  <b>harmony of body 
                                        and soul  </b> that led the Greeks to feel themselves at home in the physical world.
                                                <br></br>
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
                                <Typography paragraph>Method:</Typography>
                                <Typography paragraph>
                                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                    minutes.
                                </Typography>
                                <Typography paragraph>
                                and set aside, leaving chicken
                                    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                </Typography>
                                <Typography paragraph>
                                    Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                ucking them down into the rice, and cook
                                    again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                    minutes more. (Discard any mussels that don’t open.)
                                </Typography>
                                <Typography>
                                    Set aside off of the heat to let rest for 10 minutes, and then serve.
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
                                <Typography paragraph>Method:</Typography>
                                <Typography paragraph>
                                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                    minutes.
                                </Typography>
                                <Typography paragraph>
                                and set aside, leaving chicken
                                    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                </Typography>
                                <Typography paragraph>
                                    Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                ucking them down into the rice, and cook
                                    again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                    minutes more. (Discard any mussels that don’t open.)
                                </Typography>
                                <Typography>
                                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                                </Typography>
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


export default PropCardRed;