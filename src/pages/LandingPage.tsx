import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { HeroSection } from '../components/sections/HeroSection';
import { TheProblemSection } from '../components/sections/TheProblemSection';
import { SolutionSection } from '../components/sections/SolutionSection';
import { IntelligentInspectionSection } from '../components/sections/IntelligentInspectionSection';
import { MultiModalSection } from '../components/sections/MultiModalSection';
import { DecisionEngineSection } from '../components/sections/DecisionEngineSection';
import { DigitalDispatchGateSection } from '../components/sections/DigitalDispatchGateSection';
import { TraceabilitySection } from '../components/sections/TraceabilitySection';
import { FinalCtaSection } from '../components/sections/FinalCtaSection';
import { Footer } from '../components/layout/Footer';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col selection:bg-[#E7C58E] selection:text-[#050505]">
      {/* Precision Top Navbar */}
      <Navbar />

      {/* Main Master Sections */}
      <main className="flex-1">
        {/* Section 01 — Hero */}
        <HeroSection />

        {/* Section 02 — The Problem */}
        <TheProblemSection />

        {/* Section 03 — Our Solution */}
        <SolutionSection />

        {/* Section 04 — Intelligent Inspection */}
        <IntelligentInspectionSection />

        {/* Section 05 — Multi-Modal Verification */}
        <MultiModalSection />

        {/* Section 06 — Intelligent Decision Engine */}
        <DecisionEngineSection />

        {/* Section 07 — Digital Dispatch Gate */}
        <DigitalDispatchGateSection />

        {/* Section 08 — Traceability */}
        <TraceabilitySection />

        {/* Section 09 — Final Call to Action */}
        <FinalCtaSection />
      </main>

      {/* Section 10 — Footer */}
      <Footer />
    </div>
  );
};

