export interface TopicPreset {
  id: string;
  name: string;
  shortDesc: string;
  query: string;
  structuredResponse: string;
}

export const TOPIC_PRESETS: TopicPreset[] = [
  {
    id: 'pcr',
    name: 'PCR (Polymerase Chain Reaction)',
    shortDesc: 'DNA amplification via thermal cycling',
    query: 'Explain Polymerase Chain Reaction (PCR) in detail.',
    structuredResponse: `## Overview
Polymerase Chain Reaction (PCR) is a foundational molecular biology technique used to exponentially amplify specific target DNA sequences in vitro from tiny starting quantities into millions or billions of copies within a few hours.

## Principle
PCR operates on thermal cycling—repeated rounds of temperature changes that govern DNA strand denaturation, primer annealing, and enzymatic synthesis:
- **Denaturation (94–98°C)**: High temperature breaks hydrogen bonds between complementary base pairs, yielding two single-stranded DNA templates.
- **Annealing (50–65°C)**: Lowering temperature allows synthetic oligonucleotide primers (forward and reverse) to specifically hybridize to complementary sequences flanking the target region.
- **Extension (72°C)**: Heat-stable Taq DNA Polymerase synthesizes new complementary DNA strands starting from 3'-OH primer ends using dNTP building blocks.

## Procedure
1. **Master Mix Preparation**: Combine $1\times$ Reaction Buffer, $1.5–2.5\text{ mM } \text{MgCl}_2$, $0.2\text{ mM}$ dNTP mix, $0.2–0.5\ \mu\text{M}$ Forward Primer, $0.2–0.5\ \mu\text{M}$ Reverse Primer, Taq Polymerase ($0.025\text{ U/}\mu\text{L}$), and template DNA.
2. **Thermal Cycling Program**:
   - Initial Denaturation: $95^\circ\text{C}$ for 3–5 min
   - 30–35 Cycles of:
     - Denaturation: $95^\circ\text{C}$ for 30 sec
     - Annealing: $T_m - 5^\circ\text{C}$ ($55–60^\circ\text{C}$) for 30 sec
     - Extension: $72^\circ\text{C}$ for $1\text{ min per kb}$
   - Final Extension: $72^\circ\text{C}$ for 5–10 min
3. **Product Analysis**: Load sample onto $1.0–2.0\%$ agarose gel with DNA ladder to verify amplified band size.

## Applications
- **Genetic Testing & Forensics**: DNA profiling, paternity testing, STR analysis.
- **Pathogen Detection**: Viral (e.g. SARS-CoV-2, HIV) and bacterial infectious disease diagnostics.
- **Gene Cloning & Sequencing**: Generating insert DNA for plasmid vector ligation and Next-Gen Sequencing library preparation.

## Advantages
- **Extreme Sensitivity**: Can detect and amplify a single molecule of DNA.
- **High Speed**: Produces $2^{30}$ copies in less than 2 hours.
- **Versatility**: Adaptable to RT-PCR (RNA target), qPCR (quantitative real-time), and multiplex PCR.

## Limitations
- **Contamination Risk**: Aerosolized amplicons can easily cause false-positive results.
- **Requires Sequence Knowledge**: Target flank sequence must be known to design complementary primers.
- **Non-specific Binding**: Improper annealing temperatures lead to off-target primer-dimer formation.

## Safety Tips
- Wear nitrile gloves to prevent human DNase contamination and skin exposure to fluorescent nucleic acid dyes.
- Use aerosol-barrier filter tips when pipetting master mix to prevent cross-contamination.
- Wear UV-blocking face shields or safety goggles when viewing PCR gels on UV transilluminators.`
  },
  {
    id: 'dna-rna-extraction',
    name: 'DNA/RNA Extraction',
    shortDesc: 'Isolation & purification of nucleic acids',
    query: 'Explain DNA and RNA Extraction protocols and purification principles.',
    structuredResponse: `## Overview
Nucleic acid extraction is the process of releasing DNA or RNA from cell walls, membranes, and nuclear envelopes while isolating it from proteins, lipids, carbohydrates, and nucleases for downstream enzymatic assays.

## Principle
Extraction relies on cell lysis followed by chemical separation or solid-phase silica column binding:
- **Lysis**: Detergents (SDS, Triton X-100) dissolve lipid bilayers, while Chaotropic Salts (Guanidinium Isothiocyanate) denature cellular proteins and deactivate endogenous DNases/RNases.
- **Selective Binding**: In high-salt ethanol conditions, nucleic acids bind selectively to silica membrane matrices via hydrogen bonding and ionic bridges.
- **Washing & Elution**: Impurities and salts are washed away with $70\%$ ethanol, and purified nucleic acid is eluted in low-salt TE buffer or nuclease-free water.

## Procedure
1. **Cell Lysis**: Digest sample in Lysis Buffer containing SDS, Proteinase K ($20\text{ mg/mL}$), and RNase A ($100\text{ mg/mL}$) at $56^\circ\text{C}$ for 30–60 min.
2. **Phase Separation / Binding**: Add $100\%$ Ethanol or Phenol-Chloroform ($25:24:1$) and bind lysate to silica spin columns at $12,000\times g$ for 1 min.
3. **Column Washing**: Wash spin column twice with Wash Buffer (containing $70–80\%$ ethanol) to remove residual proteins and salts.
4. **Elution**: Centrifuge column dry, add $30–50\ \mu\text{L}$ pre-warmed ($55^\circ\text{C}$) Nuclease-Free Water or TE Buffer ($10\text{ mM}$ Tris, $1\text{ mM}$ EDTA), incubate 2 min, and centrifuge into fresh collection tube.

## Applications
- **Genomic Research**: Whole-genome sequencing, transcriptomics (RNA-Seq), RT-qPCR.
- **Molecular Diagnostics**: Viral viral load quantification and hereditary cancer mutation screening.
- **Recombinant DNA Technology**: Plasmid extraction for bacterial transformation.

## Advantages
- **High Purity**: Silica spin columns yield $A_{260}/A_{280}$ purity ratios of $1.8–2.0$.
- **High Yield**: Scalable from micro-aliquots to multi-gram tissue preparations.
- **Integrity Preservation**: Inhibits enzymatic degradation during isolation.

## Limitations
- **RNA Fragility**: RNA rapidly degrades in ambient environments due to ubiquitous skin RNases.
- **Organic Chemical Hazards**: Traditional phenol-chloroform protocols use toxic volatile solvents.
- **Shearing of High-Molecular-Weight DNA**: Excessive vortexing can fragment genomic DNA.

## Safety Tips
- Perform Phenol-Chloroform extraction strictly inside an operational chemical fume hood.
- Clean all work surfaces, pipettes, and racks with RNase-decontaminating spray (e.g. RNaseAWAY).
- Store RNA aliquots at $-80^\circ\text{C}$ and avoid repeated freeze-thaw cycles.`
  },
  {
    id: 'gel-electrophoresis',
    name: 'Gel Electrophoresis',
    shortDesc: 'Separation of DNA/RNA or proteins by mass',
    query: 'Explain Gel Electrophoresis principles, buffer mechanics, and gel running protocols.',
    structuredResponse: `## Overview
Gel Electrophoresis is an analytical technique used to separate, identify, and purify charged biomolecules (DNA, RNA, or proteins) based on size, molecular weight, and charge-to-mass ratio under an electric field.

## Principle
Biomolecules migrate through a porous gel matrix (Agarose for DNA $>100\text{ bp}$; Polyacrylamide SDS-PAGE for proteins or small nucleic acids):
- **Charge Migration**: DNA/RNA sugar-phosphate backbones carry net negative charges and migrate toward the positive anode ($+$).
- **Size Sieving**: Smaller molecules navigate agarose matrix pores faster than larger molecules, resulting in distance-based separation.
- **Visual Staining**: Fluorescent intercalating dyes (Ethidium Bromide, SYBR Safe) fluoresce under UV or blue light when bound to nucleic acid base pairs.

## Procedure
1. **Gel Casting**: Dissolve $1.0\text{ g}$ agarose in $100\text{ mL}$ $1\times$ TAE or TBE buffer ($1.0\%$ gel) by microwaving until clear. Cool to $50^\circ\text{C}$, add $5\ \mu\text{L}$ nucleic acid stain, pour into casting tray with comb, and set for 30 min.
2. **Sample Preparation**: Mix DNA samples with $6\times$ Loading Buffer (containing glycerol for density and tracking dyes like Bromophenol Blue).
3. **Gel Running**: Submerge gel in $1\times$ TAE/TBE buffer, load DNA ladder ($1\text{ kb}$) and samples into wells, attach electrodes, and run at $100\text{ V}$ ($5\text{ V/cm}$) for 45–60 min.
4. **Visualization**: Place gel under UV or blue-light transilluminator and photograph band patterns.

## Applications
- **PCR Verification**: Verifying correct amplicon size against a DNA ladder.
- **Gel Extraction**: Excising target DNA bands for restriction digestion and plasmid cloning.
- **Protein Profiling**: SDS-PAGE determination of protein purity and molecular mass.

## Advantages
- **Simple & Inexpensive**: Requires standard electrophoresis tanks and power supplies.
- **Non-Destructive Extraction**: Intact DNA bands can be cut from gel for downstream enzymatic ligation.
- **High Resolution**: Polyacrylamide gels can resolve single-base pair differences.

## Limitations
- **Cannot Sequence DNA**: Only reveals size, not nucleotide sequence.
- **Smiling Band Artifacts**: Overheating at excessive voltage ($>120\text{ V}$) distorts gel band migration.
- **Dye Sensitivity Limits**: Requires minimum $5–10\text{ ng}$ DNA per band for detection.

## Safety Tips
- Ethidium Bromide is a potent mutagen; handle with dedicated nitrile gloves and dispose of as biohazard chemical waste.
- Always turn off and disconnect power supply before opening electrophoresis tank lid.
- Use UV-blocking protective face shields when inspecting gels under UV light.`
  },
  {
    id: 'elisa',
    name: 'ELISA (Enzyme-Linked Immunosorbent Assay)',
    shortDesc: 'Quantitative detection of proteins & antibodies',
    query: 'Explain ELISA principles, direct vs sandwich methods, and step-by-step procedures.',
    structuredResponse: `## Overview
Enzyme-Linked Immunosorbent Assay (ELISA) is an plate-based immunological technique used to detect and quantify specific proteins, antibodies, hormones, or antigens in biological fluids with high specificity.

## Principle
ELISA relies on specific antigen-antibody binding and enzymatic signal amplification:
- **Antigen Capture**: Target antigen or capture antibody is immobilized on polystyrene 96-well microplate surfaces.
- **Specific Binding**: Detection antibodies conjugated to enzymes (e.g. Horseradish Peroxidase, HRP) specifically bind the target antigen.
- **Colorimetric Reaction**: Addition of chromogenic substrate (e.g. TMB) turns solution blue/yellow upon enzymatic cleavage, yielding color intensity directly proportional to antigen concentration.

## Procedure
1. **Plate Coating**: Coat 96-well microplate with Capture Antibody ($1–10\ \mu\text{g/mL}$) in Carbonate Buffer ($\text{pH } 9.6$), incubate overnight at $4^\circ\text{C}$.
2. **Blocking**: Wash wells $3\times$ with PBST ($0.05\%$ Tween-20 in PBS), add $200\ \mu\text{L}$ $1\%$ BSA Blocking Buffer, incubate 1 hour at room temperature to block non-specific sites.
3. **Sample Incubation**: Add $100\ \mu\text{L}$ standard or sample dilutions, incubate 2 hours, wash $4\times$ with PBST.
4. **Detection Antibody & Substrate**: Add HRP-conjugated antibody, incubate 1 hour, wash $5\times$. Add $100\ \mu\text{L}$ TMB substrate, develop in dark for 15 min, stop reaction with $50\ \mu\text{L}$ $2\text{ N } \text{H}_2\text{SO}_4$, and read absorbance at $450\text{ nm}$ on microplate reader.

## Applications
- **Clinical Diagnostics**: HIV antibody testing, pregnancy tests (hCG detection), autoimmune marker screening.
- **Biomedical Research**: Quantifying cytokine levels (IL-6, TNF-$\alpha$) in cell supernatants.
- **Food Safety**: Allergy testing (gluten, peanut protein) and pathogen screening.

## Advantages
- **High Sensitivity**: Detects picogram-level ($1–10\text{ pg/mL}$) antigen concentrations.
- **High Throughput**: 96-well format enables simultaneous screening of dozens of patient samples.
- **Quantitative Accuracy**: Standard curve linear regression enables precise concentration measurement.

## Limitations
- **High Background Noise**: Insufficient washing steps or cross-reactive antibodies produce false positives.
- **Antibody Dependency**: Requires high-affinity paired monoclonal antibodies.
- **Matrix Interference**: Serum lipids or proteins can interfere with binding kinetics.

## Safety Tips
- Stop Solution ($2\text{ N } \text{H}_2\text{SO}_4$) is corrosive; wear eye protection and gloves.
- Dispose of spent TMB substrate and wash buffers in designated chemical waste containers.`
  },
  {
    id: 'cell-culture',
    name: 'Cell Culture Techniques',
    shortDesc: 'Aseptic maintenance of mammalian & bacterial cells',
    query: 'Explain Cell Culture protocols, aseptic techniques, media requirements, and biosafety.',
    structuredResponse: `## Overview
Cell Culture involves growing and maintaining living cells (mammalian, insect, or microbial) outside their natural environment under strictly controlled environmental conditions of temperature, humidity, pH, and nutrient availability.

## Principle
Cells require an artificial microenvironment mimicking physiological conditions:
- **Nutrient Media**: Basal media (DMEM, RPMI-1640) containing glucose, amino acids, vitamins, and inorganic salts.
- **Serum Supplement**: $10\%$ Fetal Bovine Serum (FBS) provides essential growth factors, hormones, and cell attachment proteins.
- **Environmental Controls**: $37^\circ\text{C}$ temperature, $95\%$ humidity, and $5\%\ \text{CO}_2$ (maintained by sodium bicarbonate buffer system to stabilize media pH at $7.2–7.4$).

## Procedure
1. **Aseptic Cabinet Setup**: Wipe down Biosafety Cabinet (BSC Class II) interior with $70\%$ Ethanol. Turn on laminar flow air curtain 15 min prior.
2. **Thawing Cells**: Rapidly thaw frozen cryovial in $37^\circ\text{C}$ water bath for 2 min. Transfer to pre-warmed media, centrifuge at $200\times g$ for 5 min to remove DMSO cryoprotectant.
3. **Cell Subculturing (Passaging)**:
   - Aspirate old media, wash cell monolayer with sterile PBS.
   - Add $0.25\%$ Trypsin-EDTA, incubate at $37^\circ\text{C}$ for 3–5 min to detach adherent cells.
   - Neutralize trypsin with complete media ($10\%$ FBS), count cells using a Hemocytometer, seed into new culture flasks at $1\times 10^4\text{ cells/cm}^2$.

## Applications
- **Cancer & Disease Modeling**: Drug screening, toxicity assays, and cell signaling research.
- **Biopharmaceutical Production**: Recombinant monoclonal antibodies and viral vector manufacturing.
- **Regenerative Medicine**: Stem cell differentiation and tissue engineering.

## Advantages
- **Controlled Experimental Variables**: Precise control of physicochemical environment.
- **Human Relevance**: Human cell lines replace or minimize animal testing models.
- **High Reproducibility**: Clonal populations ensure standardized cell responses.

## Limitations
- **Contamination Vulnerability**: Rapidly contaminated by airborne bacteria, fungi, or Mycoplasma.
- **Genetic Drift**: Continuous cell lines undergo chromosomal alterations over high passage numbers ($>20$).
- **Lack of Whole-Organ Complexity**: Lacks 3D systemic cell-cell and extracellular matrix interactions.

## Safety Tips
- Always operate within a certified Class II Biosafety Cabinet (BSC) for BSL-1 and BSL-2 cell lines.
- Autoclave or treat liquid cell waste with $10\%$ bleach for 30 minutes before sink disposal.
- Wear safety face shield and insulated cryogenic gloves when retrieving vials from liquid nitrogen storage.`
  },
  {
    id: 'microscopy',
    name: 'Microscopy & Imaging',
    shortDesc: 'Optical, fluorescence & electron visualization',
    query: 'Explain Optical, Phase-Contrast, and Fluorescence Microscopy principles and techniques.',
    structuredResponse: `## Overview
Microscopy encompasses optical and electronic techniques designed to magnify and resolve structural features of cells, microorganisms, tissues, and subcellular organelles that are invisible to the naked eye.

## Principle
Microscopy techniques utilize light-matter interactions:
- **Brightfield Microscopy**: Visible light passes through stained specimens; contrast depends on differential light absorption.
- **Phase-Contrast Microscopy**: Converts subtle phase shifts of light passing through transparent living cells into amplitude/contrast variations without staining.
- **Fluorescence Microscopy**: Fluorophores (e.g. GFP, DAPI) absorb short excitation wavelengths (e.g. UV/Blue) and emit longer fluorescence wavelengths (e.g. Green/Red) detected through specialized optical filters.

## Procedure
1. **Sample Mounting**: Place glass coverslip containing fixed cells onto microscope slide. Add fluorophore-mounting medium (e.g. DAPI for nuclear DNA staining).
2. **Koehler Illumination Alignment** (Brightfield):
   - Focus specimen under $10\times$ objective lens.
   - Close field diaphragm, adjust condenser height until diaphragm edges are sharp, center iris, and open diaphragm to match objective numerical aperture.
3. **Fluorescence Imaging**:
   - Switch to darkroom environment. Select appropriate filter cube (e.g. DAPI: Ex $358\text{ nm}$ / Em $461\text{ nm}$).
   - Adjust exposure time ($100–500\text{ ms}$) and capture image with CCD/sCMOS camera.
4. **Oil Immersion ($100\times$)**: Apply one drop of immersion oil ($n=1.518$) directly to slide surface to eliminate refractive light bending.

## Applications
- **Cellular Biology**: Subcellular organelle localization, cytoskeletal dynamics, mitosis tracking.
- **Clinical Pathology**: Histomedical tumor biopsy classification and Gram-staining bacterial identification.
- **Live-Cell Imaging**: Real-time calcium signaling and receptor endocytosis tracking.

## Advantages
- **High Spatial Resolution**: Confocal microscopy resolves structures down to $200\text{ nm}$ ($0.2\ \mu\text{m}$).
- **Multi-Color Co-localization**: Simultaneous detection of multiple protein targets using distinct fluorophores.
- **Non-Destructive Observation**: Phase contrast allows live cell monitoring without toxic fixatives.

## Limitations
- **Diffraction Limit**: Conventional optical microscopy cannot resolve structures smaller than $\lambda/2$ ($\sim 200\text{ nm}$).
- **Photobleaching & Phototoxicity**: Intense excitation light degrades fluorophores and damages living cells.
- **Artifacts**: Fixation and staining reagents can alter native organelle morphology.

## Safety Tips
- Never look directly into high-intensity mercury arc lamps, UV light paths, or laser lines.
- Clean immersion oil off $100\times$ objective lenses using lens paper and anhydrous lens cleaner immediately after use.`
  },
  {
    id: 'spectrophotometry',
    name: 'Spectrophotometry & Beer-Lambert Law',
    shortDesc: 'Quantitative absorption analysis of biomolecules',
    query: 'Explain Spectrophotometry principles, Beer-Lambert law calculations, and nucleic acid quantification.',
    structuredResponse: `## Overview
Spectrophotometry measures the intensity of light absorbed by a chemical substance at specific wavelengths. It is the gold standard for quantifying nucleic acid purity, protein concentration, and bacterial cell density ($OD_{600}$).

## Principle
Spectrophotometry is governed by the **Beer-Lambert Law**:
$$A = \epsilon \cdot c \cdot l$$
Where:
- $A$ = Absorbance (unitless)
- $\epsilon$ = Molar Extinction Coefficient ($\text{L}\cdot\text{mol}^{-1}\cdot\text{cm}^{-1}$)
- $c$ = Molar Concentration ($\text{mol/L}$)
- $l$ = Optical Path Length ($\text{cm}$, typically $1.0\text{ cm}$)

### Key Wavelengths:
- **$260\text{ nm}$**: Peak absorption of DNA/RNA (purine and pyrimidine aromatic ring structures).
- **$280\text{ nm}$**: Peak absorption of proteins (aromatic amino acids: Tryptophan, Tyrosine, Phenylalanine).
- **$230\text{ nm}$**: Organic contaminants (Phenol, EDTA, Chaotropic salts).

## Procedure
1. **Instrument Calibration**: Clean quartz micro-cuvette or microvolume pedestal (e.g. NanoDrop). Pipette $1–2\ \mu\text{L}$ blank solution (Nuclease-Free Water or TE buffer) and press "Blank".
2. **Sample Measurement**: Wipe pedestal, load $1–2\ \mu\text{L}$ purified DNA/RNA or protein sample, measure spectral absorbances $A_{230}$, $A_{260}$, and $A_{280}$.
3. **Concentration Calculation**:
   - $\text{dsDNA Conc.} = A_{260} \times 50\ \mu\text{g/mL per } A_{260} \text{ unit}$
   - $\text{RNA Conc.} = A_{260} \times 40\ \mu\text{g/mL per } A_{260} \text{ unit}$
4. **Purity Ratio Verification**:
   - Pure DNA $A_{260}/A_{280} \approx 1.8$; Pure RNA $A_{260}/A_{280} \approx 2.0$.
   - $A_{260}/A_{230} > 2.0$ indicates absence of guanidine/phenol salts.

## Applications
- **Nucleic Acid Quality Control**: Verifying sample concentration prior to PCR or sequencing.
- **Protein Assays**: Bradford, BCA, and Lowry colorimetric protein quantification.
- **Bacterial Growth Kinetics**: Measuring turbidity at $OD_{600}$ to determine log-phase culture harvest time.

## Advantages
- **Rapid & Non-Destructive**: Microvolume spectrophotometers require only $1\ \mu\text{L}$ sample in 5 seconds.
- **High Precision**: Direct molar concentration calculation without standard curves for pure DNA/RNA.
- **Broad Dynamic Range**: Measures from $2\text{ ng/}\mu\text{L}$ to $15,000\text{ ng/}\mu\text{L}$ without dilution.

## Limitations
- **Cannot Distinguish DNA from RNA**: Both absorb strongly at $260\text{ nm}$.
- **Contaminant Interference**: Residual phenol or proteins inflate $A_{260}$ concentration readings.
- **Requires Quartz Cuvettes**: Standard plastic cuvettes absorb UV light below $300\text{ nm}$.

## Safety Tips
- Handle quartz cuvettes gently; wipe only with lint-free optical lens paper.
- Dispose of protein dye reagents (e.g. Bradford solution containing phosphoric acid) in chemical acid waste containers.`
  },
  {
    id: 'centrifugation',
    name: 'Centrifugation Mechanics',
    shortDesc: 'Density & speed separation of cellular fractions',
    query: 'Explain Centrifugation principles, RPM to RCF conversion, and rotor balancing rules.',
    structuredResponse: `## Overview
Centrifugation is a physical separation process that uses accelerated centrifugal forces to separate particles, organelles, cells, or macromolecules from a liquid suspension according to size, shape, density, and viscosity.

## Principle
Particles in a rotating fluid experience a Relative Centrifugal Force (RCF or $g$-force):
$$\text{RCF} = 1.118 \times 10^{-5} \times r \times (\text{RPM})^2$$
Where:
- $\text{RCF}$ = Relative Centrifugal Force (expressed as multiples of gravity, $\times g$)
- $r$ = Rotational radius from central spindle to tube bottom ($\text{mm}$)
- $\text{RPM}$ = Revolutions Per Minute

### Separation Types:
- **Differential Centrifugation**: Sequential separation based on sedimentation rate (pelleting nuclei at $1,000\times g$, mitochondria at $10,000\times g$, ribosomes at $100,000\times g$).
- **Density Gradient Centrifugation**: Separation through sucrose or CsCl gradients based on buoyant density (Isopycnic).

## Procedure
1. **Rotor Selection**: Choose Fixed-Angle Rotor (for rapid pelleting) or Swinging-Bucket Rotor (for density gradient separations).
2. **Symmetrical Balancing**:
   - Weigh sample tubes on a precision balance.
   - Balance every tube with an identical counterweight tube containing water to within $\pm 0.05\text{ g}$.
   - Place balanced tubes directly opposite each other across the rotor spindle ($180^\circ$ orientation).
3. **Operation**: Secure rotor lid tightly, set desired RCF ($g$), temperature ($4^\circ\text{C}$ for protein/RNA), and run time.
4. **Decantation**: Carefully aspirate supernatant without disturbing soft pellet.

## Applications
- **Cell Harvest & Washing**: Pelleting bacterial, yeast, or mammalian cells from culture broth.
- **Subcellular Fractionation**: Isolating chloroplasts, mitochondria, and nuclear chromatin.
- **Plasmid Purification**: Separating precipitated chromosomal DNA/protein complexes from soluble plasmid supernatant.

## Advantages
- **Rapid Phase Separation**: Pellets insoluble debris within minutes.
- **Temperature Controlled**: Refrigerated centrifuges ($4^\circ\text{C}$) prevent enzyme degradation during processing.
- **Versatile Volume Range**: Handles microfuge tubes ($0.2\text{ mL}$) up to industrial floor vessels ($1,000\text{ mL}$).

## Limitations
- **Rotor Imbalance Disasters**: Unbalanced high-speed runs cause severe mechanical failure and explosive rotor destruction.
- **Aerosol Hazard**: Tube leakage during high-speed spinning generates biohazardous aerosols.
- **Heat Generation**: Non-refrigerated centrifuges heat up during extended runs, denaturing proteins.

## Safety Tips
- **ALWAYS balance opposing tubes** to equal weight prior to starting centrifugation.
- Never open centrifuge lid until rotor has come to a COMPLETE stop.
- Inspect buckets and rotors regularly for corrosion or hairline fatigue cracks.`
  },
  {
    id: 'media-prep',
    name: 'Media Preparation & Autoclaving',
    shortDesc: 'Formulation & sterilization of growth media',
    query: 'Explain Microbiological Media Preparation, Agar casting, and Autoclave sterilization protocols.',
    structuredResponse: `## Overview
Media Preparation involves formulating liquid broth or solid agar nutrients required to support the growth, maintenance, and selective isolation of microorganisms or biological cell lines in culture.

## Principle
- **Nutrient Formulation**: Contains carbon sources (Glucose), nitrogen sources (Tryptone/Peptone), mineral salts ($\text{NaCl}$), yeast extract vitamins, and $1.5\%$ Agar-Agar for solid gel plates.
- **Autoclave Sterilization**: Wet steam under pressure ($121^\circ\text{C}$ at $15\text{ psi}$ for 15–20 min) coagulates proteins and destroys all vegetative bacteria, endospores, viruses, and fungi.

## Procedure
1. **Formulation (e.g. LB Agar)**: Weigh $10\text{ g}$ Tryptone, $5\text{ g}$ Yeast Extract, $10\text{ g}$ $\text{NaCl}$, and $15\text{ g}$ Agar powder. Dissolve in $900\text{ mL}$ ultrapure water, adjust $\text{pH}$ to $7.0$ with $1\text{ N } \text{NaOH}$, and top to $1.0\text{ L}$.
2. **Autoclaving**: Cover flask mouth with aluminum foil and autoclave tape. Autoclave at $121^\circ\text{C}$ ($15\text{ psi}$) for 20 min.
3. **Cooling & Antibiotic Addition**: Swirl liquid agar and cool in $50^\circ\text{C}$ water bath. Add heat-labile selective antibiotics (e.g. Ampicillin $100\ \mu\text{g/mL}$) only after agar drops below $55^\circ\text{C}$ to prevent thermal degradation.
4. **Plate Pouring**: In a clean laminar flow cabinet or near a Bunsen burner flame, pour $20\text{ mL}$ liquid agar into sterile Petri dishes. Flame plate surface to remove air bubbles, allow to solidify for 30 min.

## Applications
- **Bacterial Transformation**: Selective growth of recombinant $E.\ coli$ on antibiotic plates.
- **Microbial Isolation**: Selective and differential screening (e.g. MacConkey, Mannitol Salt Agar).
- **Industrial Fermentation**: Bulk media preparation for bioreactor production.

## Advantages
- **Total Sterility**: Autoclaving kills heat-resistant bacterial endospores (e.g. *Geobacillus stearothermophilus*).
- **Customizable Formulations**: Chemically defined media allow precise metabolic studies.
- **Long Storage Life**: Sterile poured agar plates last weeks when stored sealed at $4^\circ\text{C}$.

## Limitations
- **Heat-Labile Reagent Degradation**: Vitamins and antibiotics undergo thermal destruction if autoclaved.
- **Agar Caramelization**: Over-autoclaving hydrolyzes sugars, turning media dark brown and toxic to cells.
- **pH Shifts**: High-temperature autoclaving alters final solution pH.

## Safety Tips
- Wear heat-resistant thermal gloves and face protection when unloading hot liquid autoclaves.
- Never tighten bottle caps completely before autoclaving to prevent explosive pressure buildup.`
  },
  {
    id: 'biosafety',
    name: 'Biosafety & Decontamination',
    shortDesc: 'BSL levels, PPE & hazardous waste segregation',
    query: 'Explain Biosafety Levels (BSL 1–4), PPE guidelines, and biohazard waste decontamination.',
    structuredResponse: `## Overview
Biosafety encompasses containment principles, facility design, equipment, and personal practices required to protect laboratory personnel, the community, and the environment from exposure to biohazardous agents and infectious materials.

## Principle
Biosafety is categorized into four progressive **Biosafety Levels (BSL-1 to BSL-4)** based on organism infectivity, severity of disease, transmission route, and treatment availability:
- **BSL-1**: Well-characterized agents not known to cause disease in healthy humans (e.g. non-pathogenic $E.\ coli$ K12).
- **BSL-2**: Moderate individual risk agents causing human disease via ingestion/puncture (e.g. *Staphylococcus aureus*, Hepatitis B).
- **BSL-3**: Indigenous or exotic agents causing serious or potentially lethal disease via aerosol transmission (e.g. *Mycobacterium tuberculosis*, SARS-CoV-2).
- **BSL-4**: Dangerous high-consequence agents with no available treatment or vaccine (e.g. Ebola virus, Marburg virus).

## Procedure
1. **Pre-Lab PPE Verification**: Button fluid-resistant lab coat, don powder-free nitrile gloves, wear ANSI Z87.1 safety glasses, and confirm closed-toe non-canvas shoes.
2. **Biosafety Cabinet (BSC) Operation**:
   - Turn on BSC Class II blower 15 min prior to work.
   - Sanitize all internal walls and equipment with $70\%$ Ethanol.
   - Arrange clean items on left, active work zone in center, biohazard waste on right.
3. **Decontamination & Waste Disposal**:
   - **Solid Biohazard Waste**: Dispose of contaminated tips, tubes, and plates into red biohazard bags for autoclaving.
   - **Sharps Waste**: Place needles, razor blades, and broken glass directly into rigid puncture-proof sharps containers.
   - **Liquid Waste**: Treat cell supernatants with $10\%$ household bleach ($0.5\%$ sodium hypochlorite) for 30 minutes before drain disposal.

## Applications
- **Clinical Microbiology**: Safe processing of human patient blood and tissue diagnostic specimens.
- **Recombinant DNA Containment**: Preventing accidental environmental release of genetically altered organisms.
- **Infectious Disease Research**: Developing vaccines and antiviral therapeutics against dangerous pathogens.

## Advantages
- **Prevents Laboratory Acquired Infections (LAIs)**: Safeguards scientists from pathogen exposure.
- **Protects Environmental Ecosystems**: Ensures hazardous biological waste is rendered sterile before disposal.
- **Regulatory Compliance**: Meets OSHA, CDC, and WHO biosafety standards.

## Limitations
- **High Facility Infrastructure Cost**: BSL-3 and BSL-4 negative-pressure facilities require massive capital investment.
- **Ergonomic Fatigue**: Extended work in heavy PPE and biosafety suits reduces manual dexterity.
- **Human Factor Reliance**: Safety depends strictly on strict personnel adherence to SOPs.

## Safety Tips
- Wash hands thoroughly with soap and water immediately after removing gloves.
- Never eat, drink, apply cosmetics, or handle contact lenses inside the laboratory.
- Know the exact location and operation of emergency eyewash stations and safety showers.`
  },
  {
    id: 'troubleshooting',
    name: 'Laboratory Troubleshooting',
    shortDesc: 'Resolving PCR, gel, extraction & assay failures',
    query: 'Explain systematic Laboratory Troubleshooting strategies for PCR, Gels, and Extractions.',
    structuredResponse: `## Overview
Laboratory Troubleshooting is the systematic diagnostic process of identifying, isolating, and rectifying technical errors, unexpected experimental anomalies, assay failures, and bad data outputs during wet-lab procedures.

## Principle
Effective troubleshooting follows a root-cause elimination methodology:
1. **Differentiate Systemic vs Random Errors**: Is the positive control working?
2. **Isolate Reagents & Equipment**: Test single variables sequentially rather than changing multiple conditions simultaneously.
3. **Verify Reagent Integrity & Calibration**: Inspect expiration dates, pH values, thermal calibration, and enzyme storage history.

## Procedure
### 1. PCR Troubleshooting:
- **Problem**: No target band visible on gel.
  - *Fix*: Check positive control. Lower annealing temperature by $2–4^\circ\text{C}$; increase $\text{MgCl}_2$ concentration; re-quantify template DNA ($10–50\text{ ng}$ ideal).
- **Problem**: Faint off-target bands / Primer-Dimers.
  - *Fix*: Increase annealing temperature; reduce primer concentration to $0.2\ \mu\text{M}$; use Hot-Start Taq Polymerase.

### 2. Gel Electrophoresis Troubleshooting:
- **Problem**: Curved / "Smiling" gel bands.
  - *Fix*: Lower voltage ($<5\text{ V/cm}$ distance between electrodes); replace spent $1\times$ running buffer to restore ionic strength.
- **Problem**: Smeary DNA bands.
  - *Fix*: Reduce template DNA quantity; check for nuclease contamination; lower voltage.

### 3. DNA/RNA Extraction Troubleshooting:
- **Problem**: Low $A_{260}/A_{280}$ purity ratio ($<1.6$).
  - *Fix*: Protein contamination present. Perform additional Chloroform wash or repeat Proteinase K digestion.
- **Problem**: Low $A_{260}/A_{230}$ purity ratio ($<1.5$).
  - *Fix*: Guanidine or phenol salt contamination. Perform additional $70\%$ ethanol wash on silica spin column.

## Applications
- **Assay Optimization**: Refining experimental protocols for maximum yield and reproducibility.
- **Quality Assurance**: Eliminating false-positive and false-negative diagnostic test results.
- **Cost Reduction**: Preventing waste of expensive biological reagents and enzyme kits.

## Advantages
- **Saves Research Time & Money**: Rapidly pinpoints faulty components.
- **Enhances Experimental Rigor**: Ensures scientific publication quality and high data reproducibility.
- **Deepens Conceptual Understanding**: Improves scientist knowledge of reagent chemistry and instrument physics.

## Limitations
- **Time Consuming**: Testing variables individually requires multiple iterative experimental controls.
- **Complex Interacting Variables**: Multiple subtle errors (e.g. buffer pH + enzyme decay + bad primer) mask the true root cause.
- **Reagent Batch Variations**: Lot-to-lot manufacturer antibody or enzyme variations require re-standardization.

## Safety Tips
- Always run a known positive control and negative (no-template) control in every experiment to validate troubleshooting.
- Never attempt to use damaged electrical cables, cracked centrifuge rotors, or leaking chemical bottles during troubleshooting.`
  }
];

