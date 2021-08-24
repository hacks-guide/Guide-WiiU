# Problemi comuni & Soluzioni {docsify-ignore-all}
---
### Errori comuni di Haxchi

 - **-3:** "No SD Card detected.". Re-inserisci la scheda SD e riprova. Controlla che la SD sia formattata in FAT32. Se l'errore persiste, prova a soffiare dentro lo slot della SD, visto che potrebbe trovarsi eventuale polvere al suo interno.

 - **-4:** "SD detected but could not mount.". Controlla se la SD abbia lo schema di partizione in formato MBR e non GPT. Controlla anche se ci sono altre partizioni nella SD e uniscile con la partizione principale.

 - **-5:** "Missing files on the SD.". Controlla se nella tua SD l'Homebrew Launcher è situato in <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher<wbr>/homebrew_launcher.elf</code>.

### Errori del browser

 - **FSGetMountSource failed:**è uguale a -3, indica che la SD non viene rilevata. Re-inserisci la SD e riprova.

 - **FSOpenFile failed [...] payload.elf:** il payload non è stato trovato nella SD. Controlla di avere il file payload.elf nella cartella wiiu.

 - **FSOpenFile failed:** l'`homebrew_launcher` non è presente all'interno della SD. Controlla di avere `homebrew_launcher.elf` nella cartella <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher</code>.

### Gestione Dati chiede di cancellare dati non necessari, che significa?

Questo si riferisce a file rimasti da installazioni incomplete. Seleziona sempre "Si" per cancellare questi dati, visto che occupano spazio per nessun motivo. Se si blocca durante l'eliminazione dei file, puoi cancellarli manualmente.  
Usa FTPiiU Everywhere, naviga all'interno della cartella `/storage_mlc/usr/import` e cancella tutti i file in quella cartella, se presenti. Questo è dove le installazioni parziali sono situate dopo installazioni incomplete. Sarà `/storage_usb/usr/import` se è installato su una USB.  
La cartella `import` deve essere sempre vuota.

### Il mio HDD non funziona o fa un suono strano di un click, cosa dovrei fare?

Il motivo è perchè il Wii U non da abbastanza corrente dalla porta USB usando l'HDD.

Puoi risolvere questo usando un HDD alimentato o un cavo-Y per connettere l'HDD con due porte USB.

Se l'HDD ha smesso di funzionare per alcuni/tutti i giochi, è lo stesso problema e può essere risolto con gli stessi metodi.

### Quando si estraggono alcuni file ci sono determinati duplicati chiamati "info.json" & "manifest.install", cosa devo fare con questi?

Niente di speciale, puoi lasciarli lì, eliminarli o sostituirli con dei nuovi. Questi file non vengono utilizzati nel processo, quindi cancellandoli o togliendoli dalla directory non cambierà nulla.

### La mia console all'improvviso ha perso la connettività online e ho un HDD sulla parte superiore della console, che faccio?

The internal antenna may have been influenced by the hard drive magnet.
You can move the HDD to a different position atop the Wii U, or move it off the Wii U entirely.
----------

# SD Card Layout
This is an example of what your SD Card should look like after you set it up. If you have a `-5` error or the `FSOpenFile failed` error your file locations may be incorrect.
```
💾sd:
 ┣ 📂cbhc                             (CBHC only)
 ┃ ┣ 📜bootDrcTex.tga
 ┃ ┣ 📜bootTvTex.tga
 ┃ ┣ 📜iconTex.tga
 ┃ ┗ 📜title.txt
 ┣ 📂haxchi                           (Haxchi & CBHC only)
 ┃ ┣ 📜bootDrcTex.tga
 ┃ ┣ 📜bootTvTex.tga
 ┃ ┣ 📜config.txt
 ┃ ┣ 📜iconTex.tga
 ┃ ┗ 📜title.txt
 ┣ 📂install
 ┃ ┗ 📂Homebrew Launcher Channel      (Haxchi & CBHC only)
 ┃   ┣ 📜00000000.app
 ┃   ┣ 📜00000003.h3
 ┃   ┣ ...
 ┃   ┣ 📜title.cert
 ┃   ┣ 📜title.tik
 ┃   ┗ 📜title.tmd
 ┗ 📂wiiu
   ┣ 📂apps
   ┃ ┣ 📂homebrew_launcher
   ┃ ┃ ┣ 📜homebrew_launcher.elf
   ┃ ┃ ┣ 📜icon.png
   ┃ ┃ ┗ 📜meta.xml
   ┃ ┗ (All other apps like disc2app, nanddumper, etc. should be here too)
   ┗ 📜payload.elf
```
