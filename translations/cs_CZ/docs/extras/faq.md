# Frequently Asked Questions {docsify-ignore-all}
---

### Does homebrew have any risks?

Currently, homebrewing the Wii U does not expose you to a risk of being banned by Nintendo unless you cheat in online games, or do eShop fraud. You should, however, always be careful with launching downloaded homebrew, especially if you don't trust the source, as homebrew can potentially damage your system!

### What are exploits?

Exploits are entry points which allow further homebrew to be run. In the main guide, you will use exploits such as the browser exploit (http://wiiuexploit.xyz) and PayloadLoader (Health & Safety exploit). All current exploits load `SD:/wiiu/payload.elf` which takes over further loading of homebrew.

### What are payloads?

Payloads, which are normally found with the filename `payload.elf`, exist to make it easier to have different exploits load the same next stage, which allows easier updateability. It doesn't matter what exploit loads the payload, the result is always the same. Multiple payloads can be switched between using the PayloadLoaderPayload. The payload used in the main guide is CustomRPXLoader which loads `SD:/wiiu/payload.rpx` and the `payload.rpx` used in the guide is EnvironmentLoader, which allows you to load different environments.

### What are environments?

An environment is a collection of "setup modules", which will be run in a certain order when launching the environment. One such environment is Tiramisu. Setup modules are small pieces of homebrew/code that are executed once to set up an environment.

### Can I install games from my USB instead of SD?

Yes. It is, however, a bit more complicated than installing from SD Card. Detailed instructions are in the `Install from USB` tab in the [Dumping guide](dump-games).

### How to Delete Update Folder to Block Updates on Wii U

If you want to delete the update folder to block updates, see its tab in the [Blocking Updates guide](block-updates).

### What SD Card size is recommended?

 - **Installing game backups:** 32GB (Smaller size may be used, but certain titles are 20GB in size)
 - **Running game mods:** 8GB (FAT32 USB drive may be used as well for mods)
 - **Only running homebrew apps:** Any size.

**Recommended brands:** SanDisk, Samsung or PNY

?> Note: Avoid class 4 SD Cards, and avoid eBay!

### Can I install homebrew on Wii U with a USB instead of SD Card?

No, you must have an SD Card for a first time setup. A USB can then be used to install game backups, Virtual Console injects, etc, but not to store homebrew applications which are required to set everything up.

### When extracting some of the files there are duplicates of certain ones called "info.json" & "manifest.install", what do I do with those?

Nothing special, you can leave them there, delete them or replace them with new ones. Those files are not used in the process, and therefore, won't have any impact by being or not being there.

### What is a Wii U formatted USB drive?

It's a USB drive that has been formatted by a Wii U console to its proprietary format.  
A Wii U formatted USB drive ***cannot be read by any other devices than the Wii U that originally formatted it.***  
If you ever want to use it with another Wii U console or any other devices, you will have to reformat it.
