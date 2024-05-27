# Frissítések letiltása
---
Minden aktuálisan ismert Wii U exploit, ellentétben például a Nintendo Switch RCM exploitjával, patchelhető egy rendszer frissítéssel. Habár a Wii U már hivatalosan nem támogatott, a Nintendo még mindig kiadhat frissítéseket hozzá. Konkrétan az 5.5.3-tól az 5.5.6-ig a frissítések azt követően kerültek kiasásra, hogy megszűnt a Wii U támogatása, így a frissítések tiltása továbbra is ajánlott.

While Aroma's PayloadLoader already has built-in update blocking functionality, it is recommended to delete the update folder to effectively block system updates. Ha egy sárga figyelmeztető képernyőt kapsz, az Aroma-ra bootolás közben, akkor az update folder még mindig létezik, és ajánlott a törlése a lenti útmutatás alapján.

### Lépések {docsify-ignore}

Jelenleg egy mód létezik a frissítések tiltására egy Wii U rendszeren:

1. Legyél biztos abban, hogy a legutolsó Aroma bétád van.
1. Bootolj Aromába.
    - Ha egy sárga figyelmezetést kapsz, nyomj X-et a frissítések blokkolásáshoz.
    - Ha nme kpasz figyelmezetést, de az AutobootMenu azt mondja, hogy "Updates not blocked!", nyomd le és tartsd lenyomva a (+) **és** (-) gombokat egyszerre, addig míg az nem mondja, hogy blokkolt.
