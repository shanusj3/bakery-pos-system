import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Drawer from "../../Components/drawer";
import AddIcon from "@mui/icons-material/Add";
import { Grid, TextField } from "@mui/material";
import Counterdb from "./dtBillpage";
import AdfScannerIcon from "@mui/icons-material/AdfScanner";

export default function BasicModal() {
  return (
    <Drawer>
      <div>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            sx={{ textAlign: "center" }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ fontSize: 23 }}
            >
              Billing
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <TextField
              required
              fullWidth
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <TextField
              required
              fullWidth
              id="outlined-uncontrolled"
              label="Mobile Number"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email Adress"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <TextField
              fullWidth
              disabled
              id="outlined-uncontrolled"
              label="Billing Id"
              defaultValue="#"
            />
          </Grid>
          <Grid
            sx={{ textAlign: "center" }}
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <TextField
              sx={{ width: 700, textAlign: "left" }}
              id="outlined-select-currency"

              label="Product"
              defaultValue="Product"
              helperText="Please select your Product"
            >
              shanu
            </TextField>
            <Button
              variant="contained"
              sx={{
                ml: 5,
                mt: 1,

                color: "white",
                backgroundColor: "#64dd17",
                ":hover": {
                  bgcolor: "#76ff03",
                  color: "white",
                  justifyContent: "flex-end",
                },
              }}
              endIcon={<AddIcon />}
            >
              Add
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Box>
              <Counterdb />
            </Box>
            <Box sx={{ mt: 2, ml: 100 }}>
              <Button variant="contained" endIcon={<AdfScannerIcon />}>
                Print
              </Button>
            </Box>
          </Grid>
        </Grid>
      </div>
    </Drawer>
  );
}
