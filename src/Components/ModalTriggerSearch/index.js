import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import ModalSearchContent from "./search";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from "@material-ui/core/IconButton";
import ModalDisplay from "./modalDisplay";
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import { apiBool } from "../../Actions/savedActivities";
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import searchLogo from "../../Assets/smallSearch.JPG";
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        flexGrow: 1,
    },
    maxWidth:650,
    margin:'auto'
},
  paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
  },
  media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
  },
}));



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const ModalTriggerSearch = ({ dispatchApiBool }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleApi = () => {
    dispatchApiBool(true)
  }
  const classes = useStyles();
  return (
    <div>
      

      <Card className={classes.root} style={{ margin: 'auto' }} elevation={14}>
                                <CardActionArea
                                 onClick={handleClickOpen}
                                >
                                    <CardMedia
                                        className={classes.media}
                                        image={searchLogo}
                                        title="search logo"
                                        style={{ margin: 'auto'}}
                                    />
                                    <CardContent style={{ margin: 'auto' }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                        <IconButton aria-label="delete"
                                           onClick={handleClickOpen}
                                          >
                                        <Button
                                            variant="contained"
                                                   color="secondary"
                                                     style={{ borderRadius:'15px'}}
                                                   startIcon={<SearchIcon/>}
                                                             >
                                                        Quick Search
                                                      </Button>
                                          </IconButton>
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            To view main lesson suggestion or content help , please use our interactive search feature.
                                         </Typography>
                                        <Divider style={{marginTop:'25px'}} />
                                        
                                    </CardContent>
                                </CardActionArea>
                                <Typography variant="body2" color="textSecondary" component="p">
                                            <b>   Please view our terms of service before using our App </b>
                                        </Typography>
                                <CardActions style={{ margin: 'auto' }}>

                                </CardActions>
                            </Card>
    
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        
        
      >
      
        <DialogContent >
          <DialogContentText id="alert-dialog-slide-description" >
          <Typography variant="h4"  color='textPrimary' >
                        Welcome to The Middle Space
        </Typography>
                    <Typography variant="h6" component="p" style={{marginBottom:'5px'}}>
                        A Resource for Educators and Parents.
                      
        </Typography>
        <Typography variant="h9" component="p" style={{marginBottom:'10px'}}>
                      
                       <br>
                        </br>
                       To view main lesson suggestion or content help , please use our interactive search feature.
        </Typography>
     
          </DialogContentText>
          <DialogTitle id="alert-dialog-slide-title">{<ModalDisplay />}</DialogTitle>
          <ModalSearchContent />
        </DialogContent>
        <DialogActions>
          <IconButton aria-label="delete"
            onClick={handleClose}
          >
            <Button
              variant="contained"
              color="secondary"

              startIcon={<HighlightOffIcon />}
            >
              close
 </Button>
          </IconButton>

        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStatetoProps = (state) => {

  return {

    savedUsedChoice: state.store.modalSearchChoice,
    apiStoredData: state.store.apiMainLessonQuery
  }


}

const mapDispatchToProps = (dispatch) => {
  return {

    dispatchApiBool: (bool) => dispatch(apiBool(bool))
  }
}
export default connect(mapStatetoProps, mapDispatchToProps)(ModalTriggerSearch); 