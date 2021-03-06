import React from 'react';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import logo from "../../Assets/logoMain.png"



const useStyles = makeStyles({
  root: {
   
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
});


export default function CardOne() {
 

  const classes = useStyles();



  return (
    <div>
   
     
          <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
          By using this site you agree to and understand the following:
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <Typography variant="h7"  style={{marginBottom:'25px'}}>
         <b>  The Middle Space provides this website as a service. </b>
        
        
        </Typography>
    
        <Typography variant="h9"  style={{marginBottom:'25px'}}>
       <b> The Middle Space does not accept any responsibility for any loss which may arise from reliance on information contained on this site.  </b>
        </Typography>
          </Typography>
          <Typography variant="body2" component="p">
          While the information contained within the site is periodically updated, no guarantee is given that the information provided in this website is correct, complete, and/or up-to-date.

The materials contained on this website are provided for general information purposes only and do not constitute legal or other professional advice on any subject matter.


        </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
      
    </div>
  );
}