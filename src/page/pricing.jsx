import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, CreditCard, ShieldCheck, Download, 
  ChevronDown, Check, Minus, Star, Quote, 
  FileText, Zap, Infinity, Layers, Smartphone, 
  HelpCircle, ShoppingBag, Box, CheckCircle2,
  Lock, Palette, Globe
} from "lucide-react";

/* --- 1. DATA CONFIGURATION --- */
const plans = [
  {
    id: 1,
    name: "Essential",
    price: 49,
    description: "Perfect for DIY couples looking for a clean, elegant digital presence.",
    features: ["Single-Page RSVP Site", "Mobile Optimized", "Standard License", "PDF Instruction Guide"],
    buttonText: "Buy Essential",
    highlight: false,
    icon: <FileText size={20} />
  },
  {
    id: 2,
    name: "Signature",
    price: 89,
    description: "Our most popular suite. A complete digital branding kit for your wedding.",
    features: ["Multi-Page Website", "Email Invite Templates", "Figma & Canva Files", "Save the Date Graphics"],
    buttonText: "Buy Signature",
    highlight: true,
    icon: <Zap size={20} />
  },
  {
    id: 3,
    name: "Luxury",
    price: 149,
    description: "For high-end events requiring print-ready assets and 1-on-1 support.",
    features: ["Print-Ready Stationery", "Photo Gallery Plugin", "Commercial License", "30-Min Setup Call"],
    buttonText: "Buy Luxury",
    highlight: false,
    icon: <Infinity size={20} />
  },
];

const comparisonFeatures = [
  { feature: "Mobile-Responsive Site", essential: true, signature: true, luxury: true },
  { feature: "RSVP Management", essential: "Basic", signature: "Advanced", luxury: "Custom" },
  { feature: "Edit in Canva/Browser", essential: true, signature: true, luxury: true },
  { feature: "Figma Source Files", essential: false, signature: true, luxury: true },
  { feature: "Matching Email Invites", essential: false, signature: true, luxury: true },
  { feature: "Print-Ready Assets", essential: false, signature: false, luxury: true },
  { feature: "License Type", essential: "Personal", signature: "Personal", luxury: "Commercial" },
  { feature: "Support", essential: "Email", signature: "Priority", luxury: "1-on-1 Call" },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Bride-to-be",
    content: "The Signature Suite saved me weeks of work. The Canva integration was seamless, and I had my wedding site live in under an hour!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    name: "James Chen",
    role: "Event Planner",
    content: "I use the Luxury Collection for my high-end clients. The Figma source files are perfectly organized. Worth every penny.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
  }
];

const faqs = [
  {
    question: "How do I receive my template files?",
    answer: "Immediately after purchase, you will receive an email with a secure download link containing your ZIP folder and setup guide."
  },
  {
    question: "Which software do I need to edit these?",
    answer: "Essential works in Canva/Browser. Signature & Luxury include Figma and Photoshop source files for professional control."
  }
];

/* --- 2. COMPONENTS --- */

