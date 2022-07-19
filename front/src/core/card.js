import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";

const Card = ({ product }) => {
  return (
    <div className="col-4 mb-3">
      <div className="card">
        <div className="card-header card-header-1 ">{product.name}</div>
        <div className="card-body">
          <ShowImage item={product} url="product" />
          <p className="card-p  mt-2">
            {product.description.substring(0, 100)}{" "}
          </p>
          <p className="card-p black-10">$ {product.price}</p>
          <Link to="/">
            <button className="btn btn-outline-primary mt-2 mb-2 mr-2">
              View Product
            </button>
          </Link>
          <button className="btn btn-outline-warning mt-2 mb-2">
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;