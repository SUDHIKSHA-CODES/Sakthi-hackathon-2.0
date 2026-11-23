import React, { useState } from 'react';
import { INSPECTION_SCENARIOS, INDUSTRIAL_IMAGES } from '../../data/mockData';
import { CheckCircle2, XCircle, AlertTriangle, Crosshair, QrCode, RotateCw, Layers, ShieldCheck } from 'lucide-react';

export const IntelligentInspectionSection: React.FC = () => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const currentScenario = INSPECTION_SCENARIOS[selectedScenarioIndex];

  return (
    <section id="technology" className="relative py-24 sm:py-32 bg-[#050505] border-t border-[#292929]">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-industrial-grid opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-[10px] font-mono-tech tracking-[0.2em] text-[#E7C58E] uppercase mb-4">
              <span className="w-1.5 h-1.5 bg-[#E7C58E]" />
              <span>SECTION 04 — COMPUTER VISION POKA-YOKE INTERFACE</span>
            </div>

            <h2 className="font-michroma text-2xl sm:text-4xl md:text-5xl tracking-[0.08em] leading-tight text-white uppercase">
              SEE EVERY COMPONENT.<br />
              <span className="text-[#E7C58E]">VERIFY EVERY DETAIL.</span>
            </h2>
            
            <p className="mt-3 text-sm sm:text-base text-[#A3A3A3] font-sans max-w-xl">
              Sub-millimeter optical verification meets deep chirality neural networks. Every cavity is scored against the active digital bill of materials before dispatch release.
            </p>
          </div>

          {/* Inspection Mode Toggles */}
          <div className="flex flex-col space-y-2">
            <span className="text-[10px] font-mono-tech text-[#6E6E6E] uppercase tracking-wider">
              INTERACTIVE VISION SIMULATOR:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {INSPECTION_SCENARIOS.map((sc, idx) => (
                <button
                  key={sc.id}
                  onClick={() => setSelectedScenarioIndex(idx)}
                  className={`px-3 py-1.5 text-xs font-mono-tech tracking-wider border transition-all ${
                    selectedScenarioIndex === idx
                      ? 'border-[#E7C58E] bg-[#E7C58E] text-[#050505] font-semibold'
                      : 'border-[#292929] bg-[#101010] text-[#A3A3A3] hover:border-[#444] hover:text-white'
                  }`}
                >
                  SCENARIO 0{idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Computer Vision Workstation Viewport */}
        <div className="border border-[#292929] bg-[#0c0c0c] gold-corner-bracket shadow-2xl overflow-hidden">
          
          {/* Top Interface Bar */}
          <div className="px-4 sm:px-6 py-3 bg-[#121212] border-b border-[#292929] flex flex-wrap items-center justify-between gap-3 text-xs font-mono-tech">
            <div className="flex items-center space-x-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E7C58E] animate-pulse" />
              <span className="text-white font-semibold">{currentScenario.title}</span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1.5">
                <span className="text-[#6E6E6E]">STATUS:</span>
                <span
                  className="font-bold px-2 py-0.5"
                  style={{
                    backgroundColor: currentScenario.status === 'PASS' ? 'rgba(231,197,142,0.15)' : currentScenario.status === 'FAIL' ? 'rgba(239,68,68,0.15)' : 'rgba(245,158,11,0.15)',
                    color: currentScenario.statusColor,
                    border: `1px solid ${currentScenario.statusColor}`
                  }}
                >
                  {currentScenario.status}
                </span>
              </div>

              <div className="hidden sm:flex items-center space-x-1.5">
                <span className="text-[#6E6E6E]">VISION CONFIDENCE:</span>
                <span className="text-white font-bold">{currentScenario.totalConfidence}%</span>
              </div>
            </div>
          </div>

          {/* Main Inspection Canvas & Telemetry HUD */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Vision HUD Workspace (8 cols) */}
            <div className="lg:col-span-8 relative min-h-[380px] sm:min-h-[460px] bg-[#070707] flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-[#292929]">
              
              {/* Background Workstation Photograph with Dark/Gold Contrast */}
              <img
                src={INDUSTRIAL_IMAGES.precisionMachining}
                alt="Precision mechanical assembly inspection bed"
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.6] contrast-[1.25]"
              />

              {/* Seamless Dark Industrial Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-[#0c0c0c]/80" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c]/60 via-transparent to-[#0c0c0c]/60" />
              <div className="absolute inset-0 scanline-overlay pointer-events-none" />

              {/* Optical Reticle Crosshair in Center */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 border border-[#E7C58E]/20 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 border border-[#E7C58E]/30 rounded-full" />
                </div>
              </div>

              {/* Active Inspection Bounding Boxes Rendered Over Components */}
              <div className="absolute inset-0 p-4 sm:p-6">
                {currentScenario.activeComponents.map((comp) => {
                  const isFail = comp.status === 'fail';
                  const isReview = comp.status === 'review';
                  const borderColor = isFail ? '#EF4444' : isReview ? '#F59E0B' : '#E7C58E';
                  const bgTagColor = isFail ? 'bg-[#EF4444]' : isReview ? 'bg-[#F59E0B]' : 'bg-[#E7C58E]';

                  return (
                    <div
                      key={comp.id}
                      style={{
                        position: 'absolute',
                        left: `${comp.boundingBox.x}%`,
                        top: `${comp.boundingBox.y}%`,
                        width: `${comp.boundingBox.width}%`,
                        height: `${comp.boundingBox.height}%`,
                        border: `1.5px solid ${borderColor}`,
                        boxShadow: `0 0 15px ${borderColor}33`
                      }}
                      className="transition-all duration-500 backdrop-blur-[1px] flex flex-col justify-between p-1.5"
                    >
                      {/* Bounding Box Label Tag */}
                      <div className="flex items-center justify-between text-[9px] font-mono-tech">
                        <span className={`${bgTagColor} text-[#050505] font-bold px-1 py-0.2 tracking-wider truncate`}>
                          {comp.boundingBox.label}
                        </span>
                        <span className="bg-[#050505]/90 text-white px-1 border border-[#222]">
                          {comp.confidence}%
                        </span>
                      </div>

                      {/* Corner Target Markers */}
                      <div className="flex justify-between items-end text-[8px] font-mono-tech text-[#A3A3A3] bg-[#050505]/80 px-1 py-0.5">
                        <span>{comp.partNumber}</span>
                        <span className={isFail ? 'text-[#EF4444] font-bold' : isReview ? 'text-[#F59E0B]' : 'text-[#E7C58E]'}>
                          {comp.detectedQty}/{comp.expectedQty}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* On-Screen Anomaly Alert Banner (if error present) */}
              {currentScenario.anomalyTitle && (
                <div className="absolute bottom-4 left-4 right-4 bg-[#050505]/95 border border-[#EF4444] p-3.5 backdrop-blur-md">
                  <div className="flex items-start space-x-3">
                    <XCircle className="w-5 h-5 text-[#EF4444] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-mono-tech tracking-wider text-[#EF4444] font-bold uppercase">
                        {currentScenario.anomalyTitle}
                      </div>
                      <div className="text-xs text-[#E0E0E0] mt-0.5">
                        {currentScenario.anomalyDetail}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Telemetry & Detailed Spec Breakdown (4 cols) */}
            <div className="lg:col-span-4 p-5 sm:p-6 bg-[#0e0e0e] flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono-tech text-[#E7C58E] tracking-widest uppercase pb-2 border-b border-[#222]">
                  COMPONENT VERIFICATION MANIFEST
                </div>

                {/* Component List */}
                <div className="mt-4 space-y-3">
                  {currentScenario.activeComponents.map((comp) => {
                    const isPass = comp.status === 'pass';
                    const isFail = comp.status === 'fail';

                    return (
                      <div
                        key={comp.id}
                        className={`p-3 border text-xs ${
                          isFail
                            ? 'border-[#EF4444]/60 bg-[#EF4444]/5'
                            : comp.status === 'review'
                            ? 'border-[#F59E0B]/60 bg-[#F59E0B]/5'
                            : 'border-[#222] bg-[#121212]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-michroma text-white text-[11px]">{comp.name}</span>
                          {isPass ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#E7C58E]" />
                          ) : isFail ? (
                            <XCircle className="w-3.5 h-3.5 text-[#EF4444]" />
                          ) : (
                            <AlertTriangle className="w-3.5 h-3.5 text-[#F59E0B]" />
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-1 text-[10px] font-mono-tech text-[#A3A3A3] mt-2 pt-2 border-t border-[#1c1c1c]">
                          <div>QTY: <strong className={isFail ? 'text-[#EF4444]' : 'text-white'}>{comp.detectedQty} / {comp.expectedQty}</strong></div>
                          <div>DELTA: <strong className="text-white">{comp.orientationDeltaDeg}°</strong></div>
                          <div>CHIRALITY: <strong className={comp.detectedSymmetry !== comp.symmetryType ? 'text-[#EF4444]' : 'text-white'}>{comp.detectedSymmetry}</strong></div>
                          <div>BARCODE: <strong className="text-[#E7C58E]">{comp.barcode.slice(0, 8)}</strong></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Interlock Result */}
              <div className="mt-6 pt-4 border-t border-[#222]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono-tech text-[#6E6E6E] uppercase">CONVEYOR DISPATCH GATE</span>
                  <span className={`text-[10px] font-mono-tech font-bold ${
                    currentScenario.dispatchPermitted ? 'text-[#E7C58E]' : 'text-[#EF4444]'
                  }`}>
                    {currentScenario.dispatchPermitted ? 'UNLOCKED / CLEARED' : 'LOCKED / INTERLOCKED'}
                  </span>
                </div>
                
                <div className={`p-2.5 text-center text-xs font-mono-tech font-semibold tracking-wider uppercase border ${
                  currentScenario.dispatchPermitted
                    ? 'border-[#E7C58E] bg-[#E7C58E]/10 text-[#E7C58E]'
                    : 'border-[#EF4444] bg-[#EF4444]/10 text-[#EF4444]'
                }`}>
                  {currentScenario.dispatchPermitted ? '✓ READY FOR CONTAINER SEAL' : '✕ DISPATCH HALTED BY POKA-YOKE'}
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Features Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[#292929] bg-[#101010] divide-x divide-[#292929] text-xs">
            <div className="p-4 flex items-center space-x-3">
              <Crosshair className="w-4 h-4 text-[#E7C58E] shrink-0" />
              <div>
                <div className="font-michroma text-[11px] text-white">COMPONENT DETECTION</div>
                <div className="text-[10px] text-[#A3A3A3]">Sub-millimeter edge segmentation</div>
              </div>
            </div>

            <div className="p-4 flex items-center space-x-3">
              <Layers className="w-4 h-4 text-[#E7C58E] shrink-0" />
              <div>
                <div className="font-michroma text-[11px] text-white">LH / RH CLASSIFIER</div>
                <div className="text-[10px] text-[#A3A3A3]">Asymmetric mirror verification</div>
              </div>
            </div>

            <div className="p-4 flex items-center space-x-3">
              <RotateCw className="w-4 h-4 text-[#E7C58E] shrink-0" />
              <div>
                <div className="font-michroma text-[11px] text-white">ORIENTATION SCORING</div>
                <div className="text-[10px] text-[#A3A3A3]">±1.5° rotational tolerance</div>
              </div>
            </div>

            <div className="p-4 flex items-center space-x-3">
              <QrCode className="w-4 h-4 text-[#E7C58E] shrink-0" />
              <div>
                <div className="font-michroma text-[11px] text-white">BARCODE & 2D MATRIX</div>
                <div className="text-[10px] text-[#A3A3A3]">Direct Part Mark (DPM) OCR</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

