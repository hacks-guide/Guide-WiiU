# Frissítések blokkolásának feloldása
---
Ez akkor szükséges, ha egy System Update-t kell elvégezned.

?> Ha Aromát futtatsz és törölted az update mappát, akkor tiltsd le az autobootingot és hozd újra léptre az update mappát.

### Lépések {docsify-ignore}

<!-- tabs:start -->

#### **Az Aroma Autoboot eltávolítása**

### Az Aroma Autoboot eltávolítása

?> Ha autobootolsz a PayloadLoader-be, a frissítéek automatikusan blokkoltak. Kövesd az alábbi útmutatót a letiltásához.

1. Indítsd el a PayloadLoader Installer-t a Wii U Menu-ből.
1. Nyomj A gombot a`Check` kiválasztásához.
1. Válaszd a `Boot options`.-t.
1. Megkérdezi, hogy szeretnéd-e megváltoztatni a boot címet. Válaszd a `Switch back to Wii U Menu` és nyomd meg az A gombot.
1. Ha a folyamat befejeződött, nyomj A gombot a konzol leállításához.
1. Végezz el egy system Update-et.
1. Kövesd [ezt](../docs/user-guide/aroma/autoboot), hogy újra engedélyezd a autobooting-ot.

#### **A frissítés mappa újra létrehozása**

### A frissítés mappa újra létrehozása

1. Legyél biztos abban, hogy a legutolsó Aroma bétád van.
1. Bootolj Aromába a (+) gomb megnyomásával.
1. Tarts nyomva a (+) **és a** (-) gombokat, amíg azt nem mondja, hogy "Updates not blocked!".

#### **DNS blokkok eltávolítása**

### DNS blokkok eltávolítása

1. Lépj be a Wii U system settings-ébe és navigálj az `Internet > Connect to the Internet > Connection List >` `Your WiFi connection > Change Settings > DNS` és állítsd be az `Auto-obtain` opciót.
1. Most már nem blokkolod a frissítéseket.

<!-- tabs:end -->
