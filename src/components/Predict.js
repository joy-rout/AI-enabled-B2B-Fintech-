import * as React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';

const style = {

  bgcolor: '#58687E',

};


export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <div>
      <div class="predict-box">
                <button class="predict-txt" onClick={handleClickOpen}>
                    <a class="predict-btn" href="#">
                        Predict
                    </a> 
                </button>
            </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box sx={style}>
        <DialogTitle id="alert-dialog-title">
          {"Predict Record(s)"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText class='delete-modal-content' id="alert-dialog-description">
          Users should be able to predict the payment date of selected Invoices with the help of the Predict button.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose }>Predict</Button>
          <Button variant="contained" onClick={handleClose } autoFocus>
            Cancel
          </Button>
        </DialogActions>
        </Box>
      </Dialog>
      
    </div>
  );
  
}
