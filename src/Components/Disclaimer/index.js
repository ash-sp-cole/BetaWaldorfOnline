import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from "@material-ui/core/Typography";
import logo from "../../Assets/logoMain.png"
export default function TermsModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Terms of Service
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
          <img 
      
          src={logo}></img>
        <DialogTitle id="alert-dialog-title">{" By using this site you agree to and understand the following:"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Typography variant="h7"  style={{marginBottom:'25px'}}>
         <b>  The Middle Space provides this website as a service. </b>
        
        
        </Typography>
    
        <Typography variant="h9"  style={{marginBottom:'25px'}}>
       <b> The Middle Space does not accept any responsibility for any loss which may arise from reliance on information contained on this site.  </b>
        </Typography>
         
     </DialogContentText>
     <Typography variant="body1" component="p">
          While the information contained within the site is periodically updated, no guarantee is given that the information provided in this website is correct, complete, and/or up-to-date.

The materials contained on this website are provided for general information purposes only and do not constitute legal or other professional advice on any subject matter.


        </Typography>
        </DialogContent>
        <DialogActions>
         
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}