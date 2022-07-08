
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
 import TextField from '@mui/material/TextField';

const style = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#58687E',
  border: '2px solid #000',
  boxShadow: 24,
  p: 10,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div class='advance-box'>
      <Button class='advance-txt' onClick={handleOpen}>
      <a class="advance-btn" href="#">
   
        Advance Search </a>
        </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="advance-modal-title"
        aria-describedby="advance-modal-description"
      >
        <Box sx={style}>
          <Typography class="advance-modal-title" variant="h6" component="h2">
            Advance Search
          </Typography>
          <Typography class="advance-modal-description" sx={{ m: 5, p:5}}>
              <TextField id="doc_id" label="document id" variant="outlined" />
              <TextField id="cust_number" label="customer number" variant="outlined" />
              <TextField id="invoice_id" label="invoice id" variant="outlined" />
              <TextField id="buisness_year" label="buisness year" variant="outlined" />
          </Typography>
          <Button variant="contained"  onClick={handleClose }>Search</Button>
          <Button variant="contained" onClick={handleClose } autoFocus>
            Cancel
          </Button>
        </Box>


      </Modal>
    </div>
  );
}