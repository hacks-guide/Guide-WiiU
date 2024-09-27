# Dumping Wii U Discs

Zrzucanie zawartości twoich płyt pozwala na zainstalowanie kopii gry w pamięci NAND/USB, dzięki czemu możesz grać bez potrzeby wkładania płyty.

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

When installing a game to a USB device, we recommend that you use an HDD and not a flash drive, as those are not optimized for constant reading and writing, therefore making them fail quickly. Jeśli twój dysk HDD nie jest zasilany z zewnątrz, będziesz potrzebował kabla Y, aby podłączyć go do dwóch gniazd USB na Wii U.

:::

::: danger

In order to install to a USB device, it has to be formatted by the Wii U. Doing this will erase (delete) all contents (documents, pictures, videos, PC data) off of it, and prevent it from being used on another system unless you reformat it. This _does_ include the vWii, meaning you will not be able to run Wii and GameCube disc images off the USB using USB loaders. To format, plug your USB HDD into the Wii U, power on your Wii U, your Wii U will prompt you to format your HDD. Confirm with Yes.

:::

### Czego potrzebujesz

- Karta SD z odpowiednią ilością miejsca na gry, które będziesz zrzucał.
- If wanting to install to a USB, A USB HDD (+ a Y-cable if needed).
- The latest release of [WUP Installer GX2](https://wiiu.cdn.fortheusers.org/zips/wup_installer_gx2_wuhb.zip).
- The [wudd](https://wiiu.cdn.fortheusers.org/zips/wudd.zip) homebrew application.

### Instrukcje

1. Copy the contents of the `wup_installer_gx2_wuhb.zip` file to the root of your SD Card.
2. Copy the contents of the newly downloaded wudd `.zip` file to the root of your SD Card.
3. Take the SD Card out of your PC and insert it into your Wii U.
4. Power on your Wii U and boot into Aroma.
5. Launch the Wii U Menu and start the wudd app.
6. Select `Dump partition as .app`
7. Select the `Game` partition to start dumping.
8. When finished, exit wudd to the Wii U Menu.
9. Insert the SD Card into your computer.
10. Copy the `GMXXXXXXXXXXXXXXXX` folder from `sd:/wudump/WUP-X-XXXX` to the `install` folder on the root of your SD Card.
    - WUDD does not create an install folder by default. You have to create it.
11. Eject and insert the SD Card into your Wii U.
12. Open the Wii U Menu and then the WUP Installer GX2 app.
13. Select your game (`GMXXXXXXXXXXXXXXXX`), press `Install` and confirm with `Yes`.
14. Choose 'USB' to install to USB and 'NAND' to install to NAND
15. Exit the WUP Installer GX2 to the Wii U Menu.
16. You should see your game installed, ready to be played.
17. Take the SD Card out of your Wii U and plug it into your PC.
18. Delete the `GMXXXXXXXXXXXXXXXX` folder in the `install` directory on your SD Card to free up space.

## Moving Games To USB

::: tip

If you don't want to keep the game installed on NAND, you can use the Wii U's data management to move the game to a USB device.

:::

::: danger

In order to move your game to a USB device, it has to be formatted by the Wii U. Doing this will erase all contents of it, and prevent it from being used on another system unless you reformat it.

:::

1. Plug your USB device into the Wii U.
2. Włącz Wii U.
3. Your Wii U will prompt you to format your USB device. Confirm with Yes.
4. Open the Wii U's System Settings.
5. Navigate to `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`
6. Select the game and move all data (including updates and DLC if any are installed) to your USB device.

## Move Updates To USB

::: tip

If your disc game had DLC or updates installed, you will need to transfer the files over to your USB device. You can do this using the Wii U's data management.

:::

1. Power on your Wii U
2. Open the Wii U's System Settings.
3. Navigate to `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`.
4. Select your game and move the update and DLC data to the USB device.
