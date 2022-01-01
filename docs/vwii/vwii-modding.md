# vWii Modding Guide
---
This page will guide you through the process of modding your vWii.

We will now place the required Homebrew files on the SD Card.

?> **Notice**
    Your SD Card will need to be formatted as FAT32. If your SD Card is not formatted to FAT32, use [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) with 32k (32768) Allocation unit size to format it. **Do not** label the SD Card as `wiiu` or it will cause issues with homebrew.
    
?> If you have hacked your Wii U in the past, you can use the same SD Card for this process.
    
    

### What You Need {docsify-ignore}

- The latest files from [Tiramisu for your café](https://tiramisu.foryour.cafe).
    - Select `Nanddumper` and `Base-Tiramisu`.
- The latest release of the [vwii-compat-installer](https://github.com/TheLordScruffy/vwii-compat-installer/releases).
- The <a href="docs/files/Patched_IOS80_Installer_for_vWii.zip" download>Patched IOS 80 Installer for vWii</a>.
- The <a href ="docs/files/d2x_cIOS_Installer.zip" download>d2x cIOS Installer</a>.

### Instructions {docsify-ignore}

1. Insert your Wii U's SD Card into your PC.
1. Copy the `apps` folder from the <code>Patched_<wbr>IOS80_<wbr>Installer_<wbr>for_<wbr>vWii<wbr>.zip</code> file to the root of your SD Card.
1. Copy the contents of the <code>d2x_<wbr>cIOS_<wbr>Installer<wbr>.zip</code> file to the root of your SD Card.
1. Copy the contents of the newly downloaded `files.zip` file to the root of your SD Card.
1. Copy the `compat_installer.elf` file to the `wiiu/apps` folder on the root of your SD Card.
1. Take the SD Card out of your computer and plug it into your Wii U console.

### NAND Backup

In case anything goes wrong in the later process and your vWii ends up bricked, restoring a previously made NAND backup can fix it.

?> If you have recently made a NAND backup that includes SLCCMPT and OTP, feel free to skip this step.

1. Launch the [Wii U NAND Dumper](vwii/browser-exploit).
1. Use the Wii U GamePad's D-Pad to enter the following configuration:
    - Dump SLC: **optional**
    - Dump SLCCMPT: **yes**
    - Dump MLC: **optional**
    - Dump OTP: **yes**
    - Dump SEEPROM: **optional**
1. Press the A button to start the dumping process.
1. When the process completed, power off your Wii U, take your SD Card out of the Wii U and plug it into your PC.
1. To make sure you don't lose the files, copy the `slccmpt.bin`, `otp.bin` and if you chose to go with a full backup, `seeprom.bin`, `slc.bin`, and `every mlc.bin.part` file to your computer.
1. Delete the files from your SD Card to free up space.
1. Take the SD Card out of your computer and plug it into your Wii U console.

### Installing the Homebrew Channel

1. Boot into [Tiramisu](vwii/browser-exploit).
1. Launch the Homebrew Launcher, by opening the Mii Maker.
1. Launch the compat_installer.
1. Press `A` to install the Homebrew Channel and wait until you see `Install succeeded`. Then press the HOME button to return to the Wii U Menu.
1. Launch vWii (the Wii Menu icon).
   - If the installation has succeeded, you should see the Homebrew Channel in your Wii Menu.

### Installing cIOSes

!> Make sure you have no `.wad` files anywhere else than in the `apps` folder on your SD Card.

?> **Tip** You can hold the `B` button on the GamePad when turning on the Wii U to boot directly into vWii.

1. Power on your Wii U and launch vWii.
1. Launch The Homebrew Channel.
1. Launch d2x cIOS Installer.
1. Set everything to match the following:
    - Select cIOS: `v10 beta52 d2x-v10-beta52-vWii`
    - Select cIOS base: `56`
    - Select cIOS slot: `249`
1. Press the `A` button to install.
1. Set everything to match the following:
    - Select cIOS: `v10 beta52 d2x-v10-beta52-vWii`
    - Select cIOS base: `57`
    - Select cIOS slot: `250`
1. Press the `A` button to install.
1. Set everything to match the following:
    - Select cIOS: `v10 beta52 d2x-v10-beta52-vWii`
    - Select cIOS base: `58`
    - Select cIOS slot: `251`
1. Press the `A` button to install.
1. Press the `B` button to exit.

### Patching IOS 80

!> If for any reason, the Wii U is turned off while patching IOS 80, your vWii will be bricked. This can be fixed by either extracting the IOS 80 from your previously made NAND backup and then replacing it over FTP or by [reinstalling IOS 80](recover-vwii-ioses-channels).

1. Launch Patched IOS 80 Installer for vWii.
1. Read the warning screen and wait 30 seconds.
1. Press any buttons to install.
1. Wait until it says <code>IOS80 <wbr>Installation <wbr>is <wbr>complete!</code>.
1. Press any buttons to exit.

!> Installing custom System Menu is a definite brick risk and you should always have an effective backup before installing one but when done right, won't brick the vWii.

!> Installing any IOS (including TED IOSes) or wads made for the original Wii on your vWii will brick it.

!> Installing Priiloader will brick your vWii.
