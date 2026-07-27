import { BSLLevel, WasteCategory } from '../types';

export const BSL_LEVELS: BSLLevel[] = [
  {
    level: 'BSL-1',
    title: 'Biosafety Level 1: Low Risk',
    description: 'Suitable for work involving well-characterized agents not known to consistently cause disease in immunocompetent adult humans.',
    biosafetyCabinet: 'Not required. Standard open benchtop work.',
    examples: ['E. coli K-12 non-pathogenic strains', 'Saccharomyces cerevisiae (Baker\'s Yeast)', 'Lactobacillus', 'Non-infectious canine hepatitis virus'],
    ppeRequired: ['Standard Lab Coat', 'Nitrile Gloves', 'Safety Glasses / Goggles', 'Closed-toe shoes'],
    facilityFeatures: ['Handwashing sink available', 'Decontaminable non-porous benchtops', 'Doors to separate lab space from public areas'],
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300'
  },
  {
    level: 'BSL-2',
    title: 'Biosafety Level 2: Moderate Personal & Environmental Risk',
    description: 'Required for working with agents associated with human disease posing moderate hazards (ingestion, percutaneous, or mucous membrane exposure).',
    biosafetyCabinet: 'Class II Biosafety Cabinet (BSC) required for aerosol-generating procedures.',
    examples: ['Staphylococcus aureus', 'Salmonella enterica', 'Hepatitis B Virus (HBV)', 'Human Immunodeficiency Virus (HIV) - non-concentrated', 'Recombinant Human Adenovirus'],
    ppeRequired: ['Fluid-resistant Lab Coat', 'Double Nitrile Gloves', 'Safety Goggles / Face Shield', 'Respiratory Protection (N95/P100 if aerosols created)'],
    facilityFeatures: ['Self-closing lockable doors', 'Autoclave or validated decontamination system on site', 'Eyewash station within 10 seconds of workspace', 'Biohazard warning signs on entrances'],
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300'
  },
  {
    level: 'BSL-3',
    title: 'Biosafety Level 3: High Individual Risk, Low Community Risk',
    description: 'Applicable to clinical, diagnostic, teaching, or research facilities working with indigenous or exotic agents that may cause serious or lethal disease through inhalation.',
    biosafetyCabinet: 'Class II or Class III Biosafety Cabinet used for ALL manipulations.',
    examples: ['Mycobacterium tuberculosis', 'SARS-CoV-2 (COVID-19 live virus)', 'Yersinia pestis (Plague)', 'Bacillus anthracis', 'Rabies virus'],
    ppeRequired: ['Protective suits / back-closing gowns', 'PAPR (Powered Air-Purifying Respirator) or fitted N95', 'Double gloves with long cuffs', 'Shoe covers'],
    facilityFeatures: ['Controlled access with directional airflow (negative pressure)', 'HEPA filtration for exhaust air', 'Double-door entry airlocks', 'Hands-free sinks and liquid waste decontamination'],
    badgeColor: 'bg-orange-100 text-orange-800 border-orange-300'
  },
  {
    level: 'BSL-4',
    title: 'Biosafety Level 4: Extreme High Risk / Maximum Containment',
    description: 'Mandatory for dangerous and exotic agents posing high individual risk of life-threatening aerosol-transmitted infections with no available vaccines or treatments.',
    biosafetyCabinet: 'Class III Biosafety Cabinet OR positive pressure suit connected to breathing air supply.',
    examples: ['Ebola virus', 'Marburg virus', 'Lassa virus', 'Crimean-Congo hemorrhagic fever virus', 'Smallpox virus'],
    ppeRequired: ['Full-body positive pressure suit connected to breathing air line', 'Heavy-duty chemical resistant gloves', 'Air supply harness'],
    facilityFeatures: ['Isolated dedicated building or sealed wing', 'Decontamination shower upon exit', 'Dedicated air supply and double HEPA exhaust filtration', 'Effluent decontamination system for all liquid waste'],
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300'
  }
];

