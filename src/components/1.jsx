import React from "react";
import { motion } from "framer-motion";

// Image imports
import Homepic from "../assets/invitattion_front_temp/homepic.jpg";
import Homepic1 from "../assets/invitattion_front_temp/homepic1.jpg";
import Homepic2 from "../assets/invitattion_front_temp/homepic2.jpg";
import Homepic3 from "../assets/invitattion_front_temp/homepic3.jpg";
import Homepic4 from "../assets/invitattion_front_temp/homepic4.jpg";
import Homepic5 from "../assets/invitattion_front_temp/homepic5.jpg";

export default function Home() {
  // Split images into two groups for the two columns
  const col1 = [Homepic, Homepic1, Homepic2];
  const col2 = [Homepic3, Homepic4, Homepic5];

  return (
    <div className="min-h-screen bg-white pt-32 md:pt-40 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8 z-10"
        >
          <h1 className="text-5xl md:text-7xl font-serif leading-tight">
            Beautifully <span className="italic text-teal-600 font-light">Crafted</span> Moments
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed max-w-md">
            Design, send, and manage invitations in just a few clicks. 
            Experience the smoothest digital RSVP system.
          </p>
          <div className="flex gap-4">
            <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-neutral-800 transition-all">
              Start Designing
            </button>
          </div>
        </motion.div>

        {/* Right Side: Vertical Marquee (Up & Down) */}
        <div className="flex gap-4 max-h-screen">
          
          {/* Column 1: Moving Upwards */}
          <div className="w-1/2 overflow-hidden">
            <motion.div 
              animate={{ y: [0, "-50%"] }} // Moves half the total height (one full set of images)
              transition={{ 
                duration: 15, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex flex-col gap-4"
            >
              {/* Duplicate the array to create a seamless loop */}
              {[...col1, ...col1].map((img, i) => (
                <img 
                  key={i} 
                  src={img} 
                  className="w-full rounded-2xl shadow-md border border-gray-100" 
                  alt="Wedding Invite" 
                />
              ))}
            </motion.div>
          </div>

          {/* Column 2: Moving Downwards */}
          <div className="w-1/2 overflow-hidden">
            <motion.div 
              animate={{ y: ["-50%", 0] }} // Moves from the halfway point back to start
              transition={{ 
                duration: 18, // Slightly different speed for a natural look
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex flex-col gap-4"
            >
              {[...col2, ...col2].map((img, i) => (
                <img 
                  key={i} 
                  src={img} 
                  className="w-full rounded-2xl shadow-md border border-gray-100" 
                  alt="Wedding Invite" 
                />
              ))}
            </motion.div>
          </div>
          
        </div>

      </div>
    </div>
  );
}