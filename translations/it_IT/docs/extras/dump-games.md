# Dumpare dischi del Wii U
---
Dumpare i tuoi dischi ti permette di installare una copia del tuo gioco sulla NAND/dispositivo USB così da poterci giocare senza disco.

?> Dumpare e installare giochi richiede una console modificata, quindi assicurati di aver seguito la guida principale sull'installazione di CFW prima di seguire questa guida.

!> It is **ILLEGAL** to share the files dumped with this guide.  
If you intend to use this guide to share your dumped games, don't.

### Istruzioni {docsify-ignore}

<!-- tabs:start -->

#### **Installazione sulla NAND**

### Installazione sulla NAND

?> Installing a game to the system memory (NAND) is not recommended as it's limited to either 8GB or 32GB depending on your model, making you run out of space pretty quickly if you want to install multiple games.

### Cosa ti servirà {docsify-ignore}

- La tua scheda SD ha bisogno di spazio sufficiente da contenere il gioco che vuoi dumpare.
- L'ultima versione di [WUP Installer GX2](https://wiiubru.com/appstore/zips/wup_installer_gx2.zip).
- L'app homebrew [disc2app](https://www.wiiubru.com/appstore/zips/disc2app.zip).

### Istruzioni {docsify-ignore}

1. Copia i contenuti di `wup_installer_gx2.zip` nella root della tua scheda SD.
1. Copia i contenuti di `disc2app.zip` nella root della tua scheda SD.
1. Togli la scheda SD dal tuo PC e inseriscila nel Wii U.
1. Accendi il tuo Wii U.
1. Espelli il tuo disco se ne hai uno inserito.
1. Apri l'Homebrew Launcher e avvia l'app disc2app.
1. Premi A per iniziare il processo di dumping sulla scheda SD.
1. Quando richiesto, inserisci il disco che vuoi dumpare.
1. Quando il processo è completo, il tuo Wii U ti porterà nel menu Wii U.
1. Apri l'Homebrew Launcher e avvia l'app WUP Installer GX2.
1. Seleziona il tuo gioco (`WUP-X-XXXX`), premi `Install` e conferma con `Yes`.
1. Seleziona NAND come destinazione dell'installazione.
1. Quando il processo è completo, il tuo Wii U ti porterà nel menu Wii U.
1. Dovresti vedere il tuo gioco installato, pronto per essere giocato.
1. Togli la scheda SD dal tuo Wii U e inseriscila nel tuo PC.
1. Elimina la sotto-cartella `WUP-X-XXXX` della cartella `install` sulla tua scheda SD per liberare spazio.

#### **Installazione su USB**

### Installazione su USB

?> When installing a game to a USB device, we recommend that you use an HDD and not a flash drive, as those are not optimized for constant reading and writing, therefore making them fail quickly. If your HDD is not externally powered, you will need a Y-cable to connect it to two USB slots on the Wii U.

!> In order to install to a USB device, it has to be formatted by the Wii U. Doing this will erase all contents of it, and prevent it from being used on another system unless you reformat it.

### Cosa Ti Servirà {docsify-ignore}

