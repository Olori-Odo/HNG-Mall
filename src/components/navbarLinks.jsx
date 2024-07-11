import React from "react";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Outlet, Link } from "react-router-dom";
import Logo from "../assets/foot-log.png";
import Sole from "../assets/sole.png";
import Mate from "../assets/mate.png";

const NavbarLinks = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary-subtle">
        <div className="container">
          <img className="col-2 float-end" src={Logo} alt="logo" />
          <div className="col-2">
            <img src={Sole} alt="Logo Name1" /> <br />
            <img src={Mate} alt="Logo Name2" />
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-target="navbarSupportetContent"
            data-bs-toggle="collapse"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/categories" className="nav-link active">
                  Categories
                </Link>
              </li>
            </ul>

            <form className="d-flex rounded-pill" role="search">
              <div className="  input-group col-md-4 px-5">
                <input
                  className="  form-control border-right-0 border "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <span className="input-group-append">
                  <button
                    className="btn btn-outline-success border-left-0 border"
                    type="submit"
                  >
                    <IoIosSearch className="bg-tertiary " />
                  </button>
                </span>
              </div>
            </form>
            <Link to="/cart">
              <MdOutlineShoppingCart className="mx-5 me-2" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarLinks;
