# Frequently Asked Questions

## Does homebrew have any risks?

当前，破解 Wii U 不会使你被任天堂封禁，除非你在在线游戏中作弊或欺骗 eShop。 然而尤其是当你不信任程序的源代码的时候，你要对你下载并启动的 Homebrew 程序保持一定的警惕，因为 Homebrew 可以破坏系统！

## What are exploits?

Exploits are entry points which allow further homebrew to be run. In the main guide, you will use exploits such as the browser exploit (http://wiiuexploit.xyz) and PayloadLoader (Health & Safety exploit). All current exploits load `SD:/wiiu/payload.elf` which takes over further loading of homebrew.

## What are payloads?

Payloads, which are normally found with the filename `payload.elf`, exist to make it easier to have different exploits load the same next stage, which allows easier updateability. It doesn't matter what exploit loads the payload, the result is always the same.

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

## Can I install homebrew on Wii U with a USB instead of SD Card?

No, you must have an SD Card for a first time setup. A USB can then be used to install game backups, Virtual Console injects, etc, but not to store homebrew applications which are required to set everything up.

## When extracting some of the files there are duplicates of certain ones called "info.json" & "manifest.install", what do I do with those?

你自己看着整吧，无论是把它们留在原处、删除它们或者替换它们为新的什么的等等都由你自己摆布。 Those files are not used in the process, and therefore, won't have any impact by being or not being there.

## What is a Wii U formatted USB drive?

It's a USB drive that has been formatted by a Wii U console to its proprietary format.

A Wii U formatted USB drive _**cannot be read by any other devices than the Wii U that originally formatted it.**_

If you ever want to use it with another Wii U console or any other devices, you will have to reformat it.
