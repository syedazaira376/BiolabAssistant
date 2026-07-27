export interface LabTip {
  id: string;
  title: string;
  category: 'Pipetting & Accuracy' | 'Aseptic Technique' | 'Cold Chain & Storage' | 'Reagents & Solutions';
  summary: string;
  detailedSteps: string[];
  proTip: string;
  iconName: string;
}

export const LAB_TIPS: LabTip[] = [
  {
    id: 'tip-1',
    title: 'Mastering Reverse Pipetting for Viscous & Foaming Liquids',
    category: 'Pipetting & Accuracy',
    summary: 'Standard forward pipetting leads to volume errors when handling glycerol, FBS, Triton X-100, or viscous buffers. Reverse pipetting eliminates air bubble entrapment.',
    detailedSteps: [
      'Depress the pipette plunger fully to the SECOND STOP (blow-out position) before entering the liquid.',
      'Immerse tip 2-3 mm beneath the surface and slowly release plunger to aspirate excess liquid into the tip.',
      'Dispense liquid by depressing plunger ONLY to the FIRST STOP into the target tube.',
      'The excess liquid remaining in the tip is discarded along with the tip.'
    ],
    proTip: 'Reverse pipetting guarantees exact volumetric delivery when dispensing 100% glycerol or detergent solutions.',
    iconName: 'TestTube'
  },
  {
    id: 'tip-2',
    title: 'Aseptic Clean-Zone Workflow in the Biosafety Cabinet',
    category: 'Aseptic Technique',
    summary: 'Prevent bacterial and fungal contamination by establishing a strict left-to-right (or right-to-left) directional airflow workflow.',
    detailedSteps: [
      'Place clean reagents and media bottles on the LEFT side of the cabinet floor.',
      'Perform all liquid transfers, pipetting, and tube openings in the CENTER clean working zone.',
      'Place biohazard waste buckets, used pipettes, and dirty tubes on the RIGHT side.',
      'Never pass dirty hands or spent pipette tips back over clean open media containers.'
    ],
    proTip: 'Wipe all items thoroughly with 70% ethanol before bringing them past the front air intake curtain.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'tip-3',
    title: 'RNA Cold Chain & Degradation Prevention Rules',
    category: 'Cold Chain & Storage',
    summary: 'RNA is extremely fragile due to ubiquitous airborne and skin RNase enzymes that resist heat autoclaving.',
    detailedSteps: [
      'Designate an "RNase-Free Zone" in the lab with dedicated pipettes and filter tips.',
      'Clean all benchtops, pipettes, and racks with RNase decontamination sprays (e.g. RNaseAWAY) before starting.',
      'Keep RNA samples on wet ice at all times during preparation and store long-term at -80°C.',
      'Aliquots should be kept small to avoid repeated freeze-thaw cycles which fragment RNA transcripts.'
    ],
    proTip: 'Change gloves frequently — skin oil and sweat are rich sources of active RNase A!',
    iconName: 'Thermometer'
  },
  {
    id: 'tip-4',
    title: 'Precision Buffer Preparation & pH Electrode Calibration',
    category: 'Reagents & Solutions',
    summary: 'Incorrect solution pH alters enzymatic kinetics and nucleic acid binding capabilities.',
    detailedSteps: [
      'Calibrate pH meter using a 3-point calibration standard (pH 4.01, 7.00, and 10.01) before every session.',
      'Dissolve dry chemical salts in 80% of final target volume of ultrapure water first.',
      'Adjust pH slowly with 1 N HCl or 1 N NaOH while magnetic stir bar is actively rotating.',
      'Bring buffer to final target volume in a volumetric flask AFTER pH stabilizes at room temperature.'
    ],
    proTip: 'Always measure buffer pH at the exact operating temperature (e.g. 25°C), as Tris buffer pH shifts -0.03 pH units per °C temperature change!',
    iconName: 'Sparkles'
  }
];
