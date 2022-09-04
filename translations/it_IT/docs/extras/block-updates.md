# Bloccare gli aggiornamenti
---
Tutti gli exploit Wii U conosciuti possono venir bloccati da un aggiornamento, a differenza, per esempio, dell'exploit RCM di Nintendo Switch. Anche se il Wii U non è più ufficialmente supportato, Nintendo potrebbe ancora rilasciare aggiornamenti per la console. Namely, the updates 5.5.3 up to 5.5.6 were all released after the Wii U was discontinued, so blocking updates is still a recommended action.

While Tiramisu already has built-in update blocking functionality, it is recommended to delete the update folder to effectively block system updates. If you get a red warning screen while booting into Tiramisu, the update folder still exists and it is recommended to delete it using the guide below.

### Istruzioni {docsify-ignore}

Currently, two ways exist to effectively block updates on the Wii U system:
<!-- tabs:start -->

#### **Deleting Update Folder**

### Deleting Update Folder

?> This method of update blocking is a bit more advanced than DNS Blocking and uses a homebrew app to modify system files. However, it has the advantage that the eShop's functionality will not be restricted.
1. Inserisci la scheda SD nel tuo computer.
1. Scarica ed estrai [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases) nella root della tua scheda SD.
1. Inserisci la scheda SD nel tuo Wii U e accendilo.
1. Entra nell'Homebrew Launcher.
1. Naviga nell'Homebrew Launcher ed esegui l'app UFDiine.
1. Premi il pulsante A per eliminare la cartella Update.
1. Controlla che dica `Update folder is deleted`. Ora stai bloccando gli aggiornamenti.

#### **DNS Blocking**

### DNS Blocking

?> This method is the easier method and is recommended to less advanced users. It does, however, prevent the eShop from working. This can be worked around by running [NNUPatcher](https://wiiubru.com/appstore/zips/nnupatcher.zip) before starting the eShop.
1. Inserisci la scheda SD nel tuo computer.
1. Copia i contenuti di `nnupatcher.zip` nella root della tua scheda SD. Se viene chiesto, sovrascrivi tutti i file duplicati.
1. Inserisci la scheda SD nel tuo Wii U e accendilo.
1. Entra nelle Impostazioni della console Wii U e vai su `Internet > Collegati a Internet > Lista delle connessioni >` `La tua connessione Wi-Fi > Modifica le impostazioni > DNS` e imposta `Inserimento manuale`.
1. Ti chiederà di inserire un DNS primario e uno secondario. Inserisci i seguenti indirizzi IP:
    - DNS primario: 168.235.092.108
    - DNS secondario: 081.004.127.020 <img src="docs/assets/img/DNS.png" alt="Blocco DNS" />
1. Clicca su OK.
1. Ora stai bloccando gli aggiornamenti. Per accedere all'eShop, esegui l'app NNUPatcher dall'Homebrew Launcher prima di aprire l'eShop.

<!-- tabs:end -->
