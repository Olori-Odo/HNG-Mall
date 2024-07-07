import React from "react";
import { GiConverseShoe } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Outlet, Link } from "react-router-dom";

const NavbarLinks = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-danger-subtle">
        <div className="container">
          <GiConverseShoe />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="navbarSupportetContent"
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
                <Link to="/shop" className="nav-link">
                  Shop
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/product" className="dropdown-item">
                      Products
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
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
            <MdOutlineShoppingCart className="mx-5 me-2" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarLinks;