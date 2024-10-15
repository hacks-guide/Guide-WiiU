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

Installing a game to the system memory (NAND) is not recommended as it's limited to either 8GB or 32GB depending on your model, making you run out of space pretty quickly if you want to install multiple games.

:::

::: tip

When installing a game to a USB device, we recommend that you use an HDD and not a flash drive, as those are not optimized for constant reading and writing, therefore making them fail quickly. Ha a HDD nem rendelkezik külső tápellátással, akkor egy Y-kábelre lesz szükséged ahhoz, hogy a Wii U két USB-helyéhez csatlakoztasd.

:::

::: danger

In order to install to a USB device, it has to be formatted by the Wii U. Doing this will erase (delete) all contents (documents, pictures, videos, PC data) off of it, and prevent it from being used on another system unless you reformat it. This _does_ include the vWii, meaning you will not be able to run Wii and GameCube disc images off the USB using USB loaders. A formatáláshoz csatlakoztasd az USB HDD-t a Wii U-hoz, kapcsold be a Wii U-t, a Wii U kérni fogja, hogy formázd meg a HDD-t. Erősítsd meg ezt Yes-szel.

:::

### Mire van szükséged

- Az SD kártyádon elég hely kell legyen, hogy elférjen a járék amit dumpolni akarsz.
- Ha szeretnél USB-re telepíteni, egy USB HDD (+ egy Y-kábel, ha szükséges).
- The latest release of [WUP Installer GX2](https://wiiu.cdn.fortheusers.org/zips/wup_installer_gx2_wuhb.zip).
- The [wudd](https://wiiu.cdn.fortheusers.org/zips/wudd.zip) homebrew application.

### Lépések

1. Copy the contents of the `wup_installer_gx2_wuhb.zip` file to the root of your SD Card.
2. Copy the contents of the newly downloaded wudd `.zip` file to the root of your SD Card.
3. Vedd ki az SD kártyát a számítógépedből, és dugd be a Wii U konzolodba.
4. Kapcsold be a Wii U-d és bootolj az Aromába.
5. Indítsd el a Wii U Menu-t és indítsd el a wudd appot.
6. Select `Dump partition as .app`
7. Select the `Game` partition to start dumping.
8. Ha végzett lépj ki a wuud-ból a Wii U Menu-be.
9. Helyezd be a Wii U-d SD kártyáját a PC-dbe.
10. Copy the `GMXXXXXXXXXXXXXXXX` folder from `sd:/wudump/WUP-X-XXXX` to the `install` folder on the root of your SD Card.
    - WUDD does not create an install folder by default. You have to create it.
11. Vedd ki az SD kártyád és dugd be a Wii U-dba.
12. Nyisd meg a Wii U Menu-t majd utána a WUP Installer GX2 appot.
13. Select your game (`GMXXXXXXXXXXXXXXXX`), press `Install` and confirm with `Yes`.
14. Válaszd az 'USB'-t az USB eszközre telepítéshez és a 'NAND'-ot a NAND-ra telepítéshez
15. Lépj ki a WUP Installer GX2-ből a Wii U Menu-be.
16. Látnod kell, hogy a játékod települt és játszható.
17. Vedd ki az SD kártyát a Wii U konzolodból és dugd be a számítógépedbe.
18. Delete the `GMXXXXXXXXXXXXXXXX` folder in the `install` directory on your SD Card to free up space.

## Játékok mozgatása USB-re

::: tip

If you don't want to keep the game installed on NAND, you can use the Wii U's data management to move the game to a USB device.

:::

::: danger

In order to move your game to a USB device, it has to be formatted by the Wii U. Doing this will erase all contents of it, and prevent it from being used on another system unless you reformat it.

:::

1. Csatlakoztasd az USB eszközödet a Wii U-hoz.
2. Kapcsold be a Wii U-d.
3. A Wii U-d szólni fog, hogy formázni kell az USB eszközt. Erősítsd meg ezt Yes-szel.
4. Nyisd meg a Wii U System Settings-ét.
5. Navigate to `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`
6. Válaszd ki a játékot és mozgass minden adatot (beleértve a frissítéseket és DLC-t ha van telepítve) az USB eszközre.

## Frissítések USB-re mozgatása

::: tip

If your disc game had DLC or updates installed, you will need to transfer the files over to your USB device. Ezt meg tudod tenni a Wii U data management-jével.

:::

1. Kapcsold be a Wii U-d
2. Nyisd meg a Wii U System Settings-ét.
3. Navigate to `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`.
4. Válaszd ki a játékod és mozgasd az update és DLC adatot az USB eszközre.
