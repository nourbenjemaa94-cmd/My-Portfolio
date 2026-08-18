import { Github, Linkedin, Mail } from 'lucide-react';
import type { SocialLink } from '@/types/portfolio';

export function SocialIcon({ name, size = 16 }: { name: SocialLink['icon']; size?: number }) {
  if (name === 'github') return <Github size={size} />;
  if (name === 'linkedin') return <Linkedin size={size} />;
  return <Mail size={size} />;
}

export function socialHref(link: SocialLink) {
  if (link.href) return link.href;
  if (link.icon === 'email') return `mailto:${link.url}`;
  return `https://${link.url}`;
}
