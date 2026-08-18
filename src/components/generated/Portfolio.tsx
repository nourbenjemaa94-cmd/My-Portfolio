import * as React from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, Youtube, ExternalLink, Code, Star, ArrowRight, Download, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// ─── Types ───────────────────────────────────────────────────────────────────

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  links: {
    label: string;
    url: string;
    icon: 'demo' | 'source';
  }[];
  featured?: boolean;
  isWip?: boolean;
}
interface Experience {
  id: string;
  hash: string;
  date: string;
  role: string;
  company: string;
  bullets: string[];
  tags: string[];
}

// ─── Data ────────────────────────────────────────────────────────────────────

const ROLES = ['IT Student_', 'Full-Stack Dev_', 'Problem Solver_', 'Open Source Nerd_'];
const PROJECTS: Project[] = [{
  id: 'flowershop',
  title: 'FlowerShop — Flutter E-Commerce',
  description: 'A cross-platform mobile e-commerce app developed during my internship at La Poste Tunisienne. Customers can browse, search, and purchase flowers with a smooth, responsive UI. Built with Flutter & Dart for Android, iOS, Web, and Windows, with Firebase Authentication, Cloud Firestore for real-time product management, and Firebase Storage for media. Key highlights: clean architecture, role-based access, real-time inventory updates, and a full cart and checkout flow.',
  tags: ['Flutter', 'Dart', 'Firebase Auth', 'Firestore', 'Firebase Storage'],
  links: [{
    label: 'View on GitHub →',
    url: 'https://github.com/nourbenjemaa94-cmd/Internship-Project',
    icon: 'source'
  }],
  featured: true
}];
const EXPERIENCES: Experience[] = [{
  id: 'exp-webdirect',
  hash: 'f7e8d9c',
  date: 'Mar 2026 → present',
  role: 'Developer',
  company: 'WebDirect.nl',
  bullets: ['Remote developer role, moving from part-time (Mar → Jun 2026) to full-time (Jun 2026 → present)', 'Working across full-stack development with TypeScript'],
  tags: ['full-stack', 'typescript', 'remote']
}, {
  id: 'exp1',
  hash: 'a1b2c3d',
  date: 'Jan 2026',
  role: 'Mobile Developer Intern',
  company: 'La Poste Tunisienne',
  bullets: ['Built FlowerShop, a cross-platform e-commerce app in Flutter & Dart for Android, iOS, Web, and Windows', 'Integrated Firebase Authentication, Cloud Firestore for real-time product management, and Firebase Storage for media', 'Shipped clean architecture, role-based access, real-time inventory updates, and a full cart and checkout flow'],
  tags: ['flutter', 'dart', 'firebase']
}];
const SKILLS = [{
  name: 'JavaScript',
  level: 90
}, {
  name: 'Python',
  level: 80
}, {
  name: 'React / Next.js',
  level: 70
}, {
  name: 'Flutter / Dart',
  level: 65
}, {
  name: 'PostgreSQL',
  level: 60
}];
const TECH_CARDS = [{
  name: 'HTML',
  emoji: '📄',
  category: 'Languages'
}, {
  name: 'CSS',
  emoji: '🎨',
  category: 'Languages'
}, {
  name: 'Java',
  emoji: '☕',
  category: 'Languages'
}, {
  name: 'JavaScript',
  emoji: '⚡',
  category: 'Languages'
}, {
  name: 'TypeScript',
  emoji: '📘',
  category: 'Languages'
}, {
  name: 'Dart',
  emoji: '🎯',
  category: 'Languages'
}, {
  name: 'Python',
  emoji: '🐍',
  category: 'Languages'
}, {
  name: 'React',
  emoji: '⚛',
  category: 'Frameworks'
}, {
  name: 'Next.js',
  emoji: '▲',
  category: 'Frameworks'
}, {
  name: 'Flutter',
  emoji: '🦋',
  category: 'Frameworks'
}, {
  name: 'PostgreSQL',
  emoji: '🐘',
  category: 'Databases'
}, {
  name: 'Git / GitHub',
  emoji: '🌿',
  category: 'Tools'
}, {
  name: 'Sanity CMS',
  emoji: '📝',
  category: 'Tools'
}];
const ABOUT_PILLS = [{
  label: 'problem-solver',
  variant: 'mauve' as const
}, {
  label: 'open-source curious',
  variant: 'blue' as const
}, {
  label: 'coffee-dependent',
  variant: 'mauve' as const
}, {
  label: 'IEEE member',
  variant: 'blue' as const
}, {
  label: 'night-owl coder',
  variant: 'mauve' as const
}, {
  label: 'documentation stan',
  variant: 'blue' as const
}];
const HERO_STATS = [{
  label: '★ 24 repos'
}, {
  label: '⑂ 312 contributions'
}, {
  label: '📌 FlowerShop'
}];
const LINK_ROWS = [{
  label: 'github',
  url: 'github.com/nourbenjemaa94-cmd',
  icon: <Github size={16} />
}, {
  label: 'linkedin',
  url: 'linkedin.com/in/nour-ben-jemaa',
  href: 'https://www.linkedin.com/in/nour-ben-jemaa-4692442b4/?skipRedirect=true',
  icon: <Linkedin size={16} />
}, {
  label: 'email',
  url: 'nourbenjemaa94@gmail.com',
  icon: <Mail size={16} />
}];

// ─── Small primitives ─────────────────────────────────────────────────────────

