export type AboutLink = {
  href: string;
  nameKey: string;
};

export const ABOUT_LINKS: AboutLink[] = [
  { href: '/blog', nameKey: 'footer_blog' },
  { href: '/terms', nameKey: 'footer_rules' },
  { href: '/privacy', nameKey: 'footer_privacy' },
  { href: '/tour', nameKey: 'tour_title' },
  { href: '/support', nameKey: 'footer_help' },
];
