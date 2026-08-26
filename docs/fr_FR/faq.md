# Foire aux questions

## Le homebrew comporte-t-il des risques ?

Actuellement, le homebrewing de la Wii U ne vous expose pas à un risque de bannissement par Nintendo, à moins que vous ne trichiez dans les jeux en ligne ou que vous ne fraudiez sur l'eShop. Cependant, vous devez toujours faire attention au lancement de homebrew téléchargés, surtout si vous ne faites pas confiance à la source, car le homebrew peut potentiellement endommager votre console !

## Que sont les exploits ?

Les exploits sont des points d'entrée qui permettent de lancer d'autres homebrews. Dans le guide principal, vous utiliserez des exploits tels que l'exploit du navigateur (http://wiiuexploit.xyz) et PayloadLoader (exploit de Santé et sécurité). Tous les exploits actuels chargent `SD:/wiiu/payload.elf`qui prend le contrôle de tout lancement ultérieur de homebrew.

## Que sont les "payloads" (charges utiles) ?

Les payloads, qui sont normalement trouvés avec le nom de fichier `payload.elf`, existent pour faciliter le chargement par différents exploits du même "stage" suivant, ce qui facilite les mises à jour. Peu importe quel exploit charge le payload, le résultat est toujours le même.

Vous pouvez choisir entre plusieurs payloads en utilisant le PayloadLoaderPayload.

Le payload utilisé dans le guide principal est CustomRPXLoader qui charge `SD:/wiiu/payload.rpx` et le `payload.rpx` utilisé dans le guide est EnvironmentLoader, qui vous permet de charger différents environnements.

## Que sont les environnements ?

Un environnement est un ensemble de "modules d'installation" qui seront exécutés dans un ordre défini au lancement de l'environnement. De tels environnements sont Aroma et Tiramisu.

Les modules d'installation sont de petits homebrew/morceaux de code qui sont exécutés une fois pour mettre en place un environnement.

## Comment supprimer le dossier de mise à jour pour bloquer les mises à jour sur Wii U

Si vous voulez supprimer le dossier de mise à jour pour bloquer les mises à jour, consultez son onglet dans le [guide Bloquer les mises à jour](block-updates).

## Quelle est la taille de carte SD recommandée ?

- **Installer des copies de jeux :** 32 Go (une plus petite taille peut être utilisée, mais certains titres ont une taille de 20 Go)
- **Faire tourner des mods de jeux :** 8 Go (Un lecteur USB FAT32 peut aussi être utilisé pour les mods)
- **Ne faire tourner que des applications homebrew :** N'importe quelle taille.

**Marques recommandées :** Sandisk, Samsung ou PNY

::: tip

Note : Évitez les cartes SD de classe 4, et évitez eBay !

:::

## Puis-je installer des homebrew sur la Wii U avec une clé USB au lieu d'une carte SD ?

Non, vous devez avoir une carte SD pour la première installation. Une clé USB peut ensuite être utilisée pour installer des backups de jeu, des injections de Console Virtuelle, etc, mais pas pour stocker les applications homebrew qui sont nécessaires pour tout configurer.

## Lors de l'extraction de certain des fichiers, il y a des doublons de certains d'entre eux appelés "info.json" et "manifest.install", qu'est-ce que j'en fais ?

Rien de spécial, vous pouvez les laisser là, les supprimer ou les remplacer par ceux que vous essayez de copier. Ces fichiers ne sont pas utilisés dans le processus, par conséquent, n'auront pas d'impact en étant ou en n'étant pas là.

## Qu'est-ce qu'une clé USB formatée pour la Wii U ?

C'est un lecteur USB qui a été formaté par une console Wii U vers son format propriétaire.

Un lecteur USB formaté par une Wii U **ne peut pas être lu par aucun autre appareil que la Wii U qui l'a formaté à l'origine.**\*

Si vous voulez l'utiliser un jour avec une autre console Wii U ou d'autres appareils, vous devrez le reformater.
