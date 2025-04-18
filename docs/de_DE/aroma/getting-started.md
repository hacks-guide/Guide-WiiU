---
next: true
---

# Aroma

Aroma ist ein Environment, welches sich noch in Arbeit befindet, und der Nachfolger von Tiramisu.

## Was ist Aroma?

Aroma ist ein Environment wie Tiramisu, welches durch den Environment Loader gestartet werden kann.\
Aroma, genau wie Tiramisu, verwendet dieselbe Mocha Version, Unterstützung für Setup-Module, und kommt mit dem Autoboot Modul, welches den Boot-Selector und Unterstützung für den Schnellstart-Bildschirm enthält.\
Aroma verfügt über mehrere zusätzliche Funktionen, darunter ein Plugin-System, ein neuer Weg Homebrew zu starten, und viele integrierte Module und Plugins (darunter Region-Free Patches).

## Was kann ich mit Aroma machen?

Eine detaillierte Übersicht findest du auf [diesem Blogpost](https://maschell.github.io/homebrew/2022/09/05/aroma.html). Eine kurze Zusammenfassung findest du unten.

### Module

Aroma unterstützt Module, die im Gegensatz zu Setup-Modulen immer im Hintergrund laufen.\
Dies ermöglicht eine weitere Erweiterung der Funktionalität der Konsole.

### Plugins

Plugins, ähnlich wie Module, laufen auch im Hintergrund.\
Diese können das Erlebnis der Konsole erweitern, indem sie Funktionen ändern und zusätzliche hinzufügen.\
Plugins können über ein Konfigurationsmenü konfiguriert werden, das mit einer Tastenkombination geöffnet werden kann.

### Wii U Homebrew Bundles

Wii U Homebrew Bundles (WUHB) sind eine neue Art, Homebrew zu starten.\
Diese `.wuhb`-Dateien enthalten die Hauptanwendung und können direkt Icons und Bannerbilder sowie zusätzliche Inhalte enthalten.\
Mit dem `homebrew_on_menu` Plugin können WUHB-Dateien direkt aus dem Wii U Menü gestartet werden, genau wie offizielle Kanäle.

## Was sind die Einschränkungen?

Aufgrund technischer Einschränkungen werden viele alte Homebrew-Anwendungen nicht mehr mit Aroma funktionieren.\
Dazu gehören alle `.elf` Homebrew, aber auch einige `.rpx` Homebrew (z. B. RetroArch), die die notwendige Funktionalität nicht richtig implementieren.\
Diese Homebrew müssen mit Unterstützung für Aroma aktualisiert werden. Um alte Homebrew ausführen zu können, musst du das Tiramisu-Environment starten.\
Das Starten von Homebrew durch den jetzt veralteten Homebrew Launcher ist mit Aroma nicht mehr möglich.

Beachte, dass neben den oben genannten Einschränkungen Aroma noch eine Beta-Version ist. Es wurde noch nicht alles getestet und weitere Probleme könnten entdeckt werden. Dies bedeutet nicht unbedingt, dass Aroma instabil ist, aber es besteht die Wahrscheinlichkeit, dass etwas nicht richtig funktionieren kann.
