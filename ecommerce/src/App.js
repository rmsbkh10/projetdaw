import './App.css';
import { Routes, Route } from "react-router-dom"; // ⚠️ PAS Router ici
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Pages/Home/Home.jsx";
import ProductPage from "./Pages/ProductCard/ProductPage.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
