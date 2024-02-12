# Aroma {docsify-ignore-all}

Aroma is a work-in-progress environment and the successor to Tiramisu.

### Hva er Aroma?

Aroma er ett environment som Tiramisu, som kan bootes gjennom Environment Loader.  
Aroma, akkurat som Tiramisu, bruker den samme Mocha versionen, har støtte for setup modules, og kommer med Autoboot Module, som inkluderer boot selector og Quick Start support.  
Aroma kommer med flere tilleggsfunksjoner, inkludert et pluginsystem og en ny måte å starte homebrew på.

### Hva kan jeg gjøre med Aroma?

For en detaljert oversikt, sjekk ut [denne bloggen](https://maschell.github.io/homebrew/2022/09/05/aroma.html). Her kommer det en kjapp oppsummering.

#### Modules

Aroma støtter modules, som alltid kjører i bakgrunnen, i motsetning til setup modules.  
Dette gjør det mulig å få mere funksjoner ut av konsollen.

#### Plugins

Plugins, i likhet med modules, kjører også i bakgrunnen.  
De kan forbedre opplevelsen på konsollen ved å endre og tilby flere funksjoner.  
Plugins kan konfigureres i configuration menu, spm man åpner ved å trykke en knappekombinasjon.

#### Wii U Homebrew Bundles

Wii U Homebrew Bundles (WUHB) er en ny måte å kjøre homebrew på.  
Disse `.wuhb` filene inneholder hovedfilen og inkluderer både ikon og bannerbilder og ekstra innhold.  
Med `homebrew_on_menu` plugin, kan WUHB filer kjøres direkte fra Wii U menu, akkurat som offisielle channels.

### Hva er begrensningene?

På grunn av tekniske begrensninger vil ikke mange gamle homebrew apper lenger virke i Aroma.  
Dette inkluderer allel `.elf` homebrews, men også noen `.rpx` homebrews, som ikke oversetter funksjonene riktig.  
Disse homebrew appene må bli oppdatert med Aroma support. For å kjøre gamle homebrews må du starte Tiramisu environment.  
Det går ikke lenger ann å kjøre homebrew gjennom Homebrew Launcher i Aroma.

I tillegg til begrensningene nevnt ovenfor skal det bemerkes at Aroma fortsatt er en betaversjon. Ikke alt er testet ennå, og eventuelle ytterligere problemer kan bli oppdaget.  
