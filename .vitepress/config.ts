import baseConfig from '@vue/theme/config'
import {
  defineConfigWithTheme,
  HeadConfig,
  UserConfig
} from 'vitepress'
import type { Config } from '@vue/theme'
import { NavItem, SidebarConfig } from '@vue/theme/src/vitepress/config'

const title = 'YOURLS Documentation'
const description = 'Your Own URL Shortener'
const site = 'https://docs.yourls.org'
const image = `${site}/banner.png`

const head: HeadConfig[] = [
  ['meta', { name: 'author', content: 'YOURLS Community' }],
  [
    'meta',
    { name: 'keywords', content: 'yourls, shortner, url, bitly' },
  ],
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
  { text: 'Docs', link: '/guide/quick-start' },
  {
    text: 'Ecosystem',
    items: [
      {
        text: 'Ressources',
        items: [
          { text: 'Awesome YOURLS', link: 'https://github.com/awesome-yourls' },
        ],
      },
      {
        text: 'Documentation',
        items: [
          { text: 'Laravel', link: 'https://laravel.com/' },
          { text: 'Vue.js', link: 'https://vuejs.org/' },
        ],
      },
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
      ],
    },
    {
      text: 'Essentials',
      items: [
        { text: 'Development', link: '/guide/essentials/development' },
        {
          text: 'Server and manifest modes',
          link: '/guide/essentials/server-and-manifest-modes',
        },
        {
          text: 'Working with assets',
          link: '/guide/essentials/working-with-assets',
        },
        { text: 'Configuration', link: '/guide/essentials/configuration' },
        {
          text: 'Building for production',
          link: '/guide/essentials/building-for-production',
        },
        { text: 'Tag generation', link: '/guide/essentials/tag-generation' },
      ],
    },
    {
      text: 'Features',
      items: [
        { text: 'Entrypoints', link: '/guide/features/entrypoints' },
        { text: 'Directives', link: '/guide/features/directives' },
        { text: 'Helpers', link: '/guide/features/helpers' },
        { text: 'SSR', link: '/guide/features/ssr' },
      ],
    },
    {
      text: 'Extra topics',
      items: [
        { text: 'Vite with Inertia', link: '/guide/extra-topics/inertia' },
        {
          text: 'Multiple configurations',
          link: '/guide/extra-topics/multiple-configurations',
        },
        { text: 'Path to PHP', link: '/guide/extra-topics/php-path' },
        {
          text: 'Troubleshooting',
          link: '/guide/extra-topics/troubleshooting',
        },
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
      appId: '',
      apiKey: '',
      indexName: '',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YOURLS/YOURLS' },
    ],

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
