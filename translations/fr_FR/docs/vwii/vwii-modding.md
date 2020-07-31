# Guide de modding de la vWii
---
Cette page vous guidera tout au long du processus de modding de votre vWii.

Nous allons maintenant placer les fichiers Homebrew nécessaires sur la carte SD.

?> **Remarque** Votre carte SD devra être formatée en FAT32. Si votre carte SD n'est pas formatée en FAT32, utilisez [GUIFormat](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) avec 32k (32768) en taille d'unité d'allocation pour la formater. It is advised that you do not label the SD Card as `wiiu` as it may cause issues with some applications.

### What You Need {docsify-ignore}

- The latest release of [Wuphax](http://wiiubru.com/appstore/zips/wuphax.zip).
- The latest release of [Wii U NAND Dumper](https://github.com/koolkdev/wiiu-nanddumper/releases/latest).
- The latest release of [HackMii Installer](https://bootmii.org/download/).
- The <a href="docs/files/Patched_IOS80_Installer_for_vWii.zip" download>Patched IOS 80 Installer for vWii</a>.
- The <a href ="docs/files/d2x_cIOS_Installer.zip" download>d2x cIOS Installer</a>.
- The [Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/download/1.4/homebrew_launcher.v1.4.zip).
- The latest release of the [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/download/v1.4/payload.zip).

### Instructions {docsify-ignore}

1. Insérez la carte SD de votre Wii U dans votre PC.
1. Copiez le contenu du fichier `wuphax.zip` vers la racine de votre carte SD.
1. Copiez le fichier `boot.elf` du fichier <code>hackmii_<wbr>installer_<wbr>v1.2<wbr>.zip</code> vers la racine de votre carte SD.
1. Copiez le dossier `apps` du fichier <code>Patched_<wbr>IOS80_<wbr>Installer_<wbr>for_<wbr>vWii<wbr>.zip</code> vers la racine de votre carte SD.
1. Extract the <code>d2x_<wbr>cIOS_<wbr>Installer<wbr>.zip</code> file to the root of your SD Card.
1. Copiez le contenu du fichier <code>homebrew_<wbr>launcher.<wbr>v1.4.zip</code> vers la racine de votre carte SD.
1. Copiez le contenu du fichier `payload.zip` dans le dossier `wiiu` de votre carte SD.
1. Sortez la carte SD de votre ordinateur et insérez-la dans votre console Wii U.

### NAND Backup

Au cas où quelque chose se passe mal dans le processus ultérieur et que votre vWii se retrouve brickée, restaurer une sauvegarde de la NAND précédemment créée peut la faire fonctionner de nouveau.

1. Lancez l'[Homebrew Launcher](vwii/browser-exploit).
1. Launch the `Wii U NAND Dumper` application.
1. Use the Wii U GamePad's D-Pad to enter the following configuration:
 - Dump SLC: **optional**
 - Dump SLCCMPT: **yes**
 - Dump MLC: **optionnel**
 - Dump OTP: **yes**
 - Dump SEEPROM: **optional**
1. Appuyez sur le bouton A pour démarrer le processus de dumping.
1. Une fois le processus terminé, éteignez votre Wii U, retirez votre carte SD de la Wii U et insérez-la dans votre PC.
1. To make sure you don't lose the files, copy the `slccmpt.bin`, `otp.bin` and if you chose to go with a full backup, `seeprom.bin`, `slc.bin`, and `every mlc.bin.part` file to your computer.
1. Supprimez les fichiers de votre carte SD pour libérer de l'espace.
1. Retirez la carte SD de votre ordinateur et branchez-la sur votre console Wii U.

### Wuphax

1. Lancez l'[Homebrew Launcher](vwii/browser-exploit).
1. Launch Wuphax.
1. Press `A` to backup the Mii Channel and inject the Hackmii Installer then wait until it says <code>Successfully <wbr>injected <wbr>wuphax!</code>.
 - You will be taken back to the Wii U Menu after a few seconds.
1. Launch vWii (the Wii Menu icon).
1. Launch the vWii Mii Channel.
 - If Wuphax has successfully been injected, you will now see the scam warning screen.
1. Wait until you see `Press 1 to continue` and then press the `1` button.
1. Select `continue`, <code>Install <wbr>The <wbr>Homebrew <wbr>Channel</code> and `Yes, continue`.
1. If The Homebrew Channel has successfully been installed, select `continue` and then `exit`.
1. Launch the Wii U Menu channel to return to the Wii U Menu.
1. Lancez l'[Homebrew Launcher](vwii/browser-exploit).
1. Launch Wuphax.
1. Press `B` to restore the Mii Channel then wait until it says <code>Mii <wbr>Channel <wbr>restored!</code>.
 - You will be taken back to the Wii U Menu after a few seconds.
 - If for some reason, you cannot restore your backup, you will need to [reinstall your Mii Channel](recover-vwii-ioses-channels).

### Installation des cIOS

!> Assurez-vous que vous n'avez pas de fichiers `.wad` ailleurs que dans le dossier `apps` de votre carte SD.

?> **Astuce** Vous pouvez maintenir le bouton `B` sur le GamePad lorsque vous allumez la Wii U pour démarrer directement sur la vWii.

1. Allumez votre Wii U et lancez la vWii.
1. Lancez The Homebrew Channel.
1. Lancez d2x cIOS Installer.
1. Faites en sorte que ce qui suit soit identique à ce qui est affiché sur votre console:
 - Select cIOS: `v10 d2x-v10-beta52-vWii`
 - Select cIOS base: `56`
 - Select cIOS slot: `249`
1. Appuyez sur le bouton `A` pour installer.
1. Faites en sorte que ce qui suit soit identique à ce qui est affiché sur votre console:
 - Select cIOS: `v10 d2x-v10-beta52-vWii`
 - Select cIOS base: `57`
 - Select cIOS slot: `250`
1. Appuyez sur le bouton `A` pour installer.
1. Faites en sorte que ce qui suit soit identique à ce qui est affiché sur votre console:
 - Select cIOS: `v10 d2x-v10-beta52-vWii`
 - Select cIOS base: `58`
 - Select cIOS slot: `251`
1. Appuyez sur le bouton `A` pour installer.
1. Appuyez sur le bouton `B` pour quitter.

### Patching de l'IOS 80

> Si pour une raison quelconque, la Wii U est éteinte pendant la patching de l'IOS 80, votre vWii sera brickée. Cela peut être corrigé soit en extrayant l'IOS 80 de votre sauvegarde de la NAND précédemment créée, puis en le remplaçant par FTP, soit en [réinstallant l'IOS 80](recover-vwii-ioses-channels).

1. Lancez Patched IOS 80 Installer for vWii.
1. Lisez l'écran d'avertissement et attendez 30 secondes.
1. Appuyez sur n'importe quel bouton pour installer.
1. Attendez que la console affiche <code>IOS80 <wbr>Installation <wbr>is <wbr>complete!</code>.
1. Appuyez sur n'importe quel bouton pour quitter.

!> Installer un Menu Système personnalisé est un risque de brick avéré et vous devriez toujours avoir une sauvegarde effective avant d'en installer un mais lorsque fait correctement correctement, ne brickera pas la vWii.

!> Installer n'importe quel IOS (y compris les IOS TED) ou les wads faits pour la Wii d'origine sur votre vWii va la briquer.

!> Installer Priiloader brickera votre vWii.