import React from "react";
import Shoe1 from "../assets/shoe1.png";

const Cart = () => {
  return (
    <>
      <div className="card" style="width: 18rem;">
        <img src={Shoe1} className="card-img-top" alt="Shoe 1" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default Cart;
