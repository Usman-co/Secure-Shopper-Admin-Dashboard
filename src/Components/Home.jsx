import React from "react";
import Data from "./Data";
import {Link } from "react-router-dom"
const Home = ({ handleAddProduct, cartItems }) => {
  const { products } = Data;
  return (
    <div className="home">
      <div className="navbar">
        <div className="logo">Logo</div>
        <ul>
          <li>
            <Link to ="/">
              Home
            </Link>
          </li>
          <li>
            <Link to ="/cart">
              <i className="fa-solid fa-cart-shopping"/>
                <span className="cart-counter">{cartItems.length  === 0 ? "" : cartItems.length }</span>
            </Link>
          </li>
        </ul>
      </div>
      <center id="Heading">Our Products</center>
      <div className="productsItems">
        {products.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <h5>${item.price}</h5>
            <div>
              <button
                onClick={() => handleAddProduct(item)}
                className="Add-to-cart"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
