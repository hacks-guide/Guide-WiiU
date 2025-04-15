/*
  Copyright (C) 2024 Nintendo Homebrew
  SPDX-License-Identifier: MIT
*/

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

import container from 'markdown-it-container'

import * as i18n from './i18n'

export default defineConfig({
  title: "Wii U Hacks Guide",
  description: "A guide to hacking the Nintendo Wii U.",
  head: [['link', { rel: 'icon', href: '/assets/img/favicon.ico' }]],
  locales: {
    root: i18n.en_US,
    hu_HU: i18n.hu_HU,
    de_DE: i18n.de_DE
  },
  sitemap: {
    hostname: 'https://wiiu.hacks.guide'
  },
  themeConfig: {
    docFooter: {
      prev: false,
      next: false
    },
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/C29hYvh' },
      { icon: 'github', link: 'https://github.com/hacks-guide/Guide-WiiU' }
    ]
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPHero\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPHero.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPFooter.vue', import.meta.url)
          )
        }
      ]
    }
  },
  markdown: {
    config: (md) => {
      md.use(container, "tabs", {
        render: (tokens, idx) => {
          const token = tokens[idx];
          if (token.nesting === 1) {
            return `<Tabs ${token.info}>\n`;
          } else {
            return `</Tabs>\n`;
          }
        }
      });
      md.use(container, 'tab', {
        render: (tokens, idx) => {
          const token = tokens[idx];
          if (token.nesting === 1) {
            let tokenData = token.info.match(/^ ?tab\s(default\s)?(.*)$/);
            let isDefault = typeof tokenData[1] !== 'undefined';
            let name = tokenData[2];
            return `<Tab name="${name}" ${isDefault ? "default=true" : ""}>`;
          } else {
            return `</Tab>\n`;
          }
        }
      });
    }
  },
  srcExclude: [
    'ar_SA/**',
    'ca_ES/**',
    'cs_CZ/**',
    'da_DK/**',
    'el_GR/**',
    'es_ES/**',
    'et_EE/**',
    'fi_FI/**',
    'fr_FR/**',
    'he_IL/**',
    'hr_HR/**',
    'id_ID/**',
    'it_IT/**',
    'ja_JP/**',
    'ko_KR/**',
    'ms_MY/**',
    'nl_NL/**',
    'no_NO/**',
    'pl_PL/**',
    'pt_BR/**',
    'pt_PT/**',
    'ro_RO/**',
    'ru_RU/**',
    'sv_SE/**',
    'th_TH/**',
    'tr_TR/**',
    'uk_UA/**',
    'vi_VN/**',
    'zh_CN/**',
    'zh_TW/**'
  ]
})
