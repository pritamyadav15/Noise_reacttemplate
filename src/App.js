import './App.css';
import Navbar from './Navbar';
import Noise from './Noise';
import Support from './Support';
import Stories from './Stories';
import Product from './Product';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />
          <Routes>
            <Route  excat path="/" element={<Noise />} />
            <Route  excat path="/products" element={<Product />} />
            <Route  path="/support" element={<Support />} />
            <Route  path="/stories" element={<Stories />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
