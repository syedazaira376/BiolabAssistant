export interface FAQItem {
  id: string;
  category: 'PCR & Molecular' | 'Electrophoresis' | 'Proteins & ELISA' | 'Cell Culture' | 'Safety & Equipment';
  question: string;
  answer: string;
  keyTakeaway: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'PCR & Molecular',
    question: 'Why do I get non-specific faint bands or primer-dimers in my PCR gel?',
    answer: 'Primer-dimers occur when forward and reverse primers anneal to each other due to complementary 3\' ends. Non-specific bands happen when the primer annealing temperature is set too low (allowing primers to bind off-target DNA regions) or when excess magnesium/primer concentrations are used.',
    keyTakeaway: 'Increase annealing temperature by 2–4°C, lower primer concentration to 0.2 µM, or use Hot-Start Taq polymerase.'
  },
  {
    id: 'faq-2',
    category: 'PCR & Molecular',
    question: 'Why is EDTA included in TE Buffer used for storing DNA?',
    answer: 'EDTA (Ethylenediaminetetraacetic acid) is a powerful divalent cation chelator that binds Mg2+ and Ca2+ ions. Since cellular DNase enzymes require Mg2+ as an essential co-factor to cleave DNA, EDTA inactivates trace nucleases and protects stored DNA from enzymatic degradation.',
    keyTakeaway: 'EDTA protects DNA by chelating Mg2+ co-factors required by DNases.'
  },
  {
    id: 'faq-3',
    category: 'Electrophoresis',
    question: 'What is the difference between TAE and TBE electrophoresis buffers?',
    answer: 'TAE (Tris-Acetate-EDTA) offers higher resolution for large DNA fragments (>4 kb) and is ideal for downstream gel extraction and cloning because acetate does not inhibit ligases. TBE (Tris-Borate-EDTA) has higher buffering capacity and ionic strength, making it superior for resolving small DNA fragments (<1 kb) and longer high-voltage runs without overheating.',
    keyTakeaway: 'Use TAE for cloning & large DNA fragments; use TBE for small fragments and high-voltage resolution.'
  },
  {
    id: 'faq-4',
    category: 'Electrophoresis',
    question: 'Why do my DNA bands look curved or "smiling" across the agarose gel?',
    answer: 'Smiling gel bands occur when the gel is run at excessively high voltage, causing uneven resistive heating across the gel center versus the cooler outer edges. Heat causes DNA to migrate faster in the middle wells.',
    keyTakeaway: 'Keep voltage below 5 V per cm of distance between electrodes and replace running buffer.'
  },
  {
    id: 'faq-5',
    category: 'Proteins & ELISA',
    question: 'Why is SDS (Sodium Dodecyl Sulfate) added to protein samples in SDS-PAGE?',
    answer: 'SDS is an anionic detergent that denatures tertiary protein structures and coats polypeptides with a uniform negative charge (~1.4 g SDS per g protein). This masks intrinsic native charges, allowing proteins to separate strictly according to molecular weight rather than charge or shape.',
    keyTakeaway: 'SDS imparts a uniform negative charge and unfolds proteins so migration depends only on mass.'
  },
  {
    id: 'faq-6',
    category: 'Proteins & ELISA',
    question: 'What causes high background noise in ELISA assays?',
    answer: 'High background noise is typically caused by insufficient washing between incubation steps, non-specific binding of detection antibodies due to incomplete plate blocking, or excessively high enzyme-conjugate concentrations.',
    keyTakeaway: 'Ensure thorough plate washing with PBST (5 washes with 30s soak) and optimize blocking buffer.'
  },
  {
    id: 'faq-7',
    category: 'Cell Culture',
    question: 'Why is Fetal Bovine Serum (FBS) heat-inactivated before adding to cell culture media?',
    answer: 'Heat inactivation (incubation at 56°C for 30 minutes) inactivates serum complement proteins that could otherwise lyse cultured cells or trigger immune responses in sensitive cell lines.',
    keyTakeaway: 'Heat inactivation destroys immune complement proteins that damage cell membranes.'
  },
  {
    id: 'faq-8',
    category: 'Safety & Equipment',
    question: 'How do I convert between RPM and RCF (g-force) on a centrifuge?',
    answer: 'Use the formula RCF = 1.118 × 10⁻⁵ × r × (RPM)², where r is the rotor radius in millimeters. RCF represents the actual relative centrifugal force exerted on the sample regardless of centrifuge model.',
    keyTakeaway: 'RCF depends on both rotational speed (RPM) and rotor radius (r in mm).'
  }
];
