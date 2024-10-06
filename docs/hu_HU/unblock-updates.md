# Frissítések blokkolásának feloldása

Ez akkor szükséges, ha egy System Update-t kell elvégezned.

::: tip

If you are running Aroma and have deleted the update folder, you need to disable both autobooting and recreate the update folder.

:::

## Lépések

::::: tabs

:::: tab default Removing Aroma Autoboot

### Az Aroma Autoboot eltávolítása

::: tip

When autobooting into the PayloadLoader, updates are automatically blocked. Kövesd az alábbi útmutatót a letiltásához.

:::

1. Indítsd el a PayloadLoader Installer-t a Wii U Menu-ből.
2. Nyomj A-t a `Check` opció kiválasztásához.
3. Válaszd a `Boot options`-t.
4. Megkérdezi, hogy szeretnéd-e megváltoztatni a boot címet. Press A to select `Switch back to Wii U Menu`.
5. Ha a folyamat befejeződött, nyomj A gombot a konzol leállításához.
6. Végezz el egy system Update-et.
7. Follow [this](aroma/autobooting) to re-enable autobooting.

::::

:::: tab Recreating Update Folder

### A frissítés mappa újra létrehozása

1. Legyél biztos abban, hogy a legutolsó Aroma bétád van.
2. Bootolj Aromába a (+) gomb megnyomásával.
3. Hold + (Plus) **and** - (Minus) until it says "Updates not blocked!".

::::

:::: tab Removing DNS Blocks

### DNS blokkok eltávolítása

1. Enter the Wii U's system settings and navigate to `Internet > Connect to the Internet > Connection List >`
   `Your WiFi connection > Change Settings > DNS` and set the option to `Auto-obtain`.
2. Most már nem blokkolod a frissítéseket.

::::

:::::
