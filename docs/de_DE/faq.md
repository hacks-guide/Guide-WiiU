# Häufig gestellte Fragen

## Hat Homebrew irgendwelche Risiken?

Zurzeit bringt Homebrew auf der Wii U keine Risiken mit sich, oder die Gefahr von Nintendo gebannt zu werden, es sei denn, du cheatest in Online Spielen oder betrügst im eShop. Du solltest jedoch immer vorsichtig sein, heruntergeladene Homebrew zu verwenden, besonders wenn du der Quelle nicht vertraust, da Homebrew dein System potenziell schädigen kann!

## Was sind Exploits?

Exploits sind Einstiegspunkte, mit denen weiteres Homebrew ausgeführt werden kann. In der Hauptanleitung verwendest du Exploits wie den Browser-Exploit (http://wiiuexploit.xyz) und PayloadLoader (Gesundheits- und Sicherheitsinformationen Exploit). Alle aktuellen Exploits laden `SD:/wiiu/payload.elf`, welche das weitere Laden von Homebrew übernimmt.

## Was sind Payloads?

Payloads, die normalerweise mit dem Dateinamen `payload.elf` zu finden sind, sind vorhanden, um das Laden verschiedener Exploits in denselben nächsten Schritt zu erleichtern, was eine einfachere Aktualisierbarkeit ermöglicht. Es spielt keine Rolle, welcher Exploit den Payload lädt, das Ergebnis ist immer das gleiche.

Mehrere Payloads können mit PayloadLoaderPayload umgeschaltet werden.

Der im Hauptanleitung verwendete Payload ist CustomRPXLoader, der `SD:/wiiu/payload.rpx` lädt, und die in der Anleitung verwendete `payload.rpx` ist EnvironmentLoader, mit dem du unterschiedliche Environments laden kannst.

## Was sind Environments?

Ein Environment ist eine Sammlung von „Setup-Modulen“, die beim Starten des Environments in einer bestimmten Reihenfolge ausgeführt werden. Solche Environments sind Aroma und Tiramisu.

Setup-Module sind kleine Teile von Homebrew/Code, die einmal ausgeführt werden, um ein Environment einzurichten.

## Wie man den Update-Ordner löscht, um Updates auf Wii U zu blockieren

Wenn du den Update-Ordner löschen möchtest, um Updates zu blockieren, schau dir die [Anleitung für Blockieren von Updates](block-updates) an.

## Welche SD-Kartengröße wird empfohlen?

- **Installation von Spiel-Backups:** 32GB (Kleinere Größen kann verwendet werden, aber bestimmte Titel sind 20GB groß)
- **Spiele-Mods ausführen:** 8GB (FAT32 USB-Laufwerk kann auch für Mods verwendet werden)
- **Nur Homebrew-Apps ausführen:** Jede Größe.

**Empfohlene Marken:** SanDisk, Samsung oder PNY

::: tip

Hinweis: Vermeide Class 4 SD-Karten, und vermeide eBay!

:::

## Kann ich Homebrew auf Wii U mit USB statt SD-Karte installieren?

Nein, für die Ersteinrichtung benötigst du eine SD-Karte. Ein USB kann dann verwendet werden, um Backups, Virtual Console-Injects, usw. zu installieren, jedoch nicht zum Speichern von Homebrew-Anwendungen, die zum Einrichten von allem erforderlich sind.

## Beim Extrahieren von manchen Dateien sind Duplikate von „info.json“ & „manifest.install“ enthalten, was mache ich mit diesen?

Nichts Besonderes. Du kannst sie entweder dort lassen, sie löschen oder durch neue ersetzen. Diese Dateien werden während des Prozesses nicht benötigt. Daher ist es egal, ob sie vorhanden sind oder nicht.

## Was ist ein Wii U-formatiertes USB-Laufwerk?

Es ist ein USB-Laufwerk, das von einer Wii U-Konsole in seinem proprietären Format formatiert wurde.

Ein Wii U-formatiertes USB-Laufwerk _**kann von keinem anderen Gerät als der Wii U gelesen werden, die es ursprünglich formatiert hat.**_

Wenn du es jemals mit einer anderen Wii U-Konsole oder einem anderen Gerät verwenden möchtest, musst du es neu formatieren.
