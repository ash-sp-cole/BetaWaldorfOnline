import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import MusicNoteTwoToneIcon from '@material-ui/icons/MusicNoteTwoTone';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import HomeGallery from '../HomeGallery';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      width:'100%',
      borderRadius:'25px'
    },
  }));

export default function Blackboard() {
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
     <Button
    
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<MusicNoteTwoToneIcon/>}
        onClick={handleClickOpen}
      >
     <Typography variant="caption" display="block" gutterBottom>
        Song Finder 
        </Typography>
      
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Blackboard drawing suggestions"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           <HomeGallery/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<HighlightOffIcon/>}
        onClick={handleClose}
      >
        
      </Button>
         
        </DialogActions>
      </Dialog>
    </div>
  );
}