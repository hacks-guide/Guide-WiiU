# Recuperare un IOS/Canale vWii
---
Questa pagina ti guiderà attraverso il processo di recupero di un IOS o di un canale sulla tua vWii, se per qualche motivo è stato corrotto o eliminato.

<details>
<summary>Clicca qui per mostrare cosa può essere recuperato con questo metodo.</summary>

- Manuale Del Menu Wii
- canale di sistema vWii
- Seleziona Regione
- Menu di Sistema
- Canale Mii
- Menu Wii U
- Canale Wii Shop
- IOS 9
- IOS 12
- IOS 13
- IOS 14
- IOS 15
- IOS 17
- IOS 21
- IOS 22
- IOS 28
- IOS 31
- IOS 33
- IOS 34
- IOS 35
- IOS 36
- IOS 37
- IOS 38
- IOS 41
- IOS 43
- IOS 45
- IOS 46
- IOS 48
- IOS 53
- IOS 55
- IOS 56
- IOS 57
- IOS 58
- IOS 59
- IOS 62
- IOS 80
- BC-NAND
- BC-WFS

</details>

!> Potresti distruggere la NAND del tuo vWii se non segui i passaggi con attenzione! Per favore fai il [backup](mocha/online-exploit/nand-backup) del tuo SLCCMPT e OTP se non lo hai ancora fatto!

?> Se stai utilizzando un metodo per bloccare gli aggiornamenti, [rimuovilo](unblock-updates).

### Cosa ti servirà {docsify-ignore}

- Un'installazione [homebrew](introduction) nella parte Wii U della console.
- L'ultima versione di [vWii Decaffeinator](https://github.com/GaryOderNichts/vWii-Decaffeinator/releases).

### Istruzioni {docsify-ignore}

1. Copia i contenuti di `decaffeinator.zip` nella root della tua SD.
1. Togli la scheda SD dal computer e inseriscila nella console Wii U.
1. Accendi il Wii U e avvia il CFW che preferisci (Mocha, Haxchi o CBHC).
1. Avvia l'Homebrew Launcher.
1. Avvia vWii Decaffeinator.

### Processo di recupero

Avrai diverse opzioni. E' raccomandato di provare in primis `Advanced options` nel caso sai che cosa devi ripristinare, oppure `Light mode` se non sai cosa ripristinare. In casi estremi, se nessuna delle due opzioni funziona, dovresti scegliere `Aggressive mode`.

<!-- tabs:start -->

#### **Advanced options**

### Advanced options

?> Questa modalità rimuoverà i canali e gli IOS specificati e li reinstallerà. Tutti gli altri dati (Anche i cIOS) verranno conservati.

1. Seleziona `Advanced options` dal menu.
1. Usa il D-Pad per selezionare cosa vorresti ripristinare.
1. Premi start per cominciare il ripristino.
1. Al termine del processo, acconsenti l'applicazione ad avviare le Impostazioni di Sistema.
1. Esegui un [Aggiornamento di sistema](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) per completare il ripristino.

?> Adesso puoi riabilitare il [blocco degli aggiornamenti di sistema](block-updates).

#### **Light mode**

### Light mode

?> Questa modalità cancellerà i dati del menu di sistema, i salvataggi della Bacheca dei messaggi Wii, gli IOS, e gli altri titoli di sistema che verranno rimpiazzati con una versione pulita. Nota che questo rimuoverà i cIOS e dovranno essere reinstallati di nuovo. Tutti gli altri dati non verrano eliminati.

1. Seleziona `Light mode` dal menu.
1. Premi start per cominciare il ripristino.
1. Al termine del processo, acconsenti l'applicazione ad avviare le Impostazioni di Sistema.
1. Esegui un [Aggiornamento di sistema](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) per completare il ripristino.

?> Adesso puoi riabilitare il [blocco degli aggiornamenti di sistema](block-updates).

#### **Aggressive mode**

### Aggressive mode

!> Questa modalità rimuoverà **tutto** per reinstallare una versione pulita degli IOS e degli altri canali. Nota che TUTTI i dati verranno cancellati e la NAND del vWii ritornerà nel suo stato di stock!

1. Seleziona `Aggressive mode` dal menu.
1. Leggi l'avviso. Se vuoi procedere, premi Start per iniziare il processo.
1. Al termine del processo, acconsenti l'applicazione ad avviare le Impostazioni di Sistema.
1. Esegui un [Aggiornamento di sistema](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) per completare il ripristino.

?> Adesso puoi riabilitare il [blocco degli aggiornamenti di sistema](block-updates).

> Se ricevi l'errore 160-0101 quando avvii il sistema dopo aver utilizzato vWii Decaffeinator, rimuovi ogni disco, scollega eventuali dispositivi esterni e riavvia il sistema.

<!-- tabs:end -->

> Se ricevi il codice errore 105-3102 quando provi a fare un aggiornamento di sistema, riavvia la console e riprova.