---
next: true
---

# Aroma

Aroma è un Enviroment in continuo sviluppo ed è il successore di Tiramisu.

## Cos'è Aroma?

Aroma is an environment like Tiramisu, which can be booted through the Environment Loader.\
Aroma, just like Tiramisu, uses the same Mocha version, support for setup modules, and comes with the Autoboot Module, which includes the boot selector and Quick Start support.\
Aroma comes with several additional features, including a plugin system, a new way of launching homebrews, and many built-in modules and plugins (i.e. Region Free patches).

## Cosa si può fare con Aroma?

For a detailed overview check out [this blogpost](https://maschell.github.io/homebrew/2022/09/05/aroma.html). Di seguito puoi trovare un breve riassunto.

### Moduli

Aroma supports modules which, unlike setup modules, always run in the background.\
This allows for further extending the functionality of the console.

### Plugin

Plugins, similarly to modules, are also running in the background.\
They can enhance the experience of the console by changing and providing additional features.\
Plugins can be configured using a configuration menu, which can be opened using a button combination.

### Wii U Homebrew Bundles

Wii U Homebrew Bundles (WUHB) are a new way of launching homebrew.\
These `.wuhb` files contain the main executable and can directly include icon and banner images and additional content.\
With the `homebrew_on_menu` plugin, WUHB files can be directly launched from the Wii U menu, just like official channels.

## Quali sono le limitazioni?

Due to technical limitations, a lot of old homebrew applications will no longer work with Aroma.\
This includes all `.elf` homebrews, but also some `.rpx` homebrews(i.e. RetroArch), which don't implement necessary functionality properly.\
These homebrews need to be updated with support for Aroma. To run old homebrews you need to boot the Tiramisu environment.\
Launching homebrews through the now outdated Homebrew Launcher is no longer possible with Aroma.

Oltre alle limitazioni citate sopra, ricorda che Aroma è ancora una beta. Non tutto è stato ancora testato e nuovi problemi potrebbero ancora essere scoperti. This doesn't necessarily mean Aroma is unstable, but there is a chance that you may experience something not working properly.
