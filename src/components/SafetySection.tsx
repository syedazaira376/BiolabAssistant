import React, { useState } from 'react';
import { BSL_LEVELS, WASTE_CATEGORIES, GENERAL_SAFETY_RULES } from '../data/safetyData';
import { SafetyChecklist } from './SafetyChecklist';
import { motion } from 'motion/react';
import { Shield, AlertTriangle, Trash2, CheckCircle2, ShieldCheck, Eye, Search, CheckSquare } from 'lucide-react';

export const SafetySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'checklist' | 'bsl' | 'ppe' | 'waste' | 'rules'>('checklist');
  const [ruleSearch, setRuleSearch] = useState('');

  const filteredRules = GENERAL_SAFETY_RULES.filter(
    (rule) =>
      rule.title.toLowerCase().includes(ruleSearch.toLowerCase()) ||
      rule.description.toLowerCase().includes(ruleSearch.toLowerCase())
  );

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-teal-950 text-white p-6 sm:p-10 shadow-2xl border border-teal-500/20">
        <div className="absolute right-0 top-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5 text-amber-300" />
            <span>Biosafety & Regulatory Standards</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white">Laboratory Biosafety & Guidelines</h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Essential reference for Biosafety Levels (BSL-1 to BSL-4), Personal Protective Equipment (PPE) standards, biohazard waste segregation, and interactive pre-lab checklists.
          </p>

          {/* Navigation Sub-Tabs */}
          <div className="pt-2 flex space-x-2 overflow-x-auto pb-1">
            <button
              onClick={() => setActiveTab('checklist')}
              className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
                activeTab === 'checklist'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-md'
                  : 'bg-white/10 text-slate-200 hover:bg-white/20 border border-white/10'
              }`}
            >
              <CheckSquare className="w-3.5 h-3.5" />
              <span>Interactive Safety Checklist</span>
            </button>
            <button
              onClick={() => setActiveTab('bsl')}
              className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'bsl'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-md'
                  : 'bg-white/10 text-slate-200 hover:bg-white/20 border border-white/10'
              }`}
            >
              Biosafety Levels (BSL 1–4)
            </button>
            <button
              onClick={() => setActiveTab('ppe')}
              className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'ppe'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-md'
                  : 'bg-white/10 text-slate-200 hover:bg-white/20 border border-white/10'
              }`}
            >
              PPE Selection Rules
            </button>
            <button
              onClick={() => setActiveTab('waste')}
              className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'waste'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-md'
                  : 'bg-white/10 text-slate-200 hover:bg-white/20 border border-white/10'
              }`}
            >
              Biohazard Waste Matrix
            </button>
            <button
              onClick={() => setActiveTab('rules')}
              className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'rules'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-md'
                  : 'bg-white/10 text-slate-200 hover:bg-white/20 border border-white/10'
              }`}
            >
              General Safety Rules
            </button>
          </div>
        </div>
      </div>

      {/* Tab 0: Interactive Safety Checklist */}
      {activeTab === 'checklist' && <SafetyChecklist />}

      {/* Tab 1: Biosafety Levels (BSL-1 to BSL-4) */}
      {activeTab === 'bsl' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BSL_LEVELS.map((bsl) => (
            <motion.div
              key={bsl.level}
              whileHover={{ y: -2 }}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-xl transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-extrabold px-3 py-1 rounded-full border shadow-2xs ${bsl.badgeColor}`}>
                    {bsl.level}
                  </span>
                  <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">CDC / NIH Standard</span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900">{bsl.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{bsl.description}</p>

                <div className="p-3.5 bg-teal-50/60 rounded-2xl border border-teal-100 text-xs space-y-1">
                  <strong className="text-teal-950 font-extrabold block">Biosafety Cabinet (BSC) Requirement:</strong>
                  <span className="text-slate-700">{bsl.biosafetyCabinet}</span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Example Biological Agents:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {bsl.examples.map((ex, idx) => (
                      <span key={idx} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-xl font-medium border border-slate-200">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs">
                  <h4 className="font-bold text-slate-800 uppercase tracking-wider">Mandatory Personal Protection:</h4>
                  <ul className="grid grid-cols-2 gap-1.5 text-slate-700">
                    {bsl.ppeRequired.map((ppe, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{ppe}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs text-slate-600">
                <strong className="text-slate-900">Facility Containment Features:</strong> {bsl.facilityFeatures.join(', ')}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Tab 2: PPE Guidelines */}
      {activeTab === 'ppe' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-2xl bg-teal-50 text-teal-700 border border-teal-100">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Personal Protective Equipment (PPE) Matrix</h2>
                <p className="text-slate-500 text-xs sm:text-sm">Primary physical barrier guidelines for researchers in wet-lab environments</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm">Eye & Face Protection</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ANSI Z87.1 safety glasses required for general work. Splash-proof goggles required for liquid transfers. UV-blocking face shields required for transilluminator gel viewing.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm">Lab Coat & Apparel</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Buttoned, fluid-resistant lab coats required at all times. Long pants and completely closed-toe shoes covering the entire foot are mandatory. No sandals or loose dangling sleeves.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm">Hand Protection (Gloves)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Powder-free Nitrile gloves standard for biologicals. Double-glove for ethidium bromide/acrylamide. Cryo-gloves required for liquid nitrogen immersion. Remove before touching door handles.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm">Respiratory Protection</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  N95 or N99 particulate respirators required for powdered chemical weighing or aerosol generation outside a BSC. PAPR units used in high-containment BSL-3 suites.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Waste Disposal Matrix */}
      {activeTab === 'waste' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WASTE_CATEGORIES.map((cat, idx) => (
            <div key={idx} className={`rounded-3xl p-6 border shadow-xs space-y-4 ${cat.containerColor}`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-white/70 shadow-2xs">
                  {cat.type}
                </span>
                <Trash2 className="w-5 h-5 opacity-80" />
              </div>

              <h3 className="text-xl font-extrabold">{cat.container}</h3>

              <div className="space-y-1 text-xs">
                <strong className="font-extrabold uppercase tracking-wider text-[10px]">Example Materials:</strong>
                <p className="opacity-95 leading-relaxed">{cat.examples.join(', ')}</p>
              </div>

              <div className="p-3.5 bg-white/90 rounded-2xl text-xs space-y-1 text-slate-900 shadow-2xs">
                <strong className="font-extrabold block text-slate-950">Mandatory Disposal Protocol:</strong>
                <p className="leading-relaxed">{cat.disposalProcedure}</p>
              </div>

              <div className="text-xs font-bold flex items-center space-x-2 text-rose-900 bg-rose-500/15 p-2.5 rounded-xl border border-rose-500/20">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span>{cat.precautions}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 4: General Safety Rules */}
      {activeTab === 'rules' && (
        <div className="space-y-5">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-4 top-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search safety rules (e.g., PPE, food, chemical spill, eyewash)..."
              value={ruleSearch}
              onChange={(e) => setRuleSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200/90 rounded-2xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500 text-slate-800 placeholder-slate-400 shadow-2xs"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredRules.map((rule) => (
              <div key={rule.id} className="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-xs flex items-start space-x-4">
                <div className="w-9 h-9 rounded-2xl bg-teal-50 text-teal-800 border border-teal-100 font-extrabold text-xs flex items-center justify-center flex-shrink-0 shadow-2xs">
                  {rule.id}
                </div>
                <div className="space-y-1">
                  <h3 className="font-extrabold text-slate-900 text-sm">{rule.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{rule.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

