# Tiramisu {docsify-ignore-all}

## Completamento dell'installazione

Ora che PayloadLoader, Environment Loader e Tiramisu sono installati, possiamo completare l'installazione.

Faremo in modo che l'ambiente di Tiramisu si avvii automaticamente quando la console avvierà l'app Informazioni per la salute e la sicurezza (o quando la avvierai manualmente se hai scelto di non avviarlo automaticamente) e selezioneremo il Menu Wii U come predefinito oltre a scaricare applicazioni homebrew aggiuntive.

### Impostare PayloadLoader, Environment Loader e Tiramisu

1. Accendi la tua Wii U.
    - L'Environment Loader dovrebbe apparire.
1. Usando il D-Pad, naviga su `tiramisu` e premi Y per impostarlo come ambiente predefinito, poi premi A per avviare Tiramisu.
    - Per aprire l'Environment Loader in futuro, è necessario tenere premuto X durante l'avvio della Wii U.
1. Nel Selettore di Avvio di Tiramisu, il `Menu Wii U` dovrebbe essere già selezionato, premi Y per impostarlo come opzione predefinita di autoavvio, e premi A per avviare il Menu Wii U.
    - In futuro, per aprire il Selettore di Avvio di Tiramisu, è necessario tenere premuto START (+) mentre la Wii U si avvia.

?> Una volta entrato nell'ambiente Tiramisu, puoi aprire il Mii Maker in qualsiasi momento per entrare nell'Homebrew Launcher. <br>Per tornare al Mii Maker, premi semplicemente il tasto HOME mentre sei nell'Homebrew Launcher.

### App Homebrew Aggiuntive

- **SaveMii mod** è un'app homebrew che serve a gestire la tua Wii U e i salvataggi del vWii.
- **Bloopair** è un modulo di Tiramisu che ti permette di connettere i controller Bluetooth più popolari in modo wireless. Vedi [questa pagina](https://gbatemp.net/threads/bloopair-connect-controllers-from-other-consoles-natively.594289/) per maggiori dettagli.
- L'**Homebrew Appstore** ti permette di navigare e scaricare app homebrew direttamente dalla tua Wii U.

### App Homebrew aggiuntive - Cosa ti serve

- La versione più recente di [SaveMii mod](https://wiiubru.com/appstore/zips/savemii_mod.zip).
- La versione più recente di [Bloopair - Tiramisu Edition](https://github.com/GaryOderNichts/Bloopair/releases).
- `wiiu-extracttosd.zip` of the [HB Appstore](https://github.com/fortheusers/hb-appstore/releases/).

### App Homebrew aggiuntive - Estrazione dei file sulla scheda SD

1. Copia nella root della tua scheda SD i contenuti di `savemii_mod.zip` appena scaricato.
1. Copia nella root della tua scheda SD i contenuti di `Bloopair_vX.X.X-tiramisu.zip` appena scaricato.
1. Copia nella root della tua scheda SD i contenuti di `wiiu-extracttosd.zip` appena scaricato.