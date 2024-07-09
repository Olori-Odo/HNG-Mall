import React from "react";
import Shoe1 from "../assets/shoe1.png";
import StrideMax from "../assets/o-b-sneakers.png";
import BlackBoot from "../assets/black-boot.png";
import BlueCrocs from "../assets/blue-cross.png";
import CowboyBoot from "../assets/cowboy-boot.png";
import RedCrocs from "../assets/red-crocs.png";
import OrangeSneakers from "../assets/orange-snea.png";
// import Footer from "./footer";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";

const Home = () => {
  return (
    <>
      <div className="container  mt-5 ">
        <div className="row gy-3 px-4 bg-secondary-subtle align-items-center">
          <div className="col-5 gx-5 ">
            <h1>Step into Comfort and Style </h1>
            <p>
              Discover our exclusive collection of trendy comfortable shoes,
              crafted to elevate your every steps, Shop now for the perfect fit
              and unmatched quality.
            </p>
          </div>
          <div className="col-6">
            <img
              src={StrideMax}
              className="img-fluid float-end"
              alt="Orange-Black Sneakers"
            />
          </div>
        </div>
        <h6 className="py-3 text-#6f42c1">Top Sellers</h6>

        <div className="row row-cols-1 row-cols-md-3 g-4 ">
          <div className="col ">
            <div className="card bg-secondary-subtle">
              <img src={BlackBoot} className="card-img-top " alt="Black Boot" />

              <div className="card-body">
                <p>Mens's Shoes</p>
                <h5 className="card-title">Black Cowboy Boots</h5>
                <h4>#80,000</h4>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card bg-secondary-subtle">
              <img src={Shoe1} className="card-img-top" alt="Shoe1" />
              <div className="card-body">
                <p>Men's Shoes</p>
                <h5 className="card-title">Black Rubber Shoe</h5>
                <h4>#45,000</h4>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-secondary-subtle">
              <img
                src={StrideMax}
                className="card-img-top"
                alt="StrideMax Sneakers"
              />
              <div className="card-body">
                <p>Men's Shoes</p>
                <h5 className="card-title">StrideMax Sneakers</h5>
                <h4>#28,000</h4>
              </div>
            </div>
          </div>

          <h3>Testing 2....</h3>
          <h2 className="  py-4">Featured Products</h2>
          {/* <div className="row">
            <div className="col-1">
              <input type="text" className="form-control">
                All Shoes
              </input>
            </div>
            <div className="col-1">
              <input type="text" className="form-control">
                Men's Shoes
              </input>
            </div>
            <div className="col-1">
              <input type="text" className="form-control">
                Casuals
              </input>
            </div>
          </div> */}
        </div>

        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col ">
            <div className="card bg-secondary-subtle  ">
              <div className="mx-4">
                <CiHeart className=" " />
                <br />
                <MdOutlineShoppingCart />
              </div>
              <img
                src={StrideMax}
                className="card-img-top  bg-secondary-subtle "
                alt="SrideMax"
              />

              <div className="card-body bg-white">
                <p>Mens's Shoes</p>
                <h5 className="card-title">StrideMax</h5>
                <h4>32,000</h4>
              </div>
            </div>
          </div>

          <div className="col ">
            <div className="card bg-secondary-subtle ">
              <div className="mx-4">
                <CiHeart className=" " />
                <br />
                <MdOutlineShoppingCart />
              </div>
              <img
                src={Shoe1}
                className="card-img-top bg-secondary-subtle "
                alt="Black Boot"
              />

              <div className="card-body  bg-white">
                <p>Mens's Shoes</p>
                <h5 className="card-title">Black Rubber Boots</h5>
                <h4>#45,000</h4>
              </div>
            </div>
          </div>

          <div className="col ">
            <div className="card bg-secondary-subtle  ">
              <div className="mx-4">
                <CiHeart className=" " />
                <br />
                <MdOutlineShoppingCart />
              </div>
              <img
                src={BlueCrocs}
                className="card-img-top bg-secondary-subtle  "
                alt="BlueCrocs"
              />

              <div className="card-body bg-white ">
                <p>Mens's Shoes</p>
                <h5 className="card-title">Blue Fluffy Crocs</h5>
                <h4>#10,000</h4>
              </div>
            </div>
          </div>

          <div className="col ">
            <div className="card   bg-secondary-subtle">
              <div className="mx-4">
                <CiHeart className=" " />
                <br />
                <MdOutlineShoppingCart />
              </div>
              <img
                src={OrangeSneakers}
                className="card-img-top bg-secondary-subtle  "
                alt="Orange Sneakers"
              />

              <div className="card-body bg-white ">
                <p>Mens's Shoes</p>
                <h5 className="card-title">Orange Fluffy Crocs</h5>
                <h4>#10,000</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col ">
            <div className="card bg-secondary-subtle ">
              <div className="mx-4">
                <CiHeart className=" " />
                <br />
                <MdOutlineShoppingCart />
              </div>
              <img
                src={CowboyBoot}
                className="card-img-top bg-secondary-subtle  "
                alt="Black Boot"
              />

              <div className="card-body bg-white ">
                <p>Mens's Shoes</p>
                <h5 className="card-title">Brown Cowboy Boots</h5>
                <h4>#75,000</h4>
              </div>
            </div>
          </div>

          <div className="col ">
            <div className="card bg-secondary-subtle ">
              <div className="mx-4">
                <CiHeart className=" " />
                <br />
                <MdOutlineShoppingCart />
              </div>
              <img
                src={BlackBoot}
                className="card-img-top  bg-secondary-subtle"
                alt="Black Cowboy Boots"
              />

              <div className="card-body bg-white ">
                <p>Mens's Shoes</p>
                <h5 className="card-title">Black Cowboy Boots</h5>
                <h4>#80,000</h4>
              </div>
            </div>
          </div>

          <div className="col ">
            <div className="card  bg-secondary-subtle">
              <div className="mx-4">
                <CiHeart className=" " />
                <br />
                <MdOutlineShoppingCart />
              </div>
              <img
                src={RedCrocs}
                className="card-img-top bg-secondary-subtle  "
                alt="Red Sneakers"
              />

              <div className="card-body bg-white ">
                <p>Mens's Shoes</p>
                <h5 className="card-title">Red Sneakers</h5>
                <h4>#10,000</h4>
              </div>
            </div>
          </div>

          <div className="col ">
            <div className="card bg-secondary-subtle ">
              <div className="mx-4">
                <CiHeart className=" " />
                <br />
                <MdOutlineShoppingCart />
              </div>
              <img
                src={StrideMax}
                className="card-img-top  bg-secondary-subtle "
                alt="SrideMax"
              />

              <div className="card-body bg-white">
                <p>Mens's Shoes</p>
                <h5 className="card-title">StrideMax</h5>
                <h4>#28,000</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
