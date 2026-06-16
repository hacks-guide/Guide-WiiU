---
prev: true
next: true
---

# SD-Vorbereitung

Wir werden nun die benötigten Aroma-Dateien auf die SD-Karte platzieren.

::: warning

Deine SD-Karte muss als FAT32 formatiert werden. If your SD Card is not formatted to FAT32, use [GUIFormat](https://nintendohomebrew.com/guiformat) with 32k (32768) allocation unit size to format it.  
Nenne die SD-Karte **nicht** `wiiu` oder sie wird Probleme mit Homebrew verursachen.

:::

## Anleitung

1. Scrolle auf der [Aroma](https://aroma.foryour.cafe) Seite unten zum **Download** Abschnitt.
   - Lies die Schritte durch und klicke auf die Kontrollkästchen.
     ![](/assets/img/guide/Aroma_Box.png)
   - Klicke auf `Download Payloads` und `Download Base Aroma`.
     ![](/assets/img/guide/Aroma_DL.png)
2. Stecke die SD-Karte deiner Wii U in deinen PC ein.
3. **Extrahiere** und kopiere den `wiiu` Ordner der beiden gerade heruntergeladenen _`.zip`_ Dateien in das Stammverzeichnis deiner SD-Karte.
   - Die `wiiu` Ordner sollten zusammengeführt werden, falls dies nicht automatisch geschieht.

::: tip

Wenn dein Computer dich fragt, existierende Dateien auf deiner SD-Karte zu überschreiben, musst du auf Ja klicken.

:::

::: tip

If you're on a Mac machine, extract the second zip in a second finder window and drag the contents into the first window with the first zip's contents. Then when prompted, select `Merge` instead of replace. Wenn die Merge-Option nicht sofort angezeigt wird, drücke und halte die `Option`-Taste, während du Dateien in das Stammverzeichnis verschiebst.

:::

----------

Extrahieren des Inhalts der Zip-Datei in das Stammverzeichnis wird so gemacht.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto;">
  <video style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" controls muted>
    <source src="/assets/img/guide/SD_Prep.mp4" type="video/mp4">
    
    Dein Browser unterstützt den Video-Anhänger nicht.
  </video>
</div>

## SD-Karten-Layout

:::details Drücke hier, um das endgültige SD-Karten-Layout anzuzeigen.

```
💾sd:
 ┗ 📂wiiu
   ┣ 📂apps
   ┃ ┣ 📂AromaUpdater
   ┃ ┃ ┗📜AromaUpdater.wuhb
   ┃ ┣ 📜PayloadLoaderInstaller.wuhb
   ┃ ┗ (Alle anderen Apps solllten auch hier sein)
   ┣ 📂environments
   ┃ ┗ 📂aroma
   ┃   ┣ 📂modules
   ┃   ┃ ┣ 📂setup
   ┃   ┃ ┃ ┣ 📜00_mocha.rpx
   ┃   ┃ ┃ ┣ 📜10_wums_loader.rpx
   ┃   ┃ ┃ ┗ 📜99_autoboot.rpx
   ┃   ┃ ┗ (Alle anderen Aroma-Modulen, die mit .wms enden, sollten auch hier sein)
   ┃   ┣ 📂plugins
   ┃   ┃ ┣ 📜AromaBasePlugin.wps
   ┃   ┃ ┣ 📜drc_region_free.wps
   ┃   ┃ ┣ 📜homebrew_on_menu.wps
   ┃   ┃ ┣ 📜regionfree.wps
   ┃   ┃ ┗ (Alle anderen Aroma-Plugins, die mit .wps enden, sollten auch hier sein)
   ┃   ┗ 📜root.rpx
   ┣ 📂payloads
   ┃ ┣ 📂default
   ┃ ┃ ┗ 📜payload.elf
   ┃ ┗ 📂nanddumper
   ┃   ┗ 📜payload.elf
   ┣ 📜payload.rpx
   ┗ 📜payload.elf
```

:::

::: tip

Wenn du bereits den PayloadLoader installiert hast, kannst du direkt zu [Setup fertigstellen](./finalizing-setup.md) gehen

:::
