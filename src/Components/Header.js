import React, { useState } from "react";
import logo from "../public/foodAppLogo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartDrawer from "./Cart";

function Header() {
  let [btnName, setBtnName] = useState("Login");
  let [isCartOpen, setIsCartOpen] = useState(false);

  // subscribing to the store using a selector
  let cartStore = useSelector((state) => state.cart.items);

  return (
    <>
      <div className="header">
        <div className="logoDiv">
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/bigmodule">Bigmodule</Link>
          </li>
          <li onClick={() => setIsCartOpen(!isCartOpen)}>
            Cart {cartStore.length} items
          </li>
          <button
            className="login-btn"
            onClick={() => {
              setBtnName((pre) => (pre === "Login" ? "Logout" : "Login"));
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
      <CartDrawer isOpen={isCartOpen} setIsOpen={setIsCartOpen} cartData={cartStore} />
    </>
  );
}

export default Header;
