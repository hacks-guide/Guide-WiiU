# Egy vWii IOS/Channel helyreállítása

Ez az oldal végigvezet a vWii-n lévő IOS vagy csatorna helyreállításának folyamatán, függetlenül attól, hogy az bármilyen okból sérült vagy törlődött.

::: danger

This has the potential to destroy your vWii NAND if you are not careful! Please consider [backing up](aroma/nand-backup) your SLCCMPT and OTP if you do not yet have them backed up!

:::

::: tip

If you are using a system update blocking method, please [remove it](unblock-updates).

:::

::: tip

Due to mounting conflicts with this app, you need to also disable the FTPiiu plugin.

:::

## Mire van szükséged

- A working [homebrew installation](index) on the Wii U side.
- The latest release of [vWii Decaffeinator](https://github.com/GaryOderNichts/vWii-Decaffeinator/releases).

## Lépések

1. Copy the contents of the `decaffeinator.zip` file to the root of your SD Card.
2. Vedd ki az SD kártyát a számítógépedből, és dubd be a Wii U konzolodba.
3. Kapcsold be Wii U-d és indíts el a választásod szerinti egyedi firmware-t (CFW-t)(Mocha, Haxchi vagy CBHC).
4. Indítsd el a Homebrew Launcher-t.
5. Indítsd el a vWii Decaffeinator-t.

## Helyreállítási folyamat

Különböző lehetőségek közül választhatsz. It is recommended to first attempt restoring through the `Advanced options` menu if you know what to restore, or `Light mode` if you aren't sure. In extreme cases where no other option solves the issue, `Aggressive mode` should be chosen.

<!-- tabs:start -->

::::: tabs

:::: tab default Advanced options

### Speciális opciók (Advanced options)

::: tip

This mode will clear the specified IOSes and channels to reinstall them. Minden más adat (beleértve a cIOS-okat is) megmarad.

:::

:::details Kattints ide, hogy megtekintsd, mit lehet visszanyerni ezzel a módszerrel.

![Advanced options](/files/Advanced-options.jpg)
![Advanced options2](/files/Advanced-options2.jpg)
![Advanced options3](/files/Advanced-options3.jpg)

:::

1. Select `Advanced options` on the menu.
2. Használd a D-Pad-et annak kijelölésére, hogy mi legyen helyreállítva.
3. Nyomj Start gombot a visszaállítási folyamat elindításához.
4. Amikor az alkalmazás végez, hagyd, hogy az alkalmazás elindítsa a System Settings-et.
5. Perform a [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) to finish the restoration process.

::: tip

You can now re-enable your [system update blocking method](block-updates).

:::

::::

:::: tab Light mode

### Könnyű mód (Light mode)

::: tip

This mode will clear the System Menu, Wii Message Board save data, IOSes, and other system titles to reinstall clean versions of them. Kérjük vedd figyelembe, hogy ez eltávolít minden cIOS-t is és újra kell telepíteni azokat. Minden más adat megőrzésre kerül.

:::

1. Select `Light mode` on the menu.
2. Nyomj Start gombot a visszaállítási folyamat elindításához.
3. Amikor az alkalmazás végez, hagyd, hogy az alkalmazás elindítsa a System Settings-et.
4. Perform a [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) to finish the restoration process.

::: tip

You can now re-enable your [system update blocking method](block-updates).

:::

::: info

Ha az Error Code 160-0101-et kapod bootoláskor a vWii Decaffeinator használata után, akkor vedd ki a behelyezett lemezt és húzz le minden külső lemezegységet és indítsd újra a rendszert.

:::

::::

:::: tab Aggressive mode

### Agresszív mód

::: danger

This mode will clear **everything** to reinstall clean versions of the default IOSes and channels. Kérjük vedd figyelembe, hogy minden cIOS, mentés adat és csatorna el fog veszni és a vWii NAND visszaáll a gyári állapotára!

:::

1. Select `Aggressive mode` on the menu.
2. Olvasd el a figyelmezetetést teljesen. Ha szeretnéd folytatni, nyomj Start gombot a helyreállítási folyamat elkezdéséhez.
3. Amikor az alkalmazás végez, hagyd, hogy az alkalmazás elindítsa a System Settings-et.
4. Perform a [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) to finish the restoration process.

::: tip

You can now re-enable your [system update blocking method](block-updates).

:::

::: info

Ha az Error Code 160-0101-et kapod bootoláskor a vWii Decaffeinator használata után, akkor vedd ki a behelyezett lemezt és húzz le minden külső lemezegységet és indítsd újra a rendszert.

:::

::::

:::::

::: tip

Ha az Error Code Error Code 105-3102-öt kapod a rendszer frissítésekor, akkor indítsd újra a konzolod, és próbálj újra frissíteni.

:::
