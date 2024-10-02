# Frissítések blokkolása

Minden aktuálisan ismert Wii U exploit, ellentétben például a Nintendo Switch RCM exploitjával, patchelhető egy rendszer frissítéssel. Habár a Wii U már hivatalosan nem támogatott, a Nintendo még mindig kiadhat frissítéseket hozzá. Konkrétan az 5.5.3-tól az 5.5.6-ig a frissítések azt követően kerültek kiasásra, hogy megszűnt a Wii U támogatása, így a frissítések tiltása továbbra is ajánlott.

Habár az Aroma's PayloadLoader már rendelkezik beépített blokkolás funkcionalitással, ajánlott, hogy töröld az update mappát, hogy effektíven blokkold a rendszer frissítéseket.
Ha egy sárga figyelmeztető képernyőt kapsz, az Aroma-ra bootolás közben, akkor az update folder még mindig létezik, és ajánlott a törlése a lenti útmutatás alapján.

## Lépések

Jelenleg egy mód létezik a frissítések tiltására egy Wii U rendszeren:

1. Legyél biztos abban, hogy a legutolsó Aroma bétád van.
2. Bootolj Aromába.
   - Ha egy sárga figyelmezetést kapsz, nyomj X-et a frissítések blokkolásáshoz.
   - If you didn't get the warning, but the AutobootMenu says "Updates not blocked!", press and hold + (Plus) **and** - (Minus) at the same time until it says they are blocked.
