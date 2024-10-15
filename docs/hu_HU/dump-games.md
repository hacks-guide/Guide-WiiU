# Wii U lemezek dumpolása

A lemezeid dumpolása lehetővé teszi, hogy a játék egy másolatát telepítsd a rendszered NAND-jára/az USB-eszközödre, így a játékkal a lemez nélkül is játszhatsz.

::: tip

A játékok dumpolásához és telepítéséhez működő homebrew telepítésre van szükség, ezért mielőtt ezt követnéd, mindenképpen fejezd be a CFW telepítéséről szóló fő útmutatót.

:::

::: danger

**ILLEGÁLIS** az útmutató alapján készített dumpok megosztása.

Ha az a célod ezzel az útmutatóval, hogy megossz dumpolt játékokat, ne tedd.

:::

## A Wii U lemezek dumpolása és telepítése

::: tip

A játék telepítése a rendszermemóriára (NAND) nem ajánlott, mivel az a modelltől függően 8 GB vagy 32 GB méretű, így elég gyorsan elfogy a hely, ha több játékot szeretnél telepíteni.

:::

::: tip

Ha játékot telepítesz USB-eszközre, javasoljuk, hogy HDD-t használj, ne pedig pendrive-ot, mivel azok nem optimalizáltak folyamatos írásra és olvasásra, ezért gyorsan meghibásodnak. Ha a HDD nem rendelkezik külső tápellátással, akkor egy Y-kábelre lesz szükséged ahhoz, hogy a Wii U két USB-helyéhez csatlakoztasd.

:::

::: danger

Ahhoz, hogy USB eszközre telepítsd a játékod, az USB eszközt a Wii U-nak kell formáznia. Ez törli a teljes tartalmát, és megakadályozza a használatát más rendszeren újraformázás nélkül. Ez TARTALMAZZA a vWii-t is, ami azt jelenti, hogy nem fogsz tudni futtatni Wii és GameCube lemezképeket az USB-ről USB loader-ek segítségével. A formatáláshoz csatlakoztasd az USB HDD-t a Wii U-hoz, kapcsold be a Wii U-t, a Wii U kérni fogja, hogy formázd meg a HDD-t. Erősítsd meg ezt Yes-szel.

:::

### Mire van szükséged

- Az SD kártyádon elég hely kell legyen, hogy elférjen a járék amit dumpolni akarsz.
- Ha szeretnél USB-re telepíteni, egy USB HDD (+ egy Y-kábel, ha szükséges).
- A [WUP Installer GX2](https://wiiu.cdn.fortheusers.org/zips/wup_installer_gx2_wuhb.zip) legutolsó kiadására.
- A [wudd](https://wiiu.cdn.fortheusers.org/zips/wudd.zip) homebrew alkalmazásra.

### Lépések

1. Másold a `wup_installer_gx2_wuhb.zip` fájl tartalmát az SD kártyád gyökerébe.
2. Másold a frissen letöltött wudd `.zip` fájl tartalmát az SD kártyád gyökerébe.
3. Vedd ki az SD kártyát a számítógépedből, és dugd be a Wii U konzolodba.
4. Kapcsold be a Wii U-d és bootolj az Aromába.
5. Indítsd el a Wii U Menu-t és indítsd el a wudd appot.
6. Válaszd a `Dump partition as .app` opciót
7. Válaszd a `Game` partíciót a dumpolás elkezdéséhez.
8. Ha végzett lépj ki a wuud-ból a Wii U Menu-be.
9. Helyezd be a Wii U-d SD kártyáját a PC-dbe.
10. Másold a `GMXXXXXXXXXXXXXXXX` mappát az `sd:/wudump/WUP-X-XXXX` mappából az `install` mappába az SD kártyád gyökerében.
    - A WUDD nem hozza létre az install mappát alapértelmezetten. Neked kell létrehoznod.
11. Vedd ki az SD kártyád és dugd be a Wii U-dba.
12. Nyisd meg a Wii U Menu-t majd utána a WUP Installer GX2 appot.
13. Válaszd ki a játékod (`GMXXXXXXXXXXXXXXXX`), nyomj `Install`-t és hagyd jóvá `Yes`-szel.
14. Válaszd az 'USB'-t az USB eszközre telepítéshez és a 'NAND'-ot a NAND-ra telepítéshez
15. Lépj ki a WUP Installer GX2-ből a Wii U Menu-be.
16. Látnod kell, hogy a játékod települt és játszható.
17. Vedd ki az SD kártyát a Wii U konzolodból és dugd be a számítógépedbe.
18. A hely felszabadításáért töröld az SD kártyádról a `GMXXXXXXXXXXXXXXXX` mappát az `install` könyvtárból.

## Játékok mozgatása USB-re

::: tip

Ha nem szeretnéd a játékot a NAND-ra telepítve megtartani, használd a Wii U data management-jét a játék USB eszközre áthelyezésére.

:::

::: danger

Ahhoz, hogy USB eszközre mozgasd a játékod, az USB eszközt a Wii U-nak kell formáznia. Ez törli a teljes tartalmát, és megakadályozza a használatát más rendszeren újraformázás nélkül.

:::

1. Csatlakoztasd az USB eszközödet a Wii U-hoz.
2. Kapcsold be a Wii U-d.
3. A Wii U-d szólni fog, hogy formázni kell az USB eszközt. Erősítsd meg ezt Yes-szel.
4. Nyisd meg a Wii U System Settings-ét.
5. Navigálj a `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)` opcióhoz
6. Válaszd ki a játékot és mozgass minden adatot (beleértve a frissítéseket és DLC-t ha van telepítve) az USB eszközre.

## Frissítések USB-re mozgatása

::: tip

Ha a lemezes játékod rendelkezik telepített DLC-vel vagy frissítésekkel, akkor át kell vinned a fájlokat az USB eszközödre. Ezt meg tudod tenni a Wii U data management-jével.

:::

1. Kapcsold be a Wii U-d
2. Nyisd meg a Wii U System Settings-ét.
3. Navigálj a `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)` opcióhoz.
4. Válaszd ki a játékod és mozgasd az update és DLC adatot az USB eszközre.
