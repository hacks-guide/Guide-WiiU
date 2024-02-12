# Fjerne blokkering av oppdateringer
---
Dette må du gjøre hvis du noen gang trenger en systemoppdatering.

?> If you are running Aroma and have deleted the update folder, you need to disable both autobooting and recreate the update folder.

### Instruksjoner {docsify-ignore}

<!-- tabs:start -->

#### **Removing Aroma Autoboot**

### Removing Aroma Autoboot

?> Når du booter inn i PayloadLoader, vil oppdateringer automatisk blokkeres. Følg guiden nedenfor for å deaktivere den.

1. Launch the PayloadLoader Installer from the Wii U Menu.
1. Trykk A for å velge `Check`.
1. Velg `Boot options`.
1. Du vil bli spurt om du vil bytte boot title. Trykk A for å velge `Switch back to Wii U Menu`.
1. Når prosessen er ferdig, trykk A for å slå av konsollen.
1. Kjør en System Update.
1. Follow [this](../docs/user-guide/aroma/autoboot) to re-enable autobooting.

#### **Gjenopprette "update" mappen**

### Recreating Update Folder

1. Sett SD-kortet inn i PC'en din.
1. Download [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases/) and copy the `UFDiine.wuhb` file to `sd:/wiiu/apps` on the root of your SD Card.
1. Plug the SD Card into your Wii U console and boot Aroma.
1. Navigate the Wii U Menu and run the UFDiine app.
1. Trykk A på gamepadden for å slette update mappen.
1. Bekreft at det står `Update folder exists`. Du blokkerer ikke lenger systemoppdateringer.

#### **Fjerne DNS-blokkeringen**

### Fjerne DNS-blokkeringen

1. På Wii U konsollen, gå inn på systeminnstillinger og naviger til `Internet > Connect to the Internet > Connection List >` `Your WiFi connection > Change Settings > DNS` og sett den på `Auto-obtain `.
1. Du blokkerer ikke lenger systemoppdateringer.

<!-- tabs:end -->
