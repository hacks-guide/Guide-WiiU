# Vanlige problemer & Løsninger {docsify-ignore-all}
---
### Vanlige feil med Haxchi

 - **-3:** No SD Card detected. Sett inn SD-kortet på nytt og prøv igjen. Kontroller at SD-kortet er i FAT32-format. Hvis feilen vedvarer, kan du prøve å blåse inn i SD-kort åpningen, da det gjerne kan bli litt støvete.

 - **-4:** SD detected but could not mount. Kontroller om SD bruker MBR og ikke GPT. Sjekk også at det ikke er andre partisjoner på SD-kortet og eventuelt slå dem sammen til én primærpartisjon.

 - **-5:** Missing files on the SD. Sjekk om SD-kortet ditt har Homebrew Launcher plassert i <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher<wbr>/homebrew_launcher.elf</code>.

### Nettleser feil

 - **FSGetMountSource failed:** Samme som -3 ovenfor, betyr at SD-kortet ikke blir registrert. Sett inn SD-kortet på nytt og prøv igjen.

 - **FSOpenFile failed [...] payload.elf:** Mangler payload filen på SD-kortet. Kontroller at du har en payload.elf fil i wiiu mappen.

 - **FSOpenFile failed:** Mangler `homebrew_launcher` på SD-kortet. Skjekk at du har `homebrew_launcher.elf` i <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher</code> mappen.

### Data Management spør om "delete unnecessary data", what does it mean?

Dette refererer til filer som ligger igjen fra ufullstendige installasjoner. Velg alltid "yes" for å slette disse dataene, da det bare tar plass uten grunn. Hvis det ser ut som det står på sletting av data i en uendelig loop, kan du manuelt slette dataene selv.   
Bruk FTPiiU Everywhere og manøvrer til `/storage_mlc/usr/import` og slett deretter alle filer i mappen hvis det er noen. Det er her filene havner etter ufullstendige installasjoner. Det betyr at det er `/storage_usb/usr/import` hvis det er installert til en USB-enhet.  
Mappen `import` bør alltid være tom.

### HDD fungerer ikke eller lager en rar tikkelyd, hva skal jeg gjøre?

Årsaken til dette er at Wii U konsollene ikke gir nok strøm gjennom én USB-port til bruk av eksterne harddisker.

Du kan løse dette ved å enten bruke en ekstern harddisk med egen strømkilde, eller bruke en Y-Kabel for å koble den eksterne harddisken til to USB-porter.

Dersom den eksterne harddisken fungerte i lengre tid og plutselig sluttet å virke for noen spill/alle spill, så er det den samme problemstillingen og kan fikses ved hjelp av de samme metodene.

### Når jeg pakker ut noen av filene er det duplikater av noen som heter "info.json" & "manifest.install", hva gjør jeg med dem?

Nothing special, you can leave them there, delete them or replace them with new ones. Those files are not used in the process, therefore, won't have any impact by being or not being there.

### My console suddenly lost online connectivity and I have an HDD sitting on top of the console, what should I do?

The internal antenna may have been influenced by the hard drive magnet.  
You can move the HDD to a different position atop the Wii U, or move it off the Wii U entirely.