# Bloccare gli aggiornamenti
---
Tutti gli exploit Wii U conosciuti possono venir bloccati da un aggiornamento, a differenza, per esempio, dell'exploit RCM di Nintendo Switch. Anche se il Wii U non è più ufficialmente supportato, Nintendo potrebbe ancora rilasciare aggiornamenti per la console. Ad esempio, gli aggiornamenti 5.5.3, 5.5.4 e 5.5.5 sono stati tutti rilasciati dopo che la Wii U è stata interrotta, quindi bloccare gli aggiornamenti è ancora un'azione raccomandata.

### Istruzioni {docsify-ignore}

Currently, three ways exist to block updates on the Wii U system:
<!-- tabs:start -->

#### **Tiramisu Autoboot**

### Tiramisu Autoboot

?> When autobooting into the the PayloadLoader, updates are automatically blocked. To enable autobooting into the PayloadLoader follow [this](../docs/user-guide/tiramisu/autoboot).

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
