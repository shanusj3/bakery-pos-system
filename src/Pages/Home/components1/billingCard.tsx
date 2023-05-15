import * as React from "react";
import Card from "@mui/material/Card";
import { CardActionArea, Grid, Paper, styled, Typography } from "@mui/material";
import ReceiptIcon from "@mui/icons-material/Receipt";

import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  padding: theme.spacing(0),
  textAlign: "center",
  color: "white",
}));

export default function ActionAreaCard() {
  let navigate = useNavigate();
  const toBillngPge = () => {
    let path = `/billingpage`;
    navigate(path);
  };
  return (
    <Card
      className="sm"
      sx={{ backgroundColor: "#f44336 " }}
      onClick={toBillngPge}
    >
      <CardActionArea sx={{ height: 85 }}>
        {/* <CardContent> */}
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item sx={{ mt: 3, textAlign: "left", ml: 5, mb: 3 }}>
              <Typography variant="h6" noWrap component="div">
                Billing
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item sx={{ mt: 4, textAlign: "right", mr: 2 }}>
              <ReceiptIcon sx={{}} />
            </Item>
          </Grid>
        </Grid>

        {/* <Grid md={6} sm={6} xl={6}>
        {/* <Grid md={6} sm={6} xl={6}>
      <Typography sx={{mt:2}}>
      BILL    
      </Typography>
      </Grid>
      <Grid md={6} sm={6} xl={6}>
      <ReceiptIcon sx={{}} /> 
      </Grid> */}

        {/* </CardContent> */}
        {/* </CardContent> */}
      </CardActionArea>
    </Card>
  );
}
