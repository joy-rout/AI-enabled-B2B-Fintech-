import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Delete from './images/delete.svg';
import Box from '@mui/material/Box';

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
      <div class="delete-box">
                <button class="delete-txt" onClick={handleClickOpen}>
                    <a class="delete-btn" href="#">
                        <img src={Delete} height="12px" width="12px" alt='delete'/>
                        Delete
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
          {"Delete Record(s)"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText class='delete-modal-content' id="alert-dialog-description">
          You'll lose your record(s) after this action. We can't recover
                  them once you delete.<br></br>
                  Are you sure you want to <text>permanently delete</text> them?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleClose }>Delete</Button>
          <Button variant='contained' onClick={handleClose } autoFocus>
            Cancel
          </Button>
        </DialogActions>
        </Box>
      </Dialog>
      
    </div>
  );
  
}
