import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import ReactMarkdown from 'react-markdown';
import {
  Bot,
  Send,
  Trash2,
  Sparkles,
  Copy,
  Check,
  User,
  RefreshCw,
  AlertCircle,
  FlaskConical,
  Dna,
  TestTube,
  Microscope,
  ShieldAlert,
  Wrench,
  Layers,
  Search,
} from 'lucide-react';
import { StructuredResponseCard } from './StructuredResponseCard';
import { TOPIC_PRESETS, findMatchingPreset } from '../data/assistantTopics';

interface AiAssistantSectionProps {
  initialPrompt?: string;
  initialContextTechnique?: string;
  onClearInitialPrompt?: () => void;
}

export const AiAssistantSection: React.FC<AiAssistantSectionProps> = ({
  initialPrompt,
  initialContextTechnique,
  onClearInitialPrompt,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: `Hello! I am **BioLab AI**, your expert digital Laboratory Teaching Assistant powered by Gemini.

I provide clear, accurate, and educational responses structured into 7 comprehensive sections:
- **• Overview**
- **• Principle**
- **• Procedure**
- **• Applications**
- **• Advantages**
- **• Limitations**
- **• Safety Tips**

Select any core laboratory topic below or ask your own question!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialPrompt) {
      handleSendMessage(initialPrompt, initialContextTechnique);
      if (onClearInitialPrompt) onClearInitialPrompt();
    }
  }, [initialPrompt]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSendMessage = async (textToSend?: string, contextTech?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim() || loading) return;

    setErrorMsg(null);
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setLoading(true);

    try {
      const historyPayload = messages
        .filter((m) => m.id !== 'welcome')
        .map((m) => ({
          role: m.sender === 'user' ? 'user' : 'model',
          content: m.text,
        }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: historyPayload,
          contextTechnique: contextTech || initialContextTechnique,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || 'Server error generating AI response.');
      }

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: data.reply || 'No response returned.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err: any) {
      console.warn('AI API Call Warning:', err);

      // Check if we have a structured fallback for this topic
      const presetMatch = findMatchingPreset(text);
      if (presetMatch) {
        const fallbackMsg: ChatMessage = {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: presetMatch.structuredResponse,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, fallbackMsg]);
      } else {
        setErrorMsg(
          err?.message || 'Failed to connect to AI Assistant server. Please verify your GEMINI_API_KEY environment variable.'
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'welcome-' + Date.now(),
        sender: 'ai',
        text: 'Chat history cleared. Select a laboratory technique below to generate a clear, 7-section structured response card!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <div className="space-y-6 pb-12 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-teal-950 text-white p-6 sm:p-8 shadow-2xl border border-teal-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="absolute -right-12 -bottom-12 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-teal-300" />
            <span>Gemini AI Tutor</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">AI Laboratory Assistant</h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
            Instant, educational responses formatted in clean structured cards with <strong>Overview, Principle, Procedure, Applications, Advantages, Limitations, and Safety Tips</strong>.
          </p>
        </div>

        <button
          onClick={handleClearChat}
          className="relative z-10 flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-bold backdrop-blur-md border border-white/10 transition-colors cursor-pointer"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Clear Chat</span>
        </button>
      </div>

      {/* Topics Selector Grid */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wider flex items-center space-x-1.5">
            <FlaskConical className="w-4 h-4 text-teal-600" />
            <span>Explore Laboratory Topics (1-Click Structured Card Response):</span>
          </span>
          <span className="text-[11px] font-semibold text-slate-500">11 Core Techniques</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {TOPIC_PRESETS.map((topic) => (
            <button
              key={topic.id}
              onClick={() => handleSendMessage(topic.query)}
              disabled={loading}
              className="group text-left p-3 rounded-2xl bg-slate-50 hover:bg-teal-50/80 border border-slate-200/80 hover:border-teal-300 transition-all cursor-pointer disabled:opacity-50 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-extrabold text-slate-900 group-hover:text-teal-900 transition-colors">
                  {topic.name}
                </div>
                <div className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">{topic.shortDesc}</div>
              </div>
              <div className="mt-2 text-[10px] font-bold text-teal-700 opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-1">
                <span>View Card</span>
                <span>→</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Chat Box */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm flex flex-col h-[650px] overflow-hidden">
        {/* Messages Container */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start space-x-3 ${
                msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'
              }`}
            >
              {/* Avatar */}
              <div
                className={`w-9 h-9 rounded-2xl flex items-center justify-center flex-shrink-0 text-white font-bold text-xs shadow-xs ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-tr from-slate-700 to-slate-900'
                    : 'bg-gradient-to-tr from-teal-600 to-cyan-600'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-5 h-5" />}
              </div>

              {/* Bubble */}
              <div
                className={`group relative max-w-[92%] sm:max-w-[88%] rounded-2xl px-5 py-4 text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-tr-none'
                    : 'bg-slate-50 text-slate-800 border border-slate-200/80 rounded-tl-none'
                }`}
              >
                {msg.sender === 'ai' ? (
                  msg.id === 'welcome' || msg.id.startsWith('welcome-') ? (
                    <div className="markdown-body text-slate-800 space-y-2">
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                  ) : (
                    <StructuredResponseCard text={msg.text} />
                  )
                ) : (
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                )}

                <div className="mt-2.5 flex items-center justify-between text-[10px] opacity-70 border-t border-slate-200/50 pt-2">
                  <span>{msg.timestamp}</span>
                  {msg.sender === 'ai' && (
                    <button
                      onClick={() => copyToClipboard(msg.text, msg.id)}
                      className="ml-2 px-2 py-1 bg-white hover:bg-slate-200/80 rounded-lg text-slate-700 font-bold border border-slate-200 transition-colors cursor-pointer flex items-center space-x-1"
                      title="Copy response"
                    >
                      {copiedId === msg.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-teal-600" />
                          <span className="text-teal-700">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Response</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-start space-x-3">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-teal-600 to-cyan-600 flex items-center justify-center text-white flex-shrink-0 shadow-xs">
                <Bot className="w-5 h-5 animate-spin" />
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl rounded-tl-none p-4 flex items-center space-x-2.5 text-slate-600 text-xs font-semibold">
                <RefreshCw className="w-4 h-4 animate-spin text-teal-600" />
                <span>BioLab AI is compiling a structured response (Overview, Principle, Procedure, Applications, Advantages, Limitations, Safety Tips)...</span>
              </div>
            </div>
          )}

          {errorMsg && (
            <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-rose-800 text-xs flex items-start space-x-2.5">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="font-extrabold">Notice: </strong>
                <span>{errorMsg}</span>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-slate-50/90 border-t border-slate-200/90">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center space-x-2"
          >
            <input
              type="text"
              placeholder="Ask about PCR, DNA extraction, gel electrophoresis, ELISA, cell culture, troubleshooting..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              disabled={loading}
              className="flex-1 px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-teal-500 text-slate-800 placeholder-slate-400"
            />

            <button
              type="submit"
              disabled={loading || !inputMessage.trim()}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 disabled:opacity-50 text-white font-extrabold text-sm flex items-center space-x-1.5 shadow-md shadow-teal-500/10 transition-all cursor-pointer"
            >
              <span>Send Query</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="mt-2 text-[11px] text-slate-500 text-center font-medium">
            BioLab AI provides structured educational responses according to international biotechnology protocols.
          </div>
        </div>
      </div>
    </div>
  );
};
