import React from 'react';

const PhoneMockup = ({ children }) => (
  <div className="relative w-[280px] h-[560px] bg-gray-900 rounded-[40px] p-3 shadow-2xl border-2 border-gray-800">
    {/* Notch */}
    <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-3xl z-10" />
    {/* Screen */}
    <div className="w-full h-full rounded-[32px] overflow-hidden">
      {children}
    </div>
  </div>
);

const SaveTheDate = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center p-8 bg-white text-center overflow-y-auto">
    {/* Top left floral */}
    <div className="absolute top-5 left-2 w-32 h-32 rounded-full opacity-70 bg-gradient-to-br from-yellow-300 via-blue-300 to-transparent" />
    
    {/* Bottom right floral */}
    <div className="absolute bottom-5 right-2 w-32 h-32 rounded-full opacity-70 bg-gradient-to-tl from-yellow-300 via-blue-300 to-transparent" />
    
    <div className="flex justify-center">
  {/* Phone frame */}
  <div className="w-[380px] rounded-xl overflow-hidden shadow-lg relative">

    {/* Background section */}
    <div
      className="h-64 w-full bg-cover bg-center"
      style={{ backgroundImage: "url('src/assets/invitattion_front/b5.jpg')" }}
    >
      {/* Optional overlay content */}
    </div>

    <div className="text-center p-4">
      <h1 className="text-xs tracking-[3px] text-blue-500 mb-4 font-serif uppercase">
        SAVE the DATE
      </h1>

      <div className="text-4xl my-3" style={{ fontFamily: 'Brush Script MT, cursive' }}>
        Marigold
      </div>

      <div className="text-base italic text-gray-600 my-2">and</div>

      <div className="text-4xl my-3" style={{ fontFamily: 'Brush Script MT, cursive' }}>
        Keith
      </div>

      <div className="text-[11px] text-gray-600 mt-5 leading-relaxed font-serif">
        SEPTEMBER 11 2023<br />
        Saint Michael Church<br />
        London, UK<br />
        Formal Attire to Follow
      </div>
    </div>

  </div>
</div>

  </div>
);

const WeddingInvitation = () => (
  <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#fdfbf9] text-center overflow-y-auto">
    {/* Floral Wreath */}
    <div className="w-48 h-48 rounded-full flex flex-col items-center justify-center p-8 my-5 relative">
      <div className="absolute inset-0 rounded-full border-[3px] border-transparent bg-gradient-to-br from-pink-300 via-yellow-300 via-pink-400 to-orange-300 opacity-80" 
           style={{ 
             backgroundOrigin: 'border-box',
             backgroundClip: 'border-box',
           }} />
      <div className="absolute inset-[3px] bg-[#fdfbf9] rounded-full" />
      <div className="relative z-10 text-[#d4a574] text-base tracking-[3px] leading-loose font-serif">
        <div>AMANDA</div>
        <div>SMITH</div>
        <div className="my-1">~&~</div>
        <div>SIMON</div>
        <div>WALKER</div>
      </div>
    </div>
    
    <div className="text-[10px] text-gray-500 my-4 leading-relaxed font-serif">
      together with their families<br />
      invite you to celebrate their wedding day
    </div>
    
    <div className="text-[9px] text-gray-600 leading-relaxed mt-3 font-serif">
      SATURDAY, SEPTEMBER 11 2024 | 6 pm<br />
      Red Rock University Wedding and Event<br />
      4315 Baumman Rd, Red Rock, TX
    </div>
    
    <div className="text-[9px] text-gray-500 italic mt-4 font-serif">
      reception to follow
    </div>
  </div>
);

const BridalShower = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center p-8 bg-[#fef9f8] text-center overflow-y-auto">
    {/* Top floral */}
    <div className="absolute top-3 right-5 w-28 h-14 rounded-full opacity-60 bg-gradient-to-br from-pink-300 via-pink-200 to-transparent" />
    
    {/* Bottom floral */}
    <div className="absolute bottom-3 left-5 w-28 h-14 rounded-full opacity-60 bg-gradient-to-tl from-pink-300 via-pink-200 to-transparent" />
    
    <div className="z-10">
      <div className="text-[10px] text-gray-500 italic mb-3 font-serif">Please join us for a</div>
      <h2 className="text-[42px] my-2 text-[#d4a574]" style={{ fontFamily: 'Brush Script MT, cursive' }}>bridal</h2>
      <div className="text-lg tracking-[4px] text-[#d4a574] mb-4 font-serif">SHOWER</div>
      
      <div className="text-[10px] text-gray-500 italic my-2 font-serif">honoring</div>
      <div className="text-sm tracking-[2px] text-gray-800 mb-4 font-serif">ISABELLA MILLER</div>
      
      <div className="text-[9px] text-gray-600 leading-relaxed font-serif">
        Saturday, April 9 2022 | 2PM<br />
        Earthworks House<br />
        57 Charles Street, Mayfair London<br />
        Greater London W1J 5EL
      </div>
      
      <div className="text-[8px] text-gray-500 mt-4 leading-relaxed font-serif">
        RSVP to Amy at 123 456 789<br />
        by August 5th
      </div>
      
      <div className="text-[8px] text-gray-500 italic mt-3 font-serif">
        Isabella is registered at<br />
        Crate and Barrel
      </div>
    </div>
  </div>
);

const InvitationCard = ({ children, label }) => (
  <div className="bg-white rounded-2xl p-10 shadow-2xl flex flex-col items-center transition-all duration-300 hover:-translate-y-3 hover:shadow-3xl">
    {children}
    <button className="mt-8 px-10 py-4 border-2 border-gray-600 text-sm tracking-[2px] text-gray-600 uppercase bg-white transition-all duration-300 hover:bg-gray-600 hover:text-white cursor-pointer font-serif">
      {label}
    </button>
  </div>
);

export default function DigitalInvitations() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 flex items-center justify-center p-10">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <InvitationCard label="DIGITAL SAVE THE DATES">
            <PhoneMockup>
              <SaveTheDate />
            </PhoneMockup>
          </InvitationCard>
          
          <InvitationCard label="DIGITAL WEDDING INVITATIONS">
            <PhoneMockup>
              <WeddingInvitation />
            </PhoneMockup>
          </InvitationCard>
          
          <InvitationCard label="DIGITAL BRIDAL SHOWER INVITES">
            <PhoneMockup>
              <BridalShower />
            </PhoneMockup>
          </InvitationCard>
        </div>
      </div>
    </div>
  );
}