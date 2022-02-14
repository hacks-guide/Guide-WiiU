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

### Puis-je installer des jeux à partir d'un périphérique USB au lieu de la carte SD ?

Oui. Il est cependant un peu plus compliqué que l'installation à partir d'une carte SD. Des instructions détaillées se trouvent dans l'onglet `Installer depuis l'USB` dans le guide de [dumping](dump-games).

### Comment supprimer le dossier de mise à jour (update) pour bloquer les mises à jour sur la Wii U

Si vous souhaitez supprimer le dossier de mise à jour pour bloquer les mises à jour, consultez son onglet dans le guide [Blocage des mises à jour](block-updates).

### Quelle est la taille recommandée pour une carte SD ?

 - **Installation de copies de jeux : ** 32 Go (une taille plus petite peut être utilisée, mais certains titres ont une taille de 20 Go)
 - **Exécution de mods de jeu : ** 8 Go (une clé USB en FAT32 peut également être utilisée pour les mods)
 - **Uniquement pour les applications Homebrew : ** Toute taille.

**Marques recommandées:** SanDisk, Samsung ou PNY

?> Note : Évitez les cartes SD de classe 4, et évitez eBay !

### Puis-je installer des homebrews sur la Wii U avec une clé USB au lieu d'une carte SD ?

Non, vous devez avoir une carte SD pour la première mise en place d'un Custom Firmware. Une clé USB peut ensuite être utilisée pour installer des backups de jeu, des injections de Console Virtuelle, etc, mais pas pour stocker les applications homebrew qui sont nécessaires pour tout configurer.

### Lors de l'extraction de certains fichiers, il y a des doublons de certains fichiers appelés "info.json" & "manifest.install", que dois-je faire avec ceux-ci ?

Rien de spécial, vous pouvez les laisser là, les supprimer ou les remplacer par ceux que vous essayez de copier. Ces fichiers ne sont pas utilisés dans le processus et qui, par conséquent, n'auront pas d'impact en étant ou en n'étant pas là.

### Qu'est-ce qu'une clé USB formatée par une Wii U ?

Il s'agit d'une clé USB qui a été formatée par une console Wii U dans son format propriétaire.  
Une clé USB formatée pour la Wii U ***ne peut être lue par aucun autre appareil que la Wii U qui l'a formatée à l'origine.***  
Si jamais vous voulez l'utiliser avec une autre console Wii U ou tout autre appareil, vous devrez le reformater.
