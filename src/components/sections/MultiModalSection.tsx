import React, { useState } from 'react';
import { Camera, QrCode, Scale, FileText, Database, ShieldCheck, ArrowRight, Check } from 'lucide-react';

export const MultiModalSection: React.FC = () => {
  const [activeModality, setActiveModality] = useState(0);

  const modalities = [
    {
      id: 'vision',
      title: '01. COMPUTER VISION',
      subtitle: 'Spatial Geometry & Component Completeness',
      icon: Camera,
      primaryMetric: '±0.08mm Optical Accuracy',
      details: 'High-resolution industrial cameras capture stereoscopic images across calibrated lighting spectra. Algorithms evaluate cavity filling, mechanical component presence, fastener count, and physical symmetry (LH/RH) within 180ms.',
      specs: [
        { label: 'Camera Sensor', value: 'Sony Pregius S 4K Global Shutter' },
        { label: 'Lighting Array', value: 'High-CRI 4000K Diffuse Ring + Darkfield' },
        { label: 'Neural Backing', value: 'Optimized TensorRT Edge Inference' }
      ]
    },
    {
      id: 'barcode',
      title: '02. QR & 2D MATRIX SCANNING',
      subtitle: 'Direct Part Mark (DPM) Serialization',
      icon: QrCode,
      primaryMetric: '100% Serialization Trace',
      details: 'Decodes laser-etched 2D DataMatrix and QR symbols on metallic castings, etched PCBs, and primary packaging labels. Associates each discrete physical part serial number directly to the shipping carton UID.',
      specs: [
        { label: 'Supported Codes', value: 'DataMatrix ECC 200, QR, Code 128, GS1' },
        { label: 'DPM Support', value: 'Dot-peen, Laser-etched, Thermal Transfer' },
        { label: 'Decode Speed', value: '45ms Multi-Code Simultaneous Read' }
      ]
    },
    {
      id: 'weight',
      title: '03. WEIGHT VERIFICATION',
      subtitle: 'Gravimetric Mass Poka-Yoke Secondary Check',
      icon: Scale,
      primaryMetric: '±0.2g High-Precision Load Cell',
      details: 'Embedded load cell platforms beneath the packing jig conduct continuous mass verification. Detects missing lightweight parts (such as small fasteners, O-rings, or instruction booklets) that may otherwise be optically occluded.',
      specs: [
        { label: 'Load Cell Rating', value: 'Industrial IP69K OIML-Approved' },
        { label: 'Tare Stabilization', value: 'Automatic Dynamic Conveyor Tare' },
        { label: 'Mass Thresholds', value: 'User-Configurable Per SKU Packaging BOM' }
      ]
    },
    {
      id: 'label',
      title: '04. LABEL RECOGNITION',
      subtitle: 'OCR & Regulatory Export Compliance',
      icon: FileText,
      primaryMetric: '99.9% OCR Character Reliability',
      details: 'Validates carton shipping labels, hazardous material designations, destination country markings, and custom customer barcode formats before the container transitions to the automated outbound line.',
      specs: [
        { label: 'OCR Engine', value: 'Industrial Neural Character Reader' },
        { label: 'Validation Fields', value: 'Part Rev, Lot Code, Country of Origin' },
        { label: 'Standards Support', value: 'AIAG B-10, VDA 4902, ODETTE' }
      ]
    },
    {
      id: 'spec',
      title: '05. DIGITAL SPECIFICATION ENGINE',
      subtitle: 'Live ERP / MES Bi-Directional Synchronizer',
      icon: Database,
      primaryMetric: 'Real-time SAP / Siemens Link',
      details: 'Connects to plant MES and enterprise ERP systems to ingest the live production schedule. Any engineering change order (ECO) or revision update instantly updates the packing verification tolerances with zero line stoppage.',
      specs: [
        { label: 'Protocol Support', value: 'OPC-UA, MQTT Sparkplug B, REST API' },
        { label: 'ERP Connectors', value: 'SAP S/4HANA, Siemens Opcenter, Plex' },
        { label: 'Sync Latency', value: '< 25ms Manifest Retrieval' }
      ]
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#080808] border-t border-[#292929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-[10px] font-mono-tech tracking-[0.2em] text-[#E7C58E] uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-[#E7C58E]" />
            <span>SECTION 05 — SENSOR FUSION ARCHITECTURE</span>
          </div>

          <h2 className="font-michroma text-2xl sm:text-4xl md:text-5xl tracking-[0.08em] leading-tight text-white uppercase max-w-4xl">
            MORE THAN JUST A CAMERA.<br />
            <span className="text-[#E7C58E]">MULTI-LAYERED DEFENSE.</span>
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-[#A3A3A3] font-sans max-w-2xl leading-relaxed">
            Single-sensor inspection leaves critical blind spots. SmartPack AI integrates optical inspection, gravimetric weighing, serialization decoding, and ERP specification synchronization into a unified decision matrix.
          </p>
        </div>

        {/* Multi-Modal Interactive Schematic Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Modality Navigation Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {modalities.map((item, idx) => {
              const isSelected = activeModality === idx;
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveModality(idx)}
                  className={`p-4 sm:p-5 border cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? 'border-[#E7C58E] bg-[#121212] shadow-gold-subtle'
                      : 'border-[#1E1E1E] hover:border-[#333] bg-[#0c0c0c]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 border ${isSelected ? 'border-[#E7C58E] text-[#E7C58E]' : 'border-[#292929] text-[#666]'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-michroma text-xs sm:text-sm text-white">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-[#A3A3A3] font-sans">
                          {item.subtitle}
                        </div>
                      </div>
                    </div>

                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-[#E7C58E] translate-x-1' : 'text-[#333]'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Technical Sensor Deep-Dive (7 cols) */}
          <div className="lg:col-span-7 border border-[#292929] bg-[#0f0f0f] p-6 sm:p-8 gold-corner-bracket">
            
            {/* Header info */}
            <div className="flex items-center justify-between pb-4 border-b border-[#222]">
              <span className="font-mono-tech text-xs text-[#E7C58E] uppercase tracking-wider">
                {modalities[activeModality].primaryMetric}
              </span>
              <span className="text-[10px] font-mono-tech text-[#6E6E6E] uppercase">
                POKA-YOKE LAYER 0{activeModality + 1}
              </span>
            </div>

            <h3 className="font-michroma text-xl sm:text-2xl text-white mt-6 uppercase">
              {modalities[activeModality].title}
            </h3>
            
            <p className="text-xs sm:text-sm text-[#E7C58E] font-mono-tech mt-1">
              {modalities[activeModality].subtitle}
            </p>

            <p className="text-sm text-[#C5C5C5] font-sans leading-relaxed mt-4">
              {modalities[activeModality].details}
            </p>

            {/* Technical Sub-Specs Table */}
            <div className="mt-8 border border-[#222] bg-[#080808] p-5">
              <div className="text-[10px] font-mono-tech text-[#6E6E6E] tracking-widest uppercase mb-3">
                INTEGRATION PROTOCOLS & HARDWARE PARAMETERS
              </div>

              <div className="space-y-3">
                {modalities[activeModality].specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs py-1.5 border-b border-[#161616] last:border-b-0">
                    <span className="font-mono-tech text-[#A3A3A3]">{spec.label}</span>
                    <span className="font-michroma text-white text-[11px] sm:text-xs mt-0.5 sm:mt-0 text-[#E7C58E]">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fusion Diagram Summary */}
            <div className="mt-6 p-4 bg-[#0a0a0a] border border-[#202020] flex items-center justify-between text-xs">
              <span className="text-[#A3A3A3]">
                Multi-Sensor Convergence: All 5 modalities must yield affirmative validation.
              </span>
              <span className="font-mono-tech text-[#E7C58E] shrink-0 ml-4 font-bold">
                100% POKA-YOKE
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

