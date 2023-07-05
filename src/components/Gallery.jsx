import { Modal } from "antd";
import React from "react";
import "../css/Gallery.css";
import { useState, useEffect } from "react";

export const Gallery = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);

  const setArray = (target) => {
    setImageIndex(target);
    if (target == 0) {
      setActive(true, false, false, false);
    } else if (target == 1) {
      setActive(false, true, false, false);
    } else if (target == 2) {
      setActive(false, false, true, false);
    } else if (target == 3) {
      setActive(false, false, false, true);
    }
  };

  const setActive = (second, third, fourth, fifth) => {
    setSecond(second);
    setThird(third);
    setFourth(fourth);
    setFifth(fifth);
  };

  useEffect(()=>{
		setArray(0)
	}, [])

  return (
    <>
      <ModalImage open={modal2Open} onOk={() => setModal2Open(false)} onCancel={() => setModal2Open(false)}/>
      <div className="gallery-product">
        <img
          onClick={() => setModal2Open(true)}
          className="first"
          src={`http://localhost:3000/imgs/products/image-product-${
            imageIndex + 1
          }.jpg`}
          alt=""
        />
        <div
          className={`second ${second == true ? "active" : ""}`}
          onClick={() => setArray(0)}
        >
          <div className="overlay"></div>
          <img
            src={`http://localhost:3000/imgs/products/image-product-1.jpg`}
            alt=""
          />
        </div>
        <div
          className={`third ${third == true ? "active" : ""}`}
          onClick={() => setArray(1)}
        >
          <div className="overlay"></div>
          <img
            src={`http://localhost:3000/imgs/products/image-product-2.jpg`}
            alt=""
          />
        </div>
        <div
          className={`fourth ${fourth == true ? "active" : ""}`}
          onClick={() => setArray(2)}
        >
          <div className="overlay"></div>
          <img
            src={`http://localhost:3000/imgs/products/image-product-3.jpg`}
            alt=""
          />
        </div>
        <div
          className={`fifth ${fifth == true ? "active" : ""}`}
          onClick={() => setArray(3)}
        >
          <div className="overlay"></div>
          <img
            src={`http://localhost:3000/imgs/products/image-product-4.jpg`}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

const ModalImage = (v) => {
  return (
    <Modal
      title="Vertically centered modal dialog"
      centered
      open={v.open}
      onOk={v.onOk}
      onCancel={v.onCancel}
    >
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </Modal>
  );
};
