---
prev: true
next: true
---

# Egy NAND mentés készítése

Ha a későbbi folyamat során bármi rosszul sülne el, és a Wii U brickelődne, a korábban készített NAND biztonsági mentés visszaállításával megoldható a probléma.

## Lépések

::: tip

A Wii U MLC-je (modelltől függően) 8 vagy 32 GB-os. Ennek következtében ahhoz, hogy teljes biztonsági mentést készíthess a konzol NAND-járól, az SD-kártyának nagyobbnak kell lennie, mint az MLC mérete. Ha nincs elég nagy SD-kártyád, akkor kihagyhatod az opcionális `MLC` részt, amely a mentési fájlokat és a játékadatokat tartalmazza, és a legtöbb brickelődés helyreállításához nincs rá szükség.

:::

::: tip

A NAND biztonsági mentés visszaállítása a Wii U-n ISFShax-ot vagy további hardvert és mikroforrasztási ismereteket igényel.

A NAND biztonsági mentés készítése azonban **mindig** hasznos, ezért ne hagyd ki.

A NAND biztonsági mentés egyedi a rendszeredre. A mentések más konzolról **nem fognak** működni a szükséges tudás nélkül.

:::

1. Navigál a `nanddumper`-hez a GamePad-del és nyomj A-t az indításához.
2. Use the Wii U GamePad's D-Pad to enter the following configuration:
   ![SLC: Yes, SLCCMPT: yes, MLC: no, OTP: yes, SEEPROM: yes](/assets/img/guide/NAND.png)
   - Do **NOT** dump the MLC at this stage to save time and space on your SD card. The dump produced here will have severely limited usefulness; if you want to dump your MLC, it's recommended to use [Dumpling](https://dumplingapp.com) to do so.
3. Nyomj A gombot a dumpolás elindításához.
4. Ha a folyamat befejeződött, kapcsold ki a Wii U-dat, vedd kiaz SD kártyád a Wii U-ból és dugd be a PC-dbe.
5. Hogy biztos lehess, hogy nem veszted el a fájlokat, másold az `slc.bin`, az`slccmpt.bin`, a `seeprom.bin` és az `otp.bin` fájlokat (és ha teljes mentést választottál, akkor `minden mlc.bin.part` fájlt is) valami biztos helyre (Documents, Google Drive, OneDrive, stb.) a számítógépeden.
   - Az SD kártya gyökerében fognak megjelenni.
6. Töröld az SD kártyádról a helyfelszabadítás végett ide másolt fájlokat.
