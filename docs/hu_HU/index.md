---
layout: home
title: "Wii U Hack útmutató"
hero:
  text: "Wii U Hack útmutató"
  tagline: "A Nintendo Homebrew segítői és munkatársai által készített útmutató, a gyáritól az Aroma egyedi firmware-ig."
  image:
    src: "/assets/img/home-page-feature.jpg"
---

::: tip

**Discord segítség**

Az élő támogatáshoz látogass el a **#support** csatornára a [Aroma Discord](https://discord.gg/bZ2rep2)-on és kérdezz angolul az asszitenciáért. Kérjük olvasd el **#troubleshooting**-ot és a [Gyakran Ismételt Kérdések](faq) oldalt, hogy lásd kérdésed megválaszolásra került-e már.

:::

::: info

Ha értékeled ezt az útmutatót, elfogadunk [adományokat](donations).

:::

::: info

A homebrew és egyedi firmware-ek teljes útmutatóját más eszközökhöz megtalálod [hacks.guide](https://hacks.guide) oldalon.

:::

### Homebrew

A homebrew alkalmazások olyan egyedi, felhasználó által készített szoftverek, amelyeket a Nintendo nem engedélyezett. Ezek közé tartozhatnak mentésszerkesztő eszközök, játékok, emulátorok és még sok más.

Egy homebrew futtatható a Wii U-n, amennyiben van módod a fájlok SD-kártyára történő elhelyezésére, és a Wii U-d a régiódnak megfelelő legújabb verzióra van frissítve.

### Egyedi Firmware

Az egyéni firmware (gyakran rövidítve "CFW") lehetővé teszi, hogy fejlettebb hackeket használj, amelyeket a userland homebrew nem tud könnyen megtenni. Például a játékmódosítások könnyed telepítését.
A CFW bármelyik a legújabb verzión található konzolra beállítható.

### Homebrew & egyedi firmware felhasználási lehetőségek

Többek között a következőket teszi lehetővé:

- "ROM hackek" használata a saját játékaidhoz.
- Mentések mentése, szerkesztése és visszaállítása számos játékhoz.
- Régebbi rendszerek játékainak lejátszása különböző emulátorokkal, a RetroArch vagy más önálló emulátorok használatával.
- Játék régión kívüli játékokkal.
- A Wii U játéklemezeit dumpolhat egy olyan formátumba, amely telepíthető a Wii U belső vagy külső tárolómeghajtójára.

### Végcél

Ennek az útmutatónak az a célja, hogy egy módosítatlan Wii U-t a gyáriról egyéni firmware-re állítson át.

### Kezdés előtt

::: danger

Az útmutató végrehajtása előtt tisztában kell lenned a Wii U hackelésének kockázataival: **MINDEN** alkalommal, amikor módosítod a rendszeredet, mindig fennáll a veszélye egy **HELYREHOZHATATLANUL** brickeled azt. Ezek ritkák, de még mindig fennáll a lehetőség, ezért győződj meg róla, hogy **MINDEN** utasítást **PONTOSAN** követsz

:::

::: info

Ez az útmutató minden régióban minden Wii U konzolon működik a legújabb firmware-rel (5.5.6 az észak-amerikai konzolokon, 5.5.5 az összes többi régióban) vagy annál alacsonyabb verzióval.

A következőkre van szükséged, hogy sikeresen kövesd ezt az útmutatót:

- Egy SD kártya.
- Egy eszköz, például egy számítógép, amellyel fájlokat az SD-kártyára tudsz helyezni.
- Egy Wii U internet eléréssel.

Egy 32GB SD kártya elég kell legyen a legtöbb felhasználási célra. Egy Micro SD kártya egy adapteren is megfelelően működik.

:::

::: tip

**Ha van már régi egyedi firmware telepítésed**

- **CBHC** felhasználók: Menj [A CBHC eltávolítása](uninstall-cbhc)
  oldalra a CBHC eltávolításához.
- **Haxchi** fehasználók: Távolítsd el a Haxchi appot a Data Management alól a System Settings appban.
- **Mocha CFW (Indexiine)** felhasználók: Menj az [Indexiine eltávolítása](uninstall-indexiine) oldalra az Indexiine eltávolításáért.
- **Mocha CFW (Online Exploit)** felhasználók: Nem kell csinálnod semmit, mielőtt követnéd ezt az útmutatót.

:::

Ha minden a terv szerint halad, nem veszítesz el semmilyen adatot, és a végén minden megmarad, amivel elindultál (a játékok, mentések, NNID stb. megmaradnak).

Tartsd a készüléked a teljes folyamat alatt bedugva, hogy elkerüld az adatvesztést vagy a váratlan kikapcsolásból eredő károkat.

Miután követted ezt az útmutatót, a CFW betöltődik és engedélyezve lesz a rendszerindításkor, kivéve, ha úgy döntesz, hogy nem követed az Autobooting Aroma részt.

Javasoljuk, hogy a teljes útmutatót az elejétől a végéig olvasd el egy vagy több alkalommal, mielőtt ténylegesen végigfuttatnád az útmutatót a rendszereddel.

---

### [Folytatás az Aromával](aroma/getting-started)
