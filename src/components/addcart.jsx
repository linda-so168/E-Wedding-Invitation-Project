import React from "react";
import { motion } from "framer-motion";
import { CreditCard, ShieldCheck, ShoppingBag, Trash2, X, Package } from "lucide-react";

const CheckoutDashboard = ({ cart, onClose, removeFromCart }) => {
  const subtotal = cart.reduce((sum, item) => sum + (item.price || 0), 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handlePayment = (e) => {
    e.preventDefault();
    alert("Processing secure payment for $" + total.toFixed(2));
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b bg-red-950 text-white">
          <div className="flex items-center gap-3">
            <ShoppingBag size={24} />
            <h2 className="text-2xl font-bold">Checkout</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left: Summary */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold flex items-center gap-2 border-b pb-4">
                <Package className="text-red-950" /> Order Summary
              </h3>
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 bg-gray-50 p-4 rounded-2xl border relative">
                  <img src={item.image} alt="" className="w-16 h-20 object-cover rounded-lg shadow" />
                  <div className="flex-1">
                    <p className="font-bold">{item.name}</p>
                    <p className="text-red-950 font-bold">${item.price}</p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-red-600"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
              <div className="pt-4 space-y-2 text-sm border-t">
                <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between font-bold text-lg pt-2"><span>Total</span><span>${total.toFixed(2)}</span></div>
              </div>
            </div>

            {/* Right: Payment */}
            <form onSubmit={handlePayment} className="space-y-4 bg-gray-50 p-6 rounded-3xl border">
              <h3 className="font-bold mb-4 flex items-center gap-2"><CreditCard /> Payment Details</h3>
              <input type="email" placeholder="Email" required className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-950 outline-none" />
              <input type="text" placeholder="Card Number" required className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-950 outline-none" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="MM/YY" required className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-950 outline-none" />
                <input type="text" placeholder="CVC" required className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-950 outline-none" />
              </div>
              <button className="w-full py-4 bg-red-950 text-white rounded-xl font-bold shadow-lg hover:bg-red-900 transition-all flex items-center justify-center gap-2">
                <ShieldCheck size={20} /> Pay Now
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CheckoutDashboard;