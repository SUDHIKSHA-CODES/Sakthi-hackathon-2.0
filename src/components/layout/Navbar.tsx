import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck, ChevronRight, Cpu } from 'lucide-react';

interface NavbarProps {
  onNavigateSection?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'The Problem', href: '#problem', id: 'problem' },
    { label: 'Technology', href: '#technology', id: 'technology' },
    { label: 'How It Works', href: '#solution', id: 'solution' },
    { label: 'Decision Engine', href: '#decision-engine', id: 'decision-engine' },
    { label: 'Traceability', href: '#traceability', id: 'traceability' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-[#292929]/80 py-3.5 shadow-lg'
          : 'bg-[#050505]/40 backdrop-blur-sm border-b border-[#292929]/30 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-8 h-8 rounded-none border border-[#E7C58E]/70 flex items-center justify-center bg-[#101010] relative transition-transform duration-300 group-hover:border-[#E7C58E]">
              {/* Inner geometric gold mark */}
              <div className="w-3.5 h-3.5 border-t border-l border-[#E7C58E] transform rotate-45" />
              <div className="w-1.5 h-1.5 bg-[#E7C58E] absolute" />
            </div>
            
            <div className="flex flex-col">
              <span className="font-michroma tracking-[0.2em] text-sm font-semibold text-white group-hover:text-[#E7C58E] transition-colors">
                SMARTPACK<span className="text-[#E7C58E] ml-1.5 font-light">AI</span>
              </span>
              <span className="font-mono-tech text-[9px] tracking-[0.15em] text-[#6E6E6E] uppercase">
                POKA-YOKE VERIFICATION
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className="font-sans text-[13px] tracking-wide text-[#A3A3A3] hover:text-[#FFFFFF] transition-colors relative py-1 group"
              >
                {item.label}
                {/* Active/Hover Gold line indicator */}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E7C58E] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-xs font-mono-tech tracking-wider text-[#A3A3A3] hover:text-[#E7C58E] px-3 py-1.5 transition-colors border border-transparent hover:border-[#292929]"
            >
              SIGN IN
            </Link>

            <Link
              to="/platform"
              className="group relative inline-flex items-center space-x-2 text-xs font-sans font-medium px-4 py-2 border border-[#E7C58E]/60 text-white bg-[#101010] hover:bg-[#E7C58E] hover:text-[#050505] transition-all duration-200"
            >
              <Cpu className="w-3.5 h-3.5 text-[#E7C58E] group-hover:text-[#050505] transition-colors" />
              <span className="tracking-wide">ACCESS PLATFORM</span>
              <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center space-x-2">
            <Link
              to="/platform"
              className="text-[11px] font-mono-tech px-2.5 py-1.5 border border-[#E7C58E]/60 text-[#E7C58E] bg-[#101010]"
            >
              PLATFORM
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#A3A3A3] hover:text-white border border-[#292929] bg-[#101010]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#292929] px-6 py-6 transition-all duration-200">
          <div className="flex flex-col space-y-4">
            <div className="text-[10px] font-mono-tech tracking-widest text-[#E7C58E] uppercase pb-1 border-b border-[#1C1C1C]">
              NAVIGATION DIRECTORY
            </div>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-sm font-sans tracking-wide text-[#A3A3A3] hover:text-[#E7C58E] py-1 border-b border-[#141414]"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col space-y-2.5">
              <Link
                to="/platform"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 w-full py-2.5 bg-[#E7C58E] text-[#050505] text-xs font-semibold tracking-wider"
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>ACCESS PLATFORM</span>
              </Link>
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 w-full py-2 border border-[#292929] text-xs font-mono-tech tracking-wider text-[#A3A3A3]"
              >
                <span>OPERATOR SIGN IN</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

