---
prev: true
next: true
---

# Az Aroma automatikus bootolása

Jelenleg, mindig amikor indítani szeretnéd az Aroma-t, el kell indítanod a Healt and Safety Information appot. Ha szeretnéd, hogy az Aroma minden bootoláskor betöltődjön, akkor autobootolhatod a Healt and Safety Information appot.

Ha nem szeretnéd autobootolni az Aromát, akkor átugorhatod ezt a lépést és folytathatot a PayloadLoader telepítése résszel alább.

## Lépések

1. Indítsd el a konzolt hogy bebootolj a Wii U Menübe, és indítsd el a Health and Safety Information appot.
2. Nyomj A-t az `aroma` környezet indításához.
3. Nyomj A-t a Wii U Menu indításához.
4. Ha már a Wii U Menu-ben vagy indítsd el a PayloadLoader Installer-t.
5. Nyomj A-t a `Check` opció kiválasztásához.
6. Válaszd a `Boot options`-t.
7. Megkérdezi, hogy szeretnéd-e megváltoztatni a boot címet. Nyomj A-t a `Switch to PayloadLoader` kiválasztásához.
8. Ha a folyamat befejeződött, nyomj A gombot a konzol leállításához.
9. A PayloadLoader most már minden bootláskor el lesz indítva.

## A PayloadLoader, azEnvironment Loader és az Aroma telepítése

Most azt fogjuk elérni, hogy az Aroma környezet automatikusan elinduljon, amikor a konzol betölti az Health and Safety Information alkalmazást, és kiválassza a Wii U Menu-t alapértelmezett indítási opciónak.

1. Az EnvironmentLoader indítása.
    - Ha autobootolod a PayloadLoader-t, akkor csak kapcsold be a Wii U-d.
    - Ha átlépted az autoboot lépéseket, akkor indítsd el a Health and Safety Information appot.
2. Nyomj Y-t az `aroma`-n, hogy beállítsd ezt az alapértelmezett környezetednek, majd nyomj A gombot az Aroma indításához.
    ![](/assets/img/guide/EL_Highlight.png)
    - Az Environment Loader megnyitásához a jövőben nyomva kell tartanod az X gombot amíg a Wii U bootol vagy tölti a Health and Safety Information appot.
3. Az Aroma Boot Selector-ban a `Wii U Menu`-nek kell beállítva lennie, nyomj Y-t, hogy beállítsd alapértelmezett autoboot opciónak, majd nyomj A gombot, hogy elindítsd a Wii U Menu-t.
    ![](/assets/img/guide/ABM_Highlight.png)
4. Az Aroma most már elindul minden alkalommal, amikor bebootolsz a konzolba (vagy betöltöd a Health and Safety alkalmazást) és rögtön utána a Wii U Menu-be.
    - Az Aroma Boot Selector megnyitásához a jövőben nyomva kell tartanod a START (+) gombot amíg a Wii U bootol vagy tölti a Health and Safety Information appot.
    - A D-Pad-del navigálva állj rá a címre amit autobootolni szeretnél és nyomj Y gombot, hogy beállítsd az autoboot címnek.
    - Nyomj A gombot a kiválasztott cím indításához.
