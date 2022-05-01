import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet/styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Cart from "./pages/cart";
import Wishlist from "./pages/wishlist";
import Products from "./pages/products";
import Login from "./pages/login"
import SignUp from "./pages/sign_up"
import ErrorPage from "./pages/error_page";
import { WishlistProvider } from "./contexts/wishlist-context";

ReactDOM.render(
  <React.StrictMode>
    <WishlistProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="homepage" element={<Homepage />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="login" element={<Login />} />
          <Route path="sign_up" element={<SignUp />} />
          <Route path="*" element={<ErrorPage />} />
      </Route>
      </Routes>
      </BrowserRouter>
    </WishlistProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
