# Guida sul modding vWii
---
Questa pagina ti guiderà nel processo di modding del tuo vWii.

Ora andremo ad inserire i file Homebrew nella SD.

?> **Nota Bene** La tua SD dovrà essere formattata in FAT32. Se la tua SD non è formattata in FAT32 usa [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) con 32k (32768) di Unità di allocazione per formattarla. **Non** chiamare la SD come `wiiu` o causerà problemi con homebrew.

?> Se hai già modificato la tua Wii U in passato, puoi usare la stessa scheda SD per questo processo.



### Cosa ti servirà {docsify-ignore}

- The latest files from [Tiramisu for your café](https://tiramisu.foryour.cafe).
    - Select `Nanddumper` and `Base-Tiramisu`.
- The latest release of the [vwii-compat-installer](https://github.com/TheLordScruffy/vwii-compat-installer/releases).
- <a href="docs/files/Patched_IOS80_Installer_for_vWii.zip" download>Patched IOS 80 Installer for vWii</a>.
- <a href ="docs/files/d2x_cIOS_Installer.zip" download>d2x cIOS Installer</a>.

### Istruzioni {docsify-ignore}

1. Inserisci la SD del tuo Wii U nel PC.
1. Copia la cartella `apps` dalla cartella <code>Patched_<wbr>IOS80_<wbr>Installer_<wbr>for_<wbr>vWii<wbr>.zip</code> file nella radice della scheda SD.
1. Copia i contenuti del file <code>d2x_<wbr>cIOS_<wbr>Installer<wbr>.zip</code> nella radice della tua scheda SD.
1. Copy the contents of the newly downloaded `files.zip` file to the root of your SD Card.
1. Copy the `compat_installer.elf` file to the `wiiu/apps` folder on the root of your SD Card.
1. Togli la scheda SD dal computer e inseriscila nella console Wii U.

### Backup della NAND

Nel caso qualcosa andasse storto durante il processo e la tua vWii si bricka, ripristinare un backup della NAND fatto in precedenza farà ritornare tutto come prima.

?> Se recentemente hai fatto un backup della NAND che contiene SLCCMPT e OTP, sentiti libero di saltare questo passaggio.

1. Launch the [Wii U NAND Dumper](vwii/browser-exploit).
1. Usa il D-Pad del GamePad per inserire la seguente configurazione:
    - Dump SLC: **optional**
    - Dump SLCCMPT: **yes**
    - Dump MLC: **opzionale**
    - Dump OTP: **yes**
    - Dump SEEPROM: **optional**
1. Premi A per iniziare il processo di dumping.
1. Quando il processo è completo, spegni la tua Wii U, prendi la SD fuori dalla Wii U ed inseriscila nel tuo PC.
1. To make sure you don't lose the files, copy the `slccmpt.bin`, `otp.bin` and if you chose to go with a full backup, `seeprom.bin`, `slc.bin`, and `every mlc.bin.part` file to your computer.
1. Elimina i file dalla tua SD per liberare spazio.
1. Togli la scheda SD dal computer e inseriscila nella console Wii U.

### Installazione dell'Homebrew Channel

1. Avvia l'[Homebrew Launcher](vwii/browser-exploit).
1. Avvia il compat_installer.
1. Premi `A` per installare l'Homebrew Channel e attendi fino a che non vedi `Install succeeded`. Poi premi il pulsante HOME per tornare al menu Wii U.
1. Avvia la vWii (l'icona del menu Wii).
   - Se l'installazione è riuscita, dovresti vedere l'Homebrew Channel nel tuo menu Wii.

### Installazione dei cIOS

!> Assicurati di non avere dei file `.wad` altrove che nella cartella `apps` sulla tua scheda SD.

?> **Consiglio** Puoi tenere premuto il pulsante `B` sul GamePad all'avvio della Wii U per avviare direttamente il vWii.

1. Accendi il tuo Wii U e avvia il vWii.
1. Avvia L'Homebrew Channel.
1. Avvia d2x cIOS Installer.
1. Imposta tutto in modo da corrispondere a quanto segue:
    - Select cIOS: `v10 beta52 d2x-v10-beta52-vWii`
    - Select cIOS base: `56`
    - Select cIOS slot: `249`
1. Premi `A` per installare.
1. Imposta tutto in modo da corrispondere a quanto segue:
    - Select cIOS: `v10 beta52 d2x-v10-beta52-vWii`
    - Select cIOS base: `57`
    - Select cIOS slot: `250`
1. Premi `A` per installare.
1. Imposta tutto in modo da corrispondere a quanto segue:
    - Select cIOS: `v10 beta52 d2x-v10-beta52-vWii`
    - Select cIOS base: `58`
    - Select cIOS slot: `251`
1. Premi `A` per installare.
1. Premi `B` per uscire.

### Patchare l'IOS 80

!> Se per ogni motivo, la Wii U si spegne mentre l'IOS 80 viene patchato, ti ritroverai con il vWii brickato. Può esere risolto o estraendo l'IOS 80 dal backup della NAND fatto in precedenza e sostituendolo con FTP o [reinstallando l'IOS 80](recover-vwii-ioses-channels).

1. Avvia Patched IOS 80 Installer for vWii.
1. Leggi la schermata di avviso e aspetta 30 secondi.
1. Premi qualsiasi tasto per installarlo.
1. Aspetta finchè dice <code>IOS80 <wbr>Installation <wbr>is <wbr>complete!</code>.
1. Premi un qualsiasi pulsante per uscire.

!> Installare un menù di sistema modificato è un rischio di brick e dovresti sempre avere un backup prima di installarne uno ma se fatto bene, non brickerà il vWii.

!> Installare qualunque IOS (includendo gli IOS TED) o wads fatti per il Wii originale sul tuo vWii lo brickerà.

!> Installare Priiloader brickerà il tuo vWii.
