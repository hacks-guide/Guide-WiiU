---
prev: true
next: true
---

# Egy NAND mentés készítése

Ha a későbbi folyamat során bármi rosszul sülne el, és a Wii U brickelődne, a korábban készített NAND biztonsági mentés visszaállításával megoldható a probléma.

## Lépések

::: tip

The Wii U MLC is (depending on your model) either 8GB or 32GB. Ennek következtében ahhoz, hogy teljes biztonsági mentést készíthess a konzol NAND-járól, az SD-kártyának nagyobbnak kell lennie, mint az MLC mérete. Ha nincs elég nagy SD-kártyád, akkor kihagyhatod az opcionális `MLC` részt, amely a mentési fájlokat és a játékadatokat tartalmazza, és a legtöbb brickelődés helyreállításához nincs rá szükség.

:::

::: tip

Restoring a NAND Backup on the Wii U requires ISFShax or additional hardware and microsoldering skills.

However, making a NAND Backup is **always** useful, so please do not skip it.

Your NAND Backup is unique to your system. A mentések más konzolról **nem fognak** működni a szükséges tudás nélkül.

:::

1. Navigál a `nanddumper`-hez a GamePad-del és nyomj A-t az indításához.
2. Use the Wii U GamePad's D-Pad to enter the following configuration:
   ![SLC: Yes, SLCCMPT: Yes, MLC: Yes or No, OTP: Yes, SEEPROM: Yes](/assets/img/guide/NAND.png)
   - Az MLC is **OPCIONÁLIS**, ha nem szeretnéd dumpolni, hagyd `No`-n. Ha szeretnéd dumpolni, biztosítsd, hogy az SD kártyád elég nagy legyen, majd állítsd `Yes`-re.
3. Nyomj A gombot a dumpolás elindításához.
4. Ha a folyamat befejeződött, kapcsold ki a Wii U-dat, vedd kiaz SD kártyád a Wii U-ból és dugd be a PC-dbe.
5. Hogy biztos lehess, hogy nem veszted el a fájlokat, másold az `slc.bin`, az`slccmpt.bin`, a `seeprom.bin` és az `otp.bin` fájlokat (és ha teljes mentést választottál, akkor `minden mlc.bin.part` fájlt is) valami biztos helyre (Documents, Google Drive, OneDrive, stb.) a számítógépeden.
   - Az SD kártya gyökerében fognak megjelenni.
6. Töröld az SD kártyádról a helyfelszabadítás végett ide másolt fájlokat.
