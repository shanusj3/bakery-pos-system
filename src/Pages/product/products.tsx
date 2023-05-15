import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Drawer from "../../Components/drawer";
import Edit from "./tableButtons/editModal";
import Delete from "./tableButtons/deleteModal";
import Add from "./tableButtons/addModal"
import { db } from "../../firebase"
import { useEffect, useState } from "react";

import { collection, getDocs, query, where } from "firebase/firestore";
import { GridValidRowModel } from "@mui/x-data-grid/models";
import { useNavigate } from "react-router-dom";

const columns: GridColDef[] = [
  // {
  //   field: "id", headerName: "ID", width: 90,
  //   headerClassName: 'super-app-theme--header'
  // },
  {
    field: "name",
    headerClassName: 'super-app-theme--header',
    headerName: "Name",
    headerAlign: "center",
    width: 450,
    editable: true,
  },
  {
    field: "price",
    headerClassName: 'super-app-theme--header',
    headerName: "Price",
    headerAlign: "center",
    width: 450,
    editable: true,
  },

  {
    field: "action",
    headerClassName: 'super-app-theme--header',
    headerName: "Action",
    headerAlign: "center",
    align: "center",
    width: 450,
    sortable: false,
    renderCell: ({ row }) => (
      <>
        <Edit />
        <Delete />
      </>
    ),
  },
];

type ProductData = {
  name: string,
  price: string,
}

function generateRandom() {
  var length = 8,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

export default function ManageProducts() {
  const [row, setRow] = useState([] as any);
  const navigate = useNavigate();


  async function getAllProducts() {
    try {
      const branch_id = localStorage.getItem("branch");
      const q = query(collection(db, "products"), where("branch_id", "==", Number(branch_id)));
      const querySnapshot = await getDocs(q).then((response) => {
        setRow(
          response.docs.map(
            doc => {
              return {
                id: doc.data().id,
                name: doc.data().name,
                price: doc.data().price
              }
            }
          )
        )
      });
    }
    catch (err) {
      console.log('Error',);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("uid");
    if (token) {
      navigate("/products")
    } else {
      navigate("/")
    }
    getAllProducts();
  }, [row]);


  return (
    <Drawer>
      <Add />
      <Box
        sx={{
          mt: 2,
          height: 600,
          width: '100%',
          '& .super-app-theme--header': {
            backgroundColor: '#6a1b9a',
            color: "white"
          },
        }}
      >
        <DataGrid rows={row} columns={columns} getRowId={(row: any) => generateRandom()} />
      </Box>
    </Drawer>
  );
}