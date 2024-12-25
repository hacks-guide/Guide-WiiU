# Contributing

Here's how you can contribute to this guide.

## Prerequisites

* [Install NodeJS](https://nodejs.org/en/download/package-manager)
* Clone this repository (and submodules!):
  * `git clone --recurse-submodules -j8  https://github.com/hacks-guide/Guide-WiiU.git`
  * If you've already cloned, initialize the submodules: `git submodule update --init --recursive`
* `cd Guide-WiiU/`
* Install the dependencies (`npm install`)

## Inner loop

In a Terminal `cd`'d to this directory:

1. `npm run docs:dev`

Done! Any edits you make should be reflected live.

## Troubleshooting

### Failed to resolve import "@theme/index" from "node_modules/vitepress/dist/client/app/index.js?v=19e6628c". Does the file exist?

You need to clone the submodules:

```bash
git submodule update --init --recursive
```