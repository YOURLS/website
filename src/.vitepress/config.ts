import {
  defineConfig,
  HeadConfig,
} from 'vitepress'

import { navbar as nav } from './config/navbar'
import { sidebar } from './config/sidebar'

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

export default defineConfig({
  title,
  head,
  description,

  lastUpdated: true,

  themeConfig: {
    nav,
    sidebar,

    siteTitle: 'YOURLS Docs',
    logo: '/favicon.svg',

    editLink: {
      pattern: 'https://github.com/YOURLS/docs/edit/main/src/:path'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YOURLS/YOURLS' },
    ],

    footer: {
      message: 'Code licensed MIT, documentation CC BY 4.0.',
      copyright: 'Copyright © 2009-present · YOURLS Contributors'
    },

    algolia: {
      appId: '0OPRSQO7WN',
      apiKey: 'a80dd06f8a0a36b8734e02e549324791',
      indexName: 'yourls',
    },
  },
})
