import React from "react";

// Import your images
import c1 from "../assets/invitattion_front/c1.png";
import c2 from "../assets/invitattion_front/c2.png";
import c3 from "../assets/invitattion_front/c3.png";
import c4 from "../assets/invitattion_front/c4.png";
import c5 from "../assets/invitattion_front/c5.png";
import c6 from "../assets/invitattion_front/c6.png";
import c7 from "../assets/invitattion_front/c7.png";
import c8 from "../assets/invitattion_front/c8.png";

export default function Footer() {
  return (
    <footer className="w-full bg-red-950 text-white py-10 px-4">
      
      {/* Top section: Country selector + Payment icons */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Country selector */}
        <div>
          <select
            className="  bg-gray-600 text-white px-4 py-2 rounded-md"
          >
            <option>Cambodia (KH ៛)</option>
          </select>
        </div>

        {/* Payment icons row */}
        <div className="flex flex-wrap justify-center gap-4">
          {[c1, c2, c3, c4, c5, c6, c7, c8].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`payment-${index}`}
              className="w-20 h-20 object-contain"
            />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-500 my-8"></div>

      {/* Footer links */}
      <div className="flex flex-wrap justify-center gap-6 text-sm text-white">
        <a href="#">Search</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Terms of Service</a>
        <a href="#">Refund Policy</a>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm text-white">
        © 2025 LINDA & DEVID — Powered by ETEC CENTER
      </div>
    </footer>
  );
}
