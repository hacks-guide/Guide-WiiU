# Archív - CBHC

!> **EZ A METÓDUS MÁR NEM TÁMOGATOTT**  
**AZ AKTUÁLIS METÓDUS ELÉRHETŐ [ITT](../../introduction)**

## A CFW indítása {docsify-ignore}

Most, hogy megvan a NAND biztonsági mentésed arra az esetre, ha később bármi rosszul sülne el, futtathatod a CFW-t a rendszereden.

Más rendszerekkel, mint DSi, Wii, vagy 3DS, a Wii U CFW átmeneti. Ez azt jelenti, hogy amint a rendszered rebootol, el fogod veszteni a CFW-d és újra követned kell ezeket a lépéseket. Ez átugorható a CBHC Haxchi CFW-re telepítéssel.

!> A CBHC nem megfelelő telepítése brickelheti a Wii U-dat. Legyél biztos abban, hogy követed a következő szabályokat, amikor CBHC-t telepítesz: <br>- A DS játéknak az eShopból legálisan telepített játéknak kell lennnie! <br>- Ne formázd a rendszert, amíg a CBHC telepített! <br>- Ne töröld a fiókot, amelyik megvásárolta a Virtual Console játékot! <br>- Ne telepítsd újra ugyanazt a játékot a WUP Installer-rel vagy a eShop-ból! <br>- Ne telepíts Haxchi-t a CBHC-re! <br>- Ne távolítsd el a DS Virtual Console játékot, mielőtt [szabályosan eltávolítanád először a CBHC-t](../uninstall-cbhc)! <br>- Ne mozgasd a DS Virtual Console játékot egy USB meghajtóra!

!> A fenti szabályok valamelyikének megszegése brickeléshez vezet.

> Ha aggódsz azon, hogy a CBHC használata közben megsérted ezeket a szabályokat, gondolkozz el a Parental Controls beállításán a felhasználódhoz! A `Data Management` blokkolása és a `Game Rating` beállítása a legnagyobb lehetséges értékelésnek megakadályozhatja a gyakori hibákat, amiket a felhasználók csinálhatnak a CBHC használata esetén. Nézd meg [itt](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1081/~/how-to-change-parental-controls) további ifnromációkért, hogy hogyan módosthatod a Parental Controls beállításokat.

### Lépések {docsify-ignore}

1. Vedd ki az SD kártyát a számítógépedből, és dugd be a Wii U konzolodba.
1. Ha még nem tetted meg, akkor töltsd le a választásodnak megfelelő DS Virtual Console játékot az eShop-ból.
1. Indítsd el a Homebrew Launcher-t a rendszereden, úgy [ahogy korábban leírásra került](browser-exploit).
1. Navigálj a Homebrew Launcher-rel és nyisd meg a Haxchi app-ot.
1. A D-Pad segítségével navigáld a kurzort a játékhoz, amihez a Haxchi-t telepítenéd, majd nyomj A gombot a telepítéshez.
1. Ha a telepítés befejeződött, a konzolod elindítja a Wii U Menu-t. Látni fogod, hogy a játékodat felülírta a Haxchi ikon.
1. Futtasd a módosított DS játékot. Ez újraindítja a konzolt és engedélyezi a CFW-t.
1. Futtasd a módosított DS játékot újra és tartsd nyomva az A gombot az indítása után. Ez futtatni fogja a Homebrew Launcher-t.
1. Navigálj a Homebrew Launcher-rel és indítsd el a CBHC app-ot.
1. A D-Pad segítségével navigáld a kurzort a játékhoz, amihez a Haxchi-t telepítetted, majd nyomj A gombot a CBHC telepítéséhez.
1. Ha a telepítés befejeződött, a konzolod elindítja a Wii U Menu-t.
1. Indítsd újra a konzolod. Ha a CBHC jól települt, akkor egy új boot menüt kell látnod. (A CBHC nem kompatibilis a Gyorsindítással. Ha használod a Quick Start Menu-t, kapcsold ki.)
1. Használd a D-Pad-et az `Autoboot: Disabled`-hez navigáláshoz és nyomj A gombot, amíg azt nem mutatja, hogy `Autoboot: System Menu`.
1. A D-Pad segítségével navigálj a `Boot System Menu` opcióhoz és nyomd meg az A gombot. Ez újraindítja a Wii U Menu-t aktivált CFW-vel.
1. A konzolod most már minden újra-bootoláskor automatikusan a CFW-be bootol.
1. Most már újra csatlakoztathatsz bármilyen USB eszközt, amit az útmutató elkezdése előtt is csatlakoztattál.