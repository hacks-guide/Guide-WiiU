# Haxchi

## SD Preparation {docsify-ignore}

We will now place the required CFW files and some additional homebrew files on the SD Card.

?> **Notice**
    Your SD Card will need to be formatted as FAT32. If your SD Card is not formatted to FAT32, use [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) with 32k (32768) allocation unit size to format it. **Do not** label the SD Card as `wiiu` or it will cause issues with homebrew.

### What You Need {docsify-ignore}

- The latest release of [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/latest).
  - You will need to download the `payload.zip` file.
- The 1.4 release of [The Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4).
  - You will need to download the v1.4 `homebrew_launcher.v1.4.zip` release of The Homebrew Launcher.
- The latest release of [WUP Installer GX2](https://wiiubru.com/appstore/zips/wup_installer_gx2.zip).
- The latest release of [The Homebrew Launcher Channel](https://github.com/GaryOderNichts/homebrew_launcher/releases/tag/v2.1_fix).
  - You will need to download the `homebrew_launcher_channel.v2.1_fix.zip` file.
- The latest release of [Wii U NAND Dumper](https://www.wiiubru.com/appstore/zips/nanddumper.zip).
- The latest release of the [Homebrew App Store](https://github.com/vgmoose/hbas/releases/latest).
  - You will need to download the `wiiu-extracttosd.zip` file.
- The latest release of [Haxchi](https://www.wiiubru.com/appstore/zips/haxchi.zip).
- The latest release of <a href="docs/files/SaveMii_Mod.zip" download>SaveMii Mod</a>.

### Instructions {docsify-ignore}

?> **Notice**
    The info.json and manifest.install files are not needed for the modding process and therefore can be deleted.  

1. Insert your Wii U's SD Card into your PC.
1. Create a folder called `install` on the root of your SD Card.
1. Copy the contents of the `homebrew_launcher_channel.v2.1_fix.zip` file to the `install` folder you created.
1. Copy the contents of the `haxchi.zip` file to the root of your SD Card.
1. Copy the contents of the `wup_installer_gx2.zip` file to the root of your SD Card.
1. Copy the contents of the `nanddumper.zip` file to the root of your SD Card.
1. Copy the contents of the `wiiu-extracttosd.zip` file to the root of your SD Card.
1. Copy the contents of the `homebrew_launcher.v.1.4.zip` file to the root of your SD Card.
1. Copy the contents of the `savemii_mod.zip` file to the root of your SD Card.
1. Copy the `payload.elf` from the `payload.zip` to the `wiiu` folder on your SD Card.
----------
### SD Layout

So after all this, it should look something like this

```
💾sd:
 ┣ 📂haxchi
 ┃ ┣ 📜bootDrcTex.tga
 ┃ ┣ 📜bootTvTex.tga
 ┃ ┣ 📜config.txt
 ┃ ┣ 📜iconTex.tga
 ┃ ┗ 📜title.txt
 ┣ 📂install
 ┃ ┗ 📂Homebrew Launcher Channel
 ┃   ┣ 📜00000000.app
 ┃   ┣ 📜00000003.h3
 ┃   ┣ ...
 ┃   ┣ 📜title.cert
 ┃   ┣ 📜title.tik
 ┃   ┗ 📜title.tmd
 ┗ 📂wiiu
   ┣ 📂apps
   ┃ ┣ 📂homebrew_launcher
   ┃ ┃ ┣ 📜homebrew_launcher.elf
   ┃ ┃ ┣ 📜icon.png
   ┃ ┃ ┗ 📜meta.xml
   ┃ ┗ (All other apps like disc2app, nanddumper, etc. should be here too)
   ┗ 📜payload.elf
```