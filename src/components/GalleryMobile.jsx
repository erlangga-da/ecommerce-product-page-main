import React, { useState } from "react";
import "../css/Gallery.css";

export const GalleryMobile = () => {
  const [imgLength, setimgLength] = useState(1);
  let NextImg = () => imgLength < 4? setimgLength(imgLength + 1) : setimgLength(1);
  let PrevImg = () => imgLength > 1? setimgLength(imgLength - 1) : setimgLength(4);
  return (
    <div className="gallery-mobile">
      <img
        src={`http://localhost:3000/imgs/products/image-product-${imgLength}.jpg`}
        alt="gallery product"
        className="gallery"
      />
      <button className="btn-prev" type="button" onClick={() => PrevImg()}>
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <button className="btn-next" type="button" onClick={() => NextImg()}>
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};
