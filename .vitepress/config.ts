import baseConfig from '@vue/theme/config'
import { defineConfigWithTheme, HeadConfig, UserConfig } from 'vitepress'
import type { Config } from '@vue/theme'
import { NavItem, SidebarConfig } from '@vue/theme/src/vitepress/config'

const title = 'YOURLS Documentation'
const description = 'Your Own URL Shortener'
const site = 'https://docs.yourls.org'
const image = `${site}/banner.png`

const head: HeadConfig[] = [
  ['meta', { name: 'author', content: 'YOURLS Community' }],
  ['meta', { name: 'keywords', content: 'yourls, shortner, url, bitly' }],
  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  ['meta', { name: 'HandheldFriendly', content: 'True' }],
  ['meta', { name: 'MobileOptimized', content: '320' }],
  ['meta', { name: 'theme-color', content: '#88c0eb' }],
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:site', content: site }],
  ['meta', { name: 'twitter:title', value: title }],
  ['meta', { name: 'twitter:description', value: description }],
  ['meta', { name: 'twitter:image', content: image }],
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:locale', content: 'en_US' }],
  ['meta', { property: 'og:site', content: site }],
  ['meta', { property: 'og:site_name', content: title }],
  ['meta', { property: 'og:title', content: title }],
  ['meta', { property: 'og:image', content: image }],
  ['meta', { property: 'og:description', content: description }],
]

const nav: NavItem[] = [
  {
    text: 'Docs',
    link: '/guide/quick-start',
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
      // {
      //   text: 'Documentation',
      //   items: [
      //     { text: 'Laravel', link: 'https://laravel.com/' },
      //     { text: 'Vue.js', link: 'https://vuejs.org/' },
      //   ],
      // },
    ],
  },
  { text: 'Sponsor', link: '/sponsor' },
]

const sidebar: SidebarConfig = {
  '/guide/': [
    {
      text: 'Getting started',
      items: [
        { text: 'Introduction', link: '/guide/introduction' },
        { text: 'Quick start', link: '/guide/quick-start' },
        { text: 'Server configuration', link: '/guide/server-configuration' },
      ],
    },
    {
      text: 'Essentials',
      items: [
        { text: 'Configuration', link: '/guide/essentials/configuration' },
        { text: 'Credentials', link: '/guide/essentials/credentials' },
        { text: 'Private/Public', link: '/guide/essentials/private-or-public' },
        { text: 'Character set', link: '/guide/essentials/charset' },
      ],
    },
    {
      text: 'Extend',
      items: [
        { text: 'Plugins', link: '/guide/extend/plugins' },
        { text: 'Pages', link: '/guide/extend/pages' },
        { text: 'Languages', link: '/guide/extend/languages' },
        {
          text: 'Possible with a plugin',
          link: '/guide/extend/possible-with-a-plugin',
        },
      ],
    },
    {
      text: 'Advanced',
      items: [
        { text: 'Passwordless API', link: '/guide/advanced/passwordless-api' },
        { text: 'Proxy', link: '/guide/advanced/proxy' },
        {
          text: 'Public shortening',
          link: '/guide/advanced/public-shortening',
        },
        { text: 'Custom protocols', link: '/guide/advanced/custom-protocols' },
      ],
    },
    {
      text: 'Troubleshooting',
      items: [
        { text: 'First steps', link: '/guide/troubleshooting/first-steps' },
        {
          text: 'Frequent issues',
          link: '/guide/troubleshooting/frequent-issues',
        },
        { text: 'Abuse', link: '/guide/troubleshooting/abuse' },
      ],
    },
  ],
  '/development/': [
    {
      text: 'Getting started',
      items: [
        { text: 'Plugins', link: '/development/plugins' },
        { text: "Don't hack core", link: '/development/dont-hack-core' },
        { text: 'Coding standards', link: '/development/coding-standards' },
        { text: 'Database', link: '/development/database-queries' },
        { text: 'Hooks', link: '/development/hooks' },
        { text: 'i18n', link: '/development/i18n' },
        { text: 'Debugging', link: '/development/debugging' },
      ],
    },
    {
      text: 'Examples',
      items: [
        { text: 'QRCode Link', link: '/development/examples/qrcode' },
        { text: 'Preview URL', link: '/development/examples/preview' },
        {
          text: 'Public Prefix-N-Shorten',
          link: '/development/examples/public-prefix',
        },
        { text: 'RSS', link: '/development/examples/rss' },
      ],
    },
  ],
}

export default defineConfigWithTheme<Config>({
  extends: baseConfig as () => UserConfig<Config>,
  title,
  head,
  description,
  lang: 'en-US',
  scrollOffset: 'header',
  srcDir: 'src',

  themeConfig: {
    nav,
    sidebar,

    algolia: {
      appId: '0OPRSQO7WN',
      apiKey: 'a80dd06f8a0a36b8734e02e549324791',
      indexName: 'yourls',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/YOURLS/YOURLS' }],

    editLink: {
      repo: 'YOURLS/docs',
      text: 'Edit this page on Github',
    },

    footer: {
      license: {
        text: 'MIT License',
        link: 'https://opensource.org/licenses/MIT',
      },
      copyright: `Copyright © 2009-${new Date().getFullYear()} · YOURLS Contributors`,
    },
  },

  vite: {
    server: {
      host: true,
      fs: {
        allow: ['../..'],
      },
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity,
    },
    json: {
      stringify: true,
    },
  },
})
