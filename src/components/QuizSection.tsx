import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/quizData';
import { HelpCircle, CheckCircle2, XCircle, RefreshCw, Award, ArrowRight, BookOpen, ChevronRight, Sparkles } from 'lucide-react';

export const QuizSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<{ questionId: number; selectedOption: number; isCorrect: boolean }[]>([]);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  const categories = ['All', 'PCR', 'DNA Extraction', 'Gel Electrophoresis', 'ELISA', 'Microscopy', 'Cell Culture', 'Spectrophotometry', 'Lab Safety'];

  const filteredQuestions = QUIZ_QUESTIONS.filter(
    (q) => selectedCategory === 'All' || q.category === selectedCategory
  );

  const currentQ = filteredQuestions[currentQuestionIndex];

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || !currentQ || isAnswerSubmitted) return;

    const isCorrect = selectedOption === currentQ.correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setUserAnswers((prev) => [
      ...prev,
      { questionId: currentQ.id, selectedOption, isCorrect },
    ]);

    setIsAnswerSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setUserAnswers([]);
    setQuizCompleted(false);
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setUserAnswers([]);
    setQuizCompleted(false);
  };

  const getPerformanceBadge = (pct: number) => {
    if (pct >= 90) return { title: 'Lab Master Scholar', color: 'bg-teal-100 text-teal-900 border-teal-300' };
    if (pct >= 70) return { title: 'Adept Biotechnologist', color: 'bg-cyan-100 text-cyan-900 border-cyan-300' };
    if (pct >= 50) return { title: 'Lab Apprentice', color: 'bg-amber-100 text-amber-900 border-amber-300' };
    return { title: 'Trainee in Review', color: 'bg-slate-100 text-slate-800 border-slate-300' };
  };

  const scorePercentage = filteredQuestions.length > 0 ? Math.round((score / filteredQuestions.length) * 100) : 0;

  return (
    <div className="space-y-8 pb-12 max-w-4xl mx-auto">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-teal-950 text-white p-6 sm:p-10 shadow-2xl border border-teal-500/20">
        <div className="absolute -right-12 -bottom-12 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-teal-300" />
            <span>Interactive Assessment</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white">Laboratory Knowledge Self-Assessment</h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Test your mastery of biotechnology techniques, reaction mechanisms, calculations, and safety rules with detailed explanations.
          </p>

          {/* Category Pills */}
          <div className="pt-2 flex space-x-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
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

      {/* Main Quiz Area */}
      {!quizCompleted && currentQ && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
          {/* Progress & Category Info */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-teal-100 text-teal-900 border border-teal-200">
                {currentQ.category}
              </span>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                {currentQ.difficulty}
              </span>
            </div>

            <span className="text-xs font-extrabold text-slate-600">
              Question {currentQuestionIndex + 1} of {filteredQuestions.length}
            </span>
          </div>

          {/* Question Text */}
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
            {currentQ.question}
          </h2>

          {/* Options */}
          <div className="space-y-3">
            {currentQ.options.map((optionText, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrectAnswer = idx === currentQ.correctAnswer;

              let btnStyle = 'bg-slate-50 border-slate-200 hover:bg-slate-100/80 text-slate-800';

              if (isAnswerSubmitted) {
                if (isCorrectAnswer) {
                  btnStyle = 'bg-teal-50 border-teal-400 text-teal-950 font-bold';
                } else if (isSelected && !isCorrectAnswer) {
                  btnStyle = 'bg-rose-50 border-rose-300 text-rose-950 font-semibold';
                } else {
                  btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                }
              } else if (isSelected) {
                btnStyle = 'bg-teal-50/80 border-teal-500 text-teal-950 font-bold ring-2 ring-teal-200';
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswerSubmitted}
                  className={`w-full p-4 rounded-2xl border text-left text-sm transition-all flex items-center justify-between cursor-pointer disabled:cursor-default ${btnStyle}`}
                >
                  <div className="flex items-start space-x-3">
                    <span className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-snug">{optionText}</span>
                  </div>

                  {isAnswerSubmitted && isCorrectAnswer && (
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 ml-2" />
                  )}

                  {isAnswerSubmitted && isSelected && !isCorrectAnswer && (
                    <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box after Answer Submission */}
          {isAnswerSubmitted && (
            <div className="p-4 bg-teal-50/60 rounded-2xl border border-teal-200/80 space-y-2 text-xs">
              <div className="font-extrabold text-teal-950 flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-teal-700" />
                <span>Scientific Principles & Explanation:</span>
              </div>
              <p className="text-teal-900 leading-relaxed font-medium">{currentQ.explanation}</p>
            </div>
          )}

          {/* Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <span className="text-xs text-slate-600 font-bold">
              Current Score: {score} / {currentQuestionIndex + (isAnswerSubmitted ? 1 : 0)}
            </span>

            {!isAnswerSubmitted ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedOption === null}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 disabled:opacity-50 text-white font-extrabold text-sm transition-all cursor-pointer shadow-md shadow-teal-500/10"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-extrabold text-sm transition-all cursor-pointer flex items-center space-x-2 shadow-md shadow-teal-500/10"
              >
                <span>{currentQuestionIndex < filteredQuestions.length - 1 ? 'Next Question' : 'View Quiz Summary'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Quiz Completed Summary */}
      {quizCompleted && (
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-md text-center space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-teal-50 text-teal-700 flex items-center justify-center mx-auto border border-teal-100 shadow-inner">
            <Award className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className={`inline-block text-xs font-extrabold uppercase px-3.5 py-1.5 rounded-full border ${getPerformanceBadge(scorePercentage).color}`}>
              {getPerformanceBadge(scorePercentage).title}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Quiz Completed!</h2>
            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              You scored <strong className="text-slate-900 font-extrabold">{score}</strong> out of <strong className="text-slate-900 font-extrabold">{filteredQuestions.length}</strong> questions ({scorePercentage}%).
            </p>
          </div>

          <div className="flex items-center justify-center space-x-4 pt-2">
            <button
              onClick={handleResetQuiz}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white font-extrabold text-sm transition-all shadow-md flex items-center space-x-2 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Retake Quiz</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

