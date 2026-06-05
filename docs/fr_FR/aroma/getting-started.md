---
next: true
---

# Aroma

Aroma est un environnement en cours de développement et le successeur de Tiramisu.

## Qu'est-ce qu'Aroma ?

Aroma est un environnement comme Tiramisu, qui peut être démarré via l'Environment Loader.  
Aroma, tout comme Tiramisu, utilise la même version de Mocha, a la même prise en charge des modules d'installation, et est fourni avec le Autoboot Module, qui inclut le sélecteur de démarrage et la prise en charge du démarrage rapide.  
Aroma est fourni avec plusieurs fonctionnalités additionnelles, comprenant un système de plugins, une nouvelle manière de lancer des homebrew, et plusieurs modules et plugins intégrés (c.-à-d. des patches Sans région).

## Que puis-je faire avec Aroma ?

Pour un aperçu détaillé, consultez [ce billet de blog](https://maschell.github.io/homebrew/2022/09/05/aroma.html). Un résumé rapide est donné ci-dessous.

### Modules

Aroma prend en charge des modules qui, contrairement aux modules d'installation, tournent toujours en arrière-plan.  
Ceci permet une extension approfondie des fonctionnalités de la console.

### Plugins

Des plugins, de même que les modules, tournent aussi toujours en arrière-plan.  
Ils peuvent améliorer l'expérience de la console en modifiant et fournissant des fonctionnalités additionnelles.  
Les plugins peuvent être configurés en utilisant un menu de configuration, qui peut être ouvert en pressant une combinaison de boutons.

### Wii U Homebrew Bundles

Les Wii U Homebrew Bundles (WUHB) sont une nouvelle manière de lancer des homebrew.  
Ces fichiers `.wuhb` contiennent l'exécutable principale et peuvent inclure directement les images d'icône et de bannière et du contenu additionnel.  
Avec le plugin `homebrew_on_menu`, des fichiers WUHB peuvent être lancés directement depuis le menu Wii U, tout comme les chaines officiels.

## Quelles-sont les limitations ?

En raison de limitations techniques, beaucoup de vieilles applications homebrew ne fonctionneront plus avec Aroma.  
Ceci inclut tout les homebrew `.elf`, mais aussi certains homebrew `.rpx` (c.-à-d. RetroArch), qui n'implémente pas les fonctionnalités nécessaires correctement.  
Ces homebrew doivent être mis à jour pour la compatibilité avec Aroma. Pour lancer des homebrew anciens vous devez démarrer dans l'environnement Tiramisu.  
Lancer des homebrew via le Homebrew Launcher dorénavant obsolète n'est plus possible avec Aroma.

Outre les limitations mentionnées ci-dessus, notez qu'Aroma est toujours en version bêta. Tout n'a pas encore été testé et d'autres problèmes pourraient être découverts. Cela ne signifie pas nécessairement que Aroma est instable, mais il y a des chances que vous puissiez faire l'expérience d'un fonctionnement incorrect.
