import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'DPDR Wiki',
  tagline: '人格解体-现实解体障碍知识库',
  favicon: 'img/favicon.ico',

  url: 'https://wiki.depersonalization.site',
  baseUrl: '/',

  organizationName: 'Sisi-Wiciel',
  projectName: 'dpd-wiki',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Sisi-Wiciel/dpd-wiki/edit/main/',
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'DPDR Wiki',
      logo: {
        alt: 'DPDR Wiki Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '知识库',
        },
        {
          href: '/docs/references/综述/综述',
          position: 'left',
          label: '文献',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/Sisi-Wiciel/dpd-wiki',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '知识库',
          items: [
            {
              label: '症状与诊断',
              to: '/docs/symptoms/depersonalization',
            },
            {
              label: '应对策略',
              to: '/docs/strategies/landing-techniques',
            },
            {
              label: '资源',
              to: '/docs/resources/reading-list',
            },
          ],
        },
        {
          title: '关于',
          items: [
            {
              label: '关于本站',
              to: '/docs/about',
            },
            {
              label: '免责声明',
              to: '/docs/disclaimer',
            },
          ],
        },
        {
          title: '链接',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Sisi-Wiciel/dpd-wiki',
            },
            {
              label: 'DPDR Portal',
              href: 'https://home.depersonalization.site',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DPDR Wiki. Built with Docusaurus. 本网站内容仅供科普，不构成医疗建议。`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
