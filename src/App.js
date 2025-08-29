import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Locate from "./pages/Locate";
import ProductDetail from "./pages/ProductDetail"; // 👈 importa la nueva página

export default function App() {
  return (
    <BrowserRouter>
      <div
        className="app"
        style={{
          minHeight: "100vh",
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
        }}
      >
        <Header />
        <main style={{ padding: "1rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/producto/:id" element={<ProductDetail />} /> {/* 👈 nueva ruta */}
            <Route path="/ubicanos" element={<Locate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}