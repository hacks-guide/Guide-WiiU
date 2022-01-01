# Domande frequenti {docsify-ignore-all}
---

### La modifica ha dei rischi?

Attualmente, modificare il Wii U non ti espone al rischio di venire bannato da Nintendo a meno che non usi trucchi su giochi online, o se commetti frode sull'eShop. Dovresti, tuttavia, fare sempre attenzione quando avvii homebrew scaricati, specialmente se non ti fidi della fonte, dato che potenzialmente gli homebrew possono danneggiare il tuo sistema!

### What are exploits?

Exploits are entry points which allow further homebrew to be run. In the main guide, you will use exploits such as the browser exploit (http://wiiuexploit.xyz) and PayloadLoader (Health & Safety exploit). All current exploits load `SD:/wiiu/payload.elf` which takes over further loading of homebrew.

### What are payloads?

Payloads, which are normally found with the filename `payload.elf`, exist to make it easier to have different exploits load the same next stage, which allows easier updateability. It doesn't matter what exploit loads the payload, the result is always the same. Multiple payloads can be switched between using the PayloadLoaderPayload. The payload used in the main guide is CustomRPXLoader which loads `SD:/wiiu/payload.rpx` and the `payload.rpx` used in the guide is EnvironmentLoader, which allows you to load different environments.

### What are environments?

An environment is a collection of "setup modules", which will be run in a certain order when launching the environment. One such environment is Tiramisu. Setup modules are small pieces of homebrew/code that are executed once to set up an environment.

### Can I install games from my USB instead of SD?

Sì. È, tuttavia, un po' più complicato dell'installazione dalla scheda SD. Istruzioni dettagliate sono nella tabella `Installazione da USB` nella [guida sul dumping dei dischi Wii U](dump-games).

### How to Delete Update Folder to Block Updates on Wii U

Se vuoi eliminare la cartella Update per bloccare gli aggiornamenti, guarda la tabella relativa nella [guida sul blocco degli aggiornamenti](block-updates).

### What SD Card size is recommended?

 - **Installing game backups:** 32GB (Smaller size may be used, but certain titles are 20GB in size)
 - **Running game mods:** 8GB (FAT32 USB drive may be used as well for mods)
 - **Only running homebrew apps:** Any size.

**Marche consigliate:** SanDisk, Samsung o PNY

?> Nota: evita schede SD di classe 4, ed evita eBay!

### Can I install homebrew on Wii U with a USB instead of SD Card?

No, devi avere una scheda SD per la prima configurazione. Un USB può poi essere utilizzato per installare backup di giochi, iniettare Virtual Console e altro, ma non per memorizzare applicazioni homebrew che sono necessarie per configurare tutto.

### Quando si estraggono alcuni file ci sono determinati duplicati chiamati "info.json" & "manifest.install", cosa devo fare con questi?

Niente di speciale, puoi lasciarli lì, eliminarli o sostituirli con dei nuovi. Questi file non vengono utilizzati nel processo, perciò non avrà alcun impatto se sono presenti o meno.

### What is a Wii U formatted USB drive?

È un dispositivo USB che è stato formattato da una console Wii U nel suo formato proprietario.  
Un dispositivo USB formattato in Wii U ***non può essere letto da nessun altro dispositivo oltre al Wii U che lo ha formattato originariamente.***  
Se vorrai mai usarlo con un'altra console Wii U o con altri dispositivi, dovrai formattarlo nuovamente.
