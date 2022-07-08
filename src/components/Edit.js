import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Edit from './images/edit.svg';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const style = {

  bgcolor: '#58687E',

};

export default function EditDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <div>
      <div class="edit-box">
                <button class="edit-txt" onClick={handleClickOpen}>
                    <a class="edit-btn" href="#">
                        <img src={Edit} height="12px" width="12px" alt='delete' padding='10px'/>
                        Edit
                    </a> 
                </button>
            </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="add-dialog-title"
        aria-describedby="add-dialog-description"
      >
        <Box sx={style}>
        <DialogTitle id="add-dialog-title">
          {"Edit Record(s)"}
        </DialogTitle>
        <DialogContent>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '200px' , length: '200px'   },
      }}
      noValidate
      autoComplete="off"
    >   
        
        
        <TextField  id="invoice_currency" label="invoice_currency" variant="outlined" />
        
        <TextField id="customer_paymnet_terms" label="customer paymnet terms" variant="outlined" />
        



    </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained"  onClick={handleClose }>Edit</Button>
          <Button variant="contained" onClick={handleClose } autoFocus >
            Cancel
          </Button>
        </DialogActions>
        </Box>
      </Dialog>
      
    </div>
  );
  
}

