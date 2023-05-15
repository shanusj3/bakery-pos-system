import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import { FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { useState } from 'react';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import LinearProgress from '@mui/material/LinearProgress';



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
  const [showLoader, setLoader] = React.useState(false);
  const [productName, setproductName] = useState('');
  const [amount, setAmount] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event) => {
    setLoader(true);
    event.preventDefault();
    const branch_id = localStorage.getItem("branch");
    console.log(Number(branch_id));
    const newDocument = doc(collection(db, "products"));
    await setDoc(newDocument, {
      id: newDocument.id,
      branch_id: Number(branch_id),
      name: productName,
      price: Number(amount)
    }).then((res) => {
      console.log(res);
      setLoader(false);
      setOpen(false);
    });
  }

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" sx={{ color: "white", backgroundColor: "#64dd17", ':hover': { bgcolor: '#76ff03', color: 'white', justifyContent: "flex-end", marginLeft: "auto" } }} endIcon={<AddIcon />}>Add</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ ml: 22, fontSize: 30 }}>
              Add Product
            </Typography>
          </Box>
          <Box sx={{ mt: 4 }}>

            <TextField sx={{ ml: 15, width: 300 }}
              id="outlined-password-input"
              label="Product Name"
              value={productName}
              autoComplete="current-password"
              onChange={e => setproductName(e.target.value)}

            />
            <FormControl fullWidth sx={{ mt: 3, ml: 15, width: 300 }}>
              <InputLabel htmlFor="outlined-adornment-amount" >Amount</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                label="Amount"
                value={amount}
                onChange={e => setAmount(e.target.value)}
              />
              {
                showLoader ?
                  <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                  </Box> : <Box sx={{ mt: 3 }}>
                    <Button type='submit' onClick={handleSubmit} variant="contained" sx={{ ml: 28, color: "white", backgroundColor: "#64dd17", ':hover': { bgcolor: '#76ff03', color: 'white', justifyContent: "flex-end", } }} endIcon={<AddIcon />}>Add</Button>
                  </Box>
              }
            </FormControl>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}