# Egy vWii IOS/Channel helyreállítása

Ez az oldal végigvezet a vWii-n lévő IOS vagy csatorna helyreállításának folyamatán, függetlenül attól, hogy az bármilyen okból sérült vagy törlődött.

::: danger

Ez tönkreteheti a vWii NAND-ot, ha nem vigyázol! Kérjük, fontold meg az SLCCMPT és az OTP biztonsági [mentését](aroma/nand-backup), ha még nem készült róluk biztonsági mentés!

:::

::: tip

Ha valami rendszer frissítés blokkoló metódust használsz, kérjük [távolítsd el](unblock-updates).

:::

::: tip

Csatolási ütközések miatt ezzel az appal, le kell tiltanod az FTPiiu plugin-t.

:::

## Mire van szükséged

- Egy működő [homebrew telepítésre](index) a Wii U oldalán.
- A [vWii Decaffeinator](https://github.com/GaryOderNichts/vWii-Decaffeinator/releases) legutolsó kiadása.

## Lépések

1. Másold a `decaffeinator.zip` fájl tartalmát az SD kártyád gyökerébe.
2. Vedd ki az SD kártyát a számítógépedből, és dubd be a Wii U konzolodba.
3. Kapcsold be a Wii U-d és indítsd el az Aromát.
4. Idítsd el a vWii Decaffeinator-t a Wii U menüből.

## Helyreállítási folyamat

Különböző lehetőségek közül választhatsz. Javasolt, hogy először a `Speciális opciók (Advanced options)` menüben próbáld meg a visszaállítást, ha tudod, mit kell visszaállítani, vagy `Könnyű módban (Light mode)`, ha nem vagy biztos benne. Szélsőséges esetekben, amikor semmilyen más lehetőség nem oldja meg a problémát, az `Agresszív módot (Aggressive mode)` kell választani.

<!-- tabs:start -->

::::: tabs

:::: tab default Speciális opciók

### Speciális opciók (Advanced options)

::: tip

Ez a mód törli a megadott IOS-eket és csatornákat, hogy újratelepítse őket. Minden más adat (beleértve a cIOS-okat is) megmarad.

:::

:::details Kattints ide, hogy megtekintsd, mit lehet visszanyerni ezzel a módszerrel.

![Advanced options](/files/Advanced-options.jpg)
![Advanced options2](/files/Advanced-options2.jpg)
![Advanced options3](/files/Advanced-options3.jpg)

:::

1. Válaszd az `Advanced options`-t a menüben.
2. Használd a D-Pad-et annak kijelölésére, hogy mi legyen helyreállítva.
3. Nyomj Start gombot a visszaállítási folyamat elindításához.
4. Amikor az alkalmazás végez, hagyd, hogy az alkalmazás elindítsa a System Settings-et.
5. Hajts végre egy [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update)-et a helyreállítási folyamat befejezéséhez.

::: tip

Most újra engedélyezheted a [rendszerfrissítés blokkolási módszered](block-updates).

:::

::::

:::: tab Könnyű mód

### Könnyű mód (Light mode)

::: tip

Ez a mód törli a System Menu, Wii Message Board mentés adatot, IOS-eket és más rendszer címeket, hogy tiszta verziókat telepíthessen belőlük újra. Kérjük vedd figyelembe, hogy ez eltávolít minden cIOS-t is és újra kell telepíteni azokat. Minden más adat megőrzésre kerül.

:::

1. Válaszd a `Light mode`-ot a menüben.
2. Nyomj Start gombot a visszaállítási folyamat elindításához.
3. Amikor az alkalmazás végez, hagyd, hogy az alkalmazás elindítsa a System Settings-et.
4. Hajts végre egy [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update)-et a helyreállítási folyamat befejezéséhez.

::: tip

Most újra engedélyezheted a [rendszerfrissítés blokkolási módszered](block-updates).

:::

::: info

Ha az Error Code 160-0101-et kapod bootoláskor a vWii Decaffeinator használata után, akkor vedd ki a behelyezett lemezt és húzz le minden külső lemezegységet és indítsd újra a rendszert.

:::

::::

:::: tab Agresszív mód

### Agresszív mód

::: danger

Ez a mód töröl **mindent,** hogy újratelepítse a tiszta verzióját az alapértelmezet IOS-eknek és csatornáknak. Kérjük vedd figyelembe, hogy minden cIOS, mentés adat és csatorna el fog veszni és a vWii NAND visszaáll a gyári állapotára!

:::

1. Válaszd a `Agressive mode`-ot a menüben.
2. Olvasd el a figyelmezetetést teljesen. Ha szeretnéd folytatni, nyomj Start gombot a helyreállítási folyamat elkezdéséhez.
3. Amikor az alkalmazás végez, hagyd, hogy az alkalmazás elindítsa a System Settings-et.
4. Hajts végre egy [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update)-et a helyreállítási folyamat befejezéséhez.

::: tip

Most újra engedélyezheted a [rendszerfrissítés blokkolási módszered](block-updates).

:::

::: info

Ha az Error Code 160-0101-et kapod bootoláskor a vWii Decaffeinator használata után, akkor vedd ki a behelyezett lemezt és húzz le minden külső lemezegységet és indítsd újra a rendszert.

:::

::::

:::::

::: tip

Ha az Error Code Error Code 105-3102-öt kapod a rendszer frissítésekor, akkor indítsd újra a konzolod, és próbálj újra frissíteni.

:::
