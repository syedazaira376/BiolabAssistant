import React from 'react';
import { NavTab } from '../types';
import { Dna, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-slate-900 pb-8">
          <div className="space-y-2">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-teal-500 flex items-center justify-center text-white font-bold shadow-md shadow-teal-500/10">
                <Dna className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">BioLab Assistant</span>
            </div>
            <p className="text-slate-400 text-xs max-w-md leading-relaxed">
              An interactive educational web platform designed for biotechnology, microbiology, and life science students to learn laboratory techniques and biosafety rules through an interactive AI assistant powered by Gemini.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold text-slate-300">
            <button onClick={() => setActiveTab('home')} className="hover:text-teal-400 transition-colors cursor-pointer">Home</button>
            <button onClick={() => setActiveTab('techniques')} className="hover:text-teal-400 transition-colors cursor-pointer">Techniques</button>
            <button onClick={() => setActiveTab('protocols')} className="hover:text-teal-400 transition-colors cursor-pointer">Protocols</button>
            <button onClick={() => setActiveTab('equipment')} className="hover:text-teal-400 transition-colors cursor-pointer">Equipment</button>
            <button onClick={() => setActiveTab('flashcards')} className="hover:text-teal-400 transition-colors cursor-pointer">Flashcards</button>
            <button onClick={() => setActiveTab('quiz')} className="hover:text-teal-400 transition-colors cursor-pointer">Quiz</button>
            <button onClick={() => setActiveTab('safety')} className="hover:text-teal-400 transition-colors cursor-pointer">Lab Safety</button>
            <button onClick={() => setActiveTab('calculators')} className="hover:text-teal-400 transition-colors cursor-pointer">Calculators</button>
            <button onClick={() => setActiveTab('tips')} className="hover:text-teal-400 transition-colors cursor-pointer">Tips</button>
            <button onClick={() => setActiveTab('faq')} className="hover:text-teal-400 transition-colors cursor-pointer">FAQ</button>
            <button onClick={() => setActiveTab('ai-assistant')} className="hover:text-teal-400 transition-colors cursor-pointer">AI Helper</button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-teal-500" />
            <span>Academic & Life Sciences Educational Reference</span>
          </div>

          <div className="flex items-center space-x-1 font-medium">
            <span>Powered by Gemini & React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

