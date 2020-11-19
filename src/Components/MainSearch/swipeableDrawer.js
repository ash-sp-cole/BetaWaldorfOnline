import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Typography, TextField, FormControl, InputLabel,Icon, MenuItem, FormHelperText, Paper } from "@material-ui/core";
import Select from '@material-ui/core/Select';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import searchLogo from "../../Assets/smallSearch.JPG";
import Tooltip from '@material-ui/core/Tooltip';
import SearchIcon from '@material-ui/icons/Search';
import ImageIcon from '@material-ui/icons/Image';
import FavoriteIcon from '@material-ui/icons/Favorite';
import date from 'date-and-time';
import saved from '../../Assets/cardPropBanner.JPG'
import {apiBool, callApi} from "../../Actions/savedActivities";
import { connect } from 'react-redux';
import AutoSearch from "./autoSearch";


const useStyles = makeStyles((theme) => ({
    list: {
        width: 325,
    },
    fullList: {
        width: 'auto',
    },
    root: {
     
        width: '100%',
        maxWidth: 500,
    },
    media: {
        height: 140,
    },
    button: {
        margin: theme.spacing(1),
      },
}));

const Sidebar =({dispatchApiBool, dispatchCallApi},props) => {
    const classes = useStyles();
    const [state, setState] = React.useState(false)
    const [grade, setGrade] = React.useState('');
    const [lesson, setLesson] = React.useState('');

    const now = new Date();
    let newDate = date.format(now, 'ddd, MMM DD YYYY'); 

 
    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const handleGradeChange = (event) => {
        setGrade(event.target.value);
      };
      const handleLessonChange = (event) => {
        setLesson(event.target.value);
      };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            // onKeyDown={toggleDrawer(anchor, false)}
        >
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={searchLogo}
                        title="Contemplative Reptile"
                    />
                    <CardContent style={{
                        marginTop:'2%'
                    }}>
                       
                        <Typography variant="body2" color="textSecondary" component="p">
                           Please use the following form to find resources.
          </Typography>

          </CardContent>
                </CardActionArea>
                <Typography gutterBottom variant="h6" component="h2"style={{marginTop:'10%'}} >
                            Auto Search
          </Typography>
                <Tooltip title="Try out our Auto Search feature" arrow>
                         <AutoSearch/>
                       </Tooltip>
                       <Typography gutterBottom variant="h6" component="h2" style={{marginTop:'3%'}}  >
                            or
          </Typography>
          <FormControl className={classes.formControl} style={{marginTop:'2%'}} > 
        <InputLabel id="demo-simple-select-helper-label">Grade</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={grade}
          onChange={handleGradeChange}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
   
          <MenuItem value={"Kindergarten"}>Kindergarten</MenuItem>
          <MenuItem value={"grade One"}>Grade One</MenuItem>
          <MenuItem value={"grade Two"}>Grade Two</MenuItem>
          <MenuItem value={"grade Three"}>Grade Three</MenuItem>
          <MenuItem value={"grade Four"}>Grade Four</MenuItem>
          <MenuItem value={"grade Five"}>Grade Five</MenuItem>
          <MenuItem value={"grade Six"}>Grade Six</MenuItem>
          <MenuItem value={"grade Seven"}>Grade Seven</MenuItem>
          <MenuItem value={"grade Eight"}>Grade Eight</MenuItem>
          <MenuItem value={"grade Nine"}>Grade Nine</MenuItem>
          <MenuItem value={"grade Ten"}>Grade Ten</MenuItem>
          <MenuItem value={"grade Eleven"}>Grade Eleven</MenuItem>
          <MenuItem value={"grade Twleve"}>Grade Twelve</MenuItem>
        
        
        </Select>
        <FormHelperText>Use this box to search by grade</FormHelperText>


        
      </FormControl>
      <FormControl className={classes.formControl} style={{marginTop:'5%'}} style={{marginBott:'10%'}} > 
        <InputLabel id="demo-simple-select-helper-label">Lesson Type</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={lesson}
          onChange={handleLessonChange}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value={"Opening Exercises"}>Opening Exercises</MenuItem>
          <MenuItem value={"Art"}>Art</MenuItem>
          <MenuItem value={"Music"}>Music</MenuItem>
          <MenuItem value={"Drama"}>Drama</MenuItem>
          <MenuItem value={"Science"}>Science</MenuItem>
          <MenuItem value={"History"}>History</MenuItem>
          <MenuItem value={"Languages"}>Languages</MenuItem>
          <MenuItem value={"Geography"}>Geography</MenuItem>
          <MenuItem value={"Math"}>Math</MenuItem>
          <MenuItem value={"Movement"}>Movement</MenuItem>
        </Select>
        <FormHelperText>Use this box to search by grade</FormHelperText>


      
      
      <Button
      
     
    onClick={() => {
      dispatchCallApi()
  }}
        style={{marginTop:'10%', marginBottom:'15%'}}
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<SearchIcon />}
      >
        Search
      </Button>
      <Button
         onClick={() => {
          dispatchApiBool(false)
      }}
        style={{marginTop:'10%', marginBottom:'15%'}}
        variant="contained"
        color="defualt"
        className={classes.button}
        startIcon={<SearchIcon />}
      >
        Clear
      </Button>
      </FormControl>


      <Paper elevation={5}>
      <CardActionArea>
      <CardMedia
                        className={classes.media}
                        image={saved}
                        title="Contemplative Reptile"
                    />
   
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FavoriteIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Saved Resources" secondary={newDate} />
      </ListItem>
      </CardActionArea>
     

      <Button
        style={{marginTop:'10%', marginBottom:'15%'}}
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<SearchIcon />}
      >
        Logout
      </Button>
      </Paper>
            </Card>
            
        </div>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>Search</Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}

const mapStatetoProps = (state) => {

  return {
     
    apiBoolRedux: state.store.apiBool,
    apiResponse: state.store.apiMainLessonQuery
  }


}

const mapDispatchToProps = (dispatch) => {
  return {

    dispatchApiBool: (bool) => dispatch(apiBool(bool)),
    dispatchCallApi : () => dispatch(callApi())
  }
}


export default connect(mapStatetoProps, mapDispatchToProps)(Sidebar); 