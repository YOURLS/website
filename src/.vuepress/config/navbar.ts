import { NavbarConfig } from '@vuepress/theme-default'

export const navbar: NavbarConfig = [
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
    children: [
      {
        text: 'Ressources',
        children: [
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
        children: [
          { text: 'Hooklist', link: 'https://yourls.org/hooklist.php' },
          { text: 'XRef', link: 'https://yourls.org/xref/' },
        ],
      },
      {
        text: 'News',
        children: [{ text: 'Blog', link: 'https://blog.yourls.org' }],
      },
    ],
  },
  { text: 'Sponsor', link: '/sponsor' },
]
