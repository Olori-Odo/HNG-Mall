import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Shop from "./page/shop";
import NavbarLinks from "./components/navbarLinks";
import NoPageFound from "./page/noPageFound";
import Home from "../src/page/home";
import Cart from "./page/cart";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavbarLinks />
        <Routes>
          <Route path="/" element={<NavbarLinks />} />
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product" element={<Cart />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
