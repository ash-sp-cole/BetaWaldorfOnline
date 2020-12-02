import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import HomeIcon from '@material-ui/icons/Home';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
  root: {
 
    margin:'auto'
  },
  largeIcon: {
    width: 80,
    height: 60,
  },
});

export default function NavigationBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Search Resources"   component={Link}
       to="/mainsearch" icon={<ImageSearchIcon/>} />
      <BottomNavigationAction className={classes.largeIcon}    component={Link}
       to="/" fontSize="large" icon={<HomeIcon/>} />
      <BottomNavigationAction label="Job Search"
         component={Link}
         to="/jobs" icon={<GroupAddIcon />} />
    </BottomNavigation>
  );
}


