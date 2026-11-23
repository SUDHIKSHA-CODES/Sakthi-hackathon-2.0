import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, Cpu, Play, CheckCircle2, AlertTriangle, Crosshair, Sparkles } from 'lucide-react';
import { INDUSTRIAL_IMAGES } from '../../data/mockData';

export const HeroSection: React.FC = () => {
  const [activeHudTab, setActiveHudTab] = useState<'normal' | 'defect'>('normal');
  const [telemetryTime, setTelemetryTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTelemetryTime(now.toISOString().slice(11, 19) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen bg-[#050505] flex flex-col justify-between pt-28 pb-12 overflow-hidden">
      
      {/* Background Industrial Ambience & Vignette Gradients */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
      <div className="absolute inset-0 bg-industrial-grid opacity-40 pointer-events-none" />
      
      {/* Subtle Golden ambient back-glow in center-top */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#E7C58E]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Hero Header Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-4 sm:mt-8">
        
        {/* Sub-tagline capsule */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 mb-6 sm:mb-8 border border-[#E7C58E]/40 bg-[#101010]/80 rounded-full backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E7C58E] animate-pulse" />
          <span className="font-mono-tech text-[10px] sm:text-[11px] tracking-[0.2em] text-[#E7C58E] uppercase">
            INDUSTRIAL POKA-YOKE OPTICAL INTERLOCK
          </span>
        </div>

        {/* Primary Geometric Headline */}
        <h1 className="font-michroma tracking-[0.14em] sm:tracking-[0.18em] leading-[1.08] sm:leading-[1.12] mb-5 sm:mb-6 select-none">
          <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#E7C58E] drop-shadow-[0_4px_24px_rgba(231,197,142,0.25)]">
            INTELLIGENT
          </span>
          <span className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-medium mt-1 sm:mt-2">
            PACKING VERIFICATION
          </span>
        </h1>

        {/* Supporting Tagline */}
        <p className="font-sans text-xs sm:text-sm md:text-base tracking-[0.25em] text-[#A3A3A3] font-medium uppercase max-w-3xl mx-auto mb-6">
          PRECISION ENGINEERED. INTELLIGENTLY VERIFIED.
        </p>

        {/* Thin Outlined Capsule */}
        <div className="inline-block border border-[#E7C58E]/30 bg-[#101010]/60 px-5 sm:px-7 py-2 sm:py-2.5 backdrop-blur-sm mb-8 sm:mb-10">
          <p className="font-sans text-xs sm:text-[13px] tracking-[0.12em] text-[#E7C58E] font-normal">
            Preventing Errors. Protecting Every Shipment.
          </p>
        </div>

        {/* Hero Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          <Link
            to="/platform"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 bg-[#E7C58E] hover:bg-[#F3DCB1] text-[#050505] font-sans font-semibold text-xs tracking-[0.15em] uppercase transition-all duration-300 shadow-gold-subtle hover:shadow-gold-glow"
          >
            <Cpu className="w-4 h-4 text-[#050505]" />
            <span>ACCESS PLATFORM</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <a
            href="#solution"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 border border-[#292929] hover:border-[#E7C58E]/50 bg-[#101010]/90 text-white font-sans text-xs tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#141414]"
          >
            <span>SYSTEM SPECIFICATIONS</span>
          </a>
        </div>
      </div>

      {/* Hero Visual Composition: Cinematic Industrial Inspection Photograph with Overlay HUD */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-2">
        <div className="relative border border-[#292929] bg-[#0a0a0a] shadow-2xl overflow-hidden gold-corner-bracket">
          
          {/* Top Industrial Workstation Telemetry Bar */}
          <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 bg-[#101010] border-b border-[#292929] text-[10px] sm:text-[11px] font-mono-tech text-[#A3A3A3]">
            <div className="flex items-center space-x-3 sm:space-x-5">
              <span className="flex items-center space-x-1.5 text-[#E7C58E]">
                <span className="w-2 h-2 rounded-full bg-[#E7C58E] animate-ping" />
                <span className="font-semibold">CAM-OPT-01 / 4K INDUSTRIAL</span>
              </span>
              <span className="hidden md:inline text-[#6E6E6E]">|</span>
              <span className="hidden md:inline text-[#A3A3A3]">EXP-BAY-03 POKA-YOKE CELL</span>
            </div>

            <div className="flex items-center space-x-3 sm:space-x-6">
              <span className="text-[#A3A3A3]">LATENCY: <strong className="text-white">12.4ms</strong></span>
              <span className="hidden sm:inline text-[#6E6E6E]">|</span>
              <span className="hidden sm:inline text-[#E7C58E]">{telemetryTime}</span>
            </div>
          </div>

          {/* Industrial Image Container with Gradient Fade Overlay */}
          <div className="relative h-[320px] sm:h-[420px] md:h-[500px] w-full overflow-hidden bg-[#070707]">
            {/* High-Resolution Industrial Inspection Photograph */}
            <img
              src={INDUSTRIAL_IMAGES.heroInspection}
              alt="Industrial precision packing inspection workstation with golden lighting"
              className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.12] transition-transform duration-1000 scale-[1.01]"
            />

            {/* Cinematic Gradient Overlays to seamlessly blend into #050505 */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-transparent to-[#050505]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/50 via-transparent to-[#050505]/50" />
            <div className="absolute inset-0 scanline-overlay pointer-events-none" />

            {/* Industrial Computer Vision HUD Annotations on Image */}
            <div className="absolute inset-0 p-4 sm:p-8 flex flex-col justify-between pointer-events-none">
              
              {/* Upper HUD overlay: Target Spec */}
              <div className="flex justify-between items-start">
                <div className="bg-[#050505]/85 border border-[#E7C58E]/40 p-2.5 sm:p-3 backdrop-blur-md max-w-[240px] sm:max-w-xs">
                  <div className="text-[9px] font-mono-tech tracking-wider text-[#E7C58E] uppercase">
                    ACTIVE BOM SPECIFICATION
                  </div>
                  <div className="text-xs sm:text-sm font-michroma text-white tracking-wide mt-0.5">
                    SPEC-EXP-4409-DE
                  </div>
                  <div className="text-[10px] font-mono-tech text-[#A3A3A3] mt-1 flex justify-between">
                    <span>CAVITIES: 4 / 4</span>
                    <span className="text-[#E7C58E]">TOL: ±0.15mm</span>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="bg-[#050505]/85 border border-[#E7C58E] px-3 py-1.5 backdrop-blur-md flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-[#E7C58E] animate-pulse" />
                  <span className="text-[10px] sm:text-xs font-mono-tech tracking-widest text-[#E7C58E] uppercase font-bold">
                    POKA-YOKE ARMED
                  </span>
                </div>
              </div>

              {/* Center Vision Target Bounding Box */}
              <div className="relative mx-auto w-48 sm:w-72 h-36 sm:h-48 border border-[#E7C58E]/80 border-dashed rounded-none flex flex-col justify-between p-2 shadow-gold-subtle">
                <div className="flex justify-between items-center text-[9px] font-mono-tech text-[#E7C58E] bg-[#050505]/90 px-1.5 py-0.5 self-start">
                  <span>DETECT: LH_KNUCKLE_HUB</span>
                  <span className="ml-2 font-bold text-white">99.8% CONF</span>
                </div>

                <div className="self-center">
                  <Crosshair className="w-8 h-8 text-[#E7C58E]/60 animate-spin" style={{ animationDuration: '20s' }} />
                </div>

                <div className="flex justify-between items-center text-[9px] font-mono-tech text-[#A3A3A3] bg-[#050505]/90 px-1.5 py-0.5">
                  <span>ORIENTATION: 0.0°</span>
                  <span className="text-[#E7C58E]">PASS</span>
                </div>
              </div>

              {/* Lower HUD Overlay: Modality Sensor Inputs */}
              <div className="flex flex-wrap items-end justify-between gap-2">
                <div className="flex flex-wrap gap-2 text-[9px] sm:text-[10px] font-mono-tech">
                  <span className="bg-[#050505]/90 border border-[#292929] px-2.5 py-1 text-white">
                    OPTICAL: <strong className="text-[#E7C58E]">MATCHED</strong>
                  </span>
                  <span className="bg-[#050505]/90 border border-[#292929] px-2.5 py-1 text-white">
                    WEIGHT: <strong className="text-[#E7C58E]">4.82kg (±0.0g)</strong>
                  </span>
                  <span className="bg-[#050505]/90 border border-[#292929] px-2.5 py-1 text-white">
                    2D MATRIX: <strong className="text-[#E7C58E]">VERIFIED</strong>
                  </span>
                </div>

                <div className="bg-[#050505]/90 border border-[#E7C58E]/50 px-3 py-1 text-[10px] font-mono-tech text-[#E7C58E]">
                  DISPATCH GATE: <strong className="text-white">INTERLOCK CLEARED</strong>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Live Telemetry Metrics Ticker */}
          <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-[#292929] bg-[#0c0c0c] divide-x divide-[#292929]">
            <div className="p-3.5 sm:p-5 text-center">
              <div className="font-michroma text-lg sm:text-2xl text-[#E7C58E]">99.98%</div>
              <div className="font-mono-tech text-[10px] tracking-wider text-[#A3A3A3] uppercase mt-1">
                VERIFICATION ACCURACY
              </div>
            </div>

            <div className="p-3.5 sm:p-5 text-center">
              <div className="font-michroma text-lg sm:text-2xl text-white">0.00%</div>
              <div className="font-mono-tech text-[10px] tracking-wider text-[#A3A3A3] uppercase mt-1">
                FALSE DISPATCH ESCAPES
              </div>
            </div>

            <div className="p-3.5 sm:p-5 text-center">
              <div className="font-michroma text-lg sm:text-2xl text-[#E7C58E]">&lt;180ms</div>
              <div className="font-mono-tech text-[10px] tracking-wider text-[#A3A3A3] uppercase mt-1">
                INSPECTION CYCLE TIME
              </div>
            </div>

            <div className="p-3.5 sm:p-5 text-center">
              <div className="font-michroma text-lg sm:text-2xl text-white">2.4M+</div>
              <div className="font-mono-tech text-[10px] tracking-wider text-[#A3A3A3] uppercase mt-1">
                EXPORT BOXES AUDITED
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

