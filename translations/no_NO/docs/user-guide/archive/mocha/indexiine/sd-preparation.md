# Archive - Mocha - Indexiine

!> **THIS METHOD IS NO LONGER SUPPORTED**  
**CURRENT METHOD IS AVAILABLE [HERE](../../../introduction)**

## Forberede SD-kortet {docsify-ignore}

Her vil vi plassere de nødvendige CFW-filene og noen ekstra homebrew filer på SD-kortet.

?> **Merk** SD-kortet ditt må formateres til FAT32. Hvis den ikke er formatert til FAT32, bør du bruke [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) med 32k (32768) "Allocation unit size" for å formatere den. **Ikke** sett navnet på SD kortet til `wiiu`, det vil skape problemer med noen homebrew apper.

### Dette Trenger Du {docsify-ignore}

- Mocha <a href="docs/files/config.ini" download>config</a> fila.
- Siste utgave av [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/latest).
  - Du må laste ned `payload.zip` filen.
- [Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4) Versjon 1.4.
  - Du må laste ned `homebrew_launcher.v.1.4.zip`.
- Siste utgave av [WUP Installer GX2](https://wiiubru.com/appstore/zips/wup_installer_gx2.zip).
- Siste utgave av [Wii U NAND Dumper](https://wiiubru.com/appstore/zips/nanddumper.zip).
- Siste utgave av [Homebrew App Store](https://github.com/vgmoose/hbas/releases/latest).
  - Du må laste ned `wiiu-extracttosd.zip` filen.
- Siste utgave av [Mocha](https://wiiubru.com/appstore/zips/mocha.zip).
- Siste utgave av <a href="docs/files/SaveMii_Mod.zip" download>SaveMii Mod</a>.
- Siste utgave av [Indexiine-Installer](https://github.com/GaryOderNichts/indexiine-installer/releases/latest).

### Instruksjoner {docsify-ignore}

?> **Merk** info.json og manifest.Install filene er ikke nødvendig for modifiseringsprosessen og kan slettes.

1. Sett SD-kortet ditt i PC'en din.
1. Pakk ut `wup_installer_gx2.zip` til roten av SD-kortet.
1. Pakk ut `nanddumper.zip` til roten av SD-kortet.
1. Pakk ut `wiiu-extracttosd.zip` til roten av SD-kortet.
1. Pakk ut `homebrew_launcher.v.1.4.zip` til roten av SD-kortet.
1. Pakk ut `mocha.zip` til roten av SD-kortet.
1. Pakk ut `indexiine-installer.zip` til roten av SD-kortet.
1. Pakk ut `savemii_mod.zip` til roten av SD-kortet.
1. Kopier `config.ini` fila til `/wiiu/apps/mocha` mappen på SD-kortet.
1. Kopier `payload.elf` fila fra `payload.zip` til `wiiu` mappen på SD kortet.
----------

### SD-kort oppsett {docsify-ignore}

<details>
<summary>Klikk her for å se hvordan SD-kort oppsettet skal se ut.</summary>

```
💾sd:
 ┗ 📂wiiu
   ┣ 📂apps
   ┃ ┣ 📂homebrew_launcher
   ┃ ┃ ┣ 📜homebrew_launcher.elf
   ┃ ┃ ┣ 📜icon.png
   ┃ ┃ ┗ 📜meta.xml
   ┃ ┗ (Alle abdre apper som disc2app, nanddumper, etc. skal være her også)
   ┗ 📜payload.elf
```

</details>
