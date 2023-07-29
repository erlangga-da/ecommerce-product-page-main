import React from "react";
import { useState, useEffect } from "react";
import "../css/Header.css";
import Logo from "../svg/logo.svg";
import DeleteIcon from "../svg/icon-delete.svg";
import MenuIcon from "../svg/icon-menu.svg";
import user from "../data/user.json";
import { Popover, Drawer, Badge } from "antd";

// links
const pages = ["Collections", "Men", "Women", "About", "Contact"];

// cart item
const CartItem = ({ cart }) => {
  return (
    <>
      {cart.map((cart, index) => {
        return (
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
                  {`$${(cart.price * cart.discount) / 100}.00`} x {cart.stock}{" "}
                  <span>{`$${
                    ((cart.price * cart.discount) / 100) * cart.stock
                  }.00`}</span>
                </p>
              </div>
            </div>
            <button id="delete-cart" type="button">
              <img src={DeleteIcon} alt="icon-delete" />
            </button>
          </div>
        );
      })}
      <button className="checkout" type="button">
        Checkout
      </button>
    </>
  );
};

// empty state
const EmptyCart = () => {
  return (
    <>
      <p id="empty-cart">Your cart is empty.</p>
    </>
  );
};

export const Navigation = ({ cartData }) => {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState(cartData);

  const DrawerSet = (val) => {
    setOpen(val);
  };

  // side navbar for mobile
  const MobileDrawer = () => {
    return (
      <Drawer
        title="Basic Drawer"
        placement="left"
        onClose={() => DrawerSet(false)}
        open={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    );
  };

  // render links
  const PagesLink = () => {
    return pages.map((page, index) => (
      <li key={index}>
        <a href="#">{page}</a>
      </li>
    ));
  };

  // navbar left container
  const LeftNav = () => {
    return (
      <div className="left-nav">
        <button id="menu" type="button" onClick={() => DrawerSet(true)}>
          <img src={MenuIcon} alt="menu" />
        </button>
        <MobileDrawer />
        <img id="logo" src={Logo} alt="logo" />
        <ul>
          <PagesLink />
        </ul>
      </div>
    );
  };

  // navbar right container
  const RightNav = () => {
    const [BadgeCount, setBadgeCount] = useState(0);
    const totalStockQuantity = cart.map((qtyValue) => qtyValue.stock);
    useEffect(() => {
      setBadgeCount(totalStockQuantity[0]);
    }, []);
    return (
      <div className="right-nav">
        <Popover
          content={
            cart.length > 0 ? (
              <CartItem cart={cart} />
            ) : (
              <EmptyCart />
            )
          }
          title="Cart"
        >
          <Badge
            count={BadgeCount}
            style={{
              backgroundColor: "#FF7D1B",
            }}
          >
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
          </Badge>
        </Popover>
        <img
          id="profile"
          src={`http://localhost:3000/imgs/profiles/${user.profilePic}`}
          alt="profile"
        />
      </div>
    );
  };

  useEffect(() => {
    setCart(cartData);
  }, [cart, RightNav]);

  return (
    <nav>
      <div className="nav-container">
        <LeftNav />
        <RightNav />
      </div>
    </nav>
  );
};
