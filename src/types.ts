export type NavTab = 
  | 'home' 
  | 'techniques' 
  | 'protocols'
  | 'equipment' 
  | 'flashcards' 
  | 'safety' 
  | 'calculators' 
  | 'quiz' 
  | 'faq' 
  | 'tips' 
  | 'ai-assistant';

export interface Technique {
  id: string;
  name: string;
  shortName: string;
  category: 'Molecular Biology' | 'Biochemistry' | 'Cell Biology' | 'Analytical Techniques';
  iconName: string;
  quickSummary: string;
  purpose: string;
  principle: string;
  requiredMaterials: {
    reagents: string[];
    equipment: string[];
    consumables: string[];
  };
  procedure: {
    stepNumber: number;
    title: string;
    description: string;
    proTip?: string;
  }[];
  applications: string[];
  precautions: string[];
  troubleshooting: {
    problem: string;
    possibleCause: string;
    solution: string;
  }[];
  keyFormula?: string;
}

export interface BSLLevel {
  level: string;
  title: string;
  description: string;
  biosafetyCabinet: string;
  examples: string[];
  ppeRequired: string[];
  facilityFeatures: string[];
  badgeColor: string;
}

export interface WasteCategory {
  type: string;
  container: string;
  containerColor: string;
  examples: string[];
  disposalProcedure: string;
  precautions: string;
}

export interface QuizQuestion {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}
