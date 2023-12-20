# vWii Modding Guide {docsify-ignore-all}
--- 
## SD Preparations

This page will guide you through the process of modding your vWii.

We will now start by placing the required Homebrew files on the SD Card.

?> **Notice**
    Your SD Card will need to be formatted as FAT32. If your SD Card is not formatted to FAT32, use [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) with 32k (32768) Allocation unit size to format it. **Do not** label the SD Card as `wiiu` or it will cause issues with homebrew.
    
?> If you have hacked your Wii U in the past, you can use the same SD Card for this process.
    

### What You Need

- The latest files from [Tiramisu for your café](https://tiramisu.foryour.cafe).
    - Click on `Download Tiramisu`.
    - If you have already installed Tiramisu, you do not need to redownload it.
- The latest release of the [vwii-compat-installer](https://github.com/TheLordScruffy/vwii-compat-installer/releases).
- The <a href="docs/files/Patched_IOS80_Installer_for_vWii.zip" download>Patched IOS 80 Installer for vWii</a>. ([Source](https://github.com/Lazr1026/Patched-IOS80-Installer-for-vWii))
- The <a href ="docs/files/d2x_cIOS_Installer.zip" download>d2x cIOS Installer</a>.

## Instructions

1. Insert your Wii U's SD Card into your PC.
1. Copy the `apps` folder from the <code>Patched_<wbr>IOS80_<wbr>Installer_<wbr>for_<wbr>vWii<wbr>.zip</code> file to the root of your SD Card.
1. Copy the `d2x-cios-installer` from the <code>d2x_<wbr>cIOS_<wbr>Installer<wbr>.zip</code> file to the apps folder on your SD Card.
1. Copy the contents of the downloaded Tiramisu *`.zip`* file to the root of your SD Card.
1. Copy the `compat_installer.elf` file to the `wiiu/apps` folder on the root of your SD Card.
1. Take the SD Card out of your computer and plug it into your Wii U console.
