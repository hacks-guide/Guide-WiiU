# Bloccare gli aggiornamenti
---
Tutti gli exploit Wii U conosciuti possono venir bloccati da un aggiornamento, a differenza, per esempio, dell'exploit RCM di Nintendo Switch. Anche se il Wii U non è più ufficialmente supportato, Nintendo potrebbe ancora rilasciare aggiornamenti per la console. Ad esempio, gli aggiornamenti da 5.5.3 a 5.5.6 sono stati rilasciato quando il Wii U venne discontinuato, quindi è raccomandato bloccare gli aggiornamenti.

While Aromas's PayloadLoader already has built-in update blocking functionality, it is recommended to delete the update folder to effectively block system updates. If you get a red warning screen while booting into Aroma, the update folder still exists and it is recommended to delete it using the guide below.

### Istruzioni {docsify-ignore}

Currently, one way exists to effectively block updates on the Wii U system:

1. Inserisci la scheda SD nel tuo computer.
1. Download [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases/) and copy the `UFDiine.wuhb` file to `sd:/wiiu/apps` on the root of your SD Card.
1. Plug the SD Card into your Wii U console and boot Aroma.
1. Navigate the Wii U Menu and run the UFDiine app.
1. Premi il pulsante A per eliminare la cartella Update.
1. Confirm that it says `Update folder is deleted`.
1. Exit UFDiine. You are now blocking updates.
