import * as React from 'react';
import Card from '@mui/material/Card';


import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Paper, styled } from '@mui/material';
import "../../Home/home.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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



  const routeChange = () => {
    let path = `/products`;
    navigate(path);
  }




  return (

    <Card className="sj" sx={{ backgroundColor: "#ff9100" }} onClick={routeChange}>

      <CardActionArea sx={{ height: 85 }}>
        {/* <CardContent> */}
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item sx={{ mt: 3, textAlign: "left", ml: 5, mb: 3 }}>
              <Typography variant="h6" noWrap component="div">Products</Typography>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item sx={{ mt: 4, textAlign: "right", mr: 2 }}>
              <ShoppingCartIcon sx={{}} />
            </Item>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>

  );
}