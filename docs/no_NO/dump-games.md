# Dumpe Wii U Spill fra Disk

Ved å Dumpe en Wii U Disk, kan du installere en kopi av spillet til system NAND, eller en USB-enhet, slik at du kan spille det uten å sette inn disken.

::: tip

Dumping and installing games requires a working Homebrew setup, so make sure to finish the main guide on installing CFW first before following this.

:::

::: danger

It is **ILLEGAL** to share the files dumped with this guide.

If you intend to use this guide to share your dumped games, don't.

:::

## Dumping and Installing Wii U Discs

::: tip

Installing a game to the system memory (NAND) is not recommended as it's limited to either 8GB or 32GB depending on your model, making you run out of space pretty quickly if you want to install multiple games.

:::

::: tip

When installing a game to a USB device, we recommend that you use an HDD and not a flash drive, as those are not optimized for constant reading and writing, therefore making them fail quickly. Hvis den eksterne harddisken din ikke har eget strømadapter, trenger du en Y-kabel for å koble den til to USB-porter i Wii U konsollen din.

:::

::: danger

In order to install to a USB device, it has to be formatted by the Wii U. Doing this will erase (delete) all contents (documents, pictures, videos, PC data) off of it, and prevent it from being used on another system unless you reformat it. This _does_ include the vWii, meaning you will not be able to run Wii and GameCube disc images off the USB using USB loaders. For å formatere, plugg inn USB harddisken i Wii U konsollen, og så slå på konsollen, du vil da få beskjed om å formatere harddisken. Bekreft med "Yes".

:::

### Dette trenger du

- SD-kortet må ha nok plass til spillet du vil dumpe.
- Hvis du ønsker å installere til USB, så trenger du en USB harddisk (+ en Y-kabel hvis det trengs).
- The latest release of [WUP Installer GX2](https://wiiu.cdn.fortheusers.org/zips/wup_installer_gx2_wuhb.zip).
- The [wudd](https://wiiu.cdn.fortheusers.org/zips/wudd.zip) homebrew application.

### Instruksjoner

1. Copy the contents of the `wup_installer_gx2_wuhb.zip` file to the root of your SD Card.
2. Copy the contents of the newly downloaded wudd `.zip` file to the root of your SD Card.
3. Ta SD-kortet ut av PCen og sett det inn i Wii U konsollen.
4. Start opp Wii U'en og boot Aroma.
5. Start Wii U menyen og kjør wudd.
6. Select `Dump partition as .app`
7. Select the `Game` partition to start dumping.
8. Når det er ferdig, gå ut av wudd tilbake til Wii U-menyen.
9. Sett SD-kortet ditt i PC'en din.
10. Copy the `GMXXXXXXXXXXXXXXXX` folder from `sd:/wudump/WUP-X-XXXX` to the `install` folder on the root of your SD Card.
    - WUDD lager ikke en install mappe som standard. Du må lage en selv.
11. Løs ut og sett SD-kortet inn i Wii U-en.
12. Start Wii U menyen og kjør WUP Installer GX2.
13. Select your game (`GMXXXXXXXXXXXXXXXX`), press `Install` and confirm with `Yes`.
14. Velg "USB" for å installere til USB og "NAND" for å installere til NAND
15. Gå ut av WUP Installer GX2 tilbake til Wii U Menyen.
16. Nå er spillet ditt installert, og klart til å spille.
17. Ta SD-kortet ut av Wii U konsollen og sett den inn i PC'en din.
18. Delete the `GMXXXXXXXXXXXXXXXX` folder in the `install` directory on your SD Card to free up space.

## Flytte spill til USB

::: tip

If you don't want to keep the game installed on NAND, you can use the Wii U's data management to move the game to a USB device.

:::

::: danger

In order to move your game to a USB device, it has to be formatted by the Wii U. Doing this will erase all contents of it, and prevent it from being used on another system unless you reformat it.

:::

1. Koble USB-enheten til Wii U konsollen din.
2. Slå på Wii U konsollen.
3. Wii U systemet vil spørre deg om å formatere USB-enheten din. Bekreft med "Yes".
4. Gå inn på systeminnstillinger.
5. Navigate to `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`
6. Velg spillet og flytt all data (inkludert oppdateringer og DLC hvis dette er installert) over til USB-enheten.

## Flytte oppdateringer til USB

::: tip

If your disc game had DLC or updates installed, you will need to transfer the files over to your USB device. Du kan gjøre dette ved å bruke Wii U konsollens "data management".

:::

1. Slå på Wii U konsollen
2. Gå inn på systeminnstillinger.
3. Navigate to `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`.
4. Velg spillet ditt og flytt oppdateringen og DLC til USB-enheten.
