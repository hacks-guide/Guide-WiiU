# Tiramisu {docsify-ignore-all}

## Egy NAND mentés készítése

Ha a későbbi folyamat során bármi rosszul sülne el, és a Wii U brickelődne, a korábban készített NAND biztonsági mentés visszaállításával megoldható a probléma.

### Lépések

> A Wii U NAND-ja (modelltől függően) 8 vagy 32 GB-os. Ennek következtében ahhoz, hogy teljes biztonsági mentést készíthess a konzol NAND-járól, az SD-kártyának nagyobbnak kell lennie, mint a NAND mérete. Ha nincs elég nagy SD-kártyád, akkor kihagyhatod az opcionális `MLC` részt, amely a mentési fájlokat és a játékadatokat tartalmazza, és a legtöbb brickelődés helyreállításához nincs rá szükség.

> A NAND biztonsági mentés visszaállítása a Wii U-n további hardvert és mikroforrasztási ismereteket igényel. <br>A NAND biztonsági mentés készítése azonban **mindig** hasznos, ezért ne hagyd ki. <br>A NAND biztonsági mentés egyedi a rendszeredre. Mentések más konzolokról **nem fognak működni**.**.

1. Navigál a `nanddumper`-hez a GamePad-del és nyomj A-t az indításához.
1. Használd a Wii U GamePad D-Pad-ját a következő konfiguráció megadásához:
    - Dump SLC: **yes**
    - Dump SLCCMPT: **yes**
    - Dump MLC: **optional**
    - Dump OTP: **yes**
    - Dump SEEPROM: **yes**
1. Nyomj A gombot a dumpolás elindításához.
1. Ha a folyamat befejeződött, kapcsold ki a Wii U-dat, vedd kiaz SD kártyád a Wii U-ból és dugd be a PC-dbe.
1. The files will appear on the root of the SD card.
1. To make sure you don't lose the files, copy the `slc.bin`, `slccmpt.bin`, `seeprom.bin`, `otp.bin` (and if you chose to go with a full backup, `every mlc.bin.part`) file to your computer.
1. Töröld a fájlokat az SD kártyádról helyfelszabadítás végett.

?> **If the PayloadLoader is already installed into the Health and Safety Information app and your console is already autobooting it, you do not need to continue following the guide.**
