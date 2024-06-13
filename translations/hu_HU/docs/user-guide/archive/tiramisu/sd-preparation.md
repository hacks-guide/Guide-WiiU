# Tiramisu {docsify-ignore-all}

## SD kártya előkészítés

A szükséges CFW fájlokat és néhány további homebrew fájlt rakunk majd az SD kártyára.

> **Fontos** Az SD kártyád FAT32-re kell legyen formázva. Ha az SD kártyád nem FAT32-re formázott, használd a [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm)-ot 32k (32768) allocation unit size-zal a formázáshoz. </br>**Ne** cimkézd az SD kártyát `wiiu`-nak, különben problémát okoz a homebrew-nak.

### Mire van szükséged

- A legutolsó fájlok az [Tiramisu for your café](https://tiramisu.foryour.cafe) oldalról.
    - Kattints a `Download Tiramisu`-ra.
- A [Sigpatches Module](https://github.com/marco-calautti/SigpatchesModuleWiiU/releases) legutolsó kiadása.
    - A `01_sigpatches.rpx` fájlt kell letöltened.

### Lépések

1. Helyezd be a Wii U-d SD kártyáját a PC-dbe.
1. **Csomagold ki** és másold a tartalmát a frissen letöltött Tiramisu*`.zip`* fájlból az SD kártyád gyökerébe.
1. Másold a `01_sigpatches.rpx` fájlt a `/wiiu/environments/tiramisu/modules/setup` útvonalra az SD kártyádon.

?> Ha a számítógép rákérdezz, hogy felülírjuk-e a létező fájlokat az SD kártyán, akkor kattints a Igen-re.

   Ha Mac számmítógépet használsz, válaszd a `Merge` opciót a csere helyett.

----------

### SD kártya kiosztás

<details>
<summary>Kattints ide a végső SD kártya kiosztás megtekintéséhez.</summary>

```
💾sd:
 ┣ 📂wiiu
 ┃ ┣ 📂apps
 ┃ ┃ ┣ 📂homebrew_launcher
 ┃ ┃ ┃ ┣ 📜homebrew_launcher.elf
 ┃ ┃ ┃ ┣ 📜icon.png
 ┃ ┃ ┃ ┗ 📜meta.xml
 ┃ ┃ ┣ 📜PayloadLoaderInstaller.wuhb
 ┃ ┃ ┗ (Minden más appnak is itt kell lennie.)
 ┃ ┣ 📂environments
 ┃ ┃ ┣ 📂installer
 ┃ ┃ ┃ ┗ 📂modules
 ┃ ┃ ┃   ┗ 📂setup
 ┃ ┃ ┃     ┣ 📜00_mocha.rpx
 ┃ ┃ ┃     ┗ 📜90_launch_installer.rpx
 ┃ ┃ ┗ 📂tiramisu
 ┃ ┃   ┣ 📂modules
 ┃ ┃   ┃ ┗ 📂setup
 ┃ ┃   ┃   ┣ 📜00_mocha.rpx
 ┃ ┃   ┃   ┣ 📜01_sigpatches.rpx
 ┃ ┃   ┃   ┣ 📜50_hbl_installer.rpx
 ┃ ┃   ┃   ┗ 📜99_autoboot.rpx
 ┃ ┃   ┗ 📜root.rpx
 ┃ ┣ 📂payloads
 ┃ ┃ ┣ 📂default
 ┃ ┃ ┃ ┗ 📜payload.elf
 ┃ ┃ ┣ 📂fw_img_loader 
 ┃ ┃ ┃ ┗ 📜payload.elf
 ┃ ┃ ┗ 📂nanddumper
 ┃ ┃   ┗ 📜payload.elf
 ┃ ┣ 📜payload.rpx
 ┃ ┗ 📜payload.elf
 ┗ 📜versions.json
```

</details>
