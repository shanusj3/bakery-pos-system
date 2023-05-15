import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/home";
import Login from "./Pages/Login/login";
import ManageProducts from "./Pages/product/products"
import Billingpge from "./Pages/billingPage/billingPage"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ManageProducts />} />
          <Route path="/billingpage" element={<Billingpge />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
