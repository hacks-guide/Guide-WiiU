# vWii Modding Guide {docsify-ignore-all}

## Backup della NAND

Nel caso qualcosa andasse storto durante il processo e la tua vWii si bricka, ripristinare un backup della NAND fatto in precedenza farà ritornare tutto come prima.

?> If you have recently made a NAND backup that includes SLCCMPT and OTP, feel free to skip this step.

1. Launch the [Wii U NAND Dumper](browser-exploit).
2. Usa il D-Pad del GamePad per inserire la seguente configurazione:
   - Dump SLC: **optional**
   - Dump SLCCMPT: **yes**
   - Dump MLC: **optional**
   - Dump OTP: **yes**
   - Dump SEEPROM: **optional**
3. Premi A per iniziare il processo di dumping.
4. Quando il processo è completo, spegni la tua Wii U, prendi la SD fuori dalla Wii U ed inseriscila nel tuo PC.
5. To make sure you don't lose the files, copy the `slccmpt.bin` and `otp.bin` files (and if you chose to go with a full backup, `seeprom.bin`, `slc.bin`, and `every mlc.bin.part` file) to your computer.
6. Elimina i file dalla tua SD per liberare spazio.
7. Togli la scheda SD dal computer e inseriscila nella console Wii U.
