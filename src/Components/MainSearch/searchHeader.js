import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SideBar from "./swipeableDrawer";
import { Button, CardActionArea, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import logo from "../../Assets/welcomeLogoBlue.JPG";
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    borderRadius:'25px',

},
}));

export default function SearchHeader() {
  const classes = useStyles(); 

  return (
    <div className={classes.root}>
      <Grid container spacing={3} style={{width:'90%', margin:'auto'}}>
        <Grid item xs={12}  sm={6} md={6}style={{margin:'auto'}}>
    
        <CardMedia
        style={{maxWidth:'1100px', margin:'auto'}}
          className={classes.media}
          image={logo}
          title="Search the Middle Space"
        />
        </Grid>
        <Grid item xs={12}  sm={6} md={6} style={{margin:'auto'}}>
        <Paper style={{marginTop:'3%', borderRadius:'25px'}} elevation={20}>
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2"style={{marginTop:'3%',margin:'auto'}}>
            Search the Middle Space for Resources
          </Typography>
        <Grid container spacing={1} style={{ margin:'auto', marginTop:'5%', maxWidth:'500px'}}>
        <Grid item xs={12} sm={6} style={{margin:'auto'}}>
        <Button
        component={Link}
        to="/favorites"
        variant="contained"
        color="secondary"
        className={classes.button}
        endIcon={<FavoriteIcon></FavoriteIcon>}
      >
       Favorites
      </Button>
        </Grid>  <Grid item xs={12} sm={6} style={{margin:'auto'}}>
      <SideBar  /> 
      </Grid>
      </Grid>
    
          <Typography variant="h6" color="textSecondary" component="p" style={{marginBottom:'3%', fontSize:'1.0em'}}>
            View our entire library with just a few clicks. 
            Save your favorites to view later. 
          </Typography>
          <Typography variant="h6" component="p" style={{marginBottom:'3%', fontSize:'0.8em'}}>
          Please remember for now, upon closing the browser your saved resources are wiped. 
            A log in and offline feature will soon be added to change this.
          </Typography>
             
        </CardContent>
        </Paper>
  
        </Grid>
        
      </Grid>
    </div>
  );
}
