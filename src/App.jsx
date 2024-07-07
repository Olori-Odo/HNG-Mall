import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./page/product";
import "./App.css";
import Shop from "./page/shop";
import Home from "./page/home";
import NavbarLinks from "./components/navbarLinks";
import MainLayout from "./components/navLinks";
import NoPageFound from "./page/noPageFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavbarLinks />
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product" element={<Product />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
