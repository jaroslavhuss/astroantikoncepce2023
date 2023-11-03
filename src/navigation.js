import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Úvod',
      href: getPermalink('/'),
    },
    {
      text: 'Několik rad',
      links: [
        {
          text: 'Jak to funguje?',
          href: getPermalink('/jak-to-funguje'),
        },
        {
          text: 'Antikoncepce a zdraví',
          href: getPermalink('/antikoncepce-a-zdravi'),
        },
        {
          text: 'Jaká jsou rizika',
          href: getPermalink('/jaka-jsou-rizika'),
        },
        {
          text: 'Mýty a fakta',
          href: getPermalink('/myty-a-fakta'),
        },
      ],
    },
  
    {
      text: 'Časté dotazy',
      href: getPermalink('/caste-dotazy'),
    },
    {
      text: 'Články',
      href: getBlogPermalink(),
    },
    {
      text: 'Kontakt',
      href: getPermalink('/kontakt'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Hlavní stránka',
      links: [
        { text: 'Úvod', href: '/' },

      ],
    },
    {
      title: 'Několik rad',
      links: [
        { text: 'Jak to funguje?', href: '/jak-to-funguje' },
        { text: 'Antikoncepce a zdraví', href: '/antikoncepce-a-zdravi' },
        { text: 'Jaká jsou rizika', href: '/jaka-jsou-rizika' },
        { text: 'Myty a fakta', href: '/myty-a-fakta' },
      ],
    },
    {
      title: 'Časté dotazy',
      links: [
        { text: 'Časté dotazy', href: '#' },
      ],
    },
    {
      title: 'Další odkazy',
      links: [
        { text: 'Kontakt', href: '/kontakt' },
        { text: 'Články', href: '/clanky' },
        { text: 'Mapa stránek', href: '/sitemap.xml' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Zásady cookies (EU)', href: getPermalink('/zasady-cookies') },
    { text: 'Zásady ochrany osobních údajů', href: getPermalink('/zasady-ochrany-osobnich-udaju') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm "></span>
    <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://antikoncepce.com/"> Antikoncepce.com</a>
  `,
};

