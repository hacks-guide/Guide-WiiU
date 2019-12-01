# vWii Modding Guide

This page will guide you through the process of modding your vWii.

We will now place the required Homebrew files on the SD Card.

?> **Notice**
    Your SD card will need to be formatted as FAT32. If your SD Card is not formatted to FAT32, use [GUIFormat](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) with 32k (32768) Allocation unit size to format it.

### What you need

> - The [vWii cIOS apps](/files/vWii_cIOS_apps_20131218.zip)
> - The [Patched IOS 80 Installed for vWii](/files/Patched_IOS80_Installer_for_vWii.zip)
> - The latest release of [Wuphax](http://wiiubru.com/appstore/zips/wuphax.zip)
> - The [Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/download/1.4/homebrew_launcher.v1.4.zip)
> - The latest release of the [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/download/v1.4/payload.zip)

### Instructions

> 1. Insert your Wii U's SD card into your PC
> 2. Extract the `wuphax.zip` file to the root of your SD Card
> 3. Extract the `boot.elf` file from the `hackmii_installer_v1.2` to the root of your SD Card
> 4. Extract the `vWii_cIOS_apps_20131218.zip` file to the root of your SD Card
> 5. Extract the `payload.zip` file to the `wiiu` folder on your SD Card
> 6. Take the SD Card out of your Computer and plug it into your Wii U console.

### Wuphax

> 1. Launch the [Homebrew Launcher](browser-exploit)
> 2. Launch Wuphax
> 3. Press `A` to backup the Mii Channel and inject the Hackmii Installer
> 4. You will be taken back to the Wii U Menu after a few seconds
> 5. Launch vWii (the Wii Menu icon)
> 6. Launch the vWii Mii Channel
>  - If wuphax has successfully been injected, you will now see the scam warning screen.
> 7. Wait until you see `Press 1 to continue` and then press the `1` button
> 8. Select `continue`, `Install The Homebrew Channel` and `Yes, continue`
> 9. If The Homebrew Channel has successfully been installed, select `continue` and then `exit`
> 10. Launch the Wii U Menu channel to return to the Wii U Menu
> 11. Launch the [Homebrew Launcher](browser-exploit)
> 12. Launch Wuphax
> 13. Press `B` to restore the Mii Channel
>  - If, for some reason, you cannot restore your backup, you will need to [reinstall your Mii Channel](recover-mii-channel)

### NAND Backup

In case anything goes wrong in the later process and your vWii ends up bricked, restoring a previously made NAND backup can fix it.

> 1. Launch vWii (the Wii Menu icon)
> 2. Launch The Homebrew Channel
> 3. Launch Dump Mii NAND
>  - The dumping process can take a while depending on the speed of your SD Card
> 4. When the process completed, the console will reboot
> 5. Power off your Wii U, take your SD Card out of the Wii U and plug it into your PC.
> 6. Copy `nand.bin` and `keys.bin` somewhere safe (on your computer or on a cloud storage service such as Google Drive, OneDrive, etc...)
> 7. Delete `nand.bin` and `keys.bin` from your SD Card to free up space

### Installing cIOSes

!> Make sure you have no `.wad` files anywhere else than in the `apps` folder on your SD Card

?> **Tip**
    You can hold the `B` button on the GamePad when turning on the Wii U to boot directly into vWii

> 1. Power on your Wii U and launch vWii
> 2. Launch The Homebrew Channel
> 3. Launch d2x cIOS Installer
> 4. Set everything to match the following:
>  - Select cIOS `v10 d2x-v10-beta52-vWii`
>  - Select cIOS base `56`
>  - Select cIOS slot `249`
> 5. Press the `A` button to install
> 6. Set everything to match the following:
>  - Select cIOS `v10 d2x-v10-beta52-vWii`
>  - Select cIOS base `57`
>  - Select cIOS slot `250`
> 7. Press the `A` button to install
> 8. Set everything to match the following:
>  - Select cIOS `v10 d2x-v10-beta52-vWii`
>  - Select cIOS base `58`
>  - Select cIOS slot `251`
> 9. Press the `A` button to install
> 10. Press the `B` button to exit

### Patching IOS 80

!> If, for any reason, the Wii U is turned off while patching IOS 80, your vWii will be bricked. This can be fixed by either extracting the IOS 80 from your previously made NAND backup and then replacing IOS 80 over FTP or by [reinstalling IOS 80](recover-ios80)

> 1. Launch Patched IOS 80 Installer for vWii
> 2. Read the warning screen and wait 30 seconds
> 3. Press any buttons to install
> 4. Wait until it says `IOS80 Installation is complete!`
> 5. Press any buttons to exit

!> Installing custom System Menu themes on your vWii will brick it

!> Installing any IOS (including TED IOSes) or wads made for the original Wii on your vWii will brick it

!> Installing Priiloader will brick your vWii