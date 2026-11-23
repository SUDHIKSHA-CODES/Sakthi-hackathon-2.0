import React, { useState } from 'react';
import { AUDIT_RECORDS, INDUSTRIAL_IMAGES } from '../../data/mockData';
import { Search, ShieldCheck, Download, ExternalLink, Filter, CheckCircle2, XCircle, AlertTriangle, FileCheck } from 'lucide-react';

export const TraceabilitySection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecord, setSelectedRecord] = useState(AUDIT_RECORDS[0]);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const filteredRecords = AUDIT_RECORDS.filter(
    (r) =>
      r.boxSerial.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.destinationCountry.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.operatorName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDownloadCertificate = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section id="traceability" className="relative py-24 sm:py-32 bg-[#050505] border-t border-[#292929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-[10px] font-mono-tech tracking-[0.2em] text-[#E7C58E] uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-[#E7C58E]" />
            <span>SECTION 08 — IMMUTABLE COMPLIANCE LEDGER</span>
          </div>

          <h2 className="font-michroma text-2xl sm:text-4xl md:text-5xl tracking-[0.08em] leading-tight text-white uppercase max-w-4xl">
            EVERY BOX. EVERY CHECK.<br />
            <span className="text-[#E7C58E]">EVERY RECORD.</span>
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-[#A3A3A3] font-sans max-w-2xl leading-relaxed">
            High-precision manufacturing demands forensic traceability. SmartPack AI archives high-resolution raw inspection imagery, gravimetric logs, operator IDs, and cryptographic hashes for complete export transparency.
          </p>
        </div>

        {/* Audit Search & Filter Bar */}
        <div className="border border-[#292929] bg-[#0c0c0c] p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-[#6E6E6E] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by Box Serial, Destination, or Operator..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#121212] border border-[#222] pl-9 pr-4 py-2 text-xs font-mono-tech text-white placeholder-[#555] focus:outline-none focus:border-[#E7C58E]"
            />
          </div>

          <div className="flex items-center space-x-4 text-xs font-mono-tech text-[#A3A3A3]">
            <span>AUDIT RECORDS LOGGED: <strong className="text-white">2,410,982</strong></span>
            <span className="text-[#333]">|</span>
            <span className="text-[#E7C58E]">ISO 9001 / IATF 16949 COMPLIANT</span>
          </div>
        </div>

        {/* Interactive Audit Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Table / Registry List (7 cols) */}
          <div className="lg:col-span-7 border border-[#292929] bg-[#0c0c0c] overflow-hidden">
            <div className="p-4 bg-[#121212] border-b border-[#292929] flex items-center justify-between text-xs font-mono-tech">
              <span className="text-white font-bold">EXPORT CARTON AUDIT REGISTRY</span>
              <span className="text-[#6E6E6E]">DISPLAYING RECENT VERIFICATIONS</span>
            </div>

            <div className="divide-y divide-[#1c1c1c] max-h-[460px] overflow-y-auto">
              {filteredRecords.map((rec) => {
                const isSelected = selectedRecord.id === rec.id;
                const isPass = rec.status === 'PASS';
                const isFail = rec.status === 'FAIL';

                return (
                  <div
                    key={rec.id}
                    onClick={() => setSelectedRecord(rec)}
                    className={`p-4 cursor-pointer transition-colors flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#161616] border-l-2 border-[#E7C58E]'
                        : 'hover:bg-[#101010]'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="mt-0.5">
                        {isPass ? (
                          <CheckCircle2 className="w-4 h-4 text-[#E7C58E]" />
                        ) : isFail ? (
                          <XCircle className="w-4 h-4 text-[#EF4444]" />
                        ) : (
                          <AlertTriangle className="w-4 h-4 text-[#F59E0B]" />
                        )}
                      </div>

                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-michroma text-xs text-white tracking-wide">
                            {rec.boxSerial}
                          </span>
                          <span className="text-xs">{rec.destFlag}</span>
                        </div>
                        <div className="text-[11px] text-[#A3A3A3] font-mono-tech mt-0.5">
                          {rec.destinationCountry} • {rec.timestamp}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <span
                        className={`text-[10px] font-mono-tech font-bold px-2 py-0.5 border ${
                          isPass
                            ? 'text-[#E7C58E] border-[#E7C58E]/40 bg-[#E7C58E]/10'
                            : isFail
                            ? 'text-[#EF4444] border-[#EF4444]/40 bg-[#EF4444]/10'
                            : 'text-[#F59E0B] border-[#F59E0B]/40 bg-[#F59E0B]/10'
                        }`}
                      >
                        {rec.status}
                      </span>
                      <div className="text-[10px] font-mono-tech text-[#6E6E6E] mt-1">
                        {rec.cycleTimeSec}s | {rec.weightDeltaGrams > 0 ? `+${rec.weightDeltaGrams}` : rec.weightDeltaGrams}g
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Detailed Audit Dossier (5 cols) */}
          <div className="lg:col-span-5 border border-[#292929] bg-[#0c0c0c] p-6 flex flex-col justify-between gold-corner-bracket">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#222]">
                <div className="flex items-center space-x-2">
                  <FileCheck className="w-4 h-4 text-[#E7C58E]" />
                  <span className="font-mono-tech text-xs text-[#E7C58E] uppercase tracking-wider">
                    DIGITAL CERTIFICATE DOSSIER
                  </span>
                </div>
                <span className="font-mono-tech text-[10px] text-[#A3A3A3]">
                  {selectedRecord.id}
                </span>
              </div>

              {/* Dossier Header */}
              <div className="mt-4">
                <div className="text-xs text-[#6E6E6E] font-mono-tech">BOX IDENTIFICATION NUMBER:</div>
                <div className="font-michroma text-lg text-white mt-0.5">
                  {selectedRecord.boxSerial}
                </div>
              </div>

              {/* Key Parameters */}
              <div className="mt-5 space-y-2.5 text-xs font-mono-tech bg-[#111] p-4 border border-[#222]">
                <div className="flex justify-between border-b border-[#1c1c1c] pb-1.5">
                  <span className="text-[#A3A3A3]">Export Destination:</span>
                  <span className="text-white">{selectedRecord.destinationCountry} {selectedRecord.destFlag}</span>
                </div>
                <div className="flex justify-between border-b border-[#1c1c1c] pb-1.5">
                  <span className="text-[#A3A3A3]">Inspecting Operator:</span>
                  <span className="text-white">{selectedRecord.operatorName}</span>
                </div>
                <div className="flex justify-between border-b border-[#1c1c1c] pb-1.5">
                  <span className="text-[#A3A3A3]">Workstation Cell:</span>
                  <span className="text-white">{selectedRecord.workstationId}</span>
                </div>
                <div className="flex justify-between border-b border-[#1c1c1c] pb-1.5">
                  <span className="text-[#A3A3A3]">BOM Component Audit:</span>
                  <span className="text-white">{selectedRecord.partCount}</span>
                </div>
                <div className="flex justify-between border-b border-[#1c1c1c] pb-1.5">
                  <span className="text-[#A3A3A3]">Inspection Cycle Time:</span>
                  <span className="text-[#E7C58E]">{selectedRecord.cycleTimeSec} seconds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A3A3A3]">Cryptographic Seal:</span>
                  <span className="text-[#E7C58E] font-mono text-[10px]">{selectedRecord.cryptographicHash}</span>
                </div>
              </div>

              {/* Archived Optical Thumbnail */}
              <div className="mt-5">
                <div className="text-[10px] font-mono-tech text-[#6E6E6E] uppercase mb-1.5">
                  ARCHIVED HIGH-RESOLUTION RAW FRAME
                </div>
                <div className="relative h-28 border border-[#222] bg-[#070707] overflow-hidden">
                  <img
                    src={INDUSTRIAL_IMAGES.macroGearGold}
                    alt="Archived component inspection frame"
                    className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.2]"
                  />
                  <div className="absolute bottom-1 right-2 bg-[#050505]/90 px-2 py-0.5 text-[9px] font-mono-tech text-[#E7C58E]">
                    4096 x 3072 RAW • UNALTERED
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 pt-4 border-t border-[#222]">
              <button
                onClick={handleDownloadCertificate}
                className="w-full py-2.5 px-4 bg-[#141414] hover:bg-[#1a1a1a] border border-[#E7C58E]/60 hover:border-[#E7C58E] text-[#E7C58E] hover:text-white text-xs font-mono-tech tracking-wider uppercase transition-colors flex items-center justify-center space-x-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>
                  {downloadSuccess ? 'CERTIFICATE DISPATCHED (PDF)' : 'EXPORT VERIFICATION CERTIFICATE'}
                </span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

