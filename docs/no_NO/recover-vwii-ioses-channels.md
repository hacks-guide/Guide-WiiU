# Gjenopprett en vWii IOS/Channel

Denne siden vil hjelpe deg til å gjenopprette en IOS eller channel i vWii, om den er korrupt eller slettet av en eller annen grunn.

::: danger

This has the potential to destroy your vWii NAND if you are not careful! Please consider [backing up](aroma/nand-backup) your SLCCMPT and OTP if you do not yet have them backed up!

:::

::: tip

If you are using a system update blocking method, please [remove it](unblock-updates).

:::

::: tip

Due to mounting conflicts with this app, you need to also disable the FTPiiu plugin.

:::

## Dette trenger du

- A working [homebrew installation](index) on the Wii U side.
- The latest release of [vWii Decaffeinator](https://github.com/GaryOderNichts/vWii-Decaffeinator/releases).

## Instruksjoner

1. Copy the contents of the `decaffeinator.zip` file to the root of your SD Card.
2. Ta SD-kortet ut av PC'en og sett den inn i Wii U konsollen.
3. Power on your Wii U and launch Aroma.
4. Launch vWii Decaffeinator from the Wii U Menu.

## Gjenopprettings prosessen

Du vil få noen diverse alternativer. It is recommended to first attempt restoring through the `Advanced options` menu if you know what to restore, or `Light mode` if you aren't sure. In extreme cases where no other option solves the issue, `Aggressive mode` should be chosen.

<!-- tabs:start -->

::::: tabs

:::: tab default Advanced options

### Avanserte alternativer

::: tip

This mode will clear the specified IOSes and channels to reinstall them. All annen data (inkludert cIOS) vil bli bevart.

:::

:::details Klikk her for å vise hva som kan gjenopprettes med denne metoden.

![Advanced options](/files/Advanced-options.jpg)
![Advanced options2](/files/Advanced-options2.jpg)
![Advanced options3](/files/Advanced-options3.jpg)

:::

1. Select `Advanced options` on the menu.
2. Bruk D-padden for å velge hva du ønsker å gjenopprette.
3. Trykk Start for å starte gjenopprettingsprosessen.
4. Når programmet er ferdig, la den starte System Settings.
5. Perform a [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) to finish the restoration process.

::: tip

You can now re-enable your [system update blocking method](block-updates).

:::

::::

:::: tab Light mode

### Light mode

::: tip

This mode will clear the System Menu, Wii Message Board save data, IOSes, and other system titles to reinstall clean versions of them. Dette vil også fjerne alle cIOS'er og disse må installeres på nytt. Alle andre data vil bli bevart.

:::

1. Select `Light mode` on the menu.
2. Trykk Start for å starte gjenopprettingsprosessen.
3. Når programmet er ferdig, la den starte System Settings.
4. Perform a [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) to finish the restoration process.

::: tip

You can now re-enable your [system update blocking method](block-updates).

:::

::: info

Hvis du mottar feilkode 160-0101 når du starter opp systemet etter at du har brukt vWii Decaffeinator ta ut den satte skiven og koble fra eventuelle eksterne stasjoner og start systemet på nytt.

:::

::::

:::: tab Aggressive mode

### Aggressive mode

::: danger

This mode will clear **everything** to reinstall clean versions of the default IOSes and channels. Vær oppmerksom på at alle cIOS'er, save data, og kanaler vil forsvinne, og at vWii NAND vil bli resatt til original!

:::

1. Select `Aggressive mode` on the menu.
2. Les hele advarselen. Hvis du ønsker å fortsette, trykk på Start for å starte gjenopprettingsprosessen.
3. Når programmet er ferdig, la den starte System Settings.
4. Perform a [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) to finish the restoration process.

::: tip

You can now re-enable your [system update blocking method](block-updates).

:::

::: info

Hvis du mottar feilkode 160-0101 når du starter opp systemet etter at du har brukt vWii Decaffeinator ta ut den satte skiven og koble fra eventuelle eksterne stasjoner og start systemet på nytt.

:::

::::

:::::

::: tip

Hvis du mottar feilkode 105-3102 når du utfører systemoppdateringen, restart konsollen og forsøk oppdateringen på nytt.

:::
