# Archive - CBHC

!> **THIS METHOD IS NO LONGER SUPPORTED**  
**CURRENT METHOD IS AVAILABLE [HERE](../../introduction)**

## Fare un Backup della NAND {docsify-ignore}

In caso qualcosa vada storto nei processi successivi e la tua Wii U si bricka, ripristinare un backup fatto precedentemente può ripararla.

### Istruzioni {docsify-ignore}

?> Il peso della NAND della Wii U (dipendendo dal tuo modello) può pesare 8GB o 32GB. Come risultato di questo, per creare un backup completo, la tua SD deve avere più memoria della NAND della tua console. Se non hai una SD grossa abbastanza, puoi saltare la sezione `MLC` che è opzionale, essa include salvataggi e dati di giochi che non sono necessari per recuperare la maggior parte di brick.

?> Ripristinare il backup della nand sulla Wii U richiede ulteriori abilità di saldatura e esperienza hardware. <br>Tuttavia, fare un backup della NAND è **sempre** utile, quindi per favore, non saltatelo. <br>Il tuo Backup della NAND è unico per la tua console. Backup da altre console **NON** funzioneranno.

1. Naviga attraverso l'Homebrew Launcher e avvia l'app `Wii U NAND Dumper`.
1. Usa il D-Pad del GamePad per inserire la seguente configurazione:
    - Dump SLC: **yes**
    - Dump SLCCMPT: **yes**
    - Dump MLC: **opzionale**
    - Dump OTP: **yes**
    - Dump SEEPROM: **yes**
1. Premi A per iniziare il processo di dumping.
1. Quando il processo è completo, spegni la tua Wii U, prendi la SD fuori dalla Wii U ed inseriscila nel tuo PC.
1. Per assicurarti di non perdere file, copia i file: `slc.bin`, `slccmpt.bin`, `seeprom.bin`, `otp.bin` e se scegli di usare un backup completo, `ogni file chiamato mlc.bin.part` sul tuo computer.
1. Elimina i file dalla tua SD per liberare spazio.