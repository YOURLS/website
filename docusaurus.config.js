// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'YOURLS',
  tagline: 'Your Own URL Shortener',
  url: 'https://yourls.org',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'assets/images/favicon.svg',

  // GitHub pages deployment config.
  organizationName: 'YOURLS',
  projectName: 'website',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/YOURLS/website/edit/main/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'YOURLS',
        logo: {
          alt: 'YOURLS Logo',
          src: 'assets/images/favicon.svg',
        },
        items: [
          {
            type: 'search',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'introduction',
            position: 'right',
            label: 'Docs',
          },
          {
            type: 'docSidebar',
            position: 'right',
            sidebarId: 'dev',
            label: 'Development',
          },
          { to: '/blog', label: 'Blog', position: 'right' },
          {
            type: 'dropdown',
            position: 'right',
            label: 'Resources',
            items: [
              {
                label: 'Awesome YOURLS',
                href: 'https://github.com/YOURLS/awesome-yourls',
              },
              {
                label: 'Plugin sample',
                href: 'https://github.com/YOURLS/plugin-sample',
              },
            ],
          },
          {
            type: 'dropdown',
            position: 'right',
            label: 'References',
            items: [
              { label: 'Hooklist', href: 'https://yourls.org/hooklist.php' },
              { label: 'XRef', href: 'https://yourls.org/xref/' },
            ],
          },
          { to: 'sponsor', label: 'Sponsor', position: 'right' },
          {
            href: 'https://github.com/YOURLS/YOURLS',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Code licensed MIT, documentation CC BY 4.0<br>Copyright © 2009-present · YOURLS Contributors`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['php', 'apacheconf', 'nginx'],
      },
      algolia: {
        appId: '0OPRSQO7WN',
        apiKey: '690f80e826ffeb1920dea258742fb626',
        indexName: 'yourls',
      },
    }),
}

module.exports = config
