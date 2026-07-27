export interface ChecklistCategory {
  id: string;
  categoryTitle: string;
  description: string;
  iconName: string;
  items: {
    id: string;
    label: string;
    details: string;
    criticality: 'Mandatory' | 'Recommended' | 'Caution';
  }[];
}

export const SAFETY_CHECKLIST_DATA: ChecklistCategory[] = [
  {
    id: 'ppe-check',
    categoryTitle: '1. Pre-Lab PPE & Attire Verification',
    description: 'Ensure proper physical barriers before entering the wet lab environment.',
    iconName: 'Shield',
    items: [
      {
        id: 'ppe-1',
        label: 'Buttoned Lab Coat On',
        details: 'Long-sleeved, fluid-resistant lab coat fully buttoned up.',
        criticality: 'Mandatory'
      },
      {
        id: 'ppe-2',
        label: 'Safety Glasses / Goggles Worn',
        details: 'ANSI Z87.1 approved eye protection covering side hazards.',
        criticality: 'Mandatory'
      },
      {
        id: 'ppe-3',
        label: 'Nitrile Gloves Donned',
        details: 'Powder-free gloves checked for tears or pinholes.',
        criticality: 'Mandatory'
      },
      {
        id: 'ppe-4',
        label: 'Full Foot Coverage (Closed Shoes)',
        details: 'Leather/synthetic closed shoes covering whole foot; no sandals or cloth canvas.',
        criticality: 'Mandatory'
      },
      {
        id: 'ppe-5',
        label: 'Long Hair Tied Back & Loose Items Secured',
        details: 'Hair tied back behind neck; scarves/lanyards tucked inside coat.',
        criticality: 'Recommended'
      }
    ]
  },
  {
    id: 'fumehood-check',
    categoryTitle: '2. Chemical Safety & Fume Hood Setup',
    description: 'Verify ventilation and chemical hazard controls prior to reagent handling.',
    iconName: 'AlertTriangle',
    items: [
      {
        id: 'chem-1',
        label: 'Fume Hood Airflow Indicator Green',
        details: 'Check face velocity monitor reads between 80–120 fpm.',
        criticality: 'Mandatory'
      },
      {
        id: 'chem-2',
        label: 'Sash Height Below Safety Line',
        details: 'Keep glass sash lowered below marked maximum operational height (~18 inches).',
        criticality: 'Mandatory'
      },
      {
        id: 'chem-3',
        label: 'Chemical SDS Reviewed & Compatibility Checked',
        details: 'Confirm flammables/acids stored separately in dedicated safety cabinets.',
        criticality: 'Recommended'
      },
      {
        id: 'chem-4',
        label: 'Secondary Containment Tray Used',
        details: 'Place glass bottles of acids/solvents in plastic spill containment trays.',
        criticality: 'Caution'
      }
    ]
  },
  {
    id: 'biosafety-check',
    categoryTitle: '3. Biosafety Cabinet & Sterile Prep',
    description: 'Maintain sterile working conditions for biological organisms and cell cultures.',
    iconName: 'ShieldCheck',
    items: [
      {
        id: 'bio-1',
        label: 'BSC Airflow Blower Running 10-15 min',
        details: 'Allow laminar airflow curtain to stabilize before introducing samples.',
        criticality: 'Mandatory'
      },
      {
        id: 'bio-2',
        label: '70% Ethanol Sanitization Performed',
        details: 'Wipe down internal cabinet walls, floor, and equipment bottles.',
        criticality: 'Mandatory'
      },
      {
        id: 'bio-3',
        label: 'Front/Rear Air Intake Grilles Unobstructed',
        details: 'Ensure no papers, pipettes, or arms cover the front perforation slots.',
        criticality: 'Mandatory'
      },
      {
        id: 'bio-4',
        label: 'Clean to Dirty Workflow Arranged',
        details: 'Organize reagents on left, clean working zone in middle, biohazard waste on right.',
        criticality: 'Recommended'
      }
    ]
  },
  {
    id: 'emergency-check',
    categoryTitle: '4. Emergency Equipment & Post-Lab Cleanup',
    description: 'Verify emergency exit routes and ensure safe waste disposal before exiting.',
    iconName: 'CheckCircle2',
    items: [
      {
        id: 'emerg-1',
        label: 'Eyewash Station & Safety Shower Accessible',
        details: 'Path to emergency eyewash and shower clear of boxes or chairs.',
        criticality: 'Mandatory'
      },
      {
        id: 'emerg-2',
        label: 'Biohazard & Chemical Waste Segregated Correctly',
        details: 'Sharps in red biohazard plastic bins; liquid waste in designated bottles.',
        criticality: 'Mandatory'
      },
      {
        id: 'emerg-3',
        label: 'Bench Surfaces Disinfected & Gas Lines Off',
        details: 'Decontaminate benchtop with 10% bleach or 70% ethanol; shut off gas valves.',
        criticality: 'Mandatory'
      },
      {
        id: 'emerg-4',
        label: 'Gloves Removed & Hands Washed Thoroughly',
        details: 'Remove gloves using proper technique (glove-in-glove) and wash hands with soap.',
        criticality: 'Mandatory'
      }
    ]
  }
];
