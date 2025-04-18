# Updates zulassen

Dies wird benötigt, wenn du jemals ein System-Update durchführen musst.

::: tip

Wenn du Aroma verwendest und den Update-Ordner gelöscht hast, musst du sowohl das Autobooten deaktivieren als auch den Update-Ordner neu erstellen.

:::

::: tip

Nutzer mit ISFShax müssen mindestens v4 des `wafel_isfshax_patch.ipx`/`5isfshax.ipx` stroopwafel Plugins auf der SD-Karte oder SLC haben, um zu aktualisieren.

:::

## Anleitung

::::: tabs

:::: tab default Update-Ordner wiederherstellen

### Update-Ordner wiederherstellen

1. Stelle sicher, dass du die neueste Aroma-Beta hast.
2. Starte Aroma während du + (Plus) hältst.
3. Halte + (Plus) **und** - (Minus), bis es sagt: „Updates not blocked!“.

::::

:::: tab Autobooten von Aroma entfernen

### Autobooten von Aroma entfernen

::: tip

Beim Autobooten in den PayloadLoader werden Updates automatisch blockiert. Folge der Anleitung unten, um ihn zu deaktivieren.

:::

::: tip

Nutzer mit ISFShax müssen die `wafel_payloader.ipx`/`5payldr.ipx` (falls verwendet) von der SD-Karte (`sd:/wiiu/ios_plugins`) oder SLC (`slc:/sys/hax/ios_plugins`) entfernen, um das Autobooten in Aroma zu stoppen.

:::

1. Starte den PayloadLoader Installer aus dem Wii U-Menü.
2. Drücke A, um `Check` auszuwählen.
3. Wähle `Boot options`.
4. Du wirst gefragt, ob du den Boot-Titel wechseln möchtest. Drücke A, um `Switch back to Wii U Menu` auszuwählen.
5. Wenn der Vorgang abgeschlossen ist, drücke A, um die Konsole herunterzufahren.
6. Führe das System-Update aus.
7. Folge [dies](aroma/autobooting), um das Autobooten wieder zu aktivieren.

::::

:::: tab DNS-Blockade entfernen

### DNS-Blockade entfernen

1. Öffne die Systemeinstellungen der Wii U und navigiere zu ‎ ‎
  `Internet > Internetverbindung einrichten > Verbindungsübersicht >`
  `Deine WLAN-Verbindung > Einstellungen ändern > DNS` und setze die Option auf `Automatisch beziehen`.
2. Du blockierst keine System-Updates mehr.

::::

:::::
