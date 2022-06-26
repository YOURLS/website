// https://vitepress.vuejs.org/config/introduction.html

import { defineConfig } from 'vitepress'

import { head } from './config/head'
import { navbar as nav } from './config/navbar'
import { sidebar } from './config/sidebar'

const title = 'YOURLS Documentation'
const description = 'Your Own URL Shortener'
const site = 'https://docs.yourls.org'
const image = `${site}/banner.png`

export default defineConfig({
  title,
  description,
  head: head(site, title, description, image),

  lastUpdated: true,

  themeConfig: {
    nav,
    sidebar,

    siteTitle: 'YOURLS Docs',
    logo: '/favicon.svg',

    editLink: {
      pattern: 'https://github.com/YOURLS/docs/edit/main/src/:path',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/YOURLS/YOURLS' }],

    footer: {
      message: 'Code licensed MIT, documentation CC BY 4.0.',
      copyright: 'Copyright © 2009-present · YOURLS Contributors',
    },

    algolia: {
      appId: '0OPRSQO7WN',
      apiKey: 'a80dd06f8a0a36b8734e02e549324791',
      indexName: 'yourls',
    },
  },
})
