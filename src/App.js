import React, { useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import store from "./Components/Store/Store";

import Navbar from "./Components/Navbar";
import Products from "./Components/ProductsPage/Products";
import MainLoginPage from "./Components/LoginPage/MainLoginPage";
import About from "./Components/About";
import ContactPage from "./Components/ContactPage";

import "./App.css";
import { fetchCart } from "./Components/Store/CartSlice";

const LoadCart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return null; // Render nothing, as this component only handles side effects
};

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <LoadCart />
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
