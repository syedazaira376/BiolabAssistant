import React from 'react';

interface TechniqueIllustrationProps {
  techniqueId: string;
  className?: string;
}

export const TechniqueIllustration: React.FC<TechniqueIllustrationProps> = ({ techniqueId, className = 'w-full h-40' }) => {
  switch (techniqueId) {
    case 'pcr':
      return (
        <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 p-4 border border-blue-500/20 flex flex-col justify-between ${className}`}>
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-15"></div>
          
          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-cyan-300 font-bold border-b border-cyan-500/20 pb-1.5">
            <span className="flex items-center space-x-1">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span>Thermal Cycling</span>
            </span>
            <span>95°C → 55°C → 72°C</span>
          </div>

          <svg viewBox="0 0 320 100" className="w-full h-20 relative z-10 my-auto">
            {/* Denaturation DNA Strand top */}
            <path d="M 10 20 Q 40 5, 70 20 T 130 20 T 190 20" stroke="#38bdf8" strokeWidth="3" fill="none" strokeDasharray="4 2" />
            <path d="M 10 40 Q 40 55, 70 40 T 130 40 T 190 40" stroke="#818cf8" strokeWidth="3" fill="none" strokeDasharray="4 2" />

            {/* Base pair hydrogen bonds */}
            <line x1="30" y1="20" x2="30" y2="35" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.6" />
            <line x1="70" y1="20" x2="70" y2="38" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.6" />
            <line x1="110" y1="20" x2="110" y2="38" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.6" />

            {/* Primers (Red/Teal arrows) */}
            <path d="M 140 18 L 180 18" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" />
            <polygon points="180,18 172,14 172,22" fill="#f43f5e" />
            <text x="142" y="12" fill="#f43f5e" fontSize="9" fontWeight="bold">Fwd Primer</text>

            <path d="M 180 42 L 140 42" stroke="#10b981" strokeWidth="4" strokeLinecap="round" />
            <polygon points="140,42 148,38 148,46" fill="#10b981" />
            <text x="142" y="55" fill="#10b981" fontSize="9" fontWeight="bold">Rev Primer</text>

            {/* Taq Polymerase block */}
            <rect x="210" y="10" width="95" height="50" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="220" y="30" fill="#38bdf8" fontSize="10" fontWeight="bold">Taq Polymerase</text>
            <text x="220" y="45" fill="#94a3b8" fontSize="8">5' → 3' Extension</text>
          </svg>

          <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-300">
            <span>2^N Amplification</span>
            <span className="text-emerald-400 font-bold">10^9 DNA Copies</span>
          </div>
        </div>
      );

    case 'gel-electrophoresis':
      return (
        <div className={`relative overflow-hidden rounded-xl bg-slate-950 p-4 border border-cyan-500/20 flex flex-col justify-between ${className}`}>
          <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400 font-bold border-b border-cyan-900 pb-1.5">
            <span className="text-rose-400 font-bold">(-) Cathode</span>
            <span className="text-cyan-300">1.5% Agarose Gel</span>
            <span className="text-emerald-400 font-bold">(+) Anode</span>
          </div>

          {/* Gel Box Graphic */}
          <div className="relative my-2 p-3 bg-gradient-to-r from-blue-950/80 via-cyan-950/80 to-blue-950/80 rounded-lg border border-cyan-500/30 flex items-center justify-around h-20">
            {/* Wells */}
            <div className="flex flex-col space-y-1.5 border-r border-cyan-800/60 pr-3">
              <div className="w-3 h-2 bg-slate-800 border border-cyan-400 rounded-2xs" title="Well 1 Ladder"></div>
              <div className="w-3 h-2 bg-slate-800 border border-cyan-400 rounded-2xs" title="Well 2 Sample"></div>
              <div className="w-3 h-2 bg-slate-800 border border-cyan-400 rounded-2xs" title="Well 3 Control"></div>
            </div>

            {/* Migrating DNA Bands */}
            <div className="flex-1 px-4 space-y-2">
              {/* Lane 1: Ladder */}
              <div className="flex space-x-6 items-center">
                <div className="w-2 h-3.5 bg-cyan-400 rounded-xs shadow-[0_0_8px_#38bdf8]" title="1000 bp"></div>
                <div className="w-2 h-3 bg-cyan-400 rounded-xs shadow-[0_0_8px_#38bdf8]" title="500 bp"></div>
                <div className="w-1.5 h-2 bg-cyan-400 rounded-xs opacity-70" title="250 bp"></div>
                <div className="w-1 h-2 bg-cyan-400 rounded-xs opacity-40" title="100 bp"></div>
              </div>

              {/* Lane 2: Single Target Band */}
              <div className="flex space-x-12 items-center">
                <div className="w-2.5 h-3.5 bg-emerald-400 rounded-xs shadow-[0_0_10px_#34d399]" title="Target Amplicon (500 bp)"></div>
              </div>

              {/* Lane 3: Two Bands */}
              <div className="flex space-x-6 items-center pl-2">
                <div className="w-2 h-3 bg-cyan-400 rounded-xs shadow-[0_0_8px_#38bdf8]"></div>
                <div className="w-2 h-3 bg-cyan-400 rounded-xs shadow-[0_0_8px_#38bdf8]"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span>UV / Transilluminator View</span>
            <span className="text-cyan-300">Ethidium / SYBR Stain</span>
          </div>
        </div>
      );

    case 'dna-extraction':
      return (
        <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-4 border border-indigo-500/20 flex flex-col justify-between ${className}`}>
          <div className="flex items-center justify-between text-[11px] font-mono text-indigo-300 font-bold border-b border-indigo-900 pb-1.5">
            <span>Silica Spin Column</span>
            <span className="text-cyan-400">Centrifugation</span>
          </div>

          <svg viewBox="0 0 300 80" className="w-full h-16 my-auto">
            {/* Tube outer */}
            <path d="M 30 10 L 100 10 L 80 70 L 50 70 Z" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" />
            {/* Silica membrane */}
            <rect x="42" y="32" width="46" height="8" fill="#38bdf8" rx="2" />
            <text x="35" y="26" fill="#cbd5e1" fontSize="8" fontWeight="bold">Cell Lysate</text>
            <text x="95" y="38" fill="#38bdf8" fontSize="8">Silica Matrix</text>

            {/* Droplet purified DNA */}
            <circle cx="65" cy="55" r="4" fill="#34d399" />
            <text x="75" y="58" fill="#34d399" fontSize="9" fontWeight="bold">Pure DNA</text>

            {/* Process Flow */}
            <path d="M 160 40 L 190 40" stroke="#818cf8" strokeWidth="2" strokeDasharray="3 2" />
            <polygon points="190,40 183,36 183,44" fill="#818cf8" />

            {/* Final Eppendorf Tube */}
            <rect x="200" y="15" width="30" height="45" rx="5" fill="#0f172a" stroke="#34d399" strokeWidth="2" />
            <rect x="205" y="42" width="20" height="15" fill="#059669" opacity="0.8" rx="2" />
            <text x="238" y="35" fill="#e2e8f0" fontSize="8">A260/280</text>
            <text x="238" y="47" fill="#34d399" fontSize="9" fontWeight="bold">= 1.8–2.0</text>
          </svg>

          <div className="flex items-center justify-between text-[10px] text-slate-300">
            <span>Lysis → Bind → Wash → Elute</span>
            <span className="text-indigo-300 font-semibold">High Yield DNA/RNA</span>
          </div>
        </div>
      );

    case 'elisa':
      return (
        <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-4 border border-blue-500/20 flex flex-col justify-between ${className}`}>
          <div className="flex items-center justify-between text-[11px] font-mono text-cyan-300 font-bold border-b border-blue-900 pb-1.5">
            <span>Sandwich ELISA Stack</span>
            <span className="text-amber-300">HRP Enzymatic Signal</span>
          </div>

          <svg viewBox="0 0 300 80" className="w-full h-16 my-auto">
            {/* Well outline */}
            <path d="M 20 10 L 20 65 Q 20 75, 30 75 L 120 75 Q 130 75, 130 65 L 130 10" fill="#0f172a" stroke="#3b82f6" strokeWidth="2" />

            {/* Capture Antibody Y-shape */}
            <path d="M 45 70 L 45 52 M 45 52 L 38 42 M 45 52 L 52 42" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
            <path d="M 105 70 L 105 52 M 105 52 L 98 42 M 105 52 L 112 42" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />

            {/* Antigen sphere */}
            <circle cx="45" cy="38" r="6" fill="#f43f5e" />
            <circle cx="105" cy="38" r="6" fill="#f43f5e" />

            {/* Detection Antibody Y-shape inverted */}
            <path d="M 45 22 L 45 34 M 45 34 L 38 38 M 45 34 L 52 38" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />

            {/* HRP Enzyme star */}
            <circle cx="45" cy="18" r="4" fill="#fbbf24" />
            <text x="52" y="18" fill="#fbbf24" fontSize="8" fontWeight="bold">HRP</text>

            {/* Substrate color change callout */}
            <rect x="150" y="20" width="135" height="40" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="160" y="35" fill="#fef08a" fontSize="9" fontWeight="bold">TMB Substrate → Blue</text>
            <text x="160" y="48" fill="#38bdf8" fontSize="8">Read Absorbance at 450 nm</text>
          </svg>

          <div className="flex items-center justify-between text-[10px] text-slate-300">
            <span>High Specificity Immunoassay</span>
            <span className="text-amber-400 font-bold">pg/mL Detection</span>
          </div>
        </div>
      );

    case 'microscopy':
      return (
        <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-4 border border-indigo-500/20 flex flex-col justify-between ${className}`}>
          <div className="flex items-center justify-between text-[11px] font-mono text-violet-300 font-bold border-b border-indigo-900 pb-1.5">
            <span>Brightfield / Phase Contrast</span>
            <span className="text-cyan-300">100x Oil Immersion</span>
          </div>

          <div className="flex items-center justify-between my-2">
            {/* Lens diagram */}
            <div className="w-28 space-y-1 text-[10px] font-mono text-slate-300">
              <div className="p-1 bg-slate-800 rounded border border-indigo-500/30 flex justify-between">
                <span>Ocular:</span> <span className="text-cyan-300 font-bold">10x</span>
              </div>
              <div className="p-1 bg-slate-800 rounded border border-indigo-500/30 flex justify-between">
                <span>Objective:</span> <span className="text-violet-300 font-bold">100x</span>
              </div>
              <div className="p-1 bg-slate-800 rounded border border-indigo-500/30 flex justify-between">
                <span>Total Mag:</span> <span className="text-emerald-400 font-bold">1000x</span>
              </div>
            </div>

            {/* Magnified Cell Circle Visual */}
            <div className="relative w-20 h-20 rounded-full border-2 border-violet-400 bg-slate-950 overflow-hidden flex items-center justify-center shadow-[0_0_15px_rgba(167,139,250,0.3)]">
              {/* Cell membrane */}
              <div className="w-16 h-16 rounded-full border border-teal-400/80 bg-teal-950/40 relative flex items-center justify-center">
                {/* Nucleus */}
                <div className="w-7 h-7 rounded-full bg-violet-600/80 border border-violet-300 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-200"></div>
                </div>
                {/* Organelles */}
                <div className="absolute top-2 left-2 w-2 h-1 bg-emerald-400 rounded-full"></div>
                <div className="absolute bottom-2 right-3 w-3 h-1.5 bg-amber-400 rounded-full"></div>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_60%,rgba(15,23,42,0.8)_100%)]"></div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-300">
            <span>Resolution ~0.2 µm</span>
            <span className="text-violet-300">Gram Stain / Cell Morphology</span>
          </div>
        </div>
      );

    case 'sds-page':
      return (
        <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 p-4 border border-cyan-500/20 flex flex-col justify-between ${className}`}>
          <div className="flex items-center justify-between text-[11px] font-mono text-cyan-300 font-bold border-b border-slate-800 pb-1.5">
            <span>Polyacrylamide Gel (SDS-PAGE)</span>
            <span className="text-indigo-300">MW Resolution</span>
          </div>

          <div className="relative my-2 p-2.5 bg-slate-900 rounded-lg border border-cyan-500/30 flex items-center justify-around h-20">
            <div className="text-[9px] text-slate-400 font-mono space-y-1">
              <div>250 kDa</div>
              <div>100 kDa</div>
              <div>50 kDa</div>
              <div>15 kDa</div>
            </div>

            {/* Protein Bands vertical ladder */}
            <div className="w-24 h-full bg-indigo-950/60 rounded border border-indigo-500/40 p-1 flex justify-around">
              <div className="flex flex-col justify-between py-1 items-center">
                <div className="w-4 h-1 bg-blue-400 rounded-xs shadow-[0_0_6px_#60a5fa]"></div>
                <div className="w-4 h-1 bg-blue-400 rounded-xs shadow-[0_0_6px_#60a5fa]"></div>
                <div className="w-4 h-1 bg-blue-400 rounded-xs shadow-[0_0_6px_#60a5fa]"></div>
                <div className="w-4 h-1 bg-blue-400 rounded-xs shadow-[0_0_6px_#60a5fa]"></div>
              </div>
              <div className="flex flex-col justify-around py-1 items-center">
                <div className="w-5 h-1.5 bg-cyan-300 rounded-xs shadow-[0_0_8px_#67e8f9]"></div>
                <div className="w-5 h-1 bg-cyan-300 rounded-xs shadow-[0_0_8px_#67e8f9]"></div>
              </div>
            </div>

            <div className="text-[9px] text-slate-300 font-mono">
              <div className="text-blue-400 font-bold">Coomassie Blue</div>
              <div>Denatured</div>
              <div className="text-emerald-400 font-bold">SDS (-) Charge</div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-300">
            <span>Separation by Molecular Weight</span>
            <span className="text-cyan-300">Western Blot Ready</span>
          </div>
        </div>
      );

    case 'spectrophotometry':
      return (
        <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-4 border border-teal-500/20 flex flex-col justify-between ${className}`}>
          <div className="flex items-center justify-between text-[11px] font-mono text-teal-300 font-bold border-b border-slate-800 pb-1.5">
            <span>Beer-Lambert Law (A = ε·c·l)</span>
            <span className="text-cyan-300">A260 / A280 Purity</span>
          </div>

          <svg viewBox="0 0 300 80" className="w-full h-16 my-auto">
            {/* UV Light Source */}
            <circle cx="25" cy="40" r="12" fill="#38bdf8" opacity="0.8" />
            <text x="18" y="43" fill="#0f172a" fontSize="8" fontWeight="bold">UV</text>

            {/* Beam entering */}
            <line x1="37" y1="40" x2="110" y2="40" stroke="#38bdf8" strokeWidth="4" strokeDasharray="6 2" />

            {/* Quartz Cuvette */}
            <rect x="110" y="15" width="40" height="50" rx="3" fill="#0f172a" stroke="#2dd4bf" strokeWidth="2" />
            <rect x="115" y="20" width="30" height="40" fill="#0d9488" opacity="0.4" rx="2" />
            <text x="120" y="44" fill="#ccfbf1" fontSize="8" fontWeight="bold">1 cm</text>

            {/* Attenuated Beam exiting */}
            <line x1="150" y1="40" x2="220" y2="40" stroke="#2dd4bf" strokeWidth="2" />

            {/* Detector */}
            <rect x="220" y="20" width="60" height="40" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="228" y="36" fill="#38bdf8" fontSize="8" fontWeight="bold">Absorbance</text>
            <text x="228" y="48" fill="#34d399" fontSize="10" fontWeight="bold">A = 0.852</text>
          </svg>

          <div className="flex items-center justify-between text-[10px] text-slate-300">
            <span>Nucleic Acid Quantitation</span>
            <span className="text-teal-300 font-bold">50 µg/mL per A260</span>
          </div>
        </div>
      );

    default:
      return (
        <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-blue-950 p-4 border border-blue-500/20 flex items-center justify-center ${className}`}>
          <span className="text-xs text-blue-300 font-semibold">BioLab Experimental Method</span>
        </div>
      );
  }
};
