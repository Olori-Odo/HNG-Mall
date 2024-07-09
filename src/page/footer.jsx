import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Logo from "../assets/foot-log.png";
import Sole from "../assets/sole.png";
import Mate from "../assets/mate.png";

const Footer = () => {
  return (
    <>
      <footer className="container bg-secondary-subtle align-items-end  ">
        <div className="row  align-items-center justify-content-center  ">
          <img className="col-2 float-end" src={Logo} alt="logo" />
          <div className="col-2">
            <img src={Sole} alt="Logo Name1" /> <br />
            <img src={Mate} alt="Logo Name2" />
          </div>
        </div>
        <p className=" row justify-content-center">
          Follow us on social media to get the latest updates about our products
        </p>
        <div className="row justify-content-center align-self-center mb-5">
          <FaWhatsapp className="col-1" />
          <FaInstagram className="col-1" />
          <CiFacebook className="col-1" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
