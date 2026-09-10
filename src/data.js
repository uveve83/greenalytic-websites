// ── SLIDES ────────────────────────────────────────────────
export const SLIDES = [
  {
    bg: '/img/one.jpg',
    badge: "Rwanda's leading clean mobility company",
    lines: ['Sustainable mobility.', 'Smart technology.'],
    accentLine: 1,
    sub: 'Electric cargo tricycles for goods transportation and Mobika for intelligent vehicle and fleet management — built for Africa.',
    cta1: { label: 'Our products', to: '/products' },
    cta2: { label: 'Contact us', to: '/contact', icon: 'fa-envelope' },
  },
  {
    bg: '/img/two.jpg',
    badge: 'Electric Cargo Tricycles',
    lines: ['Move goods smarter.', 'Zero emissions.'],
    accentLine: 1,
    sub: 'Standard, Refrigerated, and Milk Collection tricycles — purpose-built for agribusiness and commercial goods transportation.',
    cta1: { label: 'See tricycles', to: '/products' },
    cta2: { label: 'Request a quote', to: '/contact', icon: 'fa-tag' },
  },
  {
    bg: '/img/three.jpg',
    badge: 'Mobika — Mobility Management Platform',
    lines: ['Move Smarter.', 'Stay Compliant.'],
    accentLine: 1,
    sub: 'GPS tracking, compliance management, payment monitoring, and fleet intelligence — all from one platform.',
    cta1: { label: 'Discover Mobika', to: '/mobika' },
    cta2: { label: 'Request a demo', to: '/contact', icon: 'fa-chart-line' },
  },
  {
    bg: '/img/four.jpg',
    badge: 'Locally engineered since 2022',
    lines: ['Rwandan innovation.', 'Continental impact.'],
    accentLine: 0,
    sub: 'Built and maintained by local engineers, designed for African roads, helping operators move, manage and grow.',
    cta1: { label: 'Our story', to: '/about' },
    cta2: { label: 'Partner with us', to: '/contact', icon: 'fa-handshake' },
  },
];

// ── NAV ───────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home',         to: '/' },
  { label: 'About us',     to: '/about' },
  { label: 'Services',     to: '/services' },
  { label: 'Projects',     to: '/projects' },
  { label: 'Products',     to: '/products' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Mobika',       to: '/mobika', highlight: true },
  { label: 'Contact',      to: '/contact' },
];

// ── STATS ─────────────────────────────────────────────────
export const STATS = [
  { value: '3',    label: 'Tricycle models available' },
  { value: '15+',  label: 'Strategic partners' },
  { value: '24/7', label: 'Fleet monitoring' },
  { value: '4+',   label: 'Years in operation' },
];

// ── SERVICES ──────────────────────────────────────────────
export const SERVICES = [
  {
    icon: 'fa-truck',
    title: 'Standard Electric Cargo Tricycle',
    desc: 'Practical electric mobility for agricultural produce, commercial goods, and last-mile logistics. Purchase at 5,500,000 RWF.',
  },
  {
    icon: 'fa-snowflake',
    title: 'Refrigerated Electric Tricycle',
    desc: 'Temperature-controlled transport for perishables, fresh produce and cold-chain delivery. Purchase at 8,500,000 RWF.',
  },
  {
    icon: 'fa-droplet',
    title: 'Milk Collection Tricycle',
    desc: 'Purpose-built for dairy value chains — farm-to-collection-centre milk transportation. Purchase at 9,500,000 RWF.',
  },
  {
    icon: 'fa-rotate',
    title: 'Monthly Tricycle Rental',
    desc: 'Flexible access to electric cargo transportation without full upfront commitment. From 350,000 RWF per month.',
  },
  {
    icon: 'fa-location-dot',
    title: 'Mobika GPS Tracking',
    desc: 'Real-time GPS tracking, geofencing, trip history, speed monitoring and unauthorized-use alerts for your vehicles.',
  },
  {
    icon: 'fa-shield-halved',
    title: 'Mobika Compliance & Fleet',
    desc: 'Track insurance, permits, fines, payments and operator performance — all from the Mobika platform dashboard.',
  },
];

// ── DASHBOARD FEATURES ────────────────────────────────────
export const DASH_FEATURES = [
  'GPS live tracking', 'Compliance alerts', 'Payment monitoring', 'Geofencing',
  'Trip history', 'Speed monitoring', 'Fleet analytics', 'Role-based access',
];

// ── PARTNERS ──────────────────────────────────────────────
export const PARTNERS = [
  { name: '250 Startups',  logo: '/images/250STARTUP logo.jpg' },
  { name: 'IPR Karongi',   logo: '/images/IPR Karonig logo.jpg' },
  { name: 'NCST Rwanda',   logo: '/images/NCST.jpg' },
  { name: 'IOM Rwanda',    logo: '/images/IOM Rwanda.jpg' },
  { name: 'REMA',          logo: '/images/REMA.png' },
  { name: 'ICT Chamber',   logo: '/images/ICT.jpg' },
  { name: 'ESP',           logo: '/images/ESP.png' },
  { name: 'BENO',          logo: '/images/BENO.png' },
];

// ── TESTIMONIALS ──────────────────────────────────────────
export const TESTIMONIALS = [
  {
    initials: 'TM',
    name: 'Transport Manager',
    company: 'Kigali Logistics Company',
    text: "Greenalytic's electric tricycles and Mobika platform helped us transform our operations. We now monitor every vehicle in real-time and our compliance rate has never been higher.",
  },
  {
    initials: 'AC',
    name: 'Agricultural Cooperative',
    company: 'Southern Province, Rwanda',
    text: 'The refrigerated tricycle changed everything for our produce delivery. We reduced spoilage dramatically and the Mobika app keeps us on top of maintenance and compliance.',
  },
  {
    initials: 'EO',
    name: 'Fleet Manager',
    company: 'Transport Company, Kigali',
    text: 'Mobika gives us visibility we never had before — GPS tracking, payment monitoring, compliance alerts all in one place. It genuinely saves us time and money every week.',
  },
];

// ── ABOUT CHECKLIST ───────────────────────────────────────
export const ABOUT_CHECKS = [
  'Electric cargo tricycles for agribusiness and commercial logistics',
  'Mobika — intelligent mobility management and compliance platform',
  'GPS tracking, compliance, payments and fleet intelligence',
  'Built and maintained by Rwandan engineers since 2022',
];
