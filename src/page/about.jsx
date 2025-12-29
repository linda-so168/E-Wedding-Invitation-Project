import React from 'react';
const Linda = "/assets/lindapic.jpg";
const Devid = "/assets/Devidpic.png";
const Com = "/assets/c2.png";
const Com2 = "/assets/c3.png";

const Card = ({ number, little, title, description, image, isDevid }) => {
  return (
    <div className="group relative w-[300px] h-[350px] bg-red-950 rounded-[15px] shadow-[0_15px_60px_rgba(0,0,0,0.5)] mx-auto overflow-hidden cursor-pointer">
      <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center z-0">
        <h2 className="text-2xl font-bold mb-2 text-white uppercase tracking-tight">
          {title}
        </h2>
        <p className="text-xs leading-relaxed text-gray-300">
          {description}
        </p>
      </div>

      <div 
        /* Added bg-white and conditional object-contain for Devid */
        className={`absolute bottom-0 left-0 w-full h-full bg-center transition-all duration-500 rounded-[15px] z-10 group-hover:h-0 ${isDevid ? 'bg-white' : 'bg-cover'}`}
        style={!isDevid ? { backgroundImage: `url(${image})` } : {}}
      >
        {isDevid && (
          <img src={image} alt={title} className="w-full h-full object-contain p-4 mt-[40px]" />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 via-transparent to-transparent flex flex-col justify-end items-center pb-10">
          <div className="transition-all duration-300 group-hover:opacity-0 group-hover:scale-0 flex flex-col items-center">
            <h2 className="px-4 text-center text-xl font-bold text-white uppercase tracking-wide drop-shadow-lg">
              {number}
            </h2>
            <p className="text-sm text-amber-500 font-medium tracking-widest uppercase">
              {little}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardContainer = () => {
  const cards = [
    {
      number: "CHEAB SOLINDA",
      little: "Team Lead",
      title: "Team Lead",
      description: "A Second Year Computer Science Student At RUPP and Frontend Student At ETEC CENTER.",
      image: Linda,
      isDevid: false,
    },
    {
      number: "PREAB DEVID",
      little: "Coordinator",
      title: "Coordinator",
      description: "A Second Year Computer Science Student At RUPP and Frontend Student At ETEC CENTER.",
      image: Devid,
      isDevid: true, // Marker to trigger white background logic
      className: "w-[300px] h-[300px] object-contain p-4",
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-b from-[#140606] to-[#2c0606] py-20 px-4 space-y-16">
      
      {/* About Us Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-[10px] mb-4 mt-[40px]">
          About Us
        </h1>
        <div className="h-1 w-20  bg-amber-600 mx-auto mb-6"></div>
        <p className="text-white leading-relaxed font-medium">
          We are a team of passionate Computer Science students dedicated to building 
          innovative digital experiences. <br/>      
          "More Than an Invitation. It's the First Chapter of Your Celebration."
        </p>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl w-full">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      {/* Our Story */}
      <div className="text-center max-w-3xl backdrop-blur-sm p-10 rounded-2xl border border-white/20 shadow-xl bg-white/10">
        <h2 className="text-2xl font-bold text-amber-500 uppercase tracking-[5px] mb-4">Our Story</h2>
        <p className="text-white italic leading-relaxed">
          "Linda & Devid was born from a simple, personal moment. We were helping a loved one plan their wedding and saw the struggle: the desire for stunning, personalized design clashing with the cost, waste, and logistical hassle of traditional paper invites."
        </p>
      </div>

      {/* Mission 1 */}
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl backdrop-blur-sm p-10 rounded-2xl  shadow-xl bg-white/10">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold text-amber-500 uppercase tracking-[5px] mb-4">Our Mission</h2>
          <p className="text-white italic leading-relaxed text-sm">
            "We’re here to transform the first 'hello' of your wedding. We craft digital invitations that are not just emails or links, but beautiful, interactive experiences."
          </p>
        </div>
        <img src={Com} alt="Mission" className="w-full md:w-[350px] h-[350px] rounded-2xl object-cover shadow-lg" />
      </div>

      {/* Mission 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 max-w-4xl backdrop-blur-sm p-10 rounded-2xl border border-white/20 shadow-xl bg-white/10">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold text-amber-500 uppercase tracking-[5px] mb-4">Our Values</h2>
          <p className="text-white italic leading-relaxed text-sm">
            "Design Without Compromise: Browse our gallery of stunning templates, then make it uniquely yours. Celebrate your love while kindly honoring our planet."
          </p>
        </div>
        <img src={Com2} alt="Values" className="w-full md:w-[350px] h-[350px] rounded-2xl object-cover shadow-lg" />
      </div>
      
    </div>
  );
};

export default CardContainer;