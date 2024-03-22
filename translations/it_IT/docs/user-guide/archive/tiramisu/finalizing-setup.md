# Tiramisu {docsify-ignore-all}

## Completamento dell'installazione

Ora che PayloadLoader, Environment Loader e Tiramisu sono installati, possiamo completare l'installazione.

Faremo in modo che l'ambiente di Tiramisu si avvii automaticamente quando la console avvierà l'app Informazioni per la salute e la sicurezza (o quando la avvierai manualmente se hai scelto di non avviarlo automaticamente) e selezioneremo il Menu Wii U come predefinito oltre a scaricare applicazioni homebrew aggiuntive.

### Impostare PayloadLoader, Environment Loader e Tiramisu

1. Accendi la tua Wii U.
    - L'Environment Loader dovrebbe apparire.
1. Using the D-Pad, navigate to `tiramisu` and press Y to set this to your default environment, then press A to launch into Tiramisu.
    - You might get a red warning screen telling you that updates aren't blocked properly. Press A to continue anyway. We're going to block updates in the "Blocking Updates" section below.
    - To open the Environment Loader in the future, you have to hold X while your Wii U is booting up.
1. Nel Selettore di Avvio di Tiramisu, il `Menu Wii U` dovrebbe essere già selezionato, premi Y per impostarlo come opzione predefinita di autoavvio, e premi A per avviare il Menu Wii U.
    - To open the Tiramisu Boot Selector in the future, you have to hold START (+) while your Wii U is booting up.

?> Una volta entrato nell'ambiente Tiramisu, puoi aprire il Mii Maker in qualsiasi momento per entrare nell'Homebrew Launcher. <br>Homebrew Launcher will be empty for first-time modders. Follow the rest of the guide to install apps into the Homebrew Launcher. <br>To get back into the Mii Maker, simply press the HOME button while in the Homebrew Launcher.

### Blocking Updates
While Tiramisu's PayloadLoader already has built-in update blocking functionality, it is recommended to delete the update folder to effectively block system updates. If you get a red warning screen while booting into Tiramisu, the update folder still exists and it is recommended to delete it using [this guide](../block-updates).

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
