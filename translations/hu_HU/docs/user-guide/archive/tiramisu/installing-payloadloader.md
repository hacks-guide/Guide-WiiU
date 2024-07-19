# Tiramisu {docsify-ignore-all}

## A PayloadLoader telepítése

Most, hogy megvan a NAND biztonsági mentésed arra az esetre, ha később bármi rosszul sülne el, telepítheted a PayloadLoader-t a rendszeredre.

A PayloadLoader telepítése lehetővé teszi Tiramisu elérését egyszerűen az Health and Safety Information app futtatásával.

> A gyári visszaállítás **nem** távolítja el a beillesztett PayloadLoader-t. Kövesd a [PayloadLoader eltávolítását](../../uninstall-payloadloader) a PayloadLoader törléséhez.

### Lépések

?> Ha már bebootoltál Tiramisu-ba, indítsd újra a konzolt, mielőtt újra futtatod az exploitot.

1. Vedd ki az SD kártyát a számítógépedből, és dugd be a Wii U konzolodba.
1. Végezd el a webböngésző exploitot a [korábban ismertetett módon](browser-exploit), de ezúttal az X gombot nyomva kell tartanod, hogy megnyíljon az Environment Loader menü.
1. Navigálj a D-Pad-del az `installer` környezetre és nyomj A gombot, az elindításához.
1. Nyomd meg az A gombot, hogy ellenőrizd, hogy telepíthető-e a PayloadLoader.
    - Most már azt kell jeleznie, hogy a PayloadLoader telepíthető a Health and Safety Information apphoz.
1. Nyomj A gombot az `Install / Update` kiválasztásához.
1. Rá fog kérdezni, hogy biztosan telepíteni akarod-e a PayloadLoader-t. Használd a D-Pad-et az `Install` kiválasztásához és nyomj A gombot.
1. Ha a telepítés befejeződött, nyomj A gombot, hogy teljesen leállítsd a konzolt.

!> Ha nem szeretnéd autobootolni a Tiramisu-t a konzolodon, akkor kihagyhatod `A Tiramisu autobootolása` részt, és mehetsz tovább a rögtön a [Telepítés véglegesítésére](finalizing-setup).