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
const CartItem = ({ cart, clearDataToParent }) => {
  console.log(cart);
  let deleteCart = (id) => {
    clearDataToParent(id);
  };
  return (
    <>
      {cart.map((cart, index) => {
        return (
          <div className="items" key={index}>
            <div className="product">
              <img
                id="thumbs"
                src={`https://ecommerce-product-page-main-ppb1.vercel.app/imgs/products/${cart.thumbnail}`}
                alt="thumb"
              />
              <div className="text">
                <p id="title">{cart.name}</p>
                <p id="price">
                  {cart.currency}
                  {cart.priceAfter}
                  {".00"} x {cart.stock}{" "}
                  <span>{`$${cart.priceAfter * cart.stock}.00`}</span>
                </p>
              </div>
            </div>
            <button
              id="delete-cart"
              type="button"
              onClick={() => deleteCart(cart.id)}
            >
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

export const Navigation = ({ cartData, clearDataToParent }) => {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState(cartData);

  const DrawerSet = (val) => {
    setOpen(val);
  };

  // side navbar for mobile
  const MobileDrawer = () => {
    return (
      <Drawer
        title=""
        placement="left"
        onClose={() => DrawerSet(false)}
        open={open}
        width="250"
        closeIcon={
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#69707D"
              fillRule="evenodd"
            />
          </svg>
        }
      >
        <ul>
          <PagesLink />
        </ul>
      </Drawer>
    );
  };

  // render links
  //eslint-disable-next-line
  const PagesLink = () => {
    return pages.map((page, index) => (
      <li key={index}>
        <a href="https://ecommerce-product-page-main-ppb1.vercel.app/">{page}</a>
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
  const RightNav = ({ clearDataToParent }) => {
    const [BadgeCount, setBadgeCount] = useState(0);
    const totalStockQuantity = cart.map((qtyValue) => qtyValue.stock);
    useEffect(() => {
      setBadgeCount(totalStockQuantity[0]);
    }, [totalStockQuantity]);
    return (
      <div className="right-nav">
        <Popover
          content={
            cart.length > 0 ? (
              <CartItem cart={cart} clearDataToParent={clearDataToParent} />
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
          src={`/imgs/profiles/${user.profilePic}`}
          alt="profile"
        />
      </div>
    );
  };

  useEffect(() => {
    setCart(cartData);
  }, [cartData, cart]);

  return (
    <nav>
      <div className="nav-container">
        <LeftNav />
        <RightNav clearDataToParent={clearDataToParent} />
      </div>
    </nav>
  );
};
