# Odblokowanie aktualizacji
---
Musisz to zrobić, jeśli kiedykolwiek będziesz potrzebował dokonać aktualizacji systemu.

?> If you are running Aroma and have deleted the update folder, you need to disable both autobooting and recreate the update folder.

### Instrukcje {docsify-ignore}

<!-- tabs:start -->

#### **Removing Aroma Autoboot**

### Removing Aroma Autoboot

?> When autobooting into the PayloadLoader, updates are automatically blocked. Follow the guide below to disable it.

1. Launch the PayloadLoader Installer from the Wii U Menu.
1. Naciśnij A, aby wybrać `Check`.
1. Wybierz `Boot options`.
1. Będziesz zapytany o to, czy chcesz zmienić aplikację/tutuł boot'owania. Naciśnij A wybierając `Switch back to Wii U Menu`.
1. Po zakończeniu procesu, naciśnij A, aby zamknąć konsolę.
1. Perform the System Update.
1. Follow [this](../docs/user-guide/aroma/autoboot) to re-enable autobooting.

#### **Recreating Update Folder**

### Recreating Update Folder

1. Podłącz kartę SD do swojego komputera.
1. Download [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases/) and copy the `UFDiine.wuhb` file to `sd:/wiiu/apps` on the root of your SD Card.
1. Plug the SD Card into your Wii U console and boot Aroma.
1. Navigate the Wii U Menu and run the UFDiine app.
1. Naciśnij przycisk A, aby usunąć folder aktualizacji.
1. Confirm that it says `Update folder exists`. You are no longer blocking updates.

#### **Removing DNS Blocks**

### Removing DNS Blocks

1. Enter the Wii U's system settings and navigate to `Internet > Connect to the Internet > Connection List >` `Your WiFi connection > Change Settings > DNS` and set the option to `Auto-obtain`.
1. You are no longer blocking system updates.

<!-- tabs:end -->
