# Wii U Hacks Guide

Nintendo Wii U homebrew guide written by staff members of the [Nintendo Homebrew Discord server.](https://discord.gg/C29hYvh)

https://wiiu.hacks.guide/

## Running the site locally

This requires the following installed on your system:

* [node.js](https://nodejs.org/en)

To test the website locally, clone the source code:

```bash
git clone https://github.com/hacks-guide/Guide-WiiU.git --recurse-submodules
cd Guide-WiiU
```

> [!NOTE]
> You must use `--recurse-modules` or you will hit an error like `Failed to resolve import "@theme/index" from "node_modules/vitepress/dist/client/app/index.js?v=19e6628c"` when running. If you've already cloned, you can initialize the submodules manually: `git submodule update --init --recursive`.

Then simply run the following commands:

```bash
npm ci
npm run docs:dev
```

The website should now be running on http://127.0.0.1:5173/ (or a port shown on the terminal). Any edits you make should appear live!