import React, { useState } from 'react';
import { ShieldCheck, Eye, Database, Lock, CheckCircle2, ChevronRight, Sliders, Cpu } from 'lucide-react';
import { INDUSTRIAL_IMAGES } from '../../data/mockData';

export const SolutionSection: React.FC = () => {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      num: '01',
      title: 'PREVENT',
      tagline: 'Guided packing and component verification',
      description: 'Before any box is taped or sealed, SmartPack AI establishes an active digital jig on the operator bench. High-resolution pick-to-light and graphical HMI displays guide the packer step-by-step, ensuring components enter their assigned nesting cavities in precise assembly sequence.',
      technicalSpecs: [
        { label: 'Operator Assistance', value: 'Dynamic Touchless AR Projection' },
        { label: 'Sequence Enforcement', value: 'Step-Lock Poka-Yoke Jig' },
        { label: 'Human Error Reduction', value: '99.4% First-Pass Packing Accuracy' }
      ],
      icon: ShieldCheck,
      color: '#E7C58E'
    },
    {
      num: '02',
      title: 'DETECT',
      tagline: 'Computer vision-based component inspection',
      description: 'Industrial-grade 4K stereoscopic optics and multi-spectrum illuminators analyze the loaded packaging cell in under 180 milliseconds. Edge neural networks segment each individual cavity to quantify items, verify sub-millimeter orientation, and classify symmetrical chirality (LH vs. RH).',
      technicalSpecs: [
        { label: 'Optical Resolution', value: 'Sub-millimeter (±0.08mm)' },
        { label: 'Inspection Cycle', value: '< 180ms per packaging layer' },
        { label: 'Chirality Differentiation', value: 'Deep 3D Feature Contour Mapping' }
      ],
      icon: Eye,
      color: '#E7C58E'
    },
    {
      num: '03',
      title: 'VERIFY',
      tagline: 'Automated comparison with packing specifications',
      description: 'SmartPack AI executes an instantaneous cryptographic handshake against ERP/MES digital packing specifications (SAP, Siemens, Plex). Every detected part serial, barcode, batch number, and gross package weight is reconciled in real-time against active customer export manifests.',
      technicalSpecs: [
        { label: 'ERP / MES Handshake', value: 'OPC-UA, MQTT, RESTful Bi-Directional' },
        { label: 'Gravimetric Precision', value: 'Dual-Scale Load Cell Check (±0.2g)' },
        { label: 'Serialization', value: '2D DataMatrix, QR & Laser-Etched OCR' }
      ],
      icon: Database,
      color: '#E7C58E'
    },
    {
      num: '04',
      title: 'CONTROL',
      tagline: 'Digital dispatch approval and shipment protection',
      description: 'A physical and digital interlock gate guards the dispatch line. Only containers holding a verified cryptographic pass token are permitted down the automated conveyor to palletizing. Any anomaly activates mechanical diverters, locks the shipping manifest, and summons quality supervisor sign-off.',
      technicalSpecs: [
        { label: 'Hardware Interlock', value: 'PLC Digital I/O Relay to Conveyor Diverter' },
        { label: 'Document Lockout', value: 'Automated Bill-of-Lading & Customs Hold' },
        { label: 'Compliance Audit', value: 'Immutable SHA-256 Ledger Record' }
      ],
      icon: Lock,
      color: '#E7C58E'
    }
  ];

  return (
    <section id="solution" className="relative py-24 sm:py-32 bg-[#080808] border-t border-[#292929] overflow-hidden">
      
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-industrial-grid opacity-25 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-[10px] font-mono-tech tracking-[0.2em] text-[#E7C58E] uppercase mb-4">
              <span className="w-1.5 h-1.5 bg-[#E7C58E]" />
              <span>SECTION 03 — SYSTEM ARCHITECTURE</span>
            </div>

            <h2 className="font-michroma text-2xl sm:text-4xl md:text-5xl tracking-[0.08em] leading-tight text-white uppercase">
              BEYOND MANUAL INSPECTION.
            </h2>
            
            <p className="mt-3 text-sm sm:text-base text-[#A3A3A3] font-sans max-w-xl">
              An intelligent export packing verification and poka-yoke ecosystem designed to guarantee zero escape defects across international supply chains.
            </p>
          </div>

          <div className="font-mono-tech text-xs text-[#6E6E6E] border-l border-[#292929] pl-4 hidden md:block">
            FOUR-PILLAR DEFENSE MATRIX<br />
            <span className="text-[#E7C58E]">100% DISPATCH CERTAINTY</span>
          </div>
        </div>

        {/* Sophisticated Horizontal / Asymmetric Pillar Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Pillar Selector (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            {pillars.map((pillar, idx) => {
              const isSelected = activePillar === idx;
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.num}
                  onClick={() => setActivePillar(idx)}
                  className={`cursor-pointer transition-all duration-300 p-5 border text-left flex items-start space-x-4 ${
                    isSelected
                      ? 'border-[#E7C58E] bg-[#121212] shadow-gold-subtle'
                      : 'border-[#1E1E1E] hover:border-[#333333] bg-[#0c0c0c]'
                  }`}
                >
                  <span className={`font-mono-tech text-xs tracking-wider px-2 py-1 border shrink-0 ${
                    isSelected
                      ? 'border-[#E7C58E] text-[#E7C58E] bg-[#E7C58E]/10'
                      : 'border-[#292929] text-[#6E6E6E]'
                  }`}>
                    {pillar.num}
                  </span>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-michroma text-base text-white tracking-wider">
                        {pillar.title}
                      </span>
                      <Icon className={`w-4 h-4 transition-colors ${isSelected ? 'text-[#E7C58E]' : 'text-[#555]'}`} />
                    </div>
                    <p className="text-xs text-[#A3A3A3] font-sans mt-1">
                      {pillar.tagline}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Pillar In-Depth Technical Display (7 cols) */}
          <div className="lg:col-span-7 border border-[#292929] bg-[#101010] p-6 sm:p-8 flex flex-col justify-between gold-corner-bracket relative">
            
            {/* Top metadata badge */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#222]">
                <div className="flex items-center space-x-3">
                  <span className="font-mono-tech text-xs text-[#E7C58E] tracking-widest uppercase">
                    PILLAR {pillars[activePillar].num} DEEP DIVE
                  </span>
                  <span className="text-[#444]">|</span>
                  <span className="font-mono-tech text-xs text-white uppercase tracking-wider">
                    {pillars[activePillar].title} ENGINE
                  </span>
                </div>

                <div className="flex items-center space-x-1.5 text-[10px] font-mono-tech text-[#E7C58E]">
                  <span className="w-2 h-2 rounded-full bg-[#E7C58E] animate-pulse" />
                  <span>SUBSYSTEM ACTIVE</span>
                </div>
              </div>

              {/* Main Headline */}
              <h3 className="font-michroma text-xl sm:text-2xl text-white tracking-wide mt-6">
                {pillars[activePillar].title}: <span className="text-[#E7C58E] font-normal">{pillars[activePillar].tagline}</span>
              </h3>

              {/* In-depth narrative */}
              <p className="text-sm text-[#C5C5C5] font-sans leading-relaxed mt-4">
                {pillars[activePillar].description}
              </p>

              {/* Technical Telemetry Specs */}
              <div className="mt-8 border border-[#222] bg-[#090909] p-5">
                <div className="text-[10px] font-mono-tech tracking-wider text-[#6E6E6E] uppercase mb-3">
                  ENGINEERING SPECIFICATIONS & TOLERANCES
                </div>
                
                <div className="space-y-3">
                  {pillars[activePillar].technicalSpecs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs py-1.5 border-b border-[#181818] last:border-b-0">
                      <span className="font-mono-tech text-[#A3A3A3]">{spec.label}</span>
                      <span className="font-michroma text-white text-[11px] sm:text-xs mt-0.5 sm:mt-0 text-[#E7C58E]">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions and Navigation Indicator */}
            <div className="mt-8 pt-4 border-t border-[#222] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-[11px] font-mono-tech text-[#6E6E6E]">
                NEXT SUBSYSTEM: {pillars[(activePillar + 1) % pillars.length].title}
              </div>

              <button
                onClick={() => setActivePillar((prev) => (prev + 1) % pillars.length)}
                className="inline-flex items-center space-x-2 text-xs font-mono-tech text-[#E7C58E] hover:text-white transition-colors"
              >
                <span>ADVANCE TO PILLAR {pillars[(activePillar + 1) % pillars.length].num}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

