# Wii U lemezek dumpolása
---
A lemezeid dumpolása lehetővé teszi, hogy a játék egy másolatát telepítsd a rendszered NAND-jára/az USB-eszközödre, így a játékkal a lemez nélkül is játszhatsz.

?> A játékok dumpolásához és telepítéséhez működő homebrew telepítésre van szükség, ezért mielőtt ezt követnéd, mindenképpen fejezd be a CFW telepítéséről szóló fő útmutatót.

!> Az ezzel az útmutatóval lementett fájlok megosztása **ILLEGÁLIS**.  
Ha ezt az útmutatót arra akarod használni, hogy megoszd a dumpolt játékaidat, ne tedd.

### A Wii U lemeze dumpolása és telepítése {docsify-ignore}

?> A játék telepítése a rendszermemóriára (NAND) nem ajánlott, mivel az a modelltől függően 8 GB vagy 32 GB méretű, így elég gyorsan elfogy a hely, ha több játékot szeretnél telepíteni.

?> Ha játékot telepít USB-eszközre, javasoljuk, hogy HDD-t használjon, ne pedig pendrive-ot, mivel azok nem optimalizáltak folyamatos írásra és olvasásra, ezért gyorsan meghibásodnak. Ha a HDD nem rendelkezik külső tápellátással, akkor egy Y-kábelre lesz szükséged ahhoz, hogy a Wii U két USB-helyéhez csatlakoztasd.

!> Ahhoz, hogy USB eszközre telepítsd a játékod, az USB eszközt a Wii U-nak kell formáznia. Ez törli a teljes tartalmát, és megakadályozza a használatát más rendszeren újraformázás nélkül. Ehhez csatlakoztasd az USB HDD-t a Wii U-hoz, kapcsold be a Wii U-t, a Wii U kérni fogja, hogy formázd meg a HDD-t. Erősítsd meg ezt Yes-szel.

#### Amire szükséged van {docsify-ignore}

- Az SD kártyádon elég hely kell legyen, hogy elférjen a járék amit dumpolni akarsz.
- Ha szeretnél USB-re telepíteni, egy USB HDD (+ egy Y-kábel, ha szükséges).
- A [WUP Installer GX2](https://wiiu.cdn.fortheusers.org/zips/wup_installer_gx2_wuhb.zip) legutolsó kiadása.
- A [wudd](https://wiiu.cdn.fortheusers.org/zips/wudd.zip) homebrew alkalmazás.

#### Lépések {docsify-ignore}

1. Másold a `wup_installer_gx2_wuhb.zip` fájl tartalmát az SD kártyád gyökerébe.
1. Másold a frissen letöltött wudd`.zip` fájl tartalmát az SD kártyád gyökerébe.
1. Vedd ki az SD kártyát a számítógépedből, és dugd be a Wii U konzolodba.
1. Kapcsold be a Wii U-d és bootolj az Aromába.
1. Indítsd el a Wii U Menu-t és indítsd el a wudd appot.
1. Válaszd a `Dump partition as .app` opciót
1. Válaszd a `Game` partíciót a dumpolás elkezdéséhez.
1. Ha végzett lépj ki a wuud-ból a Wii U Menu-be.
1. Helyezd be a Wii U-d SD kártyáját a PC-dbe.
1. Másold a `GMXXXXXXXXXXXXXXXX` mappát a `sd:/wudump/WUP-X-XXXX` mappából az `install` mappába az SD kártyádon.
    - Ha az `install` mappa nem létezik, hozd létre.
1. Vedd ki az SD kártyád és dugd be a Wii U-dba.
1. Nyisd meg a Wii U Menu-t majd utána a WUP Installer GX2 appot.
1. Válaszd ki a játékod (`GMXXXXXXXXXXXXXXXX`), nyomj `Install`-t és hagyd jóvá `Yes`-szel.
1. Válaszd az 'USB'-t az USB eszközre telepítéshez és a 'NAND'-ot a NAND-ra telepítéshez
1. Lépj ki a WUP Installer GX2-ből a Wii U Menu-be.
1. Látnod kell, hogy a játékod települt és játszható.
1. Vedd ki az SD kártyát a Wii U konzolodból és dugd be a számítógépedbe.
1. A hely felszabadításáért töröld az SD kártyádról a `GMXXXXXXXXXXXXXXXX` mappát az `install` könyvtárból.

### Játékok mozgatása USB-re

?> Ha nem szeretnéd a játékot a NAND-ra telepítve megtartani, használd a Wii U data management-jét a játék USB eszközre áthelyezésére.

!> Ahhoz, hogy USB eszközre mozgasd a játékod, az USB eszközt a Wii U-nak kell formáznia. Ez törli a teljes tartalmát, és megakadályozza a használatát más rendszeren újraformázás nélkül.

1. Csatlakoztasd az USB eszközödet a Wii U-hoz.
1. Kapcsold be a Wii U-d.
1. A Wii U-d szólni fog, hogy formázni kell az USB eszközt. Erősítsd meg Yes-szel.
1. Nyisd meg a Wii U System Settings-ét.
1. Navigálj a `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)` opcióhoz
1. Válaszd ki a játékot és mozgass minden adatot (beleértve a frissítéseket és DLC-t ha van telepítve) az USB eszközre.

### Frissítések USB-re mozgatása

?> Ha a lemezes játékod rendelkezik teleptett DLC-vel vagy frissítésekkel, akkor át kell vinned a fájlokat az USB eszközödre. Ezt meg tudod tenni a Wii U data management-jével.

1. Kapcsold be a Wii U-d
1. Nyisd meg a Wii U System Settings-ét.
1. Navigálj a `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)` opcióhoz.
1. Válaszd ki a játékod és mozgasd az update és DLC adatot az USB eszközre.
