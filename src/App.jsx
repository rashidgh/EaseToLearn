import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./component/Login";
import ProductListPage from "./component/ProductList";
import AboutPage from "./component/About";
import Header from "./component/Header";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
