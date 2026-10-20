export type NavItem = {
  id: string;
  label: string;
};

export type TechItem = {
  name: string;
  icon?: string;
};

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
};

export type ProjectTier = 'main' | 'secondary' | 'other';

export type Project = {
  title: string;
  tier: ProjectTier;
  image?: string;
  imagePosition?: string;
  summary: string;
  problem: string;
  built: string;
  live: string;
  reliability: string;
  stack: string[];
  ctaLabel: string;
  ctaUrl?: string;
  codeLabel?: string;
  codeUrl?: string;
  note?: string;
};

export const profile = {
  name: 'Ledvin Leiva',
  role: 'Software Engineer | Full Stack | Infrastructure-Aware',
  headline: 'Software engineered for production reliability and operational continuity.',
  subheadline:
    'Hands-on delivery across frontend, backend, deployment and incident response in real environments.',
  supporting:
    'FastAPI, React, PostgreSQL, Docker, Nginx and CI/CD workflows combined with observability for dependable systems.',
  location: 'Cartago, Costa Rica',
  availability: 'Open to remote and hybrid roles',
  email: 'ledvin25@hotmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/ledvin25/',
  githubUrl: 'https://github.com/Ledvin25',
  resumeUrl: '/Ledvin%20Leiva%20Mata%20CV.pdf',
};

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const aboutCopy = {
  title: 'How I work',
  description:
    'I focus on production outcomes: convert requirements into dependable systems, deploy with control, observe behavior, and resolve issues quickly. The target is long-term reliability, not demo-only delivery.',
  approach: [
    'Design and build with explicit production constraints.',
    'Ship through repeatable deployment and release workflows.',
    'Monitor runtime behavior with logs, metrics and alerts.',
    'Diagnose incidents fast and apply targeted remediations.',
    'Harden maintainability after each release cycle.',
  ],
};

export const technologies: TechItem[] = [
  { name: 'React', icon: '/tech/react.webp' },
  { name: 'FastAPI' },
  { name: 'Python', icon: '/tech/python.webp' },
  { name: 'PostgreSQL', icon: '/tech/postgresql.webp' },
  { name: 'Redis' },
  { name: 'Docker', icon: '/tech/docker.webp' },
  { name: 'Nginx' },
  { name: 'CI/CD' },
  { name: 'Cloudflare' },
];

export const education: EducationItem[] = [
  {
    degree: 'Computer Engineering',
    institution: 'Tecnologico de Costa Rica',
    period: '2023 - 2026',
  },
  {
    degree: 'Physics',
    institution: 'Universidad de Costa Rica',
    period: '2024 - 2027',
  },
  {
    degree: 'Mathematics',
    institution: 'Universidad de Costa Rica',
    period: '2023 - 2026',
  },
];

