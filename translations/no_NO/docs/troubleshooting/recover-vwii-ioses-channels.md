# Gjenopprett en vWii IOS/Channel
---
Denne siden vil hjelpe deg til å gjenopprette en IOS eller channel i vWii, om den er korrupt eller slettet av en eller annen grunn.

!> Du kan potensielt ødelegge vWii NAND hvis du ikke er forsiktig! Vi anbefaler at du tar en[backup](vwii/nand-backup) av SLCCMPT og OTP mappene hvis du enda ikke har gjort det!

?> Hvis du bruker en blokkeringsmetode for systemoppdateringer, må du [tilbakestille den ](unblock-updates).

?> Due to mounting conflicts with this app, you need to also disable the FTPiiu plugin.

### Dette Trenger Du {docsify-ignore}

- En fungerende [Homebrew installasjon](introduction) på Wii U siden.
- Siste utgave av [vWii Decaffeinator](https://github.com/GaryOderNichts/vWii-Decaffeinator/releases).

### Instruksjoner {docsify-ignore}

1. Pakk ut `decaffeinator.zip` til roten av SD-kortet.
1. Ta SD-kortet ut av PC'en og sett den inn i Wii U konsollen.
1. Slå på Wii U konsollen og start CFW (Mocha, Haxchi eller CBHC).
1. Start Homebrew Launcher.
1. Kjør vWii Decaffeinator.

### Gjenopprettings prosessen

Du vil få noen diverse alternativer. Det anbefales å prøve å gjenopprette gjennom `Advanced options` menyen hvis du vet hva du skal gjenopprette, eller `Light mode` hvis du ikke er sikker. I ekstreme tilfeller der ingen andre alternativer løser problemet, bør `Aggressive mode` brukes.

<!-- tabs:start -->

#### **Avanserte alternativer**

### Avanserte alternativer

?> Denne modusen vil fjerne spesifikke IOS'er og kanaler for å installere dem på nytt. All annen data (inkludert cIOS) vil bli bevart.

<details>
<summary>Klikk her for å vise hva som kan gjenopprettes med denne metoden.</summary>

![Avanserte alternativer](docs/files/Advanced-options.jpg) ![Advanced options2](docs/files/Advanced-options2.jpg) ![Advanced options3](docs/files/Advanced-options3.jpg)

</details>

1. Velg `Advanced options` på menyen.
1. Bruk D-padden for å velge hva du ønsker å gjenopprette.
1. Trykk Start for å starte gjenopprettingsprosessen.
1. Når programmet er ferdig, la den starte System Settings.
1. Utfør en [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) for å fullføre gjenopprettingsprosessen.

?> Du kan nå reaktivere din [blokkeringsmetode mot systemoppdateringer](block-updates).

#### **Light mode**

### Light mode

?> Denne modusen vil slette System Menu, Wii Message Board save data, IOS'er og andre system titler for å installere dem på nytt. Dette vil også fjerne alle cIOS'er og disse må installeres på nytt. Alle andre data vil bli bevart.

1. Velg `Light mode` på menyen.
1. Trykk Start for å starte gjenopprettingsprosessen.
1. Når programmet er ferdig, la den starte System Settings.
1. Utfør en [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) for å fullføre gjenopprettingsprosessen.

?> Du kan nå reaktivere din [blokkeringsmetode mot systemoppdateringer](block-updates).

> Hvis du mottar feilkode 160-0101 når du starter opp systemet etter at du har brukt vWii Decaffeinator ta ut den satte skiven og koble fra eventuelle eksterne stasjoner og start systemet på nytt.

#### **Aggressive mode**

### Aggressive mode

!> Denne modusen vil slette **alt** for å installere originale IOS'er og kanaler på nytt. Vær oppmerksom på at alle cIOS'er, save data, og kanaler vil forsvinne, og at vWii NAND vil bli resatt til original!

1. Velg `Aggressive mode` på menyen.
1. Les hele advarselen. Hvis du ønsker å fortsette, trykk på Start for å starte gjenopprettingsprosessen.
1. Når programmet er ferdig, la den starte System Settings.
1. Utfør en [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) for å fullføre gjenopprettingsprosessen.

?> Du kan nå reaktivere din [blokkeringsmetode mot systemoppdateringer](block-updates).

> Hvis du mottar feilkode 160-0101 når du starter opp systemet etter at du har brukt vWii Decaffeinator ta ut den satte skiven og koble fra eventuelle eksterne stasjoner og start systemet på nytt.

<!-- tabs:end -->

> Hvis du mottar feilkode 105-3102 når du utfører systemoppdateringen, restart konsollen og forsøk oppdateringen på nytt.
