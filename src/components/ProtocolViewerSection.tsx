import React, { useState, useEffect } from 'react';
import { TECHNIQUES } from '../data/techniquesData';
import { Technique, NavTab } from '../types';
import { motion } from 'motion/react';
import { CheckSquare, Square, Play, Pause, RotateCcw, Clock, BookOpen, Dna, TestTube, Layers, ShieldAlert, Microscope, Sparkles, AlertCircle, Bot, Download, CheckCircle2 } from 'lucide-react';

interface ProtocolViewerSectionProps {
  onAskAI?: (prompt: string, techniqueName: string) => void;
  setActiveTab?: (tab: NavTab) => void;
}

export const ProtocolViewerSection: React.FC<ProtocolViewerSectionProps> = ({ onAskAI }) => {
  // Target 5 key protocols requested
  const targetIds = ['pcr', 'dna-extraction', 'gel-electrophoresis', 'elisa', 'microscopy'];
  const protocols = TECHNIQUES.filter((t) => targetIds.includes(t.id));

  const [selectedProtocolId, setSelectedProtocolId] = useState<string>('pcr');
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});
  
  // Timer State
  const [timerSeconds, setTimerSeconds] = useState<number>(180); // 3 minutes default
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  const activeProtocol = protocols.find((p) => p.id === selectedProtocolId) || protocols[0];

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timerSeconds]);

  const toggleStep = (stepNumber: number) => {
    const key = `${selectedProtocolId}-${stepNumber}`;
    setCompletedSteps((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedCount = activeProtocol.procedure.filter((step) => completedSteps[`${selectedProtocolId}-${step.stepNumber}`]).length;
  const progressPercent = Math.round((completedCount / activeProtocol.procedure.length) * 100);

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const setTimerPreset = (minutes: number) => {
    setIsTimerRunning(false);
    setTimerSeconds(minutes * 60);
  };

  const getIcon = (id: string) => {
    switch (id) {
      case 'pcr': return <Dna className="w-5 h-5 text-teal-600" />;
      case 'dna-extraction': return <TestTube className="w-5 h-5 text-indigo-600" />;
      case 'gel-electrophoresis': return <Layers className="w-5 h-5 text-cyan-600" />;
      case 'elisa': return <ShieldAlert className="w-5 h-5 text-emerald-600" />;
      case 'microscopy': return <Microscope className="w-5 h-5 text-violet-600" />;
      default: return <BookOpen className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-950 to-teal-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-teal-500/20">
        <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold uppercase tracking-wider">
            <CheckSquare className="w-3.5 h-3.5 text-teal-300" />
            <span>Interactive Protocol Execution</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Step-by-Step Protocol Execution Viewer
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Interactive step-by-step procedure checklists, incubation countdown timers, required reagent lists, and pro tips for core biotechnology protocols.
          </p>

          {/* Protocol Selection Tabs */}
          <div className="pt-2 flex space-x-2 overflow-x-auto pb-1">
            {protocols.map((p) => {
              const isActive = p.id === selectedProtocolId;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedProtocolId(p.id)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold transition-all cursor-pointer whitespace-nowrap flex items-center space-x-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-md'
                      : 'bg-white/10 text-slate-200 hover:bg-white/20 border border-white/10'
                  }`}
                >
                  <span className={isActive ? 'text-slate-950' : 'text-teal-300'}>
                    {getIcon(p.id)}
                  </span>
                  <span>{p.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Protocol Workspace Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (2/3 width): Step-by-Step Interactive Steps */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-extrabold px-3 py-0.5 rounded-full bg-teal-100 text-teal-900 border border-teal-200">
                    {activeProtocol.category}
                  </span>
                  <span className="text-xs font-bold text-slate-500">{activeProtocol.procedure.length} Steps</span>
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900">{activeProtocol.name}</h2>
              </div>

              {/* Progress Circle & Bar */}
              <div className="flex items-center space-x-3 bg-slate-50 p-3 rounded-2xl border border-slate-200/80">
                <div className="text-right">
                  <div className="text-xs font-extrabold text-slate-900">{progressPercent}% Completed</div>
                  <div className="text-[10px] text-slate-500">{completedCount} of {activeProtocol.procedure.length} Steps</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-teal-50 border-2 border-teal-500 flex items-center justify-center font-extrabold text-xs text-teal-900">
                  {progressPercent}%
                </div>
              </div>
            </div>

            {/* Steps Checklist */}
            <div className="space-y-4">
              {activeProtocol.procedure.map((step) => {
                const isDone = !!completedSteps[`${selectedProtocolId}-${step.stepNumber}`];
                return (
                  <motion.div
                    key={step.stepNumber}
                    whileHover={{ scale: 1.005 }}
                    className={`p-5 rounded-2xl border transition-all duration-200 ${
                      isDone
                        ? 'bg-teal-50/50 border-teal-300 text-slate-900'
                        : 'bg-white border-slate-200 text-slate-800 hover:border-teal-200'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <button
                        onClick={() => toggleStep(step.stepNumber)}
                        className="mt-0.5 text-teal-600 hover:text-teal-700 cursor-pointer focus:outline-none"
                      >
                        {isDone ? (
                          <CheckSquare className="w-6 h-6 text-teal-600 fill-teal-100" />
                        ) : (
                          <Square className="w-6 h-6 text-slate-400 hover:text-teal-500" />
                        )}
                      </button>

                      <div className="space-y-2 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className={`font-extrabold text-sm sm:text-base ${isDone ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                            Step {step.stepNumber}: {step.title}
                          </h3>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isDone ? 'bg-teal-200 text-teal-900' : 'bg-slate-100 text-slate-600'}`}>
                            {isDone ? 'Done' : 'Pending'}
                          </span>
                        </div>

                        <p className={`text-xs leading-relaxed ${isDone ? 'text-slate-500' : 'text-slate-700'}`}>
                          {step.description}
                        </p>

                        {step.proTip && (
                          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 text-xs text-amber-950 font-medium space-y-1">
                            <span className="font-extrabold text-amber-900 flex items-center space-x-1.5 text-[11px] uppercase tracking-wider">
                              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                              <span>Pro Tip:</span>
                            </span>
                            <p>{step.proTip}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Protocol Actions */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => {
                  const resetMap: Record<string, boolean> = { ...completedSteps };
                  activeProtocol.procedure.forEach((s) => {
                    resetMap[`${selectedProtocolId}-${s.stepNumber}`] = false;
                  });
                  setCompletedSteps(resetMap);
                }}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
              >
                Reset Checklist
              </button>

              {onAskAI && (
                <button
                  onClick={() => onAskAI(`What are common pitfalls and troubleshooting solutions during the ${activeProtocol.name} procedure?`, activeProtocol.name)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-extrabold text-xs transition-all shadow-md flex items-center space-x-2 cursor-pointer"
                >
                  <Bot className="w-4 h-4" />
                  <span>Ask AI for Troubleshooting</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Column (1/3 width): Lab Incubation Timer & Materials */}
        <div className="space-y-6">
          {/* Lab Incubation Countdown Timer */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-lg space-y-4">
            <div className="flex items-center space-x-2 text-teal-400">
              <Clock className="w-5 h-5 animate-pulse" />
              <h3 className="font-extrabold text-sm uppercase tracking-wider">Incubation Timer</h3>
            </div>

            <div className="bg-slate-950/80 rounded-2xl p-4 text-center border border-slate-800 space-y-1">
              <div className="text-4xl sm:text-5xl font-mono font-extrabold text-teal-300 tracking-wider">
                {formatTimer(timerSeconds)}
              </div>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Minutes : Seconds</p>
            </div>

            {/* Presets */}
            <div className="grid grid-cols-4 gap-1.5 text-xs">
              {[1, 3, 15, 60].map((mins) => (
                <button
                  key={mins}
                  onClick={() => setTimerPreset(mins)}
                  className="py-1.5 rounded-xl bg-slate-800 hover:bg-teal-600 text-slate-200 hover:text-white font-bold text-[11px] transition-colors cursor-pointer"
                >
                  {mins}m
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-2 pt-1">
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className={`flex-1 py-2.5 rounded-xl text-xs font-extrabold flex items-center justify-center space-x-2 cursor-pointer transition-all ${
                  isTimerRunning
                    ? 'bg-amber-500 hover:bg-amber-600 text-slate-950'
                    : 'bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-md shadow-teal-500/20'
                }`}
              >
                {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isTimerRunning ? 'Pause Timer' : 'Start Timer'}</span>
              </button>

              <button
                onClick={() => {
                  setIsTimerRunning(false);
                  setTimerSeconds(180);
                }}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
                title="Reset Timer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Required Reagents & Materials */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-4">
            <h3 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider">
              Required Reagents & Supplies
            </h3>

            <div className="space-y-3 text-xs">
              <div className="space-y-1.5">
                <span className="font-extrabold text-teal-800 text-[11px] uppercase tracking-wider block">Reagents:</span>
                <ul className="space-y-1 text-slate-700">
                  {activeProtocol.requiredMaterials.reagents.map((r, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-teal-500 font-bold">•</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <span className="font-extrabold text-teal-800 text-[11px] uppercase tracking-wider block">Equipment:</span>
                <ul className="space-y-1 text-slate-700">
                  {activeProtocol.requiredMaterials.equipment.map((e, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-teal-500 font-bold">•</span>
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
