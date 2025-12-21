import React from "react";

// --- IMAGES ---
// Ensure these paths are correct for your Vite/React project structure
import Ti from "../assets/invitattion_front/p1.png";
import P4 from "../assets/invitattion_front/frame1.png";
import P5 from "../assets/invitattion_front/frame2.png";
import P6 from "../assets/invitattion_front/frame3.png";
import P7 from "../assets/invitattion_front/frame4.png";
import P8 from "../assets/invitattion_front/frame5.png";
import P9 from "../assets/invitattion_front/frame6.png";
import P10 from "../assets/invitattion_front/frame7.png";
import P11 from "../assets/invitattion_front/frame8.png";

const products = [
  { id: 1, title: "CREATIVITE Online Wedding RSVP Page – Collect RSVPs & Track Guests", price: "KHR 153,000.00", image: P1 },
  { id: 4, title: "MARISOL Sunflowers Digital Wedding Invitation With Online RSVP", price: "From KHR 88,000.00", image: P4 },
  { id: 5, title: "MARISOL Sunflowers Digital Wedding Invitation With Online RSVP", price: "From KHR 88,000.00", image: P5 },
  { id: 6, title: "MARISOL Sunflowers Digital Wedding Invitation With Online RSVP", price: "From KHR 88,000.00", image: P6 },
  { id: 7, title: "MARISOL Sunflowers Digital Wedding Invitation With Online RSVP", price: "From KHR 88,000.00", image: P7 },
  { id: 8, title: "MARISOL Sunflowers Digital Wedding Invitation With Online RSVP", price: "From KHR 88,000.00", image: P8 },
  { id: 9, title: "MARISOL Sunflowers Digital Wedding Invitation With Online RSVP", price: "From KHR 88,000.00", image: P9 },
  { id: 10, title: "MARISOL Sunflowers Digital Wedding Invitation With Online RSVP", price: "From KHR 88,000.00", image: P10 },
  { id: 11, title: "MARISOL Sunflowers Digital Wedding Invitation With Online RSVP", price: "From KHR 88,000.00", image: P11 },
];

// --- SUB-COMPONENT: ProductCard ---
const ProductCard = ({ image, title, price }) => {
  
  return (
    <div className="flex flex-col items-center w-full cursor-pointer group">
      {/* Container for the image: aspect-ratio and overflow hidden are key */}
      <div className="relative w-full aspect-[9/16] overflow-hidden rounded-2xl shadow-md bg-gray-50 border border-gray-100">
        <img 
          src={image} 
          alt={title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Text Details */}
      <div className="mt-6 space-y-1 text-center">
        <h3 className="text-[13px] font-bold uppercase tracking-wide leading-snug px-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm font-medium text-gray-500">
          {price}
        </p>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT: ProductPage ---
export default function ProductPage() {
  return (
    <div className="flex justify-center min-h-screen overflow-x-hidden bg-white">
      <div className="w-full px-4 py-16 max-w-7xl md:px-8">
        <h1 className=" font-bold text-red-950 justify-center items-center mb-[50px] text-2xl md:text-6xl lg:text-4xl  leading-tight font-serif">  Here is Sample You can View</h1>
        
        {/* The Section and Grid */}
        <section className="w-full min-w-0 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 justify-items-center">
            {products.map((product) => (
              <div key={product.id} className="w-full max-w-[340px]">
                <ProductCard 
                  image={product.image} 
                  title={product.title} 
                  price={product.price} 
                />
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}