# Válaszd ki milyen CFW-t szeretnél
---
!> **AZ EZEN OLDALON LEÍRT METÓDUSOK MÁR NEM TÁMOGATOTTAK**  
**AZ AKTUÁLIS METÓDUS ELÉRHETŐ [ITT](../introduction)**

?> Mielőtt elkezdenéd, frissítsd a Wii U konzolodat a legutolsó firmware-re (5.5.6 az észak-amerikai konzoloknál, 5.5.5 minden más régióban) ha még nem tetted meg.

Két fő egyedi firmware létezik: a Haxchi/Coldboot Haxchi (többnyire "CBHC"-nek rövidítve) és a Mocha.

A Haxchi/CBHC egy fizetős DS Virtual Console játékba injektált. A Haxchi-t kézzel kell indítani a Wii U Menu az egyedi firmware-re bootoláshoz, míg a CBHC automatikusan egyedi firmware-re bootol rendszerinduláskor. A Mocha browser exploit-on vagy az Indexiine módszeren alapul, ami az egyetlen ingyenes egyedi firmware-ré teszi.

Hogy melyik egyedi firmware mellett döntesz, kizárólag **a te ** preferenciád. Nincs jó vagy rossz egyedi fimrware, így ajánlott, hogy válaszd ki magadnak azt ami leginkább megfelel számodra!

## Haxchi

- Szüksége van egy legálisan beszerzett fizetős DS Virtual Console játékra az eShop-ból.
- Használható arra, hogy CFW-t indíts közvetlenül a Wii U Menu-ből.
- Minden reboot után újra kell futtatni a Wii U Menu-ből, hogy engedélyezd az egyedi firmware-t.
- A funkcionalitása kibővíthető, ha egy Coldboot Haxchi (CBHC)-t telepítünk a Haxchi telepítésre.

### [**Folytatás a Haxchi-val**](haxchi/ds-vc-choice) {docsify-ignore}

## CBHC

!> CBHC hibás telepítése brickelheti a Wii U-dat! Legyél biztos abban, hogy követed a következő szabályokat a CBHC telepítésekor: <br>- Egy DS játéknak, amit az eShop-ból legálisan telepítve kell lennie! <br>- Ne formázd a rendszert, amíg a CBHC telepített! <br>- Ne töröld a fiókot, amelyik megvásárolta a Virtual Console játékot! <br>- Ne telepítsd újra ugyanazt a játékot a WUP Installer-rel vagy a eShop-ból! <br>- Ne telepíts Haxchi-t a CBHC-re! (nem fog brickelődni, de egy boot-loopot okoz! Tartsd nyomva az A-t bootoláskor, hogy elérd a Homebrew Launcher-t és távoítsd el a CBHC-t.) <br>- Ne távolítsd el a DS Virtual Console játékot, mielőtt [szabályosan eltávolítanád először a CBHC-t](../uninstall-cbhc)! <br>- Ne mozgasd a DS Virtual Console játékot egy USB meghajtóra!

!> A fenti szabályok valamelyikének megszegése brickeléshez **vezethet**!

> Ha aggódsz azon, hogy a CBHC használata közben megsérted ezeket a szabályokat, gondolkozz el a Parental Controls beállításán a felhasználódhoz! A `Data Management` blokkolása és a `Game Rating` beállítása a legnagyobb lehetséges értékelésnek megakadályozhatja a gyakori hibákat, amiket a felhasználók csinálhatnak a CBHC használata esetén. Nézd meg [itt](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1081/~/how-to-change-parental-controls) további ifnromációkért, hogy hogyan módosthatod a Parental Controls beállításokat.

- Szükséged van egy legálisan beszerzett fizetős DS Virtual Console játékra az eShop-ból.
- Automatikusan indítja az egyedi firmware-t minden bootoláskor.

### [**Folytatás a CBHC-vel**](cbhc/ds-vc-choice) {docsify-ignore}

## Mocha

- Nem szükséges hozzá semmilyen játék, így ingyenes.
- Minden reboot után újra kell futtatni a browser exploiton keresztül, hogy engedélyezd az egyedi firmware-t.
- Nem kompatibilis a Homebrew Launcher Channel-lel.
- Elképzelhető, hogy szüksége van internet kapcsolatra függően az általd választott belépési ponttól.

### [**Folytatás a Mocha-val**](mocha/entrypoint-choice) {docsify-ignore}