- La tua scheda SD ha bisogno di spazio sufficiente da contenere il gioco che vuoi dumpare.
- Un HDD USB (+ un cavo a Y se necessario)
- L'ultima versione di [WUP Installer GX2](https://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- L'app Homebrew [disc2app](https://www.wiiubru.com/appstore/zips/disc2app.zip)

### Istruzioni {docsify-ignore}

1. Copia i contenuti di `wup_installer_gx2.zip` nella root della tua scheda SD.
1. Copia i contenuti di `disc2app.zip` nella root della tua scheda SD.
1. Togli la scheda SD dal tuo PC e inseriscila nel tuo Wii U.
1. Collega il tuo HDD USB al Wii U.
1. Accendi il Wii U.
1. Il tuo Wii U ti chiederà di formattare il tuo HDD. Conferma con Sì.
1. Espelli il tuo disco se ne hai uno inserito
1. Apri l'Homebrew Launcher e avvia l'app disc2app.
1. Premi A per iniziare il processo di dumping sulla scheda SD.
1. Quando richiesto, inserisci il disco che vuoi dumpare
1. Quando il processo è completo, il tuo Wii U ti porterà nel menu Wii U.
1. Apri l'Homebrew Launcher e avvia l'app WUP Installer GX2.
1. Seleziona il tuo gioco (`WUP-X-XXXX`), premi `install` e conferma con `Yes`.
1. Seleziona USB come destinazione dell'installazione.
1. Quando il processo è completo, il tuo Wii U ti porterà nel menu Wii U.
1. Dovresti vedere il tuo gioco installato, pronto per essere giocato.
1. Togli la scheda SD dal tuo Wii U e inseriscila nel tuo PC.
1. Elimina la sotto-cartella `WUP-X-XXXX` della cartella `install` sulla tua scheda SD per liberare spazio.

#### **Installazione da USB**

### Installazione da USB

?> If you do not have enough space on your SD Card, you can use an advanced technique to install dumps from a USB device. This is not the easiest thing to do and has the disadvantage of only being able to install the game onto your system memory (NAND).

### Cosa ti servirà {docsify-ignore}

- Un dispositivo di archiviazione USB (+ un cavo a Y se necessario) con spazio sufficiente da contenere il gioco che vuoi dumpare.
- L'ultima versione di [WUP Installer GX2](https://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- L'app Homebrew [disc2app](https://www.wiiubru.com/appstore/zips/disc2app.zip).
- L'app Homebrew [MochaFAT32](https://www.wiiubru.com/appstore/zips/mocha_fat32.zip).
- La versione 1.4 dell' [Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4)
  - Avrai bisogno di scaricare la versione v1.4 `homebrew_launcher.v.1.4.zip`.

### Istruzioni {docsify-ignore}

?> **Notice** Your USB device will need to be formatted as FAT32. If your USB is not formatted to FAT32, use [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) with 32k (32768) Allocation unit size to format it.

1. Copia i contenuti del file `homebrew_launcher.v.1.4.zip` nella root della tua scheda SD.
1. Copia i contenuti del file `wup_installer_gx2.zip` nella root del tuo dispositivo USB.
1. Copia i contenuti del file `disc2app.zip` nella root del tuo dispositivo USB.
1. Copia i contenuti del file `mocha_fat32.zip` nella root della tua SD.
1. Togli la scheda SD dal tuo PC e inseriscila nella tua console Wii U.
1. Accendi il tuo Wii U.
1. Collega il tuo dispositivo USB. Il Wii U ti chiederà di formattarlo. Annulla con No!
1. Apri l'Homebrew Launcher e avvia l'app MochaFAT32.
1. Nel menù di configurazione, imposta le seguenti impostazioni:
    - Config view mode: default
    - Skip this menu on launch: on
    - Don't relaunch OS: off
    - Launch System Menu: on
    - RedNAND: off
1. La tua console caricherà il menu Wii U con il tuo dispositivo USB al posto della scheda SD.
1. Avvia l'Homebrew Launcher e apri l'app disc2app.
1. Espelli qualsiasi disco inserito e premi il pulsante A per iniziare il processo di dumping.
1. Quando richiesto, inserisci il disco che vuoi dumpare.
1. Quando il processo è completo, il tuo Wii U ti porterà nel menu Wii U.
1. Apri l'Homebrew Launcher e avvia l'app WUP Installer GX2.
1. Seleziona il tuo gioco (`WUP-X-XXXX`), premi `Install` e conferma con `Yes`.
1. Seleziona NAND come destinazione dell'installazione.
1. Quando il processo è completo, il tuo Wii U ti porterà nel menu Wii U.
1. Dovresti vedere il tuo gioco installato, pronto per essere giocato.
1. Togli il dispositivo USB dal tuo Wii U e inseriscilo nel tuo PC.
2. Elimina la sotto-cartella `WUP-X-XXXX` della cartella `install` sul tuo dispositivo USB per liberare spazio.

<!-- tabs:end -->

### Spostare giochi su USB

?> If you don't want to keep the game installed on NAND, you can use the Wii U's data management to move the game to a USB device.

!> In order to move your game to a USB device, it has to be formatted by the Wii U. Doing this will erase all contents of it, and prevent it from being used on another system unless you reformat it.

1. Riavvia il tuo Wii U per rimuovere l'effetto di MochaFAT32.
1. Collega il tuo dispositivo USB al Wii U.
1. Accendi il tuo Wii U.
1. Il tuo Wii U ti chiederà di formattare il dispositivo USB. Conferma con Sì.
1. Apri le Impostazioni della console Wii U.
1. Vai su `Gestione dati> Copia, sposta o elimina dati > Memoria della console > Seleziona per copiare/spostare (X)`
1. Seleziona il gioco e sposta tutti i dati (includendo aggiornamenti e DLC se installati) sul tuo dispositivo USB.

### Spostare aggiornamenti su USB

?> If your disc game had DLC or updates installed, you will need to transfer the files over to your USB device. You can do this using the Wii U's data management.

1. Accendi il tuo Wii U
1. Apri le Impostazioni della console Wii U.
1. Vai su `Gestione dati> Copia, sposta o elimina dati > Memoria della console > Seleziona per copiare/spostare (X)`.
1. Seleziona il tuo gioco e sposta i dati di aggiornamento e i DLC sul dispositivo USB.