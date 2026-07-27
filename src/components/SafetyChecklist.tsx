import React, { useState } from 'react';
import { SAFETY_CHECKLIST_DATA, ChecklistCategory } from '../data/checklistData';
import { CheckSquare, Square, ShieldCheck, AlertTriangle, RefreshCw, Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const SafetyChecklist: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const allItemIds = SAFETY_CHECKLIST_DATA.flatMap((cat) => cat.items.map((i) => i.id));
  const checkedCount = allItemIds.filter((id) => checkedItems[id]).length;
  const totalCount = allItemIds.length;
  const progressPercent = Math.round((checkedCount / totalCount) * 100);

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleReset = () => {
    setCheckedItems({});
  };

  return (
    <div className="space-y-6">
      {/* Safety Compliance Meter Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 border border-teal-200 text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            <span>Interactive Pre-Lab Verification</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Pre-Lab Biosafety & PPE Checklist</h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
            Complete all safety verifications prior to starting wet-lab experiments or handling biological/chemical reagents.
          </p>
        </div>

        {/* Progress Display */}
        <div className="flex items-center space-x-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <div className="text-right">
            <div className="text-sm font-extrabold text-slate-900">{progressPercent}% Compliant</div>
            <div className="text-xs text-slate-500">{checkedCount} of {totalCount} Items Ticked</div>
          </div>
          <div className={`w-14 h-14 rounded-full border-4 flex items-center justify-center text-sm font-extrabold transition-all ${
            progressPercent === 100
              ? 'bg-teal-500 text-slate-950 border-teal-400'
              : 'bg-teal-50 text-teal-900 border-teal-500'
          }`}>
            {progressPercent}%
          </div>
        </div>
      </div>

      {/* Checklist Completion Badge */}
      {progressPercent === 100 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-5 bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 rounded-3xl shadow-lg flex items-center justify-between"
        >
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-2xl bg-slate-950/20 text-slate-950">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-base">Biosafety Verification Approved!</h3>
              <p className="text-xs font-medium">All PPE, ventilation, and emergency safety checks are 100% verified for lab access.</p>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="px-4 py-2 bg-slate-950 text-white rounded-xl text-xs font-extrabold hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Reset
          </button>
        </motion.div>
      )}

      {/* Category Checklists Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SAFETY_CHECKLIST_DATA.map((cat) => (
          <div
            key={cat.id}
            className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-4"
          >
            <div className="border-b border-slate-100 pb-3 space-y-1">
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">{cat.categoryTitle}</h3>
              <p className="text-xs text-slate-500">{cat.description}</p>
            </div>

            <div className="space-y-2.5">
              {cat.items.map((item) => {
                const isChecked = !!checkedItems[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleCheck(item.id)}
                    className={`p-3.5 rounded-2xl border text-xs transition-all cursor-pointer flex items-start space-x-3 ${
                      isChecked
                        ? 'bg-teal-50/60 border-teal-300 text-slate-900 font-medium'
                        : 'bg-slate-50/80 border-slate-200 text-slate-800 hover:bg-slate-100/80'
                    }`}
                  >
                    <button type="button" className="mt-0.5 text-teal-600 focus:outline-none">
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-teal-600 fill-teal-100" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-400 hover:text-teal-500" />
                      )}
                    </button>

                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`font-extrabold ${isChecked ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                          {item.label}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          item.criticality === 'Mandatory'
                            ? 'bg-rose-100 text-rose-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {item.criticality}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed">{item.details}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end pt-2">
        <button
          onClick={handleReset}
          className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors flex items-center space-x-2 cursor-pointer"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Reset All Checklists</span>
        </button>
      </div>
    </div>
  );
};
