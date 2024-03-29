# Aroma {docsify-ignore-all}

## Forberede SD-kortet

Vi starter med å plassere Aroma filene du trenger på SD-kortet ditt.

?> **Merk** SD-kortet ditt må formateres til FAT32. Hvis den ikke er formatert til FAT32, bør du bruke [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) med 32k (32768) "allocation unit size" for å formatere den.  
**Ikke** bytt navn på SD-kortet til `wiiu` for da vil ikke homebrew fungere.

### Instruksjoner

1. On the [Aroma](https://aroma.foryour.cafe) site, scroll down to the **Download** section.
1. Read through the steps and click on the checkboxes.
1. Click on `Download Payloads` and `Download Base Aroma`.
1. Download the [PayloadLoader Installer](https://github.com/wiiu-env/PayloadLoaderInstaller/releases/download/v0.1/PayloadLoaderInstaller_20220905-105329.zip)
1. Sett SD-kortet ditt i PC'en din.
1. **Extract** and copy the `wiiu` folder of the three newly downloaded *`.zip`* files to the root of your SD Card.
    - The three `wiiu` folders should be merged if not done automatically.

?> Hvis pc'en din spør deg om å erstatte eksisterende filer på SD-kortet, skal du trykke ja.

?> If you're on a Mac machine, select `Merge` instead of replace. If the merge option does not show immediately, press and hold the `Option` key while moving files to the root.

----------

### SD-kort oppsett {docsify-ignore}

<details>
<summary>Klikk her for å se hvordan SD-kort oppsettet skal se ut.</summary>

```
💾sd:
 ┗ 📂wiiu
   ┣ 📂apps
   ┃ ┣ 📜AromaUpdater.wuhb
   ┃ ┣ 📜PayloadLoaderInstaller.wuhb
   ┃ ┗ (All other apps should be here too)
   ┣ 📂environments
   ┃ ┗ 📂aroma
   ┃   ┣ 📂modules
   ┃   ┃ ┣ 📂setup
   ┃   ┃ ┃ ┣ 📜00_mocha.rpx
   ┃   ┃ ┃ ┣ 📜10_wums_loader.rpx
   ┃   ┃ ┃ ┗ 📜99_autoboot.rpx
   ┃   ┃ ┗ (All other Aroma modules ending with .wms should be here too)
   ┃   ┣ 📂plugins
   ┃   ┃ ┣ 📜AromaBasePlugin.wps
   ┃   ┃ ┣ 📜drc_region_free.wps
   ┃   ┃ ┣ 📜homebrew_on_menu.wps
   ┃   ┃ ┣ 📜regionfree.wps
   ┃   ┃ ┗ (All other Aroma plugins ending with .wps should be here too)
   ┃   ┗ 📜root.rpx
   ┣ 📂payloads
   ┃ ┣ 📂default
   ┃ ┃ ┗ 📜payload.elf
   ┃ ┗ 📂nanddumper
   ┃   ┗ 📜payload.elf
   ┣ 📜payload.rpx
   ┗ 📜payload.elf
```

</details>

?> If you already have the PayloadLoader installed, you may go directly to [Finalizing Setup](./finalizing-setup.md)
