# Common Issues & Fixes

## Errori comuni di Haxchi

- **-3:** No SD Card detected. Re-inserisci la scheda SD e riprova. Controlla che la SD sia formattata in FAT32. Se l'errore persiste, prova a soffiare dentro lo slot della SD, visto che potrebbe trovarsi eventuale polvere al suo interno.

- **-4:** SD detected but could not mount. Controlla se la SD abbia lo schema di partizione in formato MBR e non GPT. Controlla anche se ci sono altre partizioni nella SD e uniscile con la partizione principale.

- **-5:** Missing files on the SD. Check to see if your SD has Homebrew Launcher located in <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher<wbr>/homebrew_launcher.elf</code>.

## Errori del browser

- **FSGetMountSource failed:** Same as -3 above, means no SD Card detected. Re-inserisci la SD e riprova. This could also mean that the SD card is locked (Slider is down instead of up) or the SD card label is "WIIU", which is stated in the guide causes conflict. If it's not any of these issues, refer to the last suggestion from -3.

- **FSOpenFile failed [...] payload.elf:** Missing payload file on SD. Make sure you have payload.elf in the wiiu folder, and the wiiu folder on the root.

- **FSOpenFile failed:** Missing `homebrew_launcher` on SD. Make sure you have `homebrew_launcher.elf` in the <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher</code> folder.

- **SD Mount Failed:** Similar to -4, the console recognizes the SD card but could not mount it. Make sure it is formatted properly, and it is not damaged. Also, your SD card is more compatible with reputable brands (i.e. SanDisk, Samsung, Lexar, etc.) and less likely to have issues.

## Gestione Dati chiede di cancellare dati non necessari, che significa?

Questo si riferisce a file rimasti da installazioni incomplete. Seleziona sempre "Si" per cancellare questi dati, visto che occupano spazio per nessun motivo.
If it ever stays stuck on deleting the data in an infinite loop, you can manually delete the data yourself.\
Use FTPiiU Everywhere and browse to `/storage_mlc/usr/import` then delete any files in the folder if any exists. Questo è dove le installazioni parziali sono situate dopo installazioni incomplete. It'll be `/storage_usb/usr/import` if installed to a USB.\
The `import` folder should always be kept empty.

## Il mio HDD non funziona o fa un suono strano di un click, cosa dovrei fare?

Il motivo è perchè il Wii U non da abbastanza corrente dalla porta USB usando l'HDD.

Puoi risolvere questo usando un HDD alimentato o un cavo-Y per connettere l'HDD con due porte USB.

Se l'HDD ha smesso di funzionare per alcuni/tutti i giochi, è lo stesso problema e può essere risolto con gli stessi metodi.

## When extracting some of the files there are duplicates of certain ones called "info.json" & "manifest.install", what do I do with those?

Niente di speciale, puoi lasciarli lì, eliminarli o sostituirli con dei nuovi. Questi file non vengono utilizzati nel processo, quindi cancellandoli o togliendoli dalla directory non cambierà nulla.

## La mia console all'improvviso ha perso la connettività online e ho un HDD sulla parte superiore della console, che faccio?

The internal antenna may have been influenced by the hard drive magnet.\
You can move the HDD to a different position atop the Wii U, or move it off the Wii U entirely.
