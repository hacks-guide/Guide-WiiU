# Wii U Hacks Guide

A guide collaboration between Nintendo Homebrew's Helpers and Staff, from stock to Aroma custom firmware.

[![Website Badge](https://img.shields.io/badge/website-wiiu.hacks.guide-009AC7?logo=vitepress&logoColor=FFFFFF)](https://wiiu.hacks.guide/)
[![Translation Badge](https://img.shields.io/badge/translation-contribute-263238?logo=crowdin&logoColor=FFFFFF)](https://hacks-guide.crowdin.com/u/projects/10)
[![Discord Server](https://img.shields.io/badge/chat-nintendo%20homebrew-7289DA?logo=discord&logoColor=FFFFFF)](https://discord.gg/C29hYvh)
[![Last Commit Badge](https://img.shields.io/github/last-commit/hacks-guide/Guide-WiiU)](https://github.com/hacks-guide/Guide-WiiU/commits/master/)
![Language Count](https://img.shields.io/badge/languages-3-brightgreen)
[![ISC License](https://img.shields.io/badge/license-ISC-0081C5)](https://github.com/hacks-guide/Guide-WiiU/blob/master/LICENSE.md)

## Running the site locally

This requires the following installed on your system:

* [node.js](https://nodejs.org/en)

To test the website locally, clone the source code:

```bash
git clone https://github.com/hacks-guide/Guide-WiiU.git --recurse-submodules
cd Guide-WiiU
```

Then simply run the following commands:

```bash
npm ci
npm run docs:dev
```

> [!TIP]
> If you choose to run multiple web servers at once, they will begin running at the next highest usable port (e.g. :5174, :5175, and so on).

The website should now be running on <http://127.0.0.1:5173/> (or whatever port is shown on the terminal).