const WashiTape = ({
  className,
  color = 'mauve',
  style
}: {
  className?: string;
  color?: 'mauve' | 'blue' | 'amber';
  style?: React.CSSProperties;
}) => {
  const bg = {
    mauve: 'bg-[#F1E2EC] border-[#e8c8d8]',
    blue: 'bg-[#E0E8F7] border-[#c8d8f0]',
    amber: 'bg-[#F5E6C8] border-[#e8d0a0]'
  }[color];
  return <div className={cn('pointer-events-none select-none border-[0.5px] opacity-80', bg, className)} style={style} />;
};

// ─── Typewriter ───────────────────────────────────────────────────────────────

const TypewriterRole = () => {
  const [index, setIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  React.useEffect(() => {
    const currentRole = ROLES[index];
    const speed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setIndex(prev => (prev + 1) % ROLES.length);
      } else {
        setDisplayText(prev => isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1));
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);
  return <div className="text-lg md:text-xl text-[#181A26] h-8 flex items-center" style={{
    fontFamily: "'JetBrains Mono', monospace"
  }}>
      
      <span>{displayText}</span>
      <span className="cursor-blink w-0.5 h-5 bg-[#7A2A50] ml-0.5 inline-block" />
    </div>;
};

// ─── Contribution Graph ────────────────────────────────────────────────────────

const ContributionGraph = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  const cells = Array.from({
    length: 35
  }, (_, i) => {
    const val = (i * 7 + i % 5 * 3 + 17) % 10;
    let bg = '#E9EBF3';
    if (val > 7) bg = '#7A2A50';else if (val > 5) bg = 'rgba(122,42,80,0.55)';else if (val > 3) bg = 'rgba(122,42,80,0.25)';
    return {
      i,
      bg
    };
  });
  return <div ref={ref} className="mt-6">
      <span className="text-xs text-[#6B7080] mb-2 block" style={{
      fontFamily: "'JetBrains Mono', monospace"
    }}>
        
        // last 35 days
      </span>
      <div className="flex flex-wrap gap-1.5 max-w-[260px]">
        {cells.map(({
        i,
        bg
      }) => <motion.div key={i} initial={{
        scale: 0
      }} animate={isInView ? {
        scale: 1
      } : {}} transition={{
        delay: i * 0.02,
        type: 'spring',
        stiffness: 300,
        damping: 20
      }} className="w-3.5 h-3.5 rounded-[2px]" style={{
        backgroundColor: bg
      }} />)}
      </div>
    </div>;
};

// ─── Section wrapper ──────────────────────────────────────────────────────────

const Section = ({
  id,
  children,
  className
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  return <motion.section id={id} ref={ref} initial={{
    opacity: 0,
    y: 24
  }} animate={isInView ? {
    opacity: 1,
    y: 0
  } : {}} transition={{
    duration: 0.6,
    ease: 'easeOut'
  }} className={className}>
      
      {children}
    </motion.section>;
};

// ─── Page-load intro ──────────────────────────────────────────────────────────

const PageIntro = ({
  onDone
}: {
  onDone: () => void;
}) => {
  React.useEffect(() => {
    const t = setTimeout(onDone, 2200);
    return () => clearTimeout(t);
  }, [onDone]);
  return <motion.div initial={{
    opacity: 1
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} transition={{
    duration: 0.5,
    delay: 1.9
  }} className="fixed inset-0 z-[9998] bg-[#F4F5FA] flex items-center justify-center" style={{
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='nf'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23nf)' opacity='0.04'/%3E%3C/svg%3E\")"
  }}>
      <div className="flex items-center justify-center w-full">
        <svg viewBox="0 0 420 100" className="w-80 md:w-[420px]" style={{
        overflow: 'visible'
      }}>
          <text x="210" y="80" textAnchor="middle" fontFamily="'Sacramento', cursive" fontSize="80" fill="none" stroke="#7A2A50" strokeWidth="1.5" style={{
          strokeDasharray: 1000,
          strokeDashoffset: 1000,
          animation: 'handwrite-in 1.4s ease forwards'
        }}>
            Nour Ben Jemaa
          </text>
          <text x="210" y="80" textAnchor="middle" fontFamily="'Sacramento', cursive" fontSize="80" fill="#7A2A50" style={{
          opacity: 0,
          animation: 'fadeIn 0.4s ease forwards 1.4s'
        }}>
            Nour Ben Jemaa
          </text>
        </svg>
      </div>
    </motion.div>;
};

// ─── Cursor Trail ─────────────────────────────────────────────────────────────

const CursorTrail = () => {
  const [pos, setPos] = React.useState({
    x: -100,
    y: -100
  });
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setVisible(true);
      setTimeout(() => setPos({
        x: e.clientX,
        y: e.clientY
      }), 80);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);
  if (!visible) return null;
  return <div className="fixed pointer-events-none z-[9990] w-2 h-2 rounded-full bg-[#7A2A50] opacity-40" style={{
    left: pos.x - 4,
    top: pos.y - 4,
    transition: 'left 0.1s, top 0.1s'
  }} />;
};

// ─── Main Portfolio component ─────────────────────────────────────────────────

