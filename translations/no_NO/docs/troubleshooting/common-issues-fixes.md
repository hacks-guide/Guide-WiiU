# Vanlige problemer & Løsninger {docsify-ignore-all}
---
### Vanlige feil med Haxchi

 - **-3:** No SD Card detected. Sett inn SD-kortet på nytt og prøv igjen. Kontroller at SD-kortet er i FAT32-format. Hvis feilen vedvarer, kan du prøve å blåse inn i SD-kort åpningen, da det gjerne kan bli litt støvete.

 - **-4:** SD detected but could not mount. Kontroller om SD-kortet bruker MBR og ikke GPT. Sjekk også at det ikke er andre partisjoner på SD-kortet og eventuelt slå dem sammen til én primærpartisjon.

 - **-5:** Missing files on the SD. Sjekk om SD-kortet ditt har Homebrew Launcher plassert i <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher<wbr>/homebrew_launcher.elf</code>.

### Nettleser feil

 - **FSGetMountSource failed:** Samme som -3 ovenfor, betyr at SD-kortet ikke blir registrert. Sett inn SD-kortet på nytt og prøv igjen. This could also mean that the SD card is locked (Slider is down instead of up) or the SD card label is "WIIU", which is stated in the guide causes conflict. If it's not any of these issues, refer to the last suggestion from -3.


 - **FSOpenFile failed [...] payload.elf:** Mangler payload filen på SD-kortet. Kontroller at du har en payload.elf fil i wiiu mappen.

 - **FSOpenFile failed:** Mangler `homebrew_launcher` på SD-kortet. Skjekk at du har `homebrew_launcher.elf` i <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher</code> mappen.

 - **SD Mount Failed:** Similar to -4, the console recognizes the SD card but could not mount it. Make sure it is formatted properly. Also, your SD card is more compatible with reputable brands (i.e. SanDisk, Samsung, Lexar, etc.) and less likely to have issues.

### Data Management spør om "delete unnecessary data", what does it mean?

Dette refererer til filer som ligger igjen fra ufullstendige installasjoner. Velg alltid "yes" for å slette disse dataene, da det bare tar plass uten grunn. Hvis den sletter i en uendelig loop, kan du manuelt slette dataene selv.   
Bruk FTPiiU Everywhere og manøvrer til `/storage_mlc/usr/import` og slett alt i mappen hvis det er noe der. Det er her filene havner etter ufullstendige installasjoner. Bruker du en USB-enhet så er adressen `/storage_usb/usr/import`.  
Mappen `import` bør alltid være tom.

### Ekstern harddisk fungerer ikke eller lager en rar tikkelyd, hva skal jeg gjøre?

Årsaken til dette er at Wii U konsollene ikke gir nok strøm gjennom én USB-port til bruk av eksterne harddisker.

Du kan løse dette ved å enten bruke en ekstern harddisk med egen strømkilde, eller bruke en Y-Kabel for å koble den eksterne harddisken til to USB-porter.

Dersom den eksterne harddisken fungerte i lengre tid uten strømadapter eller Y-kabel, og plutselig sluttet å virke for noen, eller alle spill, så er det det samme problemet og kan fikses ved å bruke en Y-kabel.

### Når jeg pakker ut noen av filene er det duplikater av noen som heter "info.json" & "manifest.install", hva gjør jeg med dem?

Du kan la dem ligge, slette dem eller kopiere over dem med de nye filene. Disse filene brukes ikke i prosessen, derfor er det ingen forskjell på om de er der eller ikke.

### Wii U konsollen min mistet plutselig internett, og jeg har en ekstern harddisk oppå konsollen min. Hva må jeg gjøre?

Wifi antenna inni konsollen kan bli forstyrra av magneten inni den eksterne hard disken.  
Du kan flytte harddisken til en annen posisjon oppå Wii U'en, eller flytte den litt vekk fra Wii U'en.
