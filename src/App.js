import { Gallery } from './components/Gallery';
import { Navigation } from './components/Navigation';
import { Product } from './components/Product';
import './css/Index.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Product />
    </div>
  );
}

export default App;
