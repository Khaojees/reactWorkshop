import './App.css';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/page/Home';
import Member from './components/page/Member';
import Product from './components/page/Product';
// import { BrowserRouter as Rounter } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div>
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/member" element={<Member/>}/>
          <Route path="/product" element={<Product/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
