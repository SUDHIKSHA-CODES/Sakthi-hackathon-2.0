import React, { useState } from 'react';
import { CheckCircle2, XCircle, AlertTriangle, ShieldCheck, ArrowRight, Lock, Unlock, RefreshCw } from 'lucide-react';

export const DecisionEngineSection: React.FC = () => {
  const [activeDecision, setActiveDecision] = useState<'pass' | 'fail' | 'review'>('pass');

  const decisions = {
    pass: {
      status: 'PASS',
      title: 'ALL MANDATORY CHECKS SUCCEED',
      color: '#E7C58E',
      badgeBg: 'bg-[#E7C58E]/10',
      borderColor: 'border-[#E7C58E]',
      icon: CheckCircle2,
      summary: 'Box is 100% verified against ERP bill of materials. Zero missing components, chirality matches export spec, gravimetric weight delta is within ±0.2g, and all 2D barcodes are serialized.',
      actions: [
        'Digital Pass Token signed with SHA-256 cryptographic stamp.',
        'Conveyor dispatch interlock released to outbound line.',
        'Customer export packing certificate automatically attached to SAP manifest.',
        'Shipping carton barcode marked "CLEARED FOR EXPORT".'
      ],
      gateState: 'UNLOCKED / CONVEYOR FLOW ACTIVE',
      gateIcon: Unlock,
    },
    fail: {
      status: 'FAIL',
      title: 'A VERIFIED PACKING DISCREPANCY EXISTS',
      color: '#EF4444',
      badgeBg: 'bg-[#EF4444]/10',
      borderColor: 'border-[#EF4444]',
      icon: XCircle,
      summary: 'Poka-Yoke interlock automatically triggers. Missing component, incorrect orientation, LH/RH swap, or weight discrepancy detected with >99.5% neural confidence.',
      actions: [
        'Hardware conveyor diverter gate physically diverts carton to Reject Spur.',
        'Audible beacon and red workstation beacon activated.',
        'Operator touch screen highlights exact discrepancy coordinate with visual CAD overlay.',
        'Shipping manifest locked in ERP; box cannot generate bill of lading.'
      ],
      gateState: 'LOCKED / DIVERTED TO REJECT SPUR',
      gateIcon: Lock,
    },
    review: {
      status: 'MANUAL REVIEW',
      title: 'HUMAN VERIFICATION REQUIRED (AMBIGUITY / EDGE CASE)',
      color: '#F59E0B',
      badgeBg: 'bg-[#F59E0B]/10',
      borderColor: 'border-[#F59E0B]',
      icon: AlertTriangle,
      summary: 'Vision confidence lands in edge boundary (e.g. 75%-88%) due to optical glare, dust on label, or shifted packaging foam. System mandates secondary certified human verification.',
      actions: [
        'Conveyor pauses container in inspection bay.',
        'Quality Supervisor badge tap required to view high-resolution inspection snapshot.',
        'Supervisor inputs dual-signature override or initiates component repack.',
        'Full incident timeline and reason code logged into immutable compliance audit.'
      ],
      gateState: 'PAUSED / SUPERVISOR BADGE REQUIRED',
      gateIcon: RefreshCw,
    }
  };

  const current = decisions[activeDecision];
  const CurrentIcon = current.icon;
  const CurrentGateIcon = current.gateIcon;

  return (
    <section id="decision-engine" className="relative py-24 sm:py-32 bg-[#050505] border-t border-[#292929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-[10px] font-mono-tech tracking-[0.2em] text-[#E7C58E] uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-[#E7C58E]" />
            <span>SECTION 06 — DETERMINISTIC POKA-YOKE ARBITRATION</span>
          </div>

          <h2 className="font-michroma text-2xl sm:text-4xl md:text-5xl tracking-[0.08em] leading-tight text-white uppercase max-w-4xl">
            EVERY DISCREPANCY HAS A DECISION.<br />
            <span className="text-[#E7C58E]">ZERO AMBIGUITY AT THE GATE.</span>
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-[#A3A3A3] font-sans max-w-2xl leading-relaxed">
            Industrial export verification requires deterministic fail-safe states. SmartPack AI enforces three strict, standardized outcomes to maintain total quality control.
          </p>
        </div>

        {/* 3 Outcome Switchers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {(['pass', 'fail', 'review'] as const).map((key) => {
            const item = decisions[key];
            const isSelected = activeDecision === key;
            const Icon = item.icon;

            return (
              <button
                key={key}
                onClick={() => setActiveDecision(key)}
                className={`p-6 border text-left transition-all duration-300 relative ${
                  isSelected
                    ? `${item.borderColor} bg-[#111111] shadow-lg`
                    : 'border-[#1C1C1C] hover:border-[#333] bg-[#090909]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`font-mono-tech text-xs tracking-wider px-2.5 py-1 border font-bold ${item.badgeBg}`}
                    style={{ color: item.color, borderColor: `${item.color}55` }}
                  >
                    {item.status}
                  </span>
                  <Icon className="w-5 h-5" style={{ color: item.color }} />
                </div>

                <div className="font-michroma text-sm sm:text-base text-white tracking-wide">
                  {item.status === 'PASS' && 'Green Light Dispatch'}
                  {item.status === 'FAIL' && 'Instant Hardware Interlock'}
                  {item.status === 'MANUAL REVIEW' && 'Quality Dual-Key Override'}
                </div>

                <div className="text-xs text-[#A3A3A3] font-sans mt-2 line-clamp-2">
                  {item.title}
                </div>

                {isSelected && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[2px]"
                    style={{ backgroundColor: item.color }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Deep Dive Panel into the Selected Outcome */}
        <div className="border border-[#292929] bg-[#0c0c0c] p-6 sm:p-8 gold-corner-bracket">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center space-x-3 mb-4">
                <span className="font-mono-tech text-xs tracking-widest text-[#6E6E6E] uppercase">
                  AUTOMATED LOGIC EXECUTION
                </span>
                <span className="text-[#333]">|</span>
                <span className="font-mono-tech text-xs uppercase" style={{ color: current.color }}>
                  OUTCOME: {current.status}
                </span>
              </div>

              <h3 className="font-michroma text-xl sm:text-2xl text-white tracking-wide">
                {current.title}
              </h3>

              <p className="text-sm text-[#C5C5C5] font-sans leading-relaxed mt-4">
                {current.summary}
              </p>

              <div className="mt-6 space-y-2.5">
                <div className="text-[10px] font-mono-tech text-[#6E6E6E] uppercase tracking-wider mb-2">
                  HARDWARE & ERP ACTIONS TRIGGERED IMMEDIATELY:
                </div>
                {current.actions.map((act, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs text-[#E0E0E0]">
                    <span className="font-mono-tech shrink-0 mt-0.5" style={{ color: current.color }}>
                      0{idx + 1}
                    </span>
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Status Visualization (5 cols) */}
            <div className="lg:col-span-5 border border-[#222] bg-[#070707] p-6 flex flex-col justify-between space-y-6">
              
              <div className="text-center py-4">
                <div
                  className="w-16 h-16 mx-auto rounded-full border-2 flex items-center justify-center mb-4 transition-transform duration-500 hover:scale-105"
                  style={{ borderColor: current.color, backgroundColor: `${current.color}15` }}
                >
                  <CurrentIcon className="w-8 h-8" style={{ color: current.color }} />
                </div>

                <div className="font-michroma text-xl text-white tracking-wider">
                  {current.status}
                </div>
                <div className="text-xs font-mono-tech mt-1 text-[#A3A3A3]">
                  SAFETY INTEGRITY LEVEL: SIL-2 COMPLIANT
                </div>
              </div>

              <div className="border-t border-[#1C1C1C] pt-4">
                <div className="text-[10px] font-mono-tech text-[#6E6E6E] uppercase tracking-wider mb-2">
                  CONVEYOR LINE STATE:
                </div>
                <div className="flex items-center space-x-2 text-xs font-mono-tech font-bold" style={{ color: current.color }}>
                  <CurrentGateIcon className="w-4 h-4 shrink-0" />
                  <span>{current.gateState}</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

