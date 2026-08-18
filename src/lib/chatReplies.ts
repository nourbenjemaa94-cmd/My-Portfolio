import {
  EDUCATION,
  EXPERIENCES,
  PROJECTS,
  SOCIAL_HREFS,
  TECH_CARDS,
} from '@/data/portfolio';

function namesIn(category: (typeof TECH_CARDS)[number]['category']) {
  return TECH_CARDS.filter(c => c.category === category)
    .map(c => c.name)
    .join(', ');
}

const featured = PROJECTS[0];
const webdirect = EXPERIENCES.find(e => e.company === 'WebDirect.nl');
const internship = EXPERIENCES.find(e => e.company === 'La Poste Tunisienne');
const degree = EDUCATION[0];
const bac = EDUCATION[1];

export function getReply(input: string): string {
  const q = input.toLowerCase();

  if (q.includes('stack') || q.includes('tech') || q.includes('language') || q.includes('framework')) {
    return `Languages: ${namesIn('Languages')}. Frameworks: ${namesIn('Frameworks')}. Databases: ${namesIn('Databases')}. Tools: ${namesIn('Tools')}. Day to day I ship a lot with TypeScript, Next.js, Tailwind, and Sanity.`;
  }

  if (q.includes('webdirect') || q.includes('web direct')) {
    return `I'm a Developer at WebDirect.nl (${webdirect?.date}). I design and ship production client websites — Next.js 14, TypeScript, Tailwind, Sanity CMS — from Figma through GitHub → Vercel CI/CD, with ISR, draft mode, and live content editing for non-technical clients.`;
  }

  if (q.includes('experience') || q.includes('job') || q.includes('intern') || q.includes('poste')) {
    return `Right now I'm a Developer at WebDirect.nl. Before that I interned at La Poste Tunisienne (${internship?.date}), where I built FlowerShop in Flutter. I learn by shipping alongside university.`;
  }

  if (q.includes('project') || q.includes('flowershop') || q.includes('built')) {
    return `${featured.title}: ${featured.description} GitHub: ${featured.links[0]?.url ?? SOCIAL_HREFS.github}`;
  }

  if (q.includes('work') || q.includes('hire') || q.includes('open') || q.includes('opportunit')) {
    return `Yes — open to new opportunities, internships, and collabs. Email ${SOCIAL_HREFS.email.replace('mailto:', '')} or LinkedIn: linkedin.com/in/nour-ben-jemaa.`;
  }

  if (q.includes('learn') || q.includes('studying') || q.includes('ai') || q.includes('ml')) {
    return `I'm specializing in software development at ISET Rades (${degree.dates}), with a growing interest in problem solving and AI/ML. I learn by shipping client web apps, not only tutorials.`;
  }

  if (q.includes('educat') || q.includes('school') || q.includes('iset') || q.includes('bacc') || q.includes('universit')) {
    return `${degree.degree} at ${degree.schoolFull} (${degree.dates}). Before that: ${bac.degree} in Tunisia (${bac.dates}), math track with honors.`;
  }

  if (q.includes('about') || q.includes('who') || q.includes('bio') || q.includes('yourself')) {
    return `I'm Nour Ben Jemaa, an IT student and full-stack developer from Tunisia. Math-track bac, now software development at ISET Rades. I volunteer with IEEE, do hackathons, and I'm starting to document the journey on YouTube.`;
  }

  if (q.includes('ieee') || q.includes('hackathon') || q.includes('volunteer')) {
    return `I volunteer with the IEEE student branch, community projects, hackathons, and competitions — pitching to strangers taught me what tutorials never could.`;
  }

  if (q.includes('youtube') || q.includes('video')) {
    return `I'm documenting my messy learning journey on YouTube: youtube.com/@nouurbj — come along!`;
  }

  if (q.includes('github')) {
    return `GitHub: github.com/nourbenjemaa94-cmd — FlowerShop lives at github.com/nourbenjemaa94-cmd/Internship-Project.`;
  }

  if (q.includes('contact') || q.includes('email') || q.includes('linkedin')) {
    return `Email: nourbenjemaa94@gmail.com · LinkedIn: linkedin.com/in/nour-ben-jemaa · GitHub: github.com/nourbenjemaa94-cmd`;
  }

  if (q.includes('where') || q.includes('location') || q.includes('tunis')) {
    return `Based in Tunis, Tunisia. I speak Arabic, English, and French.`;
  }

  return `I'm mini-Nour — ask me about my stack, FlowerShop, WebDirect.nl, ISET Rades, or how to get in touch. You can also tap a chip above.`;
}
