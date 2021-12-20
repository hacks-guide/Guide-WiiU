# Dumpare dischi del Wii U
---
Dumpare i tuoi dischi ti permette di installare una copia del tuo gioco sulla NAND/dispositivo USB così da poterci giocare senza disco.

?> Dumpare e installare giochi richiede una console modificata, quindi assicurati di aver seguito la guida principale sull'installazione di CFW prima di seguire questa guida.

!> E' **ILLEGALE** condividere i file dumpati con questa guida.  
Se hai intenti di utilizzare questa guida per condividere i tuoi giochi dumpati, non farlo.

### Istruzioni {docsify-ignore}

<!-- tabs:start -->

#### **Installazione sulla NAND**

### Installazione sulla NAND

?> Installare un gioco sulla memoria di sistema (NAND) non è consigliato poiché è limitata a soli 8GB o 32GB a dipendenza del tuo modello, facendoti finire lo spazio in fretta se vuoi installare più giochi.

### Cosa ti servirà {docsify-ignore}

- La tua scheda SD ha bisogno di spazio sufficiente da contenere il gioco che vuoi dumpare.
- L'ultima versione di [WUP Installer GX2](https://wiiubru.com/appstore/zips/wup_installer_gx2.zip).
- The [disc2app](https://wiiubru.com/appstore/zips/disc2app.zip) homebrew application.

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

?> Quando si installa un gioco su un dispositivo USB, consigliamo di usare un HDD e non una chiave USB, poiché queste ultime non sono ottimizzate per una costante lettura e scrittura, e portano quindi a errori frequenti. Se il tuo HDD non è alimentato esternamente, ti servirà un cavo a Y per collegarlo alle due porte USB del Wii U.

!> Per spostare il gioco su un dispositivo USB, deve essere formattato dal Wii U. Facendo ciò, i contenuti del dispositivo verranno eliminati e non sarà possibile utilizzarlo su altri sistemi, a meno che non lo riformatti.

### Cosa Ti Servirà {docsify-ignore}

- La tua scheda SD ha bisogno di spazio sufficiente da contenere il gioco che vuoi dumpare.
- Un HDD USB (+ un cavo a Y se necessario)
- L'ultima versione di [WUP Installer GX2](https://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- The [disc2app](https://wiiubru.com/appstore/zips/disc2app.zip) Homebrew app

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

?> Se non hai abbastanza spazio sulla tua scheda SD, puoi usare una tecnica avanzata per installare i giochi dumpati da un dispositivo USB. Questa non è la cosa più facile da fare ed ha lo svantaggio di poter installare il gioco solo sulla tua memoria di sistema (NAND).

### Cosa ti servirà {docsify-ignore}

- Un dispositivo di archiviazione USB (+ un cavo a Y se necessario) con spazio sufficiente da contenere il gioco che vuoi dumpare.
- L'ultima versione di [WUP Installer GX2](https://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- The [disc2app](https://wiiubru.com/appstore/zips/disc2app.zip) Homebrew app.
- The [MochaFAT32](https://wiiubru.com/appstore/zips/mocha_fat32.zip) Homebrew app.
- La versione 1.4 dell' [Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4)
  - Avrai bisogno di scaricare la versione v1.4 `homebrew_launcher.v.1.4.zip`.

### Istruzioni {docsify-ignore}

?> **Nota bene** Il tuo dispositivo USB dovrà essere formattato in FAT32. Se la tua USB non è formattata in FAT32, usa [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) con l'unità di allocazione di 32k (32768) per formattarla.

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
1. Elimina la sotto-cartella `WUP-X-XXXX` della cartella `install` sul tuo dispositivo USB per liberare spazio.

<!-- tabs:end -->

### Spostare giochi su USB

?> Se non vuoi tenere i tuoi giochi installati sulla NAND, puoi utilizzare la gestione dati del Wii U per spostare il gioco su un dispositivo USB.

!> Per spostare il gioco su un dispositivo USB, deve essere formattato dal Wii U. Facendo ciò, i contenuti del dispositivo verranno eliminati e non sarà possibile utilizzarlo su altri sistemi, a meno che non lo riformatti.

1. Riavvia il tuo Wii U per rimuovere l'effetto di MochaFAT32.
1. Collega il tuo dispositivo USB al Wii U.
1. Accendi il tuo Wii U.
1. Il tuo Wii U ti chiederà di formattare il dispositivo USB. Conferma con Sì.
1. Apri le Impostazioni della console Wii U.
1. Vai su `Gestione dati> Copia, sposta o elimina dati > Memoria della console > Seleziona per copiare/spostare (X)`
1. Seleziona il gioco e sposta tutti i dati (includendo aggiornamenti e DLC se installati) sul tuo dispositivo USB.

### Spostare aggiornamenti su USB

?> Se il tuo disco ha DLC o aggiornamenti installati, dovrai trasferire i file sul tuo dispositivo USB. Puoi farlo utilizzando la gestione dati del Wii U.

1. Accendi il tuo Wii U
1. Apri le Impostazioni della console Wii U.
1. Vai su `Gestione dati> Copia, sposta o elimina dati > Memoria della console > Seleziona per copiare/spostare (X)`.
1. Seleziona il tuo gioco e sposta i dati di aggiornamento e i DLC sul dispositivo USB.