export function findMatchingPreset(query: string): TopicPreset | undefined {
  const q = query.toLowerCase();
  
  if (q.includes('pcr') || q.includes('polymerase chain') || q.includes('primer')) {
    return TOPIC_PRESETS.find((t) => t.id === 'pcr');
  }
  if (q.includes('extract') || q.includes('dna isolation') || q.includes('rna isolation') || q.includes('purif')) {
    return TOPIC_PRESETS.find((t) => t.id === 'dna-rna-extraction');
  }
  if (q.includes('gel') || q.includes('electrophoresis') || q.includes('sds-page') || q.includes('tae') || q.includes('tbe')) {
    return TOPIC_PRESETS.find((t) => t.id === 'gel-electrophoresis');
  }
  if (q.includes('elisa') || q.includes('immunosorbent') || q.includes('antibody test') || q.includes('tmb')) {
    return TOPIC_PRESETS.find((t) => t.id === 'elisa');
  }
  if (q.includes('cell culture') || q.includes('passaging') || q.includes('trypsin') || q.includes('fbs') || q.includes('dmem')) {
    return TOPIC_PRESETS.find((t) => t.id === 'cell-culture');
  }
  if (q.includes('microscop') || q.includes('brightfield') || q.includes('fluorescen') || q.includes('oil immersion') || q.includes('lens')) {
    return TOPIC_PRESETS.find((t) => t.id === 'microscopy');
  }
  if (q.includes('spectrophotometer') || q.includes('spectrophotometry') || q.includes('beer-lambert') || q.includes('absorbance') || q.includes('nanodrop') || q.includes('a260')) {
    return TOPIC_PRESETS.find((t) => t.id === 'spectrophotometry');
  }
  if (q.includes('centrifug') || q.includes('rcf') || q.includes('rpm') || q.includes('g-force') || q.includes('rotor')) {
    return TOPIC_PRESETS.find((t) => t.id === 'centrifugation');
  }
  if (q.includes('media') || q.includes('autoclave') || q.includes('agar') || q.includes('broth') || q.includes('steriliz')) {
    return TOPIC_PRESETS.find((t) => t.id === 'media-prep');
  }
  if (q.includes('biosafety') || q.includes('bsl') || q.includes('ppe') || q.includes('waste') || q.includes('hazard')) {
    return TOPIC_PRESETS.find((t) => t.id === 'biosafety');
  }
  if (q.includes('troubleshoot') || q.includes('faint band') || q.includes('no band') || q.includes('low yield') || q.includes('smear') || q.includes('smile')) {
    return TOPIC_PRESETS.find((t) => t.id === 'troubleshooting');
  }

  return undefined;
}
