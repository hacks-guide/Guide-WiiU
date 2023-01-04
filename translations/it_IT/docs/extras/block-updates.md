# Bloccare gli aggiornamenti
---
Tutti gli exploit Wii U conosciuti possono venir bloccati da un aggiornamento, a differenza, per esempio, dell'exploit RCM di Nintendo Switch. Anche se il Wii U non è più ufficialmente supportato, Nintendo potrebbe ancora rilasciare aggiornamenti per la console. Ad esempio, gli aggiornamenti da 5.5.3 a 5.5.6 sono stati rilasciato quando il Wii U venne discontinuato, quindi è raccomandato bloccare gli aggiornamenti.

While Tiramisu's PayloadLoader already has built-in update blocking functionality, it is recommended to delete the update folder to effectively block system updates. Se ottieni una schermata rossa mentre stai avviando Tiramisu, significa che la cartella degli aggiornamenti esiste ancora e deve essere eliminata seguendo questa guida.

### Istruzioni {docsify-ignore}

Attualmente, esistono due metodi per bloccare gli aggiornamenti di sistema:
<!-- tabs:start -->

#### **Eliminare la cartella Update**

### Eliminare la cartella Update

?> Questo metodo è più avanzato del blocco tramite DNS e usa un'app homebrew per modificare i file di sistema. Però, ha il vantaggio di non bloccare l'accesso alle funzionalità dell'eShop.
1. Inserisci la scheda SD nel tuo computer.
1. Download and extract [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases/tag/v1.1) to the root of your SD Card.
1. Plug the SD Card into your Wii U console and boot Tiramisu.
1. Entra nell'Homebrew Launcher.
1. Naviga nell'Homebrew Launcher ed esegui l'app UFDiine.
1. Premi il pulsante A per eliminare la cartella Update.
1. Controlla che dica `Update folder is deleted`. Ora stai bloccando gli aggiornamenti.

#### **Blocco tramite DNS**

### Blocco tramite DNS

?> Questo metodo è il più facile ed è consigliato alle persone meno esperte. Non ti farà, però, accedere all'eShop. Questo può essere risolto eseguendo [NNUPatcher](https://wiiubru.com/appstore/zips/nnupatcher.zip) prima di aprire l'eShop.
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
