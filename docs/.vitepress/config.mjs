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
    root: i18n.en_US
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hacks-guide/Guide-WiiU' }
    ]
  },
  vite: {
    resolve: {
      alias: [
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
            return `<Tab name="${token.info.match(/^ ?tab\s+(.*)$/)[1]}">`;
          } else {
            return `</Tab>\n`;
          }
        }
      });
    }
  }
})
