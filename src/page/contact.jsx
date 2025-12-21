import React from 'react';
import {
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
  FaArrowRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

// Mock Link component for demonstration
const Link = ({ href, children, ...props }) => (
  <a href={href} className="transition-colors hover:text-red-950" {...props}>
    {children}
  </a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navItems = {
    Company: [
      { name: 'Our Story', href: '/about' },
      { name: 'Journal / Blog', href: '/journal' },
      { name: 'Supplies & Tools', href: '/shop/tools' },
      { name: 'Careers', href: '/careers' },
    ],
    Support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Shipping & Returns', href: '/shipping' },
      { name: 'Privacy Policy', href: '/privacy' },
    ],
  };

  const socialLinks = [
    { Icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
    { Icon: SiTiktok, href: 'https://tiktok.com', label: 'TikTok' },
    { Icon: FaPinterestP, href: 'https://pinterest.com', label: 'Pinterest' },
    { Icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { Icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
  ];

  const NewsletterSection = () => (
    <div className="relative flex flex-col justify-center w-full p-10 overflow-hidden text-white md:w-1/3 bg-red-950 md:p-20">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <span className="text-[18rem] font-serif italic select-none text-red-100/10">LD</span>
      </div>

      <div className="relative z-10">
        <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-200/50 mb-6">
          The Newsletter
        </h3>
        <h2 className="mb-6 font-serif text-4xl leading-tight">
          Curated <span className="italic font-light text-red-200/90">insight</span> & exclusive deals.
        </h2>
        
        <form className="mt-12">
          <label htmlFor="email-signup" className="sr-only">Email Address for Newsletter</label>
          <div className="relative transition-all border-b-2 border-red-200/50 focus-within:border-red-200">
            <input 
              id="email-signup"
              type="email" 
              placeholder="Your Email Address" 
              aria-label="Email Address"
              className="w-full pt-2 pb-4 text-base font-light tracking-wide transition-colors bg-transparent outline-none placeholder-red-100/50"
            />
            <button 
              type="submit" 
              className="absolute right-0 p-2 transition-transform -translate-y-1/2 top-1/2 hover:translate-x-1"
              aria-label="Subscribe"
            >
              <FaArrowRight className="text-xl text-red-200" />
            </button>
          </div>
        </form>

        <p className="mt-8 text-[11px] text-red-100/40 uppercase tracking-widest leading-loose">
          Receive resources for your beautifully planned celebration directly to your inbox. Zero spam.
        </p>
      </div>

      {/* Vertical "Verified Reviews" Tab - Retained and improved */}
      <div className="absolute right-0 hidden translate-x-px -translate-y-1/2 top-1/2 lg:block">
        <div className="bg-[#D4AF37] text-white py-6 px-3 flex items-center gap-3 transform rotate-180 [writing-mode:vertical-lr] text-[10px] font-bold tracking-[0.3em] uppercase rounded-l-md shadow-2xl cursor-pointer hover:bg-[#a38029] transition-colors">
          <span className="text-xs">★★★★★</span> VERIFIED REVIEWS
        </div>
      </div>
    </div>
  );

  const InfoSection = () => (
    <div className="flex flex-col justify-between w-full p-8 md:w-2/3 md:p-20">
      <div className="grid grid-cols-2 gap-12 mb-20 lg:grid-cols-3 md:gap-16">
        
        {/* Column 1: Navigation Group 1 */}
        {Object.entries(navItems).map(([title, links]) => (
          <div key={title}>
            <h3 className="text-[11px] font-bold tracking-[0.3em] uppercase text-red-950 mb-6 border-b border-red-950/10 pb-2 w-fit">
              {title}
            </h3>
            <ul className="space-y-4 text-sm font-light tracking-wide">
              {links.map(item => (
                <li key={item.name}><Link href={item.href}>{item.name}</Link></li>
              ))}
            </ul>
          </div>
        ))}

        {/* Column 3: Contact & Hours */}
        <div className="space-y-8">
          <h3 className="text-[11px] font-bold tracking-[0.3em] uppercase text-red-950 mb-6 border-b border-red-950/10 pb-2 w-fit">
            Atelier & Contact
          </h3>
          <div className="space-y-6 text-sm font-light leading-relaxed">
            <p className="flex items-start gap-3 text-gray-500">
              <FaMapMarkerAlt className="flex-shrink-0 mt-1 text-lg text-red-950/40" />
              <span className='transition-colors cursor-default hover:text-red-950'>
                123 Creative Lane, <br />
                Soho, London, SW1A 0AA
              </span>
            </p>
            <p className="flex items-center gap-3 italic group"> 
              <FaEnvelope className="flex-shrink-0 transition-colors text-red-950/40 group-hover:text-red-950" />
              <a href="mailto:orders@linda&devid.com" className="hover:text-red-950">
                orders@linda&devid.com
              </a>
            </p>
            <p className="flex items-center gap-3 italic text-gray-500 group">
              <FaPhoneAlt className="flex-shrink-0 transition-colors text-red-950/40 group-hover:text-red-950" />
              <a href="tel:+442079460910" className="hover:text-red-950">
                +44 (0)20 7946 0910
              </a>
            </p>

            <div className='pt-2'>
              <p className="font-medium text-gray-600">
                Mon — Fri: 10:00 — 17:00 <br />
                <span className="text-[10px] tracking-widest text-gray-400 uppercase">London (GMT+1)</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Branding & Socials */}
      <div className="flex flex-col items-end justify-between gap-8 pt-12 border-t border-red-950/5 md:flex-row">
        <div className="space-y-2">
          <h2 className="font-serif text-6xl leading-none text-red-950/90">Linda & Devid</h2>
          <p className="text-[10px] tracking-[.4em] text-gray-400 uppercase">Follow our creative journey</p>
        </div>
        <div className="flex gap-6 text-red-950/80">
          {socialLinks.map(({ Icon, href, label }) => (
            <a 
              key={label} 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={`Follow us on ${label}`}
              className="text-xl transition-all cursor-pointer hover:text-red-950 hover:-translate-y-1"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  const CopyrightBar = () => (
    <div className="py-6 border-t bg-red-950 border-white/5">
      <div className="flex flex-col items-center justify-between px-8 mx-auto text-center max-w-7xl md:flex-row md:px-0">
        <p className="text-[10px] text-red-200/30 uppercase tracking-[.3em] order-2 md:order-1 mt-4 md:mt-0">
          © {currentYear} Linda & Devid • All Rights Reserved
        </p>
        <div className="flex order-1 gap-6 md:order-2">
          <a href="/terms" className="text-[10px] text-red-200/30 uppercase tracking-[.2em] hover:text-red-200/60 transition-colors">
            Terms of Service
          </a>
          <a href="/sitemap" className="text-[10px] text-red-200/30 uppercase tracking-[.2em] hover:text-red-200/60 transition-colors">
            Sitemap
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <footer className="bg-[#FAF9F6] font-sans text-gray-800 border-t border-red-950/10">
      <div className="max-w-7xl mx-auto mt-[90px] flex flex-col md:flex-row min-h-[500px]">
        {/* Left Section: Info, Navigation & Socials */}
        <InfoSection />

        {/* Right Section: Deep Red Newsletter */}
        <NewsletterSection />
      </div>
      
      {/* Copyright Bar */}
      <CopyrightBar />
    </footer>
  );
};

export default Footer;