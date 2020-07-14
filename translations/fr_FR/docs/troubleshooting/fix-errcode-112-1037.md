# How To Fix The Error Code 112-1037
---
Cette page vous guidera tout au long du processus de correction du code d'erreur 112-1037.

### What You Need {docsify-ignore}

- A working [homebrew installation](introduction).
- [wupclient.py](https://raw.githubusercontent.com/Elpunical/mocha/master/ios_mcp/wupclient.py) **(clic droit -> Enregistrer le fichier sous... -> Cliquez sur OK).**
- La dernière version de [Python](https://www.python.org/downloads/).

### Instructions {docsify-ignore}

1. Installez Python sur votre ordinateur.

### Corriger le code d'erreur

<!-- tabs:start -->

#### **Windows**

### Windows

1. Allumez votre Wii U.
1. Lancez le Homebrew Launcher et lancez Mocha.
1. Retournez au Menu Wii U.
1. Ouvrez une fenêtre d'invite de commande.
1. Utilisez la commande suivante : `cd <directory>`.
  - Exemple: <code>cd C:\Users\username<wbr>\Downloads</code>.
1. Utilisez la commande suivante : `py -3 -i wupclient.py`.
1. Entrez l'adresse IP de votre Wii U.
 - Vous ne savez pas comment le trouver? Lisez [cela](find-wiiu-ip-address).
1. Utilisez la commande appropriée en fonction de la région de votre console :
 - JPN : <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001200a/content<wbr>/pages<wbr>/index.html", 0x644)</code>.
 - USA: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001210a/content<wbr>/pages<wbr>/index.html", 0x644)</code>.
 - EUR: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001220a/content<wbr>/pages<wbr>/index.html", 0x644)</code>.
1. Si la commande a fonctionné, vous obtiendrez la réponse suivante : `chmod returned 0x0`.
1. Le code d'erreur devrait maintenant avoir disparu.

#### **macOS & Linux**

### macOS & Linux

1. Allumez votre Wii U.
1. Lancez le Homebrew Launcher et lancez Mocha.
1. Retournez au Menu Wii U.
1. Ouvrez une fenêtre du Terminal.
1. Utilisez la commande suivante : `cd <directory>`.
 - Sur macOS, l'endroit le plus courant pour trouver vos fichiers téléchargés est <code>/Users/username<wbr>/Downloads</code>.
 - Sous Linux, l'endroit le plus courant pour trouver vos fichiers téléchargés est <code>/home/username<wbr>/Downloads</code>.
1. Utilisez la commande suivante : `python3 -i wupclient.py`.
1. Entrez l'adresse IP de votre Wii U.
 - Vous ne savez pas comment le trouver? Lisez [cela](find-wiiu-ip-address).
1. Utilisez la commande appropriée en fonction de la région de votre console :
 - JPN : <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001200a/content<wbr>/pages<wbr>/index.html", 0x644)</code>.
 - USA: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001210a/content<wbr>/pages<wbr>/index.html", 0x644)</code>.
 - EUR: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001220a/content<wbr>/pages<wbr>/index.html", 0x644)</code>.
1. Si la commande a fonctionné, vous obtiendrez la réponse suivante : `chmod returned 0x0`.
1. Le code d'erreur devrait maintenant avoir disparu.

<!-- tabs:end -->