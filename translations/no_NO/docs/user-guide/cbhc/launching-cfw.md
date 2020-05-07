# CBHC

## Start CFW {docsify-ignore}

Nå som du har en NAND backup i tilfelle noe går galt senere, kan du kjøre CFW på systemet ditt.

I motsetning til systemer som DSi, Wii eller 3DS, er Wii U CFW midlertidig. Dette betyr at så snart systemet starter på nytt, vil du miste CFW og må følge disse instruksjonene igjen. Det trenger du ikke ved å installere CBHC på en Haxchi CFW installasjon.

!> Installere CBHC feil kan "bricke" Wii U konsollen din. Sørg for å følge "CBHC reglene" når man installerer CBHC: <br>- DS spillet må være legitimt installert fra eShop <br>- Ikke formater systemet mens CBHC er installert <br>- Ikke slett brukerkontoen som kjøpte DS VC spillet <br>- Ikke re-installer det samme spillet med WUP Installer eller eShop <br>- Ikke installer Haxchi over CBHC <br>- Ikke slett DS Virtual Console spillet uten å [avinstallere CBHC first](../uninstall-cbhc) <br>- Ikke flytt DS Virtual Console spillet til en USB-lagringsenhet

!> Ved å bryte en av reglene ovenfor vil "bricke" konsollen.

### Instruksjoner

1. Ta SD-kortet ut av PCen og sett det inn i Wii U konsollen.
1. Hvis du ikke har gjort det enda, last ned DS VC spillet du valgte fra eShop.
1. Start Homebrew Launcher på Wii U konsollen din som [forklart tidligere](browser-exploit).
1. Kjør Haxchi appen.
1. Bruk D-padden til å navigere markøren til spillet du ønsker å installere Haxchi over og trykk på A knappen for å installere den.
1. Når installasjonen er ferdig, vil konsollen gå tilbake til Wii U menyen. Der vil du se spillet ditt erstattet med et Haxchi ikon.
1. Run the modified DS game. This will reboot the console and enable CFW.
1. Run the modified DS game again and hold the A button after launching it. This will run the Homebrew Launcher.
1. Navigate the Homebrew launcher and run the CBHC app.
1. Use the DPAD to navigate the cursor to the game you previously installed Haxchi to and press the A button to install CBHC.
1. Når installasjonen er ferdig, vil konsollen gå tilbake til Wii U menyen.
1. Reboot your console. If CBHC installed correctly, you should see a new boot menu.
1. Use the DPAD to navigate to `Autoboot: Disabled` and press the A button until it says `Autoboot: System Menu`.
1. Use the DPAD to navigate to `Boot System Menu` and press the A button. This will launch the Wii U Menu with CFW enabled.
1. Your console now automatically boots into CFW every reboot.
1. You can now re-attach any USB devices you had attached before starting the guide.