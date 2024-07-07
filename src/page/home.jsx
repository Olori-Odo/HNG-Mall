// import React from "react";
// import Shoe1 from "../assets/shoe1.png";
import OrangeBlue from "../assets/o-b-sneakers.png";

const Home = () => {
  return (
    <>
      <div className="container overflow-hidden my-5 mb-5">
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
              src={OrangeBlue}
              className="img-fluid float-end"
              alt="Orange-Black Sneakers"
            />
          </div>
        </div>
        <h6 className="py-3">Top Sellers</h6>

        <div className=" row card text-bg-dark my-3">
          <img
            src={OrangeBlue}
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
      </div>
    </>
  );
};

export default Home;
