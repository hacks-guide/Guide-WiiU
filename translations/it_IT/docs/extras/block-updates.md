# Bloccare gli aggiornamenti
---
Tutti gli exploit Wii U conosciuti possono venir bloccati da un aggiornamento, a differenza, per esempio, dell'exploit RCM di Nintendo Switch. Anche se il Wii U non è più ufficialmente supportato, Nintendo potrebbe ancora rilasciare aggiornamenti per la console. Ad esempio, gli aggiornamenti da 5.5.3 a 5.5.6 sono stati rilasciato quando il Wii U venne discontinuato, quindi è raccomandato bloccare gli aggiornamenti.

While Tiramisu's PayloadLoader already has built-in update blocking functionality, it is recommended to delete the update folder to effectively block system updates. Se ottieni una schermata rossa mentre stai avviando Tiramisu, significa che la cartella degli aggiornamenti esiste ancora e deve essere eliminata seguendo questa guida.

### Istruzioni {docsify-ignore}

Currently, one way exists to effectively block updates on the Wii U system:

1. Inserisci la scheda SD nel tuo computer.
1. Download and extract the contents of [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases/tag/v1.1) to the root of your SD Card.
1. Plug the SD Card into your Wii U console and boot Tiramisu.
1. Entra nell'Homebrew Launcher.
1. Naviga nell'Homebrew Launcher ed esegui l'app UFDiine.
1. Premi il pulsante A per eliminare la cartella Update.
1. Confirm that it says `Update folder is deleted`.
1. Power off the console. You are now blocking updates.
