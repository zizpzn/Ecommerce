import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { getCart } from "./cartHelpers";
import Card from "./Card";
import Checkout from "./Checkout";

const Cart = () => {
  const [items, setItems] = useState([]);
  const [run, setRun] = useState(false);

  useEffect(() => {
    setItems(getCart());
  }, [run]);

  const showItems = (items) => {
    return (
      <div>
        <h2>Your cart has {`${items.length}`} items</h2>
        <hr />
        <div className="row">
          {items.map((product, index) => (
            // <Card
            //   key={index}
            //   product={product}
            //   showAddToCartButton={false}
            //   cartUpdate={true}
            //   showRemoveProductButton={true}
            //   setRun={setRun}
            //   run={run}
            // />
            <div key={index} className="col-3 mb-3">
              <Card
                product={product}
                showAddToCartButton={false}
                cartUpdate={true}
                showRemoveProductButton={true}
                setRun={setRun}
                run={run}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const noItemsMessage = () => (
    <h2>
      Your cart is empty. <br /> <Link to="/shop">Continue shopping</Link>
    </h2>
  );

  return (
    <Layout
      title="Shopping Cart"
      description="Manage your cart item. Add remove checkout or continue shopping."
      className="container-fluid"
    >
      <div className="row">
        <div className="col-8">
          {items.length > 0 ? showItems(items) : noItemsMessage()}
        </div>

        <div className="col-4">
          <h2 className="mb-4">Your cart summary</h2>
          <hr />
          <Checkout products={items} setRun={setRun} run={run} />
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
