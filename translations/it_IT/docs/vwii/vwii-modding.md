# Guida sul modding vWii
---
Questa pagina ti guiderà nel processo di modding del tuo vWii.

We will now start by placing the required Homebrew files on the SD Card.

?> **Nota Bene** La tua SD dovrà essere formattata in FAT32. Se la tua SD non è formattata in FAT32 usa [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) con 32k (32768) di Unità di allocazione per formattarla. **Non** chiamare la SD come `wiiu` o causerà problemi con homebrew.

?> Se hai già modificato la tua Wii U in passato, puoi usare la stessa scheda SD per questo processo.



### Cosa ti servirà {docsify-ignore}

- Gli ultimi file da [Tiramisu per il tuo caffè](https://tiramisu.foryour.cafe).
    - Click on `Download Tiramisu`.
    - If you have already installed Tiramisu, you do not need to redownload it.
- La versione più recente del [vwii-compat-installer](https://github.com/TheLordScruffy/vwii-compat-installer/releases).
- The <a href="docs/files/Patched_IOS80_Installer_for_vWii.zip" download>Patched IOS 80 Installer for vWii</a>. ([Source](https://github.com/Lazr1026/Patched-IOS80-Installer-for-vWii))
- <a href ="docs/files/d2x_cIOS_Installer.zip" download>d2x cIOS Installer</a>.

### SD Preparations {docsify-ignore}

1. Inserisci la SD del tuo Wii U nel PC.
1. Copia la cartella `apps` dalla cartella <code>Patched_<wbr>IOS80_<wbr>Installer_<wbr>for_<wbr>vWii<wbr>.zip</code> file nella radice della scheda SD.
1. Copy the `d2x-cios-installer` from the <code>d2x_<wbr>cIOS_<wbr>Installer<wbr>.zip</code> file to the apps folder on your SD Card.
1. Copia nella root della tua scheda SD il contenuto del file *`.zip`* di Tiramisu appena scaricato.
1. Copia il file `compat_installer.elf` nella cartella `wiiu/apps` nel root della tua scheda SD.
1. Togli la scheda SD dal computer e inseriscila nella console Wii U.

### Backup della NAND

Nel caso qualcosa andasse storto durante il processo e la tua vWii si bricka, ripristinare un backup della NAND fatto in precedenza farà ritornare tutto come prima.

?> Se recentemente hai fatto un backup della NAND che contiene SLCCMPT e OTP, sentiti libero di saltare questo passaggio.

1. Avvia il [Wii U NAND Dumper](vwii/browser-exploit).
1. Usa il D-Pad del GamePad per inserire la seguente configurazione:
    - Dump SLC: **opzionale**
    - Dump SLCCMPT: **yes**
    - Dump MLC: **opzionale**
    - Dump OTP: **yes**
    - Dump SEEPROM: **opzionale**
1. Premi A per iniziare il processo di dumping.
1. Quando il processo è completo, spegni la tua Wii U, prendi la SD fuori dalla Wii U ed inseriscila nel tuo PC.
1. To make sure you don't lose the files, copy the `slccmpt.bin` and `otp.bin` files, and if you chose to go with a full backup, `seeprom.bin`, `slc.bin`, and `every mlc.bin.part` file to your computer.
1. Elimina i file dalla tua SD per liberare spazio.
1. Togli la scheda SD dal computer e inseriscila nella console Wii U.

### Installazione dell'Homebrew Channel

1. Avvia in [Tiramisu](vwii/browser-exploit).
1. Avvia l'Homebrew Launcher, aprendo il Centro di creazione Mii.
1. Avvia il compat_installer.
1. Premi `A` per installare l'Homebrew Channel e attendi fino a che non vedi `Install succeeded`. Poi premi il pulsante HOME per tornare al menu Wii U.
1. Avvia la vWii (l'icona del Menu Wii).
   - Se l'installazione è riuscita, dovresti vedere l'Homebrew Channel nel tuo Menu Wii.

### Installazione dei cIOS

!> Assicurati di non avere dei file `.wad` altrove che nella cartella `apps` sulla tua scheda SD.

1. Accendi il tuo Wii U e avvia il vWii.
1. Avvia L'Homebrew Channel.
1. Avvia d2x cIOS Installer.
1. Imposta tutto in modo da corrispondere a quanto segue:
    - Select cIOS: `d2x-v11-beta1-vWii`
    - Select cIOS base: `56`
    - Select cIOS slot: `249`
1. Premi `A` per installare.
1. Imposta tutto in modo da corrispondere a quanto segue:
    - Select cIOS: `d2x-v11-beta1-vWii`
    - Select cIOS base: `57`
    - Select cIOS slot: `250`
1. Premi `A` per installare.
1. Imposta tutto in modo da corrispondere a quanto segue:
    - Select cIOS: `d2x-v11-beta1-vWii`
    - Select cIOS base: `58`
    - Select cIOS slot: `251`
1. Premi `A` per installare.
1. Premi `B` per uscire.

### Patchare l'IOS 80

!> Se per qualche modo, il tuo Wii U viene spento mentre patchi IOS 80, il tuo vWii verrà brickato. Questo può essere riparato estraendo IOS 80 dal tuo precedentemente fatto backup della NAND e poi scambiandolo con un FTP oppure [reinstallando IOS 80](recover-vwii-ioses-channels).

1. Avvia Patched IOS 80 Installer for vWii.
1. Leggi la schermata di avviso e aspetta 30 secondi.
1. Premi qualsiasi tasto per installarlo.
1. Aspetta finchè dice <code>IOS80 <wbr>Installation <wbr>is <wbr>complete!</code>.
1. Press any button to exit.

!> Installando un Menu di Sistema personalizzato è un brick definitivo quindi dovresti sempre avere un backup prima di installare un Menu di Sistema ma quando fatto bene, non brickerà il vWii.

!> Installando un IOS (includendo le IOS TED) o wad fatti per il Wii originale nella tua vWii ti brickerà il vWii.

!> Priiloader versions before 0.10.0 do not work with vWii. Priiloader versions before 0.8.2 will brick your vWii.
