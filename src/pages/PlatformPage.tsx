import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Cpu,
  Camera,
  Layers,
  RotateCw,
  Scale,
  Lock,
  Unlock,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RefreshCw,
  ArrowLeft,
  Terminal,
  Crosshair,
  Printer,
  Sparkles
} from 'lucide-react';
import { INSPECTION_SCENARIOS, INDUSTRIAL_IMAGES } from '../data/mockData';

export const PlatformPage: React.FC = () => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [activeCameraView, setActiveCameraView] = useState<'top' | 'angle' | 'dpm'>('top');
  const [overrideGranted, setOverrideGranted] = useState(false);

  const scenario = INSPECTION_SCENARIOS[selectedScenarioIndex];

  const handleTriggerScan = () => {
    setIsScanning(true);
    setOverrideGranted(false);
    setTimeout(() => {
      setIsScanning(false);
    }, 800);
  };

  const isPass = scenario.status === 'PASS' || overrideGranted;

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-[#E7C58E] selection:text-[#050505]">
      
      {/* Top Workstation HMI System Bar */}
      <header className="bg-[#0a0a0a] border-b border-[#292929] px-4 sm:px-6 py-3 flex items-center justify-between text-xs font-mono-tech sticky top-0 z-40">
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="flex items-center space-x-2 text-[#A3A3A3] hover:text-[#E7C58E] transition-colors pr-3 border-r border-[#222]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">RETURN TO WEBSITE</span>
          </Link>

          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#E7C58E] animate-pulse" />
            <span className="text-white font-bold">WORKSTATION: WS-EXPORT-01</span>
            <span className="hidden md:inline text-[#666]">|</span>
            <span className="hidden md:inline text-[#A3A3A3]">LINE A: EXPORT ASSEMBLY</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2 text-[#A3A3A3]">
            <span>OPERATOR:</span>
            <span className="text-white font-bold">M. BECKER (OP-4412)</span>
          </div>

          <div className="px-2.5 py-1 bg-[#141414] border border-[#333] text-[#E7C58E]">
            SAP MANIFEST: <strong>ORD-DE-8910</strong>
          </div>
        </div>
      </header>

      {/* Main Workstation Screen */}
      <main className="flex-1 p-4 sm:p-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Live Inspection Viewport & Camera Feeds (8 cols) */}
        <div className="lg:col-span-8 flex flex-col space-y-4">
          
          {/* Viewport Card */}
          <div className="border border-[#292929] bg-[#0c0c0c] gold-corner-bracket overflow-hidden flex flex-col">
            
            {/* Viewport Control Bar */}
            <div className="px-4 py-2.5 bg-[#121212] border-b border-[#292929] flex items-center justify-between text-xs font-mono-tech">
              <div className="flex items-center space-x-2">
                <Camera className="w-3.5 h-3.5 text-[#E7C58E]" />
                <span className="text-white font-semibold">LIVE OPTICAL WORKSPACE</span>
                <span className="text-[#666]">|</span>
                <span className="text-[#A3A3A3]">4096x3072 @ 60 FPS</span>
              </div>

              {/* Camera Angle Selector */}
              <div className="flex items-center space-x-1">
                {(['top', 'angle', 'dpm'] as const).map((cam) => (
                  <button
                    key={cam}
                    onClick={() => setActiveCameraView(cam)}
                    className={`px-2.5 py-1 text-[10px] uppercase font-mono-tech border ${
                      activeCameraView === cam
                        ? 'border-[#E7C58E] bg-[#E7C58E]/15 text-[#E7C58E]'
                        : 'border-[#222] text-[#666] hover:text-white'
                    }`}
                  >
                    {cam === 'top' ? 'Top 4K' : cam === 'angle' ? '45° 3D Profile' : 'DPM Macro'}
                  </button>
                ))}
              </div>
            </div>

            {/* Industrial Camera Viewport with Overlaid HUD */}
            <div className="relative h-[340px] sm:h-[420px] bg-[#050505] overflow-hidden flex items-center justify-center">
              <img
                src={
                  activeCameraView === 'top'
                    ? INDUSTRIAL_IMAGES.precisionMachining
                    : activeCameraView === 'angle'
                    ? INDUSTRIAL_IMAGES.roboticArmGold
                    : INDUSTRIAL_IMAGES.macroGearGold
                }
                alt="Active inspection target assembly"
                className={`w-full h-full object-cover filter brightness-[0.7] contrast-[1.2] transition-opacity duration-300 ${
                  isScanning ? 'opacity-40' : 'opacity-100'
                }`}
              />

              {/* Scanline & Grid Effect */}
              <div className="absolute inset-0 scanline-overlay pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-[#0c0c0c]/60 pointer-events-none" />

              {/* Laser Scanning Animation Sweep */}
              {isScanning && (
                <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">
                  <div className="w-full h-1 bg-[#E7C58E] shadow-[0_0_20px_#E7C58E] animate-pulse" />
                  <div className="font-mono-tech text-xs tracking-widest text-[#E7C58E] mt-3 bg-[#050505]/90 px-3 py-1 border border-[#E7C58E]">
                    RE-ACQUIRING MULTI-SPECTRAL 3D SURFACE...
                  </div>
                </div>
              )}

              {/* Real-time Bounding Boxes Over Components */}
              {!isScanning && (
                <div className="absolute inset-0 p-4 pointer-events-none">
                  {scenario.activeComponents.map((comp) => {
                    const isCompFail = comp.status === 'fail' && !overrideGranted;
                    const isCompReview = comp.status === 'review' && !overrideGranted;
                    const color = isCompFail ? '#EF4444' : isCompReview ? '#F59E0B' : '#E7C58E';

                    return (
                      <div
                        key={comp.id}
                        style={{
                          position: 'absolute',
                          left: `${comp.boundingBox.x}%`,
                          top: `${comp.boundingBox.y}%`,
                          width: `${comp.boundingBox.width}%`,
                          height: `${comp.boundingBox.height}%`,
                          border: `1.5px solid ${color}`,
                          boxShadow: `0 0 12px ${color}33`
                        }}
                        className="transition-all duration-300 flex flex-col justify-between p-1"
                      >
                        <div className="flex items-center justify-between text-[8px] font-mono-tech">
                          <span
                            className="text-[#050505] font-bold px-1"
                            style={{ backgroundColor: color }}
                          >
                            {isCompFail ? 'REJECT: ' : ''}{comp.name.slice(0, 14)}
                          </span>
                          <span className="bg-[#050505]/90 text-white px-1 border border-[#222]">
                            {comp.confidence}%
                          </span>
                        </div>

                        <div className="text-[8px] font-mono-tech text-white bg-[#050505]/80 px-1 py-0.5 self-start">
                          QTY: {comp.detectedQty}/{comp.expectedQty} | {comp.detectedSymmetry}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Status Alert Overlay in Viewport */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="bg-[#050505]/90 border border-[#292929] px-3 py-1.5 text-xs font-mono-tech">
                  <span className="text-[#666]">ACTIVE SPEC: </span>
                  <span className="text-white font-bold">SPEC-EXP-4409-DE</span>
                </div>

                <div
                  className={`px-3 py-1.5 text-xs font-mono-tech font-bold uppercase border backdrop-blur-md ${
                    isPass
                      ? 'border-[#E7C58E] bg-[#E7C58E]/15 text-[#E7C58E]'
                      : scenario.status === 'FAIL'
                      ? 'border-[#EF4444] bg-[#EF4444]/20 text-[#EF4444]'
                      : 'border-[#F59E0B] bg-[#F59E0B]/20 text-[#F59E0B]'
                  }`}
                >
                  {isPass ? 'PASS — READY FOR PACK SEAL' : scenario.status}
                </div>
              </div>
            </div>

            {/* Bottom Viewport Control Action Bar */}
            <div className="p-4 bg-[#101010] border-t border-[#292929] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleTriggerScan}
                  disabled={isScanning}
                  className="px-4 py-2 bg-[#E7C58E] hover:bg-[#F3DCB1] text-[#050505] text-xs font-mono-tech font-bold tracking-wider uppercase transition-colors flex items-center space-x-1.5 disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
                  <span>{isScanning ? 'SCANNING...' : 'TRIGGER RE-INSPECTION'}</span>
                </button>

                {scenario.status === 'REVIEW' && !overrideGranted && (
                  <button
                    onClick={() => setOverrideGranted(true)}
                    className="px-3 py-2 border border-[#F59E0B] bg-[#F59E0B]/10 text-[#F59E0B] hover:bg-[#F59E0B]/20 text-xs font-mono-tech transition-colors"
                  >
                    SUPERVISOR SIGN-OFF OVERRIDE
                  </button>
                )}
              </div>

              <div className="text-xs font-mono-tech text-[#A3A3A3]">
                CYCLE TIME: <strong className="text-white">1.38s</strong> | GRAVIMETRIC DELTA: <strong className="text-[#E7C58E]">±0.1g</strong>
              </div>
            </div>

          </div>

          {/* Fault Simulation Test Matrix */}
          <div className="border border-[#292929] bg-[#0c0c0c] p-4">
            <div className="text-[10px] font-mono-tech text-[#6E6E6E] uppercase tracking-wider mb-2">
              SIMULATE ASSEMBLY DEFECTS & POKA-YOKE TRAPS:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {INSPECTION_SCENARIOS.map((sc, idx) => (
                <button
                  key={sc.id}
                  onClick={() => {
                    setSelectedScenarioIndex(idx);
                    setOverrideGranted(false);
                  }}
                  className={`p-2.5 text-left border text-xs font-mono-tech transition-all ${
                    selectedScenarioIndex === idx
                      ? 'border-[#E7C58E] bg-[#141414] text-white shadow-gold-subtle'
                      : 'border-[#1f1f1f] hover:border-[#333] bg-[#090909] text-[#A3A3A3]'
                  }`}
                >
                  <div className="text-[9px] text-[#666]">SCENARIO 0{idx + 1}</div>
                  <div className="font-semibold text-[11px] truncate mt-0.5">{sc.title.split(':')[1] || sc.title}</div>
                  <div
                    className="text-[9px] font-bold mt-1"
                    style={{ color: sc.statusColor }}
                  >
                    STATUS: {sc.status}
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Active BOM Checklist & Gate State (4 cols) */}
        <div className="lg:col-span-4 flex flex-col space-y-4">
          
          {/* Dispatch Gate Interlock Card */}
          <div className="border border-[#292929] bg-[#0c0c0c] p-5 gold-corner-bracket">
            <div className="text-[10px] font-mono-tech text-[#6E6E6E] uppercase tracking-wider mb-3">
              CONVEYOR DISPATCH INTERLOCK
            </div>

            <div className={`p-4 border text-center flex flex-col items-center justify-center ${
              isPass
                ? 'border-[#E7C58E] bg-[#E7C58E]/10'
                : 'border-[#EF4444] bg-[#EF4444]/10'
            }`}>
              <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center mb-2 ${
                isPass
                  ? 'border-[#E7C58E] text-[#E7C58E]'
                  : 'border-[#EF4444] text-[#EF4444]'
              }`}>
                {isPass ? <Unlock className="w-6 h-6" /> : <Lock className="w-6 h-6" />}
              </div>

              <div className="font-michroma text-base text-white uppercase tracking-wider">
                {isPass ? 'DISPATCH CLEARED' : 'CONVEYOR INTERLOCKED'}
              </div>

              <div className={`text-[11px] font-mono-tech mt-1 ${isPass ? 'text-[#E7C58E]' : 'text-[#EF4444]'}`}>
                {isPass
                  ? 'Pass token issued. Outbound conveyor running.'
                  : 'Defect detected. Diverter gate locked.'}
              </div>
            </div>

            <div className="mt-3 text-[10px] font-mono-tech text-[#6E6E6E] space-y-1">
              <div className="flex justify-between">
                <span>PLC DIVERTER RELAY:</span>
                <span className={isPass ? 'text-[#E7C58E]' : 'text-[#EF4444]'}>{isPass ? 'HOLD_OFF' : 'ENGAGED'}</span>
              </div>
              <div className="flex justify-between">
                <span>SAP GOODS ISSUE:</span>
                <span className={isPass ? 'text-[#E7C58E]' : 'text-[#EF4444]'}>{isPass ? 'AUTHORIZED' : 'BLOCKED'}</span>
              </div>
            </div>
          </div>

          {/* Active BOM Cavity Checklist */}
          <div className="border border-[#292929] bg-[#0c0c0c] p-5 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#222]">
                <span className="font-mono-tech text-xs text-white uppercase font-bold">
                  BOM VERIFICATION (4 CAVITIES)
                </span>
                <span className="text-[10px] font-mono-tech text-[#E7C58E]">
                  SPEC: PK-9941
                </span>
              </div>

              <div className="mt-4 space-y-3">
                {scenario.activeComponents.map((c) => {
                  const isCompPass = c.status === 'pass' || overrideGranted;
                  const isCompFail = c.status === 'fail' && !overrideGranted;

                  return (
                    <div
                      key={c.id}
                      className={`p-3 border text-xs ${
                        isCompFail
                          ? 'border-[#EF4444]/60 bg-[#EF4444]/5'
                          : !isCompPass
                          ? 'border-[#F59E0B]/60 bg-[#F59E0B]/5'
                          : 'border-[#1e1e1e] bg-[#111111]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-michroma text-[11px] text-white">{c.name}</span>
                        {isCompPass ? (
                          <CheckCircle2 className="w-4 h-4 text-[#E7C58E]" />
                        ) : isCompFail ? (
                          <XCircle className="w-4 h-4 text-[#EF4444]" />
                        ) : (
                          <AlertTriangle className="w-4 h-4 text-[#F59E0B]" />
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-1 text-[10px] font-mono-tech text-[#A3A3A3] mt-2 pt-2 border-t border-[#181818]">
                        <div>PART: <span className="text-white">{c.partNumber}</span></div>
                        <div>QTY: <span className={isCompFail ? 'text-[#EF4444] font-bold' : 'text-white'}>{c.detectedQty}/{c.expectedQty}</span></div>
                        <div>CHIRALITY: <span className="text-white">{c.detectedSymmetry}</span></div>
                        <div>BARCODE: <span className="text-[#E7C58E]">{c.barcode.slice(0, 8)}</span></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Print Label & Audit Record */}
            <div className="mt-6 pt-4 border-t border-[#222]">
              <button
                disabled={!isPass}
                onClick={() => alert('Export Packing Seal Printed for Carton Serial #EXP-DE-2026-9041A')}
                className="w-full py-2.5 px-4 bg-[#161616] hover:bg-[#202020] border border-[#E7C58E]/60 text-[#E7C58E] text-xs font-mono-tech uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors disabled:opacity-40"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>GENERATE CONTAINER SEAL & PASS TOKEN</span>
              </button>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
};

