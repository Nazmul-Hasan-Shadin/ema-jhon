import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  console.log(props);
  const { img, name, price, seller, stock, key } = props.product;

  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">
          <Link to={"/product/" + key}>{name}</Link>
        </h4>{" "}
        <br />
        <p>
          <small>by:{seller}</small>
        </p>
        <p>${price} </p> <br />
        <p>
          <small> Only {stock} available left</small>
        </p>
      { props.showAddToCart===true && <button
          className="main-button"
          onClick={() => props.handleAddProduct(props.product)}
        >
          Add to Cart
        </button>}
      </div>
    </div>
  );
};

export default Product;
