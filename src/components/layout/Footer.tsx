import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Cpu, ArrowUp, Mail, MapPin, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030303] border-t border-[#222222] text-[#A3A3A3] font-sans text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-[#181818]">
          
          {/* Brand & Bio (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group inline-block">
              <div className="w-8 h-8 rounded-none border border-[#E7C58E] flex items-center justify-center bg-[#101010] relative">
                <div className="w-3.5 h-3.5 border-t border-l border-[#E7C58E] transform rotate-45" />
                <div className="w-1.5 h-1.5 bg-[#E7C58E] absolute" />
              </div>
              <span className="font-michroma tracking-[0.2em] text-sm font-semibold text-white">
                SMARTPACK<span className="text-[#E7C58E] ml-1.5 font-light">AI</span>
              </span>
            </Link>

            <p className="text-xs text-[#8E8E8E] max-w-sm leading-relaxed">
              Smart Export Packing Verification and Poka-Yoke System. Precision engineered for zero-defect international manufacturing supply chains.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-[10px] font-mono-tech text-[#E7C58E]">
              <span className="w-2 h-2 rounded-full bg-[#E7C58E] animate-pulse" />
              <span>ALL VERIFICATION GATES OPERATIONAL — 99.99% UPTIME</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <div className="font-michroma text-[11px] text-white uppercase tracking-wider">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-[#E7C58E] transition-colors">
                  System Overview
                </a>
              </li>
              <li>
                <a href="#problem" className="hover:text-[#E7C58E] transition-colors">
                  Industrial Challenges
                </a>
              </li>
              <li>
                <a href="#solution" className="hover:text-[#E7C58E] transition-colors">
                  Four-Pillar Architecture
                </a>
              </li>
              <li>
                <a href="#technology" className="hover:text-[#E7C58E] transition-colors">
                  Computer Vision Engine
                </a>
              </li>
              <li>
                <a href="#decision-engine" className="hover:text-[#E7C58E] transition-colors">
                  Decision Arbitration
                </a>
              </li>
              <li>
                <a href="#traceability" className="hover:text-[#E7C58E] transition-colors">
                  Compliance Audit Trail
                </a>
              </li>
            </ul>
          </div>

          {/* Technology & Compliance */}
          <div className="space-y-3">
            <div className="font-michroma text-[11px] text-white uppercase tracking-wider">
              STANDARDS & TECH
            </div>
            <ul className="space-y-2 text-xs font-mono-tech text-[#8E8E8E]">
              <li>ISO 9001:2015 Traceability</li>
              <li>IATF 16949 Automotive Poka-Yoke</li>
              <li>VDA 6.3 Process Audit</li>
              <li>OPC-UA / MQTT Sparkplug B</li>
              <li>Sub-millimeter Optical Profiling</li>
              <li>Gravimetric ±0.2g Mass Cell</li>
            </ul>
          </div>

          {/* Contact & Platform Access */}
          <div className="space-y-3">
            <div className="font-michroma text-[11px] text-white uppercase tracking-wider">
              ENTERPRISE ACCESS
            </div>
            <div className="space-y-2.5 text-xs">
              <Link
                to="/platform"
                className="inline-flex items-center space-x-1.5 text-[#E7C58E] hover:underline font-mono-tech"
              >
                <span>&gt; Launch Workstation HMI</span>
              </Link>
              <div>
                <Link
                  to="/login"
                  className="inline-flex items-center space-x-1.5 text-[#A3A3A3] hover:text-white font-mono-tech"
                >
                  <span>&gt; Station Operator Login</span>
                </Link>
              </div>
              <div className="pt-2 text-[11px] text-[#6E6E6E] font-mono-tech">
                <div>SUPPORT: tech@smartpack.industrial.ai</div>
                <div>SECURE EDGE TERMINALS ONLY</div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono-tech text-[#6E6E6E] gap-4">
          <div>
            © {new Date().getFullYear()} SMARTPACK AI TECHNOLOGIES. ALL RIGHTS RESERVED. PRECISION INDUSTRIAL SYSTEM.
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 text-[#A3A3A3] hover:text-[#E7C58E] transition-colors"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

