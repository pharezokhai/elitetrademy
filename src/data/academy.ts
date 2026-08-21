import electricalAsset from "@/assets/electrical.png.asset.json";
import plumbingAsset from "@/assets/plumbing.png.asset.json";
import hvacAsset from "@/assets/hvac.png.asset.json";

export const CONTACT = {
  email: "contact@elitetrademy.com",
  phone: "+2348035534999",
  phoneDisplay: "+234 803 553 4999",
  whatsapp: "https://wa.me/2348035534999",
  handle: "@elitetrademy",
  domain: "elitetrademy.com",
  socials: [
    { name: "Facebook", href: "https://facebook.com/elitetrademy", short: "FB" },
    { name: "LinkedIn", href: "https://linkedin.com/company/elitetrademy", short: "IN" },
    { name: "Instagram", href: "https://instagram.com/elitetrademy", short: "IG" },
    { name: "TikTok", href: "https://tiktok.com/@elitetrademy", short: "TK" },
  ],
} as const;

export type Trade = {
  slug: "electrical" | "plumbing" | "hvac";
  code: string;
  index: string;
  name: string;
  tagline: string;
  duration: string;
  hours: string;
  image: string;
  imageAlt: string;
  theory: string[];
  practical: string[];
  tools: string[];
  outcomes: string[];
  careers: string[];
  earning: string;
  modules: { module: string; theory: number; practical: number; skills: string }[];
};

export const TRADES: Trade[] = [
  {
    slug: "electrical",
    code: "ELC-204",
    index: "01_Electrical",
    name: "Electrical Technician",
    tagline:
      "Residential and commercial wiring, solar PV integration, smart home systems and industrial motor controls.",
    duration: "12 Weeks",
    hours: "360 Hours",
    image: electricalAsset.url,
    imageAlt: "Electrical technician terminating cables inside an industrial control panel",
    theory: [
      "Circuit analysis and Ohm's Law",
      "NEC / IEC standards",
      "Renewable energy integration",
      "Blueprint reading",
      "Smart home wiring",
      "Workshop safety",
    ],
    practical: [
      "Residential and commercial wiring",
      "Panel upgrades and lighting installation",
      "Motor controls, AC/DC circuits",
      "Generator transfer switches",
      "Troubleshooting and load calculation",
    ],
    tools: ["Multimeter", "Clamp meter", "Voltage tester", "Wire strippers", "Conduit bender"],
    modules: [
      { module: "Safety & Tools", theory: 10, practical: 10, skills: "Lockout/tagout, PPE, multimeter usage" },
      { module: "Basic Electricity", theory: 20, practical: 20, skills: "Ohm's law, series/parallel, AC/DC" },
      { module: "Wiring & Cabling", theory: 15, practical: 35, skills: "Conduit bending, cable tray, termination" },
      { module: "Lighting & Power Circuits", theory: 10, practical: 30, skills: "Switch types, socket wiring, load distribution" },
      { module: "Distribution Boards", theory: 10, practical: 30, skills: "MCB, RCD, earthing, busbar" },
      { module: "Motors & Starters", theory: 10, practical: 20, skills: "DOL, star-delta, fault finding" },
      { module: "Solar PV & Inverter", theory: 10, practical: 20, skills: "Panel sizing, battery connection, charge controller" },
      { module: "Smart Home Systems", theory: 5, practical: 15, skills: "Basic automation, IoT sensors" },
      { module: "Final Project", theory: 0, practical: 40, skills: "Full 3-bedroom flat wiring + solar backup" },
    ],
  },
  {
    slug: "plumbing",
    code: "PLM-302",
    index: "02_Plumbing",
    name: "Plumbing Technician",
    tagline:
      "Fluid dynamics, code-compliant water supply and drainage, solar water heating and thermal leak detection.",
    duration: "12 Weeks",
    hours: "360 Hours",
    image: plumbingAsset.url,
    imageAlt: "Plumbing technician fitting a sink trap with tools laid out on the floor",
    theory: [
      "Fluid dynamics",
      "National plumbing codes",
      "Water supply systems and drainage",
      "Sanitation principles",
      "Solar water heaters",
      "Blueprint reading and safety",
    ],
    practical: [
      "Pipe assembly (PEX, copper, PVC)",
      "Valve and fixture installation",
      "Leak detection with thermal imaging",
      "Hot water systems and maintenance",
      "Backflow prevention",
    ],
    tools: ["Pipe wrenches", "Auger", "Camera inspection system", "Soldering torch"],
    modules: [
      { module: "Plumbing Math & Codes", theory: 10, practical: 10, skills: "Pipe sizing, slope calculations, NPC" },
      { module: "Pipe Joining", theory: 15, practical: 35, skills: "PEX crimp, PVC solvent, copper solder" },
      { module: "Fixture Installation", theory: 10, practical: 30, skills: "WC, sink, shower, water heater" },
      { module: "Drainage & Venting", theory: 15, practical: 25, skills: "Trap seal, vent stack, DWV layout" },
      { module: "Water Supply & Pump", theory: 10, practical: 20, skills: "Booster pump, tank level control" },
      { module: "Leak Detection", theory: 5, practical: 15, skills: "Thermal imaging, acoustic sensors, dye testing" },
      { module: "Solar Water Heating", theory: 5, practical: 15, skills: "Collector connection, thermosiphon system" },
      { module: "Blueprint Reading", theory: 5, practical: 15, skills: "Isometric drawings, as-built takeoff" },
      { module: "Final Project", theory: 0, practical: 40, skills: "Rough-in and finish for a 2-bedroom bungalow" },
    ],
  },
  {
    slug: "hvac",
    code: "HVC-407",
    index: "03_HVAC",
    name: "HVAC / AC Technician",
    tagline:
      "Refrigeration cycle mastery, VRF/VRV networks, refrigerant handling and split and package unit commissioning.",
    duration: "14 Weeks",
    hours: "420 Hours",
    image: hvacAsset.url,
    imageAlt: "AC technician servicing rooftop condenser units at sunrise",
    theory: [
      "Thermodynamics and the refrigeration cycle",
      "Environmental regulations",
      "Load calculation",
      "Air distribution",
      "Indoor air quality",
      "Gas handling safety",
    ],
    practical: [
      "Refrigerant recovery and charging",
      "Compressor replacement and brazing",
      "Duct fabrication and airflow measurement",
      "VRF/VRV commissioning",
      "Split and package unit installation",
    ],
    tools: ["Gauge manifold", "Vacuum pump", "Leak detector", "Recovery machine"],
    modules: [
      { module: "Refrigeration Cycle", theory: 20, practical: 20, skills: "Pressure-enthalpy, superheat, subcooling" },
      { module: "Refrigerant Handling", theory: 10, practical: 20, skills: "R-32 / R-410A recovery, vacuum" },
      { module: "Electrical for HVAC", theory: 15, practical: 25, skills: "Start relay, capacitor, thermostat wiring" },
      { module: "Installation — Split Units", theory: 10, practical: 30, skills: "Flaring, brazing, evacuation, charging" },
      { module: "Package Units", theory: 10, practical: 20, skills: "Duct connection, airflow measurement" },
      { module: "VRF / VRV Systems", theory: 10, practical: 20, skills: "Branch controller, piping network, addressing" },
      { module: "Troubleshooting", theory: 10, practical: 30, skills: "Manifold gauges, clamp meters, leak detectors" },
      { module: "Air Distribution", theory: 5, practical: 15, skills: "Duct sizing, diffusers, filters" },
      { module: "Final Project", theory: 0, practical: 40, skills: "Commission a 3-ton split system + fault fix" },
    ],
  },
];

