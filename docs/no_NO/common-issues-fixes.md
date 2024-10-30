# Common Issues & Fixes

## Vanlige feil med Haxchi

- **-3:** No SD Card detected. Sett inn SD-kortet på nytt og prøv igjen. Kontroller at SD-kortet er i FAT32-format. Hvis feilen vedvarer, kan du prøve å blåse inn i SD-kort åpningen, da det gjerne kan bli litt støvete.

- **-4:** SD detected but could not mount. Kontroller om SD-kortet bruker MBR og ikke GPT. Sjekk også at det ikke er andre partisjoner på SD-kortet og eventuelt slå dem sammen til én primærpartisjon.

- **-5:** Missing files on the SD. Check to see if your SD has Homebrew Launcher located in <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher<wbr>/homebrew_launcher.elf</code>.

## Nettleser feil

- **FSGetMountSource failed:** Same as -3 above, means no SD Card detected. Sett inn SD-kortet på nytt og prøv igjen. Dette kan også bety at SD kortet har på skrivelås (Tappen på siden av kortet er dratt ned istedenfor opp) eller at du har gitt SD kortet navnet "WIIU", som vi tidligere har sagt vil lage konflikter. Hvis det ikke er noen av disse problemene, se på det siste forslaget om -3 ovenfor.

- **FSOpenFile failed [...] payload.elf:** Missing payload file on SD. Skjekk at du har payload.elf i wiiu mappen, og at wiiu mappen er på roten av SD-kortet.

- **FSOpenFile failed:** Missing `homebrew_launcher` on SD. Make sure you have `homebrew_launcher.elf` in the <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher</code> folder.

- **SD Mount Failed:** Similar to -4, the console recognizes the SD card but could not mount it. Sørg for at den er formatert riktig, og at den ikke er skadet. I tillegg er SD kort fra velkjente merkevarer mer kompatibelt (f.eks. SanDisk, Samsung, Lexar, etc.) and less likely to have issues.

## Data Management spør om "delete unnecessary data", what does it mean?

Dette refererer til filer som ligger igjen fra ufullstendige installasjoner. Velg alltid "yes" for å slette disse dataene, da det bare tar plass uten grunn.
If it ever stays stuck on deleting the data in an infinite loop, you can manually delete the data yourself.\
Use FTPiiU Everywhere and browse to `/storage_mlc/usr/import` then delete any files in the folder if any exists. Det er her filene havner etter ufullstendige installasjoner. It'll be `/storage_usb/usr/import` if installed to a USB.\
The `import` folder should always be kept empty.

## Ekstern harddisk fungerer ikke eller lager en rar tikkelyd, hva skal jeg gjøre?

Årsaken til dette er at Wii U konsollene ikke gir nok strøm gjennom én USB-port til bruk av eksterne harddisker.

Du kan løse dette ved å enten bruke en ekstern harddisk med egen strømkilde, eller bruke en Y-Kabel for å koble den eksterne harddisken til to USB-porter.

Dersom den eksterne harddisken fungerte i lengre tid uten strømadapter eller Y-kabel, og plutselig sluttet å virke for noen, eller alle spill, så er det det samme problemet og kan fikses ved å bruke en Y-kabel.

## When extracting some of the files there are duplicates of certain ones called "info.json" & "manifest.install", what do I do with those?

Du kan la dem ligge, slette dem eller kopiere over dem med de nye filene. Disse filene brukes ikke i prosessen, derfor er det ingen forskjell på om de er der eller ikke.

## Wii U konsollen min mistet plutselig internett, og jeg har en ekstern harddisk oppå konsollen min. Hva må jeg gjøre?

The internal antenna may have been influenced by the hard drive magnet.\
You can move the HDD to a different position atop the Wii U, or move it off the Wii U entirely.
