# Frequently Asked Questions

## Does homebrew have any risks?

Attualmente, modificare il Wii U non ti espone al rischio di venire bannato da Nintendo a meno che non usi trucchi su giochi online, o se commetti frode sull'eShop. Dovresti, tuttavia, fare sempre attenzione quando avvii homebrew scaricati, specialmente se non ti fidi della fonte, dato che potenzialmente gli homebrew possono danneggiare il tuo sistema!

## What are exploits?

Un exploit è un punto d'entrata che permette di eseguire ulteriore homebrew. In the main guide, you will use exploits such as the browser exploit (http://wiiuexploit.xyz) and PayloadLoader (Health & Safety exploit). All current exploits load `SD:/wiiu/payload.elf` which takes over further loading of homebrew.

## What are payloads?

Payloads, which are normally found with the filename `payload.elf`, exist to make it easier to have different exploits load the same next stage, which allows easier updateability. Non importa quale exploit carica il payload, il risultato è sempre lo stesso.

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

## Posso installare homebrew su Wii U con una USB invece di una scheda SD?

No, devi avere una scheda SD per la prima configuazione. Una USB può successivamente essere usata per installare backup di giochi, inject per Virtual Console, ecc., ma non per memorizzare applicazioni homebrew che sono necessarie per configurare tutto.

## When extracting some of the files there are duplicates of certain ones called "info.json" & "manifest.install", what do I do with those?

Niente di speciale, puoi lasciarli lì, eliminarli o sostituirli con dei nuovi. Questi file non vengono utilizzati nel processo, quindi non cambierà nulla se sono presenti o meno.

## Cos'è un dispositivo USB formattato per Wii U?

It's a USB drive that has been formatted by a Wii U console to its proprietary format.

A Wii U formatted USB drive _**cannot be read by any other devices than the Wii U that originally formatted it.**_

If you ever want to use it with another Wii U console or any other devices, you will have to reformat it.
