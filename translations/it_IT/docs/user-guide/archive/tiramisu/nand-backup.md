# Tiramisu {docsify-ignore-all}

## Fare un Backup della NAND

In caso qualcosa vada storto nei processi successivi e la tua Wii U si bricka, ripristinare un backup fatto precedentemente può ripararla.

### Istruzioni

?> Il peso della NAND della Wii U (dipendendo dal tuo modello) può pesare 8GB o 32GB. Come risultato di questo, per creare un backup completo, la tua SD deve avere più memoria della NAND della tua console. Se non hai una SD grossa abbastanza, puoi saltare la sezione `MLC` che è opzionale, essa include salvataggi e dati di giochi che non sono necessari per recuperare la maggior parte di brick.

?> Ripristinare il backup della nand sulla Wii U richiede ulteriori abilità di saldatura e esperienza hardware. <br>Tuttavia, fare un backup della NAND è **sempre** utile, quindi per favore, non saltatelo. <br>Il tuo Backup della NAND è unico per la tua console. Backup da altre console **NON** funzioneranno.

1. Naviga a `nanddumper` usando il Gamepad e premi A per lanciarlo.
1. Usa il D-Pad del GamePad per inserire la seguente configurazione:
    - Dump SLC: **yes**
    - Dump SLCCMPT: **yes**
    - Dump MLC: **opzionale**
    - Dump OTP: **yes**
    - Dump SEEPROM: **yes**
1. Premi A per iniziare il processo di dumping.
1. When the process is completed, power off your Wii U, take your SD Card out of the Wii U and plug it into your PC.
1. The files will appear on the root of the SD card.
1. To make sure you don't lose the files, copy the `slc.bin`, `slccmpt.bin`, `seeprom.bin`, `otp.bin` (and if you chose to go with a full backup, `every mlc.bin.part`) file to your computer.
1. Elimina i file dalla tua SD per liberare spazio.

?> **Se il PayloadLoader è già installato nell'app Informazioni per la salute e la sicurezza e la tua console lo avvia automaticamente, non è necessario continuare a seguire la guida.**
