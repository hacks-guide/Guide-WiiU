---
next: true
---

# Aroma

Az Aroma egy fejlesztés alatt álló környezet a Tiramisu utódja.

## Mi az Aroma?

Aroma is an environment like Tiramisu, which can be booted through the Environment Loader.\
Aroma, just like Tiramisu, uses the same Mocha version, support for setup modules, and comes with the Autoboot Module, which includes the boot selector and Quick Start support.\
Aroma comes with several additional features, including a plugin system, a new way of launching homebrews, and many built-in modules and plugins (i.e. régió felszabadító patchek).

## Mit tudok az Aromával csinálni?

For a detailed overview check out [this blogpost](https://maschell.github.io/homebrew/2022/09/05/aroma.html). Egy gyors összefoglaló alább.

### Modulok

Aroma supports modules which, unlike setup modules, always run in the background.\
This allows for further extending the functionality of the console.

### Plugin-ek

Plugins, similarly to modules, are also running in the background.\
They can enhance the experience of the console by changing and providing additional features.\
Plugins can be configured using a configuration menu, which can be opened using a button combination.

### Wii U Homebrew Bundle-ök

Wii U Homebrew Bundles (WUHB) are a new way of launching homebrew.\
These `.wuhb` files contain the main executable and can directly include icon and banner images and additional content.\
With the `homebrew_on_menu` plugin, WUHB files can be directly launched from the Wii U menu, just like official channels.

## Mik a korlátozások?

Due to technical limitations, a lot of old homebrew applications will no longer work with Aroma.\
This includes all `.elf` homebrews, but also some `.rpx` homebrews(i.e. RetroArch), which don't implement necessary functionality properly.\
These homebrews need to be updated with support for Aroma. To run old homebrews you need to boot the Tiramisu environment.\
Launching homebrews through the now outdated Homebrew Launcher is no longer possible with Aroma.

A fent említett korlátozások mellett, érdemes megjegyezni, hogy az Aroma még mindig csak béta kiadás. Nem mindent tesztelt még, és tovább problémák még előkerülhetnek. Ez nem jelenti azt, hogy az Aroma instabil, de van rá esély, hogy azt tapasztalod, hogy valami nem megfelelően működik.
