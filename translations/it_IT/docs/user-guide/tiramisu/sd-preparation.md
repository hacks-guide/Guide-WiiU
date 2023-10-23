# Tiramisu {docsify-ignore-all}

## Preparazione della SD

Ora inseriremo i file del CFW richiesti e alcuni altri file homebrew sulla scheda SD.

?> **Nota Bene** La tua SD dovrà essere formattata in FAT32. Se la tua SD non è formattata in FAT32 usa [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) con 32k (32768) di Unità di allocazione per formattarla. </br> **Non** chiamare la scheda SD `wiiu` o causerà problemi con homebrew.

?> **Se hai un setup CFW legacy esistente** </br> Per utenti **CBHC**: vai alla pagina [Disinstalla CBHC](../uninstall-cbhc) per disinstallare CBHC. </br> Per utenti **Haxchi**: disinstalla l'app Haxchi da Gestione dati nell'app Impostazioni della console. </br> Per utenti **Mocha CFW (Indexiine)**: vai alla pagina [Disinstalla Indexiine](../uninstall-indexiine) per disintallare Indexiine. </br> Per utenti **Mocha CFW (Exploit Online)**: non devi fare nulla prima di seguire questa guida.

### Cosa ti servirà

- Gli ultimi file da [Tiramisu per il tuo caffè](https://tiramisu.foryour.cafe).
    - Click on `Download Tiramisu`.
- The latest release of the [Sigpatches Module](https://github.com/marco-calautti/SigpatchesModuleWiiU/releases).
    - You will need to download the `01_sigpatches.rpx` file.

### Istruzioni

1. Inserisci la SD della tua Wii U nel PC.
1. **Extract** and copy the contents of the newly downloaded Tiramisu *`.zip`* file to the root of your SD Card.
1. Copia in `/wiiu/environments/tiramisu/modules/setup` sulla tua scheda SD il file `01_sigpatches.rpx`.

?> If your computer asks you to overwrite existing files on your SD Card, you will need to click yes.

----------

### Layout scheda SD {docsify-ignore}

<details>
<summary>Clicca qui per mostrare il layout finale della scheda SD.</summary>

```
💾sd:
 ┗ 📂wiiu
   ┣ 📂apps
   ┃ ┣ 📂homebrew_launcher
   ┃ ┃ ┣ 📜homebrew_launcher.elf
   ┃ ┃ ┣ 📜icon.png
   ┃ ┃ ┗ 📜meta.xml
   ┃ ┣ 📜PayloadLoaderInstaller.wuhb
   ┃ ┗ (All other apps should be here too)
   ┣ 📂environments
   ┃ ┣ 📂installer
   ┃ ┃ ┗ 📂modules
   ┃ ┃   ┗ 📂setup
   ┃ ┃     ┣ 📜00_mocha.rpx
   ┃ ┃     ┗ 📜90_launch_installer.rpx
   ┃ ┗ 📂tiramisu
   ┃   ┣ 📂modules
   ┃   ┃ ┗ 📂setup
   ┃   ┃   ┣ 📜00_mocha.rpx
   ┃   ┃   ┣ 📜01_sigpatches.rpx
   ┃   ┃   ┣ 📜50_hbl_installer.rpx
   ┃   ┃   ┗ 📜99_autoboot.rpx
   ┃   ┗ 📜root.rpx
   ┣ 📂payloads
   ┃ ┣ 📂default
   ┃ ┃ ┗ 📜payload.elf
   ┃ ┣ 📂fw_img_loader 
   ┃ ┃ ┗ 📜payload.elf
   ┃ ┗ 📂nanddumper
   ┃   ┗ 📜payload.elf
   ┣ 📜payload.rpx
   ┗ 📜payload.elf
```

</details>
