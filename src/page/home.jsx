import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Assets
const Ni = "/assets/logo-web.png";
import Loading from "../components/Loading";
const Homepic = "/assets/homepic.jpg";
const Homepic1 = "/assets/homepic1.jpg";
const Homepic2 = "/assets/homepic2.jpg";
const Homepic3 = "/assets/homepic3.jpg";
const Homepic4 = "/assets/homepic4.jpg";
const Homepic5 = "/assets/homepic5.jpg";
import "../App.css";

// --- SUB-COMPONENT: MENU ITEM ---
function MenuItem({ text, to = "/", hasSubmenu = false, onClick }) {
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className="flex items-center justify-between px-8 py-4 transition-colors border-b border-gray-50 hover:bg-gray-50 group"
    >
      <span className="text-sm font-medium tracking-widest text-gray-600 uppercase group-hover:text-red-900">{text}</span>
      {hasSubmenu && <i className="fa-solid fa-chevron-right text-[10px] text-gray-300 group-hover:text-red-900 transition-transform"></i>}
    </Link>
  );
}

// --- SUB-COMPONENT: NAVBAR ---
export function Navbar({ cartCount = 0 }) { // Accept cartCount as a prop from App.jsx
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      {/* Top Promotional Banner */}
      <div className="flex px-4 py-3 overflow-hidden bg-red-950 whitespace-nowrap">
  <motion.div
    animate={{ x: ["0%", "-50%"] }} // Move halfway (since the content is doubled)
    transition={{ 
      repeat: Infinity, 
      duration: 20, // Increased duration for readability
      ease: "linear" 
    }}
    className="inline-block whitespace-nowrap"
  >
    <p className="inline-block text-xs font-medium tracking-wide md:text-sm text-amber-500">
      ENJOY 20% OFF WHEN YOU ORDER 4 OR MORE ITEMS. USE CODE{' '}
      <span className="font-bold text-white">SOLINDA</span> AT CHECKOUT. THIS VALUABLE CODE ONLY AVAILABLE FOR A LIMITED TIME! 
      <span className="mx-4">|</span> {/* Separator */}
    </p>
    
    {/* Duplicate the text to create the seamless loop effect */}
    <p className="inline-block text-xs font-medium tracking-wide md:text-sm text-amber-500">
      ENJOY 20% OFF WHEN YOU ORDER 4 OR MORE ITEMS. USE CODE{' '}
      <span className="font-bold text-white">SAYIDO20</span> AT CHECKOUT. THIS VALUABLE CODE ONLY AVAILABLE FOR A LIMITED TIME! 
      <span className="mx-4">|</span>
    </p>
  </motion.div>
</div>

      {/* Main Navbar */}
      <nav className="border-b border-gray-100 shadow-sm bg-white/90 backdrop-blur-md">
        <div className="flex items-center justify-between h-20 px-4 mx-auto max-w-7xl">
          
          {/* Hamburger Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="flex flex-col gap-1.5 p-2 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <span className="w-6 h-0.5 bg-gray-800 block"></span>
            <span className="w-6 h-0.5 bg-gray-800 block"></span>
            <span className="w-6 h-0.5 bg-gray-800 block"></span>
          </button>

          {/* Logo */}
          <Link to="/" className="flex justify-center flex-1 lg:translate-x-4">
            <img src={Ni} alt="website logo" className="object-contain w-auto h-10 md:h-14" />
          </Link>

          {/* Right Icons */}
          <div className="flex items-center gap-1">
            {/* Sign In / User Icon */}
            <Link to="/signin" className="hidden p-2 rounded-full hover:bg-gray-50 sm:block">
              <i className="text-gray-700 fa-solid fa-lg fa-users"></i>
            </Link>

            {/* Shopping Cart Button */}
            <Link to="/checkout" className="relative p-2 rounded-full hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {/* Badge for Cart Count */}
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-950 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      {/* Slide-out Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              onClick={toggleMenu}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-full max-w-[320px] bg-white z-50 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b">
                <span className="font-serif text-xl italic text-red-950">Navigation</span>
                <button onClick={toggleMenu} className="p-2 rounded-full hover:bg-gray-100">
                   <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex-1 py-4 overflow-y-auto">
                <MenuItem text="ABOUT US" to="/about" onClick={toggleMenu} />
                <MenuItem text="E-invitattionS" to="/demo" onClick={toggleMenu} />
                <MenuItem text="CONTACT US" to="/contact" onClick={toggleMenu} />
                <MenuItem text="PRICING" to="/pricing" onClick={toggleMenu} />
                <MenuItem text="REVIEWS" to="/reviews" onClick={toggleMenu} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- MAIN COMPONENT: HOME ---
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const col1 = [Homepic, Homepic1, Homepic2];
  const col2 = [Homepic3, Homepic4, Homepic5];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Main Container - Optimized Padding */}
      <main className="pb-12 pt-36 md:pt-44 lg:pt-48">
        <div className="grid items-center grid-cols-1 gap-12 px-6 mx-auto max-w-7xl lg:grid-cols-2">
          
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 space-y-6 text-center md:space-y-10 lg:text-left lg:order-1"
          >
            <div className="space-y-4">
              <span className="text-red-950 font-semibold tracking-[0.2em] text-xs md:text-sm uppercase block">Welcome to LINDA&DEVID</span>
              <h1 className="font-serif text-4xl leading-tight text-gray-900 md:text-6xl lg:text-7xl">
                Beautifully <span className="italic font-light text-red-950">Crafted</span> Moments
              </h1>
            </div>
            
            <p className="max-w-md mx-auto text-base font-light leading-relaxed text-gray-500 md:text-lg lg:mx-0">
              Design, send, and manage invitattions in just a few clicks. 
              Experience the world's most elegant digital RSVP system.
            </p>
            
            <div className="flex flex-col justify-center gap-4 pt-2 sm:flex-row lg:justify-start">
            <button className="px-10 py-4 text-white transition-all rounded-full shadow-xl bg-red-950 hover:bg-neutral-800 active:scale-95"  onClick={() => window.location.href = '/demo'}>
                Start Designing
              </button>
              <button className="px-10 py-4 font-medium text-gray-800 transition-all border rounded-full border-red-950 hover:bg-gray-50 ">
                View Gallery
              </button>
            </div>
          </motion.div>

          {/* Right Side: Gallery Marquee */}
          <div className="order-1 lg:order-2 flex gap-4 md:gap-6 h-[400px] md:h-[500px] lg:h-[650px] overflow-hidden relative rounded-2xl md:rounded-3xl">
            {/* Top and Bottom Fades for smooth transition */}
            <div className="absolute top-0 left-0 z-10 w-full h-20 pointer-events-none bg-gradient-to-b from-white via-white/40 to-transparent" />
            <div className="absolute bottom-0 left-0 z-10 w-full h-20 pointer-events-none bg-gradient-to-t from-white via-white/40 to-transparent" />

            {/* Column 1 */}
            <div className="w-1/2">
              <motion.div 
                animate={{ y: [0, "-50%"] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="flex flex-col gap-4 md:gap-6"
              >
                {[...col1, ...col1].map((img, i) => (
                  <img key={`c1-${i}`} src={img} className="w-full rounded-xl md:rounded-2xl shadow-lg border border-gray-100 object-cover aspect-[3/4]" alt="Invite" />
                ))}
              </motion.div>
            </div>

            {/* Column 2 */}
            <div className="w-1/2 pt-12">
              <motion.div 
                animate={{ y: ["-50%", 0] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex flex-col gap-4 md:gap-6"
              >
                {[...col2, ...col2].map((img, i) => (
                  <img key={`c2-${i}`} src={img} className="w-full rounded-xl md:rounded-2xl shadow-lg border border-gray-100 object-cover aspect-[3/4]" alt="Invite" />
                ))}
              </motion.div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
