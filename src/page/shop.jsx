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
    </>
  );
};

export default Shop;
