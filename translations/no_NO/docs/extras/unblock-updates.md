# Fjerne blokkering av oppdateringer
---
Dette må du gjøre hvis du noen gang trenger en systemoppdatering.

?> If you are running Tiramisu and have deleted the update folder, you need to disable both autobooting and recreate the update folder.

### Instruksjoner {docsify-ignore}

<!-- tabs:start -->

#### **Fjerne Tiramisu Autoboot**

### Fjerne Tiramisu Autoboot

?> When autobooting into the PayloadLoader, updates are automatically blocked. Follow the guide below to disable it.

1. Start konsollen mens du holder X på Gamepad'en.
1. Gå til `installer` environment og kjør den ved å trykke på A.
1. Trykk A for å velge `Check`.
1. Velg `Boot options`.
1. Du vil bli spurt om du vil bytte boot title. Trykk A for å velge `Switch back to Wii U Menu`.
1. Når prosessen er ferdig, trykk A for å slå av konsollen.
1. Kjør en System Update.
1. Følg [denne guiden](../docs/user-guide/tiramisu/autoboot) for å reaktivere autobooting.

#### **Gjenopprette "update" mappen**

### Gjenopprette "update" mappen

1. Sett SD-kortet inn i PC'en din.
1. Last ned og pakk ut [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases) til roten av SD-kortet ditt.
1. Sett SD-kortet inn i Wii U konsollen din og skru den på.
1. Start Homebrew Launcher.
1. I Homebrew Launcher, kjør UFDiine appen.
1. Trykk A på gamepadden for å lage update mappen.
1. Bekreft at det står `Update folder exists`. Du blokkerer ikke lenger systemoppdateringer.

#### **Fjerne DNS-blokkeringen**

### Fjerne DNS-blokkeringen

1. På Wii U konsollen, gå inn på systeminnstillinger og naviger til `Internet > Connect to the Internet > Connection List >` `Your WiFi connection > Change Settings > DNS` og sett den på `Auto-obtain `.
1. Du blokkerer ikke lenger systemoppdateringer.

<!-- tabs:end -->
