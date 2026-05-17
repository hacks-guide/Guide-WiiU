# Frissítések blokkolásának feloldása

Ez akkor szükséges, ha egy System Update-t kell elvégezned.

::: tip

Ha Aromát futtatsz és törölted az update mappát, akkor tiltsd le az autobootingot és hozd újra léptre az update mappát.

:::

::: tip

Az ISFShax felhasználóinak legalább v4 verzióval kell rendelkezniük a `wafel_isfshax_patch.ipx`/`5isfshax.ipx` stroopwafel plugin-ből az SD kártyán vagy az SLC-n, ahhoz, hogy frissítsenek.

:::

## Lépések

::::: tabs

:::: tab default A frissítés mappa újra létrehozása

### A frissítés mappa újra létrehozása

1. Legyél biztos abban, hogy a legutolsó Aroma bétád van.
2. Bootolj Aromába a (+) gomb megnyomásával.
3. Tarts nyomva a + (Plus) **és a** - (Minus) gombokat, amíg azt nem mondja, hogy "Updates not blocked!".

::::

:::: tab Az Aroma Autoboot eltávolítása

### Az Aroma Autoboot eltávolítása

::: tip

Ha autobootolsz a PayloadLoader-be, a frissítések automatikusan blokkoltak. Kövesd az alábbi útmutatót a letiltásához.

:::

::: tip

Az ISFShax felhasználóinak el kell távolítaniuk a `wafel_isfshax_patch.ipx`/`5isfshax.ipx` fájlokat (ha használt) az SD kártyáról (`sd:/wiiu/ios_plugins`) vagy az SLC-ről (`slc:/sys/hax/ios_plugins`), ahhoz, hogy megállítsák az autobootolást az Aromába.

:::

1. Indítsd el a PayloadLoader Installer-t a Wii U Menu-ből.
2. Nyomj A-t a `Check` opció kiválasztásához.
3. Válaszd a `Boot options`-t.
4. Megkérdezi, hogy szeretnéd-e megváltoztatni a boot címet. Nyomj A gombot a `Switch back to Wii U Menu` opció kiválasztásához.
5. Ha a folyamat befejeződött, nyomj A gombot a konzol leállításához.
6. Végezz el egy system Update-et.
7. Kövesd [ezt](aroma/autobooting) az autoboot visszaállításához.

::::

:::: tab DNS blokkok eltávolítása

### DNS blokkok eltávolítása

1. Lépj be a Wii U system settings-ébe és navigálj az `Internet > Connect to the Internet > Connection List >`
   `Your WiFi connection > Change Settings > DNS` opcióhoz és állítsd be az `Auto-obtain` opciót.
2. Most már nem blokkolod a frissítéseket.

::::

:::::
