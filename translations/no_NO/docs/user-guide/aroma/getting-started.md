# Aroma {docsify-ignore-all}

Aroma er ett work-in-progress environment og har tatt over for Tiramisu.

### Hva er Aroma?

Aroma is an environment like Tiramisu, which can be booted through the Environment Loader.  
Aroma, just like Tiramisu, uses the same Mocha version, support for setup modules, and comes with the Autoboot Module, which includes the boot selector and Quick Start support.  
Aroma comes with several additional features, including a plugin system, a new way of launching homebrews, and many built-in modules and plugins (i.e. Region Free patches).

### Hva kan jeg gjøre med Aroma?

For en detaljert oversikt, sjekk ut [denne bloggen](https://maschell.github.io/homebrew/2022/09/05/aroma.html). Her kommer det en kjapp oppsummering.

#### Modules

Aroma supports modules which, unlike setup modules, always run in the background.  
This allows for further extending the functionality of the console.

#### Plugins

Plugins, i likhet med modules, kjører også i bakgrunnen.  
De kan forbedre opplevelsen på konsollen ved å endre og tilby flere funksjoner.  
Plugins kan konfigureres i configuration menu, spm man åpner ved å trykke en knappekombinasjon.

#### Wii U Homebrew Bundles

Wii U Homebrew Bundles (WUHB) er en ny måte å kjøre homebrew på.  
Disse `.wuhb` filene inneholder hovedfilen og inkluderer både ikon og bannerbilder og ekstra innhold.  
Med `homebrew_on_menu` plugin, kan WUHB filer kjøres direkte fra Wii U menu, akkurat som offisielle channels.

### Hva er begrensningene?

Due to technical limitations, a lot of old homebrew applications will no longer work with Aroma.  
This includes all `.elf` homebrews, but also some `.rpx` homebrews(i.e. RetroArch), which don't implement necessary functionality properly.  
These homebrews need to be updated with support for Aroma. For å kjøre gamle homebrews må du starte Tiramisu environment.  
Det går ikke lenger ann å kjøre homebrew gjennom Homebrew Launcher i Aroma.

I tillegg til begrensningene nevnt ovenfor skal det bemerkes at Aroma fortsatt er en betaversjon. Ikke alt er testet ennå, og eventuelle ytterligere problemer kan bli oppdaget. This doesn't necessarily mean Aroma is unstable, but there is a chance that you may experience something not working properly.