export const WASTE_CATEGORIES: WasteCategory[] = [
  {
    type: 'Solid Biohazard Waste',
    container: 'Red Biohazard Bag inside rigid foot-pedal container',
    containerColor: 'bg-rose-50 border-rose-200 text-rose-900',
    examples: ['Contaminated cell culture flasks', 'Petri dishes with agar', 'Gloves with biological contact', 'Plastic pipettes & tips'],
    disposalProcedure: 'Tie biohazard bags when 3/4 full. Autoclave at 121°C (250°F) at 15 psi for 30–60 minutes before off-site regulated medical waste disposal.',
    precautions: 'Never place liquids, glass, or sharp metal objects in soft biohazard bags.'
  },
  {
    type: 'Sharps Waste',
    container: 'Puncture-Resistant Heavy Plastic Sharps Container',
    containerColor: 'bg-amber-50 border-amber-200 text-amber-900',
    examples: ['Hypodermic needles & syringes', 'Scalpel & razor blades', 'Pasteur glass pipettes', 'Broken glass slides & coverslips'],
    disposalProcedure: 'Drop directly into sharps bin immediately after use. Do NOT recap needles manually. Close lid permanently when 3/4 full and request hazardous hazardous waste pick-up.',
    precautions: 'Never force or push sharps down into an overfilled container.'
  },
  {
    type: 'Liquid Biohazard Waste',
    container: 'Dedicated Aspirator Flask / Heavy Duty Plastic Carboy',
    containerColor: 'bg-blue-50 border-blue-200 text-blue-900',
    examples: ['Used cell culture media', 'Bacterial broth cultures', 'Aspirated wash fluids'],
    disposalProcedure: 'Add household bleach (Sodium Hypochlorite) to achieve a final 10% volume concentration (0.5% active chlorine). Allow at least 20 minutes contact time, then flush down lab sink with running water.',
    precautions: 'Never mix bleach-treated liquid waste with autoclaved acid solutions or guanidine-containing lysis buffers!'
  },
  {
    type: 'Hazardous Chemical Waste',
    container: 'Chemical-Resistant Polyethylene / Glass Jugs with Screw Cap',
    containerColor: 'bg-purple-50 border-purple-200 text-purple-900',
    examples: ['Organic solvents (Phenol, Chloroform, Ethanol, Methanol)', 'Ethidium Bromide solutions', 'Polyacrylamide gel monomers', 'Heavy metal stains (Uranyl acetate)'],
    disposalProcedure: 'Label container clearly with exact chemical names, percentages, generator name, and date. Store in secondary containment tray inside chemical fume hood.',
    precautions: 'Segregate incompatibles (acids away from bases, oxidizers away from flammables).'
  }
];

export const GENERAL_SAFETY_RULES = [
  {
    id: 1,
    title: 'Personal Protective Equipment (PPE)',
    description: 'Always wear a buttoned lab coat, safety glasses/goggles, and closed-toe shoes. Long hair must be tied back, and loose jewelry removed.'
  },
  {
    id: 2,
    title: 'No Eating or Drinking in the Laboratory',
    description: 'Eating, drinking, smoking, applying cosmetics, or storing food/beverages in laboratory refrigerators or freezers is strictly prohibited.'
  },
  {
    id: 3,
    title: 'Hand Hygiene & Sanitization',
    description: 'Wash hands thoroughly with soap and water after removing gloves, before leaving the laboratory, and immediately following any contact with biohazardous materials.'
  },
  {
    id: 4,
    title: 'Fume Hood vs. Biosafety Cabinet',
    description: 'Use Chemical Fume Hoods for volatile or toxic chemicals. Use Biosafety Cabinets (BSC) for biological agents. Never interchange these facilities!'
  },
  {
    id: 5,
    title: 'Chemical Labeling & SDS Reference',
    description: 'Ensure all chemical containers have clear labels indicating chemical name, concentration, and hazard pictograms. Consult Safety Data Sheets (SDS) before handling unknown compounds.'
  },
  {
    id: 6,
    title: 'Emergency Equipment Location',
    description: 'Know the exact location and operation of emergency eyewash stations, safety showers, fire extinguishers, spill kits, and emergency exits.'
  }
];
