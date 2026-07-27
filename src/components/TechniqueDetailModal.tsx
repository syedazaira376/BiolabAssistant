import React, { useState } from 'react';
import { Technique, NavTab } from '../types';
import { TechniqueIllustration } from './TechniqueIllustration';
import { X, CheckCircle, AlertTriangle, HelpCircle, Bot, BookOpen, Wrench, Shield, ChevronRight } from 'lucide-react';

interface TechniqueDetailModalProps {
  technique: Technique | null;
  onClose: () => void;
  onAskAI: (prompt: string, techniqueName: string) => void;
  setActiveTab: (tab: NavTab) => void;
}

export const TechniqueDetailModal: React.FC<TechniqueDetailModalProps> = ({
  technique,
  onClose,
  onAskAI,
  setActiveTab,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'materials' | 'procedure' | 'troubleshooting'>('overview');

  if (!technique) return null;

  const handleAskAIAboutTechnique = () => {
    const prompt = `Can you explain the protocol details, reaction kinetics, and common pitfalls for ${technique.name}? What are the most crucial step-by-step considerations?`;
    onAskAI(prompt, technique.name);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-teal-200/50 overflow-hidden">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-teal-950 text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2 text-teal-300 text-xs font-bold uppercase tracking-wider mb-2">
            <span>{technique.category}</span>
            <span>•</span>
            <span>Educational Protocol Guide</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{technique.name}</h2>
          <p className="text-slate-300 text-sm mt-2 max-w-2xl leading-relaxed">{technique.quickSummary}</p>

          <div className="flex flex-wrap gap-2.5 mt-5 pt-1">
            <button
              onClick={handleAskAIAboutTechnique}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-extrabold transition-all shadow-md cursor-pointer"
            >
              <Bot className="w-4 h-4" />
              <span>Ask AI About {technique.shortName}</span>
            </button>
            {technique.id === 'pcr' || technique.id === 'dna-extraction' || technique.id === 'spectrophotometry' ? (
              <button
                onClick={() => {
                  setActiveTab('calculators');
                  onClose();
                }}
                className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold backdrop-blur-md transition-all cursor-pointer border border-white/15"
              >
                <Wrench className="w-3.5 h-3.5 text-teal-300" />
                <span>Open Interactive Calculator</span>
              </button>
            ) : null}
          </div>
        </div>

        {/* Modal Navigation Sub-Tabs */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 flex space-x-6 text-xs sm:text-sm font-bold overflow-x-auto">
          <button
            onClick={() => setActiveSubTab('overview')}
            className={`py-3.5 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeSubTab === 'overview'
                ? 'border-teal-600 text-teal-700 font-extrabold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Purpose & Principle Diagram
          </button>
          <button
            onClick={() => setActiveSubTab('materials')}
            className={`py-3.5 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeSubTab === 'materials'
                ? 'border-teal-600 text-teal-700 font-extrabold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Required Materials
          </button>
          <button
            onClick={() => setActiveSubTab('procedure')}
            className={`py-3.5 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeSubTab === 'procedure'
                ? 'border-teal-600 text-teal-700 font-extrabold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Step-by-Step Execution
          </button>
          <button
            onClick={() => setActiveSubTab('troubleshooting')}
            className={`py-3.5 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeSubTab === 'troubleshooting'
                ? 'border-teal-600 text-teal-700 font-extrabold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Troubleshooting & Safety
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {activeSubTab === 'overview' && (
            <div className="space-y-6">
              {/* Interactive Visual Illustration Diagram */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-teal-500/30">
                <h4 className="text-xs font-mono font-bold text-teal-300 uppercase tracking-wider mb-2 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                  <span>Interactive Visual Diagram & Reaction Kinetics</span>
                </h4>
                <TechniqueIllustration techniqueId={technique.id} className="w-full h-44" />
              </div>

              <div className="bg-teal-50/60 rounded-2xl p-5 border border-teal-100">
                <h3 className="text-base font-bold text-teal-950 flex items-center space-x-2 mb-2">
                  <BookOpen className="w-5 h-5 text-teal-600" />
                  <span>Purpose & Utility</span>
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">{technique.purpose}</p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
                <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span>Scientific Principle</span>
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">{technique.principle}</p>
                {technique.keyFormula && (
                  <div className="mt-3 p-3.5 bg-white rounded-xl border border-slate-200 font-mono text-xs text-teal-900 font-semibold shadow-2xs">
                    Key Formula / Equation: {technique.keyFormula}
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900">Real-World Applications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {technique.applications.map((app, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs font-medium text-slate-700">
                      <ChevronRight className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSubTab === 'materials' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
                <h3 className="font-bold text-slate-900 text-sm flex items-center space-x-2 text-teal-700">
                  <span>Reagents & Buffers</span>
                </h3>
                <ul className="space-y-2">
                  {technique.requiredMaterials.reagents.map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-700 flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
                <h3 className="font-bold text-slate-900 text-sm flex items-center space-x-2 text-indigo-700">
                  <span>Equipment & Instruments</span>
                </h3>
                <ul className="space-y-2">
                  {technique.requiredMaterials.equipment.map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-700 flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
                <h3 className="font-bold text-slate-900 text-sm flex items-center space-x-2 text-violet-700">
                  <span>Plasticware & Consumables</span>
                </h3>
                <ul className="space-y-2">
                  {technique.requiredMaterials.consumables.map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-700 flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-1.5 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeSubTab === 'procedure' && (
            <div className="space-y-4">
              <h3 className="font-bold text-slate-900 text-base">Step-by-Step Protocol Execution</h3>
              <div className="space-y-4">
                {technique.procedure.map((step) => (
                  <div key={step.stepNumber} className="flex items-start space-x-4 bg-slate-50 p-4.5 rounded-2xl border border-slate-200">
                    <div className="w-9 h-9 rounded-xl bg-teal-600 text-white font-extrabold text-sm flex items-center justify-center flex-shrink-0 shadow-xs">
                      {step.stepNumber}
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <h4 className="font-bold text-slate-900 text-sm">{step.title}</h4>
                      <p className="text-xs text-slate-700 leading-relaxed">{step.description}</p>
                      {step.proTip && (
                        <div className="mt-2.5 p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs font-medium flex items-start space-x-2">
                          <span className="font-extrabold uppercase text-[10px] bg-amber-200 px-2 py-0.5 rounded text-amber-900 flex-shrink-0">Pro Tip</span>
                          <span>{step.proTip}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSubTab === 'troubleshooting' && (
            <div className="space-y-6">
              {/* Precautions */}
              <div className="bg-amber-50/70 rounded-2xl p-5 border border-amber-200 space-y-3">
                <h3 className="font-bold text-amber-950 text-sm flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-amber-600" />
                  <span>Crucial Lab Precautions & Biosafety</span>
                </h3>
                <ul className="space-y-2">
                  {technique.precautions.map((prec, idx) => (
                    <li key={idx} className="text-xs text-amber-900 flex items-start space-x-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>{prec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Troubleshooting Matrix */}
              <div className="space-y-3">
                <h3 className="font-bold text-slate-900 text-base flex items-center space-x-2">
                  <HelpCircle className="w-5 h-5 text-teal-600" />
                  <span>Troubleshooting Matrix</span>
                </h3>
                <div className="space-y-3">
                  {technique.troubleshooting.map((tb, idx) => (
                    <div key={idx} className="bg-slate-50 rounded-2xl p-4.5 border border-slate-200 space-y-2 text-xs">
                      <div className="font-bold text-rose-700 flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                        <span>Problem: {tb.problem}</span>
                      </div>
                      <p className="text-slate-600">
                        <strong className="text-slate-800">Possible Cause:</strong> {tb.possibleCause}
                      </p>
                      <p className="text-slate-700 bg-emerald-50/80 p-2.5 rounded-xl border border-emerald-200 text-emerald-950 font-medium">
                        <strong className="text-emerald-800">Recommended Solution:</strong> {tb.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium">BioLab Assistant Educational Reference</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};

