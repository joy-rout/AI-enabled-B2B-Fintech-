// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
import Add from './images/add.svg';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// // import Stack from '@mui/material/Stack';
// // import Snackbar from '@mui/material/Snackbar';
// // import MuiAlert from '@mui/material/Alert';
// // import Alert from '@mui/material/Alert';


// export default function AddDialog() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
  

//   return (
//     <div>
//       <div class="add-box">
//                 <button class="add-txt" onClick={handleClickOpen}>
//                     <a class="add-btn" href="#">
//                         <img src={Add} height="12px" width="12px" alt='delete' padding='10px'/>
//                         Add
//                     </a> 
//                 </button>
//             </div>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="add-dialog-title"
//         aria-describedby="add-dialog-description"
//       >
//         <DialogTitle id="add-dialog-title">
//           {"Add Record(s)"}
//         </DialogTitle>
//         <DialogContent>
    //     <Box
    //   component="form"
    //   sx={{
    //     '& > :not(style)': { m: 1, width: '100px' , length: '100px' },
    //   }}
    //   noValidate
    //   autoComplete="off"
    // >   
    //     <TextField id="Business_code" label="Business_code" variant="outlined" />
    //     <TextField id="customer_number" label="cust_number" variant="outlined" />
    //     <TextField id="clear_date" label="clear date" variant="outlined" type="date"/>
    //     <TextField id="business_year" label="business year" variant="outlined" /><br></br>
        
    //     <TextField id="customer_id" label="customer_id" variant="outlined" />
    //     <TextField id="posting_date" label="posting date" variant="outlined" type="date" />
    //     <TextField id="document_create_date" label="document create date" variant="outlined" type="date" />
    //     <TextField id="due_date" label="Odue date" variant="outlined" type="date" /><br></br>
        
    //     <TextField id="invoice_currency" label="invoice_currency" variant="outlined" />
    //     <TextField id="document_type" label="document type" variant="outlined" />
    //     <TextField id="posting_id" label="posting id" variant="outlined" />
    //     <TextField id="total_open_amount" label="total open amount" variant="outlined" /><br></br>

    //     <TextField id="baseline_create_date" label="baseline create date" variant="outlined" type="date" />
    //     <TextField id="customer_paymnet_terms" label="customer paymnet terms" variant="outlined" />
    //     <TextField id="invoice_id" label="invoice id" variant="outlined" />



    // </Box>
      //   </DialogContent>
      //   <DialogActions>
      //     <Button onClick={handleClose }>Add</Button>
      //     <Button onClick={handleClose } autoFocus>
      //       Cancel
      //     </Button>
      //   </DialogActions>
      // </Dialog>
      
//     </div>
//   );
  
// }


import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
 import TextField from '@mui/material/TextField';
import { padding } from '@mui/system';
import { addData } from '../Data';

const style = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:950,
  bgcolor: '#58687E',
  border: '2px solid #000',
  boxShadow: 24,

};


export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div class='add-box'>
      <Button class='add-txt' onClick={handleOpen} >
      <a class="add-btn" href="#">
      <img src={Add} height="12px" width="12px" alt='add' padding='10px' />
        Add</a>
        </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography class="modal-modal-title" variant="h6" component="h2">
            Add Record(s)
          </Typography>
          <Typography class="modal-modal-description" sx={{ m: 1, p:20}}>
            <div class='column_gap'>
               <TextField id="Business_code" label="Business_code" variant="outlined" />
               <TextField id="customer_number" label="cust_number" variant="outlined" />
               <TextField id="clear_date" label="clear date" variant="outlined" type="date" InputLabelProps={{ shrink: true }} />
               <TextField id="business_year" label="business year" variant="outlined" /><br></br></div>
        
               <TextField id="customer_id" label="customer_id" variant="outlined" />
               <TextField id="posting_date" label="posting date" variant="outlined" type="date" InputLabelProps={{ shrink: true }} />
               <TextField id="document_create_date" label="document create date" variant="outlined" type="date" InputLabelProps={{ shrink: true }} />
               <TextField id="due_date" label="Odue date" variant="outlined" type="date" InputLabelProps={{ shrink: true }} /><br></br>
        
               <TextField id="invoice_currency" label="invoice_currency" variant="outlined" />
               <TextField id="document_type" label="document type" variant="outlined" />
               <TextField id="posting_id" label="posting id" variant="outlined" />
               <TextField id="total_open_amount" label="total open amount" variant="outlined" /><br></br>

               <TextField id="baseline_create_date" label="baseline create date" variant="outlined" type="date" InputLabelProps={{ shrink: true }} />
               <TextField id="customer_paymnet_terms" label="customer paymnet terms" variant="outlined" />
               <TextField id="invoice_id" label="invoice id" variant="outlined" />
          </Typography>
          <Button variant="contained" onClick={handleClose }>Add</Button>
          <Button variant="contained" onClick={handleClose } autoFocus>
            Cancel
          </Button>
        </Box>


      </Modal>
    </div>
  );
}