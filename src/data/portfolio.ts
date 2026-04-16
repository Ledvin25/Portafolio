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

export type ProjectTier = 'main' | 'secondary' | 'experimental';

export type Project = {
  title: string;
  tier: ProjectTier;
  image?: string;
  summary: string;
  problem: string;
  built: string;
  live: string;
  reliability: string;
  stack: string[];
  ctaLabel: string;
  ctaUrl: string;
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
  {
    title: 'Force Feedback Mod for My Summer Car',
    tier: 'experimental',
    summary: 'Experimental project focused on force-feedback behavior integration and tuning.',
    problem: 'Needed to map hardware-response behavior into a simulation context with unstable edge cases.',
    built: 'Implemented iterative behavior tuning and debugging loops for force-feedback response quality.',
    live: 'Experimental scope used as a technical sandbox.',
    reliability:
      'Demonstrates structured debugging discipline and practical handling of unstable behavior conditions.',
    stack: ['Integration', 'Debugging', 'Iteration'],
    ctaLabel: 'Request summary',
    ctaUrl: 'mailto:ledvin25@hotmail.com?subject=Force%20Feedback%20Mod%20Summary',
  },
];
