# Aroma {docsify-ignore-all}

## Egy NAND mentés készítése

Ha a későbbi folyamat során bármi rosszul sülne el, és a Wii U brickelődne, a korábban készített NAND biztonsági mentés visszaállításával megoldható a probléma.

### Lépések

?> The Wii U MLC is (depending on your model) either 8GB or 32GB. As a result of this, to create a full backup of your console's NAND, your SD Card has to be larger than the size of your MLC. If you do not have a large enough SD Card, you can skip the optional `MLC` section which includes save files and game data and is not needed to recover any type of brick.

?> Restoring a NAND Backup on the Wii U requires ISFShax or additional hardware and microsoldering skills. <br>A NAND biztonsági mentés készítése azonban **mindig** hasznos, ezért ne hagyd ki. <br>A NAND biztonsági mentés egyedi a rendszeredre. Backups from other consoles **won't** work without the required knowledge.

1. Navigál a `nanddumper`-hez a GamePad-del és nyomj A-t az indításához.
2. Use the Wii U GamePad's D-Pad to enter the following configuration:
   ![SLC: Yes, SLCCMPT: Yes, MLC: Yes or No, OTP: Yes, SEEPROM: Yes](../docs/assets/img/guide/NAND.png)
   - MLC is **OPTIONAL**, if you do not want to dump it, leave it on `No`. If you do want to dump it, make sure you have a SD Card big enough for it and put it on `Yes`.
3. Nyomj A gombot a dumpolás elindításához.
4. Ha a folyamat befejeződött, kapcsold ki a Wii U-dat, vedd kiaz SD kártyád a Wii U-ból és dugd be a PC-dbe.
5. Hogy biztos lehess, hogy nem veszted el a fájlokat, másold az `slc.bin`, az`slccmpt.bin`, a `seeprom.bin` és az `otp.bin` fájlokat (és ha teljes mentést választottál, akkor `minden mlc.bin.part` fájlt is) valami biztos helyre (Documents, Google Drive, OneDrive, stb.) a számítógépeden.
   - Az SD kártya gyökerében fognak megjelenni.
6. Töröld az SD kártyádról a helyfelszabadítás végett ide másolt fájlokat.