const CheckoutDashboard = ({ plan, onClose, onCheckout }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  if (!plan) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-[1.5rem] w-full max-w-4xl overflow-hidden shadow-2xl"
      >
        {/* Header - Styled after reference */}
        <div className="bg-[#450a0a] text-white p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} />
            <h2 className="text-lg font-bold tracking-tight">Checkout</h2>
          </div>
          <button onClick={onClose} className="transition-opacity hover:opacity-70">
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-8 p-6 md:p-10 md:flex-row lg:gap-12">
          {/* Left Column: Order Summary */}
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2 text-stone-800">
              <Box size={18} className="text-[#450a0a]" />
              <h3 className="text-xs font-bold tracking-widest uppercase">Order Summary</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-end justify-between pb-3 border-b border-stone-200">
                <span className="text-sm font-medium text-stone-600">{plan.name} Suite</span>
                <span className="text-sm text-stone-500">${plan.price}.00</span>
              </div>
              
              <div className="flex justify-between py-1">
                <span className="text-stone-400 text-[10px] uppercase font-black tracking-tighter">Subtotal</span>
                <span className="text-sm text-stone-500">${plan.price}.00</span>
              </div>
              
              <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                <span className="text-xl font-bold text-stone-900">Total</span>
                <span className="text-xl font-bold text-stone-900">${plan.price}.00</span>
              </div>
            </div>
          </div>

          {/* Right Column: Payment Details (Compact Card) */}
          <div className="flex-1">
            <div className="border border-stone-200 rounded-[1.5rem] p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-5 text-stone-800">
                <CreditCard size={18} className="text-[#450a0a]" />
                <h3 className="text-sm font-bold">Payment Details</h3>
              </div>

              <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); setIsProcessing(true); setTimeout(onCheckout, 1500); }}>
                <input type="email" placeholder="Email Address" required className="w-full p-3.5 border border-stone-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-stone-400 bg-stone-50/50 text-sm" />
                <input type="text" placeholder="Card Number" required className="w-full p-3.5 border border-stone-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-stone-400 bg-stone-50/50 text-sm" />
                <div className="flex gap-3">
                  <input type="text" placeholder="MM / YY" required className="w-1/2 p-3.5 border border-stone-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-stone-400 bg-stone-50/50 text-sm" />
                  <input type="text" placeholder="CVC" required className="w-1/2 p-3.5 border border-stone-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-stone-400 bg-stone-50/50 text-sm" />
                </div>

                <button 
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-[#450a0a] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 mt-4 hover:bg-[#2d0707] active:scale-[0.99] transition-all"
                >
                  {isProcessing ? (
                    <div className="w-5 h-5 border-2 rounded-full border-white/30 border-t-white animate-spin" />
                  ) : (
                    <><ShieldCheck size={18} /> Pay Now</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-4 border-b border-stone-200">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between w-full py-2 text-left transition-colors hover:text-red-950">
        <span className="font-serif text-lg font-medium">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}><ChevronDown size={20} className="text-stone-400" /></motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <p className="pb-4 text-sm leading-relaxed text-stone-500">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* --- 3. MAIN PAGE COMPONENT --- */
export default function UltimateTemplateSalesPage() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-slide testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-stone-900 font-sans selection:bg-red-100">
      
      {/* SECTION 1: HERO & PRICING */}
      <section className="px-6 pt-24 pb-20 mx-auto max-w-7xl">
        <div className="mb-20 space-y-6 text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block px-4 py-1 rounded-full bg-red-50">
            <span className="text-red-950 font-bold tracking-widest text-[10px] uppercase">One-Time Payment • Instant Access</span>
          </motion.div>
          <h1 className="font-serif text-5xl md:text-7xl">Own the <span className="italic text-red-900">Design</span></h1>
          <p className="max-w-lg mx-auto text-stone-500">High-end wedding & event templates. No subscriptions, just forever access.</p>
        </div>

        <div className="grid gap-8 mb-32 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col p-8 rounded-[2.5rem] border transition-all duration-500 ${
                plan.highlight ? "border-red-950 bg-white shadow-2xl scale-105 z-10" : "border-stone-200 bg-white/50"
              }`}
            >
              <div className="mb-8 text-left">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-6 ${plan.highlight ? 'bg-red-950 text-white' : 'bg-stone-100 text-stone-600'}`}>{plan.icon}</div>
                <h3 className="mb-2 text-xl font-bold tracking-tight">{plan.name} Suite</h3>
                <div className="flex items-baseline gap-1 mb-4 font-serif">
                  <span className="text-3xl">$</span>
                  <span className="text-5xl font-medium">{plan.price}</span>
                  <span className="ml-2 font-sans text-xs font-bold tracking-widest uppercase text-stone-400">Total</span>
                </div>
                <p className="text-sm leading-relaxed text-stone-500">{plan.description}</p>
              </div>
              <div className="flex-1 mb-10 space-y-4">
                {plan.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="text-red-900" size={14} />
                    <span className="text-sm text-stone-600">{f}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => { setSelectedPlan(plan); setIsCheckoutOpen(true); }}
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  plan.highlight ? "bg-red-950 text-white hover:bg-black" : "bg-white text-stone-900 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                <Download size={18} className="inline mr-2" /> {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 2: TECHNICAL SPECS (The Dark Section) */}
      <section className="px-6 mx-auto mb-32 max-w-7xl">
        <div className="bg-stone-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative z-10">
              <h2 className="mb-6 font-serif text-3xl md:text-4xl">Technically <span className="italic text-red-400">Flawless</span></h2>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Layers className="text-red-400" size={24} />
                  <p className="font-bold">Layered Assets</p>
                  <p className="text-xs leading-relaxed text-stone-400">Organized Figma, Canva, and PSD files for pixel-perfect editing.</p>
                </div>
                <div className="space-y-2">
                  <Smartphone className="text-red-400" size={24} />
                  <p className="font-bold">Responsive</p>
                  <p className="text-xs leading-relaxed text-stone-400">Every element is mobile-first and tested on all modern devices.</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-md relative z-10">
              <h3 className="mb-6 text-xs font-bold tracking-widest text-red-400 uppercase">What's Inside the ZIP</h3>
              <ul className="space-y-3 text-sm text-stone-300">
                <li className="flex justify-between pb-2 border-b border-white/10"><span>Source Files</span><span className="text-white">.FIG / .PSD</span></li>
                <li className="flex justify-between pb-2 border-b border-white/10"><span>Setup Guide</span><span className="text-white">12-Page PDF</span></li>
                <li className="flex justify-between"><span>Assets Folder</span><span className="text-white">SVG Icons</span></li>
              </ul>
            </div>
          </div>
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-900/10 blur-[120px] rounded-full -mr-20 -mt-20" />
        </div>
      </section>

      {/* SECTION 3: COMPARISON TABLE */}
      <section className="hidden max-w-5xl px-6 mx-auto mb-32 md:block">
        <h2 className="mb-12 font-serif text-3xl text-center">Compare <span className="italic">Details</span></h2>
        <div className="bg-white rounded-[2rem] border border-stone-200 overflow-hidden shadow-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-stone-50">
                <th className="p-6 text-[10px] uppercase tracking-widest text-stone-400 font-bold">Feature Set</th>
                <th className="p-6 font-serif text-lg text-center">Essential</th>
                <th className="p-6 font-serif text-lg text-center bg-red-50/20 text-red-950">Signature</th>
                <th className="p-6 font-serif text-lg text-center">Luxury</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((item, idx) => (
                <tr key={idx} className="transition-colors border-b border-stone-100 hover:bg-stone-50/50">
                  <td className="p-6 text-sm font-medium text-stone-700">{item.feature}</td>
                  <td className="p-6 text-center">
                    {typeof item.essential === "boolean" ? (item.essential ? <Check className="mx-auto text-stone-400" size={18}/> : <Minus className="mx-auto text-stone-200" size={18}/>) : <span className="text-xs font-bold">{item.essential}</span>}
                  </td>
                  <td className="p-6 text-center bg-red-50/5">
                    {typeof item.signature === "boolean" ? (item.signature ? <Check className="mx-auto text-red-900" size={20}/> : <Minus className="mx-auto text-stone-200" size={20}/>) : <span className="text-xs font-bold text-red-950">{item.signature}</span>}
                  </td>
                  <td className="p-6 text-center">
                    {typeof item.luxury === "boolean" ? (item.luxury ? <Check className="mx-auto text-stone-800" size={18}/> : <Minus className="mx-auto text-stone-200" size={18}/>) : <span className="text-xs font-bold">{item.luxury}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 4: TESTIMONIALS */}
      <section className="px-6 py-24 overflow-hidden text-center bg-stone-50/50">
        <div className="max-w-4xl mx-auto">
          <Quote className="mx-auto mb-8 text-red-900/10" size={60} />
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <p className="font-serif text-2xl italic leading-relaxed md:text-3xl text-stone-800">"{testimonials[activeTestimonial].content}"</p>
              <div className="flex items-center justify-center gap-4">
                <img src={testimonials[activeTestimonial].avatar} className="w-12 h-12 border-2 border-white rounded-full shadow-sm" alt=""/>
                <div className="text-left">
                  <p className="font-bold text-stone-900">{testimonials[activeTestimonial].name}</p>
                  <p className="text-xs tracking-widest uppercase text-stone-500">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* SECTION 5: FAQ */}
      <section className="max-w-3xl px-6 py-32 mx-auto">
        <div className="mb-16 space-y-4 text-center">
          <HelpCircle className="mx-auto text-red-900" size={32} />
          <h2 className="font-serif text-4xl">Common <span className="italic">Questions</span></h2>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, idx) => <FAQItem key={idx} {...faq} />)}
        </div>
      </section>

     

      {/* MODAL SYSTEM */}
      <AnimatePresence>
        {isCheckoutOpen && (
          <CheckoutDashboard 
            plan={selectedPlan} 
            onClose={() => setIsCheckoutOpen(false)} 
            onCheckout={() => { 
                alert("Payment Successful! A download link has been sent to your email."); 
                setIsCheckoutOpen(false); 
            }} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}