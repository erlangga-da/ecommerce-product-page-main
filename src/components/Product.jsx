import React from "react";
import { useState } from "react";
import "../css/Product.css";
import MinusIcon from "../svg/icon-minus.svg";
import plusIcon from "../svg/icon-plus.svg";
import data from "../data/data.json";
import { Col, Row } from "antd";
import { Gallery } from "./Gallery";
import { GalleryMobile } from "./GalleryMobile";

export const Product = ({ sendDataToParent }) => {
  const [qty, setQty] = useState(0);
  let onChangeQty = (val) => {
    if (val && qty < data.stock) {
      setQty(qty + 1);
    } else if (!val && qty > 0) {
      setQty(qty - 1);
    }
  };

  // quantity action
  let QtyBtn = () => {
    let Btn = (v) => (
      <button type="button" onClick={v.onClick}>
        <img src={v.iconSrc} alt="icon" />
      </button>
    );
    return (
      <div className="btn-qty">
        <Btn onClick={() => onChangeQty(false)} iconSrc={MinusIcon} />
        <p>{qty}</p>
        <Btn onClick={() => onChangeQty(true)} iconSrc={plusIcon} />
      </div>
    );
  };

  //checkout action
  let CheckoutBtn = () => {
    let cartData = [
      {
        id: 8011125,
        thumbnail: data.ImageData[0][2],
        name: data.name,
        price: data.price,
        discount: data.discount,
        priceAfter: data.price * (100 - data.discount) / 100,
        stock: qty,
        currency: data.currency
      }
    ];
    let sendData = () => {
      if (qty > 0) {
        sendDataToParent(cartData);
      } else {
        alert("Pilih Jumlah Barang");
      }
    };
    return (
      <button type="button" id="checkout-product" onClick={() => sendData()}>
        <svg
          id="cart"
          width="22"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="#ffffff"
            fillRule="nonzero"
          />
        </svg>
        <p>Add to cart</p>
      </button>
    );
  };

  //button group
  let ButtonAct = () => {
    return (
      <Row justify="space-around" align="middle" className="BtnGroupContainer">
        <Col span={10} className="BtnChild">
          <QtyBtn />
        </Col>
        <Col span={14} className="BtnChild">
          <CheckoutBtn />
        </Col>
      </Row>
    );
  };

  //product container
  let ProductDesc = () => {
    return (
      <div className="product-desc">
        <div className="product-text">
          <span id="product-company">{data.factory}</span>
          <h1 id="product-name">{data.name}</h1>
          <p id="product-desc">{data.description}</p>
        </div>
        <div className="price-tag">
          <div className="price">
            <h2>
              {`${data.currency}` + (data.price * (100 - data.discount) / 100) + `.00`}
            </h2>
            <span>{`${data.discount}%`}</span>
          </div>
          <s>{`${data.currency}` + data.price + `.00`}</s>
        </div>
        <ButtonAct />
      </div>
    );
  };
  return (
    <div className="container">
      <Row justify="space-around" align="middle" className="content-align">
        <Col className="gallery-container" span={12}>
          <Gallery />
          <GalleryMobile />
        </Col>
        <Col className="product-container" span={12}>
          <ProductDesc />
        </Col>
      </Row>
    </div>
  );
};
