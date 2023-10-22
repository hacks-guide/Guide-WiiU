# vWii Modding Guide
---
This page will guide you through the process of modding your vWii.

?> **Notice**
    Your SD Card will need to be formatted as FAT32. If your SD Card is not formatted to FAT32, use [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) with 32k (32768) Allocation unit size to format it. **Do not** label the SD Card as `wiiu` or it will cause issues with homebrew.
    
?> If you have hacked your Wii U in the past, you can use the same SD Card for this process.

### What You Need {docsify-ignore}

?> If youre using Tiramisu, this tutorial will still work, simply skip the Aroma download step when reading the instructions.

- The latest version of [Aroma](https://aroma.foryour.cafe)
    - Click on `Download Tiramisu`
    - If you have already installed Aroma, you will not need to redownload it.
- The latest release of the [vwii-compat-installer](https://apps.fortheusers.org/wiiu/CompatTitleInstaller)
- <a href="docs/files/Patched_IOS80_Installer_for_vWii.zip" download>Patched IOS 80 Installer for vWii</a>
- <a href ="docs/files/d2x_cIOS_Installer.zip" download>d2x cIOS Installer</a>

### Instructions {docsify-ignore}

1. Insert your Wii U's SD Card into your PC.
1. Copy the `apps` folder from the <code>Patched_<wbr>IOS80_<wbr>Installer_<wbr>for_<wbr>vWii<wbr>.zip</code> file to the root of your SD Card.
1. Copy the `d2x-cios-installer` from the <code>d2x_<wbr>cIOS_<wbr>Installer<wbr>.zip</code> file to the apps folder on your SD Card.
1. Copy the contents of the downloaded Tiramisu *`.zip`* file to the root of your SD Card.
1. Copy the `compat_installer.elf` file to the `wiiu/apps` folder on the root of your SD Card.
1. Take the SD Card out of your computer and plug it into your Wii U console.

?> Please ensure youve made a NAND Backup before continuing. If you have not, please go to [here]( https://wiiu.hacks.guide/#/tiramisu/nand-backup) for instructions.

### Installing the Homebrew Channel

1. Boot into Aroma
1. Launch the Homebrew Launcher, by opening the Mii Maker
1. Launch the compat_installer
1. Press `A` to install the Homebrew Channel and wait until you see `Install succeeded`. Then press the HOME button to return to the Wii U Menu
1. Launch vWii (the Wii Menu icon)
   - If the installation has succeeded, you should see the Homebrew Channel in your Wii Menu

### Installing cIOSes

!> Make sure you have no `.wad` files anywhere else than in the `apps` folder on your SD Card.

1. Power on your Wii U and launch the vWii
1. Launch The Homebrew Channel
1. Launch d2x cIOS Installer
1. Set everything to match the following:
    - Select cIOS: `d2x-v11-beta1-vWii`
    - Select cIOS base: `56`
    - Select cIOS slot: `249`
1. Press the `A` button to install
1. Set everything to match the following:
    - Select cIOS: `d2x-v11-beta1-vWii`
    - Select cIOS base: `57`
    - Select cIOS slot: `250`
1. Press the `A` button to install
1. Set everything to match the following:
    - Select cIOS: `d2x-v11-beta1-vWii`
    - Select cIOS base: `58`
    - Select cIOS slot: `251`
1. Press the `A` button to install
1. Press the `B` button to exit

### Patching IOS 80

!> If for any reason the Wii U is turned off while patching IOS 80, your vWii will be bricked. This can be fixed by either extracting the IOS 80 from your previously made NAND backup and then replacing it over FTP, using [vWii Decaffeinator](https://github.com/GaryOderNichts/vWii-Decaffeinator), or by [reinstalling IOS 80](recover-vwii-ioses-channels).

1. Launch Patched IOS 80 Installer for vWii
1. Read the warning screen and wait 30 seconds
1. Press any buttons to install
1. Wait until it says <code>IOS80 <wbr>Installation <wbr>is <wbr>complete!</code>
1. Press any buttons to exit

!> Priiloader versions before 0.10.0 do not work with vWii. Installing versions of Priiloader before 0.8.2 will brick your vWii.

!> Installing custom System Menu is a definite brick risk and you should always have an effective backup before installing one but when done right, won't brick the vWii.

!> Installing any IOS (including TED IOSes) or wads made for the original Wii on your vWii will brick it.
