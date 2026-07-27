import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    category: 'PCR',
    difficulty: 'Beginner',
    question: 'What is the primary role of the primers in a PCR reaction?',
    options: [
      'To denature the double-stranded template DNA',
      'To provide a free 3\'-OH group for DNA polymerase to initiate synthesis',
      'To synthesize dNTP building blocks',
      'To protect DNA from thermal degradation'
    ],
    correctAnswer: 1,
    explanation: 'DNA polymerases cannot initiate DNA synthesis de novo; they require synthetic oligonucleotide primers that anneal to complementary single-stranded DNA and provide a free 3\'-OH group for extension.'
  },
  {
    id: 2,
    category: 'PCR',
    difficulty: 'Intermediate',
    question: 'Why is Taq polymerase preferred over normal E. coli DNA polymerase for standard PCR?',
    options: [
      'Taq polymerase works faster at room temperature',
      'Taq polymerase withstands high denaturation temperatures (95°C) without denaturing',
      'Taq polymerase does not require Mg2+ ions',
      'Taq polymerase has 3\' to 5\' proofreading exonuclease activity'
    ],
    correctAnswer: 1,
    explanation: 'Taq polymerase is isolated from the thermophilic bacterium Thermus aquaticus. It remains active through repeated denaturation cycles at 95°C, eliminating the need to add fresh enzyme after each cycle.'
  },
  {
    id: 3,
    category: 'DNA Extraction',
    difficulty: 'Intermediate',
    question: 'What happens when chaotropic salts (such as Guanidine Hydrochloride) are added during column-based DNA extraction?',
    options: [
      'They precipitate RNA while keeping DNA in solution',
      'They disrupt water structure, stripping hydration shells and enabling DNA binding to silica membranes',
      'They digest cell wall peptidoglycan layer',
      'They dye the nucleic acids blue'
    ],
    correctAnswer: 1,
    explanation: 'Chaotropic salts disrupt hydrogen bonding in water, dehydrating nucleic acid molecules and facilitating hydrophobic/electrostatic interactions between negatively charged phosphate backbones and positively charged silica matrices.'
  },
  {
    id: 4,
    category: 'Gel Electrophoresis',
    difficulty: 'Beginner',
    question: 'Towards which electrode does DNA migrate during agarose gel electrophoresis, and why?',
    options: [
      'Negative cathode, because bases are positively charged',
      'Positive anode, because the sugar-phosphate backbone is negatively charged',
      'Neutral ground electrode, because of osmotic pressure',
      'Positive anode, because purines are hydrophobic'
    ],
    correctAnswer: 1,
    explanation: 'The phosphate backbone of DNA imparts a constant negative charge per unit length. Therefore, in an electric field, DNA migrates towards the positive electrode (anode, red wire).'
  },
  {
    id: 5,
    category: 'Gel Electrophoresis',
    difficulty: 'Advanced',
    question: 'An agarose gel ran with a "smiling" pattern where bands near the edges migrated faster than those in the center. What is the most likely cause?',
    options: [
      'The gel matrix concentration was too high (2.5%)',
      'Excessive voltage caused non-uniform heating and thermal gradients in the gel box',
      'The DNA ladder was degraded',
      'UV transilluminator intensity was insufficient'
    ],
    correctAnswer: 1,
    explanation: 'Running a gel at excessively high voltage generates Joule heating. Heat dissipates faster at the edges of the gel box than in the center, causing the center to run hotter and altering buffer conductivity, resulting in "smiling" bands.'
  },
  {
    id: 6,
    category: 'ELISA',
    difficulty: 'Intermediate',
    question: 'In a Sandwich ELISA, what is immobilized directly onto the 96-well microplate surface during step 1?',
    options: [
      'The target antigen',
      'The Capture Antibody',
      'Streptavidin-HRP enzyme conjugate',
      'TMB colorimetric substrate'
    ],
    correctAnswer: 1,
    explanation: 'In a Sandwich ELISA, a specific Capture Antibody is coated onto the microplate wells first. The target antigen from serum/sample is then captured, followed by a secondary detection antibody.'
  },
  {
    id: 7,
    category: 'Microscopy',
    difficulty: 'Beginner',
    question: 'Why is immersion oil placed between the slide coverslip and the 100x objective lens?',
    options: [
      'To magnify the light ray wavelength by 2x',
      'To match the refractive index of glass (n = 1.518), preventing light refraction and loss of resolution',
      'To kill living bacteria on the slide surface',
      'To lubricate the stage mechanism'
    ],
    correctAnswer: 1,
    explanation: 'Air has a refractive index of n=1.00, causing high-angle light rays to bend away from the objective lens. Immersion oil matches the glass refractive index (n=1.518), capturing refracted light rays and increasing numerical aperture (NA).'
  },
  {
    id: 8,
    category: 'Cell Culture',
    difficulty: 'Intermediate',
    question: 'Why is Trypsin combined with EDTA when passaging adherent mammalian cells?',
    options: [
      'Trypsin cleaves cell-surface adhesion proteins, while EDTA chelates Ca2+/Mg2+ ions required for cadherin junctions',
      'EDTA neutralizes trypsin to stop enzymatic digestion',
      'Trypsin colors live cells blue while EDTA colors dead cells red',
      'EDTA acts as an antibiotic against fungal spores'
    ],
    correctAnswer: 0,
    explanation: 'Trypsin is a proteolytic enzyme that breaks down cell-matrix extracellular attachment proteins. EDTA is a chelating agent that sequesters divalent cations (Ca2+, Mg2+) that maintain cell-cell cadherin junctions, accelerating gentle cell detachment.'
  },
  {
    id: 9,
    category: 'Spectrophotometry',
    difficulty: 'Intermediate',
    question: 'An A260/A280 absorbance ratio of 1.8 indicates what for a purified DNA sample?',
    options: [
      'Severe protein contamination',
      'High-purity double-stranded DNA',
      'RNA contamination only',
      'Phenol solvent contamination'
    ],
    correctAnswer: 1,
    explanation: 'Pure double-stranded DNA typically exhibits an A260/A280 ratio between 1.8 and 2.0. A ratio below 1.6 indicates protein or phenol contamination, while pure RNA yields a ratio around ~2.0.'
  },
  {
    id: 10,
    category: 'Lab Safety',
    difficulty: 'Beginner',
    question: 'Which Biosafety Level (BSL) is required for handling moderate-risk human pathogens like Staphylococcus aureus or Hepatitis B Virus?',
    options: [
      'BSL-1',
      'BSL-2',
      'BSL-3',
      'BSL-4'
    ],
    correctAnswer: 1,
    explanation: 'BSL-2 is required for agents associated with human disease posing moderate hazards. Aerosol-generating work must be conducted inside Class II Biosafety Cabinets.'
  },
  {
    id: 11,
    category: 'Lab Safety',
    difficulty: 'Intermediate',
    question: 'What critical danger occurs if Guanidine Lysis Buffer from a DNA extraction kit is accidentally mixed with bleach (sodium hypochlorite)?',
    options: [
      'An explosive hydrogen gas reaction occurs',
      'Highly toxic cyanide gas is produced',
      'The mixture freezes immediately',
      'It creates harmless salt water'
    ],
    correctAnswer: 1,
    explanation: 'Guanidine thiocyanate or guanidine hydrochloride chemically reacts with sodium hypochlorite (bleach) to liberate toxic hydrogen cyanide gas. Lysis waste containing guanidine must NEVER be treated with bleach.'
  },
  {
    id: 12,
    category: 'Spectrophotometry',
    difficulty: 'Advanced',
    question: 'According to the Beer-Lambert Law (A = ε · c · l), if a sample with a 1 cm path length has an absorbance of 0.8, what will its absorbance be if measured in a cuvette with a 0.5 cm path length?',
    options: [
      '1.6',
      '0.8',
      '0.4',
      '0.2'
    ],
    correctAnswer: 2,
    explanation: 'Absorbance is directly proportional to path length (l). Halving the path length from 1.0 cm to 0.5 cm cuts the measured absorbance in half (0.8 × 0.5 = 0.4).'
  }
];
