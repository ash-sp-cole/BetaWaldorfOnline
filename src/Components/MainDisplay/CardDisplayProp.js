import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
 
    
  },
  media: {
    height: 150,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CardProp(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
    console.log(props.imageUrl)

    console.log("card prop " + props.grade)
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}
    style={{margin:'auto'}}
    >
        <CardActionArea
        onClick={handleExpandClick}
        >
      <CardHeader
       style={{marginLeft:'7%'}}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        titleTypographyProps={{variant:'h6' }}
        title={props.grade}
        subheaderTypographyProps={{variant:'h8' }}
        subheader={props.lessonType}
      />
      
      <CardMedia
        className={classes.media}
        
        image={props.imageUrl}
        title={props.lessonType}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         {props.lessonPlans}
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={{margin:'auto'}}>
        <IconButton aria-label="add to favorites"
        style={{marginRight:'-5%'}}
        >
          <FavoriteIcon />
        </IconButton>
       
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
       
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
                    <Typography   variant="body1" color="textSecondary" component="p">
         more info
        </Typography>
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.lessonType}</Typography>
          <Typography paragraph>
           {props.songs}
          </Typography>
          <Typography paragraph>
           {props.stories}
               </Typography>
          <Typography paragraph>
         {props.poems}
          </Typography>
          <Typography>
         {props.verses}   </Typography>
        </CardContent>
      </Collapse>
      </CardActionArea>
    </Card>
  );
}