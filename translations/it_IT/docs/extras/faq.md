# Domande frequenti {docsify-ignore-all}
---

### La modifica ha dei rischi?

Attualmente, modificare il Wii U non ti espone al rischio di venire bannato da Nintendo a meno che non usi trucchi su giochi online, o se commetti frode sull'eShop. Dovresti, tuttavia, fare sempre attenzione quando avvii homebrew scaricati, specialmente se non ti fidi della fonte, dato che potenzialmente gli homebrew possono danneggiare il tuo sistema!

### Cos'è un exploit?

Un exploit è un punto d'entrata che permette di eseguire ulteriore homebrew. Nella guida principale userai exploit come l'exploit browser (http://wiiuexploit.xyz) e PayloadLoader (exploit & Informazioni per la salute e sicurezza). Tutti gli exploit attuali caricano `SD:/wiiu/payload.elf`, che controlla il caricamento di ulteriori homebrew.

### Cos'è un payload?

Un payload, il cui file è solitamente chiamato `payload.elf`, esiste per portare exploit diversi a caricare lo stesso passo successivo, permettendo un aggiornamento più facile. Non importa quale exploit carica il payload, il risultato è sempre lo stesso. È possibile cambiare tra diversi exploit utilizzando PayloadLoaderPayload. Il payload utilizzato nella guida principale è CustomRPXLoader, che carica `SD:/wiiu/payload.rpx`, e il `payload.rpx` utilizzato nella guida è EnvironmentLoader, che consente di caricare diversi ambienti.

### Cos'è un ambiente?

Un ambiente è una raccolta di "moduli di configurazione", che saranno eseguiti in un certo ordine quando si avvia l'ambiente. Un ambiente è per esempio Tiramisu. I moduli di configurazione sono piccoli pezzi di homebrew/codice che vengono eseguiti una volta per configurare un ambiente.

### How to Delete Update Folder to Block Updates on Wii U

If you want to delete the update folder to block updates, see its tab in the [Blocking Updates guide](block-updates).

### What SD Card size is recommended?

 - **Installare backup di giochi:** 32GB (si potrebbe usare una dimensione inferiore, ma certi titoli sono di 20GB)
 - **Eseguire mod di giochi:** 8GB (USB FAT32 potrebbero anche essere utilizzate per le mod)
 - **Solo eseguire app homebrew:** Qualsiasi dimensione.

**Recommended brands:** SanDisk, Samsung or PNY

?> Note: Avoid class 4 SD Cards, and avoid eBay!

### Can I install homebrew on Wii U with a USB instead of SD Card?

No, you must have an SD Card for a first time setup. A USB can then be used to install game backups, Virtual Console injects, etc, but not to store homebrew applications which are required to set everything up.

### Quando si estraggono alcuni file ci sono determinati duplicati chiamati "info.json" & "manifest.install", cosa devo fare con questi?

Niente di speciale, puoi lasciarli lì, eliminarli o sostituirli con dei nuovi. Those files are not used in the process, and therefore, won't have any impact by being or not being there.

### What is a Wii U formatted USB drive?

It's a USB drive that has been formatted by a Wii U console to its proprietary format.  
A Wii U formatted USB drive ***cannot be read by any other devices than the Wii U that originally formatted it.***  
If you ever want to use it with another Wii U console or any other devices, you will have to reformat it.
