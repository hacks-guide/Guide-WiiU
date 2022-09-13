# Tiramisu {docsify-ignore-all}

## Completamento dell'installazione

Ora che PayloadLoader, Environment Loader e Tiramisu sono installati, possiamo completare l'installazione.

Faremo in modo che l'ambiente di Tiramisu si avvii automaticamente quando la console avvierà l'app Informazioni per la salute e la sicurezza (o quando la avvierai manualmente se hai scelto di non avviarlo automaticamente) e selezioneremo il Menu Wii U come predefinito oltre a scaricare applicazioni homebrew aggiuntive.

### Impostare PayloadLoader, Environment Loader e Tiramisu

1. Accendi la tua Wii U.
    - L'Environment Loader dovrebbe apparire.
1. Usando il D-Pad, naviga su `tiramisu` e premi Y per impostarlo come ambiente predefinito, poi premi A per avviare Tiramisu.
    - You might get a red warning screen telling you that updates aren't blocked properly. Press A to continue anyways. We're going to block updates in the "Blocking Updates" section below.
    - To open the Environment Loader selector in the future, you have hold X while your Wii U is booting up.
1. Nel Selettore di Avvio di Tiramisu, il `Menu Wii U` dovrebbe essere già selezionato, premi Y per impostarlo come opzione predefinita di autoavvio, e premi A per avviare il Menu Wii U.
    - In futuro, per aprire il Selettore di Avvio di Tiramisu, è necessario tenere premuto START (+) mentre la Wii U si avvia.

?> Una volta entrato nell'ambiente Tiramisu, puoi aprire il Mii Maker in qualsiasi momento per entrare nell'Homebrew Launcher. <br>Per tornare al Mii Maker, premi semplicemente il tasto HOME mentre sei nell'Homebrew Launcher.

### Bloccare gli aggiornamenti
Anche se Tiramisu ha un sistema integrato per bloccare gli aggiornamenti, è consigliato cancellare la cartella degli aggiornamenti per bloccarli efficacemente. If you get a red warning screen while booting into Tiramisu, the update folder still exists and it is recommended to delete it using [this guide](../block-updates).

### Additional Homebrew Apps

- **SaveMii Mod WUT Port** is a homebrew app that lets you manage your Wii U and vWii save data.
- **Bloopair** è un modulo di Tiramisu che ti permette di connettere i controller Bluetooth più popolari in modo wireless. Vedi [questa pagina](https://gbatemp.net/threads/bloopair-connect-controllers-from-other-consoles-natively.594289/) per maggiori dettagli.
- L'**Homebrew Appstore** ti permette di navigare e scaricare app homebrew direttamente dalla tua Wii U.

### Additional Homebrew Apps - What You Need

- The latest version of [SaveMii Mod WUT Port](https://wiiubru.com/appstore/zips/SaveMiiModWUTPort.zip).
- The latest version of [Bloopair](https://github.com/GaryOderNichts/Bloopair/releases).
- Il file `wiiu-extracttosd.zip` di [HB Appstore](https://github.com/fortheusers/hb-appstore/releases/).

### Additional Homebrew Apps - Extracting Files to the SD Card

1. Copy the contents of the newly downloaded `SaveMiiModWUTPort.zip` file to the root of your SD Card.
1. Extract the contents of the newly downloaded `Bloopair_vX.X.X.zip` file.  
   Copy the `30_bloopair.rpx` to the `wiiu/environments/tiramisu/modules/setup/` folder on the root of your SD Card.  
   Copy the `wiiu` folder to the root of your SD Card.
1. Copy the contents of the newly downloaded `wiiu-extracttosd.zip` file to the root of your SD Card.
