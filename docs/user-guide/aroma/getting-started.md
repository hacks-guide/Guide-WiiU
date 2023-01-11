# Aroma {docsify-ignore-all}

Aroma is a work-in-progress environment and a possible successor for Tiramisu.

!> **Aroma is currently in beta and still experimental!**  
Expect potential issues and make sure to report them, if you encounter any.  
If you still want to proceed, make sure to fully read this page.

?> This guide will not remove Tiramisu. After following this guide you can still choose to boot into Tiramisu.

### What is Aroma?

Aroma is an environment like Tiramisu, which can be booted through the Environment Loader.  
Aroma, just like Tiramisu, uses the same Mocha version, support for setup modules, and comes with the Autoboot Module, which includes the boot selector and Quick Start support.  
Aroma comes with several additional features, including a plugin system and a new way of launching homebrews.

### What can I do with Aroma?

For a detailed overview check out [this blogpost](https://maschell.github.io/homebrew/2022/09/05/aroma.html). A quick summary is given below.

#### Modules

Aroma supports modules, which unlike setup modules, always run in the background.  
This allows further extending the functionality of the console.

#### Plugins

Plugins, similarly to modules, are also running in the background.  
They can enhance the experience of the console by changing and providing additional features.  
Plugins can be configured using a configuration menu, which can be opened using a button combination.

#### Wii U Homebrew Bundles

Wii U Homebrew Bundles (WUHB) are a new way of launching homebrew.  
These `.wuhb` files contain the main executable and can directly include icon and banner images and additional content.  
With the `homebrew_on_menu` plugin, WUHB files can be directly launched from the Wii U menu, just like official channels.

### What are the limitations?

Due to technical limitations, a lot of old homebrew applications will no longer work with Aroma.  
This includes all `.elf` homebrews, but also some `.rpx` homebrews, which don't implement necessary functionality properly.  
These homebrews need to be updated with support for Aroma. To run old homebrews you need to boot the Tiramisu environment.  
Launching homebrews through the now outdated Homebrew Launcher is no longer possible with Aroma.  

Besides the limitations mentioned above, note that Aroma is still a beta release. Not everything has been tested yet, and additional issues might be discovered.  

### Getting started

Before continuing to the next page, make sure to install the PayloadLoader.  
This can be done by following the [Tiramisu guide](../tiramisu/sd-preparation).