export const projects: Project[] = [
  {
    title: 'VEL Space',
    tier: 'main',
    image: '/projects/vel.webp',
    summary: 'Public website + private admin platform for recruitment and HR workflows.',
    problem:
      'Needed a functional operating platform for candidate flow, evaluations, scheduling and state tracking.',
    built:
      'Implemented FastAPI + React + PostgreSQL architecture with modular HR components, scheduled-meeting flow, candidate evaluations, notifications and Microsoft-tenant-restricted admin OAuth.',
    live:
      'Public website is live at velspacecr.com; admin platform runs in private access and is shown only by request for demo.',
    reliability:
      'Core workflows remained operational in real usage with controlled deployments and practical incident handling.',
    stack: ['FastAPI', 'React', 'PostgreSQL', 'Nginx', 'Cloudflare', 'OAuth', 'CI/CD'],
    ctaLabel: 'View project',
    ctaUrl: 'https://velspacecr.com',
    note: 'Public site is accessible. Admin workflows are private and can be demonstrated safely on request.',
  },
  {
    title: 'AtreusFit',
    tier: 'main',
    image: '/projects/atreusfit.webp',
    summary: 'Custom e-commerce platform built from zero with admin operations layer.',
    problem:
      'Needed complete commerce operations beyond template e-commerce: checkout, tracking, loyalty and internal admin control.',
    built:
      'Developed customer flows (cart, checkout, payments, accounts, addresses, profile, tracking, loyalty) plus admin modules for orders, products, customers, promotions, BOM inventory and adapted finance.',
    live:
      'Public website is live at atreusfit.com; admin panel is private and shared only by request for demo.',
    reliability:
      'Transaction and admin paths were designed for continuity and iterative hardening under operational constraints.',
    stack: ['FastAPI', 'React', 'PostgreSQL', 'Redis'],
    ctaLabel: 'View website',
    ctaUrl: 'https://atreusfit.com',
    note: 'Public site is accessible. Admin modules are private and available only by request for demo.',
  },
  {
    title: 'PDF Chatbot',
    tier: 'main',
    image: '/projects/chat_bot.webp',
    summary: 'PDF question-answering system constrained by source documentation.',
    problem:
      'Needed dependable document-grounded responses with tighter control of hallucination risk.',
    built:
      'Built Python + React solution using OpenAI API with custom chunking and query handling without LangChain.',
    live:
      'Live demo supports PDF-based retrieval and answer generation tied to document context.',
    reliability:
      'Custom retrieval pipeline improved answer grounding and made behavior easier to reason about and debug.',
    stack: ['Python', 'React', 'OpenAI API'],
    ctaLabel: 'View demo',
    ctaUrl: 'https://pdf-reader-weld.vercel.app/',
    codeLabel: 'View code',
    codeUrl: 'https://github.com/Ledvin25/PDF-Reader',
  },
  {
    title: 'Odoo Module Updater',
    tier: 'main',
    summary: 'Operational tool for module update and mapping workflows in Odoo servers.',
    problem:
      'Module upgrades across servers created friction and deployment dependency between teams.',
    built:
      'Implemented customized update and module-mapping routines to reduce repetitive operations and improve control of changes.',
    live:
      'Used as internal tooling to support safer and faster module update cycles.',
    reliability:
      'Reduced operational uncertainty and improved response speed during update-related incidents.',
    stack: ['Python', 'Odoo', 'Server automation'],
    ctaLabel: 'Request safe summary',
    ctaUrl: 'mailto:ledvin25@hotmail.com?subject=Odoo%20Module%20Updater%20Summary',
    note: 'Sensitive internal details are intentionally omitted.',
  },
  {
    title: 'KerbalGalaxy 3',
    tier: 'other',
    image: '/projects/kerbalgalaxy3.webp',
    summary:
      "Rebuilt KerbalGalaxy 3's planetary systems from the ground up, bringing an expanded galaxy with additional star systems, planets, black holes, and wormholes to Kerbal Space Program.",
    problem:
      'Reconstruct and modernize the galactic exploration experience while ensuring compatibility between planetary systems and visual dependencies.',
    built:
      'Recreated planetary configurations and celestial environments from scratch, reworked and developed textures, and implemented black hole, wormhole, and visual effects compatibility through integrations with Kopernicus and other KSP mod dependencies.',
    live: 'Published on CurseForge and SpaceDock, with the original project and third-party dependencies credited.',
    reliability: '35,700+ CurseForge downloads.',
    stack: ['KSP Modding', 'Kopernicus', 'Planetary Systems', 'Visual Effects', '3D Assets'],
    ctaLabel: 'View Mod',
    ctaUrl: 'https://www.curseforge.com/kerbal/ksp-mods/kerbalgalaxy3',
    codeLabel: 'GitHub',
    codeUrl: 'https://github.com/Ledvin25/Kerbal-Galaxy-3',
  },
  {
    title: 'Real Solar System REMASTERED',
    tier: 'other',
    image: '/projects/rss-remastered.webp',
    summary:
      'Technical rework of Real Solar System for Kerbal Space Program, adapting the original planetary configurations to a newer version of Kopernicus.',
    problem:
      'Restore compatibility of the original Real Solar System with updated planetary modding frameworks and dependencies.',
    built:
      'Extensively reworked the original RSS configuration files to support the newer Kopernicus version, adapting planetary definitions, integrating dependencies, and preparing a compatible public release.',
    live: 'Published on CurseForge, preserving attribution to the original Real Solar System project.',
    reliability: '78,000+ CurseForge downloads.',
    stack: ['KSP Modding', 'Kopernicus', 'Planetary Configuration', 'Dependency Integration'],
    ctaLabel: 'View Mod',
    ctaUrl: 'https://www.curseforge.com/kerbal/ksp-mods/real-solar-system-remastered',
  },
  {
    title: 'Force Feedback Enhanced for My Summer Car',
    tier: 'other',
    image: '/projects/ffbe.webp',
    summary: 'Published force-feedback mod improving steering resistance and driving feedback for Logitech wheels.',
    problem: 'My Summer Car lacks sufficiently detailed force-feedback behavior for supported steering wheels.',
    built:
      'Implemented model-based steering forces, road and engine feedback, braking resistance and configurable presets.',
    live: 'Published on Nexus Mods.',
    reliability: 'Public release with community feedback and iterative compatibility improvements.',
    stack: ['Game Modding', 'Force Feedback', 'Logitech SDK', 'Simulation'],
    ctaLabel: 'View Mod',
    ctaUrl: 'https://www.nexusmods.com/mysummercar/mods/10632',
  },
  {
    title: 'CerviCARE AI VR',
    tier: 'other',
    image: '/projects/cervicare.webp',
    imagePosition: 'center 20%',
    summary: 'Educational VR experience built in Unreal Engine 5.7.4 for Meta Quest.',
    problem: 'Create an interactive training experience for a simulated cervical imaging procedure.',
    built:
      'Built two VR scenes with Blueprint-driven progression, object manipulation, controller interactions, 3D widgets and guided instructions.',
    live: 'Functional prototype prepared for a university VR exhibition.',
    reliability: 'Standalone Quest deployment, VR interaction testing and technical documentation.',
    stack: ['Unreal Engine', 'Blueprints', 'OpenXR', 'Meta XR', 'UMG'],
    ctaLabel: 'Watch Animatic',
    ctaUrl: 'https://youtu.be/Oo3u5c4bSjs',
  },
  {
    title: 'SemiReal Flight Computer',
    tier: 'other',
    image: '/projects/srfc.webp',
    imagePosition: 'center 25%',
    summary: 'In-development KSP mod introducing realistic spacecraft avionics and flight-computer simulation.',
    problem: 'KSP exposes information and control capabilities that bypass realistic spacecraft avionics.',
    built: 'Created a C# plugin architecture with simulated sensors and modular avionics foundations.',
    live: 'In development.',
    reliability: 'Incremental implementation and testing.',
    stack: ['C#', 'KSP', 'Simulation', 'Avionics'],
    ctaLabel: 'View Preview',
  },
  {
    title: 'Motor Control Center',
    tier: 'other',
    image: '/projects/controlcentre.webp',
    summary: 'Industrial VR maintenance prototype developed using Unreal Engine.',
    problem: 'Create an interactive simulation of electrical module installation and power restoration.',
    built: 'Implemented object manipulation, module placement, VR navigation and audiovisual feedback.',
    live: 'Functional prototype.',
    reliability: 'Interactive mechanics implemented and tested during development.',
    stack: ['Unreal Engine', 'Blueprints', 'VR', 'Blender'],
    ctaLabel: 'View Preview',
  },
  {
    title: 'Poramoralarte',
    tier: 'secondary',
    image: '/projects/poramoralarte.webp',
    summary: 'Website for an art center to present programs and improve public reach.',
    problem:
      'The organization needed clearer digital communication to attract more participants and support inclusive programs.',
    built:
      'Created a structured site to present programs and support potential sponsorship and donation flows.',
    live: 'Public-facing information channel is active and supports outreach goals.',
    reliability:
      'Established stable content delivery and easier maintenance for non-technical stakeholders.',
    stack: ['React', 'Content architecture'],
    ctaLabel: 'Request summary',
    ctaUrl: 'mailto:ledvin25@hotmail.com?subject=Poramoralarte%20Summary',
  },
  {
    title: 'Avant Glamping',
    tier: 'secondary',
    image: '/projects/avant.webp',
    summary: 'Commercial website for pods and jacuzzis with evolving 3D builder direction.',
    problem:
      'Needed a clearer digital presence to present product options, reviews and trust signals.',
    built:
      'Developed site experience to support offer communication and laid groundwork for 3D customization flow.',
    live: 'Website is public and supports brand communication and lead capture.',
    reliability:
      'Maintained stable presentation flows while enabling iterative expansion.',
    stack: ['React', 'Python', 'Flask'],
    ctaLabel: 'View website',
    ctaUrl: 'https://avantglamping.com',
  },
];
