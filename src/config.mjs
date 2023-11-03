import defaultImage from './assets/images/default.png';

const CONFIG = {
  name: 'Antikoncepce.com',

  origin: 'https://antikoncepce.com',
  basePathname: '/',
  trailingSlash: false,

  title: 'Antikoncepce.com — nejrozsáhlejší český web o antikoncepci',
  description:
    'Anikoncepce.com je nejrozsáhlejší český web o antikoncepci. Najdete zde informace o všech dostupných antikoncepčních metodách, jejich výhodách a nevýhodách, vedlejších účincích a dalších zajímavostech.',
  defaultImage: defaultImage,

  defaultTheme: 'light', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'cs',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('cs', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',

  blog: {
    disabled: false,
    postsPerPage: 4,

    post: {
      permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: '/clanky', // Blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'kategorie', // Category main path /category/some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tagy', // Tag main path /tag/some-tag
      noindex: true,
      disabled: false,
    },
  },
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
