import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Key, User, Cpu, ArrowRight, Lock } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [operatorId, setOperatorId] = useState('OP-4412');
  const [pin, setPin] = useState('••••');
  const [workstation, setWorkstation] = useState('WS-EXPORT-01');
  const [role, setRole] = useState<'operator' | 'supervisor' | 'lead'>('operator');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/platform');
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col justify-between selection:bg-[#E7C58E] selection:text-[#050505]">
      
      {/* Top Bar */}
      <header className="px-6 py-4 flex items-center justify-between border-b border-[#202020]">
        <Link
          to="/"
          className="flex items-center space-x-2 text-xs font-mono-tech text-[#A3A3A3] hover:text-[#E7C58E] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO SMARTPACK AI HOMEPAGE</span>
        </Link>

        <div className="flex items-center space-x-2 text-[10px] font-mono-tech text-[#E7C58E]">
          <span className="w-2 h-2 rounded-full bg-[#E7C58E] animate-pulse" />
          <span>EDGE AUTHENTICATION NODE #AUTH-88</span>
        </div>
      </header>

      {/* Main Login Card */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md border border-[#292929] bg-[#0c0c0c] p-6 sm:p-8 gold-corner-bracket shadow-2xl relative">
          
          {/* Header Brand */}
          <div className="text-center mb-8">
            <div className="w-10 h-10 mx-auto border border-[#E7C58E] flex items-center justify-center bg-[#101010] relative mb-3">
              <div className="w-4 h-4 border-t border-l border-[#E7C58E] transform rotate-45" />
              <div className="w-2 h-2 bg-[#E7C58E] absolute" />
            </div>

            <h1 className="font-michroma text-lg text-white uppercase tracking-wider">
              OPERATOR AUTHENTICATION
            </h1>
            <p className="text-xs font-mono-tech text-[#8E8E8E] mt-1">
              Smart Export Packing Verification Terminal
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Workstation Select */}
            <div>
              <label className="block text-[10px] font-mono-tech text-[#A3A3A3] uppercase tracking-wider mb-1.5">
                ASSIGNED PACKING WORKSTATION
              </label>
              <select
                value={workstation}
                onChange={(e) => setWorkstation(e.target.value)}
                className="w-full bg-[#141414] border border-[#292929] px-3.5 py-2.5 text-xs font-mono-tech text-white focus:outline-none focus:border-[#E7C58E]"
              >
                <option value="WS-EXPORT-01">WS-EXPORT-01 (Export Line A — Germany/EU)</option>
                <option value="WS-EXPORT-02">WS-EXPORT-02 (Heavy Gear Bay — Japan/Asia)</option>
                <option value="WS-HIGH-MIX-04">WS-HIGH-MIX-04 (Air Cargo Cell — Americas)</option>
              </select>
            </div>

            {/* Role Select */}
            <div>
              <label className="block text-[10px] font-mono-tech text-[#A3A3A3] uppercase tracking-wider mb-1.5">
                AUTHORIZATION LEVEL
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: 'operator', label: 'OPERATOR' },
                  { key: 'supervisor', label: 'SUPERVISOR' },
                  { key: 'lead', label: 'PLANT LEAD' }
                ].map((r) => (
                  <button
                    type="button"
                    key={r.key}
                    onClick={() => setRole(r.key as any)}
                    className={`py-2 text-[10px] font-mono-tech border transition-all ${
                      role === r.key
                        ? 'border-[#E7C58E] bg-[#E7C58E]/10 text-[#E7C58E] font-bold'
                        : 'border-[#222] bg-[#111] text-[#6E6E6E] hover:text-white'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Operator ID */}
            <div>
              <label className="block text-[10px] font-mono-tech text-[#A3A3A3] uppercase tracking-wider mb-1.5">
                OPERATOR BADGE IDENTIFIER
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#666] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={operatorId}
                  onChange={(e) => setOperatorId(e.target.value)}
                  placeholder="e.g. OP-4412"
                  className="w-full bg-[#141414] border border-[#292929] pl-9 pr-3 py-2.5 text-xs font-mono-tech text-white focus:outline-none focus:border-[#E7C58E]"
                />
              </div>
            </div>

            {/* Security PIN */}
            <div>
              <label className="block text-[10px] font-mono-tech text-[#A3A3A3] uppercase tracking-wider mb-1.5">
                STATION SECURITY PASSCODE
              </label>
              <div className="relative">
                <Key className="w-4 h-4 text-[#666] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="••••"
                  className="w-full bg-[#141414] border border-[#292929] pl-9 pr-3 py-2.5 text-xs font-mono-tech text-white focus:outline-none focus:border-[#E7C58E]"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 bg-[#E7C58E] hover:bg-[#F3DCB1] text-[#050505] font-michroma text-xs tracking-wider uppercase transition-colors flex items-center justify-center space-x-2 font-bold disabled:opacity-50"
              >
                <span>{isSubmitting ? 'AUTHENTICATING STATION...' : 'INITIALIZE WORKSTATION'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>

          {/* Biometric / RFID Quick-Sign simulation */}
          <div className="mt-6 pt-5 border-t border-[#1C1C1C] text-center">
            <button
              onClick={() => {
                setOperatorId('OP-4412 (M. Becker)');
                navigate('/platform');
              }}
              className="text-xs font-mono-tech text-[#A3A3A3] hover:text-[#E7C58E] transition-colors"
            >
              [TAP TO SIMULATE RFID BADGE SCAN: M. BECKER]
            </button>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <footer className="px-6 py-4 text-center text-[10px] font-mono-tech text-[#666] border-t border-[#181818]">
        SMARTPACK AI STATION OS v2.4 • ENCRYPTED INDUSTRIAL NETWORK
      </footer>

    </div>
  );
};

