# Gjenopprett en korrupt IOS
---
Denne siden vil hjelpe deg med å gjenopprette en korrupt IOS i vWii.

!> Ikke bruk denne metoden til noe annet enn å [Gjenopprette Mii Channel](recover-mii-channel) eller neste side.

### Dette trenger du

<!-- tabs:start -->

#### **Windows**

- En fungerende [Homebrew installasjon](introduction) på Wii U siden
- Denne utgaven av [FTPiiU Everywhere](http://wiiubru.com/appstore/zips/fpiiu-cbhc.zip)
- En FTP-klient som for eksempel [FileZilla](https://filezilla-project.org/download.php?show_all=1)
- <a href="https://github.com/ihaveamac/overwrite-wiiu-titlehash/releases/download/v1.0/overwrite-wiiu-titlehash.exe" download>overwrite-wiiu-titlehash.exe</a>

#### **macOS & Linux**

- En fungerende [Homebrew installasjon](introduction) på Wii U siden
- Denne utgaven av [FTPiiU Everywhere](http://wiiubru.com/appstore/zips/fpiiu-cbhc.zip)
- Siste utgave av [Python](https://www.python.org/downloads/)
- En FTP-klient som for eksempel [FileZilla](https://filezilla-project.org/download.php?show_all=1)
- <a href="https://github.com/ihaveamac/overwrite-wiiu-titlehash/raw/master/overwrite-wiiu-titlehash.py" download>overwrite-wiiu-titlehash.py</a> **(Høyreklikk -> Lagre lenke som... -> Klikk Lagre).**

<!-- tabs:end -->

### Instruksjoner

<!-- tabs:start -->

#### **Windows**

1. Pakk ut `fpiiu-cbhc.zip` til roten av SD-kortet
1. Installer FileZilla på PC'en din

#### **macOS & Linux**

1. Pakk ut `fpiiu-cbhc.zip` til roten av SD-kortet
1. Installer FileZilla på PC'en din
1. Installer Python på PC'en din

<!-- tabs:end -->

### Gjenoppretting av IOS'ene

!> **Ikke ** slett `00000002` mappen i `/slccmpt01/title/00000001` eller `00000002.tik` filen i `/slccmpt01/ticket/00000001`.

?> Hvis du bruker en blokkeringsmetode for systemoppdateringer, må du [tilbakestille den ](unblock-updates).

<!-- tabs:start -->

#### **Windows**

1. Slå på Wii U konsollen og start CFW (Mocha, Haxchi eller CBHC)
1. Start Homebrew Launcher
1. Launch FTPiiU Everywhere
1. Launch FileZilla
1. Type in the IP address displayed by your Wii U in the `Host` field at the top of the window and click on `Quickconnect`
1. In FileZilla, navigate to `/slccmpt01/title/00000001`
1. Go to [this page](ios-folders) to see which folder/ticket you need to delete
1. Delete the corresponding folders of the IOSes you want to recover
1. Navigate to `/slccmpt01/ticket/00000001`
1. Delete the corresponding `.tik` files of the IOSes you want to recover
1. Launch the previously downloaded `overwrite-wiiu-titlehash.exe` file
1. Type in your Wii U's IP address and press Enter
1. Wait for it to finish what it's doing
 - If an `err.log` file has been generated, please visit us in **#wiiu-assistance** on [Nintendo Homebrew Discord](https://discord.gg/C29hYvh)
1. Exit FTPiiU Everywhere and the Homebrew Launcher
1. Launch the System Settings
1. Perform a [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update)

?> You can now re-enable your [system update blocking method](block-updates).

### **macOS & Linux**

1. Slå på Wii U konsollen og start CFW (Mocha, Haxchi eller CBHC)
1. Start Homebrew Launcher
1. Launch FTPiiU Everywhere
1. Launch FileZilla
1. Type in the IP address displayed by your Wii U in the `Host` field at the top of the window and click on `Quickconnect`
1. In FileZilla, navigate to `/slccmpt01/title/00000001`
1. Go to [this page](ios-folders) to see which folder/ticket you need to delete
1. Delete the corresponding folders of the IOSes you want to recover
1. Navigate to `/slccmpt01/ticket/00000001`
1. Delete the corresponding `.tik` files of the IOSes you want to recover
1. Open up a Terminal window
1. Use the following command: `cd <directory>`
 - On macOS, the most common place to find your downloaded files is `/Users/username/Downloads`
 - On Linux, the most common place to find your downloaded files is `/home/username/Downloads`
1. Use the following command: `python3 overwrite-wiiu-titlehash.py`
1. Type in your Wii U's IP address and press Enter
1. Wait for it to finish what it's doing
 - If an `err.log` file has been generated, please visit us in **#wiiu-assistance** on [Nintendo Homebrew Discord](https://discord.gg/C29hYvh)
1. Exit FTPiiU Everywhere and the Homebrew Launcher
1. Launch the System Settings
1. Perform a [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update)

?> You can now re-enable your [system update blocking method](block-updates).

<!-- tabs:end -->