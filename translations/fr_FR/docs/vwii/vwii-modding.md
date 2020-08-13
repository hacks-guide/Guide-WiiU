# Guide de modding de la vWii
---
Cette page vous guidera tout au long du processus de modding de votre vWii.

Nous allons maintenant placer les fichiers Homebrew nécessaires sur la carte SD.

?> **Remarque** Votre carte SD devra être formatée en FAT32. Si votre carte SD n'est pas formatée en FAT32, utilisez [GUIFormat](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) avec 32k (32768) en taille d'unité d'allocation pour la formater. Il est conseillé de ne pas nommer la carte SD `wiiu` car cela peut causer des problèmes avec certaines applications.

### Ce dont vous avez besoin {docsify-ignore}

- La dernière version de [Wuphax](http://wiiubru.com/appstore/zips/wuphax.zip).
- La dernière version de [Wii U NAND Dumper](https://github.com/koolkdev/wiiu-nanddumper/releases/latest).
- La dernière version de [HackMii Installer](https://bootmii.org/download/).
- L'application <a href="docs/files/Patched_IOS80_Installer_for_vWii.zip" download>Patched IOS 80 Installer for vWii</a>.
- Les <a href ="docs/files/d2x_cIOS_Installer.zip" download>vWii cIOS apps</a>.
- L'[Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/download/1.4/homebrew_launcher.v1.4.zip).
- La dernière version de [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/download/v1.4/payload.zip).

### Instructions {docsify-ignore}

1. Insérez la carte SD de votre Wii U dans votre PC.
1. Copiez le contenu du fichier `wuphax.zip` vers la racine de votre carte SD.
1. Copiez le fichier `boot.elf` du fichier <code>hackmii_<wbr>installer_<wbr>v1.2<wbr>.zip</code> vers la racine de votre carte SD.
1. Copiez le dossier `apps` du fichier <code>Patched_<wbr>IOS80_<wbr>Installer_<wbr>for_<wbr>vWii<wbr>.zip</code> vers la racine de votre carte SD.
1. Copiez le contenu du fichier <code>d2x_<wbr>cIOS_<wbr>Installer<wbr>.zip</code> vers la racine de votre carte SD.
1. Copiez le contenu du fichier `nanddumper.zip` vers la racine de votre carte SD.
1. Copiez le contenu du fichier <code>homebrew_<wbr>launcher.<wbr>v1.4.zip</code> vers la racine de votre carte SD.
1. Copiez le contenu du fichier `payload.zip` dans le dossier `wiiu` de votre carte SD.
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

### Wuphax

1. Lancez l'[Homebrew Launcher](vwii/browser-exploit).
1. Lancez Wuphax.
1. Appuyez sur `A` pour sauvegarder la Chaîne Mii et injecter Hackmii Installer puis attendez qu'il affiche <code>Successfully <wbr>injected <wbr>wuphax!</code>.
 - Vous serez ramené au Menu Wii U après quelques secondes.
1. Lancez la vWii (l'icône du Menu Wii).
1. Lancez la Chaîne Mii de la vWii.
 - Si Wuphax a été injecté avec succès, vous verrez maintenant un écran d'avertissement.
1. Attendez jusqu'à ce que voyiez `Press 1 to continue` puis appuyez sur le bouton `1`.
1. Sélectionnez `continue`, <code>Install <wbr>The <wbr>Homebrew <wbr>Channel</code> et `Yes, continue`.
1. Si l'Homebrew Channel a été installé avec succès, sélectionnez `continue` puis `exit`.
1. Lancez la chaîne du Menu Wii U pour retourner au Menu Wii U.
1. Lancez l'[Homebrew Launcher](vwii/browser-exploit).
1. Lancez Wuphax.
1. Appuyez sur `B` pour restaurer la Chaîne Mii, puis attendez que la console affiche <code>Mii <wbr>Channel <wbr>restored!</code>.
 - Vous serez ramené au Menu Wii U après quelques secondes.
 - Si pour une raison quelconque, vous ne pouvez pas restaurer votre sauvegarde, vous devrez [réinstaller votre Chaîne Mii](recover-vwii-ioses-channels).

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
