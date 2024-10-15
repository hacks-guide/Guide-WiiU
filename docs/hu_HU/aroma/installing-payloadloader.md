---
prev: true
next: true
---

# A PayloadLoader telepítése

Most, hogy megvan a NAND biztonsági mentésed arra az esetre, ha később bármi rosszul sülne el, telepítheted a PayloadLoader-t a rendszeredre.

A PayloadLoader telepítése lehetővé teszi az Aroma elérését egyszerűen az Health and Safety Information app futtatásával.

::: danger

A gyári visszaállítás **nem** távolítja el a beillesztett PayloadLoader-t. PayloadLoader eltávolításához kövesd [a PayloadLoader eltávolítását](../uninstall-payloadloader).

:::

## Lépések

::: tip

Ha már be vagy bootolva az Aromába, akkor ugorhatsz az 5. lépésre.

:::

1. Vedd ki az SD kártyát a számítógépedből, és dugd be a Wii U konzolodba.
2. Végezd el a webböngésző exploitot a [korábban ismertetett módon](browser-exploit), de ezúttal az X gombot nyomva kell tartanod, hogy megnyíljon az Environment Loader menü.
3. Nyomj A-t az `aroma` környezet indításához.
   ![](/assets/img/guide/EL.png)
   - Egy figyelmeztető üzentet fogsz kapni az update mappa létezéséről. **Ez normális.** Nyomj X-et a frissítések blokkolásához.
     ![](/assets/img/guide/Warn.png)
4. Nyomj A-t a Wii U Menu indításához.
   ![](/assets/img/guide/ABM.png)
5. A Wii U Menu-ben keresd meg az újonnan megjelent `PayloadLoader Installer` címet (egy rakéta mi egy dobozból jön ki), és indítsd el.
   ![](/assets/img/guide/PLLI.png)
6. Nyomd meg az A gombot, hogy ellenőrizd, hogy telepíthető-e a PayloadLoader.
   - Most már azt kell jeleznie, hogy a PayloadLoader telepíthető a Health and Safety Information apphoz.
7. Nyomj A gombot az `Install / Update` kiválasztásához.
8. Rá fog kérdezni, hogy biztosan telepíteni akarod-e a PayloadLoader-t. Használd a D-Pad-et az `Install` kiválasztásához és nyomj A gombot.
9. Ha a telepítés befejeződött, nyomj A gombot, hogy teljesen leállítsd a konzolt.
