import React, { useState } from 'react';
import { FAQ_DATA, FAQItem } from '../data/faqData';
import { Search, ChevronDown, HelpCircle, Bot, Sparkles, BookOpen } from 'lucide-react';
import { NavTab } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface FaqSectionProps {
  onAskAI?: (prompt: string, context: string) => void;
  setActiveTab?: (tab: NavTab) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onAskAI }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const categories = ['All', 'PCR & Molecular', 'Electrophoresis', 'Proteins & ELISA', 'Cell Culture', 'Safety & Equipment'];

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.keyTakeaway.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8 pb-12 max-w-4xl mx-auto">
      {/* Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-950 to-teal-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-teal-500/20">
        <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-teal-300" />
            <span>Student & Researcher Reference</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Frequently Asked Questions (FAQ)
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            High-yield answers to common laboratory questions, reaction buffer mechanics, troubleshooting FAQs, and safety protocols.
          </p>

          {/* Search & Category Filter */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-teal-400" />
              <input
                type="text"
                placeholder="Search FAQ questions (e.g. EDTA, smile bands, SDS, complement)..."
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

      {/* Accordion List */}
      <div className="space-y-4">
        {filteredFaqs.map((faq) => {
          const isOpen = openFaqId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                className="w-full p-5 text-left flex items-center justify-between space-x-4 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-teal-100 text-teal-900 border border-teal-200 flex-shrink-0">
                    {faq.category}
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug">
                    {faq.question}
                  </h3>
                </div>

                <ChevronDown
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-teal-600' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-slate-100 bg-slate-50/60 p-5 space-y-4 text-xs sm:text-sm text-slate-700"
                  >
                    <p className="leading-relaxed font-normal">{faq.answer}</p>

                    <div className="p-3.5 bg-teal-50/80 rounded-xl border border-teal-200/80 space-y-1 text-xs">
                      <strong className="font-extrabold text-teal-950 uppercase tracking-wider text-[10px] flex items-center space-x-1">
                        <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                        <span>Key Takeaway:</span>
                      </strong>
                      <p className="text-teal-950 font-medium">{faq.keyTakeaway}</p>
                    </div>

                    {onAskAI && (
                      <div className="pt-2 flex justify-end">
                        <button
                          onClick={() => onAskAI(`Can you elaborate further on this lab question: "${faq.question}"?`, faq.question)}
                          className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center space-x-1.5 cursor-pointer"
                        >
                          <Bot className="w-4 h-4 text-teal-600" />
                          <span>Ask AI Assistant to explain more</span>
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        {filteredFaqs.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-300 space-y-3">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">No FAQ questions match your filter</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try resetting your search query or asking the AI Assistant directly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
