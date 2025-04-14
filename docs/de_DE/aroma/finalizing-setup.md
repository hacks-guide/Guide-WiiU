---
prev: true
---

# Setup abschließen

Jetzt, da PayloadLoader, Environment Loader und Aroma installiert sind, schließen wir das Setup ab.

## Zusätzliche Homebrew Apps

::: tip

Auf Aroma werde alle Homebrew-Anwendungen aus dem Wii U-Menü geladen.

:::

- **SaveMii Mod WUT Port** ist eine Homebrew App, mit der du deine Wii U und vWii Speicherdaten verwalten kannst.
- **Bloopair** ist ein Aroma-Modul, mit dem du drahtlos die beliebtesten Bluetooth-fähigen Controller verbinden kannst. Siehe [diese Seite](https://gbatemp.net/threads/bloopair-connect-controllers-from-other-consoles-natively.594289/) für weitere Details.
- Im **Homebrew Appstore** kannst du Homebrew Apps direkt auf deiner Wii U durchsuchen und herunterladen.

### Zusätzliche Homebrew Apps - Was du brauchst

- Die neueste Version von [SaveMii Mod WUT Port](https://wiiu.cdn.fortheusers.org/zips/SaveMiiModWUTPort.zip).
- `wiiu-extracttosd.zip` von [HB Appstore](https://github.com/fortheusers/hb-appstore/releases/).

### Zusätzliche Homebrew Apps - Extrahieren von Dateien auf die SD-Karte

1. Kopiere den Inhalt der gerade heruntergeladenen `SaveMiiModWUTPort.zip` Datei in das Stammverzeichnis deiner SD-Karte.
2. Kopiere den Inhalt der gerade heruntergeladenen `wiiu-extracttosd.zip` Datei in das Stammverzeichnis deiner SD-Karte.

## Empfohlene Plugins

| Name                                                                                                                                                  | Beschreibung                                                                                         | Installationsanleitung                                                                                                                                                                                                                                                                                                                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [FTPiiU Plugin](https://github.com/wiiu-env/ftpiiu_plugin/) ([Download](https://github.com/wiiu-env/ftpiiu_plugin/releases))       | Führt einen FTP-Server im Hintergrund aus.                                           | 1. Extrahiere die heruntergeladene `ftpiiu_vX_X.zip` Datei. <br> 2. Copy the `ftpiiu.wps` to the `wiiu/environments/aroma/plugins` folder on the root of your SD Card.                                                                                                                                                         |
| [SDCafiine](https://github.com/wiiu-env/sdcafiine_plugin/) ([Download](https://github.com/wiiu-env/sdcafiine_plugin/releases))     | Erlaubt es dir, Spiele zu modifizieren, indem du Dateien auf die SD-Karte umleitest. | 1. Extrahiere die heruntergeladene `sdcafiine_vX_X_X.zip` Datei. <br> 2. Kopiere `sdcafiine.wps` in den Ordner `wiiu/environments/aroma/plugins` auf dem Stammverzeichnis deiner SD-Karte.                                                                                                                                     |
| [Bloopair](https://github.com/GaryOderNichts/Bloopair/) ([Download](https://github.com/GaryOderNichts/Bloopair/releases))          | Ermöglicht das drahtlose Verbinden der beliebtesten Bluetooth-fähigen Controller.    | 1. Extrahiere den Inhalt der gerade heruntergeladenen `Bloopair_vX.X.zip` Datei. <br> 2. Kopiere `30_bloopair.rpx` in den `wiiu/environments/aroma/modules/setup/` Ordner auf dem Stammverzeichnis deiner SD-Karte. <br> 3. Kopiere den `wiiu` Ordner in das Stammverzeichnis deiner SD-Karte. |
| [Screenshot Plugin](https://github.com/wiiu-env/ScreenshotWUPS/) ([Download](https://github.com/wiiu-env/ScreenshotWUPS/releases)) | Ermöglicht die Aufnahme von Screenshots direkt auf die SD-Karte.                     | 1. Extrahiere die heruntergeladene `screenshot_plugin_vX_X.zip` Datei. <br> 2. Kopiere `screenshot.wps` in den `wiiu/environments/aroma/plugins` Ordner auf dem Stammverzeichnis deiner SD-Karte.                                                                                                                              |

## Pretendo Network

Pretendo ist ein Ersatzservice für das Nintendo Network, das Online-Dienste zurückbringt, da diese eingestellt werden sollen. Außerdem belebt es den Miiverse-Dienst über Juxtaposition wieder. Die offizielle Anleitung kann [hier](https://pretendo.network/docs/install/wiiu) gefunden werden.

## Tiramisu starten (optional)

::: warning

Tiramisu ist mittlerweile archiviert, und wurde von Aroma ersetzt und gilt als veraltet. Es werden nicht mehr Homebrew dafür entwickelt und Dienste wie Pretendo haben die Unterstützung dafür beendet.

:::

Wenn du jedoch die Notwendigkeit findest, Tiramisu zu starten, um beispielsweise eine veraltete Homebrew App zu verwenden, mache Folgendes:

1. Lade die neuesten Dateien von [Tiramisu for your café](https://tiramisu.foryour.cafe) herunter.
2. Kopiere den `wiiu` Ordner in das Stammverzeichnis deiner SD-Karte.
    - Der Ordner sollte mit dem vorhandenen `wiiu` Ordner zusammengeführt werden, falls dies nicht automatisch geschieht.
3. Nimm die SD-Karte aus deinem Computer und stecke sie in deine Wii U Konsole.
4. Starte den EnvironmentLoader.
    - If you're autobooting into it, this can be done by powering on your console and holding X.
    - You do not need to reinstall the PayloadLoader if you already did so with Aroma.
5. Highlight the entry called `tiramisu` using the D-Pad.
6. Launch Tiramisu by pressing A.
7. Launch the Wii U Menu by pressing A.
    - To make the console autoboot the Wii U Menu when loading the Tiramisu environment, press Y.
8. Homebrew Launcher can be loaded by launching the Mii Maker app.
