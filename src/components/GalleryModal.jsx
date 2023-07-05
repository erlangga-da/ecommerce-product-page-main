import React from "react";
import "../css/Modal.css";
import { useState, useEffect } from "react";

export const GalleryModal = (v) => {
  const [imgLength, setimgLength] = useState(1);

  let NextImg = () => {
    if (imgLength < 4){
      setimgLength(imgLength + 1);
    }else {
      setimgLength(1);
    }
  }
  let PrevImg = () => {
    if (imgLength > 1){
      setimgLength(imgLength - 1);
    }else {
      setimgLength(4);
    }
  }

  useEffect(() => {
    document.body.style.overflow = v.modalOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "unset";
      // console.log(v.modalOpen);
    };
  }, [v.modalOpen]);
  const closeModal = () => {
    v.closeModal();
    // console.log(v.closeModal);
  };
  return (
    <div id="modal" className={v.modalOpen ? "show" : ""}>
      <div className="overlay-modal"></div>
      <div className="modal-gallery">
        <div className="content">
          <svg
            onClick={() => closeModal()}
            width="14"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#69707D"
              fillRule="evenodd"
            />
          </svg>
          <div className="preview-img">
            <img
              className="preview"
              src={`http://localhost:3000/imgs/products/image-product-${imgLength}.jpg`}
              alt="kk"
            />
            <button type="button" onClick={() => PrevImg()}>-</button>
            <button type="button">{imgLength}</button>
            <button type="button" onClick={() => NextImg()}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};
