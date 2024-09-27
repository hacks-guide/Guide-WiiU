# Dumping Wii U Discs

Dumpare i tuoi dischi ti permette di installare una copia del tuo gioco sulla NAND/dispositivo USB così da poterci giocare senza disco.

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

When installing a game to a USB device, we recommend that you use an HDD and not a flash drive, as those are not optimized for constant reading and writing, therefore making them fail quickly. Se il tuo HDD non è alimentato esternamente, ti servirà un cavo a Y per collegarlo alle due porte USB del Wii U.

:::

::: danger

In order to install to a USB device, it has to be formatted by the Wii U. Doing this will erase (delete) all contents (documents, pictures, videos, PC data) off of it, and prevent it from being used on another system unless you reformat it. This _does_ include the vWii, meaning you will not be able to run Wii and GameCube disc images off the USB using USB loaders. To format, plug your USB HDD into the Wii U, power on your Wii U, your Wii U will prompt you to format your HDD. Conferma con Sì.

:::

### Cosa ti servirà

- La tua scheda SD ha bisogno di spazio sufficiente da contenere il gioco che vuoi dumpare.
- Se si vuole installare su un USB, un HDD USB (+ un cavo Y se necessario).
- The latest release of [WUP Installer GX2](https://wiiu.cdn.fortheusers.org/zips/wup_installer_gx2_wuhb.zip).
- The [wudd](https://wiiu.cdn.fortheusers.org/zips/wudd.zip) homebrew application.

### Istruzioni

1. Copy the contents of the `wup_installer_gx2_wuhb.zip` file to the root of your SD Card.
2. Copy the contents of the newly downloaded wudd `.zip` file to the root of your SD Card.
3. Togli la scheda SD dal tuo PC e inseriscila nel tuo Wii U.
4. Power on your Wii U and boot into Aroma.
5. Launch the Wii U Menu and start the wudd app.
6. Select `Dump partition as .app`
7. Select the `Game` partition to start dumping.
8. When finished, exit wudd to the Wii U Menu.
9. Inserisci la scheda SD nel tuo computer.
10. Copy the `GMXXXXXXXXXXXXXXXX` folder from `sd:/wudump/WUP-X-XXXX` to the `install` folder on the root of your SD Card.
    - WUDD does not create an install folder by default. You have to create it.
11. Espelli e inserisci la scheda SD nel tuo Wii U.
12. Open the Wii U Menu and then the WUP Installer GX2 app.
13. Select your game (`GMXXXXXXXXXXXXXXXX`), press `Install` and confirm with `Yes`.
14. Seleziona 'USB' per installare su USB e 'NAND' per installare su NAND
15. Exit the WUP Installer GX2 to the Wii U Menu.
16. Dovresti vedere il tuo gioco installato, pronto per essere giocato.
17. Togli la scheda SD dal tuo Wii U e inseriscila nel tuo PC.
18. Delete the `GMXXXXXXXXXXXXXXXX` folder in the `install` directory on your SD Card to free up space.

## Spostare i giochi su USB

::: tip

If you don't want to keep the game installed on NAND, you can use the Wii U's data management to move the game to a USB device.

:::

::: danger

In order to move your game to a USB device, it has to be formatted by the Wii U. Doing this will erase all contents of it, and prevent it from being used on another system unless you reformat it.

:::

1. Collega il tuo dispositivo USB al Wii U.
2. Accendi il tuo Wii U.
3. Il tuo Wii U ti chiederà di formattare il tuo dispositivo USB. Conferma con Sì.
4. Apri le Impostazioni della console del Wii U.
5. Navigate to `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`
6. Seleziona il gioco e sposta tutti i dati (compreso aggiornamenti e DLC se installati) sul tuo dispositivo USB.

## Spostare aggiornamenti su USB

::: tip

If your disc game had DLC or updates installed, you will need to transfer the files over to your USB device. Puoi farlo utilizzando la Gestione dati del Wii U.

:::

1. Accendi il tuo Wii U
2. Apri le Impostazioni della console del Wii U.
3. Navigate to `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`.
4. Seleziona il tuo gioco e sposta i dati di aggiornamento e i DLC sul dispositivo USB.
