export interface Flashcard {
  id: number;
  category: 'Molecular Biology' | 'Biochemistry' | 'Cell Biology' | 'Lab Safety & Calculations';
  question: string;
  answer: string;
  hint: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export const FLASHCARDS_DATA: Flashcard[] = [
  {
    id: 1,
    category: 'Molecular Biology',
    question: 'What are the three core thermal cycling steps in standard PCR?',
    answer: '1) Denaturation (~95°C) to separate dsDNA strands\n2) Annealing (~55-65°C) for primers to bind target sequence\n3) Extension (~72°C) for Taq DNA polymerase to synthesize complementary strands.',
    hint: 'Think about temperature changes: High -> Medium -> Optimal Polymerase Temp.',
    difficulty: 'Beginner'
  },
  {
    id: 2,
    category: 'Molecular Biology',
    question: 'Why is Taq Polymerase used in PCR instead of human E. coli DNA polymerase?',
    answer: 'Taq Polymerase (isolated from Thermus aquaticus) is thermostable, meaning it survives repeated high-temperature denaturation steps (95°C) without losing enzymatic activity.',
    hint: 'Extremophile bacterium living in hot springs.',
    difficulty: 'Beginner'
  },
  {
    id: 3,
    category: 'Molecular Biology',
    question: 'In agarose gel electrophoresis, towards which electrode does DNA migrate and why?',
    answer: 'DNA migrates toward the POSITIVE electrode (Anode / Red lead) because its sugar-phosphate backbone carries a uniform negative charge.',
    hint: 'Remember the lab rule: "Run to Red".',
    difficulty: 'Beginner'
  },
  {
    id: 4,
    category: 'Biochemistry',
    question: 'What is the absorbance wavelength ratio used to evaluate DNA purity, and what value indicates pure DNA?',
    answer: 'The A260/A280 ratio. Pure DNA has an A260/A280 ratio of ~1.8. An A260/A280 ratio below 1.6 indicates protein contamination.',
    hint: '260 nm = Nucleic Acids, 280 nm = Aromatic Amino Acids.',
    difficulty: 'Intermediate'
  },
  {
    id: 5,
    category: 'Biochemistry',
    question: 'What formula expresses the Beer-Lambert Law for spectrophotometry?',
    answer: 'A = ε · c · l\nWhere A = Absorbance, ε = Molar Extinction Coefficient, c = Molar Concentration, and l = Optical Path Length (cm).',
    hint: 'Absorbance is directly proportional to concentration.',
    difficulty: 'Intermediate'
  },
  {
    id: 6,
    category: 'Cell Biology',
    question: 'What reagent is used to dissociate adherent mammalian cells during cell passaging?',
    answer: 'Trypsin-EDTA. Trypsin is a proteolytic enzyme that cleaves cell-surface adhesion proteins, while EDTA chelates Ca2+/Mg2+ cations required for cell adhesion.',
    hint: 'Protease + divalent cation chelator.',
    difficulty: 'Intermediate'
  },
  {
    id: 7,
    category: 'Lab Safety & Calculations',
    question: 'What equation is used to calculate stock buffer dilutions?',
    answer: 'C1 · V1 = C2 · V2\nWhere C1/V1 are initial concentration & volume, and C2/V2 are final target concentration & volume.',
    hint: 'Conservation of solute mass.',
    difficulty: 'Beginner'
  },
  {
    id: 8,
    category: 'Lab Safety & Calculations',
    question: 'Why should guanidine-containing DNA extraction lysis buffers NEVER be mixed with bleach?',
    answer: 'Guanidine salts react chemically with sodium hypochlorite (bleach) to produce highly toxic, lethal chloramine and hydrogen cyanide gases!',
    hint: 'Dangerous chemical reaction in biohazard liquid waste.',
    difficulty: 'Advanced'
  },
  {
    id: 9,
    category: 'Biochemistry',
    question: 'What is the structural difference between direct, indirect, and sandwich ELISA?',
    answer: 'Direct: Target antigen bound to plate, detected by conjugated primary antibody.\nIndirect: Primary antibody binds antigen, detected by labeled secondary antibody.\nSandwich: Capture antibody holds antigen; labeled secondary detection antibody binds a different epitope.',
    hint: 'Sandwich places the antigen between two antibodies.',
    difficulty: 'Advanced'
  },
  {
    id: 10,
    category: 'Cell Biology',
    question: 'What dye selectively stains dead cells blue in a hemocytometer viability assay?',
    answer: 'Trypan Blue (0.4%). Live cells with intact cell membranes exclude the dye and remain clear, whereas dead cells with damaged membranes absorb dye and stain blue.',
    hint: 'Dye exclusion assay.',
    difficulty: 'Intermediate'
  },
  {
    id: 11,
    category: 'Lab Safety & Calculations',
    question: 'What is the conversion factor between A260 absorbance and dsDNA concentration?',
    answer: '1.0 A260 unit = 50 µg/mL (or 50 ng/µL) of double-stranded DNA (dsDNA).',
    hint: 'For RNA it is 40 µg/mL, for ssDNA it is 33 µg/mL.',
    difficulty: 'Intermediate'
  },
  {
    id: 12,
    category: 'Molecular Biology',
    question: 'What is the purpose of adding Glycerol to DNA Loading Dye?',
    answer: 'Glycerol increases the density of the sample mixture, causing the DNA solution to sink cleanly to the bottom of the agarose gel wells instead of floating away in buffer.',
    hint: 'Density weighting agent.',
    difficulty: 'Beginner'
  }
];
