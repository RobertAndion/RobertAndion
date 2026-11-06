// Central site settings. Edit here; everything else reads from this file.
export const site = {
  name: 'Robert Andion',
  handle: 'robert',
  url: 'https://robertandion.com',
  title: 'Robert Andion — Lead Software Engineer',
  tagline: 'Lead software engineer building AI-powered platforms from concept to production.',
  description:
    'Robert Andion is a lead software engineer (Java, Spring Boot, distributed systems) building AI-powered platforms in fintech and beyond.',
  location: 'Tampa, FL · Remote (U.S.)',
  links: {
    github: 'https://github.com/RobertAndion',
    linkedin: 'https://www.linkedin.com/in/robert-andion/',
    // Intentionally no email or phone number on this site.
    // TODO: add a contact form or a dedicated public contact address if you want one.
  },
  // TODO: replace public/og-default.png with a custom 1200x630 social card if desired.
  ogImage: '/og-default.png',
} as const;

export const nav = [
  { href: '/', label: 'home' },
  { href: '/projects/', label: 'projects' },
  { href: '/resume/', label: 'resume' },
  { href: '/contact/', label: 'contact' },
] as const;
