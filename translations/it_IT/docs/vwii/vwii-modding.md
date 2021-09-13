# Guida sul modding vWii
---
Questa pagina ti guiderà nel processo di modding del tuo vWii.

Ora andremo ad inserire i file Homebrew nella SD.

?> **Nota Bene** La tua SD dovrà essere formattata in FAT32. Se la tua SD non è formattata in FAT32 usa [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) con 32k (32768) di Unità di allocazione per formattarla. **Non** chiamare la SD come `wiiu` o causerà problemi con homebrew.

### Cosa ti servirà {docsify-ignore}

- The latest release of the [vwii-compat-installer](https://github.com/TheLordScruffy/vwii-compat-installer/releases).
- The latest release of the [Wii U NAND Dumper](https://www.wiiubru.com/appstore/zips/nanddumper.zip).
- The <a href="docs/files/Patched_IOS80_Installer_for_vWii.zip" download>Patched IOS 80 Installer for vWii</a>.
- The <a href ="docs/files/d2x_cIOS_Installer.zip" download>d2x cIOS Installer</a>.
- The [Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/download/1.4/homebrew_launcher.v1.4.zip).
- The latest release of the [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/download/v1.4/payload.zip).

### Istruzioni {docsify-ignore}

1. Inserisci la SD del tuo Wii U nel PC.
1. Copy the `apps` folder from the <code>Patched_<wbr>IOS80_<wbr>Installer_<wbr>for_<wbr>vWii<wbr>.zip</code> file to the root of your SD Card.
1. Copy the contents of the <code>d2x_<wbr>cIOS_<wbr>Installer<wbr>.zip</code> file to the root of your SD Card.
1. Copia i contenuti del file `nanddumper.zip` nella root della tua SD.
1. Copy the contents of the <code>homebrew_<wbr>launcher.<wbr>v1.4.zip</code> file to the root of your SD Card.
1. Copy the contents of the `payload.zip` file to the `wiiu` folder on your SD Card.
1. Copy the `compat_installer.elf` file to the `wiiu/apps` folder on the root of your SD Card.
1. Togli la scheda SD dal computer e inseriscila nella console Wii U.

### Backup della NAND

Se durante il processo qualcosa va storto e la tua vWii si bricka, potrai ripristinare il backup della NAND per far ritornare tutto come prima.

1. Avvia l'[Homebrew Launcher](vwii/browser-exploit).
1. Avvia l'applicazione `Wii U NAND Dumper`.
1. Usa il D-Pad del GamePad per inserire la seguente configurazione:
    - Dump SLC: **optional**
    - Dump SLCCMPT: **yes**
    - Dump MLC: **opzionale**
    - Dump OTP: **yes**
    - Dump SEEPROM: **optional**
1. Premi A per iniziare il processo di dumping.
1. Quando il processo è completo, spegni la tua Wii U, prendi la SD fuori dalla Wii U ed inseriscila nel tuo PC.
1. Assicurati di non perdere i file, copia `slccmpt.bin`, `otp.bin`, e se scegli di fare il backup intero, copia i file `seeprom.bin`, `slc.bin`, e ogni parte di `mlc.bin.part` sul tuo computer.
1. Elimina i file dalla tua SD per liberare spazio.
1. Togli la scheda SD dal computer e inseriscila nella console Wii U.

### Installing the Homebrew Channel

1. Avvia l'[Homebrew Launcher](vwii/browser-exploit).
1. Launch the compat_installer.
1. Press `A` to install the Homebrew Channel and wait until you see `Install succeeded`. Then press the HOME button to return to the Wii U Menu.
1. Launch vWii (the Wii Menu icon).
   - If the installation has succeeded, you should see the Homebrew Channel in your Wii Menu.

### Installazione dei cIOS

!> Assicurati di non avere file `.wad` altrove che nella cartella `apps` sulla tua scheda SD.

?> **Consiglio** Puoi tenere premuto il tasto `B` sul GamePad all'avvio del Wii U per avviare direttamente il vWii.

1. Accendi il tuo Wii U e avvia il vWii.
1. Avvia L'Homebrew Channel.
1. Avvia d2x cIOS Installer.
1. Imposta tutto in modo da corrispondere a quanto segue:
    - Select cIOS: `v10 d2x-v10-beta52-vWii`
    - Select cIOS base: `56`
    - Select cIOS slot: `249`
1. Premi `A` per installare.
1. Imposta tutto in modo da corrispondere a quanto segue:
    - Select cIOS: `v10 d2x-v10-beta52-vWii`
    - Select cIOS base: `57`
    - Select cIOS slot: `250`
1. Premi `A` per installare.
1. Imposta tutto in modo da corrispondere a quanto segue:
    - Select cIOS: `v10 d2x-v10-beta52-vWii`
    - Select cIOS base: `58`
    - Select cIOS slot: `251`
1. Premi `A` per installare.
1. Premi `B` per uscire.

### Patchare l'IOS 80

!> se per ogni motivo, il Wii U si spegne mentre l'IOS 80, il vWii si brickerà. Può essere risolto o estraendo l'IOS 80 dal backup della NAND precedentemente fatto e sostituendolo con FTP o [reinstallando l'IOS 80](recover-vwii-ioses-channels).

1. Avvia Patched IOS 80 Installer for vWii.
1. Leggi la schermata di avviso e aspetta 30 secondi.
1. Premi qualsiasi tasto per installarlo.
1. Aspetta finchè dice <code>IOS80 <wbr>Installation <wbr>is <wbr>complete!</code>.
1. Premi un qualsiasi pulsante per uscire.

!> Installare un Menu di Sistema personalizzato è un rischio di brick e dovresti sempre avere un backup funzionante prima di installarne uno, ma quando viene installato bene, non brickerà il vWii.

!> Installare qualunque IOS (includendo gli IOS TED) o wads fatti per il Wii originale sul tuo vWii lo brickerà.

!> Installare Priiloader brickerà il tuo vWii.
