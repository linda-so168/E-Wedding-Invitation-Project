import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Components
import { Navbar } from "./page/home.jsx"; 
import Footer from "./components/footer.jsx";
import Signin from './components/signin.jsx';
import CheckoutPage from './components/addcart.jsx';

// Pages
import Home from "./page/home.jsx";
import AboutUs from "./page/about.jsx";
import ContactUs from './page/contact.jsx';
import Productpage from "./page/productpage.jsx";
import Pricing from "./page/pricing.jsx";
import Review from "./page/review.jsx";
import Demo from "./page/demo.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  // 1. GLOBAL CART STATE
  const [cart, setCart] = useState([]);

  // 2. ADD TO CART FUNCTION
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div className="App flex flex-col min-h-screen">
      <ScrollToTop />
      {/* Pass cart length to Navbar if you want to show a counter badge */}
      <Navbar cartCount={cart.length} />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
           
              <Home />
              <Productpage addToCart={addToCart} />
            </>
          } />
          
          {/* 3. PASS PROPS TO DEMO AND CHECKOUT */}
          <Route path="/demo" element={<Demo addToCart={addToCart} />} />
          
          <Route path="/checkout" element={<CheckoutPage cart={cart} />} />

          <Route path="/pricing" element={<Pricing />} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}