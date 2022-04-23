import { defineUserConfig, HeadConfig } from 'vuepress'
import { DefaultThemeOptions } from '@vuepress/theme-default'

import { navbar } from './config/navbar'
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

export default defineUserConfig<DefaultThemeOptions>({
  title,
  head,
  description,
  lang: 'en-US',

  theme: '@vuepress/theme-default',
  themeConfig: {
    navbar,
    sidebar,

    repo: 'YOURLS/YOURLS',
    docsRepo: 'YOURLS/docs',
    docsDir: 'src',
    logo: '/favicon.svg',
    
    themePlugins: {
      git: false,
    },
  },

  plugins: [
    [
      '@vuepress/docsearch',
      {
        appId: '0OPRSQO7WN',
        apiKey: 'a80dd06f8a0a36b8734e02e549324791',
        indexName: 'yourls',
      },
    ],
  ],
})
