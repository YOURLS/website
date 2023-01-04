/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    {
      label: 'Getting started',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'guide/install',
        'guide/server-configuration',
        'guide/upgrade',
      ],
    },
    {
      label: 'Essentials',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'guide/essentials/configuration',
        'guide/essentials/credentials',
        'guide/essentials/private-or-public',
        'guide/essentials/charset',
      ],
    },
    {
      label: 'Extend',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'guide/extend/plugins',
        'guide/extend/pages',
        'guide/extend/languages',
        'guide/extend/possible-with-a-plugin',
      ],
    },
    {
      label: 'Advanced',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'guide/advanced/passwordless-api',
        'guide/advanced/proxy',
        'guide/advanced/public-shortening',
        'guide/advanced/custom-protocols',
      ],
    },
    {
      label: 'Troubleshooting',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'guide/troubleshooting/first-steps',
        'guide/troubleshooting/frequent-issues',
        'guide/troubleshooting/abuse',
      ],
    },
  ],
  dev: [
    'development/plugins',
    'development/dont-hack-core',
    'development/coding-standards',
    'development/hooks',
    'development/database-queries',
    'development/form-security',
    'development/i18n',
    'development/debugging',
    {
      label: 'Examples',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'development/examples/qrcode',
        'development/examples/preview',
        'development/examples/public-prefix',
        'development/examples/rss',
      ],
    },
  ],
}

module.exports = sidebars
