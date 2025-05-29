
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Pages/Home/Home.jsx";
import ProductPage from "./Pages/ProductPage.jsx";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category"  element={<ProductPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
      
    </div>
  );
}

export default App;
