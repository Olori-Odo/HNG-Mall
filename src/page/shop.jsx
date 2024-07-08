import React from "react";
import Shoe1 from "../assets/shoe1.png";

const Shop = () => {
  return (
    <>
      <div class="col-8 m-3 card text-bg-dark">
        <img src={Shoe1} class="card-img" alt="..." />
        <div class="card-img-overlay">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">
            <small>Last updated 3 mins ago</small>
          </p>
        </div>
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
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small>Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </>
  );
};

export default Shop;
