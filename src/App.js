import './App.css';
import Navbar from './Nav';
import Noise from './Noise';
import Support from './Support';
import Stories from './Stories';
import ProductsNoise from './ProductsNoise';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />
          <Routes>
            <Route  excat path="/" element={<Noise />} />
            <Route  excat path="/products" element={<ProductsNoise />} />
            <Route  path="/support" element={<Support />} />
            <Route  path="/stories" element={<Stories />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
