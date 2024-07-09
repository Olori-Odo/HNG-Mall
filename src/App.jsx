import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarLinks from "./components/navbarLinks";
import NoPageFound from "./page/noPageFound";
import Home from "../src/page/home";
import Cart from "./page/cart";
import Categories from "./page/categories";
import Footer from "./page/footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavbarLinks />
        <Routes>
          <Route path="/" element={<NavbarLinks />} />
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="" element={<Cart />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
        <Footer className="container-fluid" />
      </BrowserRouter>
    </>
  );
};
export default App;
