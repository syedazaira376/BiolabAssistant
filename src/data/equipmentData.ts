export interface EquipmentItem {
  id: string;
  name: string;
  category: 'Molecular & Cell Bio' | 'Analytical & Optical' | 'Sample Prep & Storage' | 'Sterilization & Safety';
  iconName: string;
  shortDesc: string;
  purpose: string;
  principle: string;
  keySpecs: string[];
  operatingSteps: string[];
  maintenanceTips: string[];
  safetyNotes: string[];
}

export const EQUIPMENT_LIST: EquipmentItem[] = [
  {
    id: 'thermal-cycler',
    name: 'Thermal Cycler (PCR Machine)',
    category: 'Molecular & Cell Bio',
    iconName: 'Dna',
    shortDesc: 'Automated temperature-cycling block for nucleic acid amplification.',
    purpose: 'Rapidly heats and cools reaction tubes through precise temperature steps (denaturation, annealing, extension) to amplify target DNA.',
    principle: 'Utilizes Peltier thermoelectric elements to rapidly ramp block temperatures between 4°C and 99°C with high temperature uniformity (±0.2°C). Heated lids prevent tube evaporation and condensation.',
    keySpecs: [
      'Temperature Range: 4.0°C to 99.9°C',
      'Max Ramp Rate: 3.0°C to 5.0°C per second',
      'Block Capacity: 96 x 0.2 mL tubes or 96-well PCR plate',
      'Heated Lid: 105°C fixed or adjustable'
    ],
    operatingSteps: [
      'Ensure PCR tubes/plates are sealed tightly to prevent evaporation.',
      'Place tubes symmetrically in the sample block.',
      'Program cycle parameters: Denaturation (95°C), Annealing (50-65°C), Extension (72°C).',
      'Enable heated lid setting (~105°C) before starting thermal run.',
      'After run completion, retrieve amplicons or store at 4°C hold.'
    ],
    maintenanceTips: [
      'Clean Peltier block wells weekly using 70% isopropanol and cotton swabs.',
      'Calibrate block temperature accuracy annually.',
      'Never force bent or deformed PCR tubes into block wells.'
    ],
    safetyNotes: [
      'Thermal block and heated lid reach extreme temperatures (>105°C) — avoid touching during operation.',
      'Do not use regular 1.5 mL microcentrifuge tubes in thin-walled 0.2 mL block wells.'
    ]
  },
  {
    id: 'microcentrifuge',
    name: 'High-Speed Microcentrifuge',
    category: 'Sample Prep & Storage',
    iconName: 'RotateCw',
    shortDesc: 'Benchtop centrifuge for pelleting cells, precipitating nucleic acids, and phase separation.',
    purpose: 'Applies centrifugal force to separate particles, cell debris, or macromolecules suspended in liquid based on density and mass.',
    principle: 'High-speed electric motor spins a fixed-angle rotor up to 15,000 RPM (21,000 × g). Centrifugal acceleration forces dense particles outward to the bottom of 1.5/2.0 mL tubes.',
    keySpecs: [
      'Max Speed: 15,000 RPM (21,130 × g)',
      'Rotor Capacity: 24 x 1.5/2.0 mL microcentrifuge tubes',
      'Temperature Control: Refrigerated units maintain -10°C to +40°C',
      'Acceleration / Deceleration: <15 seconds'
    ],
    operatingSteps: [
      'Check that tube caps are snapped tightly shut.',
      'ALWAYS balance the rotor symmetrically by placing tubes of equal weight/volume opposite each other.',
      'Secure the rotor lid tightly with the central locking nut.',
      'Set target speed (RPM or RCF/g-force) and run duration.',
      'Wait for the rotor to stop completely before pressing lid release.'
    ],
    maintenanceTips: [
      'Wipe rotor chamber with 70% ethanol after spills.',
      'Autoclave aluminum rotors periodically to eliminate bio-contamination.',
      'Inspect rotor seals and O-rings for cracks or corrosion.'
    ],
    safetyNotes: [
      'NEVER run an unbalanced centrifuge — rotor imbalance at 15,000 RPM can shatter the instrument and cause severe injury!',
      'Always use a aerosol-tight rotor lid when centrifuging hazardous biological or radioactive materials.'
    ]
  },
  {
    id: 'spectrophotometer',
    name: 'UV-Vis Spectrophotometer & NanoDrop',
    category: 'Analytical & Optical',
    iconName: 'Activity',
    shortDesc: 'Optical absorption instrument for nucleic acid & protein quantification.',
    purpose: 'Quantifies DNA, RNA, protein concentrations, and cell density (OD600) by measuring monochromatic light absorbance.',
    principle: 'Passes UV (260/280 nm) or visible light through sample liquid onto a CCD sensor. Absorbance follows the Beer-Lambert Law (A = ε·c·l). Microvolume NanoDrop instruments use surface tension to hold 1-2 µL liquid droplets between optical pedestals without cuvettes.',
    keySpecs: [
      'Wavelength Range: 190 nm to 840 nm',
      'Sample Volume: 1.0 to 2.0 µL (NanoDrop) or 1.0 mL (Cuvette)',
      'Detection Limit: 2 ng/µL dsDNA to 15,000 ng/µL dsDNA',
      'Pathlength: 0.05 mm to 1.0 mm (auto-ranging)'
    ],
    operatingSteps: [
      'Power on deuterium/xenon flash lamp and allow 10-minute warm-up.',
      'Clean optical pedestals with lint-free Kimwipe and ultrapure water.',
      'Pipette 1.5 µL blank buffer onto pedestal and lower arm to record baseline zero.',
      'Wipe pedestals and pipette 1.5 µL sample DNA/RNA.',
      'Measure absorbance at 260 nm (nucleic acids) and 280 nm (proteins) to record yield and A260/A280 purity ratio.'
    ],
    maintenanceTips: [
      'Clean pedestals with 0.5 M HCl followed by water if organic residue builds up.',
      'Re-condition pedestals with PR-1 pedestal reconditioning compound to maintain hydrophobic surface retention.',
      'Calibrate optical path length using standard calibration fluids.'
    ],
    safetyNotes: [
      'Avoid looking directly into open UV beam ports.',
      'Dispose of sample wiping Kimwipes according to chemical/biological hazard rules.'
    ]
  },
  {
    id: 'biosafety-cabinet',
    name: 'Class II Type A2 Biosafety Cabinet (BSC)',
    category: 'Sterilization & Safety',
    iconName: 'Shield',
    shortDesc: 'HEPA-filtered laminar airflow containment hood for sterile cell culture and pathogen handling.',
    purpose: 'Protects the user, environment, and biological sample from airborne cross-contamination during cell culture and biohazard handling.',
    principle: 'Draws room air through front intake grilles to create an air curtain. Recirculates ~70% of air through a HEPA filter (99.97% efficiency at 0.3 µm particles) downward in vertical laminar flow, while exhausting ~30% through a top HEPA filter.',
    keySpecs: [
      'Inflow Velocity: ~105 feet per minute (fpm)',
      'Downflow Velocity: ~55 fpm vertical laminar flow',
      'HEPA Filter Efficiency: 99.97% at 0.3 microns',
      'UV Decontamination Lamp: 254 nm germicidal UV light'
    ],
    operatingSteps: [
      'Turn on BSC blower and let run for 10-15 minutes prior to work.',
      'Wipe interior stainless steel floor and walls with 70% ethanol.',
      'Set sash height to designated working line (~8-10 inches).',
      'Arrange clean materials on one side and waste materials on the opposite side to maintain clean-to-dirty workflow.',
      'Avoid rapid arm movements that disrupt laminar air curtain barrier.'
    ],
    maintenanceTips: [
      'Perform annual certification testing for airflow velocity and HEPA integrity.',
      'Clean under stainless steel intake grilles monthly.',
      'Turn off UV lamp before commencing manual work in the cabinet.'
    ],
    safetyNotes: [
      'NEVER use open flame Bunsen burners inside a BSC — heat disrupts laminar airflow patterns and poses fire/explosion risks with ethanol!',
      'Never block front intake air grilles with arms, notebooks, or equipment.'
    ]
  },
  {
    id: 'autoclave',
    name: 'Steam Sterilizer (Autoclave)',
    category: 'Sterilization & Safety',
    iconName: 'Flame',
    shortDesc: 'High-pressure steam vessel for thermal sterilizing of media, glassware, and biohazard waste.',
    purpose: 'Destroys all bacterial cells, fungal spores, viruses, and heat-resistant bacterial endospores (e.g. Bacillus stearothermophilus).',
    principle: 'Generates saturated high-pressure steam at 121°C (15 psi / 1 bar) for 15-30 minutes. Saturated steam rapidly transfers latent heat, denaturing microbial proteins and structural cellular components.',
    keySpecs: [
      'Standard Cycle: 121°C at 15 psi (103 kPa) for 20 minutes',
      'Liquid Cycle: Slow exhaust pressure release to prevent superheated liquid boil-over',
      'Dry Cycle: Fast exhaust with drying vacuum for glassware and metal tools',
      'Chamber Volume: 50 L to 500 L stainless steel pressure vessel'
    ],
    operatingSteps: [
      'Verify water level in steam generator reservoir.',
      'Loosen caps on liquid bottles (never seal tightly closed bottles!).',
      'Place items inside heat-resistant autoclave bags/trays.',
      'Close and lock door pressure bolts.',
      'Select Liquid, Gravity, or Vacuum cycle and initiate run.',
      'Wait for chamber pressure gauge to reach 0 psi before opening door.'
    ],
    maintenanceTips: [
      'Run biological spore test vials (Geobacillus stearothermophilus) weekly to confirm sterilization efficacy.',
      'Clean chamber drain screen daily to remove melted agar or paper debris.',
      'Inspect silicone door door gasket seals for wear.'
    ],
    safetyNotes: [
      'SEVERE STEAM BURN HAZARD: Stand behind the door and wear heat-resistant thermal gloves and face shield when opening chamber!',
      'NEVER seal caps tightly on liquid glass bottles — sealed bottles will explode under high steam pressure!',
      'Never autoclave flammable chemicals, bleach, or volatile solvents.'
    ]
  },
  {
    id: 'micropipettes',
    name: 'Precision Air-Displacement Micropipettes',
    category: 'Sample Prep & Storage',
    iconName: 'TestTube',
    shortDesc: 'Variable-volume micro-dispensing tools for 0.1 µL to 1000 µL micro-volume liquids.',
    purpose: 'Accurately measures and transfers micro-liter liquid volumes during reagent formulation and reaction assembly.',
    principle: 'Air-displacement mechanism: depressing the plunger compresses an internal piston. Releasing the plunger creates a vacuum that draws an exact liquid volume into a disposable plastic tip.',
    keySpecs: [
      'P2 / P10: 0.2–2 µL / 0.5–10 µL (sub-microliter precision)',
      'P20 / P200: 2–20 µL / 20–200 µL (standard PCR/enzymes)',
      'P1000: 100–1000 µL (large buffer aliquots)',
      'Accuracy & Precision: ±1.0% systematic error at nominal volume'
    ],
    operatingSteps: [
      'Select appropriate pipette size (never dial volume beyond listed min/max limits!).',
      'Attach sterile aerosol-barrier tip firmly onto shaft.',
      'Depress plunger to FIRST STOP before immersing tip 2-3 mm into liquid.',
      'Slowly release plunger to aspirate liquid without forming bubbles.',
      'Dispense liquid into target vessel by depressing plunger to SECOND STOP (blow-out).'
    ],
    maintenanceTips: [
      'Store pipettes vertically on pipette carousels at maximum volume setting to relieve internal spring tension.',
      'Calibrate gravimetrically with ultrapure water on analytical balances every 6 months.',
      'Autoclave lower shaft assemblies if contaminated with liquid.'
    ],
    safetyNotes: [
      'Never lay a pipette horizontally with liquid inside the tip — liquid will flow into the internal piston and destroy mechanisms!',
      'Always use filter tips when handling RNA, amplicons, or hazardous chemicals.'
    ]
  },
  {
    id: 'gel-rig',
    name: 'Gel Electrophoresis System & Power Supply',
    category: 'Molecular & Cell Bio',
    iconName: 'Layers',
    shortDesc: 'Horizontal gel chamber and high-voltage power supply unit for nucleic acid sizing.',
    purpose: 'Separates DNA/RNA fragments or proteins in an agarose or polyacrylamide matrix under constant electric voltage.',
    principle: 'Direct current (DC) power supply applies electrical potential across platinum electrodes in buffer. Negatively charged DNA migrates toward positive red anode (+).',
    keySpecs: [
      'Voltage Output: 0 to 300 V DC constant voltage or current',
      'Tank Design: UV-transparent acrylic with platinum wire electrodes',
      'Comb Formats: 8, 12, 16, or 24-well sample combs (0.75-1.5 mm thick)',
      'Buffer Capacity: 300 mL to 1000 mL 1x TAE/TBE'
    ],
    operatingSteps: [
      'Place gel casting tray in tank filled with 1x TAE or 1x TBE buffer.',
      'Ensure buffer completely submerges gel by 2-3 mm.',
      'Pipette samples mixed with loading dye into wells.',
      'Attach safety lid ensuring black lead connects to cathode (-) and red lead to anode (+).',
      'Set voltage (e.g. 100V) and start run.'
    ],
    maintenanceTips: [
      'Rinse tank thoroughly with distilled water after each use to remove salt crystal deposits.',
      'Inspect fragile platinum electrode wires for breaks.',
      'Never clean acrylic tanks with ethanol or organic solvents which cause crazing.'
    ],
    safetyNotes: [
      'HIGH VOLTAGE SHOCK HAZARD: Turn off power supply before lifting safety lid!',
      'Never touch buffer or electrodes while power supply is active.'
    ]
  },
  {
    id: 'microplate-reader',
    name: 'Multimode Microplate Reader',
    category: 'Analytical & Optical',
    iconName: 'Sparkles',
    shortDesc: '96/384-well spectrophotometric plate reader for high-throughput assays.',
    purpose: 'Measures absorbance, fluorescence, and luminescence across 96-well or 384-well microplates for ELISA, cell viability, and protein assays.',
    principle: 'Automated optical system uses monochromators or filter wheels to direct excitation light into individual microplate wells and measure emitted or absorbed photons with high speed (reads 96 wells in <10s).',
    keySpecs: [
      'Wavelength Selection: 200 nm to 1000 nm (1 nm increments)',
      'Modes: Absorbance (UV-Vis), Fluorescence Intensity, Luminescence',
      'Temperature Incubation: Ambient + 4°C to 45°C with orbital shaking',
      'Plate Formats: 6, 12, 24, 48, 96, and 384-well microplates'
    ],
    operatingSteps: [
      'Power on instrument and initialize software connection.',
      'Select assay protocol (e.g., Absorbance 450 nm for TMB ELISA).',
      'Ensure microplate bottom is clean, dry, and free from condensation or fingerprints.',
      'Eject plate carrier tray, place 96-well plate securely, and click Read.',
      'Export raw optical density (OD) matrix data for standard curve analysis.'
    ],
    maintenanceTips: [
      'Clean optical window and plate carrier tray monthly.',
      'Perform wavelength accuracy check using calibration optical plates.',
      'Avoid spilling liquid onto internal motor mechanics.'
    ],
    safetyNotes: [
      'Keep fingers clear of automated motorized plate tray drawer.',
      'Dispose of hazardous liquid plates in biological or chemical waste bins.'
    ]
  }
];
