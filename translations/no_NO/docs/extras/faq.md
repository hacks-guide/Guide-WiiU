# Ofte stilte spørsmål {docsify-ignore-all}
---

### Er det noen risikoer ved å bruke homebrew?

For øyeblikket er det ingen risiko for å bli banned av Nintendo ved bruk av homebrew med mindre du jukser i online spill, eller svindler eShop. Men du bør alltid være forsiktig med å kjøre nedlastede homebrew filer, spesielt hvis du ikke stoler på kilden, da homebrew kan potensielt skade systemet ditt!

### Hva er exploits?

Exploits er inngangsporter man kan utnytte for å kjøre homebrew. I hovedguiden, vil du bruke exploits sånn som browser exploit (http://wiiuexploit.xyz) og PayloadLoader (Health & Safety exploit). Alle nåværende exploits åpner `SD:/wiiu/payload.elf` som hjelper resten av homebrew å kjøre.

### Hva er payloads?

Payloads, som normalt har filnavnet `payload.elf`, finnes for å gjøre det lettere å kjøre forskjellige exploits på det samme stadiet, noe som gjør det lettere å oppdatere. Det har ingenting å si hvilket exploit som loader payload, resultatet vil alltid være det samme. Flere payloads kan byttes imellom hverandre ved å bruke PayloadLoaderPayload. Payloaden vi bruker i hovedguiden er CustomRPXLoader som kjører `SD:/wiiu/payload.rpx` og `payload.rpx` som vi bruker i guiden er EnvironmentLoader, som gir deg tilgang til å kjøre forskjellige "environments".

### Hva er Environments?

Ett Environment er en kolleksjon av "setup moduler", som vil kjøre i en bestemt rekkefølge når man starter ett environment. Tiramisu er navnet på ett environment. Setup moduler er små biter med homebrew/kode som kjører en gang for å sette opp ett environment.

### How to Delete Update Folder to Block Updates on Wii U

If you want to delete the update folder to block updates, see its tab in the [Blocking Updates guide](block-updates).

### What SD Card size is recommended?

 - **Installering av spill:** 32gb (man kan bruke mindre størrelser, men noen spill er oppe i 20gb)
 - **Kjøre spill mods:** 8gb (FAT32 USB penn kan også brukes til mods)
 - **Bare homebrew-apper:** Alle størrelser.

**Recommended brands:** SanDisk, Samsung or PNY

?> Note: Avoid class 4 SD Cards, and avoid eBay!

### Can I install homebrew on Wii U with a USB instead of SD Card?

No, you must have an SD Card for a first time setup. A USB can then be used to install game backups, Virtual Console injects, etc, but not to store homebrew applications which are required to set everything up.

### Når jeg pakker ut noen av filene er det duplikater av noen som heter "info.json" & "manifest.install", hva gjør jeg med dem?

Du kan la dem ligge, slette dem eller kopiere over dem med de nye filene. Those files are not used in the process, and therefore, won't have any impact by being or not being there.

### What is a Wii U formatted USB drive?

It's a USB drive that has been formatted by a Wii U console to its proprietary format.  
A Wii U formatted USB drive ***cannot be read by any other devices than the Wii U that originally formatted it.***  
If you ever want to use it with another Wii U console or any other devices, you will have to reformat it.
