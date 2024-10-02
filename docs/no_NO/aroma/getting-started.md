---
next: true
---

# Aroma

Aroma er ett work-in-progress environment og har tatt over for Tiramisu.

## Hva er Aroma?

Aroma is an environment like Tiramisu, which can be booted through the Environment Loader.\
Aroma, just like Tiramisu, uses the same Mocha version, support for setup modules, and comes with the Autoboot Module, which includes the boot selector and Quick Start support.\
Aroma comes with several additional features, including a plugin system, a new way of launching homebrews, and many built-in modules and plugins (i.e. Region Free patches).

## Hva kan jeg gjøre med Aroma?

For a detailed overview check out [this blogpost](https://maschell.github.io/homebrew/2022/09/05/aroma.html). Her kommer det en kjapp oppsummering.

### Modules

Aroma supports modules which, unlike setup modules, always run in the background.\
This allows for further extending the functionality of the console.

### Plugins

Plugins, similarly to modules, are also running in the background.\
They can enhance the experience of the console by changing and providing additional features.\
Plugins can be configured using a configuration menu, which can be opened using a button combination.

### Wii U Homebrew Bundles

Wii U Homebrew Bundles (WUHB) are a new way of launching homebrew.\
These `.wuhb` files contain the main executable and can directly include icon and banner images and additional content.\
With the `homebrew_on_menu` plugin, WUHB files can be directly launched from the Wii U menu, just like official channels.

## Hva er begrensningene?

Due to technical limitations, a lot of old homebrew applications will no longer work with Aroma.\
This includes all `.elf` homebrews, but also some `.rpx` homebrews(i.e. RetroArch), which don't implement necessary functionality properly.\
These homebrews need to be updated with support for Aroma. To run old homebrews you need to boot the Tiramisu environment.\
Launching homebrews through the now outdated Homebrew Launcher is no longer possible with Aroma.

I tillegg til begrensningene nevnt ovenfor skal det bemerkes at Aroma fortsatt er en betaversjon. Ikke alt er testet ennå, og eventuelle ytterligere problemer kan bli oppdaget. Dette betyr ikke at Aroma er ustabilt, men det er en mulighet for at du kan oppleve noe som ikke fungerer helt som det skal.
