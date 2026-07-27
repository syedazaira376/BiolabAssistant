import React, { useState } from 'react';
import { Technique, NavTab } from '../types';
import { TECHNIQUES } from '../data/techniquesData';
import { TechniqueDetailModal } from './TechniqueDetailModal';
import { TechniqueIllustration } from './TechniqueIllustration';
import { motion } from 'motion/react';
import { Search, BookOpen, Dna, TestTube, Layers, ShieldAlert, Microscope, Sparkles, Activity, Bot, ChevronRight, Layers3 } from 'lucide-react';

interface TechniquesSectionProps {
  onAskAI: (prompt: string, techniqueName: string) => void;
  setActiveTab: (tab: NavTab) => void;
  selectedTechniqueFromHome?: Technique | null;
}

export const TechniquesSection: React.FC<TechniquesSectionProps> = ({
  onAskAI,
  setActiveTab,
  selectedTechniqueFromHome,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTechnique, setSelectedTechnique] = useState<Technique | null>(selectedTechniqueFromHome || null);

  const categories = ['All', 'Molecular Biology', 'Biochemistry', 'Cell Biology', 'Analytical Techniques'];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dna': return <Dna className="w-5 h-5 text-teal-600" />;
      case 'TestTube': return <TestTube className="w-5 h-5 text-indigo-600" />;
      case 'Layers': return <Layers className="w-5 h-5 text-cyan-600" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-emerald-600" />;
      case 'Microscope': return <Microscope className="w-5 h-5 text-violet-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-600" />;
      case 'Activity': return <Activity className="w-5 h-5 text-rose-600" />;
      default: return <BookOpen className="w-5 h-5 text-teal-600" />;
    }
  };

  const filteredTechniques = TECHNIQUES.filter((tech) => {
    const matchesSearch =
      tech.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tech.purpose.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tech.shortName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || tech.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-950 to-teal-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-teal-500/20">
        <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-teal-300" />
            <span>Interactive Educational Modules</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Laboratory Techniques Library
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Step-by-step educational guides, required reagents, key formulas, and troubleshooting matrices for 7 core molecular biology and biotechnology protocols.
          </p>

          {/* Search & Filters Bar */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-teal-400" />
              <input
                type="text"
                placeholder="Search techniques (e.g. PCR, ELISA, SDS-PAGE)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-900/80 text-white placeholder-slate-400 border border-teal-500/30 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all shadow-inner"
              />
            </div>

            <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 sm:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20 font-extrabold'
                      : 'bg-white/10 text-slate-200 hover:bg-white/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Technique Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTechniques.map((tech) => (
          <motion.div
            key={tech.id}
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
          >
            {/* Technique Diagram Illustration */}
            <div className="p-3 bg-slate-900 border-b border-slate-800">
              <TechniqueIllustration techniqueId={tech.id} className="w-full h-36" />
            </div>

            {/* Card Content Body */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 rounded-lg bg-teal-50 border border-teal-100">
                      {getIcon(tech.iconName)}
                    </div>
                    <span className="text-xs font-bold text-slate-800">{tech.shortName}</span>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {tech.category}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                  {tech.name}
                </h3>

                <p className="text-slate-600 text-xs line-clamp-3 leading-relaxed">
                  {tech.purpose}
                </p>
              </div>

              {/* Protocol Highlights */}
              <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px] text-slate-500 font-medium">
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-100 flex items-center justify-between">
                  <span>Steps:</span>
                  <span className="font-bold text-slate-900">{tech.procedure.length}</span>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-100 flex items-center justify-between">
                  <span>Reagents:</span>
                  <span className="font-bold text-slate-900">{tech.requiredMaterials.reagents.length}</span>
                </div>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="bg-slate-50/80 px-6 py-3.5 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setSelectedTechnique(tech)}
                className="flex items-center space-x-1.5 text-xs font-bold text-teal-700 hover:text-teal-900 cursor-pointer"
              >
                <span>View Full Protocol</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onAskAI(`Explain the protocol and reaction principles of ${tech.name}`, tech.name)}
                className="p-2 rounded-lg text-slate-500 hover:text-teal-700 hover:bg-teal-100/80 transition-colors cursor-pointer"
                title={`Ask AI Assistant about ${tech.shortName}`}
              >
                <Bot className="w-4.5 h-4.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredTechniques.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-300 space-y-3">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">No laboratory techniques match your filter</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try resetting your search query or selecting "All" categories.
          </p>
          <button
            onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
            className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-md shadow-teal-600/20"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Detail Modal */}
      <TechniqueDetailModal
        technique={selectedTechnique}
        onClose={() => setSelectedTechnique(null)}
        onAskAI={onAskAI}
        setActiveTab={setActiveTab}
      />
    </div>
  );
};

