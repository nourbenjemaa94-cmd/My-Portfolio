import type {
  AboutPill,
  EducationEntry,
  Experience,
  Project,
  Skill,
  SocialLink,
  TechCard,
} from '@/types/portfolio';

export const NAV_ITEMS = ['about', 'stack', 'projects', 'experience', 'contact'] as const;

export const ROLES = ['IT Student_', 'Full-Stack Dev_', 'Problem Solver_', 'Open Source Nerd_'];

export const PROJECTS: Project[] = [
  {
    id: 'flowershop',
    title: 'FlowerShop — Flutter E-Commerce',
    description:
      'A cross-platform mobile e-commerce app developed during my internship at La Poste Tunisienne. Customers can browse, search, and purchase flowers with a smooth, responsive UI. Built with Flutter & Dart for Android, iOS, Web, and Windows, with Firebase Authentication, Cloud Firestore for real-time product management, and Firebase Storage for media. Key highlights: clean architecture, role-based access, real-time inventory updates, and a full cart and checkout flow.',
    tags: ['Flutter', 'Dart', 'Firebase Auth', 'Firestore', 'Firebase Storage'],
    links: [
      {
        label: 'View on GitHub →',
        url: 'https://github.com/nourbenjemaa94-cmd/Internship-Project',
        icon: 'source',
      },
    ],
    featured: true,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-webdirect',
    hash: 'f7e8d9c',
    date: 'Mar 2026 → present',
    role: 'Developer',
    company: 'WebDirect.nl',
    bullets: [
      'Designed and shipped production-ready client websites, owning the full lifecycle from design to deployment',
      'Built pixel-perfect Next.js 14 apps with TypeScript and Tailwind CSS from Figma',
      'Integrated a branded Sanity Studio so non-technical clients can edit text and images in real time',
      'Set up GitHub → Vercel CI/CD, plus ISR, draft mode, webhook cache revalidation, and a Studio change-history log',
    ],
    tags: ['next.js', 'typescript', 'tailwind', 'sanity', 'vercel'],
  },
  {
    id: 'exp1',
    hash: 'a1b2c3d',
    date: 'Jan 2026',
    role: 'Mobile Developer Intern',
    company: 'La Poste Tunisienne',
    bullets: [
      'Built FlowerShop, a cross-platform e-commerce app in Flutter & Dart for Android, iOS, Web, and Windows',
      'Integrated Firebase Authentication, Cloud Firestore for real-time product management, and Firebase Storage for media',
      'Shipped clean architecture, role-based access, real-time inventory updates, and a full cart and checkout flow',
    ],
    tags: ['flutter', 'dart', 'firebase'],
  },
];

export const EDUCATION: EducationEntry[] = [
  {
    school: 'ISET Rades',
    schoolFull: 'Higher Institute of Technological Studies of Rades',
    degree: "Bachelor's Degree in IT — Software Development",
    dates: '2025 → 2028',
    tags: ['Software Development', 'IT', 'Programming'],
    tagVariant: 'blue',
    tapeColor: 'blue',
    tapeClassName: 'h-4 w-14 rotate-[-5deg] rounded-sm',
  },
  {
    school: 'High School, Ben Arous',
    degree: 'Baccalauréat in Mathematics',
    dates: '2025',
    tags: ['Mathematics', 'Sciences'],
    tagVariant: 'mauve',
    tapeColor: 'mauve',
    tapeClassName: 'h-4 w-12 rotate-[6deg] rounded-sm',
  },
];

export const SKILLS: Skill[] = [
  { name: 'JavaScript', level: 90 },
  { name: 'Python', level: 80 },
  { name: 'React / Next.js', level: 70 },
  { name: 'Flutter / Dart', level: 65 },
  { name: 'PostgreSQL', level: 60 },
];

export const TECH_CARDS: TechCard[] = [
  { name: 'HTML', emoji: '📄', category: 'Languages' },
  { name: 'CSS', emoji: '🎨', category: 'Languages' },
  { name: 'Java', emoji: '☕', category: 'Languages' },
  { name: 'JavaScript', emoji: '⚡', category: 'Languages' },
  { name: 'TypeScript', emoji: '📘', category: 'Languages' },
  { name: 'Dart', emoji: '🎯', category: 'Languages' },
  { name: 'Python', emoji: '🐍', category: 'Languages' },
  { name: 'C / C++', emoji: '⚙️', category: 'Languages' },
  { name: 'Tailwind CSS', emoji: '🌬️', category: 'Languages' },
  { name: 'React', emoji: '⚛', category: 'Frameworks' },
  { name: 'Next.js', emoji: '▲', category: 'Frameworks' },
  { name: 'Flutter', emoji: '🦋', category: 'Frameworks' },
  { name: 'PostgreSQL', emoji: '🐘', category: 'Databases' },
  { name: 'Git / GitHub', emoji: '🌿', category: 'Tools' },
  { name: 'Sanity CMS', emoji: '📝', category: 'Tools' },
  { name: 'MATLAB', emoji: '📊', category: 'Tools' },
];

export const TECH_FILTERS = ['All', 'Languages', 'Frameworks', 'Databases', 'Tools'] as const;

export const ABOUT_PILLS: AboutPill[] = [
  { label: 'problem-solver', variant: 'mauve' },
  { label: 'full-stack', variant: 'blue' },
  { label: 'AI/ML curious', variant: 'mauve' },
  { label: 'IEEE volunteer', variant: 'blue' },
  { label: 'hackathons', variant: 'mauve' },
  { label: 'learn by shipping', variant: 'blue' },
];

export const HERO_STATS = [{ label: '★ 24 repos' }, { label: '⑂ 312 contributions' }, { label: '📌 FlowerShop' }];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'github', url: 'github.com/nourbenjemaa94-cmd', icon: 'github' },
  {
    label: 'linkedin',
    url: 'linkedin.com/in/nour-ben-jemaa',
    href: 'https://www.linkedin.com/in/nour-ben-jemaa-4692442b4/?skipRedirect=true',
    icon: 'linkedin',
  },
  { label: 'email', url: 'nourbenjemaa94@gmail.com', icon: 'email' },
];

export const SOCIAL_HREFS = {
  github: 'https://github.com/nourbenjemaa94-cmd',
  linkedin: 'https://www.linkedin.com/in/nour-ben-jemaa-4692442b4/?skipRedirect=true',
  email: 'mailto:nourbenjemaa94@gmail.com',
} as const;

export const PAPER_BG =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='nf'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23nf)' opacity='0.03'/%3E%3C/svg%3E\")";

export const SECTION_CLASS = 'max-w-6xl mx-auto px-6 md:px-10 py-20 border-t border-[#D7DAE6]/60';
