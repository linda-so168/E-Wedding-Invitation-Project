import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Modern Looping Banner */}
      <div className="bg-neutral-900 text-white overflow-hidden py-2 uppercase tracking-widest text-[10px]">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="whitespace-nowrap flex gap-10"
        >
          <span>Enjoy 20% off when you order 4 or more items • Use code SAYIDO20</span>
          <span>Enjoy 20% off when you order 4 or more items • Use code SAYIDO20</span>
          <span>Enjoy 20% off when you order 4 or more items • Use code SAYIDO20</span>
        </motion.div>
      </div>

      <nav className={`transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md py-2 shadow-md" : "bg-white py-4"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Hamburger */}
          <button onClick={() => setIsMenuOpen(true)} className="group space-y-1.5">
            <span className="w-6 h-0.5 bg-black block group-hover:w-4 transition-all"></span>
            <span className="w-6 h-0.5 bg-black block"></span>
            <span className="w-4 h-0.5 bg-black block group-hover:w-6 transition-all"></span>
          </button>

          {/* Logo */}
          <Link to="/">
            <img src={mylogo} alt="logo" className="w-14 h-auto transition-transform hover:scale-110" />
          </Link>

          {/* Action Icons */}
          <div className="flex gap-5">
             <button className="hover:text-teal-600 transition-colors"><i className="fa-regular fa-user"></i></button>
             <button className="relative hover:text-teal-600 transition-colors">
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
             </button>
          </div>
        </div>
      </nav>

      {/* Modern Slide-out Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" 
            />
            <motion.div 
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-full max-w-sm bg-white z-50 p-10 shadow-2xl"
            >
              <button onClick={() => setIsMenuOpen(false)} className="absolute top-10 right-10 text-2xl">✕</button>
              <div className="mt-20 space-y-8">
                 {["About Us", "Wedding Website", "E-Invitations", "Pricing"].map((item, i) => (
                   <motion.div 
                    initial={{ opacity: 0, x: -20 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: i * 0.1 }}
                    key={item} 
                    className="text-3xl font-serif hover:text-teal-600 cursor-pointer"
                   >
                     {item}
                   </motion.div>
                 ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}