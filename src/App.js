import './App.css';
import Home from './componants/Home';
import Categories from './componants/Categories';
import Header from './componants/Header';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes  } from 'react-router-dom';
import Footer from './componants/Footer';
import Products from './componants/Products';
import InnerCat from './componants/InnerCat';
import ProductDetail from './componants/ProductDetail';
import Checkout from './componants/Checkout';
import Aboutus from './componants/Aboutus';
import Conatct from './componants/Conatct';
import Login from './componants/Login';

function App() {
  return (
    <>
<Router>
  <div className="app">
    <Header/>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/categories/:categoryId" element={<InnerCat/>} />
        <Route path="/product/:productId" element={<ProductDetail/>} />
        <Route path="/checkout/:cartTotal" element={<Checkout/>} />
        <Route path="/about" element={<Aboutus/>} />
        <Route path="/contact" element={<Conatct/>} />
        <Route path="/login" element={<Login/>} />
      </Routes >  
      <Footer />   
  </div>
</Router>
</>
  );
}

export default App;
