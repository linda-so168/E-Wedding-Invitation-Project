import React, { useState, useRef } from "react";
// Image imports remain the same
import pic1 from "../assets/invitattion_front_temp/pic1.jpg";
import pic2 from "../assets/invitattion_front_temp/pic2.png";
import pic3 from "../assets/invitattion_front_temp/pic3.webp";
import pic4 from "../assets/invitattion_front_temp/pic4.webp";
import pic5 from "../assets/invitattion_front_temp/pic5.webp";
import pic6 from "../assets/invitattion_front_temp/pic6.webp";
import pic7 from "../assets/invitattion_front_temp/pic7.webp";
import pic8 from "../assets/invitattion_front_temp/pic8.webp";
import pic9 from "../assets/invitattion_front_temp/pic9.webp";
import pic10 from "../assets/invitattion_front_temp/pic10.webp";
import pic11 from "../assets/invitattion_front_temp/pic11.webp";
import pic12 from "../assets/invitattion_front_temp/pic12.webp";
import pic13 from "../assets/invitattion_front_temp/pic13.webp";
import pic14 from "../assets/invitattion_front_temp/pic14.webp";
import pic15 from "../assets/invitattion_front_temp/pic15.webp";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, Calendar, Clock, Users, X, Check, Heart, 
  Palette, Music, Gift, Camera, Mail, Globe, Share2,
  Download, Printer, Eye, Type, Image as ImageIcon,
  Settings, UserPlus, QrCode, Video, Bell, Lock,
  ChevronLeft, ChevronRight, Upload, Trash2, Save
} from "lucide-react";

// Image array
const INVITE_IMAGES = [
  pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, 
  pic10, pic11, pic12, pic13, pic14, pic15
];

// Color themes for different wedding styles
const COLOR_THEMES = [
  { name: "Classic Ivory", primary: "#f5f5f5", accent: "#8B7355", text: "#333333" },
  { name: "Royal Blue", primary: "#1e3a8a", accent: "#fbbf24", text: "#ffffff" },
  { name: "Blush Pink", primary: "#fce7f3", accent: "#be185d", text: "#333333" },
  { name: "Emerald", primary: "#064e3b", accent: "#fef3c7", text: "#ffffff" },
  { name: "Modern Gray", primary: "#374151", accent: "#f59e0b", text: "#ffffff" },
  { name: "Vintage Gold", primary: "#78350f", accent: "#fef3c7", text: "#ffffff" },
];

// Font options
const FONT_OPTIONS = [
  { name: "Classic Serif", value: "'Times New Roman', serif" },
  { name: "Modern Sans", value: "'Helvetica Neue', sans-serif" },
  { name: "Elegant Script", value: "'Brush Script MT', cursive" },
  { name: "Clean Inter", value: "'Inter', sans-serif" },
  { name: "Romantic Playfair", value: "'Playfair Display', serif" },
];

// Dress code options
const DRESS_CODE_OPTIONS = [
  "Black Tie",
  "Formal Attire",
  "Semi-Formal",
  "Cocktail Attire",
  "Garden Party",
  "Beach Casual",
  "Cultural Traditional",
  "Smart Casual"
];

// Music options for digital invites
const MUSIC_OPTIONS = [
  { name: "Classical Romance", url: "classical-romance.mp3" },
  { name: "Modern Love", url: "modern-love.mp3" },
  { name: "Jazz Elegance", url: "jazz-elegance.mp3" },
  { name: "Acoustic Soft", url: "acoustic-soft.mp3" },
  { name: "Custom Upload", url: null }
];

/* --------------------------------------------- */
/* PHONE MOCKUP */
/* --------------------------------------------- */
const PhoneMockup = ({ children, isLandscape = false }) => (
  <div className={`relative ${isLandscape ? 'w-[500px] h-[300px]' : 'w-[240px] h-[490px]'} bg-black rounded-[40px] p-3 shadow-2xl border-[4px] border-gray-800`}>
    <div className="absolute z-20 w-24 h-6 -translate-x-1/2 bg-black top-4 left-1/2 rounded-b-3xl" />
    <div className="w-full h-full rounded-[32px] overflow-hidden bg-white">
      <div className="h-full overflow-y-auto scrollbar-none">{children}</div>
    </div>
  </div>
);

