import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";
import moment from "moment";

const Card = ({ product, showViewProductButton = true }) => {
  const showViewButton = (showViewProductButton) => {
    return (
      showViewProductButton && (
        <Link to={`/product/${product._id}`} className="mr-2 ">
          <button className="btn btn-outline-primary mt-2 mb-2 mr-2">
            View Product
          </button>
        </Link>
      )
    );
  };

  const showAddToCartButton = () => {
    return (
      <button className="btn btn-outline-warning mt-2 mb-2">Add to card</button>
    );
  };

  const showStock = (quantity) => {
    return quantity > 0 ? (
      <span className="badge badge-primary badge-pill">In Stock </span>
    ) : (
      <span className="badge badge-primary badge-pill">Out of Stock </span>
    );
  };

  return (
    <div className="card">
      <div className="card-header name">{product.name}</div>
      <div className="card-body">
        <ShowImage item={product} url="product" />
        <p className="card-p  mt-2">{product.description.substring(0, 100)} </p>
        <p className="card-p">$ {product.price}</p>
        <p>Category: {product.category && product.category.name}</p>
        <p>Added on {moment(product.createdAt).fromNow()}</p>

        {showStock(product.quantity)}
        <br />

        {showViewButton(showViewProductButton)}
        {showAddToCartButton()}
      </div>
    </div>
  );
};

export default Card;
