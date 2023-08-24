import React from "react";
import "../css/Gallery.css";
import { useState, useEffect } from "react";
import { GalleryModal } from "./GalleryModal";
import data from "../data/data.json";

export const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [active, setActive] = useState([true, false, false, false]);

  const setArray = (target) => {
    setImageIndex(target);
    if (target === 0) {
      setActive([true, false, false, false]);
    } else if (target === 1) {
      setActive([false, true, false, false]);
    } else if (target === 2) {
      setActive([false, false, true, false]);
    } else if (target === 3) {
      setActive([false, false, false, true]);
    }
  };

  useEffect(() => {
    setArray(0);
  }, []);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <GalleryModal
        modalOpen={modalOpen}
        closeModal={closeModal}
        imageIndex={imageIndex + 1}
      />
      <div className="gallery-product">
        <img
          onClick={() => setModalOpen(true)}
          className="MainImage"
          src={`https://ecommerce-product-page-main-ppb1.vercel.app/imgs/products/image-product-${
            imageIndex + 1
          }.jpg`}
          alt="gallery product"
        />
        {/* mapping image data */}
        {data.ImageData.map((gallery, index) => (
          <div
            key={index}
            className={active[index] === true ? `${gallery[0]} active` : `${gallery[0]}`}
            onClick={() => setArray(index)}
          >
            <div className="overlay"></div>
            <img
              src={`https://ecommerce-product-page-main-ppb1.vercel.app/imgs/products/${gallery[2]}`}
              alt=""
            />
          </div>
        ))}
      </div>
    </>
  );
};
