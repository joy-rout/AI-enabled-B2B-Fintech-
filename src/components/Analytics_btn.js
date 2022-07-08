
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
    <div class='analytics-box'>
      <Button class='analytics-txt' onClick={handleOpen}>
      <a class="analytics-btn" href="#">
   
        analytics view </a>
        </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="predict-modal-title"
        aria-describedby="predict-modal-description"
      >
        <Box sx={style}>
          <Typography class="predict-modal-title" variant="h6" component="h2">
            Analytics View
          </Typography>
          <Typography class="predict-modal-description" sx={{ m: 5, p:5}}>
              <div>
              <div >Clear Date<br></br>
              <TextField id="clear_date" variant="outlined" type="date"  />
              <TextField id="clear_date" variant="outlined" type="date"  />
             </div>
             <div>Due Date <br></br>
             <TextField id="due_date"  variant="outlined" type="date"  />
             <TextField id="due_date"  variant="outlined" type="date"  />
              </div></div>
              <div>
              <div>Baseline Create Date<br></br>
              <TextField id="baseline_create_date" variant="outlined" type="date"  />
              <TextField id="baseline_create_date" variant="outlined" type="date"  />
             </div>
             <div>Invoice Currency <br></br>
             <TextField id="invoice_currency"  variant="outlined" type="date"  />
              </div></div>
          </Typography>
          <Button variant="contained" onClick={handleClose }>Submit</Button>
          <Button variant="contained" onClick={handleClose } autoFocus>
            Cancel
          </Button>
        </Box>


      </Modal>
    </div>
  );
}