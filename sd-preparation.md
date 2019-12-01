# SD Preparation

We will now place the required CFW files and some additional homebrew files on the SD card.

?> **Notice**
    Your SD card will need to be formatted as FAT32. If your SD Card is not formatted to FAT32, use [GUIFormat](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) with 32k (32768) Allocation unit size to format it.

### What you need

<!-- tabs:start -->

#### **Haxchi**

> - The Haxchi [config](/files/config.txt)
> - The latest release of [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/latest)
>   - You will need to download the `payload.zip` file.
> - The 1.4 release of [The Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4)
>   - You will need to download the v1.4 `homebrew_launcher.v1.4.zip` release of The Homebrew Launcher
> - The latest release of [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
> - The latest release of [The Homebrew Launcher Channel](https://github.com/dimok789/homebrew_launcher/releases/latest)
>   - You will need to download the `channel.zip` file.
> - The latest release of [Wii U NAND Dumper](https://github.com/koolkdev/wiiu-nanddumper/releases/latest)
> - The latest release of the [Homebrew App Store](https://github.com/vgmoose/hbas/releases/latest)
>   - You will need to download the `wiiu-exracttosd.zip` file.
> - The latest release of [Haxchi](https://github.com/FIX94/haxchi/releases/latest)
>   - Download only the Haxchi .zip file.

#### **Haxchi and CBHC**

> - The Haxchi [config](/files/config.txt)
> - The latest release of [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/latest)
>   - You will need to download the `payload.zip` file.
> - The 1.4 release of [The Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4)
>   - You will need to download the v1.4 `homebrew_launcher.v1.4.zip` release of The Homebrew Launcher
> - The latest release of [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
> - The latest release of [The Homebrew Launcher Channel](https://github.com/dimok789/homebrew_launcher/releases/latest)
>   - You will need to download the `channel.zip` file.
> - The latest release of [Wii U NAND Dumper](https://github.com/koolkdev/wiiu-nanddumper/releases/latest)
> - The latest release of the [Homebrew App Store](https://github.com/vgmoose/hbas/releases/latest)
>   - You will need to download the `wiiu-exracttosd.zip` file.
> - The latest release of [Haxchi and CBHC](https://github.com/FIX94/haxchi/releases/latest)
>   - Download both the Haxchi and CBHC .zip files.

#### **Mocha**

> - The Mocha [config](/files/config.ini)
> - The latest release of [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/latest)
>   - You will need to download the `payload.zip` file.
> - The 1.4 release of [The Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4)
>   - You will need to download the v1.4 `homebrew_launcher.v1.4.zip` release of The Homebrew Launcher
> - The latest release of [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
> - The latest release of [Wii U NAND Dumper](https://github.com/koolkdev/wiiu-nanddumper/releases/latest)
> - The latest release of the [Homebrew App Store](https://github.com/vgmoose/hbas/releases/latest)
>   - You will need to download the `wiiu-exracttosd.zip` file.
> - The latest release of [Mocha](https://www.wiiubru.com/appstore/zips/mocha.zip)

<!-- tabs:end -->


### Instructions

<!-- tabs:start -->

#### **Haxchi**

?> **Notice**
    The info.json and manifest.install files are not needed for the modding proccess and therefore can be deleted.
> 1. Insert your Wii U's SD card into your PC
> 2. Extract the  `Haxchi.zip` file to the root of your SD Card
> 3. Copy the `config.txt` file to the `haxchi` folder on your SD Card. Overwrite files if asked
> 5. Copy the `payload.elf` from the `payload.zip` to the `wiiu` folder on your SD Card
> 6. Extract the `wup_installer_gx2.zip` file to the root of your SD Card
> 7. Extract the `nanddumper.zip` file to the root of your SD Card
> 8. Extract the `wiiu-extracttosd.zip` file to the root of your SD Card
> 9. Extract the `homebrew_launcher.v.1.4.zip` to the root of your SD Card
> 10. Create a folder called `install` on the root of your SD Card
> 11. Create a folder called `hbc` in the `install` folder you created
> 12. Extract the `homebrew_launcher_channel.zip` file to the `hbc` folder you created

#### **Haxchi and CBHC**

?> **Notice**
    The info.json and manifest.install files are not needed for the modding proccess and therefore can be deleted.
> 1. Insert your Wii U's SD card into your PC
> 2. Extract the  `Haxchi.zip` file to the root of your SD Card
> 3. Extract the `CBHC.zip` file to the root of your SD Card
> 4. Copy the `config.txt` file to the `haxchi` folder on your SD Card. Overwrite files if asked
> 6. Copy the `payload.elf` from the `payload.zip` to the `wiiu` folder on your SD Card
> 7. Extract the `wup_installer_gx2.zip` file to the root of your SD Card
> 8. Extract the `nanddumper.zip` file to the root of your SD Card
> 9. Extract the `wiiu-extracttosd.zip` file to the root of your SD Card
> 10. Extract the `homebrew_launcher.v.1.4.zip` to the root of your SD Card
> 11. Create a folder called `install` on the root of your SD Card
> 12. Create a folder called `hbc` in the `install` folder you created
> 13. Extract the `homebrew_launcher_channel.zip` file to the `hbc` folder you created

#### **Mocha**

?> **Notice**
    The info.json and manifest.install files are not needed for the modding proccess and therefore can be deleted.
> 1. Insert your Wii U's SD card into your PC
> 2. Extract the  `mocha.zip` file to the root of your SD Card
> 3. Copy the `config.ini` file to the `/wiiu/apps/mocha` folder on your SD Card
> 5. Copy the `payload.elf` from the `payload.zip` to the `wiiu` folder on your SD Card
> 6. Extract the `wup_installer_gx2.zip` file to the root of your SD Card
> 7. Extract the `nanddumper.zip` file to the root of your SD Card
> 8. Extract the `wiiu-extracttosd.zip` file to the root of your SD Card
> 9. Extract the `homebrew_launcher.v.1.4.zip` to the root of your SD Card

<!-- tabs:end -->
