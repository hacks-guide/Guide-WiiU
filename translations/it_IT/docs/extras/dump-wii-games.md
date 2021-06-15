Dumpare dischi del Wii
---
Dumpare i tuoi dischi ti permette di: giocarli su un emulatore Wii (come Dolphin), giocarli utilizzando un USB/SD Card loader come WiiFlow, creare un inject in Virtual Console che può essere installato su un dispositivo USB formattato in Wii U o nella NAND e avviato dal menu Wii U.

?> Dumpare i giochi Wii richiede la modifica del vWii, quindi assicurati di seguire tutta la [guida alla modifica del vWii](vwii-modding) prima di procedere.

!> E' **ILLEGALE** condividere i file dumpati con questa guida.  
Se hai intenti di utilizzare questa guida per condividere i tuoi giochi dumpati, non farlo.

### Cosa ti servirà {docsify-ignore}

1. L'ultima versione di [CleanRip](https://github.com/emukidid/cleanrip/releases/download/2.1.1/CleanRip-v2.1.1.zip).
1. Il file [wii.dat](https://github.com/emukidid/cleanrip/releases/download/2.1.1/wii.dat).

### Istruzioni {docsify-ignore}

1. Inserisci la scheda SD del tuo Wii U nel tuo computer.
1. Copia la cartella `apps` dal file `CleanRip-v2.1.1.zip` nella root della scheda SD.
1. Copia il file `wii.dat` nella root della scheda SD.
1. Togli la scheda SD dal computer e inseriscila nella console Wii U.

### Dumping del disco

1. Accendi il tuo Wii U e scegli l'icona del Menu Wii per entrare nel vWii.
1. Avvia l'Homebrew Channel.
1. Avvia CleanRip.
1. Leggi le avvertenze e premi A.
1. Seleziona Yes per abilitare Checksum Calculations.
1. Seleziona lo USB o la SD a dipendenza del dispositivo che vuoi utilizzare per il processo di dumping.
    - Si prega di notare che il dispositivo che sceglierai deve essere formattato in FAT32 o NTFS.
1. Premi A per continuare.
1. Seleziona No nella schermata che chiede di scaricare i file DAT di redump.org.
1. Inserisci il tuo disco e premi A.
1. Vai [su questa pagina](https://wiki.dolphin-emu.org/index.php?title=Category:Dual_Layer_Disc_games) per vedere se il tuo disco è a doppio strato.
1. Imposta tutto in modo da corrispondere a quanto segue:
    - Dual Layer: `Yes/No` (Seleziona `Yes` se il tuo disco è a doppio strato)
    - Chunk Size: `Max`
    - New device per chunk: `No`
1. Se vuoi dumpare più dischi, seleziona Yes per memorizzare le impostazioni. In caso contrario, seleziona No.

?> Preparati ad aspettare un po'. Il processo di dumping può richiedere dai 30 minuti a 1 ora a dipendenza della velocità della tua scheda SD.

### Unire i file divisi

?> Se hai dumpato il disco su un dispositivo formattato in FAT32, dovresti avere almeno due file che terminano con `.partX.iso`. Hanno bisogno di essere uniti.

#### Windows {docsify-ignore}

1. Copia tutti i file che condividono lo stesso nome e che terminano con `.partX.iso` in una cartella sul tuo computer.
1. Apri una finestra del Prompt dei comandi.
1. Usa il comando `cd <path>` e sostituisci `<path>` con il percorso dei tuoi file `.partX.iso`.
1. Usa il seguente comando come viene riportato affianco: `copy /b *.part?.iso game.iso`.

#### macOS/Linux {docsify-ignore}

1. Copia tutti i file che condividono lo stesso nome e che terminano con `.partX.iso` in una cartella sul tuo computer.
1. Open up a Terminal.
1. Usa il comando `cd <path>` e sostituisci `<path>` con il percorso dei tuoi file `.partX.iso`.
1. Use the following command as is: `cat *.part?.iso > game.iso`.
