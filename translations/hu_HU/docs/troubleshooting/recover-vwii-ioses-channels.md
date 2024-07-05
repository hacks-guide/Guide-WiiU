# Egy vWii IOS/Channel helyreállítása
---
Ez az oldal végigvezet a vWii-n lévő IOS vagy csatorna helyreállításának folyamatán, függetlenül attól, hogy az bármilyen okból sérült vagy törlődött.

!> Ez tönkreteheti a vWii NAND-ot, ha nem vigyázol! Kérjük, fontold meg az SLCCMPT és az OTP [biztonsági mentését](vwii/nand-backup), ha még nem készült róluk biztonsági mentés!

?> Ha valami rendszer frissítés blokkoló metódust használsz, kérjük [távolítsd el](unblock-updates).

?> Due to mounting conflicts with this app, you need to also disable the FTPiiu plugin.

### Amire szükséged van {docsify-ignore}

- Egy működő [homebrew telepítésre ](introduction) a Wii U oldalán.
- A [vWii Decaffeinator](https://github.com/GaryOderNichts/vWii-Decaffeinator/releases) legutolsó kiadása.

### Lépések {docsify-ignore}

1. Másold a `decaffeinator.zip` fájl tartalmát az SD kártyád gyökerébe.
1. Vedd ki az SD kártyát a számítógépedből, és dugd be a Wii U konzolodba.
1. Kapcsold be Wii U-d és indíts el a választásod szerinti egyedi firmware-t (CFW-t)(Mocha, Haxchi vagy CBHC).
1. Indítsd el a Homebrew Launcher-t.
1. Indítsd el a vWii Decaffeinator-t.

### Helyreállítási folyamat

Különböző lehetőségek közül választhatsz. Javasolt, hogy először a `Speciális opciók (Advanced options)` menüben próbáld meg a visszaállítást, ha tudod, mit kell visszaállítani, vagy `Könnyű módban (Light mode)`, ha nem vagy biztos benne. Szélsőséges esetekben, amikor semmilyen más lehetőség nem oldja meg a problémát, az `Agresszív módot (Aggressive mode)` kell választani.

<!-- tabs:start -->

#### **Speciális opciók (Advanced options)**

### Speciális opciók (Advanced options)

?> Ez a mód törli a megadott IOS-eket és csatornákat, hogy újratelepítse őket. Minden más adat (beleértve a cIOS-okat is) megmarad.

<details>
<summary>Kattints ide, hogy megtekintsd, mit lehet visszanyerni ezzel a módszerrel.</summary>

![Speciális opciók (Advanced options)](docs/files/Advanced-options.jpg) ![Advanced options2](docs/files/Advanced-options2.jpg) ![Advanced options3](docs/files/Advanced-options3.jpg)

</details>

1. Válaszd az `Advanced options`-t a menüben.
1. Használd a D-Pad-et annak kijelölésére, hogy mi legyen helyreállítva.
1. Nyomj Start gombot a visszaállítási folyamat elindításához.
1. Amikor az alkalmazás végez, hagyd, hogy az alkalmazás elindítsa a System Settings-et.
1. A helyreállítási folyamat befejezéséhez végezz el egy rendszerfrissítést a [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update)-tel.

?> Most újra engedélyezheted a [rendszerfrissítés blokkolási módszered](block-updates).

#### **Könnyű mód (Light mode)**

### Könnyű mód (Light mode)

?> Ez a mód törli a System Menu, Wii Message Board mentés adatot, IOS-eket és más rendszer címeket, hogy tiszta verziókat telepíthessen belőlük újra. Kérjük vedd figyelembe, hogy ez eltávolít minden cIOS-t is és újra kell telepíteni azokat. Minden más adat megőrzésre kerül.

1. Válaszd a `Light mode`-ot a menüben.
1. Nyomj Start gombot a visszaállítási folyamat elindításához.
1. Amikor az alkalmazás végez, hagyd, hogy az alkalmazás elindítsa a System Settings-et.
1. A helyreállítási folyamat befejezéséhez végezz el egy rendszerfrissítést a [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update)-tel.

?> Most újra engedélyezheted a [rendszerfrissítés blokkolási módszered](block-updates).

> Ha az Error Code 160-0101-et kapod bootoláskor a vWii Decaffeinator használata után, akkor vedd ki a behelyezett lemezt és húzz le minden külső lemezegységet és indítsd újra a rendszert.

#### **Agresszív mód**

### Agresszív mód

!> Ez a mód töröl **mindent**, hogy újratelepítse a tiszta verzióját az alapértelmezet IOS-eknek és csatornáknak. Kérjük vedd figyelembe, hogy minden cIOS, mentés adat és csatorna el fog veszni és a vWii NAND visszaáll a gyári állapotára!

1. Válaszd a `Agressive mode`-ot a menüben.
1. Olvasd el a figyelmezetetést teljesen. Ha szeretnéd folytatni, nyomj Start gombot a helyreállítási folyamat elkezdéséhez.
1. Amikor az alkalmazás végez, hagyd, hogy az alkalmazás elindítsa a System Settings-et.
1. A helyreállítási folyamat befejezéséhez végezz el egy rendszerfrissítést a [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update)-tel.

?> Most újra engedélyezheted a [rendszerfrissítés blokkolási módszered](block-updates).

> Ha az Error Code 160-0101-et kapod bootoláskor a vWii Decaffeinator használata után, akkor vedd ki a behelyezett lemezt és húzz le minden külső lemezegységet és indítsd újra a rendszert.

<!-- tabs:end -->

> Ha az Error Code Error Code 105-3102-öt kapod a rendszer frissítésekor, akkor indítsd újra a konzolod, és próbálj újra frissíteni.
