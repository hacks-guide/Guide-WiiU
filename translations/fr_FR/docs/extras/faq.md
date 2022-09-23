# Foire Aux Questions {docsify-ignore-all}
---

### L'homebrew comporte-t-il des risques ?

Actuellement, le homebrewing de la Wii U ne vous expose pas à un risque de bannissement par Nintendo, à moins que vous ne trichiez dans les jeux en ligne ou que vous ne fraudiez sur l'eShop. Cependant, vous devez toujours faire attention au lancement de homebrew téléchargés, surtout si vous ne faites pas confiance à la source, car le homebrew peut potentiellement endommager votre console !

### Que sont les exploits ?

Les exploits sont des points d'entrée qui permettent de lancer d'autres homebrews. Dans le guide principal, vous utiliserez des exploits tels que l'exploitation du navigateur (http://wiiuexploit.xyz) et PayloadLoader (exploit de l'app Informations sur la santé et la sécurité). Tous les exploits actuels chargent `SD:/wiiu/payload.elf` qui prend ensuite la main sur le reste du processus de chargement du Homebrew.

### Que sont les payloads ?

Les payloads, qui sont normalement trouvés avec le nom de fichier `payload.elf`, existent pour faciliter le chargement, à l'aide de différents exploits, la même étape suivante. Ce qui rends toute future mise à jour plus simple. Peu importe quel exploit charge le payload, le résultat est toujours le même. Il est possible de basculer entre plusieurs payloads à l'aide de PayloadLoaderPayload. Le payload utilisé dans le guide principal est CustomRPXLoader, qui lance `SD:/wiiu/payload.rpx` et le `payload.rpx` utilisé dans le guide est EnvironmentLoader, qui vous permet de charger différents environnements.

### Que sont les environnements ?

Un environnement est un ensemble de « modules de configuration », qui seront exécutés dans un certain ordre lors du lancement de l'environnement. L'un de ces environnements est Tiramisu. Les modules de configuration sont de petits morceaux de homebrew/code qui sont exécutés une fois pour configurer un environnement.

### How to Delete Update Folder to Block Updates on Wii U

If you want to delete the update folder to block updates, see its tab in the [Blocking Updates guide](block-updates).

### What SD Card size is recommended?

 - **Installation de copies de jeux : ** 32 Go (une taille plus petite peut être utilisée, mais certains titres ont une taille de 20 Go)
 - **Exécution de mods de jeu : ** 8 Go (une clé USB en FAT32 peut également être utilisée pour les mods)
 - **Uniquement pour les applications Homebrew : ** Toute taille.

**Recommended brands:** SanDisk, Samsung or PNY

?> Note: Avoid class 4 SD Cards, and avoid eBay!

### Can I install homebrew on Wii U with a USB instead of SD Card?

No, you must have an SD Card for a first time setup. A USB can then be used to install game backups, Virtual Console injects, etc, but not to store homebrew applications which are required to set everything up.

### Lors de l'extraction de certains fichiers, il y a des doublons de certains fichiers appelés "info.json" & "manifest.install", que dois-je faire avec ceux-ci ?

Rien de spécial, vous pouvez les laisser là, les supprimer ou les remplacer par ceux que vous essayez de copier. Those files are not used in the process, and therefore, won't have any impact by being or not being there.

### What is a Wii U formatted USB drive?

It's a USB drive that has been formatted by a Wii U console to its proprietary format.  
A Wii U formatted USB drive ***cannot be read by any other devices than the Wii U that originally formatted it.***  
If you ever want to use it with another Wii U console or any other devices, you will have to reformat it.
