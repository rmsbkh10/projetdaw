import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Pages/Home/Home.jsx";
import ProductPage from "./Pages/ProductCard/ProductPage.jsx";
import Cart from '../src/Cart.jsx';
import AllProducts from './Pages/AllProducts/AllProducts.jsx';
import Contact  from './Pages/Contact/Contact.jsx';
import { CartProvider } from './CartContext'; 
function App() {
  return (
    <CartProvider> 
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
                  <Route path="/products" element={<AllProducts />} />
                  <Route path="/contact" element={<Contact />} />
            <Route path="/products/:category" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
