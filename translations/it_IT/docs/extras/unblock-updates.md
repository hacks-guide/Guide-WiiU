# Sbloccare gli aggiornamenti
---
Questo è necessario se avrai mai bisogno di eseguire un Aggiornamento della Console.

?> If you are running Aroma and have deleted the update folder, you need to disable both autobooting and recreate the update folder.

### Istruzioni {docsify-ignore}

<!-- tabs:start -->

#### **Removing Aroma Autoboot**

### Removing Aroma Autoboot

?> When autobooting into the PayloadLoader, updates are automatically blocked. Follow the guide below to disable it.

1. Launch the PayloadLoader Installer from the Wii U Menu.
1. Premi A per selezionare `Check`.
1. Seleziona `Boot options`.
1. Ti verrà chiesto se vuoi cambiare il titolo di avvio. Premi A per selezionare `Switch back to Wii U Menu`.
1. Al termine del processo, premi A per spegnere la console.
1. Perform the System Update.
1. Follow [this](../docs/user-guide/aroma/autoboot) to re-enable autobooting.

#### **Recreating Update Folder**

### Recreating Update Folder

1. Inserisci la scheda SD nel tuo computer.
1. Download [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases/) and copy the `UFDiine.wuhb` file to `sd:/wiiu/apps` on the root of your SD Card.
1. Plug the SD Card into your Wii U console and boot Aroma.
1. Navigate the Wii U Menu and run the UFDiine app.
1. Premi il pulsante A per eliminare la cartella Update.
1. Confirm that it says `Update folder exists`. You are no longer blocking updates.

#### **Removing DNS Blocks**

### Removing DNS Blocks

1. Enter the Wii U's system settings and navigate to `Internet > Connect to the Internet > Connection List >` `Your WiFi connection > Change Settings > DNS` and set the option to `Auto-obtain`.
1. You are no longer blocking system updates.

<!-- tabs:end -->
