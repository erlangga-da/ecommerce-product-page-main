import React from "react";
import "../css/Gallery.css";
import { useState } from "react";

let ActiveArr = new Array(false, false, false, false);

export const Gallery = () => {
  const [active, setActive] = useState(ActiveArr);

  const setArray = (target) => {
    setActive(active = [false, true, false, false]);
    console.log(active);
    // setActive(active[target] = !active[target]);
  }

  return (
    <div className="gallery-product">
      <img
        onClick={() => alert("buka modal")}
        className="first"
        src={`http://localhost:3000/imgs/products/image-product-1.jpg`}
        alt=""
      />
      <div className={`second ${ active[0] == true ?  "active" : "" }`} onClick={() => setArray(0)}>
        <div className="overlay"></div>
        <img
          src={`http://localhost:3000/imgs/products/image-product-1.jpg`}
          alt=""
        />
      </div>
      <div className={`third ${ active[1] == true ?  "active" : "" }`} onClick={() => setArray(1)}>
        <div className="overlay"></div>
        <img
          src={`http://localhost:3000/imgs/products/image-product-2.jpg`}
          alt=""
        />
      </div>
      <div className={`fourth ${ActiveArr[2]}`} onClick={() => alert("buka modal")}>
        <div className="overlay"></div>
        <img
          src={`http://localhost:3000/imgs/products/image-product-3.jpg`}
          alt=""
        />
      </div>
      <div className={`fifth ${ActiveArr[3]}`} onClick={() => alert("buka modal")}>
        <div className="overlay"></div>
        <img
          src={`http://localhost:3000/imgs/products/image-product-4.jpg`}
          alt=""
        />
      </div>
    </div>
  );
};
