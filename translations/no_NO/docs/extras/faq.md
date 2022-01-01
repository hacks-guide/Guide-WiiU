# Ofte stilte spørsmål {docsify-ignore-all}
---

### Er det noen risikoer ved å bruke homebrew?

For øyeblikket er det ingen risiko for å bli banned av Nintendo ved bruk av homebrew med mindre du jukser i online spill, eller svindler eShop. Men du bør alltid være forsiktig med å kjøre nedlastede homebrew filer, spesielt hvis du ikke stoler på kilden, da homebrew kan potensielt skade systemet ditt!

### What are exploits?

Exploits are entry points which allow further homebrew to be run. In the main guide, you will use exploits such as the browser exploit (http://wiiuexploit.xyz) and PayloadLoader (Health & Safety exploit). All current exploits load `SD:/wiiu/payload.elf` which takes over further loading of homebrew.

### What are payloads?

Payloads, which are normally found with the filename `payload.elf`, exist to make it easier to have different exploits load the same next stage, which allows easier updateability. It doesn't matter what exploit loads the payload, the result is always the same. Multiple payloads can be switched between using the PayloadLoaderPayload. The payload used in the main guide is CustomRPXLoader which loads `SD:/wiiu/payload.rpx` and the `payload.rpx` used in the guide is EnvironmentLoader, which allows you to load different environments.

### What are environments?

An environment is a collection of "setup modules", which will be run in a certain order when launching the environment. One such environment is Tiramisu. Setup modules are small pieces of homebrew/code that are executed once to set up an environment.

### Can I install games from my USB instead of SD?

Ja. Men det er mer komplisert enn å installere fra ett SD-kort. Detaljerte instruksjoner finner du i `Installere fra USB` fanen i [Dump guiden](dump-games).

### How to Delete Update Folder to Block Updates on Wii U

Hvis du vil slette update mappa for å blokkere systemoppdateringer, skjekk ut hvordan man kan [Blokke Oppdateringer ](block-updates).

### What SD Card size is recommended?

 - **Installing game backups:** 32GB (Smaller size may be used, but certain titles are 20GB in size)
 - **Running game mods:** 8GB (FAT32 USB drive may be used as well for mods)
 - **Only running homebrew apps:** Any size.

**Anbefalte merkevarer:** SanDisk, Samsung eller PNY

?> Merk: Unngå class 4 SD-kort, og kort fra eBay!

### Can I install homebrew on Wii U with a USB instead of SD Card?

Nei, du må ha et SD-kort for et første gangs oppsett. En USB-enhet kan deretter brukes til å installere spill, VC injections osv, men ikke lagre homebrew apper som er nødvendig for å sette opp alt.

### Når jeg pakker ut noen av filene er det duplikater av noen som heter "info.json" & "manifest.install", hva gjør jeg med dem?

Du kan la dem ligge, slette dem eller kopiere over dem med de nye filene. Disse filene brukes ikke i prosessen, derfor er det ingen forskjell på om de er der eller ikke.

### What is a Wii U formatted USB drive?

Det er en USB lagringsenhet som er formatert av en Wii U konsoll til sitt proprietære format.  
En Wii U-formatert USB-enhet ***kan ikke leses av noen andre enheter enn Wii U konsollen som formaterte den. ***   
Hvis du vil bruke den med en annen Wii U konsoll eller en PC, må du formatere den igjen.
