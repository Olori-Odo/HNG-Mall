import React from "react";
import StrideMax from "../assets/o-b-sneakers.png";
import { FaMinus, FaPlus } from "react-icons/fa";
import Footer from "./footer";

const Cart = () => {
  return (
    <>
      <div className="container">
        <div className="row product m-4">
          <div className="col-8">
            <h1>Product Name</h1>
          </div>
          <div className="col">
            <h1>Price</h1>
          </div>
          <div className="col">
            <h1>Qty</h1>
          </div>
        </div>

        <hr className="product-divider" />

        <div className="row ">
          <div className="col-3">
            <img
              className="img-fluid"
              src={StrideMax}
              alt=" StrideMax Sneakers"
            />
          </div>
          <div className="col-3 my-auto">
            <h2>StrideMax Sneakers</h2>
            <p>Brand Name: Stride & Co.</p>
            <p>Product Type: Men's Shoes</p>
          </div>
          <div className="col-3 my-auto">
            <h4>#32,000</h4>
          </div>
          <div className="col-3 border text-center my-auto">
            <div className="rounded">
              <FaMinus className="border-right border gx-4" />
              <FaPlus />
            </div>
          </div>
        </div>

        <hr className="product-divider" />

        <div className="row">
          <div className="col-8">
            <button className="btn my-5">Continue Shopping</button>
          </div>

          <div className="col-2">
            <h3>Sub Total</h3>
          </div>
          <hr />
          <div>
            <p className="col-2">#32,000</p>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col-8"></div>

          <div className="col-2">
            <h3> Total</h3>
          </div>
          <hr />
          <div>
            <p className="col-2">#32,000</p>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col-8"></div>

          <div className="col-2">
            <button className="btn bg-btn-info my-5 rounded" type="button">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
