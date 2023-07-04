# Odblokowanie aktualizacji
---
Musisz to zrobić, jeśli kiedykolwiek będziesz potrzebował dokonać aktualizacji systemu.

?> If you are running Tiramisu and have deleted the update folder, you need to disable both autobooting and recreate the update folder.

### Instrukcje {docsify-ignore}

<!-- tabs:start -->

#### **Removing Tiramisu Autoboot**

### Removing Tiramisu Autoboot

?> When autobooting into the PayloadLoader, updates are automatically blocked. Follow the guide below to disable it.

1. Uruchom konsolę trzymając wciśnięty X na Gamepad'zie.
1. Przejdx do środowiska `installer` i uruchom je naciskając A.
1. Naciśnij A, aby wybrać `Check`.
1. Wybierz `Boot options`.
1. Będziesz zapytany o to, czy chcesz zmienić aplikację/tutuł boot'owania. Naciśnij A wybierając `Switch back to Wii U Menu`.
1. Po zakończeniu procesu, naciśnij A, aby zamknąć konsolę.
1. Perform the System Update.
1. Follow [this](../docs/user-guide/tiramisu/autoboot) to re-enable autobooting.

#### **Recreating Update Folder**

### Recreating Update Folder

1. Podłącz kartę SD do swojego komputera.
1. Download and extract the contents of [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases/tag/v1.1) to the root of your SD Card.
1. Podłącz kartę SD do swojej konsoli Wii U i włącz ją.
1. Wejdź do Homebrew Launcher.
1. Znajdź aplikację UFDiine i uruchom ją.
1. Press the A button to create the update folder.
1. Confirm that it says `Update folder exists`. You are no longer blocking updates.

#### **Removing DNS Blocks**

### Removing DNS Blocks

1. Enter the Wii U's system settings and navigate to `Internet > Connect to the Internet > Connection List >` `Your WiFi connection > Change Settings > DNS` and set the option to `Auto-obtain`.
1. You are no longer blocking system updates.

<!-- tabs:end -->
