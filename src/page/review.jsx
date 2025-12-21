import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah & James",
    date: "October 2024",
    rating: 5,
    comment: "The digital RSVP system was a lifesaver. Our guests found it so easy to use, and the design matched our physical invitations perfectly!",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Michael & Elena",
    date: "August 2024",
    rating: 5,
    comment: "We loved the custom wedding website. It was elegant, fast, and the customer support was incredibly helpful with our custom domain setup.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Chloe & David",
    date: "September 2024",
    rating: 5,
    comment: "Simply the most beautiful digital invitations we found online. The animation when opening the envelope is such a high-end touch.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Jessica & Tom",
    date: "June 2024",
    rating: 5,
    comment: "Great experience overall. The guest list management tool saved us hours of spreadsheets. Highly recommend for modern weddings.",
    image: "https://images.unsplash.com/photo-1460364155252-978247ca99d5?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Reviews() {
  return (
    <div className="min-h-screen bg-[#FCFBFA] pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Redesigned Header */}
        <div className="flex flex-col items-center text-center space-y-6 mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-12 h-[1px] bg-red-950/40"
          />
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-red-950 font-medium tracking-[0.3em] text-xs uppercase"
          >
            Testimonials
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-gray-950 max-w-3xl leading-tight"
          >
            Kind words from our <span className="italic font-light text-red-950">Beloved</span> couples
          </motion.h1>
        </div>

        {/* Minimalist Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 py-12 border-y border-red-950/10 justify-center items-center">
          <div className="text-center group  justify-center items-center">
            <h2 className="text-5xl font-serif text-red-950 mb-2 transition-transform group-hover:-translate-y-1">4.9</h2>
            <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#450a0a" className="text-red-950" />)}
            </div>
            <p className="text-gray-400 uppercase tracking-widest text-[10px] font-semibold">Average Love Rating</p>
          </div>
          <div className="text-center md:border-x border-red-950/10 px-8 group">
            <h2 className="text-5xl font-serif text-red-950 mb-2 transition-transform group-hover:-translate-y-1">2.5k</h2>
            <p className="text-gray-400 uppercase tracking-widest text-[10px] font-semibold">Global Celebrations</p>
          </div>
          <div className="text-center group">
            <h2 className="text-5xl font-serif text-red-950 mb-2 transition-transform group-hover:-translate-y-1">100%</h2>
            <p className="text-gray-400 uppercase tracking-widest text-[10px] font-semibold">Quality Commitment</p>
          </div>
        </div>

        {/* Reviews Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-4 gap-10 space-y-10  justify-center items-center">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="break-inside-avoid   justify-center items-center relative group bg-white p-10 rounded-sm border border-transparent hover:border-red-950/10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(69,10,10,0.05)]"
            >
              <Quote className="absolute top-8 right-10 text-red-950/5 group-hover:text-red-950/10 transition-colors" size={56} />
              
              <div className="relative z-10">
                <p className="text-gray-800 leading-[1.8] text-lg font-light mb-10 italic">
                  "{review.comment}"
                </p>

                <div className="flex items-center gap-5 pt-8 border-t border-gray-50">
                  <div className="relative">
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      className="w-14 h-14 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 rounded-full border border-red-950/10 scale-125 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <h4 className="font-serif text-gray-950 text-base">{review.name}</h4>
                    <p className="text-red-950/60 text-[10px] uppercase tracking-[0.2em] mt-1">{review.date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Elegant Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 overflow-hidden relative bg-red-950 rounded-[2rem] py-20 px-8 text-center text-white shadow-2xl shadow-red-950/20  justify-center items-center"
        >
            {/* Decorative background element */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none flex items-center justify-center">
            <h2 className="text-[10rem] font-serif uppercase select-none">Linda & Devid</h2>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-8  justify-center items-center">
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">Begin your beautiful <br/> <span className="italic font-light text-red-200">Chapter</span> today</h2>
            <p className="text-red-100/70 max-w-md mx-auto font-light leading-loose tracking-wide">
              Join thousands of couples who have chosen elegance and simplicity for their most precious day.
            </p>
            <button className="group relative bg-white text-red-950 px-12 py-5 rounded-full font-bold overflow-hidden transition-all hover:pr-16  justify-center items-center">
              <span className="relative z-10">Create Your Invitation</span>
              <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all">→</span>
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}