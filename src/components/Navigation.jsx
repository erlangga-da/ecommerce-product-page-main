import React from "react";
import "../css/Header.css";
import Logo from "../svg/logo.svg";
import DeleteIcon from "../svg/icon-delete.svg";
import MenuIcon from "../svg/icon-menu.svg";
import { Popover } from "antd";
import user from "../data/user.json";

const content = (
  <>
    {user.cart.map((cart, index) => (
      <div className="items" key={index}>
        <div className="product">
          <img
            id="thumbs"
            src={`http://localhost:3000/imgs/products/${cart.thumbnail}`}
            alt="thumb"
          />
          <div className="text">
            <p id="title">{cart.name}</p>
            <p id="price">
              {`$${cart.price*cart.discount/100}.00`} x {cart.stock} <span>{`$${cart.price*cart.discount/100*cart.stock}.00`}</span>
            </p>
          </div>
        </div>
        <button id="delete-cart" type="button">
          <img src={DeleteIcon} alt="icon-delete" />
        </button>
      </div>
    ))}
    <button className="checkout" type="button">
      Checkout
    </button>
  </>
);

const emptyCart = (
  <>
    <p id="empty-cart">Your cart is empty.</p>
  </>
);

export const Navigation = () => {
  return (
    <nav>
      <div className="left-nav">
        <button id="menu" type="button">
          <img src={MenuIcon} alt="menu" />
        </button>
        <img id="logo" src={Logo} alt="logo" />
        <ul>
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a className="active" href="#">
              Women
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="right-nav">
        <Popover content={content} title="Cart">
          <svg
            id="cart"
            width="22"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#69707D"
              fillRule="nonzero"
            />
          </svg>
        </Popover>
        <img
          id="profile"
          src={`http://localhost:3000/imgs/profiles/${user.profilePic}`}
          alt="profile"
        />
      </div>
    </nav>
  );
};
