# Blokkere Systemoppdateringer
---
Alle Wii U exploits vi kjenner til i dag, i motsetning til for eksempel Nintendo Switch sin RCM exploit, kan bli patchet av en systemoppdatering. Selv om Wii U ikke lenger er offisielt støttet av Nintendo, kan de fortsatt plutselig komme med oppdateringer. For eksempel, firmware 5.5.3 til 5.5.6 ble alle utgitt etter at Nintendo kuttet support, så det er fortsatt anbefalt at man blokkerer systemoppdateringer.

While Aroma's PayloadLoader already has built-in update blocking functionality, it is recommended to delete the update folder to effectively block system updates. If you get a yellow warning screen while booting into Aroma, the update folder still exists and it is recommended to delete it using the guide below.

### Instruksjoner {docsify-ignore}

For tiden finnes det en måte å blokkere systemoppdateringer på Wii U:

1. Make sure you have the latest Aroma beta.
1. Boot into Aroma.
    - If you got the yellow warning screen, press X to block updates.
    - If you didn't get the warning, but the AutobootMenu says "Updates not blocked!", press and hold + (Plus) **and** - (Minus) at the same time until it says they are blocked.
