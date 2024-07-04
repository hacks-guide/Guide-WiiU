# Ofte stilte spørsmål {docsify-ignore-all}
---

### Er det noen risikoer ved å bruke homebrew?

For øyeblikket er det ingen risiko for å bli banned av Nintendo ved bruk av homebrew med mindre du jukser i online spill, eller svindler eShop. Men du bør alltid være forsiktig med å kjøre nedlastede homebrew filer, spesielt hvis du ikke stoler på kilden, da homebrew kan potensielt skade systemet ditt!

### Hva er exploits?

Exploits er inngangsporter man kan utnytte for å kjøre homebrew. I hovedguiden, vil du bruke exploits sånn som browser exploit (http://wiiuexploit.xyz) og PayloadLoader (Health & Safety exploit). Alle nåværende exploits åpner `SD:/wiiu/payload.elf` som hjelper resten av homebrew å kjøre.

### Hva er payloads?

Payloads, som normalt har filnavnet `payload.elf`, finnes for å gjøre det lettere å kjøre forskjellige exploits på det samme stadiet, noe som gjør det lettere å oppdatere. Det har ingenting å si hvilket exploit som loader payload, resultatet vil alltid være det samme. Flere payloads kan byttes imellom hverandre ved å bruke PayloadLoaderPayload. Payloaden vi bruker i hovedguiden er CustomRPXLoader som kjører `SD:/wiiu/payload.rpx` og `payload.rpx` som vi bruker i guiden er EnvironmentLoader, som gir deg tilgang til å kjøre forskjellige "environments".

### Hva er Environments?

Ett Environment er en kolleksjon av "setup moduler", som vil kjøre i en bestemt rekkefølge når man starter ett environment. Eksempel på environments er Aroma og Tiramisu. Setup moduler er små biter med homebrew/kode som kjører en gang for å sette opp ett environment.

### Hvordan sletter man update mappa for å blokkere systemoppdateringer på Wii U konsollen

Hvis du vil slette update mappa for å blokkere systemoppdateringer, skjekk ut hvordan man kan [Blokkere Oppdateringer ](block-updates).

### Hva slags SD-kort størrelse anbefales?

 - **Installering av spill:** 32gb (man kan bruke mindre størrelser, men noen spill er oppe i 20gb)
 - **Kjøre spill mods:** 8gb (FAT32 USB penn kan også brukes til mods)
 - **Bare homebrew-apper:** Alle størrelser.

**Anbefalte merker:** SanDisk, Samsung eller PNY

?> Merk: Unngå class 4 SD-kort, og kort fra eBay!

### Kan jeg installere homebrew på Wii U med en USB penn i stedenfor ett SD-kort?

Nei, du må ha et SD-kort for et første gangs oppsett. En USB-enhet kan deretter brukes til å installere spill, VC injections osv, men ikke lagre homebrew apper som er nødvendig for å sette opp alt.

### Når jeg pakker ut noen av filene er det duplikater av noen som heter "info.json" & "manifest.install", hva gjør jeg med dem?

Du kan la dem ligge, slette dem eller kopiere over dem med de nye filene. Disse filene brukes ikke i prosessen, derfor er det ingen forskjell på om de er der eller ikke.

### Hva er en Wii U formatert USB lagringsenhet?

Det er en USB penn eller harddisk som er formatert av en Wii U konsoll til sitt proprietære format.  
En Wii U-formatert USB-enhet ***kan ikke leses av noen andre enheter enn Wii U konsollen som formaterte den. ***   
Hvis du vil bruke den med en annen Wii U konsoll eller en PC, må du formatere den igjen.
