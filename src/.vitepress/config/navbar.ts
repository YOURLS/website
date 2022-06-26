import { DefaultTheme } from 'vitepress'

export const navbar: DefaultTheme.NavItem[] = [
  {
    text: 'Docs',
    link: '/guide/introduction',
    activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
  },
  {
    text: 'Development',
    link: '/development/plugins',
    activeMatch: `^/(development)/`,
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
          { text: 'Hooklist', link: 'https://yourls.org/hooklist.php' },
          { text: 'XRef', link: 'https://yourls.org/xref/' },
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
    text: '1.x (stable)',
    link: 'https://docs.yourls.org',
  },
]
