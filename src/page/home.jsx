import React from "react";
import Shoe1 from "../assets/shoe1.png";
import StrideMax from "../assets/o-b-sneakers.png";
import BlackBoot from "../assets/black-boot.png";
import BlueCross from "../assets/blue-cross.png";
import CowboyBoot from "../assets/cowboy-boot.png";
import Footer from "./footer";

const Home = () => {
  return (
    <>
      <div className="container overflow-hidden my-5 ">
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
        <h6 className="py-3">Top Sellers</h6>

        <div className="row row-cols-1 row-cols-md-3 g-4 ">
          <div className="col bg-secondary-subtle">
            <div className="card">
              <img src={BlackBoot} className="card-img-top" alt="Black Boot" />

              <div className="card-body">
                <p>Mens's Shoes</p>
                <h5 className="card-title">Black Cowboy Boots</h5>
                <h4>#80,000</h4>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src={Shoe1} className="card-img-top" alt="Shoe1" />
              <div className="card-body">
                <p>Men's Shoes</p>
                <h5 className="card-title">Black Rubber Shoe</h5>
                <h4>#45,000</h4>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
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
          <h2 className=" col-12 py-4">Featured Products</h2>

          <div className="row row-cols-1 row-cols-md-3 g-4 ">
            <div className="card">
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

            <div className="card">
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

            <div className="card">
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

          {/* <div className="col">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div> */}
        </div>

        <div className=" row card text-bg-dark my-3">
          <img
            src={StrideMax}
            className="col card-img w-75"
            alt="Orange-Black Sneakers"
          />

          <div className="col card-img-overlay">
            <h5 className="card-title">Step into Comfort and Style</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small>Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
