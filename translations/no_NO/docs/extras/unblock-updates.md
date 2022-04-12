# Fjerne blokkering av oppdateringer
---
Dette må du gjøre hvis du noen gang trenger en systemoppdatering.

### Instruksjoner {docsify-ignore}

<!-- tabs:start -->

#### **Removing Tiramisu Autoboot**

### Removing Tiramisu Autoboot

?> When autobooting into the PayloadLoader, updates are automatically blocked. Follow the guide below to disable it.

1. Start konsollen mens du holder X på Gamepad'en.
1. Gå til `installer` environment og kjør den ved å trykke på A.
1. Trykk A for å velge `Check`.
1. Velg `Boot options`.
1. Du vil bli spurt om du vil bytte boot title. Trykk A for å velge `Switch back to Wii U Menu`.
1. Når prosessen er ferdig, trykk A for å slå av konsollen.
1. Perform the System Update.
1. Follow [this](../docs/user-guide/tiramisu/autoboot) to re-enable autobooting.

#### **Recreating Update Folder**

### Recreating Update Folder

1. Sett SD-kortet inn i PC'en din.
1. Last ned og pakk ut [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases) til roten av SD-kortet ditt.
1. Sett SD-kortet inn i Wii U konsollen din og skru den på.
1. Start Homebrew Launcher.
1. I Homebrew Launcher, kjør UFDiine appen.
1. Press the A button to create the update folder.
1. Confirm that it says `Update folder exists`. You are no longer blocking updates.

#### **Removing DNS Blocks**

### Removing DNS Blocks

1. Enter the Wii U's system settings and navigate to `Internet > Connect to the Internet > Connection List >` `Your WiFi connection > Change Settings > DNS` and set the option to `Auto-obtain`.
1. You are no longer blocking system updates.

<!-- tabs:end -->