export const Portfolio = () => {
  const [introVisible, setIntroVisible] = React.useState(true);
  const [activeFilter, setActiveFilter] = React.useState('All');
  const [formState, setFormState] = React.useState<'idle' | 'sending' | 'sent'>('idle');
  const {
    scrollYProgress
  } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('sent'), 1500);
  };
  const filteredCards = TECH_CARDS.filter(c => activeFilter === 'All' || c.category === activeFilter);
  return <div className="min-h-screen bg-[#F4F5FA]" style={{
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='nf'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23nf)' opacity='0.03'/%3E%3C/svg%3E\")"
  }}>
      
      <AnimatePresence>
        {introVisible && <PageIntro onDone={() => setIntroVisible(false)} />}
      </AnimatePresence>

      {/* Cursor trail */}
      <CursorTrail />

      {/* Scroll progress */}
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-[#7A2A50] z-50 origin-left" style={{
      scaleX
    }} />
      

      {/* Sticky Nav */}
      <nav className="sticky top-0 z-40 bg-[#F4F5FA]/80 backdrop-blur-md border-b border-[#D7DAE6] px-6 h-14 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-1" style={{
        fontFamily: "'JetBrains Mono', monospace"
      }}>
          <span className="text-[#2F6FB0] text-base">~/nour</span>
          <span className="cursor-blink w-0.5 h-4 bg-[#7A2A50] inline-block ml-0.5" />
        </div>
        <div className="hidden md:flex items-center gap-3">
          {['about', 'stack', 'projects', 'experience', 'contact'].map(item => <a key={item} href={`#${item}`} className="px-3 py-1 text-xs font-medium text-[#181A26] border border-[#D7DAE6] rounded-full hover:bg-[#F1E2EC] hover:border-[#7A2A50]/30 transition-all" style={{
          fontFamily: "'Inter', sans-serif"
        }}>
            
              {item}
            </a>)}
        </div>
        <Star size={16} className="text-[#B83A6E] fill-[#B83A6E]" />
      </nav>

      {/* ── HERO ── */}
      <section id="hero" className="max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-24 grid md:grid-cols-[3fr_2fr] gap-16 items-center">
        
        {/* Left */}
        <div>
          <p className="text-[#6B7080] text-sm mb-3" style={{
          fontFamily: "'JetBrains Mono', monospace"
        }}>
            
            // hello, world
          </p>

          <h1 className="text-[56px] md:text-[80px] text-[#7A2A50] leading-none mb-4 -ml-1" style={{
          fontFamily: "'Sacramento', cursive",
          whiteSpace: 'nowrap'
        }}>
            
            Nour Ben Jemaa
          </h1>

          <TypewriterRole />

          <p className="mt-6 text-[#6B7080] text-base leading-[1.75] max-w-md" style={{
          fontFamily: "'Inter', sans-serif"
        }}>
            
            Building clean things on the internet. Obsessed with how systems work. Currently
            studying CS at State University.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <motion.button whileHover={{
            scale: 1.04
          }} whileTap={{
            scale: 0.97
          }} className="bg-[#7A2A50] text-white px-6 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium shadow-lg shadow-[#7A2A50]/20 hover:bg-[#692B56] transition-all" style={{
            fontFamily: "'Inter', sans-serif"
          }}>
              
              View my work <ArrowRight size={15} />
            </motion.button>
            <motion.button whileHover={{
            scale: 1.04
          }} whileTap={{
            scale: 0.97
          }} className="border border-[#D7DAE6] text-[#181A26] px-6 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium hover:bg-white transition-all" style={{
            fontFamily: "'Inter', sans-serif"
          }}>
              
              Download CV <Download size={15} />
            </motion.button>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {HERO_STATS.map(s => <span key={s.label} className="px-3 py-1 rounded-full bg-[#E0E8F7] text-[#1B2A4A] text-xs font-medium border border-[#aec4e8]" style={{
            fontFamily: "'Inter', sans-serif"
          }}>
              
                {s.label}
              </span>)}
          </div>
        </div>

        {/* Right — washi-taped card stack */}
        <div className="relative flex items-center justify-center min-h-[360px]">
          {/* Layer 1 — code card */}
          <motion.div initial={{
          rotate: -6,
          opacity: 0
        }} animate={{
          rotate: -4,
          opacity: 1
        }} transition={{
          duration: 0.7,
          delay: 0.2
        }} className="bg-white border-l-4 border-[#7A2A50] shadow-md p-5 overflow-hidden" style={{
          position: 'absolute',
          inset: 0,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10
        }}>
            
            <WashiTape className="h-4 w-14 rotate-[15deg] rounded-sm" style={{
            position: 'absolute',
            top: -4,
            left: 12
          } as React.CSSProperties} />
            <WashiTape className="h-4 w-10 rotate-[-10deg] rounded-sm" color="blue" style={{
            position: 'absolute',
            bottom: -4,
            right: 12
          } as React.CSSProperties} />
            <div className="text-[#6B7080] mb-2 text-[9px]"># hey.py</div>
            <pre className="text-[#181A26] text-[9px] leading-relaxed whitespace-pre-wrap">{`def me():\n  return {\n    "name": "Nour Ben Jemaa",\n    "status": "building things ✨"\n  }`}</pre>
          </motion.div>

          {/* Layer 2 — polaroid */}
          <motion.div initial={{
          rotate: 6,
          opacity: 0,
          filter: 'saturate(0) brightness(0.5)'
        }} animate={{
          rotate: 3,
          opacity: 1,
          filter: 'saturate(1) brightness(1)'
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="bg-white shadow-xl flex flex-col" style={{
          position: 'absolute',
          inset: 16,
          border: '12px solid #ffffff',
          boxShadow: '0 12px 48px rgba(0,0,0,0.22), 0 4px 16px rgba(0,0,0,0.12)'
        }}>
            
            <WashiTape className="h-4 w-12 rotate-[-5deg] rounded-sm" color="blue" style={{
            position: 'absolute',
            top: -4,
            left: '50%',
            transform: 'translateX(-50%)'
          } as React.CSSProperties} />
            <div className="flex-grow overflow-hidden">
              <img src="/nour.png" alt="Nour Ben Jemaa" style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block'
            }} />
            
            </div>
            <div className="h-10 flex items-center justify-center bg-white flex-shrink-0">
              <span className="text-[9px] text-[#6B7080]" style={{
              fontFamily: "'JetBrains Mono', monospace"
            }}>
                
                git commit -m "hi, i'm Nour"
              </span>
            </div>
          </motion.div>

          {/* Doodle stickers */}
          <motion.div whileHover={{
          rotate: [0, -10, 10, 0],
          scale: 1.15
        }} className="text-[#B83A6E]" style={{
          position: 'absolute',
          top: -20,
          right: -24
        }}>
            
            <Star size={32} fill="currentColor" />
          </motion.div>
          <motion.div whileHover={{
          rotate: [-5, 5, -5],
          scale: 1.1
        }} className="text-[#7A2A50] font-mono text-2xl font-bold" style={{
          position: 'absolute',
          bottom: -12,
          left: -28
        }}>
            
            {'</>'}
          </motion.div>
          <motion.div whileHover={{
          scale: 1.15
        }} className="text-[#2F6FB0] font-mono text-xl font-bold" style={{
          position: 'absolute',
          top: '30%',
          left: -32
        }}>
            
            {'{ }'}
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <Section id="about" className="max-w-6xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-12 border-t border-[#D7DAE6]/60">
        
        {/* Left */}
        <div>
          <p className="text-[#6B7080] text-xs uppercase tracking-[0.2em] mb-1" style={{
          fontFamily: "'JetBrains Mono', monospace"
        }}>
            
            ABOUT.md
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#181A26] mb-4" style={{
          fontFamily: "'Playfair Display', serif"
        }}>
            
            about me
            <svg viewBox="0 0 120 8" className="w-32 h-2 mt-1">
              <path d="M0,4 Q30,0 60,4 T120,4" stroke="#7A2A50" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              
            </svg>
          </h2>

          <p className="text-[#181A26] leading-[1.8] mb-6 text-[15px]" style={{
          fontFamily: "'Inter', sans-serif"
        }}>
            
            I'm Nour — a Computer Science student by day, side-project obsessive by night. I love
            the moment a problem <em>clicks</em>: when the architecture suddenly makes sense, when
            the bug disappears. I write clean-ish code and firmly believe that good documentation is
            an act of love.
          </p>

          <div className="flex flex-wrap gap-2">
            {ABOUT_PILLS.map(p => <motion.span key={p.label} whileHover={{
            y: -2
          }} className={cn('px-3 py-1.5 rounded-full text-xs font-medium border transition-all cursor-default', p.variant === 'mauve' ? 'bg-[#F1E2EC] text-[#7A2A50] border-[#d4a0bc]' : 'bg-[#E0E8F7] text-[#1B2A4A] border-[#aec4e8]')} style={{
            fontFamily: "'Inter', sans-serif"
          }}>
              
                {p.label}
              </motion.span>)}
          </div>

          <ContributionGraph />
        </div>

        {/* Right — quick facts card */}
        <div className="relative">
          <div className="relative bg-white border-l-4 border-[#7A2A50] shadow-lg p-6">
            <WashiTape className="h-5 w-16 rotate-[8deg] rounded-sm" color="blue" style={{
            position: 'absolute',
            top: -8,
            right: 16
          } as React.CSSProperties} />
            <pre className="text-[#181A26] text-[11px] leading-[1.9] whitespace-pre-wrap" style={{
            fontFamily: "'JetBrains Mono', monospace"
          }}>
              {`/*\n * Quick facts\n * ──────────────────\n * 📍 Based in:   Tunis, Tunisia\n * 🎓 Studying:   CS Engineering, Year 3\n * 💼 Also:       Freelance Dev\n * 🌍 Languages:  Arabic, English, French\n * ⚡ Currently:  Building a task manager\n */`}</pre>
          </div>

          {/* Mini polaroid */}
          <motion.div initial={{
          filter: 'saturate(0) brightness(0.5)',
          opacity: 0.3
        }} whileInView={{
          filter: 'saturate(1) brightness(1)',
          opacity: 1
        }} transition={{
          duration: 0.8
        }} className="mt-6 ml-auto rotate-[3deg] bg-white border-[10px] border-white shadow-xl w-36 h-44">
            
            <WashiTape className="h-4 w-12 rotate-[-5deg] rounded-sm" color="blue" style={{
            position: 'absolute',
            top: -4,
            left: '50%',
            transform: 'translateX(-50%)'
          } as React.CSSProperties} />
            
            <div className="w-full h-28 overflow-hidden">
              <img src="/nounour.png" alt="Nour Ben Jemaa" style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block'
            }} />
            
            </div>
            <div className="h-8 flex items-center justify-center">
              <span className="text-[11px] text-[#6B7080]" style={{
              fontFamily: "'JetBrains Mono', monospace"
            }}>
                
                when the build passed ✓
              </span>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ── EDUCATION ── */}
      <Section id="education" className="max-w-6xl mx-auto px-6 md:px-10 py-20 border-t border-[#D7DAE6]/60">
        
        <p className="text-[#6B7080] text-xs uppercase tracking-[0.2em] mb-1" style={{
        fontFamily: "'JetBrains Mono', monospace"
      }}>
          
          // where i've been
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold text-[#181A26] mb-10" style={{
        fontFamily: "'Playfair Display', serif"
      }}>
          
          education
          <svg viewBox="0 0 120 8" className="w-32 h-2 mt-1">
            <path d="M0,4 Q30,0 60,4 T120,4" stroke="#7A2A50" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            
          </svg>
        </h2>

        <div className="relative pl-8 border-l border-dashed border-[#D7DAE6] space-y-8 max-w-2xl">
          {/* Entry 1 */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5
        }} className="relative">
            
            <div className="w-4 h-4 rounded-full bg-[#7A2A50] border-4 border-[#F4F5FA]" style={{
            position: 'absolute',
            left: -36,
            top: 20
          }} />
            
            <div className="relative bg-white border-l-4 border-[#2F6FB0] shadow-md p-5 overflow-hidden">
              <WashiTape className="h-4 w-14 rotate-[-5deg] rounded-sm" color="blue" style={{
              position: 'absolute',
              top: -4,
              right: 16
            } as React.CSSProperties} />
              
              <div className="flex justify-between items-start mb-1 flex-wrap gap-2">
                <h3 className="text-lg font-semibold text-[#181A26]" style={{
                fontFamily: "'Playfair Display', serif"
              }}>
                  
                  ISET Rades
                </h3>
                <span className="text-[#6B7080] text-xs" style={{
                fontFamily: "'JetBrains Mono', monospace"
              }}>
                  
                  2025 → 2028
                </span>
              </div>
              <p className="text-[#6B7080] text-xs mb-1" style={{
                fontFamily: "'Inter', sans-serif"
              }}>
                Higher Institute of Technological Studies of Rades
              </p>
              <p className="text-[#7A2A50] font-medium text-sm mb-3">
                Bachelor's Degree in IT — Software Development
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Software Development', 'IT', 'Programming'].map(t => <span key={t} className="px-2.5 py-0.5 rounded-full bg-[#E0E8F7] text-[#1B2A4A] text-[10px] font-medium border border-[#aec4e8]" style={{
                fontFamily: "'Inter', sans-serif"
              }}>
                  
                    {t}
                  </span>)}
              </div>
            </div>
          </motion.div>

          {/* Entry 2 */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }} className="relative">
            
            <div className="w-4 h-4 rounded-full bg-[#7A2A50] border-4 border-[#F4F5FA]" style={{
            position: 'absolute',
            left: -36,
            top: 20
          }} />
            
            <div className="relative bg-white border-l-4 border-[#2F6FB0] shadow-md p-5 overflow-hidden">
              <WashiTape className="h-4 w-12 rotate-[6deg] rounded-sm" color="mauve" style={{
              position: 'absolute',
              top: -4,
              right: 12
            } as React.CSSProperties} />
              
              <div className="flex justify-between items-start mb-1 flex-wrap gap-2">
                <h3 className="text-lg font-semibold text-[#181A26]" style={{
                fontFamily: "'Playfair Display', serif"
              }}>
                  
                  High School, Tunisia
                </h3>
                <span className="text-[#6B7080] text-xs" style={{
                fontFamily: "'JetBrains Mono', monospace"
              }}>
                  
                  2025
                </span>
              </div>
              <p className="text-[#7A2A50] font-medium text-sm mb-3">
                Baccalauréat in Mathematics
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Mathematics', 'Sciences'].map(t => <span key={t} className="px-2.5 py-0.5 rounded-full bg-[#F1E2EC] text-[#7A2A50] text-[10px] font-medium border border-[#d4a0bc]" style={{
                fontFamily: "'Inter', sans-serif"
              }}>
                  
                    {t}
                  </span>)}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ── TECH STACK ── */}
      <Section id="stack" className="max-w-6xl mx-auto px-6 md:px-10 py-20 border-t border-[#D7DAE6]/60">
        
        <p className="text-[#6B7080] text-xs uppercase tracking-[0.2em] mb-1" style={{
        fontFamily: "'JetBrains Mono', monospace"
      }}>
          
          04 —
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold text-[#181A26] mb-6" style={{
        fontFamily: "'Playfair Display', serif"
      }}>
          
          tech stack
          <svg viewBox="0 0 120 8" className="w-32 h-2 mt-1">
            <path d="M0,4 Q30,0 60,4 T120,4" stroke="#7A2A50" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            
          </svg>
        </h2>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {['All', 'Languages', 'Frameworks', 'Databases', 'Tools'].map(f => <button key={f} onClick={() => setActiveFilter(f)} className={cn('px-3 py-1 rounded-full text-xs font-medium transition-all', activeFilter === f ? 'bg-[#7A2A50] text-white' : 'bg-white border border-[#D7DAE6] text-[#181A26] hover:bg-[#F1E2EC]')} style={{
          fontFamily: "'Inter', sans-serif"
        }}>
            
              {f}
            </button>)}
        </div>

        {/* Tool grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          <AnimatePresence mode="popLayout">
            {filteredCards.map((card, i) => <motion.div key={card.name} layout initial={{
            opacity: 0,
            scale: 0.85
          }} animate={{
            opacity: 1,
            scale: 1
          }} exit={{
            opacity: 0,
            scale: 0.85
          }} transition={{
            delay: i * 0.04
          }} whileHover={{
            y: -4,
            borderColor: '#7A2A50'
          }} className="bg-white border border-[#D7DAE6] rounded-lg p-4 flex flex-col items-center gap-2 shadow-sm relative overflow-hidden cursor-default">
              
                <WashiTape className="h-3 w-8 rotate-[10deg] rounded-sm opacity-60" color="mauve" style={{
              position: 'absolute',
              top: -2,
              right: -2
            } as React.CSSProperties} />
              
                <span className="text-2xl">{card.emoji}</span>
                <span className="text-xs font-semibold text-[#181A26] text-center" style={{
              fontFamily: "'Inter', sans-serif"
            }}>
                
                  {card.name}
                </span>
                <div className="w-full h-0.5 bg-[#E9EBF3] mt-auto">
                  <motion.div initial={{
                width: 0
              }} whileInView={{
                width: '80%'
              }} className="h-full bg-[#7A2A50]" />
                
                </div>
              </motion.div>)}
          </AnimatePresence>
        </div>

        {/* Skill bars terminal card */}
        <div className="relative max-w-lg">
          <WashiTape className="h-5 w-16 rotate-[-12deg] rounded-sm" color="blue" style={{
          position: 'absolute',
          top: -8,
          right: 16
        } as React.CSSProperties} />
          
          <div className="bg-white shadow-lg p-6 relative border-l-4 border-[#7A2A50]">
            <div className="text-[#6B7080] mb-4 text-xs" style={{
            fontFamily: "'JetBrains Mono', monospace"
          }}>
              
              // skill_levels.txt
            </div>
            <div className="space-y-5">
              {SKILLS.map(skill => <div key={skill.name}>
                  <div className="flex justify-between text-xs mb-1.5" style={{
                fontFamily: "'JetBrains Mono', monospace"
              }}>
                  
                    <span className="text-[#181A26]">{skill.name}</span>
                    <span className="text-[#7A2A50]">{skill.level}%</span>
                  </div>
                  <div className="h-4 bg-[#E9EBF3] border border-[#D7DAE6] p-[2px]">
                    <motion.div initial={{
                  width: 0
                }} whileInView={{
                  width: `${skill.level}%`
                }} transition={{
                  duration: 1.2,
                  ease: 'easeOut'
                }} className="h-full bg-[#7A2A50] flex items-center overflow-hidden">
                    
                      <span className="text-white/20 text-[7px] tracking-[1px] whitespace-nowrap ml-0.5" style={{
                    fontFamily: "'JetBrains Mono', monospace"
                  }}>
                      
                        ████████████████
                      </span>
                    </motion.div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </Section>

      {/* ── PROJECTS ── */}
      <Section id="projects" className="max-w-6xl mx-auto px-6 md:px-10 py-20 border-t border-[#D7DAE6]/60">
        
        <p className="text-[#6B7080] text-xs uppercase tracking-[0.2em] mb-1" style={{
        fontFamily: "'JetBrains Mono', monospace"
      }}>
          
          // things i've built
        </p>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#181A26]" style={{
          fontFamily: "'Playfair Display', serif"
        }}>
            
            projects
          </h2>
          <span className="text-[#B83A6E] text-lg flex-shrink-0">📌</span>
        </div>
        <svg viewBox="0 0 200 8" className="w-48 h-2 mb-10">
          <path d="M0,4 Q50,0 100,4 T200,4" stroke="#7A2A50" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          
        </svg>

        {/* Featured project */}
        <motion.div className="mb-8 bg-white border border-[#7A2A50]/30 shadow-lg breathe-shadow relative overflow-hidden" whileHover={{
        y: -4
      }} style={{
        borderRadius: 16
      }}>
          
          <WashiTape className="h-5 w-14 rotate-[-8deg] rounded-sm" color="mauve" style={{
          position: 'absolute',
          top: -4,
          left: 16
        } as React.CSSProperties} />
          
          <div className="flex flex-col md:flex-row">
            {/* Project screenshot */}
            <div className="md:w-2/5 flex-shrink-0 bg-[#F4F5FA] flex items-center justify-center p-4">
              <img src="/e-fleur2.jpg" alt="FlowerShop app screenshot" className="max-h-[420px] w-auto max-w-full object-contain" />
            </div>
            {/* Content */}
            <div className="p-6 flex flex-col justify-center">
              <div className="flex items-start justify-between mb-2 gap-2">
                <h3 className="text-xl font-semibold text-[#181A26]" style={{
                fontFamily: "'Playfair Display', serif"
              }}>
                  
                  {PROJECTS[0].title}
                </h3>
                <span className="flex-shrink-0 px-2 py-0.5 border-2 border-[#7A2A50] text-[#7A2A50] text-[9px] font-bold tracking-widest uppercase font-mono">
                  ★ FEATURED
                </span>
              </div>
              <p className="text-[#6B7080] text-sm leading-relaxed mb-3" style={{
              fontFamily: "'Inter', sans-serif"
            }}>
                
                {PROJECTS[0].description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {PROJECTS[0].tags.map(tag => <span key={tag} className="px-2.5 py-0.5 rounded-full bg-[#E0E8F7] text-[#1B2A4A] text-[10px] font-medium border border-[#aec4e8]" style={{
                fontFamily: "'Inter', sans-serif"
              }}>
                  
                    {tag}
                  </span>)}
              </div>
              <a href="https://github.com/nourbenjemaa94-cmd/Internship-Project" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 self-start px-3 py-2 rounded-md bg-[#7A2A50] text-white text-xs font-medium hover:bg-[#692B56] transition-colors" style={{
              fontFamily: "'JetBrains Mono', monospace"
            }}>
                
                <Github size={14} />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Regular project cards */}
        {PROJECTS.length > 1 && <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.slice(1).map((project, i) => <motion.div key={project.id} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: i * 0.1
        }} whileHover={{
          y: -4
        }} className="bg-white border border-[#D7DAE6] shadow-md p-5 relative overflow-hidden" style={{
          borderRadius: 16
        }}>
            
              <WashiTape className={cn('h-4 w-12 rounded-sm', i === 0 ? 'rotate-[5deg]' : 'rotate-[-7deg]')} color={i === 0 ? 'mauve' : 'blue'} style={{
            position: 'absolute',
            top: -4,
            right: i === 0 ? 12 : undefined,
            left: i === 1 ? 12 : undefined
          } as React.CSSProperties} />
            
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-[#181A26]" style={{
              fontFamily: "'Playfair Display', serif"
            }}>
                
                  {project.title}
                </h3>
                {project.isWip && <span className="flex-shrink-0 px-2 py-0.5 border-2 border-[#7A2A50] text-[#7A2A50] text-[9px] font-bold tracking-widest uppercase font-mono">
                    ⚡ WIP
                  </span>}
              </div>
              <p className="text-[#6B7080] text-sm mb-3 leading-relaxed" style={{
            fontFamily: "'Inter', sans-serif"
          }}>
              
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tags.map(tag => <span key={tag} className={cn('px-2.5 py-0.5 rounded-full text-[10px] font-medium border', i === 0 ? 'bg-[#F1E2EC] text-[#7A2A50] border-[#d4a0bc]' : 'bg-[#E0E8F7] text-[#1B2A4A] border-[#aec4e8]')} style={{
              fontFamily: "'Inter', sans-serif"
            }}>
                
                    {tag}
                  </span>)}
              </div>
              <div className="flex gap-3">
                {project.links.map(link => <a key={link.label} href={link.url} className="flex items-center gap-1 text-xs text-[#7A2A50] hover:text-[#692B56] transition-colors" style={{
              fontFamily: "'JetBrains Mono', monospace"
            }}>
                
                    <Code size={12} />
                    <span>{link.label}</span>
                  </a>)}
              </div>
            </motion.div>)}
        </div>}
      </Section>

      {/* ── EXPERIENCE ── */}
      <Section id="experience" className="max-w-6xl mx-auto px-6 md:px-10 py-20 border-t border-[#D7DAE6]/60">
        
        <p className="text-[#6B7080] text-xs uppercase tracking-[0.2em] mb-1" style={{
        fontFamily: "'JetBrains Mono', monospace"
      }}>
          
          // commit history
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#181A26] mb-10" style={{
        fontFamily: "'Playfair Display', serif"
      }}>
          
          experience
          <svg viewBox="0 0 160 8" className="w-40 h-2 mt-1">
            <path d="M0,4 Q40,0 80,4 T160,4" stroke="#7A2A50" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            
          </svg>
        </h2>

        <div className="space-y-5 max-w-2xl">
          {EXPERIENCES.map((exp, i) => <motion.div key={exp.id} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: i * 0.1
        }} className="relative bg-white border-l-4 border-[#1B2A4A] shadow-md p-5">
            
              <WashiTape className={cn('h-4 w-14 rounded-sm', i % 2 === 0 ? '-rotate-3' : 'rotate-2')} color={i % 2 === 0 ? 'mauve' : 'blue'} style={{
            position: 'absolute',
            top: -4,
            right: i % 2 === 0 ? 16 : 24
          } as React.CSSProperties} />
            
              <div className="flex items-center gap-2 mb-2" style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11
          }}>
              
                <span className="text-[#7A2A50]">●</span>
                <span className="text-[#6B7080]">commit</span>
                <motion.span whileHover={{
              letterSpacing: '0.1em'
            }} className="text-[#B83A6E] cursor-default font-semibold">
                
                  {exp.hash}
                </motion.span>
              </div>
              <p className="text-[#6B7080] text-[11px] mb-2" style={{
            fontFamily: "'JetBrains Mono', monospace"
          }}>
              
                Date: {exp.date}
              </p>
              <h3 className="text-sm font-semibold text-[#181A26] mb-2" style={{
            fontFamily: "'JetBrains Mono', monospace"
          }}>
              
                <span className="text-[#2F6FB0]">feat:</span> {exp.role} @ {exp.company}
              </h3>
              <div className="space-y-1 mb-3">
                {exp.bullets.map(bullet => <p key={bullet} className="flex gap-3 text-xs text-[#181A26]" style={{
              fontFamily: "'JetBrains Mono', monospace"
            }}>
                
                    <span className="text-[#6B7080]">─</span>
                    <span>{bullet}</span>
                  </p>)}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map(tag => <span key={tag} className="px-2 py-0.5 text-[10px] bg-[#E0E8F7] text-[#1B2A4A] border border-[#aec4e8] font-mono" style={{
              fontFamily: "'JetBrains Mono', monospace"
            }}>
                
                    [{tag}]
                  </span>)}
              </div>
            </motion.div>)}
        </div>
      </Section>

      {/* ── CONTACT ── */}
      <section id="contact" className="bg-[#E9EBF3] border-t border-[#D7DAE6]/60 py-20">
        
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <p className="text-[#6B7080] text-xs uppercase tracking-[0.2em] mb-1" style={{
            fontFamily: "'JetBrains Mono', monospace"
          }}>
              
              07 —
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#181A26] mb-4" style={{
            fontFamily: "'Playfair Display', serif"
          }}>
              
              let's connect
              <svg viewBox="0 0 180 8" className="w-44 h-2 mt-1">
                <path d="M0,4 Q45,0 90,4 T180,4" stroke="#7A2A50" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                
              </svg>
            </h2>

            <p className="text-[#6B7080] text-base leading-relaxed mb-8" style={{
            fontFamily: "'Inter', sans-serif"
          }}>
              
              Always up for interesting projects, collabs, or just a chat.
            </p>

            {/* Links card */}
            <div className="relative">
              <WashiTape className="h-5 w-14 rotate-[5deg] rounded-sm" color="mauve" style={{
              position: 'absolute',
              top: -8,
              right: 16
            } as React.CSSProperties} />
              
              <div className="bg-white border border-[#D7DAE6] shadow-sm p-5">
                <div className="text-[#6B7080] mb-4 text-xs" style={{
                fontFamily: "'JetBrains Mono', monospace"
              }}>
                  
                  $ links --list
                </div>
                <div className="space-y-2">
                  {LINK_ROWS.map(link => <a key={link.label} href={link.href ?? (link.label === 'email' ? `mailto:${link.url}` : `https://${link.url}`)} target={link.label === 'email' ? undefined : '_blank'} rel="noreferrer" className="flex items-center justify-between p-2.5 rounded hover:bg-[#F1E2EC] group transition-all">
                    
                      <div className="flex items-center gap-2">
                        <span className="text-[#7A2A50] text-sm">↗</span>
                        <span className="text-[#2F6FB0] text-xs font-bold group-hover:underline underline-offset-4" style={{
                      fontFamily: "'JetBrains Mono', monospace"
                    }}>
                        
                          {link.label}
                        </span>
                      </div>
                      <span className="text-[#6B7080] text-[10px] hidden sm:inline" style={{
                    fontFamily: "'JetBrains Mono', monospace"
                  }}>
                      
                        {link.url}
                      </span>
                      <span className="text-[#6B7080] group-hover:text-[#7A2A50] transition-colors">
                        {link.icon}
                      </span>
                    </a>)}
                </div>
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <div>
            <div className="relative">
              <WashiTape className="h-5 w-16 rotate-[-4deg] rounded-sm" color="mauve" style={{
              position: 'absolute',
              top: -8,
              left: 16
            } as React.CSSProperties} />
              
              <WashiTape className="h-5 w-12 rotate-[6deg] rounded-sm" color="blue" style={{
              position: 'absolute',
              top: -8,
              right: 16
            } as React.CSSProperties} />
              
              <motion.div initial={{
              rotate: 1
            }} whileInView={{
              rotate: 0
            }} className="bg-white border border-[#D7DAE6] shadow-xl p-6">
                
                <form onSubmit={handleFormSubmit} className="space-y-5" style={{
                fontFamily: "'JetBrains Mono', monospace"
              }}>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-[#6B7080] text-xs flex-shrink-0">{'>'} name</span>
                      <input type="text" required placeholder="___________" className="flex-1 bg-transparent border-b border-dashed border-[#D7DAE6] focus:border-[#7A2A50] outline-none text-sm text-[#181A26] pb-0.5 transition-colors placeholder:text-[#D7DAE6]" />
                      
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#6B7080] text-xs flex-shrink-0">{'>'} email</span>
                      <input type="email" required placeholder="___________" className="flex-1 bg-transparent border-b border-dashed border-[#D7DAE6] focus:border-[#7A2A50] outline-none text-sm text-[#181A26] pb-0.5 transition-colors placeholder:text-[#D7DAE6]" />
                      
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[#6B7080] text-xs">{'>'} message</span>
                      <textarea required rows={4} placeholder="___________" className="bg-transparent border border-dashed border-[#D7DAE6] focus:border-[#7A2A50] outline-none text-sm text-[#181A26] p-3 resize-none transition-colors placeholder:text-[#D7DAE6]" />
                      
                    </div>
                  </div>

                  <motion.button whileHover={{
                  scale: 1.02,
                  boxShadow: '0 0 20px rgba(122,42,80,0.3)'
                }} whileTap={{
                  scale: 0.98
                }} type="submit" disabled={formState !== 'idle'} className={cn('w-full py-3 rounded-full font-bold text-sm transition-all shadow-md', formState === 'idle' ? 'bg-[#7A2A50] text-white hover:bg-[#692B56]' : 'bg-[#E9EBF3] text-[#6B7080] cursor-not-allowed')}>
                    
                    {formState === 'idle' && '[ Send message → ]'}
                    {formState === 'sending' && '> sending...'}
                    {formState === 'sent' && '> ✓ message sent!'}
                  </motion.button>

                  {formState === 'sending' && <motion.div animate={{
                  opacity: [1, 0]
                }} transition={{
                  duration: 0.8,
                  repeat: Infinity
                }} className="w-4 h-0.5 bg-[#7A2A50] mx-auto" />}
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F4F5FA] border-t border-[#D7DAE6] py-8 flex flex-col items-center gap-4">
        <div className="flex items-center gap-4 text-[#7A2A50]">
          <a href="https://github.com/nourbenjemaa94-cmd" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:scale-110 transition-transform">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/nour-ben-jemaa-4692442b4/?skipRedirect=true" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
            <Linkedin size={18} />
          </a>
          <a href="mailto:nourbenjemaa94@gmail.com" aria-label="Email" className="hover:scale-110 transition-transform">
            <Mail size={18} />
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#6B7080] text-xs" style={{
          fontFamily: "'JetBrains Mono', monospace"
        }}>
            
            // built with React + Vite by Nour Ben Jemaa · 2026
          </span>
          <Star size={12} className="text-[#B83A6E] fill-[#B83A6E]" />
        </div>
      </footer>
    </div>;
};
export default Portfolio;