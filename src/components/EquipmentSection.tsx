import React, { useState } from 'react';
import { EQUIPMENT_LIST, EquipmentItem } from '../data/equipmentData';
import { motion, AnimatePresence } from 'motion/react';
import { Search, RotateCw, Dna, Activity, Shield, Flame, TestTube, Layers, Sparkles, CheckCircle2, AlertTriangle, Info, Bot, ChevronRight, X } from 'lucide-react';
import { NavTab } from '../types';

interface EquipmentSectionProps {
  onAskAI?: (prompt: string, equipmentName: string) => void;
  setActiveTab?: (tab: NavTab) => void;
}

export const EquipmentSection: React.FC<EquipmentSectionProps> = ({ onAskAI, setActiveTab }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<EquipmentItem | null>(null);

  const categories = ['All', 'Molecular & Cell Bio', 'Analytical & Optical', 'Sample Prep & Storage', 'Sterilization & Safety'];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dna': return <Dna className="w-5 h-5 text-teal-600" />;
      case 'RotateCw': return <RotateCw className="w-5 h-5 text-blue-600" />;
      case 'Activity': return <Activity className="w-5 h-5 text-cyan-600" />;
      case 'Shield': return <Shield className="w-5 h-5 text-emerald-600" />;
      case 'Flame': return <Flame className="w-5 h-5 text-amber-600" />;
      case 'TestTube': return <TestTube className="w-5 h-5 text-indigo-600" />;
      case 'Layers': return <Layers className="w-5 h-5 text-violet-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-rose-600" />;
      default: return <TestTube className="w-5 h-5 text-teal-600" />;
    }
  };

  const filteredEquipment = EQUIPMENT_LIST.filter((eq) => {
    const matchesSearch =
      eq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      eq.purpose.toLowerCase().includes(searchTerm.toLowerCase()) ||
      eq.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || eq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-950 to-teal-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-teal-500/20">
        <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold uppercase tracking-wider">
            <RotateCw className="w-3.5 h-3.5 text-teal-300" />
            <span>Laboratory Hardware Guide</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Laboratory Equipment & Instruments
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Technical specifications, operating procedures, safety guidelines, and maintenance protocols for core biotechnology and analytical instruments.
          </p>

          {/* Search & Category Filter Bar */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-teal-400" />
              <input
                type="text"
                placeholder="Search equipment (e.g., Centrifuge, Autoclave, NanoDrop)..."
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

      {/* Grid of Equipment Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEquipment.map((eq) => (
          <motion.div
            key={eq.id}
            whileHover={{ y: -3 }}
            className="bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
          >
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                    {getIcon(eq.iconName)}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {eq.category}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                  {eq.name}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                  {eq.shortDesc}
                </p>

                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1 text-xs">
                  <span className="font-extrabold text-slate-900 text-[11px] block uppercase tracking-wider">Primary Application:</span>
                  <p className="text-slate-700 line-clamp-2">{eq.purpose}</p>
                </div>
              </div>

              {/* Specs Badge */}
              <div className="pt-3 border-t border-slate-100 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Key Specifications</span>
                <ul className="text-[11px] text-slate-600 space-y-0.5">
                  {eq.keySpecs.slice(0, 2).map((spec, idx) => (
                    <li key={idx} className="flex items-start space-x-1.5">
                      <span className="text-teal-500 font-bold">•</span>
                      <span className="truncate">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions Footer */}
            <div className="bg-slate-50/80 px-6 py-3.5 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setActiveItem(eq)}
                className="flex items-center space-x-1.5 text-xs font-bold text-teal-700 hover:text-teal-900 cursor-pointer"
              >
                <span>Operating Guide & Safety</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {onAskAI && (
                <button
                  onClick={() => onAskAI(`Explain how to operate and calibrate a ${eq.name} in a biotechnology lab`, eq.name)}
                  className="p-2 rounded-lg text-slate-500 hover:text-teal-700 hover:bg-teal-100/80 transition-colors cursor-pointer"
                  title={`Ask AI Assistant about ${eq.name}`}
                >
                  <Bot className="w-4.5 h-4.5" />
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {filteredEquipment.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-300 space-y-3">
          <RotateCw className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">No laboratory equipment matches your filter</h3>
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

      {/* Equipment Detail Modal */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 my-8 max-h-[90vh] overflow-y-auto space-y-6 relative"
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute right-5 top-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2 pr-8">
                <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-teal-100 text-teal-900 border border-teal-200">
                  {activeItem.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{activeItem.name}</h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{activeItem.shortDesc}</p>
              </div>

              {/* Working Principle */}
              <div className="p-4 bg-teal-50/60 rounded-2xl border border-teal-100 space-y-2 text-xs sm:text-sm">
                <div className="flex items-center space-x-2 font-extrabold text-teal-950">
                  <Info className="w-4 h-4 text-teal-700" />
                  <span>Working Principle & Mechanism</span>
                </div>
                <p className="text-teal-950 leading-relaxed font-medium">{activeItem.principle}</p>
              </div>

              {/* Specifications */}
              <div className="space-y-2">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-800">Key Specifications & Parameters:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {activeItem.keySpecs.map((spec, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 font-medium flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0"></span>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step-by-step Operating Guide */}
              <div className="space-y-3">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-800">Standard Operating Procedure (SOP):</h3>
                <div className="space-y-2">
                  {activeItem.operatingSteps.map((step, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start space-x-3 text-xs text-slate-800">
                      <span className="w-6 h-6 rounded-full bg-teal-600 text-white font-extrabold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Maintenance & Safety Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs">
                  <div className="font-extrabold text-slate-900 flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600" />
                    <span>Maintenance & Care</span>
                  </div>
                  <ul className="space-y-1 text-slate-700">
                    {activeItem.maintenanceTips.map((tip, idx) => (
                      <li key={idx}>• {tip}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200 space-y-2 text-xs">
                  <div className="font-extrabold text-amber-950 flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-amber-700" />
                    <span>Safety & Hazards</span>
                  </div>
                  <ul className="space-y-1 text-amber-950 font-medium">
                    {activeItem.safetyNotes.map((note, idx) => (
                      <li key={idx}>• {note}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                {onAskAI && (
                  <button
                    onClick={() => {
                      const name = activeItem.name;
                      setActiveItem(null);
                      onAskAI(`Can you explain detailed troubleshooting steps and best practices for ${name}?`, name);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-extrabold text-xs transition-all shadow-md flex items-center space-x-2 cursor-pointer"
                  >
                    <Bot className="w-4 h-4" />
                    <span>Ask AI Lab Helper</span>
                  </button>
                )}

                <button
                  onClick={() => setActiveItem(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
