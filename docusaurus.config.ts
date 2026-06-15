import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '五只小鸭去游泳',
  tagline: '献给最棒的小读者 ❤️',
  favicon: 'img/favicon.svg',

  future: {v4: true},

  url: 'https://jeekeagle.github.io',
  baseUrl: '/mychild/',

  organizationName: 'jeekeagle',
  projectName: 'mychild',

  onBrokenLinks: 'warn',

  i18n: {defaultLocale: 'zh-Hans', locales: ['zh-Hans']},

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/jeekeagle/mychild/edit/main/',
          routeBasePath: '/',
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {defaultMode: 'light', disableSwitch: false, respectPrefersColorScheme: false},
    metadata: [
      {name: 'Cache-Control', content: 'no-cache, no-store, must-revalidate'},
      {name: 'Pragma', content: 'no-cache'},
      {name: 'Expires', content: '0'},
    ],
    navbar: {
      title: '五只小鸭去游泳',
      logo: {alt: '五', src: 'img/logo.svg'},
      items: [
        {to: '/', label: '🏠 首页', position: 'left'},
        {type: 'search', position: 'right'},
        {href: 'https://github.com/jeekeagle/mychild', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: '所有故事',
          items: [

            {label: '五只小鸭去游泳', to: '/stories/01/index'},

            {label: '公主与王子', to: '/stories/02/index'},

            {label: '小朵朵的勇敢探索', to: '/stories/03/index'},

            {label: '怪兽总动员', to: '/stories/04/index'},

          ],
        },
        {
          title: '更多',
          items: [
            {label: 'GitHub 仓库', href: 'https://github.com/jeekeagle/mychild'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} jeekeagle · 五只小鸭去游泳 · 用爱制作 ❤️`,
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  } satisfies Preset.ThemeConfig,
};

export default config;
