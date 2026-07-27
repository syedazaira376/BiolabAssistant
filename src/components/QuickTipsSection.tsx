import React, { useState } from 'react';
import { LAB_TIPS, LabTip } from '../data/tipsData';
import { Sparkles, TestTube, ShieldCheck, Thermometer, CheckCircle2, Bot, BookOpen } from 'lucide-react';
import { NavTab } from '../types';

interface QuickTipsSectionProps {
  onAskAI?: (prompt: string, tipTitle: string) => void;
  setActiveTab?: (tab: NavTab) => void;
}

export const QuickTipsSection: React.FC<QuickTipsSectionProps> = ({ onAskAI }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Pipetting & Accuracy', 'Aseptic Technique', 'Cold Chain & Storage', 'Reagents & Solutions'];

  const filteredTips = LAB_TIPS.filter(
    (tip) => selectedCategory === 'All' || tip.category === selectedCategory
  );

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TestTube': return <TestTube className="w-5 h-5 text-teal-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-blue-600" />;
      case 'Thermometer': return <Thermometer className="w-5 h-5 text-indigo-600" />;
      default: return <Sparkles className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <div className="space-y-8 pb-12 max-w-4xl mx-auto">
      {/* Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-950 to-teal-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-teal-500/20">
        <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Practical Laboratory Hacks</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Quick Tips & Best Practices
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Proven bench-work rules, pipetting techniques, contamination safeguards, and solution prep guidelines used by experienced scientists.
          </p>

          {/* Category Filter Pills */}
          <div className="pt-2 flex space-x-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-2xl text-xs font-extrabold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-md'
                    : 'bg-white/10 text-slate-200 hover:bg-white/20 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Tip Cards */}
      <div className="space-y-6">
        {filteredTips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4"
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-2xl bg-teal-50 text-teal-700 border border-teal-100 flex-shrink-0">
                  {getIcon(tip.iconName)}
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {tip.category}
                  </span>
                  <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">{tip.title}</h2>
                </div>
              </div>
            </div>

            <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
              {tip.summary}
            </p>

            {/* Detailed Action Steps */}
            <div className="space-y-2 pt-2">
              <h3 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">Step-by-Step Technique:</h3>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {tip.detailedSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start space-x-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro Tip Highlight */}
            <div className="p-4 bg-teal-50/80 rounded-2xl border border-teal-200/80 space-y-1 text-xs">
              <span className="font-extrabold text-teal-950 uppercase tracking-wider text-[10px] flex items-center space-x-1">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                <span>Bench Pro Tip:</span>
              </span>
              <p className="text-teal-950 font-bold leading-relaxed">{tip.proTip}</p>
            </div>

            {onAskAI && (
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => onAskAI(`Explain the scientific reason behind this lab tip: "${tip.title}"`, tip.title)}
                  className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center space-x-1.5 cursor-pointer"
                >
                  <Bot className="w-4 h-4 text-teal-600" />
                  <span>Ask AI Helper why this works</span>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
