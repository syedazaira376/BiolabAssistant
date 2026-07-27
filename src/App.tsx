/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NavTab, Technique } from './types';
import { Header } from './components/Header';
import { HomeSection } from './components/HomeSection';
import { TechniquesSection } from './components/TechniquesSection';
import { ProtocolViewerSection } from './components/ProtocolViewerSection';
import { EquipmentSection } from './components/EquipmentSection';
import { FlashcardsSection } from './components/FlashcardsSection';
import { QuickTipsSection } from './components/QuickTipsSection';
import { FaqSection } from './components/FaqSection';
import { AiAssistantSection } from './components/AiAssistantSection';
import { SafetySection } from './components/SafetySection';
import { CalculatorsSection } from './components/CalculatorsSection';
import { QuizSection } from './components/QuizSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [aiPrompt, setAiPrompt] = useState<string>('');
  const [aiContextTechnique, setAiContextTechnique] = useState<string>('');
  const [selectedTechniqueFromHome, setSelectedTechniqueFromHome] = useState<Technique | null>(null);

  const handleAskAI = (prompt: string, techniqueName: string) => {
    setAiPrompt(prompt);
    setAiContextTechnique(techniqueName);
    setActiveTab('ai-assistant');
  };

  const handleSelectTechniqueFromHome = (tech: Technique) => {
    setSelectedTechniqueFromHome(tech);
    setActiveTab('techniques');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between selection:bg-blue-200 selection:text-blue-900">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex-1 w-full">
        {activeTab === 'home' && (
          <HomeSection
            setActiveTab={setActiveTab}
            onSelectTechnique={handleSelectTechniqueFromHome}
          />
        )}

        {activeTab === 'techniques' && (
          <TechniquesSection
            onAskAI={handleAskAI}
            setActiveTab={setActiveTab}
            selectedTechniqueFromHome={selectedTechniqueFromHome}
          />
        )}

        {activeTab === 'protocols' && (
          <ProtocolViewerSection
            onAskAI={handleAskAI}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'equipment' && (
          <EquipmentSection
            onAskAI={handleAskAI}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'flashcards' && (
          <FlashcardsSection
            onAskAI={handleAskAI}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'tips' && (
          <QuickTipsSection
            onAskAI={handleAskAI}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'faq' && (
          <FaqSection
            onAskAI={handleAskAI}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'ai-assistant' && (
          <AiAssistantSection
            initialPrompt={aiPrompt}
            initialContextTechnique={aiContextTechnique}
            onClearInitialPrompt={() => {
              setAiPrompt('');
              setAiContextTechnique('');
            }}
          />
        )}

        {activeTab === 'safety' && <SafetySection />}

        {activeTab === 'calculators' && <CalculatorsSection />}

        {activeTab === 'quiz' && <QuizSection />}
      </main>

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
