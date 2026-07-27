import React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  BookOpen,
  Sparkles,
  ListChecks,
  Target,
  CheckCircle2,
  AlertTriangle,
  ShieldAlert,
  Info,
  ChevronRight,
} from 'lucide-react';

interface StructuredResponseCardProps {
  text: string;
}

interface ParsedSection {
  title: string;
  key: string;
  content: string;
}

const SECTION_CONFIGS: Record<
  string,
  {
    icon: React.ReactNode;
    badgeBg: string;
    textColor: string;
    borderColor: string;
    cardBg: string;
  }
> = {
  overview: {
    icon: <Info className="w-4 h-4 text-teal-600" />,
    badgeBg: 'bg-teal-100 text-teal-900 border-teal-200',
    textColor: 'text-teal-950',
    borderColor: 'border-teal-200',
    cardBg: 'bg-teal-50/40',
  },
  principle: {
    icon: <Sparkles className="w-4 h-4 text-indigo-600" />,
    badgeBg: 'bg-indigo-100 text-indigo-900 border-indigo-200',
    textColor: 'text-indigo-950',
    borderColor: 'border-indigo-200',
    cardBg: 'bg-indigo-50/40',
  },
  procedure: {
    icon: <ListChecks className="w-4 h-4 text-blue-600" />,
    badgeBg: 'bg-blue-100 text-blue-900 border-blue-200',
    textColor: 'text-blue-950',
    borderColor: 'border-blue-200',
    cardBg: 'bg-blue-50/40',
  },
  applications: {
    icon: <Target className="w-4 h-4 text-violet-600" />,
    badgeBg: 'bg-violet-100 text-violet-900 border-violet-200',
    textColor: 'text-violet-950',
    borderColor: 'border-violet-200',
    cardBg: 'bg-violet-50/40',
  },
  advantages: {
    icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" />,
    badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-200',
    textColor: 'text-emerald-950',
    borderColor: 'border-emerald-200',
    cardBg: 'bg-emerald-50/40',
  },
  limitations: {
    icon: <AlertTriangle className="w-4 h-4 text-amber-600" />,
    badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
    textColor: 'text-amber-950',
    borderColor: 'border-amber-200',
    cardBg: 'bg-amber-50/40',
  },
  'safety tips': {
    icon: <ShieldAlert className="w-4 h-4 text-rose-600" />,
    badgeBg: 'bg-rose-100 text-rose-900 border-rose-200',
    textColor: 'text-rose-950',
    borderColor: 'border-rose-200',
    cardBg: 'bg-rose-50/40',
  },
};

export const StructuredResponseCard: React.FC<StructuredResponseCardProps> = ({ text }) => {
  const parseSections = (rawText: string): ParsedSection[] => {
    // Standard section names we look for
    const knownKeys = ['overview', 'principle', 'procedure', 'applications', 'advantages', 'limitations', 'safety tips'];
    
    // Pattern matches headers like: ## Overview, ### 1. Overview, **Overview**, • Overview
    const headerRegex = /(?:^|\n)(?:#{1,4}\s*|(?:\d+\.\s*)|[•*-]\s*)?(?:\*\*)?(Overview|Principle|Procedure|Applications|Advantages|Limitations|Safety\s+Tips)(?:\*\*)?:?/gi;

    const matches: { title: string; key: string; index: number }[] = [];
    let match;

    while ((match = headerRegex.exec(rawText)) !== null) {
      const title = match[1].trim();
      const key = title.toLowerCase().replace(/\s+/g, ' ');
      // avoid duplicate matches at same index
      if (!matches.some((m) => Math.abs(m.index - match.index) < 5)) {
        matches.push({ title, key, index: match.index });
      }
    }

    if (matches.length === 0) {
      return [];
    }

    // Sort by index in text
    matches.sort((a, b) => a.index - b.index);

    const parsed: ParsedSection[] = [];
    for (let i = 0; i < matches.length; i++) {
      const current = matches[i];
      const startIndex = current.index + rawText.substring(current.index).indexOf('\n'); // content starts after header line
      const endIndex = i + 1 < matches.length ? matches[i + 1].index : rawText.length;
      
      let sectionContent = rawText.substring(startIndex > -1 ? startIndex : current.index, endIndex).trim();
      
      // Clean up leading/trailing header repeats
      sectionContent = sectionContent.replace(/^(?:#{1,4}\s*|(?:\d+\.\s*)|[•*-]\s*)?(?:\*\*)?(?:Overview|Principle|Procedure|Applications|Advantages|Limitations|Safety\s+Tips)(?:\*\*)?:?\s*/i, '').trim();

      if (sectionContent) {
        parsed.push({
          title: current.title,
          key: current.key,
          content: sectionContent,
        });
      }
    }

    return parsed;
  };

  const sections = parseSections(text);

  // If text couldn't be parsed into structured sections, render as standard styled markdown
  if (sections.length === 0) {
    return (
      <div className="markdown-body space-y-3 text-slate-800">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    );
  }

  return (
    <div className="space-y-4 my-2">
      {sections.map((sec, idx) => {
        const config = SECTION_CONFIGS[sec.key] || {
          icon: <BookOpen className="w-4 h-4 text-slate-600" />,
          badgeBg: 'bg-slate-100 text-slate-900 border-slate-200',
          textColor: 'text-slate-900',
          borderColor: 'border-slate-200',
          cardBg: 'bg-white',
        };

        return (
          <div
            key={idx}
            className={`rounded-2xl border ${config.borderColor} ${config.cardBg} p-4 sm:p-5 shadow-2xs transition-all space-y-3`}
          >
            {/* Section Header Badge */}
            <div className="flex items-center space-x-2">
              <div className={`px-3 py-1 rounded-full border ${config.badgeBg} text-xs font-extrabold uppercase tracking-wider flex items-center space-x-1.5`}>
                {config.icon}
                <span>• {sec.title}</span>
              </div>
            </div>

            {/* Section Content */}
            <div className="text-xs sm:text-sm text-slate-800 leading-relaxed space-y-2 pl-1">
              <ReactMarkdown
                components={{
                  ul: ({ children }) => <ul className="space-y-1.5 my-2 list-none">{children}</ul>,
                  ol: ({ children }) => <ol className="space-y-1.5 my-2 list-decimal pl-4">{children}</ol>,
                  li: ({ children }) => (
                    <li className="flex items-start space-x-2 text-slate-700">
                      <span className="text-teal-600 font-extrabold mt-0.5">•</span>
                      <span className="flex-1">{children}</span>
                    </li>
                  ),
                  p: ({ children }) => <p className="leading-relaxed my-1 font-medium text-slate-800">{children}</p>,
                  strong: ({ children }) => <strong className="font-extrabold text-slate-950">{children}</strong>,
                  code: ({ children }) => (
                    <code className="px-1.5 py-0.5 bg-slate-200/80 text-slate-900 font-mono text-[11px] rounded border border-slate-300">
                      {children}
                    </code>
                  ),
                }}
              >
                {sec.content}
              </ReactMarkdown>
            </div>
          </div>
        );
      })}
    </div>
  );
};
