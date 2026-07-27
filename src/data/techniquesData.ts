import { Technique } from '../types';

export const TECHNIQUES: Technique[] = [
  {
    id: 'pcr',
    name: 'Polymerase Chain Reaction (PCR)',
    shortName: 'PCR',
    category: 'Molecular Biology',
    iconName: 'Dna',
    quickSummary: 'In vitro enzymatic amplification of specific DNA sequences through thermal cycling.',
    purpose: 'To amplify a targeted segment of DNA exponentially, producing millions to billions of copies from minute starting samples.',
    principle: 'PCR relies on thermal cycling consisting of repeated cycles of three temperature-dependent steps: 1) Denaturation (~94–98°C) melts double-stranded DNA into single strands; 2) Annealing (~50–65°C) allows synthetic oligonucleotide primers to bind sequence-specifically; 3) Extension (~72°C) enables a thermostable DNA polymerase (e.g., Taq polymerase) to synthesize complementary DNA strands in the 5\' to 3\' direction.',
    requiredMaterials: {
      reagents: [
        'Template DNA (1–100 ng)',
        'Forward & Reverse Primers (10 µM)',
        'Taq / High-Fidelity DNA Polymerase',
        'dNTP Mix (10 mM dATP, dCTP, dGTP, dTTP)',
        '10x Reaction Buffer with MgCl2 (1.5–2.5 mM Mg2+)',
        'Nuclease-free UltraPure Water'
      ],
      equipment: [
        'Thermal Cycler (PCR Machine)',
        'Microcentrifuge',
        'Vortex Mixer',
        'Pipettes (P2, P10, P20, P200)'
      ],
      consumables: [
        'Aerosol barrier filter pipette tips',
        'Thin-walled 0.2 mL PCR tubes / 96-well PCR plate',
        'Nitrile gloves'
      ]
    },
    procedure: [
      {
        stepNumber: 1,
        title: 'Master Mix Preparation',
        description: 'In a sterile 1.5 mL tube on ice, combine reaction buffer, dNTPs, forward/reverse primers, Taq polymerase, and nuclease-free water. Aliquot into individual PCR tubes.',
        proTip: 'Always prepare 10% extra master mix to account for pipetting dead volume. Keep enzymes on ice at all times.'
      },
      {
        stepNumber: 2,
        title: 'Template DNA Addition',
        description: 'Add the template DNA to each reaction tube. Prepare a No Template Control (NTC) with water instead of DNA to test for contamination.',
        proTip: 'Add template DNA last to prevent cross-contamination between experimental tubes.'
      },
      {
        stepNumber: 3,
        title: 'Thermal Cycling Program Setup',
        description: 'Set initial denaturation at 95°C for 3 min, followed by 30-35 cycles of: 95°C (30s) -> Tm - 5°C (30s) -> 72°C (1 min/kb), and final extension at 72°C for 5 min.',
        proTip: 'Primer annealing temperature (Tm) should be set 3–5°C below the lower primer melting temperature.'
      },
      {
        stepNumber: 4,
        title: 'Amplification & Hold',
        description: 'Run thermal cycler program. Hold completed PCR products at 4°C until agarose gel analysis or downstream purification.',
        proTip: 'For long-term storage, store PCR products at -20°C.'
      }
    ],
    applications: [
      'Gene cloning and genetic engineering',
      'Diagnostic testing for pathogens (COVID-19, HIV, viral load)',
      'Forensic DNA profiling & short tandem repeat (STR) analysis',
      'Paternity testing & evolutionary phylogenetics',
      'Site-directed mutagenesis and quantitative gene expression (qPCR)'
    ],
    precautions: [
      'Use dedicated pre-PCR and post-PCR areas to prevent amplicons from contaminating fresh reagents.',
      'Always use filter pipette tips to prevent aerosol contamination in pipettes.',
      'Wear clean nitrile gloves and change them frequently.',
      'Never open post-PCR tubes near pre-PCR reagent preparation areas.'
    ],
    troubleshooting: [
      {
        problem: 'No PCR band on agarose gel',
        possibleCause: 'Forgotten template DNA, failed primer annealing, PCR inhibitor present, or defective Taq polymerase.',
        solution: 'Check primer design and annealing temperature (try gradient PCR); re-purify template DNA to remove ethanol/salt inhibitors.'
      },
      {
        problem: 'Non-specific amplification / multiple bands',
        possibleCause: 'Annealing temperature too low, excess primer concentration, or non-specific primer binding.',
        solution: 'Increase annealing temperature by 2–4°C, use Hot-Start Polymerase, or re-design primers with higher specificity.'
      },
      {
        problem: 'Bands appearing in No Template Control (NTC)',
        possibleCause: 'Reagent or pipette aerosol contamination with amplicon DNA.',
        solution: 'Discard contaminated stock reagents (water, buffer, dNTPs), autoclave equipment, and use fresh aliquots.'
      }
    ],
    keyFormula: 'N = N_0 \\times 2^n \\quad (\\text{where } N_0 = \\text{initial molecules}, n = \\text{number of cycles})'
  },
  {
    id: 'dna-extraction',
    name: 'DNA Extraction & Purification',
    shortName: 'DNA Extraction',
    category: 'Molecular Biology',
    iconName: 'TestTube',
    quickSummary: 'Isolation of high-purity genomic or plasmid DNA from biological samples using lysis, binding, washing, and elution.',
    purpose: 'To isolate intact genomic DNA, viral DNA, or bacterial plasmid DNA free from proteins, lipids, polysaccharides, and enzymatic inhibitors.',
    principle: 'Cellular membranes are lysed using detergents (SDS, Triton X-100) and chaotropic salts (Guanidinium HCl). Proteinase K digests cellular proteins and nucleases. Under high chaotropic salt concentrations, nucleic acids bind selectively to silica membrane spin columns. Impurities and salts are washed away using ethanol washes, and purified DNA is eluted in low-salt TE buffer or sterile water.',
    requiredMaterials: {
      reagents: [
        'Cell Lysis Buffer (Tris-HCl, EDTA, SDS)',
        'Proteinase K solution (20 mg/mL)',
        'Chaotropic Binding Buffer (Guanidine HCl)',
        'Wash Buffers (Ethanol-containing PE/W2 buffer)',
        'Elution Buffer (10 mM Tris-HCl, pH 8.5 or Nuclease-free water)',
        '70% Ethanol'
      ],
      equipment: [
        'Microcentrifuge (13,000 rpm)',
        'Thermomixer / Water bath (56°C & 70°C)',
        'Vortex mixer',
        'NanoDrop or Spectrophotometer'
      ],
      consumables: [
        'Silica spin columns with collection tubes',
        'Sterile 1.5 mL microcentrifuge tubes',
        'Pipette tips'
      ]
    },
    procedure: [
      {
        stepNumber: 1,
        title: 'Cell Lysis & Homogenization',
        description: 'Resuspend biological sample (tissue, blood, bacterial pellet) in lysis buffer. Add Proteinase K and incubate at 56°C for 15-30 minutes until fully digested.',
        proTip: 'For plant cells or Gram-positive bacteria, mechanical bead-beating or lysozyme digestion is required to break tough cell walls.'
      },
      {
        stepNumber: 2,
        title: 'DNA Binding to Silica Column',
        description: 'Add binding buffer and 100% ethanol to the lysate. Transfer mixture to a silica-membrane spin column and centrifuge at 10,000 × g for 1 min.',
        proTip: 'Ethanol facilitates the dehydration of nucleic acid molecules, exposing negatively charged phosphate backbones to silica binding.'
      },
      {
        stepNumber: 3,
        title: 'Washing Removal of Impurities',
        description: 'Discard flow-through. Wash column twice with alcohol-based wash buffers to remove residual proteins, salts, and cellular debris.',
        proTip: 'Perform a dry spin at maximum speed for 2 minutes to remove all trace ethanol, which inhibits downstream PCR.'
      },
      {
        stepNumber: 4,
        title: 'Elution of Purified DNA',
        description: 'Place column into a clean 1.5 mL tube. Apply 30–50 µL pre-warmed Elution Buffer directly onto the center of the membrane, let sit for 2 min, and centrifuge.',
        proTip: 'Pre-warming elution buffer to 65°C increases DNA yield for large genomic DNA fragments.'
      }
    ],
    applications: [
      'Pre-requisite for PCR, qPCR, Next-Generation Sequencing (NGS)',
      'Genetic screening for inherited diseases & mutations',
      'Plasmid isolation for recombinant protein production & transformation',
      'Bacterial strain identification & metagenomic research'
    ],
    precautions: [
      'Guanidine salts react with sodium hypochlorite (bleach) to generate dangerous toxic cyanide gas. Never mix lysis buffer with bleach!',
      'Wear gloves to protect samples from skin DNases.',
      'Inactivate cellular DNases quickly by adding EDTA/lysis buffer immediately.'
    ],
    troubleshooting: [
      {
        problem: 'Low DNA Yield',
        possibleCause: 'Incomplete lysis, over-digestion, insufficient starting material, or improper membrane elution.',
        solution: 'Extend Proteinase K incubation, ensure sample input does not overload column capacity, and pre-warm elution buffer.'
      },
      {
        problem: 'A260/A280 ratio < 1.6 (Protein contamination)',
        possibleCause: 'Incomplete protein digestion or carryover of lysis reagents.',
        solution: 'Increase Proteinase K incubation time and perform an extra wash step.'
      },
      {
        problem: 'A260/A230 ratio < 1.5 (Chemical inhibitor carryover)',
        possibleCause: 'Residual chaotropic salts (guanidine) or organic solvents (phenol/ethanol).',
        solution: 'Ensure complete dry spin prior to elution, re-wash with 70% ethanol, or re-precipitate DNA with sodium acetate.'
      }
    ],
    keyFormula: '\\text{DNA Conc. (\\mu g/mL)} = A_{260} \\times 50 \\times \\text{Dilution Factor}'
  },
  {
    id: 'gel-electrophoresis',
    name: 'Agarose Gel Electrophoresis',
    shortName: 'Gel Electrophoresis',
    category: 'Molecular Biology',
    iconName: 'Layers',
    quickSummary: 'Separation and visualization of DNA or RNA fragments based on size through a porous gel matrix under an electric field.',
    purpose: 'To analyze, size-fractionate, purify, and quantify DNA/RNA fragments ranging from 100 base pairs to 20 kilobases.',
    principle: 'DNA molecules possess a uniform negative charge-to-mass ratio due to their phosphate backbones. When placed in an agarose gel matrix and subjected to an electric field, DNA migrates toward the positive electrode (anode). The porous gel acts as a molecular sieve: smaller DNA fragments move rapidly through pores, while larger fragments move slowly.',
    requiredMaterials: {
      reagents: [
        'Agarose powder (biotechnology grade)',
        '1x TAE (Tris-Acetate-EDTA) or 1x TBE Buffer',
        'Nucleic Acid Stain (GelRed, SYBR Safe, or Ethidium Bromide)',
        '6x DNA Loading Dye (Glycerol, Bromophenol Blue, Xylene Cyanol)',
        'DNA Ladder / Size Marker'
      ],
      equipment: [
        'Horizontal Gel Electrophoresis Tank & Power Supply',
        'Casting tray, comb, and end blocks',
        'Microwave oven',
        'UV Transilluminator or Blue Light Gel Imager'
      ],
      consumables: [
        'Erlenmeyer flask',
        'Pipette & tips',
        'Nitrile gloves / Heat-resistant glove'
      ]
    },
    procedure: [
      {
        stepNumber: 1,
        title: 'Agarose Gel Preparation',
        description: 'Weigh agarose powder (e.g., 1.0 g for a 1% gel) and dissolve in 100 mL of 1x TAE buffer. Microwave until clear and completely dissolved.',
        proTip: 'Swirl flask gently during microwaving to avoid superheating boil-overs.'
      },
      {
        stepNumber: 2,
        title: 'Stain Addition & Gel Casting',
        description: 'Cool agarose solution to ~50-55°C. Add nucleic acid stain (e.g., SYBR Safe). Pour into gel tray with comb inserted and allow to solidify for 30 minutes.',
        proTip: 'Cooling before pouring prevents comb warping and toxic fume release.'
      },
      {
        stepNumber: 3,
        title: 'Sample Loading & Electrophoresis',
        description: 'Submerge gel in tank filled with 1x TAE buffer. Load DNA ladder in lane 1, and samples mixed with loading dye into subsequent wells. Run at 80–120 V.',
        proTip: 'Remember: DNA moves "Run to Red" (from negative black cathode to positive red anode).'
      },
      {
        stepNumber: 4,
        title: 'Visualization & Analysis',
        description: 'Remove gel and place on blue light or UV transilluminator. Capture gel image and compare band migration distance against DNA ladder sizes.',
        proTip: 'Use blue light transilluminators whenever recovering DNA for cloning to prevent UV-induced thymine dimer damage.'
      }
    ],
    applications: [
      'Verification of PCR amplicon size',
      'Restriction digest fragment analysis',
      'Gel extraction & purification of DNA bands for cloning',
      'Assessing genomic DNA integrity'
    ],
    precautions: [
      'If using Ethidium Bromide, handle in a designated area with nitrile gloves as EtBr is a potent mutagen.',
      'Wear UV-blocking face shield or eye protection when operating UV transilluminators.',
      'Hot molten agarose can cause severe thermal burns.'
    ],
    troubleshooting: [
      {
        problem: 'Smears instead of sharp DNA bands',
        possibleCause: 'DNA degradation by nucleases, excessive gel voltage, or sample overloading.',
        solution: 'Lower voltage (<5 V/cm distance between electrodes), use fresh TAE buffer, and load less DNA.'
      },
      {
        problem: 'Faint or missing DNA bands',
        possibleCause: 'Insufficient DNA loaded, stain omitted or migrated out of gel, or UV wavelength incorrect.',
        solution: 'Ensure stain is added to gel/buffer, increase DNA load, or post-stain gel in buffer containing stain.'
      },
      {
        problem: 'Bent or smiling bands',
        possibleCause: 'Gel run at too high voltage causing localized overheating and buffer exhaustion.',
        solution: 'Reduce voltage to 5 V/cm, change running buffer, or run gel in cold room.'
      }
    ],
    keyFormula: '\\text{Migration Distance } (d) \\propto \\frac{1}{\\log_{10}(\\text{Molecular Weight})}'
  },
  {
    id: 'elisa',
    name: 'Enzyme-Linked Immunosorbent Assay (ELISA)',
    shortName: 'ELISA',
    category: 'Biochemistry',
    iconName: 'ShieldAlert',
    quickSummary: 'Plate-based assay designed for detecting and quantifying soluble proteins, antibodies, or antigens in liquid samples.',
    purpose: 'To measure the exact concentration of target antigens, cytokines, antibodies, or hormones in serum, plasma, or cell culture supernatant.',
    principle: 'ELISA couples immune-specificity (antibody-antigen binding) with high enzyme activity. In a Sandwich ELISA, capture antibodies immobilized on 96-well microplates bind the target antigen. A detection antibody conjugated to an enzyme (e.g., Horseradish Peroxidase, HRP) binds to another epitope on the antigen. Substrate (TMB) addition yields a colorimetric signal proportional to target concentration, measured spectrophotometrically at 450 nm.',
    requiredMaterials: {
      reagents: [
        'Capture Antibody & Biotinylated Detection Antibody',
        'Purified Antigen Standard (for standard curve)',
        'Streptavidin-HRP Conjugate',
        'Coating Buffer (0.05 M Carbonate-Bicarbonate, pH 9.6)',
        'Blocking Buffer (PBS + 1% BSA or 5% Non-fat milk)',
        'Wash Buffer (PBST: PBS + 0.05% Tween-20)',
        'TMB Substrate Solution & Stop Solution (2 N H2SO4)'
      ],
      equipment: [
        'Microplate Spectrophotometer (ELISA Reader at 450 nm)',
        'Multichannel Pipette (P50–P300)',
        'Microplate Washer or Squirt bottle'
      ],
      consumables: [
        'High-binding 96-well polystyrene microplates (e.g. Nunc Maxisorp)',
        'Plate sealer films'
      ]
    },
    procedure: [
      {
        stepNumber: 1,
        title: 'Plate Coating',
        description: 'Dilute capture antibody in coating buffer and add 100 µL per well. Seal plate and incubate overnight at 4°C.',
        proTip: 'Use high-binding polystyrene microplates designed for protein adsorption.'
      },
      {
        stepNumber: 2,
        title: 'Blocking Non-specific Sites',
        description: 'Wash wells 3 times with PBST. Add 200 µL blocking buffer (PBS + BSA) to each well and incubate for 1 hour at room temperature.',
        proTip: 'Blocking prevents non-specific binding of standards and detection antibodies to bare plastic.'
      },
      {
        stepNumber: 3,
        title: 'Sample & Standard Incubation',
        description: 'Add serial dilutions of antigen standard and experimental samples in duplicate. Incubate for 2 hours, then wash 4 times.',
        proTip: 'Always run a 7-point 2-fold standard curve in duplicate to generate an accurate quantitation reference.'
      },
      {
        stepNumber: 4,
        title: 'Detection & Color Development',
        description: 'Add detection antibody-HRP conjugate, incubate 1h, wash. Add TMB substrate (blue color develops). Add 2N H2SO4 Stop Solution (turns yellow). Read absorbance at 450 nm.',
        proTip: 'Read microplate immediately within 15 minutes of adding stop solution.'
      }
    ],
    applications: [
      'Clinical diagnostic screening (HIV antibody test, Hepatitis B, Lyme disease)',
      'Quantitation of serum cytokines, growth factors, and biomarkers',
      'Food allergen and toxin detection (e.g. gluten, aflatoxins)',
      'Therapeutic antibody pharmacokinetics'
    ],
    precautions: [
      'Stop Solution contains 2 N Sulfuric Acid — wear eye protection and gloves.',
      'Do not allow 96-well plates to dry out between washing and reagent addition steps.',
      'Ensure complete washing to eliminate high background noise.'
    ],
    troubleshooting: [
      {
        problem: 'High background absorbance in negative controls',
        possibleCause: 'Insufficient washing, insufficient blocking buffer, or HRP conjugate concentration too high.',
        solution: 'Increase wash buffer volume/soak time, optimize blocking buffer (try BSA vs casein), and decrease conjugate concentration.'
      },
      {
        problem: 'Poor standard curve linearity (R² < 0.98)',
        possibleCause: 'Pipetting error during serial dilution, improper mixing, or degraded standards.',
        solution: 'Use fresh standards, change pipette tips between dilution steps, and mix thoroughly by gentle pipetting.'
      },
      {
        problem: 'No signal / low signal in all wells',
        possibleCause: 'Omitted enzyme, wrong detection wavelength, or expired TMB substrate.',
        solution: 'Verify substrate turned blue before stop solution and check microplate reader filter settings (450 nm).'
      }
    ],
    keyFormula: '\\text{Conc.} = f^{-1}(\\text{Absorbance}_{450}) \\quad (\\text{calculated via 4-Parameter Logistic Curve})'
  },
  {
    id: 'microscopy',
    name: 'Brightfield & Fluorescence Microscopy',
    shortName: 'Microscopy',
    category: 'Cell Biology',
    iconName: 'Microscope',
    quickSummary: 'Optical magnification and high-resolution imaging of biological specimens, cells, and tissues.',
    purpose: 'To observe cellular morphology, subcellular structures, viability, fluorescent protein tags (GFP/RFP), and microbial cell counts.',
    principle: 'Brightfield microscopy passes visible light through a specimen, using objective and ocular lenses to compound magnification. Fluorescence microscopy uses high-intensity light (mercury lamp or LED) to excite fluorophores at specific absorption wavelengths. Fluorophores emit light at longer, lower-energy wavelengths, separated by dichroic mirrors and emission filters to visualize specific cellular structures with high contrast.',
    requiredMaterials: {
      reagents: [
        'Cell Stains (Methylene Blue, Crystal Violet, DAPI, Trypan Blue)',
        'Fluorophore Conjugates (Phalloidin-AlexaFluor, GFP antibodies)',
        'Immersion Oil (Type N, refractive index n = 1.518)',
        'Mounting Medium (Vectashield with antifade)'
      ],
      equipment: [
        'Compound Light Microscope / Inverted Fluorescence Microscope',
        'Digital Microscope Camera (CCD/sCMOS)',
        'Stage Micrometer & Hemocytometer'
      ],
      consumables: [
        'Glass microscope slides & No. 1.5 coverslips',
        'Lens cleaning paper & optical cleaner'
      ]
    },
    procedure: [
      {
        stepNumber: 1,
        title: 'Specimen Slide Preparation',
        description: 'Mount biological sample onto a glass slide. Perform heat fixation or chemical fixation (4% paraformaldehyde) and stain with appropriate dye.',
        proTip: 'For live cell imaging, use specialized coverglass bottom dishes in warm environmental chambers.'
      },
      {
        stepNumber: 2,
        title: 'Initial Focus (Low Power)',
        description: 'Place slide on stage. Start with 4x or 10x objective lens, illuminate light source, and adjust coarse focus knob until specimen appears.',
        proTip: 'Always focus by moving the stage away from the lens to avoid cracking slides or damaging optics.'
      },
      {
        stepNumber: 3,
        title: 'Köhler Illumination Adjustment',
        description: 'Focus field diaphragm and condenser to achieve uniform bright background light without glare or shadow artifacts.',
        proTip: 'Proper Köhler illumination maximizes objective resolution and numerical aperture (NA).'
      },
      {
        stepNumber: 4,
        title: 'Oil Immersion (100x Objective)',
        description: 'Rotate nosepiece between 40x and 100x. Place one drop of immersion oil directly on slide coverslip. Rotate 100x oil objective into position.',
        proTip: 'Only use fine focus knob with oil immersion lens. Clean lens with lens paper immediately after use!'
      }
    ],
    applications: [
      'Microbial identification and Gram stain classification',
      'Histopathology tissue biopsy examination',
      'Immunofluorescence localization of proteins inside cells',
      'Live cell motility, division, and apoptosis assays'
    ],
    precautions: [
      'Never use Kimwipes or rough tissues on microscope lenses — they cause permanent scratches.',
      'Never apply immersion oil to dry objectives (4x, 10x, 40x).',
      'Avoid looking directly into high-power UV fluorescence light sources.'
    ],
    troubleshooting: [
      {
        problem: 'Image blurry or cannot focus at high magnification',
        possibleCause: 'Oil on dry objective, slide inverted upside down, or dirty coverslip.',
        solution: 'Clean objective with lens paper and optical fluid; check that coverslip faces upwards.'
      },
      {
        problem: 'Fluorescence photobleaching / rapid fading signal',
        possibleCause: 'Excessive illumination intensity or exposure time.',
        solution: 'Use antifade mounting medium, lower excitation light intensity, and reduce exposure time.'
      },
      {
        problem: 'Dark spot or specks floating in field of view',
        possibleCause: 'Dust on ocular eyepiece, condenser, or slide surface.',
        solution: 'Rotate eyepiece to check if specks rotate; clean glass surfaces gently with lens blower and optical paper.'
      }
    ],
    keyFormula: 'd = \\frac{\\lambda}{2 \\cdot \\text{NA}} \\quad (\\text{Abbe Resolution Limit})'
  },
  {
    id: 'cell-culture',
    name: 'Aseptic Mammalian Cell Culture',
    shortName: 'Cell Culture',
    category: 'Cell Biology',
    iconName: 'Sparkles',
    quickSummary: 'In vitro propagation and maintenance of biological cells under controlled sterile environmental conditions.',
    purpose: 'To maintain immortalized cell lines or primary cells for toxicity testing, recombinant protein expression, disease modeling, and drug screening.',
    principle: 'Cells grow as adherent monolayers or suspension cultures in synthetic basal media (DMEM, RPMI-1640) supplemented with fetal bovine serum (FBS) for growth factors and antibiotics/antimycotics. Cultures are maintained in a humidified CO2 incubator (37°C, 5% CO2) to maintain physiological pH (~7.4) buffered by sodium bicarbonate.',
    requiredMaterials: {
      reagents: [
        'Basal Medium (DMEM, RPMI-1640)',
        'Fetal Bovine Serum (FBS, heat-inactivated)',
        'Trypsin-EDTA (0.25%) dissociation reagent',
        '100x Penicillin-Streptomycin',
        '1x Phosphate Buffered Saline (PBS, pH 7.4)',
        'Trypan Blue Stain (0.4%)'
      ],
      equipment: [
        'Class II Type A2 Biosafety Cabinet (BSC)',
        'Humidified CO2 Incubator (37°C, 5% CO2)',
        'Inverted Phase-Contrast Microscope',
        'Hemocytometer or Automated Cell Counter',
        'Water bath (37°C)'
      ],
      consumables: [
        'T-25 / T-75 Cell Culture Flasks & 6-well plates',
        'Serological pipettes (5 mL, 10 mL, 25 mL)',
        'Vacuum aspiration pipettes',
        '70% Ethanol spray bottle'
      ]
    },
    procedure: [
      {
        stepNumber: 1,
        title: 'Biosafety Cabinet Sanitization',
        description: 'Turn on BSC airflow for 15 min. Wipe all interior surfaces, media bottles, and equipment with 70% ethanol before placing inside.',
        proTip: 'Never block front or rear intake grilles in the biosafety cabinet to preserve laminar airflow curtain.'
      },
      {
        stepNumber: 2,
        title: 'Washing & Cell Detachment (Passaging)',
        description: 'Aspirate old medium from T-75 flask. Wash cell monolayer gently with 10 mL 1x PBS. Add 2-3 mL Trypsin-EDTA and incubate at 37°C for 3-5 minutes.',
        proTip: 'PBS washing removes serum proteins that inhibit trypsin enzymatic activity.'
      },
      {
        stepNumber: 3,
        title: 'Trypsin Neutralization & Cell Counting',
        description: 'Neutralize trypsin by adding 7 mL complete media (containing FBS). Centrifuge cell suspension at 200 × g for 5 minutes to pellet cells.',
        proTip: 'Resuspend cell pellet in 5 mL fresh medium and perform Trypan Blue viability count on a hemocytometer.'
      },
      {
        stepNumber: 4,
        title: 'Seeding New Flasks',
        description: 'Transfer calculated cell density (e.g. 1 × 10^6 cells per T-75) into fresh culture flasks containing pre-warmed complete medium. Incubate in 5% CO2 at 37°C.',
        proTip: 'Avoid over-confluence (>90%) as contact inhibition induces cell senescence.'
      }
    ],
    applications: [
      'Monoclonal antibody and biopharmaceutical production',
      'Cancer cell biology research & chemotherapy screening',
      'Stem cell differentiation and tissue engineering',
      'Viral vaccine manufacturing'
    ],
    precautions: [
      'Aseptic technique is paramount: wear clean lab coat, gloves, and spray hands frequently with 70% ethanol.',
      'Always dispose of culture waste in biohazard bio-bags or treat liquid waste with 10% bleach.',
      'Check cell cultures daily under microscope for bacterial/fungal contamination.'
    ],
    troubleshooting: [
      {
        problem: 'Media turns yellow rapidly (Acidic pH drop)',
        possibleCause: 'Cell overgrowth (high confluence), bacterial contamination, or incubator CO2 level too high.',
        solution: 'Passage cells more frequently; inspect under microscope for swimming bacteria or turbid media.'
      },
      {
        problem: 'Cells failing to attach to flask bottom',
        possibleCause: 'Incomplete trypsin neutralization, toxic wash residue, or over-trypsinization damaged membrane receptors.',
        solution: 'Ensure complete serum neutralization and reduce trypsin exposure time to under 5 minutes.'
      },
      {
        problem: 'Mycoplasma contamination (sluggish cell growth, no turbidity)',
        possibleCause: 'Contaminated FBS, human operator breath, or dirty water bath.',
        solution: 'Perform PCR Mycoplasma test; treat with Plasmocin or discard contaminated culture strain.'
      }
    ],
    keyFormula: '\\text{Total Cells/mL} = \\frac{\\text{Total Cells Counted}}{\\text{Square Count}} \\times 10^4 \\times \\text{Dilution Factor}'
  },
  {
    id: 'spectrophotometry',
    name: 'UV-Vis Spectrophotometry',
    shortName: 'Spectrophotometry',
    category: 'Analytical Techniques',
    iconName: 'Activity',
    quickSummary: 'Quantitative measurement of light absorption across ultraviolet and visible wavelengths by biological molecules.',
    purpose: 'To quantify nucleic acid concentration (A260), protein concentration (A280 or Bradford assay), enzymatic activity, and microbial cell density (OD600).',
    principle: 'Spectrophotometry relies on Beer-Lambert Law: light absorbance (A) is directly proportional to sample concentration (c) and path length (l). Molecules absorb light at specific characteristic peak wavelengths (e.g., DNA/RNA absorb at 260 nm due to aromatic rings of purines/pyrimidines; proteins absorb at 280 nm due to Tryptophan and Tyrosine residues).',
    requiredMaterials: {
      reagents: [
        'Sample solution (DNA, RNA, Protein, or Bacterial culture)',
        'Blank Buffer (matching sample solvent, e.g. TE buffer or water)',
        'Protein Assay Reagents (Bradford Coomassie dye or BCA assay)'
      ],
      equipment: [
        'UV-Vis Spectrophotometer or NanoDrop Microvolume Spectrophotometer',
        'Vortex mixer'
      ],
      consumables: [
        'Quartz cuvettes (for UV 260/280 nm) or Plastic cuvettes (for visible >340 nm)',
        'Lint-free Kimwipes'
      ]
    },
    procedure: [
      {
        stepNumber: 1,
        title: 'Instrument Initialization & Wavelength Selection',
        description: 'Power on spectrophotometer lamp (Deuterium for UV, Tungsten for Visible) and allow 15-minute warm-up. Select target wavelength (e.g. 260 nm for DNA, 600 nm for OD600).',
        proTip: 'Always warm up UV lamps to ensure stable light intensity output.'
      },
      {
        stepNumber: 2,
        title: 'Blank Calibration (Zeroing)',
        description: 'Pipette 1 mL of solvent buffer into a clean quartz cuvette. Insert into sample holder and press "Blank" to establish 0.000 Absorbance baseline.',
        proTip: 'The blank must contain the exact same buffer/solvent as the test sample.'
      },
      {
        stepNumber: 3,
        title: 'Sample Measurement',
        description: 'Wipe exterior surfaces of cuvette with a clean Kimwipe to remove fingerprints. Insert cuvette, close lid, and record absorbance value.',
        proTip: 'Hold cuvettes strictly by the frosted sides — optical clear faces must stay spotless.'
      },
      {
        stepNumber: 4,
        title: 'Concentration Calculation',
        description: 'Apply Beer-Lambert formula A = ε · c · l or standard extinction coefficient conversion to calculate sample concentration.',
        proTip: 'For DNA: 1 A260 unit = 50 µg/mL double-stranded DNA.'
      }
    ],
    applications: [
      'Purity and yield assessment of extracted DNA/RNA (A260/A280 ratios)',
      'Bacterial growth curve monitoring via OD600 measurements',
      'Enzyme kinetics studies measuring substrate disappearance',
      'Total protein quantification using Bradford or BCA colorimetric assays'
    ],
    precautions: [
      'Plastic cuvettes absorb UV light below 340 nm — ALWAYS use Quartz cuvettes for 260/280 nm UV measurements.',
      'Air bubbles inside cuvettes scatter light dramatically, causing falsely high absorbance readings.',
      'Ensure sample absorbance remains within linear detector range (0.1 to 1.5 A).'
    ],
    troubleshooting: [
      {
        problem: 'Fluctuating / unstable absorbance values',
        possibleCause: 'Insufficient lamp warm-up time, air bubbles in cuvette, or particulate suspension.',
        solution: 'Tap cuvette gently to release bubbles, centrifuge samples to remove insoluble precipitates, and allow lamp warm-up.'
      },
      {
        problem: 'Absorbance exceeds 2.0 (Off-scale reading)',
        possibleCause: 'Sample concentration is too high for linear detector response.',
        solution: 'Dilute sample 1:10 or 1:50 in blank buffer and re-measure.'
      },
      {
        problem: 'Negative absorbance value',
        possibleCause: 'Blank cuvette was contaminated or contained higher concentration than test sample.',
        solution: 'Re-zero instrument with fresh, pure solvent blank.'
      }
    ],
    keyFormula: 'A = \\epsilon \\cdot c \\cdot l \\quad (\\text{Beer-Lambert Law})'
  }
];
