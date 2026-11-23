import React, { useState } from 'react';
import { Lock, Unlock, ShieldAlert, ShieldCheck, ArrowRight, CheckCircle2, AlertOctagon, Terminal } from 'lucide-react';
import { INDUSTRIAL_IMAGES } from '../../data/mockData';

export const DigitalDispatchGateSection: React.FC = () => {
  const [gateSimulatedState, setGateSimulatedState] = useState<'locked' | 'unlocked'>('locked');

  return (
    <section className="relative py-24 sm:py-32 bg-[#080808] border-t border-[#292929] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-industrial-grid opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-[10px] font-mono-tech tracking-[0.2em] text-[#E7C58E] uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-[#E7C58E]" />
            <span>SECTION 07 — SHIPMENT SECURITY INTERLOCK</span>
          </div>

          <h2 className="font-michroma text-2xl sm:text-4xl md:text-5xl tracking-[0.08em] leading-tight text-white uppercase max-w-4xl">
            NOTHING LEAVES WITHOUT VERIFICATION.<br />
            <span className="text-[#E7C58E]">THE UNCOMPROMISING DISPATCH GATE.</span>
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-[#A3A3A3] font-sans max-w-2xl leading-relaxed">
            The Digital Dispatch Gate is an impenetrable physical and cryptographic barrier. If a carton fails even a single check, the PLC mechanically locks the outbound conveyor diverter and blocks commercial invoice release.
          </p>
        </div>

        {/* Visual Gate Concept Simulation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Interactive Gate Visualizer (7 cols) */}
          <div className="lg:col-span-7 border border-[#292929] bg-[#0c0c0c] p-6 sm:p-8 gold-corner-bracket relative">
            <div className="flex items-center justify-between pb-4 border-b border-[#222]">
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-[#E7C58E]" />
                <span className="font-mono-tech text-xs text-white uppercase tracking-wider">
                  DISPATCH INTERLOCK CONTROLLER [PLC-GATE-04]
                </span>
              </div>

              {/* State Toggle */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setGateSimulatedState('locked')}
                  className={`px-2.5 py-1 text-[11px] font-mono-tech border transition-all ${
                    gateSimulatedState === 'locked'
                      ? 'border-[#EF4444] bg-[#EF4444]/20 text-[#EF4444] font-bold'
                      : 'border-[#222] text-[#6E6E6E] hover:text-white'
                  }`}
                >
                  SIMULATE REJECT
                </button>
                <button
                  onClick={() => setGateSimulatedState('unlocked')}
                  className={`px-2.5 py-1 text-[11px] font-mono-tech border transition-all ${
                    gateSimulatedState === 'unlocked'
                      ? 'border-[#E7C58E] bg-[#E7C58E]/20 text-[#E7C58E] font-bold'
                      : 'border-[#222] text-[#6E6E6E] hover:text-white'
                  }`}
                >
                  SIMULATE PASS
                </button>
              </div>
            </div>

            {/* Industrial Warehouse Gate Graphic */}
            <div className="relative mt-6 h-64 sm:h-80 bg-[#060606] border border-[#1f1f1f] overflow-hidden flex items-center justify-center">
              <img
                src={INDUSTRIAL_IMAGES.logisticsWarehouse}
                alt="Automated export logistics outbound dock"
                className="w-full h-full object-cover filter brightness-[0.5] contrast-[1.3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/40 to-transparent" />
              <div className="absolute inset-0 scanline-overlay pointer-events-none" />

              {/* Center Interlock Laser Barrier */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div
                  className={`w-20 h-20 rounded-full border-2 flex items-center justify-center backdrop-blur-md mb-4 transition-all duration-300 shadow-2xl ${
                    gateSimulatedState === 'locked'
                      ? 'border-[#EF4444] bg-[#EF4444]/20 text-[#EF4444]'
                      : 'border-[#E7C58E] bg-[#E7C58E]/20 text-[#E7C58E]'
                  }`}
                >
                  {gateSimulatedState === 'locked' ? (
                    <Lock className="w-10 h-10 animate-bounce" />
                  ) : (
                    <Unlock className="w-10 h-10" />
                  )}
                </div>

                <div className="font-michroma text-lg sm:text-2xl text-white tracking-widest uppercase">
                  {gateSimulatedState === 'locked' ? 'GATE SEAL LOCKED' : 'DISPATCH CLEARED'}
                </div>

                <div className="font-mono-tech text-xs tracking-wider mt-1" style={{
                  color: gateSimulatedState === 'locked' ? '#EF4444' : '#E7C58E'
                }}>
                  {gateSimulatedState === 'locked'
                    ? 'PHYSICAL CONVEYOR DIVERTER DEPLOYED — CONTAINER BLOCKED'
                    : 'CRYPTOGRAPHIC TOKEN VERIFIED — READY FOR AIR FREIGHT'}
                </div>
              </div>

              {/* Bottom Barrier Sensor Strip */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono-tech bg-[#050505]/90 border border-[#222] px-3 py-1.5">
                <span className="text-[#A3A3A3]">RFID INTERLOCK: <strong>ACTIVE</strong></span>
                <span className="text-[#A3A3A3]">CONVEYOR RELAY: <strong className={gateSimulatedState === 'locked' ? 'text-[#EF4444]' : 'text-[#E7C58E]'}>{gateSimulatedState === 'locked' ? 'HOLD_PIN_ENGAGED' : 'CONVEYOR_RUNNING'}</strong></span>
              </div>
            </div>

            {/* Bottom Status bar */}
            <div className="mt-4 pt-4 border-t border-[#1C1C1C] flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono-tech text-[#A3A3A3] gap-2">
              <span>ZERO DEFECT ESCAPES TOLERATED</span>
              <span className="text-[#E7C58E]">HARDWARE-ENFORCED INDUSTRIAL POKA-YOKE</span>
            </div>

          </div>

          {/* Right: Three Pillars of Gate Protection (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="border border-[#202020] bg-[#0c0c0c] p-5">
              <div className="flex items-center space-x-3 mb-2">
                <span className="font-mono-tech text-xs text-[#E7C58E] px-2 py-0.5 border border-[#E7C58E]/40 bg-[#E7C58E]/10">
                  01
                </span>
                <h3 className="font-michroma text-sm text-white uppercase tracking-wide">
                  PHYSICAL CONVEYOR DIVERTER
                </h3>
              </div>
              <p className="text-xs text-[#A3A3A3] font-sans leading-relaxed">
                Integrated through digital I/O to automated conveyor PLCs (Allen-Bradley, Siemens S7). Failed boxes are mechanically routed to an isolated physical quarantine bay before entering the palletizer.
              </p>
            </div>

            <div className="border border-[#202020] bg-[#0c0c0c] p-5">
              <div className="flex items-center space-x-3 mb-2">
                <span className="font-mono-tech text-xs text-[#E7C58E] px-2 py-0.5 border border-[#E7C58E]/40 bg-[#E7C58E]/10">
                  02
                </span>
                <h3 className="font-michroma text-sm text-white uppercase tracking-wide">
                  COMMERCIAL ERP INTERLOCK
                </h3>
              </div>
              <p className="text-xs text-[#A3A3A3] font-sans leading-relaxed">
                SmartPack AI withholds the outbound Goods Issue confirmation in SAP/Oracle until the carton serial token is cryptographically validated. Unverified boxes cannot generate export customs documentation.
              </p>
            </div>

            <div className="border border-[#202020] bg-[#0c0c0c] p-5">
              <div className="flex items-center space-x-3 mb-2">
                <span className="font-mono-tech text-xs text-[#E7C58E] px-2 py-0.5 border border-[#E7C58E]/40 bg-[#E7C58E]/10">
                  03
                </span>
                <h3 className="font-michroma text-sm text-white uppercase tracking-wide">
                  TAMPER-PROOF CONTAINER SEAL
                </h3>
              </div>
              <p className="text-xs text-[#A3A3A3] font-sans leading-relaxed">
                Upon verified pass, an automated thermal applicator generates an encrypted QR verification seal containing the cryptographic inspection hash, operator signature, and dimensional gravimetric record.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

