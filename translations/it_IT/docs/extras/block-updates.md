# Bloccare gli aggiornamenti
---
Tutti gli exploit Wii U conosciuti possono venir bloccati da un aggiornamento, a differenza, per esempio, dell'exploit RCM di Nintendo Switch. Anche se il Wii U non è più ufficialmente supportato, Nintendo potrebbe ancora rilasciare aggiornamenti per la console. Namely, the updates 5.5.3, 5.5.4 and 5.5.5 were all released after the Wii U was discontinued, so blocking updates is still a recommended action.

### Istruzioni {docsify-ignore}

Attualmente, esistono due metodi per bloccare gli aggiornamenti di sistema:
<!-- tabs:start -->

#### **Eliminare la cartella Update**

### Eliminare la cartella Update

?> Questo metodo è un po' più avanzato del blocco tramite DNS, e utilizza una app Homebrew per modificare i file di sistema. Tuttavia, ha il vantaggio di non limitare l'accesso all'eShop.
1. Inserisci la scheda SD nel tuo computer.
1. Scarica ed estrai [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases) nella root della tua scheda SD.
1. Inserisci la scheda SD nel tuo Wii U e accendilo.
1. Entra nell'Homebrew Launcher.
1. Naviga nell'Homebrew Launcher ed esegui l'app UFDiine.
1. Premi il pulsante A per eliminare la cartella Update.
1. Controlla che dica `Update folder is deleted`. Ora stai bloccando gli aggiornamenti.

#### **Blocco tramite DNS**

### Blocco tramite DNS

?> Questo metodo è il più facile ed è consigliato alle persone meno esperte. Non ti farà, però, accedere all'eShop. Questo può venir aggirato eseguendo [NNUPatcher](https://www.wiiubru.com/appstore/zips/nnupatcher.zip) prima di aprire l'eShop.
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
