# Sbloccare gli aggiornamenti
---
Questo è necessario se avrai mai bisogno di eseguire un Aggiornamento della Console.

### Istruzioni {docsify-ignore}

<!-- tabs:start -->

#### **Removing Tiramisu Autoboot**

### Removing Tiramisu Autoboot

?> When autobooting into the PayloadLoader, updates are automatically blocked. Follow the guide below to disable it.

1. Avviare la console tenendo premuto X sul Gamepad.
1. Vai all'ambiente `installer` e lancialo premendo A.
1. Premi A per selezionare `Check`.
1. Seleziona `Boot options`.
1. Ti verrà chiesto se vuoi cambiare il titolo di avvio. Premi A per selezionare `Switch back to Wii U Menu`.
1. Al termine del processo, premi A per spegnere la console.
1. Perform the System Update.
1. Follow [this](../docs/user-guide/tiramisu/autoboot) to re-enable autobooting.

#### **Recreating Update Folder**

### Recreating Update Folder

1. Inserisci la scheda SD nel tuo computer.
1. Scarica ed estrai [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases) nella root della tua scheda SD.
1. Inserisci la scheda SD nel tuo Wii U e accendilo.
1. Entra nell'Homebrew Launcher.
1. Naviga nell'Homebrew Launcher ed esegui l'app UFDiine.
1. Press the A button to create the update folder.
1. Confirm that it says `Update folder exists`. You are no longer blocking updates.

#### **Removing DNS Blocks**

### Removing DNS Blocks

1. Enter the Wii U's system settings and navigate to `Internet > Connect to the Internet > Connection List >` `Your WiFi connection > Change Settings > DNS` and set the option to `Auto-obtain`.
1. You are no longer blocking system updates.

<!-- tabs:end -->
