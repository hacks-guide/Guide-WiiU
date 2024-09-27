# Gyakran isméltelt kérdések

## Does homebrew have any risks?

Jelenleg a homebrew használata Wii U-n nem jelent bannolási kockázatot, amíg nem csalsz az online játékokban és nem követsz el eShop csalást. Azonban mindig legyél elővigyázatos a letöltött homebrew-ok indításával, különösen ha nem bízol meg a forrásban, mert egy homebrew elronthatja a rendszered!

## What are exploits?

Az exploit-ok olyan belépési pontok, amik lehetővé teszik továbi homebrew-ok futtatását. In the main guide, you will use exploits such as the browser exploit (http://wiiuexploit.xyz) and PayloadLoader (Health & Safety exploit). All current exploits load `SD:/wiiu/payload.elf` which takes over further loading of homebrew.

## What are payloads?

Payloads, which are normally found with the filename `payload.elf`, exist to make it easier to have different exploits load the same next stage, which allows easier updateability. Nem számít, hogy milyen exploit tölti be a payload-ot, az eredmény mindig ugyanaz.

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

## Tudok telepíteni homebrew-t Wii U-ra egy USB-vel az SD kártya helyett?

Nem, szükséged van egy SD kártyára az első beállításhoz. Az USB ezután használható játékmentések, Virtual Console injektálástok, stb. telepítéséhez, de nem arra, hogy olyan homebrew alkalmazásokat tároljanak, amit telepíteni kell.

## When extracting some of the files there are duplicates of certain ones called "info.json" & "manifest.install", what do I do with those?

Semmi különöset, hagy őket ott, töröld őket, vagy is felül az újakkal. Ezek a fájlok nem használtak a folyamatban, így nem számít, hogy ott vannak-e vagy sem.

## Milyen egy Wii U formázott USD drive?

It's a USB drive that has been formatted by a Wii U console to its proprietary format.

A Wii U formatted USB drive _**cannot be read by any other devices than the Wii U that originally formatted it.**_

If you ever want to use it with another Wii U console or any other devices, you will have to reformat it.
