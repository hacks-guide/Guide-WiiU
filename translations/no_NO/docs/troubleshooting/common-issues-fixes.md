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

Dette refererer til filer som ligger igjen fra ufullstendige installasjoner. Velg alltid "yes" for å slette disse dataene, da det bare tar plass uten grunn. If it ever stays stuck on deleting the data in an infinite loop, you can manually delete the data yourself.  
Use FTPiiU Everywhere and browse to `/storage_mlc/usr/import` then delete any files in the folder if any exists. This is where the partial installs exist after incomplete installs. It'll be `/storage_usb/usr/import` if installed to a USB.  
The `import` folder should always be kept empty.

### My HDD doesn't work or makes a weird clicking sound, what should I do?

The reason behind that is that the Wii U doesn't give enough power through one USB port to use the Hard Drive.

You can fix this by either using a powered HDD or using a Y-Cable to connect the HDD to two USB ports.

If your HDD worked for some time and then stopped working for some games/all games, it is the same issue and can be fixed with the same methods.

### When extracting some of the files there are duplicates of certain ones called "info.json" & "manifest.install", what do I do with those?

Nothing special, you can leave them there, delete them or replace them with new ones. Those files are not used in the process, therefore, won't have any impact by being or not being there.

### My console suddenly lost online connectivity and I have an HDD sitting on top of the console, what should I do?

The internal antenna may have been influenced by the hard drive magnet.  
You can move the HDD to a different position atop the Wii U, or move it off the Wii U entirely.