import React from "react";
import { GiConverseShoe } from "react-icons/gi";

const Footer = () => {
  return (
    <>
      <footer className="align-items-end">
        <div className="row align-items-center justify-content-center   bg-secondary-subtle">
          <GiConverseShoe className="col-2 " />
          <div className="logo">
            <h1 className="blockquote">Nole</h1>
            <p className="blockquote-footer">Mate</p>
            <div className="col-2 text-center"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
