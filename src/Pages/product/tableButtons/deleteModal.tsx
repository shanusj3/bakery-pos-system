import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";
import WarningIcon from "@mui/icons-material/Warning";
import CancelIcon from '@mui/icons-material/Cancel';
import { Divider } from "@mui/material";
import Stack from "@mui/material/Stack";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 350,
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
      <Button
        onClick={handleOpen}
        variant="contained"
        endIcon={<DeleteIcon />}
        sx={{
          ml: 3,
          color: "white",
          backgroundColor: "#c62828",
          ":hover": { bgcolor: "#f44336", color: "white" },
        }}
      >
        Delete
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ ml: 3, mx: 2 }}>
            <WarningIcon sx={{ ml: 26, mt: 1, color: "#f44336", fontSize: 110 }} />
            <Typography
              color="text.secondary"
              variant="body2"
              sx={{ ml: 21, mt: 1, fontSize: 18 }}
            >
              Are you want to delete?
            </Typography>
          </Box>
          <Divider sx={{ mt: 3 }} variant="middle" />
          <Box sx={{ ml: 3, mx: 2 }}>
            <Stack sx={{mt:5.5,ml:16}} spacing={4} direction="row">
             
              <Button onClick={handleClose} variant="contained" endIcon={<CancelIcon />} sx={{ backgroundColor: "#424242", ":hover": { bgcolor: "#616161", color: "white" },}}>Cancel</Button>
              <Button  variant="contained" endIcon={<DeleteIcon />} sx={{ backgroundColor: "#c62828", ":hover": { bgcolor: "#f44336", color: "white" },}}>Delete</Button>
            </Stack>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
