import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Components/Store/Store";

import Navbar from "./Components/Navbar";
import Products from "./Components/ProductsPage/Products";
import MainLoginPage from "./Components/LoginPage/MainLoginPage";
import About from "./Components/About";
import ContactPage from "./Components/ContactPage";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/Login" element={<MainLoginPage />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
