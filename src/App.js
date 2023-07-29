import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Product } from './components/Product';
import './css/Index.css';

function App() {
  const [dataFromChild, setDataFromChild] = useState([]);

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };
  const clearData = (id) => {
    const updatedArray = dataFromChild.filter((obj) => obj.id !== id);
    setDataFromChild(updatedArray);
  }

  return (
    <div className="App">
      <Navigation cartData={dataFromChild} clearDataToParent={clearData}/>
      <Product sendDataToParent={handleDataFromChild} />
    </div>
  );
}

export default App;
