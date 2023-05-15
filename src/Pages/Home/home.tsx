import * as React from "react";
import Box from "@mui/material/Box";
import "./home.css";

import ProductCard from "./components2/productCard";
import Drawer from "../../Components/drawer";
import BillingCard from "./components1/billingCard";


import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import LinearProgress from '@mui/material/LinearProgress';

export default function Home() {
  const [showAdmin, setShowAdmin] = useState(true);
  const [showPage, setShowPage] = useState(false);
  const navigate = useNavigate();
  async function checkUserType() {
    try {
      const token = localStorage.getItem("uid");
      const q = query(collection(db, "users"), where("uid", "==", token));
      const querySnapshot = await getDocs(q);
      const type = querySnapshot.docs[0].data();
      if (type.type == "user") {
        localStorage.setItem("branch", type.branch_id);
        // setShowAdmin(false);
        setShowPage(true);
      } else {
        // setShowPage(true);
      }
    }
    catch (err) {
      console.log('Error');
    }
  }
  useEffect(() => {
    // check if user is already login
    const token = localStorage.getItem("uid");
    if (token) {
      navigate("/home")
    } else {
      navigate("/")
    }
    checkUserType();
    // setShowPage(true);
  }, []);

  return (
    <>
      {
        showPage ?
          <Drawer>
            < Box >
              <Grid
                container
                rowSpacing={3}
                columnSpacing={{ xs: 0, sm: 1, md: 2, lg: 2, xl: 2 }}
              >
                {showAdmin ?
                  <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                    <ProductCard />
                  </Grid> : null}
                <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                  <BillingCard />
                </Grid>
              </Grid>
            </Box >
          </Drawer >
          : <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
      }
    </>
  );
}
