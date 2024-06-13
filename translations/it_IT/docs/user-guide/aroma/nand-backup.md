# Aroma {docsify-ignore-all}

## Fare un Backup della NAND

In caso qualcosa vada storto nei processi successivi e la tua Wii U si bricka, ripristinare un backup fatto precedentemente può ripararla.

### Istruzioni

?> The Wii U NAND is (depending on your model) either 8GB or 32GB. Come risultato di questo, per creare un backup completo, la tua SD deve avere più memoria della NAND della tua console. If you do not have a large enough SD Card, you can skip the optional `MLC` section which includes save files and game data and is not needed to recover most types of bricks.

?> Restoring a NAND Backup on the Wii U requires additional hardware and micro soldering skills. <br>However, making a NAND Backup is **always** useful, so please do not skip it. <br>Il tuo Backup della NAND è unico per la tua console. Backups from other consoles **won't** work.

1. Navigate to `nanddumper` using the GamePad and press A to launch it.
2. Usa il D-Pad del GamePad per inserire la seguente configurazione:
   - Dump SLC: **yes**
   - Dump SLCCMPT: **yes**
   - Dump MLC: **optional**
   - Dump OTP: **yes**
   - Dump SEEPROM: **yes**
3. Premi A per iniziare il processo di dumping.
4. When the process is completed, power off your Wii U, take your SD Card out of the Wii U and plug it into your PC.
5. To make sure you don't lose the files, copy the `slc.bin`, `slccmpt.bin`, `seeprom.bin`, `otp.bin` and if you chose to go with a full backup, `every mlc.bin.part` file to your computer.
6. Elimina i file dalla tua SD per liberare spazio.
