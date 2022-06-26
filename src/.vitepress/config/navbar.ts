import { DefaultTheme } from 'vitepress'

export const navbar: DefaultTheme.NavItem[] = [
  {
    text: 'Guides',
    link: '/guide/introduction',
    activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
  },
  {
    text: 'Configuration',
    link: '/configuration/',
    activeMatch: `^/configuration/`,
  },
  {
    text: 'Development',
    link: '/development/plugins',
    activeMatch: `^/development/`,
  },
  {
    text: 'API',
    link: '/api/',
    activeMatch: `^/api/`,
  },
  {
    text: 'Ecosystem',
    items: [
      {
        text: 'Ressources',
        items: [
          {
            text: 'Awesome YOURLS',
            link: 'https://github.com/YOURLS/awesome-yourls',
          },
          {
            text: 'Plugin sample',
            link: 'https://github.com/YOURLS/plugin-sample',
          },
        ],
      },
      {
        text: 'References',
        items: [
          { text: 'Laravel', link: 'https://laravel.com/' },
          { text: 'Vue.js', link: 'https://vuejs.org/' },
        ],
      },
      {
        text: 'News',
        items: [{ text: 'Blog', link: 'https://blog.yourls.org' }],
      },
    ],
  },
  { text: 'Sponsor', link: '/sponsor' },
  {
    text: '2.x (next)',
    items: [
      {
        text: '1.x (stable)',
        link: 'https://docs.yourls.org',
      },
    ],
  },
]
