import React, { useState,useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Product } from './components/Product';
import './css/Index.css';

function App() {
  const [dataFromChild, setDataFromChild] = useState([]);

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  return (
    <div className="App">
      <Navigation cartData={dataFromChild}/>
      <Product sendDataToParent={handleDataFromChild} />
    </div>
  );
}

export default App;
