# Ofte Stilte Spørsmål

## Does homebrew have any risks?

For øyeblikket er det ingen risiko for å bli banned av Nintendo ved bruk av homebrew med mindre du jukser i online spill, eller svindler eShop. Men du bør alltid være forsiktig med å kjøre nedlastede homebrew filer, spesielt hvis du ikke stoler på kilden, da homebrew kan potensielt skade systemet ditt!

## What are exploits?

Exploits er inngangsporter man kan utnytte for å kjøre homebrew. In the main guide, you will use exploits such as the browser exploit (http://wiiuexploit.xyz) and PayloadLoader (Health & Safety exploit). All current exploits load `SD:/wiiu/payload.elf` which takes over further loading of homebrew.

## What are payloads?

Payloads, which are normally found with the filename `payload.elf`, exist to make it easier to have different exploits load the same next stage, which allows easier updateability. Det har ingenting å si hvilket exploit som loader payload, resultatet vil alltid være det samme.

Multiple payloads can be switched between using the PayloadLoaderPayload.

The payload used in the main guide is CustomRPXLoader which loads `SD:/wiiu/payload.rpx` and the `payload.rpx` used in the guide is EnvironmentLoader, which allows you to load different environments.

## What are environments?

An environment is a collection of "setup modules", which will be run in a certain order when launching the environment. Such environments are Aroma and Tiramisu.

Setup modules are small pieces of homebrew/code that are executed once to set up an environment.

## How to Delete Update Folder to Block Updates on Wii U

If you want to delete the update folder to block updates, see its tab in the [Blocking Updates guide](block-updates).

## What SD Card size is recommended?

- **Installing game backups:** 32GB (Smaller size may be used, but certain titles are 20GB in size)
- **Running game mods:** 8GB (FAT32 USB drive may be used as well for mods)
- **Only running homebrew apps:** Any size.

**Recommended brands:** SanDisk, Samsung or PNY

::: tip

Note: Avoid class 4 SD Cards, and avoid eBay!

:::

## Kan jeg installere homebrew på Wii U med en USB penn i stedenfor ett SD-kort?

Nei, du må ha et SD-kort for et første gangs oppsett. En USB-enhet kan deretter brukes til å installere spill, VC injections osv, men ikke lagre homebrew apper som er nødvendig for å sette opp alt.

## When extracting some of the files there are duplicates of certain ones called "info.json" & "manifest.install", what do I do with those?

Du kan la dem ligge, slette dem eller kopiere over dem med de nye filene. Disse filene brukes ikke i prosessen, derfor er det ingen forskjell på om de er der eller ikke.

## Hva er en Wii U formatert USB lagringsenhet?

It's a USB drive that has been formatted by a Wii U console to its proprietary format.

A Wii U formatted USB drive _**cannot be read by any other devices than the Wii U that originally formatted it.**_

If you ever want to use it with another Wii U console or any other devices, you will have to reformat it.
