# Extraire des disques Wii U

Extraire vos disques vous permet d'installer une copie de votre jeu sur la NAND / un périphérique USB afin que vous puissiez y jouer sans avoir besoin du disque.

::: tip

L'extraction et l'installation des jeux nécessite une installation Homebrew fonctionnelle, donc assurez-vous de terminer le guide principal sur l'installation d'un CFW d'abord avant de suivre celui-ci.

:::

::: danger

Il est **ILLÉGAL** de partager les fichiers extraits avec ce guide.

Si vous comptez utiliser ce guide pour partager vos jeux extraits, ne faites pas ça.

:::

## Extraire et installer des disques Wii U

::: tip

Installer un jeu sur la mémoire de la console (NAND) n'est pas recommandé car elle est limitée soit à 8 Go ou 32 Go en fonction de votre modèle, ce qui vous fera tomber à court d'espace assez rapidement si vous souhaitez installer plusieurs jeux.

:::

::: tip

Lors de l'installation d'un jeu sur un périphérique USB, nous recommandons que vous utilisiez un disque dur et pas une clé USB, car celles-ci ne sont pas optimisées pour une lecture et écriture en permanence, les faisant tomber en panne rapidement. Si votre disque dur n'est pas alimenté par une source externe, vous aurez besoin d'un câble en Y pour le connecter à deux ports USB sur la Wii U.

:::

::: danger

Pour pouvoir installer sur un périphérique USB, ce dernier doit être formaté par la Wii U. Faire ceci en effacera (supprimera) tout le contenu (documents, images, vidéos, données de PC), et l'empêchera d'être réutilisé sur un autre système à moins que vous ne le reformatiez. Cela _inclut_ la vWII, ce qui signifie que vous ne pourrez pas lancer des images de disque Wii et GameCube depuis l'USB en utilisant des lanceurs USB. Pour formater, branchez votre disque dur USB dans la Wii U, allumez votre Wii U, votre Wii U vous invitera à formater votre disque dur. Confirmez avec Oui.

:::

### Ce dont vous avez besoin

- Votre carte SD a besoin de suffisamment d'espace pour stocker le jeu que vous voulez extraire.
- Si vous voulez l'installer sur un périphérique USB, UN disque dur USB (+ un câble en Y si nécessaire).
- La dernière version de [WUP Installer GX2](https://wiiu.cdn.fortheusers.org/zips/wup_installer_gx2_wuhb.zip).
- L'application homebrew [wudd](https://wiiu.cdn.fortheusers.org/zips/wudd.zip).

### Instructions

1. Copiez le contenu du fichier `wup_installer_gx2_wuhb.zip` vers la racine de votre carte SD.
2. Copiez le contenu du fichier `.zip` de wudd récemment téléchargé vers la racine de votre carte SD.
3. Retirez la carte SD de votre PC et insérez-la dans votre Wii U.
4. Allumez votre Wii U et démarrez sur Aroma.
5. Lancez le menu Wii U et démarrez l'appli wudd.
6. Sélectionnez `Dump partition as .app`
7. Sélectionnez la partition `Game` pour commencer l'extraction.
8. Lorsque c'est terminé, quittez wudd vers le menu Wii U.
9. Insérez votre carte SD dans votre ordinateur.
10. Copiez le dossier `GMXXXXXXXXXXXXXXXX` depuis `sd:/wudump/WUP-X-XXXX` vers le dossier `install` à la racine de votre carte SD.
    - WUDD ne crée pas un dossier d'installation par défaut. Vous devez le créer.
11. Éjectez et insérez la carte SD dans votre Wii U.
12. Ouvrez le menu Wii U et l'appli WUP Installer GX2.
13. Sélectionnez votre jeu (`GMXXXXXXXXXXXXXXXX`), appuyez sur `Install` et confirmez avec `Yes`.
14. Choisissez 'USB' pour l'installer sur le péripérique USB et 'NAND' pour l'installer sur la NAND
15. Quittez WUP Installer GX2 vers le menu Wii U.
16. Vous devriez voir votre jeu installé, prêt à être joué.
17. Retirez la carte SD de votre Wii U et insérez-la dans votre PC.
18. Supprimez le dossier `GMXXXXXXXXXXXXXXXX` dans le répertoire `install` sur votre carte SD pour libérer de l'espace.

## Déplacement de jeux vers l'USB

::: tip

Si vous ne souhaitez pas laisser le jeu installé sur la NAND, vous pouvez utiliser la gestion des données de la Wii U pour déplacer le jeu vers un périphérique USB.

:::

::: danger

Pour pouvoir installer sur un périphérique USB, ce dernier doit être formaté par la Wii U. Faire ceci en effacera tout le contenu, et l'empêchera d'être utilisé sur un autre système à moins que vous ne le reformatiez.

:::

1. Branchez votre périphérique USB dans la Wii U.
2. Allumez votre Wii U.
3. Votre Wii U vous demandera de formater votre périphérique USB. Confirmez avec Oui.
4. Ouvrez les Paramètres de la console de la Wii U.
5. Naviguez vers `Gestion des données > Copier ou effacer des données > Mémoire de la console > Déplacer des données (X)`
6. Sélectionnez le jeu et déplacez toutes les données (y compris les mises à jour et les DLC s'il y en a d'installés) vers votre périphérique USB.

## Déplacer les mises à jour vers l'USB

::: tip

Si votre disque de jeu avait des DLC ou des mises à jour installés, vous devrez transférer les fichiers vers votre périphérique USB. Vous pouvez le faire en utilisant le menu Gestion des données de la Wii U.

:::

1. Allumez votre Wii U
2. Ouvrez les Paramètres de la console de la Wii U.
3. Naviguez vers `Gestion des données > Copier ou effacer des données > Mémoire de la console > Déplacer des données (X)`.
4. Sélectionnez votre jeu et déplacez les données de mise à jour et de DLC vers le périphérique USB.
