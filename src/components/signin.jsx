import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const Mylogo = "/assets/logo-web.png"

// Your imported component
import Home from "../page/home.jsx";


const AuthCard = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle Authentication Click
  const handleAuth = (e) => {
    e.preventDefault();
    // In a real app, logic for validation goes here
    setIsLoggedIn(true); 
  };

  /**
   * 1. CONDITIONAL RENDERING
   * If the user is logged in, show the Home component.
   */
  if (isLoggedIn) {
    return (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Home /> 
        {/* Added a floating logout button for your testing convenience */}
        <button 
          onClick={() => setIsLoggedIn(false)}
          className="fixed bottom-10 right-10 z-50 px-6 py-2 bg-red-950 text-white rounded-full shadow-lg hover:bg-red-900 transition-all"
        >
          Logout for Testing
        </button>
      </motion.div>
    );
  }

  /**
   * 2. AUTH CARD VIEW
   */
  return (
    <div className="min-h-screen bg-red-950/10 flex items-center justify-center font-sans p-4">
      <div className="relative w-full max-w-[650px] h-[415px] bg-white rounded-xl shadow-2xl flex items-center overflow-visible">
        
        {/* Background Left: Sign In Prompt (Visible when sliding box is on the right) */}
        <div className="w-1/2 flex flex-col items-center justify-center text-center p-6">
          <h2 className="font-serif text-red-950/30 text-2xl tracking-widest leading-tight">
            <span className="text-red-950 font-bold">LINDA</span>&<br />& DEVID
          </h2>
          <img src={Mylogo} alt="flower" className="w-20 h-24 opacity-60 my-4 object-cover rounded" />
          <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-4">Welcome Back</p>
          <button 
            onClick={() => setIsSignUp(false)}
            className="mt-2 px-8 py-2 border border-red-950/20 rounded-full text-[10px] tracking-widest uppercase text-red-950 hover:bg-red-950 hover:text-white transition-all duration-300"
          >
            Sign In
          </button>
        </div>

        {/* Background Right: Sign Up Prompt (Visible when sliding box is on the left) */}
        <div className="w-1/2 flex flex-col items-center justify-center text-center p-6">
          <h2 className="font-serif text-red-950/30 text-2xl tracking-widest leading-tight">
            <span className="text-red-950 font-bold">LINDA</span>&<br />& DEVID        </h2>
          <img src={Mylogo} alt="flower" className="w-24 h-24 opacity-60 my-4 object-cover rounded" />
          <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-4">New here?</p>
          <button 
            onClick={() => setIsSignUp(true)}
            className="mt-2 px-8 py-2 border border-red-950/20 rounded-full text-[10px] tracking-widest uppercase text-red-950 hover:bg-red-950 hover:text-white transition-all duration-300"
          >
            Register
          </button>
        </div>

        {/* --- MOVING FRONT BOX --- */}
        <motion.div 
          initial={false}
          animate={{ x: isSignUp ? '85%' : '5%' }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="absolute  left-0 w-[320px] h-[455px] bg-red-950 rounded-xl shadow-[0_20px_50px_rgba(69,10,10,0.3)] z-10 flex flex-col items-center pt-20 px-10"
        >
          <AnimatePresence mode="wait">
            {!isSignUp ? (
              <motion.div 
                key="signin-form"
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full flex flex-col items-center"
              >
                <h1 className="text-white text-2xl tracking-[6px] uppercase mb-12 font-serif">Sign In</h1>
                <form className="w-full space-y-6" onSubmit={handleAuth}>
                  <input type="text" placeholder="Username" className="auth-input" required />
                  <input type="password" placeholder="Password" className="auth-input" required />
                  <button type="submit" className="auth-submit mt-10">Enter Atelier</button>
                </form>
              </motion.div>
            ) : (
              <motion.div 
                key="signup-form"
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full flex flex-col items-center"
              >
                <h1 className="text-white text-2xl tracking-[6px] uppercase mb-10 font-serif">Register</h1>
                <form className="w-full space-y-4" onSubmit={handleAuth}>
                  <input type="text" placeholder="Username" className="auth-input" required />
                  <input type="email" placeholder="Email Address" className="auth-input" required />
                  <input type="password" placeholder="Password" className="auth-input" required />
                  <button type="submit" className="auth-submit mt-6">Create Account</button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <style jsx>{`
        .auth-input {
          width: 100%;
          background: transparent;
          border-bottom: 1px solid rgba(255,255,255,0.2);
          padding: 10px 0;
          color: white;
          outline: none;
          font-size: 13px;
          transition: all 0.3s;
        }
        .auth-input:focus {
          border-bottom-color: rgba(255,255,255,1);
        }
        .auth-input::placeholder {
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 10px;
        }
        .auth-submit {
          width: 100%;
          padding: 14px 0;
          background: white;
          color: #450a0a;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 10px;
          font-weight: bold;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .auth-submit:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          background: #fafafa;
        }
      `}</style>
    </div>
  );
};

export default AuthCard;