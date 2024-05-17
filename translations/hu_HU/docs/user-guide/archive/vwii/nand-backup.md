# vWii Modding útmutató {docsify-ignore-all}

## NAND mentés

Abban az esetben, ha valami később elromlik a folyamat során és a vWii brickelődik, egy korábban készített NAND mentés helyreállítása megjavíthatja azt, vagy teljesen [újratelepítheted a vWii-t](http://wiiu.hacks.guide/#/recover-vwii-ioses-channels).

?> Ha most készítettél egy NAND mentést, ami tartalmazza a SLCCMPT-t és az OTP-t, akkor nyugodtan ugrod át ezt a részt.

1. Indítsd el a [Wii U NAND Dumper](browser-exploit)-t.
2. Használd a Wii U GamePad D-Pad-ját a következő konfiguráció megadásához:
   - Dump SLC: **optional**
   - Dump SLCCMPT: **yes**
   - Dump MLC: **optional**
   - Dump OTP: **yes**
   - Dump SEEPROM: **optional**
3. Nyomj A gombot a dumpolás elindításához.
4. Ha a folyamat befejeződött, kapcsold ki a Wii U-dat, vedd kiaz SD kártyád a Wii U-ból és dugd be a PC-dbe.
5. Hogy biztos lehess, hogy nem vezted el a fájlokat, másold az `slccmpt.bin` és `otp.bin` fájlokat (és ha teljes mentést választottál, akkor a `seeprom.bin`, az `slc.bin`, és `minden mlc.bin.part` fájlt is) a számítógépedre.
6. Töröld a fájlokat az SD kártyádról helyfelszabadítás végett.
7. Vedd ki az SD kártyád a számítógépedből és rakd be a Wii U konzolodba.
