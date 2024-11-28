export const HEADER_DETAILS = {
  logoText: 'TravLog',
  navMenu: [
    { navText: 'Home', navUrl: '/' },
    { navText: 'Discover', navUrl: '/discover' },
    { navText: 'Special Deals', navUrl: '/special-deals' },
    { navText: 'Contact', navUrl: '/contact' },
  ],
  authMenu: [
    { navText: 'Log in', navUrl: '/login' },
    { navText: 'Sign Up', navUrl: '/signup' },
  ],
};

export const HERO_DETAILS = {
  heroHeading: 'Travel top destination of the world',
  heroParagraph:
    'We always make our customer happy by providing as many choices as possible',
  heroButtonMain: 'Get Started',
  heroButtonSecondary: 'Watch Demo',
};

const PARTNERS = ['tripadvisor'];

export const apiKey = 'MFHh5JqdgRVmnYxuWFFz7pxUdpvPcsJY';
export const endpoint = `https://api.giphy.com/v2/emoji?api_key=${apiKey}&limit=100&offset=0`;
