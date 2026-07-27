import React from 'react';
import { NavTab, Technique } from '../types';
import { TECHNIQUES } from '../data/techniquesData';
import { TechniqueIllustration } from './TechniqueIllustration';
import { motion } from 'motion/react';
import { 
  Bot, 
  BookOpen, 
  Shield, 
  Calculator, 
  HelpCircle, 
  ArrowRight, 
  Sparkles, 
  Dna, 
  TestTube, 
  Microscope, 
  Layers, 
  ShieldAlert, 
  Activity,
  CheckCircle2,
  Lightbulb,
  Zap,
  Award
} from 'lucide-react';

interface HomeSectionProps {
  setActiveTab: (tab: NavTab) => void;
  onSelectTechnique: (technique: Technique) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ setActiveTab, onSelectTechnique }) => {
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

  return (
    <div className="space-y-10 pb-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-teal-950 text-white p-8 sm:p-12 shadow-2xl border border-teal-500/20">
        <div className="absolute -right-16 -bottom-16 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute left-1/2 top-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-teal-300 animate-pulse" />
            <span>Interactive Life Sciences & Biotechnology Platform</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Master Biotechnology & Microbiology Laboratory Techniques
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Your digital lab companion for learning step-by-step protocols, reaction kinetics, biosafety rules, interactive calculators, and instant AI assistance powered by Gemini.
          </p>

          <div className="flex flex-wrap gap-3.5 pt-2">
            <button
              onClick={() => setActiveTab('ai-assistant')}
              className="flex items-center space-x-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-extrabold shadow-xl shadow-teal-500/20 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <Bot className="w-5 h-5" />
              <span>Ask AI Lab Helper</span>
            </button>

            <button
              onClick={() => setActiveTab('techniques')}
              className="flex items-center space-x-2.5 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold backdrop-blur-md border border-white/20 transition-all cursor-pointer"
            >
              <BookOpen className="w-5 h-5 text-teal-300" />
              <span>Explore Technique Cards</span>
            </button>
          </div>

          {/* Quick Stats Bar */}
          <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-medium">
            <div className="flex items-center space-x-2 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-teal-400"></span>
              <span><strong>7</strong> Core Protocols</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span><strong>4</strong> Lab Calculators</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span><strong>BSL-1 to 4</strong> Safety</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span><strong>Gemini AI</strong> Assistant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Modules Section */}
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">Explore Learning Modules</h2>
          <p className="text-slate-500 text-xs sm:text-sm">Select a module to learn protocols, solve calculations, or test your skills</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: AI Assistant */}
          <motion.div 
            whileHover={{ y: -4 }}
            onClick={() => setActiveTab('ai-assistant')}
            className="group relative bg-white rounded-3xl p-6 border border-slate-200/90 hover:border-teal-300 shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 border border-teal-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                AI Lab Assistant
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Get instant expert guidance on PCR troubleshooting, DNA/RNA extraction, gel electrophoresis, ELISA, centrifugation, and biosafety protocols.
              </p>
            </div>
            <div className="flex items-center text-teal-700 text-xs font-bold pt-2">
              <span>Launch AI Chat</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Card 2: Techniques */}
          <motion.div 
            whileHover={{ y: -4 }}
            onClick={() => setActiveTab('techniques')}
            className="group relative bg-white rounded-3xl p-6 border border-slate-200/90 hover:border-indigo-300 shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 border border-indigo-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">
                Laboratory Techniques
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Interactive educational cards with visual reaction diagrams, required materials, step-by-step procedures, key formulas, and precautions.
              </p>
            </div>
            <div className="flex items-center text-indigo-700 text-xs font-bold pt-2">
              <span>View Techniques (7 Guides)</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Card 3: Equipment */}
          <motion.div 
            whileHover={{ y: -4 }}
            onClick={() => setActiveTab('equipment')}
            className="group relative bg-white rounded-3xl p-6 border border-slate-200/90 hover:border-cyan-300 shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-700 border border-cyan-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TestTube className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors">
                Lab Hardware & Equipment
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Explore technical specs, operating guides, maintenance protocols, and safety precautions for key biotech instruments.
              </p>
            </div>
            <div className="flex items-center text-cyan-700 text-xs font-bold pt-2">
              <span>Explore Equipment</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Card 4: Flashcards */}
          <motion.div 
            whileHover={{ y: -4 }}
            onClick={() => setActiveTab('flashcards')}
            className="group relative bg-white rounded-3xl p-6 border border-slate-200/90 hover:border-rose-300 shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-700 border border-rose-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-rose-700 transition-colors">
                Revision Flashcards
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Interactive 3D flip cards to test quick recall on molecular biology concepts, formula calculations, and buffer mechanics.
              </p>
            </div>
            <div className="flex items-center text-rose-700 text-xs font-bold pt-2">
              <span>Start Flashcard Revision</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Card 3: Safety */}
          <motion.div 
            whileHover={{ y: -4 }}
            onClick={() => setActiveTab('safety')}
            className="group relative bg-white rounded-3xl p-6 border border-slate-200/90 hover:border-amber-300 shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 border border-amber-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                Lab Safety & Biosafety
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Reference for Biosafety Levels (BSL-1 to BSL-4), PPE selection matrix, color-coded biohazard waste disposal, and emergency safety rules.
              </p>
            </div>
            <div className="flex items-center text-amber-700 text-xs font-bold pt-2">
              <span>Review Safety Rules</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Card 4: Calculators */}
          <motion.div 
            whileHover={{ y: -4 }}
            onClick={() => setActiveTab('calculators')}
            className="group relative bg-white rounded-3xl p-6 border border-slate-200/90 hover:border-emerald-300 shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                Lab Calculators
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Interactive tools for PCR Master Mix preparation, Molarity dilutions ($C_1V_1 = C_2V_2$), Beer-Lambert Absorbance, and RCF/RPM conversion.
              </p>
            </div>
            <div className="flex items-center text-emerald-700 text-xs font-bold pt-2">
              <span>Open Calculators</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Card 5: Quiz */}
          <motion.div 
            whileHover={{ y: -4 }}
            onClick={() => setActiveTab('quiz')}
            className="group relative bg-white rounded-3xl p-6 border border-slate-200/90 hover:border-violet-300 shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-violet-50 text-violet-700 border border-violet-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-violet-700 transition-colors">
                Interactive Quiz
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Test your understanding with multiple-choice questions, difficulty filters, instant scoring, and detailed scientific explanations.
              </p>
            </div>
            <div className="flex items-center text-violet-700 text-xs font-bold pt-2">
              <span>Take Quiz</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Card 6: Quick Daily Tip */}
          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-teal-950 text-white rounded-3xl p-6 shadow-md border border-teal-500/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-amber-400 mb-3">
                <Lightbulb className="w-5 h-5 animate-bounce" />
                <span className="text-xs font-bold uppercase tracking-wider">Pro Lab Tip</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Preventing Aerosol Contamination in PCR</h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                Always use aerosol filter barrier pipette tips when setting up PCR reactions. Non-filter tips allow microscopic droplets to enter pipette barrels, contaminating future reactions with microgram quantities of target amplicons!
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 text-xs text-teal-300 flex items-center justify-between font-medium">
              <span>BioLab Best Practices</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Laboratory Techniques Overview */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">Featured Protocols</h2>
            <p className="text-slate-500 text-xs sm:text-sm">Popular molecular biology and biochemistry techniques</p>
          </div>
          <button
            onClick={() => setActiveTab('techniques')}
            className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center space-x-1 cursor-pointer"
          >
            <span>See all 7 techniques</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TECHNIQUES.slice(0, 4).map((tech) => (
            <motion.div
              key={tech.id}
              whileHover={{ y: -4 }}
              onClick={() => onSelectTechnique(tech)}
              className="bg-white rounded-3xl border border-slate-200/90 hover:border-teal-300 shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-2 bg-slate-950 border-b border-slate-800">
                <TechniqueIllustration techniqueId={tech.id} className="w-full h-28" />
              </div>

              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-100">
                      {tech.category}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-sm group-hover:text-teal-700 transition-colors line-clamp-1">{tech.name}</h3>
                  <p className="text-slate-500 text-[11px] line-clamp-2 mt-1 leading-relaxed">{tech.purpose}</p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-700">
                  <span>View Protocol</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

