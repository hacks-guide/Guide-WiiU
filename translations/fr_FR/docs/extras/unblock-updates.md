# Déblocage des mises à jour
---
Ceci est nécessaire si vous avez besoin d'effectuer une mise à jour du système.

?> If you are running Tiramisu and have deleted the update folder, you need to disable both autobooting and recreate the update folder.

### Instructions {docsify-ignore}

<!-- tabs:start -->

#### **Removing Tiramisu Autoboot**

### Removing Tiramisu Autoboot

?> When autobooting into the PayloadLoader, updates are automatically blocked. Follow the guide below to disable it.

1. Boot the console while holding X on the Gamepad.
1. Navigate to the `installer` environment and launch it by pressing A.
1. Appuyez sur A pour sélectionner `Check`.
1. Sélectionnez `Boot options`.
1. Vous serez invité à choisir si vous souhaitez modifier le titre qui sera lancé lors du démarrage de la console. Press A to select `Switch back to Wii U Menu`.
1. Une fois le processus terminé, appuyez sur A pour éteindre la console.
1. Perform the System Update.
1. Follow [this](../docs/user-guide/tiramisu/autoboot) to re-enable autobooting.

#### **Recreating Update Folder**

### Recreating Update Folder

1. Insérez votre carte SD dans votre ordinateur.
1. Download and extract [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases/tag/v1.1) to the root of your SD Card.
1. Insérez la carte SD dans votre console Wii U et allumez-la.
1. Entrez dans le Homebrew Launcher.
1. Naviguez dans le Homebrew Launcher et lancez l'application UFDiine.
1. Press the A button to create the update folder.
1. Confirm that it says `Update folder exists`. You are no longer blocking updates.

#### **Removing DNS Blocks**

### Removing DNS Blocks

1. Enter the Wii U's system settings and navigate to `Internet > Connect to the Internet > Connection List >` `Your WiFi connection > Change Settings > DNS` and set the option to `Auto-obtain`.
1. You are no longer blocking system updates.

<!-- tabs:end -->
