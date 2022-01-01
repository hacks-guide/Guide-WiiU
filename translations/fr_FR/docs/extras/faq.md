# Foire Aux Questions {docsify-ignore-all}
---

### L'homebrew comporte-t-il des risques ?

Actuellement, le homebrewing de la Wii U ne vous expose pas à un risque de bannissement par Nintendo, à moins que vous ne trichiez dans les jeux en ligne ou que vous ne fraudiez sur l'eShop. Cependant, vous devez toujours faire attention au lancement de homebrew téléchargés, surtout si vous ne faites pas confiance à la source, car le homebrew peut potentiellement endommager votre console !

### What are exploits?

Exploits are entry points which allow further homebrew to be run. In the main guide, you will use exploits such as the browser exploit (http://wiiuexploit.xyz) and PayloadLoader (Health & Safety exploit). All current exploits load `SD:/wiiu/payload.elf` which takes over further loading of homebrew.

### What are payloads?

Payloads, which are normally found with the filename `payload.elf`, exist to make it easier to have different exploits load the same next stage, which allows easier updateability. It doesn't matter what exploit loads the payload, the result is always the same. Multiple payloads can be switched between using the PayloadLoaderPayload. The payload used in the main guide is CustomRPXLoader which loads `SD:/wiiu/payload.rpx` and the `payload.rpx` used in the guide is EnvironmentLoader, which allows you to load different environments.

### What are environments?

An environment is a collection of "setup modules", which will be run in a certain order when launching the environment. One such environment is Tiramisu. Setup modules are small pieces of homebrew/code that are executed once to set up an environment.

### Can I install games from my USB instead of SD?

Oui. Il est cependant un peu plus compliqué que l'installation à partir d'une carte SD. Des instructions détaillées se trouvent dans l'onglet `Installer depuis l'USB` dans le guide de [dumping](dump-games).

### How to Delete Update Folder to Block Updates on Wii U

Si vous souhaitez supprimer le dossier de mise à jour pour bloquer les mises à jour, consultez son onglet dans le guide [Blocage des mises à jour](block-updates).

### What SD Card size is recommended?

 - **Installing game backups:** 32GB (Smaller size may be used, but certain titles are 20GB in size)
 - **Running game mods:** 8GB (FAT32 USB drive may be used as well for mods)
 - **Only running homebrew apps:** Any size.

**Marques recommandées:** SanDisk, Samsung ou PNY

?> Note : Évitez les cartes SD de classe 4, et évitez eBay !

### Can I install homebrew on Wii U with a USB instead of SD Card?

Non, vous devez avoir une carte SD pour la première mise en place d'un Custom Firmware. Une clé USB peut ensuite être utilisée pour installer des backups de jeu, des injections de Console Virtuelle, etc, mais pas pour stocker les applications homebrew qui sont nécessaires pour tout configurer.

### Lors de l'extraction de certains fichiers, il y a des doublons de certains fichiers appelés "info.json" & "manifest.install", que dois-je faire avec ceux-ci ?

Rien de spécial, vous pouvez les laisser là, les supprimer ou les remplacer par ceux que vous essayez de copier. Ces fichiers ne sont pas utilisés dans le processus et qui, par conséquent, n'auront pas d'impact en étant ou en n'étant pas là.

### What is a Wii U formatted USB drive?

Il s'agit d'une clé USB qui a été formatée par une console Wii U dans son format propriétaire.  
Une clé USB formatée pour la Wii U ***ne peut être lue par aucun autre appareil que la Wii U qui l'a formatée à l'origine.***  
Si jamais vous voulez l'utiliser avec une autre console Wii U ou tout autre appareil, vous devrez le reformater.
