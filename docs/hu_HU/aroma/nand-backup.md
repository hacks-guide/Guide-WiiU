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
2. Használd a Wii U GamePad D-Pad-ját a következő konfiguráció beviteléhez:
   ![SLC: Yes, SLCCMPT: Yes, MLC: No, OTP: Yes, SEEPROM: Yes](/assets/img/guide/NAND.png)
   - **NE** dumpold az MLC-t most, hogy időt és helyet takaríts meg az SD kártyádon. A most készült dumpnak korlátozott a hasznossága; ha szeretnéd dumpolni az MLC-t ajánlott, hogy a [Dumpling](https://dumplingapp.com)-ot használd erre.
3. Nyomj A gombot a dumpolás elindításához.
4. Ha a folyamat befejeződött, kapcsold ki a Wii U-dat, vedd kiaz SD kártyád a Wii U-ból és dugd be a PC-dbe.
5. Hogy biztos lehess, hogy nem veszted el a fájlokat, másold az `slc.bin`, az`slccmpt.bin`, a `seeprom.bin` és az `otp.bin` fájlokat (és ha teljes mentést választottál, akkor `minden mlc.bin.part` fájlt is) valami biztos helyre (Documents, Google Drive, OneDrive, stb.) a számítógépeden.
   - Az SD kártya gyökerében fognak megjelenni.
6. Töröld az SD kártyádról a helyfelszabadítás végett ide másolt fájlokat.
