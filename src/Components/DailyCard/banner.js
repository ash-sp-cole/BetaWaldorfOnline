import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import bannerLogo from "../../Assets/welcomeLogo.JPG";
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import date from 'date-and-time';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      flexGrow: 1,
    },
    maxWidth: 650,
    margin: 'auto',
    borderRadius: '25px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 0,
    marginLeft:'-12px',
    paddingTop: '56.25%', // 16:9
  },
}));


export default function Banner() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const now = new Date();
   let newDate = date.format(now, 'ddd, MMM DD YYYY'); 
return(
  <div>
    <Card className={classes.root}
    elevation={10}>
      <CardActionArea
        onClick={handleClickOpen}
      >
        <CardMedia
          className={classes.media}
          image={bannerLogo}
          title="Quick Guide"
        />
        <CardContent>
        <Typography gutterBottom variant="h7" component="h1"
        style={{marginBottom:'5%'}}>
        {newDate}
          </Typography>
          <Typography gutterBottom variant="h9" component="h4">
            Your quick guide for daily resources
          </Typography>
          <IconButton color="secondary" aria-label="add an alarm">
           <ArrowForwardIcon/>
          </IconButton>
        </CardContent>
      </CardActionArea>
      <CardActions>

      </CardActions>
    </Card>
     <Dialog
     open={open}
     onClose={handleClose}
     aria-labelledby="alert-dialog-title"
     aria-describedby="alert-dialog-description"
   >
     <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
     <DialogContent>
       <DialogContentText id="alert-dialog-description">
       
       </DialogContentText>
     </DialogContent>
     <DialogActions>
       <Button onClick={handleClose} color="primary">
         Disagree
       </Button>
       <Button onClick={handleClose} color="primary" autoFocus>
         Agree
       </Button>
     </DialogActions>
   </Dialog>
   </div>
  );
}