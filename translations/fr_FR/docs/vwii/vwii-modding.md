# Guide de modding de la vWii
---
Cette page vous guidera tout au long du processus de modding de votre vWii.

Nous allons maintenant placer les fichiers Homebrew nécessaires sur la carte SD.

?> **Remarque** Votre carte SD devra être formatée en FAT32. Si votre carte SD n'est pas formatée en FAT32, utilisez [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) avec 32k (32768) en Taille d'unité d'allocation pour la formater. **Ne nommez pas** la carte SD en tant que `wiiu` ou cela causera des problèmes avec les homebrews.

### Ce dont vous avez besoin {docsify-ignore}

- The latest release of the [vwii-compat-installer](https://github.com/TheLordScruffy/vwii-compat-installer/releases).
- The latest release of the [Wii U NAND Dumper](https://www.wiiubru.com/appstore/zips/nanddumper.zip).
- The <a href="docs/files/Patched_IOS80_Installer_for_vWii.zip" download>Patched IOS 80 Installer for vWii</a>.
- The <a href ="docs/files/d2x_cIOS_Installer.zip" download>d2x cIOS Installer</a>.
- The [Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/download/1.4/homebrew_launcher.v1.4.zip).
- The latest release of the [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/download/v1.4/payload.zip).

### Instructions {docsify-ignore}

1. Insérez la carte SD de votre Wii U dans votre PC.
1. Copy the `apps` folder from the <code>Patched_<wbr>IOS80_<wbr>Installer_<wbr>for_<wbr>vWii<wbr>.zip</code> file to the root of your SD Card.
1. Copy the contents of the <code>d2x_<wbr>cIOS_<wbr>Installer<wbr>.zip</code> file to the root of your SD Card.
1. Copiez le contenu du fichier `nanddumper.zip` vers la racine de votre carte SD.
1. Copy the contents of the <code>homebrew_<wbr>launcher.<wbr>v1.4.zip</code> file to the root of your SD Card.
1. Copy the contents of the `payload.zip` file to the `wiiu` folder on your SD Card.
1. Copy the `compat_installer.elf` file to the `wiiu/apps` folder on the root of your SD Card.
1. Retirez la carte SD de votre ordinateur et branchez-la sur votre console Wii U.

### Sauvegarde de la NAND

Au cas où quelque chose se passe mal dans le processus ultérieur et que votre vWii se retrouve brickée, restaurer une sauvegarde de la NAND précédemment créée peut la faire fonctionner de nouveau.

1. Lancez l'[Homebrew Launcher](vwii/browser-exploit).
1. Lancez l'application `Wii U NAND Dumper`.
1. Utilisez la croix directionnelle du Wii U GamePad pour entrer la configuration suivante :
    - Dump SLC: **optionnel**
    - Dump SLCCMPT: **yes**
    - Dump MLC: **optionnel**
    - Dump OTP: **yes**
    - Dump SEEPROM: **optionnel**
1. Appuyez sur le bouton A pour démarrer le processus de dumping.
1. Une fois le processus terminé, éteignez votre Wii U, retirez votre carte SD de la Wii U et insérez-la dans votre PC.
1. Pour vous assurer de ne pas perdre les fichiers, copiez `slccmpt.bin`, `otp.bin` et si vous avez choisi de faire une sauvegarde complète, `seeprom.bin`, `slc.bin`, et `chaque fichier mlc.bin.part` sur votre ordinateur.
1. Supprimez les fichiers de votre carte SD pour libérer de l'espace.
1. Retirez la carte SD de votre ordinateur et branchez-la sur votre console Wii U.

### Installing the Homebrew Channel

1. Lancez l'[Homebrew Launcher](vwii/browser-exploit).
1. Launch the compat_installer.
1. Press `A` to install the Homebrew Channel and wait until you see `Install succeeded`. Then press the HOME button to return to the Wii U Menu.
1. Launch vWii (the Wii Menu icon).
   - If the installation has succeeded, you should see the Homebrew Channel in your Wii Menu.

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

!> Si pour une raison quelconque, la Wii U est éteinte pendant la patching de l'IOS 80, votre vWii sera brickée. Cela peut être corrigé soit en extrayant l'IOS 80 de votre sauvegarde de la NAND précédemment créée, puis en le remplaçant par FTP, soit en [réinstallant l'IOS 80](recover-vwii-ioses-channels).

1. Lancez Patched IOS 80 Installer for vWii.
1. Lisez l'écran d'avertissement et attendez 30 secondes.
1. Appuyez sur n'importe quel bouton pour installer.
1. Attendez que la console affiche <code>IOS80 <wbr>Installation <wbr>is <wbr>complete!</code>.
1. Appuyez sur n'importe quel bouton pour quitter.

!> Installer un Menu Système personnalisé est un risque de brick avéré et vous devriez toujours avoir une sauvegarde effective avant d'en installer un mais lorsque fait correctement correctement, ne brickera pas la vWii.

!> Installer n'importe quel IOS (y compris les IOS TED) ou les wads faits pour la Wii d'origine sur votre vWii va la briquer.

!> Installer Priiloader brickera votre vWii.
