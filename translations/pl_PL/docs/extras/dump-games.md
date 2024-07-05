# Zrzucanie Zawartości Płyt Wii U
---
Zrzucanie zawartości twoich płyt pozwala na zainstalowanie kopii gry w pamięci NAND/USB, dzięki czemu możesz grać bez potrzeby wkładania płyty.

?> Zrzucanie i instalacja gier wymaga działającej konfiguracji Homebrew, więc upewnij się, że ukończyłeś główny poradnik na temat instalacji CFW zanim przejdziesz dalej.

!> **NIELEGALNE** jest udostępnianie plików zrzuconych za pomocą tego poradnika.  
Jeśli zamierzasz użyć tego przewodnika do dzielenia się twoimi zrzuconymi grami, nie rób tego.

### Dumping and Installing Wii U Discs {docsify-ignore}

?> Instalacja gry w pamięci systemowej (NAND) nie jest zalecana, ponieważ jest ona ograniczona do 8GB lub 32GB w zależności od modelu, co sprawia, że miejsce na gry skończy się bardzo szybko.

?> Podczas instalacji gry na urządzeniu USB zalecamy użycie dysków HDD, a nie dysków flash/SSD, ponieważ nie są one zoptymalizowane do ciągłego odczytywania i zapisywania danych, co sprawia, że szybko się zużywają. Jeśli twój dysk HDD nie jest zasilany z zewnątrz, będziesz potrzebował kabla Y, aby podłączyć go do dwóch gniazd USB na Wii U.

!> In order to install to a USB device, it has to be formatted by the Wii U. Doing this will erase (delete) all contents (documents, pictures, videos, PC data) off of it, and prevent it from being used on another system unless you reformat it. This *does* include the vWii, meaning you will not be able to run Wii and GameCube disc images off the USB using USB loaders. To format, plug your USB HDD into the Wii U, power on your Wii U, your Wii U will prompt you to format your HDD. Confirm with Yes.

#### Czego Potrzebujesz {docsify-ignore}

- Karta SD z odpowiednią ilością miejsca na gry, które będziesz zrzucał.
- If wanting to install to a USB, A USB HDD (+ a Y-cable if needed).
- The latest release of [WUP Installer GX2](https://wiiu.cdn.fortheusers.org/zips/wup_installer_gx2_wuhb.zip).
- The [wudd](https://wiiu.cdn.fortheusers.org/zips/wudd.zip) homebrew application.

#### Instrukcje {docsify-ignore}

1. Copy the contents of the `wup_installer_gx2_wuhb.zip` file to the root of your SD Card.
1. Copy the contents of the newly downloaded wudd `.zip` file to the root of your SD Card.
1. Take the SD Card out of your PC and insert it into your Wii U.
1. Power on your Wii U and boot into Aroma.
1. Launch the Wii U Menu and start the wudd app.
1. Select `Dump partition as .app`
1. Select the `Game` partition to start dumping.
1. When finished, exit wudd to the Wii U Menu.
1. Insert the SD Card into your computer.
1. Copy the `GMXXXXXXXXXXXXXXXX` folder from `sd:/wudump/WUP-X-XXXX` to the `install` folder on your SD Card.
    - If the `install` folder does not exist, create it.
1. Eject and insert the SD Card into your Wii U.
1. Open the Wii U Menu and then the WUP Installer GX2 app.
1. Select your game (`GMXXXXXXXXXXXXXXXX`), press `Install` and confirm with `Yes`.
1. Choose 'USB' to install to USB and 'NAND' to install to NAND
1. Exit the WUP Installer GX2 to the Wii U Menu.
1. You should see your game installed, ready to be played.
1. Take the SD Card out of your Wii U and plug it into your PC.
1. Delete the `GMXXXXXXXXXXXXXXXX` folder in the `install` directory on your SD Card to free up space.

### Moving Games To USB

?> If you don't want to keep the game installed on NAND, you can use the Wii U's data management to move the game to a USB device.

!> In order to move your game to a USB device, it has to be formatted by the Wii U. Doing this will erase all contents of it, and prevent it from being used on another system unless you reformat it.

1. Plug your USB device into the Wii U.
1. Włącz Wii U.
1. Your Wii U will prompt you to format your USB device. Confirm with Yes.
1. Open the Wii U's System Settings.
1. Navigate to `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`
1. Select the game and move all data (including updates and DLC if any are installed) to your USB device.

### Move Updates To USB

?> If your disc game had DLC or updates installed, you will need to transfer the files over to your USB device. You can do this using the Wii U's data management.

1. Power on your Wii U
1. Open the Wii U's System Settings.
1. Navigate to `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`.
1. Select your game and move the update and DLC data to the USB device.
