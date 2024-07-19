# Dumpare dischi del Wii U
---
Dumpare i tuoi dischi ti permette di installare una copia del tuo gioco sulla NAND/dispositivo USB così da poterci giocare senza disco.

?> Dumpare e installare giochi richiede una console modificata, quindi assicurati di aver seguito la guida principale sull'installazione di CFW prima di seguire questa guida.

!> E' **ILLEGALE** condividere i file dumpati con questa guida.  
Se hai intenti di utilizzare questa guida per condividere i tuoi giochi dumpati, non farlo.

### Dumpare e installare dischi Wii U {docsify-ignore}

?> Installare un gioco sulla memoria di sistema (NAND) non è consigliato poiché è limitata a soli 8GB o 32GB a dipendenza del tuo modello, facendoti finire lo spazio in fretta se vuoi installare più giochi.

?> Quando si installa un gioco su un dispositivo USB, consigliamo di usare un HDD e non una chiave USB, poiché queste ultime non sono ottimizzate per una costante lettura e scrittura, e portano quindi a errori frequenti. Se il tuo HDD non è alimentato esternamente, ti servirà un cavo a Y per collegarlo alle due porte USB del Wii U.

!> In order to install to a USB device, it has to be formatted by the Wii U. Doing this will erase (delete) all contents (documents, pictures, videos, PC data) off of it, and prevent it from being used on another system unless you reformat it. This *does* include the vWii, meaning you will not be able to run Wii and GameCube disc images off the USB using USB loaders. To format, plug your USB HDD into the Wii U, power on your Wii U, your Wii U will prompt you to format your HDD. Conferma con Sì.

#### Cosa ti servirà {docsify-ignore}

- La tua scheda SD ha bisogno di spazio sufficiente da contenere il gioco che vuoi dumpare.
- Se si vuole installare su un USB, un HDD USB (+ un cavo Y se necessario).
- The latest release of [WUP Installer GX2](https://wiiu.cdn.fortheusers.org/zips/wup_installer_gx2_wuhb.zip).
- The [wudd](https://wiiu.cdn.fortheusers.org/zips/wudd.zip) homebrew application.

#### Istruzioni {docsify-ignore}

1. Copy the contents of the `wup_installer_gx2_wuhb.zip` file to the root of your SD Card.
1. Copia nella root della tua scheda SD i contenuti del file wudd `.zip` appena scaricato.
1. Togli la scheda SD dal tuo PC e inseriscila nel tuo Wii U.
1. Power on your Wii U and boot into Aroma.
1. Launch the Wii U Menu and start the wudd app.
1. Seleziona `Dump partition as .app`
1. Seleziona la partizione `Game` per cominciare il dumping.
1. When finished, exit wudd to the Wii U Menu.
1. Inserisci la scheda SD nel tuo computer.
1. Copia la cartella `GMXXXXXXXXXXXXXXXX` da `sd:/wudump/WUP-X-XXXX` alla cartella `install` della tua scheda SD.
    - Se la cartella `install` non esiste, creala.
1. Espelli e inserisci la scheda SD nel tuo Wii U.
1. Open the Wii U Menu and then the WUP Installer GX2 app.
1. Seleziona il tuo gioco (`GMXXXXXXXXXXXXXXXX`), premi `Install` e conferma con `Yes`.
1. Seleziona 'USB' per installare su USB e 'NAND' per installare su NAND
1. Exit the WUP Installer GX2 to the Wii U Menu.
1. Dovresti vedere il tuo gioco installato, pronto per essere giocato.
1. Togli la scheda SD dal tuo Wii U e inseriscila nel tuo PC.
1. Elimina la cartella `GMXXXXXXXXXXXXXXXX` dalla cartella `install` nella tua scheda SD per liberare spazio.

### Spostare i giochi su USB

?> Se non vuoi tenere i giochi installati sulla NAND, puoi utilizzare la Gestione dati del Wii U per spostare il gioco su un dispositivo USB.

!> Per spostare il tuo gioco su un dispositivo USB, dev'essere formattato dal Wii U. Facendo ciò, i contenuti del dispositivo verranno eliminati e non sarà possibile utilizzarlo su altri sistemi, a meno che non lo riformatti.

1. Collega il tuo dispositivo USB al Wii U.
1. Accendi il tuo Wii U.
1. Il tuo Wii U ti chiederà di formattare il tuo dispositivo USB. Conferma con Sì.
1. Apri le Impostazioni della console del Wii U.
1. Vai su `Gestione dati > Copia, sposta o elimina dati > Memoria della console > Seleziona per copiare/spostare (X)`
1. Seleziona il gioco e sposta tutti i dati (compreso aggiornamenti e DLC se installati) sul tuo dispositivo USB.

### Spostare aggiornamenti su USB

?> Se il tuo gioco su disco aveva DLC o aggiornamenti installati, devi trasferire i dati sul tuo dispositivo USB. Puoi farlo utilizzando la Gestione dati del Wii U.

1. Accendi il tuo Wii U
1. Apri le Impostazioni della console del Wii U.
1. Vai su `Gestione dati > Copia, sposta o elimina dati > Memoria della console > Seleziona per copiare/spostare (X)`.
1. Seleziona il tuo gioco e sposta i dati di aggiornamento e i DLC sul dispositivo USB.
