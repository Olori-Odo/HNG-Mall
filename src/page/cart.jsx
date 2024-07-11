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
          <div className="col-3 border rounded-5 text-center my-auto">
            <div className="rounded-5  p-2">
              <FaMinus className="border border-right border mx-5 " />
              <FaPlus />
            </div>
          </div>
        </div>

        <hr className="product-divider" />

        <div className="row">
          <div className="col-8">
            <button className="btn btn-secondary rounded-5 my-5">
              Continue Shopping
            </button>
          </div>
          <div className="col-4">
            <div className="row align-items-center">
              <h4 className="col">Subtotal</h4>
              <h5 className="col">#32,000</h5>
            </div>

            <hr />
            <div className="row">
              <h4 className="col"> Total</h4>
              <h5 className="col">#32,000</h5>
            </div>
            <hr />
            <div className="">
              <button
                typeof="button"
                className="btn btn-primary my-5 rounded-5 text-white "
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
