import React, { useState } from 'react';
import { Calculator, Dna, TestTube, Activity, RotateCw, RefreshCw, CheckCircle2, Zap } from 'lucide-react';

export const CalculatorsSection: React.FC = () => {
  const [activeCalc, setActiveCalc] = useState<'pcr' | 'dilution' | 'beer' | 'rcf'>('pcr');

  // Calculator 1: PCR Master Mix State
  const [pcrNumSamples, setPcrNumSamples] = useState<number>(10);
  const [pcrExcessPct, setPcrExcessPct] = useState<number>(10);
  const [pcrRxnVolume, setPcrRxnVolume] = useState<number>(50); // µL

  const totalPcrRxns = pcrNumSamples * (1 + pcrExcessPct / 100);

  const pcrComponents = [
    { name: '10x PCR Reaction Buffer', perRxn: (pcrRxnVolume * 0.1).toFixed(2) },
    { name: '10 mM dNTP Mix (2.5 mM each)', perRxn: (pcrRxnVolume * 0.02).toFixed(2) },
    { name: '10 µM Forward Primer', perRxn: (pcrRxnVolume * 0.03).toFixed(2) },
    { name: '10 µM Reverse Primer', perRxn: (pcrRxnVolume * 0.03).toFixed(2) },
    { name: 'Taq DNA Polymerase (5 U/µL)', perRxn: (0.25 * (pcrRxnVolume / 50)).toFixed(2) },
    { name: 'Nuclease-Free Water', perRxn: (pcrRxnVolume * 0.82 - (0.25 * (pcrRxnVolume / 50))).toFixed(2) },
  ];

  // Calculator 2: C1V1 = C2V2 State
  const [c1, setC1] = useState<string>('50'); // e.g. 50X
  const [v1, setV1] = useState<string>(''); // Target solving V1
  const [c2, setC2] = useState<string>('1');  // e.g. 1X
  const [v2, setV2] = useState<string>('500'); // e.g. 500 mL

  const setPresetDilution = (presetC1: string, presetC2: string, presetV2: string) => {
    setC1(presetC1);
    setV1('');
    setC2(presetC2);
    setV2(presetV2);
  };

  const calculateDilution = () => {
    const numC1 = parseFloat(c1);
    const numV1 = parseFloat(v1);
    const numC2 = parseFloat(c2);
    const numV2 = parseFloat(v2);

    if (!v1 && numC1 && numC2 && numV2) {
      return { solvedField: 'V1', value: ((numC2 * numV2) / numC1).toFixed(2) };
    } else if (!v2 && numC1 && numV1 && numC2) {
      return { solvedField: 'V2', value: ((numC1 * numV1) / numC2).toFixed(2) };
    } else if (!c1 && numV1 && numC2 && numV2) {
      return { solvedField: 'C1', value: ((numC2 * numV2) / numV1).toFixed(2) };
    } else if (!c2 && numC1 && numV1 && numV2) {
      return { solvedField: 'C2', value: ((numC1 * numV1) / numV2).toFixed(2) };
    }
    return null;
  };

  // Calculator 3: Beer-Lambert Law
  const [abs260, setAbs260] = useState<string>('0.8');
  const [dilutionFactor, setDilutionFactor] = useState<string>('10');
  const [moleculeType, setMoleculeType] = useState<'dsDNA' | 'ssRNA' | 'ssDNA'>('dsDNA');

  const getDnaConcentration = () => {
    const abs = parseFloat(abs260);
    const df = parseFloat(dilutionFactor);
    if (isNaN(abs) || isNaN(df)) return null;

    let factor = 50; // dsDNA: 50 µg/mL per A260
    if (moleculeType === 'ssRNA') factor = 40;
    if (moleculeType === 'ssDNA') factor = 33;

    return (abs * factor * df).toFixed(2);
  };

  // Calculator 4: Centrifugation RCF vs RPM
  const [radiusMm, setRadiusMm] = useState<string>('75'); // 75 mm rotor radius
  const [rpmVal, setRpmVal] = useState<string>('10000'); // 10,000 RPM

  const calcRCF = () => {
    const r = parseFloat(radiusMm);
    const rpm = parseFloat(rpmVal);
    if (isNaN(r) || isNaN(rpm)) return null;
    return Math.round(1.118e-5 * r * Math.pow(rpm, 2));
  };

  return (
    <div className="space-y-8 pb-12 max-w-5xl mx-auto">
      {/* Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-teal-950 text-white p-6 sm:p-10 shadow-2xl border border-teal-500/20">
        <div className="absolute -right-12 -bottom-12 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-teal-300" />
            <span>Interactive Lab Calculators</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white">Interactive Laboratory Calculators</h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Perform fast, accurate calculations for PCR master mixes, stock buffer dilutions (C1V1 = C2V2), spectrophotometry nucleic acid yields, and centrifuge speeds.
          </p>

          {/* Calculator Selector Sub-Tabs */}
          <div className="pt-2 flex space-x-2 overflow-x-auto pb-1">
            <button
              onClick={() => setActiveCalc('pcr')}
              className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold transition-all cursor-pointer whitespace-nowrap ${
                activeCalc === 'pcr'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-md'
                  : 'bg-white/10 text-slate-200 hover:bg-white/20 border border-white/10'
              }`}
            >
              PCR Master Mix Formulation
            </button>
            <button
              onClick={() => setActiveCalc('dilution')}
              className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold transition-all cursor-pointer whitespace-nowrap ${
                activeCalc === 'dilution'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-md'
                  : 'bg-white/10 text-slate-200 hover:bg-white/20 border border-white/10'
              }`}
            >
              Buffer Dilutions (C1V1 = C2V2)
            </button>
            <button
              onClick={() => setActiveCalc('beer')}
              className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold transition-all cursor-pointer whitespace-nowrap ${
                activeCalc === 'beer'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-md'
                  : 'bg-white/10 text-slate-200 hover:bg-white/20 border border-white/10'
              }`}
            >
              DNA/RNA Quantitation (A260)
            </button>
            <button
              onClick={() => setActiveCalc('rcf')}
              className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold transition-all cursor-pointer whitespace-nowrap ${
                activeCalc === 'rcf'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-md'
                  : 'bg-white/10 text-slate-200 hover:bg-white/20 border border-white/10'
              }`}
            >
              Centrifugation Speed (RCF/RPM)
            </button>
          </div>
        </div>
      </div>

      {/* Calc 1: PCR Master Mix */}
      {activeCalc === 'pcr' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
          <div className="flex items-center space-x-3 text-teal-800 font-extrabold text-lg sm:text-xl">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-700 border border-teal-100">
              <Dna className="w-6 h-6" />
            </div>
            <div>
              <h2>PCR Master Mix Volume Formulation</h2>
              <p className="text-slate-500 text-xs font-normal">Calculate reagent requirements with custom pipetting dead-volume buffer</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 bg-slate-50 p-5 rounded-2xl border border-slate-200/90">
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">Number of Reaction Tubes</label>
              <input
                type="number"
                min="1"
                value={pcrNumSamples}
                onChange={(e) => setPcrNumSamples(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">Excess Pipetting Loss (%)</label>
              <input
                type="number"
                min="0"
                max="50"
                value={pcrExcessPct}
                onChange={(e) => setPcrExcessPct(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">Total Tube Reaction Volume (µL)</label>
              <input
                type="number"
                min="10"
                max="100"
                value={pcrRxnVolume}
                onChange={(e) => setPcrRxnVolume(Math.max(10, parseInt(e.target.value) || 50))}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          {/* Master Mix Formulation Table */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-extrabold text-slate-900 text-sm">
                Master Mix Recipe (Formulating for {totalPcrRxns.toFixed(1)} reactions)
              </h3>
              <span className="text-xs bg-teal-100 text-teal-900 font-extrabold px-3 py-1 rounded-full border border-teal-200">
                {pcrExcessPct}% Excess Dead-Volume Included
              </span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200/90 shadow-2xs">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100/90 text-slate-700 font-extrabold uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5">Component</th>
                    <th className="p-3.5">Volume per Reaction (µL)</th>
                    <th className="p-3.5">Total Master Mix Mix (µL)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800">
                  {pcrComponents.map((comp, idx) => {
                    const totalVol = (parseFloat(comp.perRxn) * totalPcrRxns).toFixed(2);
                    return (
                      <tr key={idx} className="hover:bg-slate-50/80">
                        <td className="p-3.5 font-bold text-slate-900">{comp.name}</td>
                        <td className="p-3.5 font-mono text-slate-700">{comp.perRxn} µL</td>
                        <td className="p-3.5 font-mono font-extrabold text-teal-700">{totalVol} µL</td>
                      </tr>
                    );
                  })}
                  <tr className="bg-teal-50/80 font-bold text-teal-950">
                    <td className="p-3.5">Total Master Mix Aliquot (before DNA Template)</td>
                    <td className="p-3.5 font-mono">
                      {(pcrRxnVolume - 2).toFixed(2)} µL
                    </td>
                    <td className="p-3.5 font-mono text-teal-800 text-sm font-extrabold">
                      {((pcrRxnVolume - 2) * totalPcrRxns).toFixed(2)} µL
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 italic">
              Pro Tip: Aliquot {((pcrRxnVolume - 2)).toFixed(2)} µL of Master Mix into each PCR tube first, then add 2.0 µL template DNA individually to avoid cross-contamination.
            </p>
          </div>
        </div>
      )}

      {/* Calc 2: C1V1 = C2V2 */}
      {activeCalc === 'dilution' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
          <div className="flex items-center space-x-3 text-teal-800 font-extrabold text-lg sm:text-xl">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-700 border border-teal-100">
              <TestTube className="w-6 h-6" />
            </div>
            <div>
              <h2>Buffer & Solution Dilution (C1V1 = C2V2)</h2>
              <p className="text-slate-500 text-xs font-normal">Leave one variable blank to solve for the missing concentration or volume</p>
            </div>
          </div>

          {/* Quick Presets */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Quick Presets:</span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setPresetDilution('50', '1', '500')}
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all cursor-pointer border border-slate-200"
              >
                50x TAE → 1x TAE (500 mL)
              </button>
              <button
                onClick={() => setPresetDilution('10', '1', '1000')}
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all cursor-pointer border border-slate-200"
              >
                10x PBS → 1x PBS (1000 mL)
              </button>
              <button
                onClick={() => setPresetDilution('100', '10', '50')}
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all cursor-pointer border border-slate-200"
              >
                100 µM Primer → 10 µM (50 µL)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 bg-slate-50 p-5 rounded-2xl border border-slate-200/90">
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">Initial Conc. (C1)</label>
              <input
                type="text"
                placeholder="e.g. 50"
                value={c1}
                onChange={(e) => setC1(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">Initial Vol. (V1)</label>
              <input
                type="text"
                placeholder="Leave blank to solve"
                value={v1}
                onChange={(e) => setV1(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">Final Conc. (C2)</label>
              <input
                type="text"
                placeholder="e.g. 1"
                value={c2}
                onChange={(e) => setC2(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">Final Vol. (V2)</label>
              <input
                type="text"
                placeholder="e.g. 500"
                value={v2}
                onChange={(e) => setV2(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          {/* Solution Output */}
          {calculateDilution() ? (
            <div className="p-5 bg-teal-50/80 border border-teal-200 rounded-2xl space-y-2 text-teal-950">
              <div className="flex items-center space-x-2 font-extrabold text-teal-800">
                <CheckCircle2 className="w-5 h-5 text-teal-600" />
                <span>Calculated Result ({calculateDilution()?.solvedField}):</span>
              </div>
              <p className="text-3xl font-extrabold text-teal-900 font-mono">
                {calculateDilution()?.solvedField} = {calculateDilution()?.value} units
              </p>
              {calculateDilution()?.solvedField === 'V1' && (
                <p className="text-xs text-teal-900 font-medium">
                  Preparation Guide: Measure <strong>{calculateDilution()?.value} units</strong> of stock solution (C1 = {c1}), then add solvent/water up to a final volume of <strong>{v2} units</strong> (V2).
                </p>
              )}
            </div>
          ) : (
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-amber-900 text-xs font-medium">
              Please leave exactly one field empty (e.g., leave V1 blank) to solve for its value.
            </div>
          )}
        </div>
      )}

      {/* Calc 3: Beer-Lambert */}
      {activeCalc === 'beer' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
          <div className="flex items-center space-x-3 text-teal-800 font-extrabold text-lg sm:text-xl">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-700 border border-teal-100">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <h2>Spectrophotometric Nucleic Acid Quantitation (A260)</h2>
              <p className="text-slate-500 text-xs font-normal">Calculate dsDNA, ssRNA, or ssDNA concentration based on Beer-Lambert optical density</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 bg-slate-50 p-5 rounded-2xl border border-slate-200/90">
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">Nucleic Acid Type</label>
              <select
                value={moleculeType}
                onChange={(e) => setMoleculeType(e.target.value as any)}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-800"
              >
                <option value="dsDNA">Double-Stranded DNA (50 µg/mL per A260)</option>
                <option value="ssRNA">Single-Stranded RNA (40 µg/mL per A260)</option>
                <option value="ssDNA">Single-Stranded DNA (33 µg/mL per A260)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">A260 Absorbance Reading</label>
              <input
                type="text"
                placeholder="e.g. 0.8"
                value={abs260}
                onChange={(e) => setAbs260(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">Dilution Factor (DF)</label>
              <input
                type="text"
                placeholder="e.g. 10 (for 1:10 dilution)"
                value={dilutionFactor}
                onChange={(e) => setDilutionFactor(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          {getDnaConcentration() && (
            <div className="p-5 bg-teal-50/80 border border-teal-200 rounded-2xl space-y-2 text-teal-950">
              <span className="text-xs font-extrabold text-teal-800 uppercase tracking-wider block">Calculated Concentration:</span>
              <p className="text-3xl font-extrabold font-mono text-teal-900">
                {getDnaConcentration()} µg/mL (ng/µL)
              </p>
              <p className="text-xs text-teal-900">
                Applied Formula: Concentration = A260 × Extinction Constant × Dilution Factor
              </p>
            </div>
          )}
        </div>
      )}

      {/* Calc 4: RCF / RPM */}
      {activeCalc === 'rcf' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
          <div className="flex items-center space-x-3 text-teal-800 font-extrabold text-lg sm:text-xl">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-700 border border-teal-100">
              <RotateCw className="w-6 h-6" />
            </div>
            <div>
              <h2>Centrifugation Speed Converter (RCF / RPM)</h2>
              <p className="text-slate-500 text-xs font-normal">Convert Revolutions Per Minute (RPM) to Relative Centrifugal Force (RCF / g-force)</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 bg-slate-50 p-5 rounded-2xl border border-slate-200/90">
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">Rotor Radius r (mm)</label>
              <input
                type="text"
                placeholder="e.g. 75 mm"
                value={radiusMm}
                onChange={(e) => setRadiusMm(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">Centrifuge Speed (RPM)</label>
              <input
                type="text"
                placeholder="e.g. 10000"
                value={rpmVal}
                onChange={(e) => setRpmVal(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          {calcRCF() !== null && (
            <div className="p-5 bg-teal-50/80 border border-teal-200 rounded-2xl space-y-2 text-teal-950">
              <span className="text-xs font-extrabold text-teal-800 uppercase tracking-wider block">Calculated Relative Centrifugal Force (RCF / g-force):</span>
              <p className="text-3xl font-extrabold font-mono text-teal-900">
                {calcRCF()} × g
              </p>
              <p className="text-xs text-teal-900">
                Formula: RCF = 1.118 × 10⁻⁵ × r (mm) × (RPM)²
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