export const PHASES = [
  { phase: "Recruitment", activity: "Digital ads, community outreach and aptitude test", duration: "2 weeks" },
  { phase: "Bootcamp", activity: "Safety, mindset, tool orientation, platform training", duration: "1 week" },
  { phase: "Core Modules", activity: "Rotating practical stations, daily theory, weekly tests", duration: "9 weeks" },
  { phase: "Specialisation", activity: "Advanced track plus externally graded final project", duration: "2 weeks" },
  { phase: "Internship", activity: "Supervised live job tickets with partner technicians", duration: "2 weeks" },
  { phase: "Certification", activity: "NVC issuance, pro badge and dispatch onboarding", duration: "1 day" },
];

export const FAQS = [
  {
    q: "What is the NBTE VEI accreditation?",
    a: "Vocational Enterprise Institution status under Nigeria's National Board for Technical Education allows us to issue National Vocational Certificates (NVC) that employers and government agencies recognise nationwide.",
  },
  {
    q: "How long does a programme take?",
    a: "Electrical and Plumbing run 12 weeks (360 hours). HVAC / AC runs 14 weeks (420 hours) because of the additional gas-handling certification.",
  },
  {
    q: "How much of the training is hands-on?",
    a: "80% practical, 20% digital theory. Every trainee works on individual mock walls, plumbing rigs and live HVAC training units with real materials — not simulators alone.",
  },
  {
    q: "Do I need prior experience or qualifications?",
    a: "No trade experience is required. Admission is by aptitude test covering basic mathematics and English, plus a short interview on commitment and safety attitude.",
  },
  {
    q: "Is financial aid available?",
    a: "Tuition is subsidised at ₦50,000 payable in installments, and needs-based trainee stipends are available through our ITF and government partnership channels.",
  },
  {
    q: "Are tools and PPE provided?",
    a: "Yes. Every trainee is issued PPE on day one and works with professional-grade trade tools throughout the programme, including multimeters, pipe wrenches and gauge manifolds.",
  },
  {
    q: "What happens after graduation?",
    a: "Graduates complete a two-week supervised internship on live job tickets, then get onboarded to our partner dispatch platform as certified pro partners. Our target placement rate is 90%.",
  },
  {
    q: "Where are your centers?",
    a: "A central workshop hub in Lagos, with satellite hubs in Abuja and Port Harcourt. Each site runs three-phase power with solar backup, borehole water and full fume extraction.",
  },
];

export const STATS = [
  { label: "Duration", value: "12–14 Weeks" },
  { label: "Centers", value: "LOS / ABV / PHC" },
  { label: "Ratio", value: "80% Practical" },
  { label: "Certification", value: "NVC Level 3" },
];
