import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Products from "./Components/ProductsPage/Products";
import LoginPage from "./Components/Authentication/LoginPage";
import About from "./Components/About";
import ContactPage from "./Components/ContactPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
