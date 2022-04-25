import { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
  '/guide/': [
    {
      text: 'Getting started',
      children: [
        '/guide/introduction.md',
        '/guide/install.md',
        '/guide/server-configuration.md',
        '/guide/upgrade.md',
      ],
    },
    {
      text: 'Essentials',
      children: [
        '/guide/essentials/configuration.md',
        '/guide/essentials/credentials.md',
        '/guide/essentials/private-or-public.md',
        '/guide/essentials/charset.md',
      ],
    },
    {
      text: 'Extend',
      children: [
        '/guide/extend/plugins.md',
        '/guide/extend/pages.md',
        '/guide/extend/languages.md',
        '/guide/extend/possible-with-a-plugin.md',
      ],
    },
    {
      text: 'Advanced',
      children: [
        '/guide/advanced/passwordless-api.md',
        '/guide/advanced/proxy.md',
        '/guide/advanced/public-shortening.md',
        '/guide/advanced/custom-protocols.md',
      ],
    },
    {
      text: 'Troubleshooting',
      children: [
        '/guide/troubleshooting/first-steps.md',
        '/guide/troubleshooting/frequent-issues.md',
        '/guide/troubleshooting/abuse.md',
      ],
    },
  ],
  '/development/': [
    {
      text: 'Getting started',
      children: [
        '/development/plugins.md',
        '/development/dont-hack-core.md',
        '/development/coding-standards.md',
        '/development/hooks.md',
        '/development/database-queries.md',
        '/development/form-security.md',
        '/development/i18n.md',
        '/development/debugging.md',
      ],
    },
    {
      text: 'Examples',
      children: [
        { text: 'QRCode Link', link: '/development/examples/qrcode.md' },
        { text: 'Preview URL', link: '/development/examples/preview.md' },
        {
          text: 'Public Prefix-N-Shorten',
          link: '/development/examples/public-prefix.md',
        },
        { text: 'RSS', link: '/development/examples/rss.md' },
      ],
    },
  ],
}
