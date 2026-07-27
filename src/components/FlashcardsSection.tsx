import React, { useState } from 'react';
import { FLASHCARDS_DATA, Flashcard } from '../data/flashcardsData';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, RotateCcw, CheckCircle2, XCircle, HelpCircle, Sparkles, Shuffle, ArrowRight, ArrowLeft, Award, Bot } from 'lucide-react';
import { NavTab } from '../types';

interface FlashcardsSectionProps {
  onAskAI?: (prompt: string, topic: string) => void;
  setActiveTab?: (tab: NavTab) => void;
}

export const FlashcardsSection: React.FC<FlashcardsSectionProps> = ({ onAskAI }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);

  // Score tracking map: card.id -> 'mastered' | 'review'
  const [masteryStatus, setMasteryStatus] = useState<Record<number, 'mastered' | 'review'>>({});

  const categories = ['All', 'Molecular Biology', 'Biochemistry', 'Cell Biology', 'Lab Safety & Calculations'];

  const filteredCards = FLASHCARDS_DATA.filter(
    (card) => selectedCategory === 'All' || card.category === selectedCategory
  );

  const currentCard = filteredCards[currentIndex] || filteredCards[0];

  const handleNext = () => {
    setIsFlipped(false);
    setShowHint(false);
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setShowHint(false);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(filteredCards.length - 1);
    }
  };

  const handleMarkMastery = (status: 'mastered' | 'review') => {
    if (!currentCard) return;
    setMasteryStatus((prev) => ({ ...prev, [currentCard.id]: status }));
    handleNext();
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    setShowHint(false);
    setCurrentIndex(Math.floor(Math.random() * filteredCards.length));
  };

  const masteredCount = Object.values(masteryStatus).filter((s) => s === 'mastered').length;
  const totalMasteryPercent = FLASHCARDS_DATA.length > 0 ? Math.round((masteredCount / FLASHCARDS_DATA.length) * 100) : 0;

  return (
    <div className="space-y-8 pb-12 max-w-4xl mx-auto">
      {/* Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-950 to-teal-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-teal-500/20">
        <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5 text-teal-300" />
                <span>Active Recall Revision</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white">Laboratory Revision Flashcards</h1>
            </div>

            {/* Mastery Meter */}
            <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 text-right">
              <div className="text-xs text-teal-300 font-extrabold">Overall Mastery: {totalMasteryPercent}%</div>
              <div className="text-[10px] text-slate-300">{masteredCount} of {FLASHCARDS_DATA.length} Concept Cards</div>
            </div>
          </div>

          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Test your quick recall of biotechnology principles, reagent mechanics, formula conversions, and safety rules.
          </p>

          {/* Category Filter Pills */}
          <div className="pt-2 flex space-x-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentIndex(0);
                  setIsFlipped(false);
                  setShowHint(false);
                }}
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

      {/* Main Flashcard Container */}
      {currentCard && (
        <div className="space-y-6">
          {/* Card Meta Bar */}
          <div className="flex items-center justify-between text-xs font-bold text-slate-600 px-2">
            <span className="flex items-center space-x-2">
              <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-900 border border-teal-200">
                {currentCard.category}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                {currentCard.difficulty}
              </span>
            </span>

            <span>
              Card {currentIndex + 1} of {filteredCards.length}
            </span>
          </div>

          {/* 3D Flip Card */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="cursor-pointer perspective-1000 group min-h-[320px]"
          >
            <motion.div
              initial={false}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="relative w-full min-h-[320px] rounded-3xl bg-white border border-slate-200 shadow-lg p-8 flex flex-col justify-between transform-style-3d cursor-pointer hover:border-teal-400 transition-colors"
            >
              {/* Front Side (Question) */}
              <div className={`space-y-4 ${isFlipped ? 'hidden' : 'block'}`}>
                <div className="flex items-center justify-between text-xs text-slate-400 font-bold uppercase tracking-wider">
                  <span>Question Concept</span>
                  <span className="text-teal-600 flex items-center space-x-1">
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Click card to reveal answer</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug pt-4">
                  {currentCard.question}
                </h3>

                {/* Hint Box */}
                {showHint && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-950 font-medium space-y-1"
                  >
                    <span className="font-extrabold text-amber-900 block uppercase tracking-wider text-[10px]">
                      Revision Hint:
                    </span>
                    <p>{currentCard.hint}</p>
                  </motion.div>
                )}
              </div>

              {/* Back Side (Answer) - inverted for flip */}
              <div className={`space-y-4 transform rotate-y-180 ${isFlipped ? 'block' : 'hidden'}`}>
                <div className="flex items-center justify-between text-xs text-teal-700 font-bold uppercase tracking-wider">
                  <span>Scientific Answer</span>
                  <span className="text-slate-400">Click to flip back</span>
                </div>

                <div className="pt-2 text-slate-900 text-base sm:text-lg font-medium leading-relaxed whitespace-pre-line">
                  {currentCard.answer}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowHint(!showHint);
                  }}
                  className="text-slate-500 hover:text-teal-700 font-bold flex items-center space-x-1.5 cursor-pointer"
                >
                  <HelpCircle className="w-4 h-4 text-amber-500" />
                  <span>{showHint ? 'Hide Hint' : 'Show Hint'}</span>
                </button>

                <div className="flex items-center space-x-2">
                  {masteryStatus[currentCard.id] === 'mastered' && (
                    <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200 flex items-center space-x-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Mastered</span>
                    </span>
                  )}
                  {masteryStatus[currentCard.id] === 'review' && (
                    <span className="text-xs font-extrabold text-rose-700 bg-rose-100 px-3 py-1 rounded-full border border-rose-200 flex items-center space-x-1">
                      <XCircle className="w-3.5 h-3.5" />
                      <span>Needs Review</span>
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Action Bar: Mastery Voting & Card Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <button
                onClick={() => handleMarkMastery('review')}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-900 border border-rose-200 font-extrabold text-xs transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <XCircle className="w-4 h-4 text-rose-600" />
                <span>Need Review</span>
              </button>

              <button
                onClick={() => handleMarkMastery('mastered')}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-2xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-xs transition-all shadow-md shadow-teal-500/20 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4 text-slate-950" />
                <span>Got It! (Mastered)</span>
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                className="p-3 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
                title="Previous Card"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleShuffle}
                className="p-3 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
                title="Shuffle Deck"
              >
                <Shuffle className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                className="px-5 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs transition-all flex items-center space-x-2 cursor-pointer"
              >
                <span>Next Card</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
