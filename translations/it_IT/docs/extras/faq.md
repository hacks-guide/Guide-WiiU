# Domande frequenti {docsify-ignore-all}
---

### La modifica ha dei rischi?

Attualmente, modificare il Wii U non ti espone al rischio di venire bannato da Nintendo a meno che non usi trucchi su giochi online, o se commetti frode sull'eShop. Dovresti, tuttavia, fare sempre attenzione quando avvii homebrew scaricati, specialmente se non ti fidi della fonte, dato che potenzialmente gli homebrew possono danneggiare il tuo sistema!

### Cos'è un exploit?

Un exploit è un punto d'entrata che permette di eseguire ulteriore homebrew. Nella guida principale userai exploit come l'exploit browser (http://wiiuexploit.xyz) e PayloadLoader (exploit & Informazioni per la salute e sicurezza). Tutti gli exploit attuali caricano `SD:/wiiu/payload.elf`, che controlla il caricamento di ulteriori homebrew.

### Cos'è un payload?

Un payload, il cui file è solitamente chiamato `payload.elf`, esiste per portare exploit diversi a caricare lo stesso passo successivo, permettendo un aggiornamento più facile. Non importa quale exploit carica il payload, il risultato è sempre lo stesso. È possibile cambiare tra diversi exploit utilizzando PayloadLoaderPayload. Il payload utilizzato nella guida principale è CustomRPXLoader, che carica `SD:/wiiu/payload.rpx`, e il `payload.rpx` utilizzato nella guida è EnvironmentLoader, che consente di caricare diversi ambienti.

### Cos'è un ambiente?

Un ambiente è una raccolta di "moduli di configurazione", che saranno eseguiti in un certo ordine quando si avvia l'ambiente. Such environments are Aroma and Tiramisu. I moduli di configurazione sono piccoli pezzi di homebrew/codice che vengono eseguiti una volta per configurare un ambiente.

### Come eliminare la cartella Update per bloccare gli aggiornamenti su Wii U

Se vuoi eliminare la cartella Update per bloccare gli aggiornamenti, segui la scheda relativa nella [guida sul blocco degli aggiornamenti](block-updates).

### Quale dimensione di scheda SD è consigliata?

 - **Installare backup di giochi:** 32GB (si potrebbe usare una dimensione inferiore, ma certi titoli sono di 20GB)
 - **Eseguire mod di giochi:** 8GB (USB FAT32 potrebbero anche essere utilizzate per le mod)
 - **Solo eseguire app homebrew:** Qualsiasi dimensione.

**Marche consigliate:** SanDisk, Samsung o PNY

?> Nota: Evita le schede SD di classe 4 ed evita eBay!

### Posso installare homebrew su Wii U con una USB invece di una scheda SD?

No, devi avere una scheda SD per la prima configuazione. Una USB può successivamente essere usata per installare backup di giochi, inject per Virtual Console, ecc., ma non per memorizzare applicazioni homebrew che sono necessarie per configurare tutto.

### Quando si estraggono alcuni file ci sono determinati duplicati chiamati "info.json" & "manifest.install", cosa devo fare con questi?

Niente di speciale, puoi lasciarli lì, eliminarli o sostituirli con dei nuovi. Questi file non vengono utilizzati nel processo, quindi non cambierà nulla se sono presenti o meno.

### Cos'è un dispositivo USB formattato per Wii U?

È un dispositivo USB che è stato formattato da una console Wii U nel suo formato proprietario.  
Un dispositivo formattato per Wii U ***non può essere letto da nessun altro dispositivo oltre al Wii U che lo ha formattato originariamente.***  
Qualora volessi usarlo con un'altra console Wii U o con altri dispositivi, dovrai formattarlo nuovamente.
