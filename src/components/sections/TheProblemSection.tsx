import React, { useState } from 'react';
import { PACKING_FAILURES_DATA, INDUSTRIAL_IMAGES } from '../../data/mockData';
import { AlertCircle, ArrowRight, DollarSign, Globe, ShieldAlert, Cpu } from 'lucide-react';

export const TheProblemSection: React.FC = () => {
  const [selectedFailure, setSelectedFailure] = useState(PACKING_FAILURES_DATA[0]);

  return (
    <section id="problem" className="relative py-24 sm:py-32 bg-[#050505] border-t border-[#292929]">
      
      {/* Background accents */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-[10px] font-mono-tech tracking-[0.2em] text-[#E7C58E] uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-[#E7C58E]" />
            <span>SECTION 02 — INDUSTRIAL VULNERABILITY</span>
          </div>

          <h2 className="font-michroma text-2xl sm:text-4xl md:text-5xl tracking-[0.08em] leading-tight text-white uppercase max-w-4xl">
            ONE PACKING ERROR.<br />
            <span className="text-[#E7C58E]">AN ENTIRE SHIPMENT AT RISK.</span>
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-[#A3A3A3] font-sans max-w-2xl leading-relaxed">
            When export packing relies on human visual vigilance alone, fatigue and high SKU complexity inevitably breach manual defenses. A single unverified cavity halts intercontinental assembly operations.
          </p>
        </div>

        {/* Editorial Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Financial & Operational Blast Radius (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Dark Industrial Image Frame */}
            <div className="relative border border-[#292929] bg-[#101010] p-1.5">
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={INDUSTRIAL_IMAGES.metalSparksDark}
                  alt="Industrial manufacturing equipment and metal fabrication"
                  className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                
                {/* Floating Warning Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#050505]/90 border border-[#EF4444]/60 p-3 backdrop-blur-md">
                  <div className="flex items-start space-x-2.5">
                    <AlertCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] font-mono-tech tracking-wider text-[#EF4444] uppercase">
                        CUSTOMER LINE-DOWN PENALTY
                      </div>
                      <div className="font-michroma text-base text-white mt-0.5">
                        $85,000+ <span className="text-xs font-sans text-[#A3A3A3]">/ HOUR</span>
                      </div>
                      <div className="text-[11px] text-[#A3A3A3] mt-0.5">
                        Automotive OEM tier-1 downtime penalty for missing or mismatched components.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#0c0c0c] border-t border-[#292929] text-[11px] font-mono-tech text-[#6E6E6E] flex justify-between">
                <span>RISK MATRIX: ISO/TS 16949</span>
                <span className="text-[#E7C58E]">EXPORT RISK FACTOR: 9.4/10</span>
              </div>
            </div>

            {/* Cascading Supply Chain Friction */}
            <div className="border border-[#292929] bg-[#0c0c0c] p-6">
              <h3 className="font-michroma text-xs tracking-widest text-[#E7C58E] uppercase mb-4">
                THE EXPONENTIAL COST ESCALATION
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 text-xs">
                  <span className="font-mono-tech text-[#6E6E6E] w-6 shrink-0">01</span>
                  <div>
                    <div className="text-white font-medium">Packing Bench Discrepancy</div>
                    <div className="text-[#A3A3A3] text-[11px]">$0.00 Cost to correct with instant Poka-Yoke interlock.</div>
                  </div>
                </div>

                <div className="w-full h-px bg-[#1f1f1f]" />

                <div className="flex items-start space-x-3 text-xs">
                  <span className="font-mono-tech text-[#6E6E6E] w-6 shrink-0">02</span>
                  <div>
                    <div className="text-white font-medium">Warehouse Dispatch & Air Freight</div>
                    <div className="text-[#A3A3A3] text-[11px]">$12,000+ Emergency international courier & customs re-filing.</div>
                  </div>
                </div>

                <div className="w-full h-px bg-[#1f1f1f]" />

                <div className="flex items-start space-x-3 text-xs">
                  <span className="font-mono-tech text-[#EF4444] w-6 shrink-0">03</span>
                  <div>
                    <div className="text-white font-medium">Overseas Assembly Halt</div>
                    <div className="text-[#EF4444] text-[11px]">$250,000+ Total incident cost, contractual de-rating, OEM audit.</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: The 6 Industrial Failure Modes (7 cols - Interactive Editorial List) */}
          <div className="lg:col-span-7 flex flex-col space-y-3">
            <div className="text-[11px] font-mono-tech tracking-wider text-[#A3A3A3] uppercase mb-2 flex items-center justify-between">
              <span>SELECT AN INDUSTRIAL FAILURE VULNERABILITY</span>
              <span className="text-[#E7C58E]">6 CRITICAL POKA-YOKE CHALLENGES</span>
            </div>

            {/* List with Asymmetric Dynamic Content */}
            <div className="space-y-2.5">
              {PACKING_FAILURES_DATA.map((item) => {
                const isSelected = selectedFailure.id === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedFailure(item)}
                    className={`cursor-pointer transition-all duration-200 border ${
                      isSelected
                        ? 'border-[#E7C58E] bg-[#121212]'
                        : 'border-[#202020] hover:border-[#353535] bg-[#090909]'
                    }`}
                  >
                    <div className="p-4 sm:p-5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3.5">
                          <span className={`font-mono-tech text-xs px-2 py-0.5 border ${
                            isSelected
                              ? 'border-[#E7C58E] text-[#E7C58E] bg-[#E7C58E]/10'
                              : 'border-[#292929] text-[#6E6E6E]'
                          }`}>
                            {item.id}
                          </span>
                          <span className="font-michroma text-sm sm:text-base text-white tracking-wide">
                            {item.title}
                          </span>
                        </div>

                        <div className="flex items-center space-x-3">
                          <span className={`text-[10px] font-mono-tech tracking-wider px-2 py-0.5 ${
                            item.severity === 'CRITICAL'
                              ? 'text-[#EF4444] bg-[#EF4444]/10 border border-[#EF4444]/30'
                              : 'text-[#E7C58E] bg-[#E7C58E]/10 border border-[#E7C58E]/30'
                          }`}>
                            {item.severity}
                          </span>
                          <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-[#E7C58E] translate-x-1' : 'text-[#444]'}`} />
                        </div>
                      </div>

                      {/* Expanded View when selected */}
                      {isSelected && (
                        <div className="mt-4 pt-4 border-t border-[#252525] grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <div className="text-[10px] font-mono-tech text-[#6E6E6E] uppercase tracking-wider">
                              OPERATIONAL IMPACT
                            </div>
                            <div className="text-xs text-[#C5C5C5] mt-1 leading-relaxed">
                              {item.impact}
                            </div>
                          </div>

                          <div>
                            <div className="text-[10px] font-mono-tech text-[#E7C58E] uppercase tracking-wider">
                              SMARTPACK POKA-YOKE DETECTION
                            </div>
                            <div className="text-xs text-[#E7C58E]/90 mt-1 leading-relaxed">
                              {item.detectionMethod}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom summary strip */}
            <div className="border border-[#292929] bg-[#0e0e0e] p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center space-x-2 text-[#A3A3A3]">
                <Cpu className="w-4 h-4 text-[#E7C58E]" />
                <span>SmartPack AI eliminates 100% of these manual packing failure modes.</span>
              </div>
              <a
                href="#solution"
                className="font-mono-tech text-[11px] text-[#E7C58E] hover:underline flex items-center space-x-1 shrink-0"
              >
                <span>HOW OUR ARCHITECTURE PREVENTS THIS</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

