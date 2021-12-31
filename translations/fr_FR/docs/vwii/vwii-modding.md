# Guide de modding de la vWii
---
Cette page vous guidera tout au long du processus de modding de votre vWii.

Nous allons maintenant placer les fichiers Homebrew nécessaires sur la carte SD.

?> **Remarque** Votre carte SD devra être formatée en FAT32. Si votre carte SD n'est pas formatée en FAT32, utilisez [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) avec 32k (32768) en taille d'unité d'Allocation pour la formater. **Ne nommez pas** la carte SD en tant que `wiiu` ou cela causera des problèmes avec les homebrews.

?> If you have hacked your Wii U in the past, you can use the same SD Card for this process.



### Ce dont vous avez besoin {docsify-ignore}

- The latest files from [Tiramisu for your café](https://tiramisu.foryour.cafe).
    - Select `Nanddumper` and `Base-Tiramisu`.
- The latest release of the [vwii-compat-installer](https://github.com/TheLordScruffy/vwii-compat-installer/releases).
- L'application <a href="docs/files/Patched_IOS80_Installer_for_vWii.zip" download>Patched IOS 80 Installer for vWii</a>.
- Les <a href ="docs/files/d2x_cIOS_Installer.zip" download>vWii cIOS apps</a>.

### Instructions {docsify-ignore}

1. Insérez la carte SD de votre Wii U dans votre PC.
1. Copiez le dossier `apps` du fichier <code>Patched_<wbr>IOS80_<wbr>Installer_<wbr>for_<wbr>vWii<wbr>.zip</code> vers la racine de votre carte SD.
1. Copiez le contenu du fichier <code>d2x_<wbr>cIOS_<wbr>Installer<wbr>.zip</code> vers la racine de votre carte SD.
1. Copy the contents of the newly downloaded `files.zip` file to the root of your SD Card.
1. Copy the `compat_installer.elf` file to the `wiiu/apps` folder on the root of your SD Card.
1. Retirez la carte SD de votre ordinateur et branchez-la sur votre console Wii U.

### Sauvegarde de la NAND

In case anything goes wrong in the later process and your vWii ends up bricked, restoring a previously made NAND backup can fix it.

?> If you have recently made a NAND backup that includes SLCCMPT and OTP, feel free to skip this step.

1. Launch the [Wii U NAND Dumper](vwii/browser-exploit).
1. Utilisez la croix directionnelle du Wii U GamePad pour entrer la configuration suivante :
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

### Installer l'Homebrew Channel

1. Lancez l'[Homebrew Launcher](vwii/browser-exploit).
1. Lancez compat_installer.
1. Appuyez sur `A` pour installer la Homebrew Channel et attendez que vous voyez `Install succeeded`. Puis appuyez sur le bouton HOME pour retourner au Menu Wii U.
1. Lancez la vWii (l'icône du Menu Wii).
   - Si l'installation a réussi, vous devriez voir la Homebrew Channel dans votre Menu Wii.

### Installation des cIOS

!> Make sure you have no `.wad` files anywhere else than in the `apps` folder on your SD Card.

?> **Tip** You can hold the `B` button on the GamePad when turning on the Wii U to boot directly into vWii.

1. Allumez votre Wii U et lancez la vWii.
1. Lancez The Homebrew Channel.
1. Lancez d2x cIOS Installer.
1. Faites en sorte que ce qui suit soit identique à ce qui est affiché sur votre console:
    - Select cIOS: `v10 beta52 d2x-v10-beta52-vWii`
    - Select cIOS base: `56`
    - Select cIOS slot: `249`
1. Appuyez sur le bouton `A` pour installer.
1. Faites en sorte que ce qui suit soit identique à ce qui est affiché sur votre console:
    - Select cIOS: `v10 beta52 d2x-v10-beta52-vWii`
    - Select cIOS base: `57`
    - Select cIOS slot: `250`
1. Appuyez sur le bouton `A` pour installer.
1. Faites en sorte que ce qui suit soit identique à ce qui est affiché sur votre console:
    - Select cIOS: `v10 beta52 d2x-v10-beta52-vWii`
    - Select cIOS base: `58`
    - Select cIOS slot: `251`
1. Appuyez sur le bouton `A` pour installer.
1. Appuyez sur le bouton `B` pour quitter.

### Patching de l'IOS 80

!> If for any reason, the Wii U is turned off while patching IOS 80, your vWii will be bricked. This can be fixed by either extracting the IOS 80 from your previously made NAND backup and then replacing it over FTP or by [reinstalling IOS 80](recover-vwii-ioses-channels).

1. Lancez Patched IOS 80 Installer for vWii.
1. Lisez l'écran d'avertissement et attendez 30 secondes.
1. Appuyez sur n'importe quel bouton pour installer.
1. Attendez que la console affiche <code>IOS80 <wbr>Installation <wbr>is <wbr>complete!</code>.
1. Appuyez sur n'importe quel bouton pour quitter.

!> Installing custom System Menu is a definite brick risk and you should always have an effective backup before installing one but when done right, won't brick the vWii.

!> Installing any IOS (including TED IOSes) or wads made for the original Wii on your vWii will brick it.

!> Installing Priiloader will brick your vWii.
