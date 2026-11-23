import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Cpu, ShieldCheck, ChevronRight } from 'lucide-react';
import { INDUSTRIAL_IMAGES } from '../../data/mockData';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#050505] border-t border-[#292929] overflow-hidden">
      
      {/* Background Ambience & Golden Glow */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E7C58E]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Subtle pill */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 mb-6 border border-[#E7C58E]/30 bg-[#101010]/80 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E7C58E]" />
          <span className="font-mono-tech text-[10px] tracking-[0.2em] text-[#E7C58E] uppercase">
            ENTERPRISE DEPLOYMENT READY
          </span>
        </div>

        {/* Master Heading */}
        <h2 className="font-michroma text-3xl sm:text-5xl md:text-6xl tracking-[0.08em] leading-tight uppercase text-white mb-6">
          ENGINEERING CONFIDENCE.<br />
          <span className="text-[#E7C58E]">ONE BOX AT A TIME.</span>
        </h2>

        <p className="font-sans text-sm sm:text-base text-[#A3A3A3] max-w-2xl mx-auto leading-relaxed mb-10">
          Eliminate overseas line-down penalties, missing component claims, and packaging defect escapes. Integrate SmartPack AI into your active export lines in under 72 hours.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#technology"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-[#E7C58E] hover:bg-[#F3DCB1] text-[#050505] font-sans font-semibold text-xs tracking-[0.15em] uppercase transition-all duration-300 shadow-gold-subtle hover:shadow-gold-glow"
          >
            <span>EXPLORE SMARTPACK AI</span>
            <ChevronRight className="w-4 h-4" />
          </a>

          <Link
            to="/platform"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 border border-[#292929] hover:border-[#E7C58E]/60 bg-[#101010] hover:bg-[#141414] text-white font-sans text-xs tracking-[0.15em] uppercase transition-all duration-300"
          >
            <Cpu className="w-4 h-4 text-[#E7C58E]" />
            <span>ACCESS PLATFORM</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Supporting Trust Matrix */}
        <div className="mt-14 pt-8 border-t border-[#1C1C1C] flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-[11px] font-mono-tech text-[#6E6E6E]">
          <span>✓ ISO 9001 / TS 16949 CERTIFIED ARCHITECTURE</span>
          <span>✓ ZERO CLOUD DEPENDENCY (100% LOCAL EDGE)</span>
          <span>✓ PLUG & PLAY INDUSTRIAL PLC INTEGRATION</span>
        </div>

      </div>
    </section>
  );
};

