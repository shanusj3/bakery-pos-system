import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import { FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 400,
    bgcolor: "#fafafa",
    border: "2px solid #e1eedd",
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
  };


export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" sx={{color:"white",backgroundColor:"#ff9100",':hover': { bgcolor: '#ffab40', color:'white',}}}  endIcon={<EditIcon />}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
         <Box sx={style}>
          <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ml:22,fontSize:30}}>
            Edit Product
          </Typography>
          </Box>
          <Box sx={{mt:4}}>
          
          <TextField sx={{ml:15,width:300}}
          id="outlined-password-input"
          label="Product Name"
          
          autoComplete="current-password"
          
        />
          <FormControl fullWidth sx={{ mt: 3,ml:15, width:300 }}>
          <InputLabel htmlFor="outlined-adornment-amount" >Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
            label="Amount"
          />
           </FormControl>
           <Box sx={{mt:3}}>
           <Button onClick={handleOpen} variant="contained" sx={{ml:28,color:"white",backgroundColor:"#ff9100",':hover': { bgcolor: '#ffab40', color:'white',}}}  endIcon={<EditIcon />}>Edit</Button>
      
           </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}