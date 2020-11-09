import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MenuPropDisplay from './menuPropDisplay';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import BrushIcon from '@material-ui/icons/Brush';

const useStyles = makeStyles({

});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  return (

<div>
    


    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Songs" icon={<LibraryMusicIcon />} />
      <BottomNavigationAction label="Verse" icon={<MenuBookIcon />} />
      <BottomNavigationAction label="Activities" icon={<BrushIcon />} />
    </BottomNavigation>
    <MenuPropDisplay menu={value}/>
    </div>
  );
}