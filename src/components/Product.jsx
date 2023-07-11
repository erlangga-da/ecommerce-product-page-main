import React from "react";
import "../css/Product.css";
import MinusIcon from "../svg/icon-minus.svg";
import plusIcon from "../svg/icon-plus.svg";
import { useState } from "react";
import { Gallery } from "./Gallery";
import data from "../data/data.json";
import { Col, Row } from "antd";

export const Product = () => {
  const [qty, setQty] = useState(0);
  let PlusQty = () => {
    if (qty < data.stock) {
      setQty(qty + 1);
    }
  };
  let MinQty = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };

  return (
    <div className="container">
      <Row
        justify="space-around"
        align="middle"
        className="content-align"
      >
        <Col className="gallery-container" span={12}>
          <Gallery />
        </Col>
        <Col className="product-container" span={12}>
          <div className="product-desc">
            <div className="product-text">
              <span id="product-company">{data.factory}</span>
              <h1 id="product-name">{data.name}</h1>
              <p id="product-desc">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they’ll
                withstand everything the weather can offer.
              </p>
            </div>
            <div className="price-tag">
              <div className="price">
                <h2>
                  {`${data.currency}` +
                    (data.price * data.discount) / 100 +
                    `.00`}
                </h2>
                <span>{`${data.discount}%`}</span>
              </div>
              <s>{`${data.currency}` + data.price + `.00`}</s>
            </div>
            <Row justify="space-around" align="middle">
              <Col span={10}>
                <div className="btn-qty">
                  <button type="button" onClick={() => MinQty()}>
                    <img src={MinusIcon} alt="" />
                  </button>
                  <p>{qty}</p>
                  <button type="button" onClick={() => PlusQty()}>
                    <img src={plusIcon} alt="" />
                  </button>
                </div>
              </Col>
              <Col span={14}>
                <button type="button" id="checkout-product">
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
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};
