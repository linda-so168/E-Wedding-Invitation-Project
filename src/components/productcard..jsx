import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";

const FONTS = [
  { name: "Elegant", family: "'Playfair Display', serif" },
  { name: "Script", family: "'Dancing Script', cursive" },
  { name: "Calligraphy", family: "'Great Vibes', cursive" },
  { name: "Classic", family: "'Alex Brush', cursive" },
  { name: "Minimal", family: "'Sacramento', cursive" },
];

export default function WeddingProductPage() {
  // 1. STATE MANAGEMENT
  const [coupleNames, setCoupleNames] = useState("Julian & Sophia");
  const [guestName, setGuestName] = useState("");
  const [bgImage, setBgImage] = useState(null);
  const [selectedFont, setSelectedFont] = useState(FONTS[1].family);
  const [textColor, setTextColor] = useState("#b38b00"); // Default Gold

  const inviteRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setBgImage(URL.createObjectURL(file));
  };

  const handleDownload = async () => {
    if (inviteRef.current) {
      const canvas = await html2canvas(inviteRef.current, { scale: 2, useCORS: true });
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = `Wedding-Invite.png`;
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-gray-800 p-4 lg:p-10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        
        {/* LEFT: PHONE PREVIEW */}
        <div className="flex justify-center h-fit lg:sticky lg:top-10">
          <div className="relative bg-black rounded-[50px] p-3 shadow-2xl border-[6px] border-gray-800 w-[320px] h-[640px]">
            {/* Notch */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-30"></div>
            
            {/* IMPORTANT: OVERFLOW HIDDEN FIXED HERE */}
            <div className="w-full h-full bg-white rounded-[38px] overflow-hidden relative border-4 border-white">
              
              <div ref={inviteRef} className="w-full h-full flex items-center justify-center relative p-6 bg-white overflow-hidden">
                
                {/* Background Photo */}
                {bgImage && (
                  <img src={bgImage} className="absolute inset-0 w-full h-full object-cover opacity-70" alt="bg" />
                )}

                {/* Invite Content */}
                <div className="relative z-10 w-full h-full border-2 border-[#d4af37] flex flex-col items-center justify-center text-center p-4 bg-white/40 backdrop-blur-[2px]">
                  <div className="border border-[#d4af37] w-full h-full flex flex-col items-center justify-center p-2">
                    <p className="text-[9px] tracking-[0.2em] uppercase mb-4 font-sans text-gray-600">The Wedding Invitation</p>
                    
                    {/* COUPLE NAMES (USER INPUT 1) */}
                    <h2 
                      className="text-2xl font-serif mb-2" 
                      style={{ color: textColor }}
                    >
                      {coupleNames || "Julian & Sophia"}
                    </h2>
                    
                    <div className="my-6">
                      <p className="text-[10px] italic text-gray-500 mb-1">Honored Guest</p>
                      {/* GUEST NAME (USER INPUT 2) */}
                      <h1 
                        className="text-3xl text-gray-900 px-2 leading-tight"
                        style={{ fontFamily: selectedFont }}
                      >
                        {guestName || "Your Guest Name"}
                      </h1>
                    </div>

                    <p className="text-[10px] font-bold" style={{ color: textColor }}>08.24.2025</p>
                    <p className="text-[8px] uppercase mt-1 tracking-widest text-gray-500">Grand Palace • NYC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: CUSTOMIZATION PANEL */}
        <div className="flex flex-col gap-6">
          <header className="mb-4">
            <h1 className="text-3xl font-serif font-bold">Design Your Wedding Invite</h1>
            <p className="text-gray-500">Personalize every detail of your special day.</p>
          </header>

          {/* 1. Couple Names Input */}
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <label className="text-xs font-bold uppercase text-gray-400">1. Couple Names (e.g. Julian & Sophia)</label>
            <input 
              type="text" 
              value={coupleNames}
              onChange={(e) => setCoupleNames(e.target.value)}
              placeholder="Enter Bride & Groom names"
              className="w-full mt-2 border-b border-gray-300 py-2 text-lg outline-none focus:border-[#d4af37]"
            />
          </div>

          {/* 2. Guest Name Input */}
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <label className="text-xs font-bold uppercase text-gray-400">2. Guest Preview Name</label>
            <input 
              type="text" 
              maxLength={25}
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Enter guest name"
              className="w-full mt-2 border-b border-gray-300 py-2 text-lg outline-none focus:border-[#d4af37]"
            />
          </div>

          {/* 3. Font Style */}
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <label className="text-xs font-bold uppercase text-gray-400">3. Typography Style</label>
            <div className="flex flex-wrap gap-2 mt-3">
              {FONTS.map((font) => (
                <button
                  key={font.name}
                  onClick={() => setSelectedFont(font.family)}
                  className={`px-3 py-1.5 rounded-full text-xs border transition ${
                    selectedFont === font.family 
                    ? "bg-gray-900 text-white border-gray-900" 
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-900"
                  }`}
                  style={{ fontFamily: font.family }}
                >
                  {font.name}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Background & Color */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <label className="text-xs font-bold uppercase text-gray-400 block mb-3">4. Background</label>
              <button 
                onClick={() => fileInputRef.current.click()}
                className="w-full bg-gray-100 py-2 rounded text-sm hover:bg-gray-200"
              >
                {bgImage ? "Update" : "Upload"}
              </button>
              <input type="file" ref={fileInputRef} onChange={handleImageChange} className="hidden" accept="image/*" />
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm text-center">
              <label className="text-xs font-bold uppercase text-gray-400 block mb-3">5. Accent Color</label>
              <input 
                type="color" 
                value={textColor} 
                onChange={(e) => setTextColor(e.target.value)}
                className="w-full h-8 cursor-pointer border-none bg-transparent"
              />
            </div>
          </div>

          {/* DOWNLOAD */}
          <button 
            onClick={handleDownload}
            className="w-full bg-[#d4af37] text-white py-4 rounded-xl font-bold text-lg hover:brightness-110 shadow-lg active:scale-95 transition-all"
          >
            Generate & Download Invite
          </button>
        </div>
      </div>
    </div>
  );
}