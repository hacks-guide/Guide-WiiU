# Aroma {docsify-ignore-all}

## Forberede SD-kortet

Vi starter med å plassere Aroma filene du trenger på SD-kortet ditt.

?> **Merk** SD-kortet ditt må formateres til FAT32. Hvis den ikke er formatert til FAT32, bør du bruke [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) med 32k (32768) "allocation unit size" for å formatere den.  
**Ikke** bytt navn på SD-kortet til `wiiu` for da vil ikke homebrew fungere.

### Instruksjoner

1. On the [Aroma](https://aroma.foryour.cafe) site, scroll down to the **Download** section.
    - Read through the steps and click on the checkboxes.
    - Click on `Download Payloads` and `Download Base Aroma`.
1. Sett SD-kortet ditt i PC'en din.
1. **Extract** and copy the `wiiu` folder of the two newly downloaded *`.zip`* files to the root of your SD Card.
    - The `wiiu` folders should be merged if not done automatically.

?> Hvis pc'en din spør deg om å erstatte eksisterende filer på SD-kortet, skal du trykke ja.

?> Hbid du bruker en Mac, må du velge `Merge` i stedet for å erstatte. Hvis ikke Merge alternativet kommer opp, trykk og hold inne `Option` tasten mens du flytter filene til roten av SD-kortet.

----------

### SD-kort oppsett {docsify-ignore}

<details>
<summary>Klikk her for å se hvordan SD-kort oppsettet skal se ut.</summary>

```
💾sd:
 ┗ 📂wiiu
   ┣ 📂apps
   ┃ ┣ 📂AromaUpdater
   ┃ ┃ ┗📜AromaUpdater.wuhb
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

?> Hvis du allerede har PayloadLoader installert, så kan du gå direkte til [Fullføre Installasjon](./finalizing-setup.md)