/* --------------------------------------------- */
/* ENHANCED TEMPLATE WITH ALL FEATURES */
/* --------------------------------------------- */
const EnhancedTemplate = ({ 
  settings, 
  displayImage, 
  isPreview = false,
  selectedMusic,
  onRSVPSubmit 
}) => {
  const [rsvpName, setRsvpName] = useState("");
  const [rsvpEmail, setRsvpEmail] = useState("");
  const [rsvpGuests, setRsvpGuests] = useState(1);
  const [rsvpAttending, setRsvpAttending] = useState(null);

  const handleRSVP = (e) => {
    e.preventDefault();
    if (onRSVPSubmit) {
      onRSVPSubmit({ name: rsvpName, email: rsvpEmail, guests: rsvpGuests, attending: rsvpAttending });
      alert("Thank you for your RSVP!");
      setRsvpName("");
      setRsvpEmail("");
      setRsvpGuests(1);
      setRsvpAttending(null);
    }
  };

  return (
    <div 
      className="flex flex-col h-[500px]"
      style={{ 
        backgroundColor: settings.backgroundColor || "#ffffff",
        fontFamily: settings.fontFamily || "'Helvetica Neue', sans-serif",
        color: settings.textColor || "#333333"
      }}
    >
      {/* HERO SECTION WITH BACKGROUND */}
      <div 
        className="relative w-full h-[100%]  sticky flex flex-col items-center justify-center bg-cover bg-center shrink-0"
        style={{ backgroundImage: `url(${displayImage})` }}
      >
        {/* Dynamic overlay based on settings */}
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: `rgba(0, 0, 0, ${settings.imageOverlay || 0.3})` }}
        />

        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {settings.enableAnimations && [...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                opacity: [0, 0.8, 0], 
                y: [0, -40],
                x: Math.sin(i) * 20
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                delay: i * 0.8,
                ease: "easeInOut"
              }}
              className="absolute"
              style={{ 
                top: `${30 + i * 10}%`, 
                left: `${15 + i * 20}%`,
                color: settings.accentColor || "#ffffff"
              }}
            >
              <Heart size={16} fill="currentColor" />
            </motion.div>
          ))}
        </div>

        {/* Couple Names with Dynamic Typography */}
        <div className="relative z-10 px-6 text-center">
          <h1 className="text-[9px] tracking-[4px] text-white/90 uppercase mb-4">
            {settings.invitationHeader || "You're Invited to Celebrate"}
          </h1>
          
          <div className="space-y-2">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-5xl leading-none"
              style={{ 
                fontFamily: settings.scriptFont || "'Brush Script MT', cursive",
                color: "white",
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
              }}
            >
              {settings.partner1}
            </motion.div>
            
            <div className="flex items-center justify-center gap-2 my-2 text-sm italic text-white/80">
              <div className="w-8 h-px bg-white/50"></div>
              {settings.weddingDate ? "on " + settings.weddingDate : "&"}
              <div className="w-8 h-px bg-white/50"></div>
            </div>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-5xl leading-none"
              style={{ 
                fontFamily: settings.scriptFont || "'Brush Script MT', cursive",
                color: "white",
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
              }}
            >
              {settings.partner2}
            </motion.div>
          </div>

          {/* Wedding Date Badge */}
          {settings.showDateBadge && (
            <div className="inline-block px-4 py-2 mt-6 rounded-full backdrop-blur-sm bg-white/20">
              <div className="text-xs font-bold">{settings.date}</div>
              <div className="text-[10px]">{settings.time}</div>
            </div>
          )}
        </div>

        {/* Music Indicator */}
        {selectedMusic && settings.enableMusic && (
          <div className="absolute z-10 bottom-4 right-4">
            <div className="flex items-center gap-2 bg-black/50 text-white px-3 py-1.5 rounded-full">
              <Music size={12} />
              <span className="text-[10px]">Music On</span>
            </div>
          </div>
        )}
      </div>

      {/* DETAILS SECTION */}
      <div className="flex-grow w-full p-5 space-y-4 -mt-8 relative z-20 rounded-t-[32px] shadow-lg"
           style={{ backgroundColor: `${settings.accentColor}08` || "#f8fafc" }}>
        
        {/* Navigation Dots */}
        <div className="flex justify-center gap-1 mb-2">
          {[1, 2, 3].map((dot) => (
            <div key={dot} className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
          ))}
        </div>

        {/* Event Details Cards */}
        <div className="space-y-3">
          {/* Date & Time */}
          <div className="p-4 border border-gray-100 shadow-sm bg-white/80 backdrop-blur-sm rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg" style={{ backgroundColor: `${settings.accentColor}15` }}>
                <Calendar size={16} style={{ color: settings.accentColor }} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-800">Date & Time</h3>
                <p className="text-[10px] text-gray-500">{settings.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Clock size={12} className="text-gray-400" />
              <span className="font-medium">{settings.time}</span>
            </div>
          </div>

          {/* Venue with Map Link */}
          <div className="p-4 border border-gray-100 shadow-sm bg-white/80 backdrop-blur-sm rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg" style={{ backgroundColor: `${settings.accentColor}15` }}>
                <MapPin size={16} style={{ color: settings.accentColor }} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-800">Venue</h3>
                <p className="text-[10px] text-gray-500">{settings.venueType || "Wedding Venue"}</p>
              </div>
            </div>
            <p className="mb-1 text-xs font-semibold">{settings.venueName}</p>
            <p className="text-[10px] text-gray-600 leading-tight mb-3">{settings.location}</p>
            {settings.mapLink && (
              <a href={settings.mapLink} target="_blank" rel="noopener noreferrer" 
                 className="text-[10px] text-blue-600 flex items-center gap-1">
                <Globe size={10} /> View on Map
              </a>
            )}
          </div>

          {/* Additional Events */}
          {settings.events && settings.events.length > 0 && (
            <div className="p-4 border border-gray-100 shadow-sm bg-white/80 backdrop-blur-sm rounded-xl">
              <h3 className="mb-3 text-sm font-bold text-gray-800">Schedule</h3>
              <div className="space-y-2">
                {settings.events.slice(0, 3).map((event, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs">
                    <span>{event.name}</span>
                    <span className="font-medium">{event.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Dress Code & Gifts */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 border border-gray-100 shadow-sm bg-white/80 backdrop-blur-sm rounded-xl">
              <div className="flex items-center gap-2 mb-1">
                <Users size={12} className="text-gray-400" />
                <span className="text-[10px] font-bold text-gray-800">Dress Code</span>
              </div>
              <p className="text-[10px] font-medium" style={{ color: settings.accentColor }}>
                {settings.dressCode}
              </p>
            </div>
            
            {settings.giftRegistry && (
              <div className="p-3 border border-gray-100 shadow-sm bg-white/80 backdrop-blur-sm rounded-xl">
                <div className="flex items-center gap-2 mb-1">
                  <Gift size={12} className="text-gray-400" />
                  <span className="text-[10px] font-bold text-gray-800">Gifts</span>
                </div>
                <a href={settings.giftRegistry} className="text-[10px] text-blue-600 underline">
                  Registry
                </a>
              </div>
            )}
          </div>

          {/* Love Story (Optional) */}
          {settings.showLoveStory && (
            <div className="p-4 border border-gray-100 shadow-sm bg-white/80 backdrop-blur-sm rounded-xl">
              <h3 className="mb-2 text-sm font-bold text-gray-800">Our Story</h3>
              <p className="text-[10px] text-gray-600 leading-relaxed">
                {settings.loveStory || "We met in 2018 and knew instantly we were meant to be..."}
              </p>
            </div>
          )}

          {/* Photo Gallery */}
          {settings.gallery && settings.gallery.length > 0 && (
            <div className="p-4 border border-gray-100 shadow-sm bg-white/80 backdrop-blur-sm rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-gray-800">Gallery</h3>
                <Camera size={12} className="text-gray-400" />
              </div>
              <div className="grid grid-cols-3 gap-1">
                {settings.gallery.slice(0, 3).map((img, idx) => (
                  <div key={idx} className="overflow-hidden bg-gray-200 rounded-lg aspect-square">
                    {/* Image would go here */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* RSVP Section */}
          {!isPreview && (
            <div className="p-4 mt-4 border border-gray-100 shadow-sm bg-white/90 backdrop-blur-sm rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <Mail size={14} className="text-gray-400" />
                <h3 className="text-sm font-bold text-gray-800">RSVP</h3>
                <span className="text-[10px] text-gray-500 ml-auto">
                  By {settings.rsvpDate}
                </span>
              </div>
              
              <form onSubmit={handleRSVP} className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={rsvpName}
                  onChange={(e) => setRsvpName(e.target.value)}
                  className="w-full p-2 text-xs border rounded-lg"
                  required
                />
                
                <input
                  type="email"
                  placeholder="Email Address"
                  value={rsvpEmail}
                  onChange={(e) => setRsvpEmail(e.target.value)}
                  className="w-full p-2 text-xs border rounded-lg"
                  required
                />
                
                <div className="flex items-center gap-2 text-xs">
                  <span>Number of Guests:</span>
                  <select 
                    value={rsvpGuests}
                    onChange={(e) => setRsvpGuests(parseInt(e.target.value))}
                    className="px-2 py-1 border rounded"
                  >
                    {[1,2,3,4,5].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setRsvpAttending(true)}
                    className={`flex-1 py-2 text-xs rounded-lg transition ${rsvpAttending === true ? 'bg-green-500 text-white' : 'bg-gray-100'}`}
                  >
                    Will Attend
                  </button>
                  <button
                    type="button"
                    onClick={() => setRsvpAttending(false)}
                    className={`flex-1 py-2 text-xs rounded-lg transition ${rsvpAttending === false ? 'bg-red-500 text-white' : 'bg-gray-100'}`}
                  >
                    Can't Attend
                  </button>
                </div>
                
                <button
                  type="submit"
                  disabled={rsvpAttending === null}
                  className="w-full py-2 text-xs font-bold transition rounded-lg disabled:opacity-50"
                  style={{ 
                    backgroundColor: settings.accentColor,
                    color: 'white'
                  }}
                >
                  Submit RSVP
                </button>
              </form>
            </div>
          )}

          {/* Share & Save Buttons */}
          <div className="flex gap-2 pt-2">
            <button className="flex items-center justify-center flex-1 gap-2 py-2 text-xs bg-gray-100 rounded-lg">
              <Share2 size={12} /> Share
            </button>
            <button className="flex items-center justify-center flex-1 gap-2 py-2 text-xs bg-gray-100 rounded-lg">
              <Download size={12} /> Save
            </button>
          </div>

          {/* Watermark */}
          <div className="pt-2 text-center">
            <p className="text-[8px] text-gray-400">
              Created with ❤️ using E-Wedding Invitations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* --------------------------------------------- */
/* MAIN COMPONENT */
/* --------------------------------------------- */
export default function ProfessionalDigitalInvitations() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [activeTab, setActiveTab] = useState('details');
  const [settings, setSettings] = useState({
    // Basic Info
    partner1: "Marigold",
    partner2: "Keith",
    date: "September 11, 2025",
    time: "2:00 PM Ceremony",
    venueName: "Saint Michael Church",
    location: "London, UK",
    venueType: "Historic Church",
    
    // Design
    accentColor: "#1e40af",
    backgroundColor: "#ffffff",
    textColor: "#333333",
    fontFamily: "'Helvetica Neue', sans-serif",
    scriptFont: "'Brush Script MT', cursive",
    
    // Content
    invitationHeader: "You're Invited to Celebrate",
    dressCode: "Formal Attire (Black Tie)",
    rsvpDate: "August 25, 2025",
    
    // Features
    enableMusic: true,
    enableAnimations: true,
    showDateBadge: true,
    showLoveStory: true,
    imageOverlay: 0.3,
    
    // Additional
    giftRegistry: "https://example.com/registry",
    mapLink: "https://maps.google.com",
    weddingWebsite: "https://marigold-keith.com",
    hashtag: "#MarigoldKeith2025",
    
    // Events
    events: [
      { name: "Ceremony", time: "2:00 PM" },
      { name: "Cocktail Hour", time: "3:30 PM" },
      { name: "Reception", time: "5:00 PM" },
      { name: "Dinner", time: "6:30 PM" }
    ],
    
    // Gallery (would be actual images in production)
    gallery: Array(6).fill(null),
    
    // Love Story
    loveStory: "We met on a rainy autumn day in Paris. Keith spilled his coffee on Marigold's manuscript, and as they cleaned the pages together, they discovered a shared love for literature and old bookstores. Five years later, here we are, writing our own story..."
  });

  const [selectedMusic, setSelectedMusic] = useState(MUSIC_OPTIONS[0]);
  const [customImages, setCustomImages] = useState([]);
  const [previewMode, setPreviewMode] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setCustomImages(prev => [...prev, ...newImages]);
  };

  const handleSaveInvitation = () => {
    // In production, this would save to backend
    alert("Invitation saved! You can share it with your guests.");
    setSelectedCardIndex(null);
  };

  const handleExport = (format) => {
    alert(`Exporting invitation as ${format.toUpperCase()}...`);
    // Implementation for PDF/Image generation would go here
  };

  const handleRSVPSubmit = (data) => {
    console.log("RSVP Received:", data);
    // Send to backend in production
  };

  const updateSettings = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const applyTheme = (theme) => {
    setSettings(prev => ({
      ...prev,
      accentColor: theme.accent,
      backgroundColor: theme.primary,
      textColor: theme.text
    }));
  };

  return (
    <div className="min-h-screen mt-[100px] p-4 font-sans bg-gradient-to-br from-gray-50 to-gray-100 md:p-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="mb-3 font-serif text-4xl font-bold text-red-950 md:text-5xl">
            Design Your Perfect Wedding Invitation
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Create stunning, interactive digital invitations with our professional designer.
            Customize every detail to match your wedding vision.
          </p>
        </header>

        {/* Template Gallery */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-red-900">Choose a Template</h2>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2 text-sm bg-white border rounded-lg">
                <Eye size={14} /> Preview All
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {INVITE_IMAGES.map((imgSrc, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedCardIndex(index)}
                className="cursor-pointer group"
              >
                <div className="p-4 transition-all bg-white border-2 border-transparent shadow-lg rounded-3xl group-hover:border-blue-400">
                  <PhoneMockup>
                    <EnhancedTemplate 
                      settings={settings} 
                      displayImage={imgSrc}
                      isPreview={true}
                    />
                  </PhoneMockup>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-medium text-gray-700">Style {index + 1}</span>
                  <button className="text-xs font-semibold text-blue-600">Customize →</button>
                </div>
              </motion.div>
            ))}
            
            {/* Upload Custom Template */}
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="flex flex-col items-center justify-center p-8 transition-colors border-2 border-gray-300 border-dashed cursor-pointer group rounded-3xl hover:border-blue-400"
            >
              <Upload size={32} className="mb-3 text-gray-400" />
              <h3 className="mb-1 font-bold text-gray-700">Upload Your Own</h3>
              <p className="text-sm text-center text-gray-500">Use your own background image</p>
              <input 
                type="file" 
                ref={fileInputRef}
                className="hidden" 
                accept="image/*"
                multiple
                onChange={handleImageUpload}
              />
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="p-6 mb-12 bg-white shadow-sm rounded-2xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-sm text-gray-600">Templates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-sm text-gray-600">Customizable</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">∞</div>
              <div className="text-sm text-gray-600">Edits</div>
            </div>
          </div>
        </div>
      </div>

      {/* FULL-SCREEN EDITOR MODAL */}
      <AnimatePresence>
        {selectedCardIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-50 flex items-center justify-center p-1 bg-black/90 backdrop-blur-md h-[600px]"
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }}
              className="bg-white rounded-3xl w-full max-w-7xl h-[640px] overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Editor Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setSelectedCardIndex(null)}
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <div>
                    <h2 className="text-2xl font-bold">Invitation Designer</h2>
                    <p className="text-sm text-gray-500">Editing: Style {selectedCardIndex + 1}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setPreviewMode(!previewMode)}
                    className="flex items-center gap-2 px-4 py-2 border rounded-lg"
                  >
                    <Eye size={16} />
                    {previewMode ? "Edit Mode" : "Preview Mode"}
                  </button>
                  <button 
                    onClick={handleSaveInvitation}
                    className="flex items-center gap-2 px-6 py-2 font-semibold text-white bg-blue-600 rounded-lg"
                  >
                    <Save size={16} /> Save & Share
                  </button>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex flex-1 overflow-hidden">
                {/* Left Sidebar - Editor Controls */}
                {!previewMode && (
                  <div className="overflow-y-auto border-r w-80">
                    <div className="p-6">
                      {/* Tabs */}
                      <div className="flex mb-6 border-b">
                        {['details', 'design', 'features', 'advanced'].map(tab => (
                          <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 py-3 text-sm font-medium capitalize ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                          >
                            {tab}
                          </button>
                        ))}
                      </div>

                      {/* Tab Content */}
                      <div className="space-y-6">
                        {activeTab === 'details' && (
                          <>
                            <Section title="Couple Information">
                              <Input label="Partner 1 Name" value={settings.partner1} onChange={v => updateSettings('partner1', v)} />
                              <Input label="Partner 2 Name" value={settings.partner2} onChange={v => updateSettings('partner2', v)} />
                              <Input label="Invitation Header" value={settings.invitationHeader} onChange={v => updateSettings('invitationHeader', v)} />
                            </Section>

                            <Section title="Event Details">
                              <Input label="Date" type="date" value={settings.date} onChange={v => updateSettings('date', v)} />
                              <Input label="Time" value={settings.time} onChange={v => updateSettings('time', v)} />
                              <Input label="Venue Name" value={settings.venueName} onChange={v => updateSettings('venueName', v)} />
                              <Input label="Venue Type" value={settings.venueType} onChange={v => updateSettings('venueType', v)} />
                              <Input label="Location" value={settings.location} onChange={v => updateSettings('location', v)} />
                              <Input label="Map Link" value={settings.mapLink} onChange={v => updateSettings('mapLink', v)} />
                            </Section>

                            <Section title="Additional Events">
                              {settings.events.map((event, idx) => (
                                <div key={idx} className="flex gap-2 mb-2">
                                  <input 
                                    type="text" 
                                    placeholder="Event name"
                                    value={event.name}
                                    onChange={e => {
                                      const newEvents = [...settings.events];
                                      newEvents[idx].name = e.target.value;
                                      updateSettings('events', newEvents);
                                    }}
                                    className="flex-1 p-2 text-sm border rounded"
                                  />
                                  <input 
                                    type="text" 
                                    placeholder="Time"
                                    value={event.time}
                                    onChange={e => {
                                      const newEvents = [...settings.events];
                                      newEvents[idx].time = e.target.value;
                                      updateSettings('events', newEvents);
                                    }}
                                    className="w-24 p-2 text-sm border rounded"
                                  />
                                </div>
                              ))}
                              <button 
                                onClick={() => updateSettings('events', [...settings.events, { name: '', time: '' }])}
                                className="text-sm text-blue-600"
                              >
                                + Add Event
                              </button>
                            </Section>
                          </>
                        )}

                        {activeTab === 'design' && (
                          <>
                            <Section title="Color Theme">
                              <div className="grid grid-cols-3 gap-2">
                                {COLOR_THEMES.map(theme => (
                                  <button
                                    key={theme.name}
                                    onClick={() => applyTheme(theme)}
                                    className="p-3 border rounded-lg"
                                    style={{ backgroundColor: theme.primary }}
                                    title={theme.name}
                                  >
                                    <div className="w-full h-2 rounded" style={{ backgroundColor: theme.accent }}></div>
                                  </button>
                                ))}
                              </div>
                            </Section>

                            <Section title="Colors">
                              <ColorPicker label="Accent Color" value={settings.accentColor} onChange={v => updateSettings('accentColor', v)} />
                              <ColorPicker label="Background" value={settings.backgroundColor} onChange={v => updateSettings('backgroundColor', v)} />
                              <ColorPicker label="Text Color" value={settings.textColor} onChange={v => updateSettings('textColor', v)} />
                              
                              <div className="mt-4">
                                <label className="block mb-1 text-xs font-medium text-gray-600">Image Overlay</label>
                                <input 
                                  type="range" 
                                  min="0" 
                                  max="0.8" 
                                  step="0.1"
                                  value={settings.imageOverlay}
                                  onChange={e => updateSettings('imageOverlay', parseFloat(e.target.value))}
                                  className="w-full"
                                />
                                <div className="text-[10px] text-gray-500 mt-1">
                                  Opacity: {Math.round(settings.imageOverlay * 100)}%
                                </div>
                              </div>
                            </Section>

                            <Section title="Typography">
                              <div className="space-y-3">
                                <div>
                                  <label className="block mb-1 text-xs font-medium text-gray-600">Main Font</label>
                                  <select 
                                    value={settings.fontFamily}
                                    onChange={e => updateSettings('fontFamily', e.target.value)}
                                    className="w-full p-2 text-sm border rounded"
                                  >
                                    {FONT_OPTIONS.map(font => (
                                      <option key={font.name} value={font.value} style={{ fontFamily: font.value }}>
                                        {font.name}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                                
                                <div>
                                  <label className="block mb-1 text-xs font-medium text-gray-600">Script Font</label>
                                  <select 
                                    value={settings.scriptFont}
                                    onChange={e => updateSettings('scriptFont', e.target.value)}
                                    className="w-full p-2 text-sm border rounded"
                                  >
                                    <option value="'Brush Script MT', cursive">Brush Script</option>
                                    <option value="'Dancing Script', cursive">Dancing Script</option>
                                    <option value="'Great Vibes', cursive">Great Vibes</option>
                                  </select>
                                </div>
                              </div>
                            </Section>
                          </>
                        )}

                        {activeTab === 'features' && (
                          <>
                            <Section title="Interactive Features">
                              <Toggle label="Background Music" checked={settings.enableMusic} onChange={v => updateSettings('enableMusic', v)} />
                              <Toggle label="Animations" checked={settings.enableAnimations} onChange={v => updateSettings('enableAnimations', v)} />
                              <Toggle label="Date Badge" checked={settings.showDateBadge} onChange={v => updateSettings('showDateBadge', v)} />
                              <Toggle label="Love Story" checked={settings.showLoveStory} onChange={v => updateSettings('showLoveStory', v)} />
                            </Section>

                            <Section title="Music">
                              <label className="block mb-2 text-xs font-medium text-gray-600">Select Background Music</label>
                              <div className="space-y-2">
                                {MUSIC_OPTIONS.map(music => (
                                  <div 
                                    key={music.name}
                                    onClick={() => setSelectedMusic(music)}
                                    className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer ${selectedMusic.name === music.name ? 'border-blue-500 bg-blue-50' : ''}`}
                                  >
                                    <Music size={14} />
                                    <span className="flex-1 text-sm">{music.name}</span>
                                    {selectedMusic.name === music.name && <Check size={14} className="text-blue-500" />}
                                  </div>
                                ))}
                              </div>
                            </Section>

                            <Section title="Dress Code">
                              <select 
                                value={settings.dressCode}
                                onChange={e => updateSettings('dressCode', e.target.value)}
                                className="w-full p-2 text-sm border rounded"
                              >
                                {DRESS_CODE_OPTIONS.map(code => (
                                  <option key={code} value={code}>{code}</option>
                                ))}
                              </select>
                            </Section>

                            <Section title="RSVP Settings">
                              <Input label="RSVP Deadline" type="date" value={settings.rsvpDate} onChange={v => updateSettings('rsvpDate', v)} />
                              <Input label="Wedding Website" value={settings.weddingWebsite} onChange={v => updateSettings('weddingWebsite', v)} />
                              <Input label="Wedding Hashtag" value={settings.hashtag} onChange={v => updateSettings('hashtag', v)} />
                            </Section>
                          </>
                        )}

                        {activeTab === 'advanced' && (
                          <>
                            <Section title="Gift Registry">
                              <Input label="Registry URL" value={settings.giftRegistry} onChange={v => updateSettings('giftRegistry', v)} />
                            </Section>

                            <Section title="Love Story">
                              <textarea 
                                value={settings.loveStory}
                                onChange={e => updateSettings('loveStory', e.target.value)}
                                className="w-full h-32 p-3 text-sm border rounded"
                                placeholder="Share your love story..."
                              />
                            </Section>

                            <Section title="Custom Images">
                              <div className="grid grid-cols-3 gap-2">
                                {customImages.slice(0, 6).map((img, idx) => (
                                  <div key={idx} className="relative overflow-hidden bg-gray-200 rounded-lg aspect-square">
                                    <img src={img} alt="" className="object-cover w-full h-full" />
                                    <button 
                                      onClick={() => setCustomImages(prev => prev.filter((_, i) => i !== idx))}
                                      className="absolute p-1 text-white bg-red-500 rounded-full top-1 right-1"
                                    >
                                      <Trash2 size={10} />
                                    </button>
                                  </div>
                                ))}
                              </div>
                              <button 
                                onClick={() => fileInputRef.current?.click()}
                                className="w-full py-2 mt-3 text-sm text-gray-500 border-2 border-dashed rounded-lg"
                              >
                                + Upload Images
                              </button>
                            </Section>

                            <Section title="Export Options">
                              <div className="grid grid-cols-2 gap-2">
                                <button onClick={() => handleExport('pdf')} className="p-3 text-sm border rounded-lg hover:bg-gray-50">
                                  <Download size={14} className="mx-auto mb-1" />
                                  PDF
                                </button>
                                <button onClick={() => handleExport('image')} className="p-3 text-sm border rounded-lg hover:bg-gray-50">
                                  <ImageIcon size={14} className="mx-auto mb-1" />
                                  Image
                                </button>
                                <button onClick={() => handleExport('qr')} className="col-span-2 p-3 text-sm border rounded-lg hover:bg-gray-50">
                                  <QrCode size={14} className="mx-auto mb-1" />
                                  Generate QR Code
                                </button>
                              </div>
                            </Section>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Center - Preview */}
                <div className="flex items-center justify-center flex-1 p-8 bg-gray-50">
                  <div className="scale-[1.1]">
                    <PhoneMockup>
                      <EnhancedTemplate 
                        settings={settings} 
                        displayImage={INVITE_IMAGES[selectedCardIndex]}
                        selectedMusic={selectedMusic}
                        onRSVPSubmit={handleRSVPSubmit}
                        isPreview={previewMode}
                      />
                    </PhoneMockup>
                    
                    
                  </div>
                </div>

              
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* --------------------------------------------- */
/* REUSABLE COMPONENTS */
/* --------------------------------------------- */
const Section = ({ title, children }) => (
  <div className="mb-6 last:mb-0">
    {title && <h3 className="mb-3 text-sm font-bold text-gray-800">{title}</h3>}
    <div className="space-y-3">{children}</div>
  </div>
);

const Input = ({ label, value, onChange, type = "text" }) => (
  <div>
    <label className="block mb-1 text-xs font-medium text-gray-600">{label}</label>
    <input 
      type={type} 
      className="w-full p-2 text-sm transition border rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      value={value} 
      onChange={e => onChange(e.target.value)} 
    />
  </div>
);

const ColorPicker = ({ label, value, onChange }) => (
  <div>
    <label className="block mb-1 text-xs font-medium text-gray-600">{label}</label>
    <div className="flex items-center gap-3">
      <input 
        type="color" 
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-10 h-10 p-1 border rounded-lg cursor-pointer"
      />
      <input 
        type="text" 
        value={value}
        onChange={e => onChange(e.target.value)}
        className="flex-1 p-2 font-mono text-sm border rounded-lg"
      />
    </div>
  </div>
);

const Toggle = ({ label, checked, onChange }) => (
  <div className="flex items-center justify-between">
    <span className="text-sm text-gray-700">{label}</span>
    <button
      onClick={() => onChange(!checked)}
      className={`w-12 h-6 rounded-full transition ${checked ? 'bg-blue-500' : 'bg-gray-300'}`}
    >
      <div className={`w-5 h-5 rounded-full bg-white transform transition ${checked ? 'translate-x-7' : 'translate-x-1'}`} />
    </button>
  </div>
);