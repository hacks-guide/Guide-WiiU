# Wii U-Discs dumpen

Deine Discs zu dumpen erlaubt dir eine Kopie des Spiels auf deinen Systemspeicher oder auf ein USB-Gerät zu installieren, damit du es ohne Disc spielen kannst.

::: tip

Dumping and installing games requires a working Homebrew setup, so make sure to finish the main guide on installing CFW first before following this.

:::

::: danger

Es ist **ILLEGAL** die gedumpten Dateien mit dieser Anleitung zu teilen.

Wenn du diese Anleitung nutzen willst, um deine gedumpten Spiele zu teilen, tu es nicht.

:::

## Wii U-Discs dumpen und installieren

::: tip

Einen Spiel in den Systemspeicher (NAND) zu installieren wird nicht empfohlen, da es je nach Modell auf 8GB oder 32GB begrenzt ist, und der Speicher dir ziemlich schnell ausgehen wird, wenn du mehrere Spiele installieren möchtest.

:::

::: tip

Bei der Installation eines Spiels auf einem USB-Gerät empfehlen wir, dass du eine Festplatte und kein Flash-Laufwerk verwendest, da diese nicht für ständiges Lesen und Schreiben optimiert sind und daher schnell scheitern. Wenn deine Festplatte nicht extern mit Strom versorgt wird, brauchst du ein Y-Kabel, um sie an zwei USB-Steckplätze der Wii U zu verbinden.

:::

::: danger

Um auf ein USB-Gerät zu installieren, muss es von der Wii U formatiert werden. Dies löscht alle Inhalte (Dokumente, Bilder, Videos, PC-Daten) aus und kann nicht mehr auf einem anderen System verwendet werden, bis du es erneut formatierst. Hierzu gehört _auch_ die vWii, was bedeutet, dass du keine Wii und GameCube Disc Images von der USB mit USB-Loadern ausführen kannst. Um sie zu formatieren, stecke deine USB-Festplatte in die Wii U und schalte sie ein. Die Wii U wird dich zum Formatieren deiner Festplatte auffordern. Bestätige das mit "Ja".

:::

### Was du brauchst

- Deine SD-Karte muss genügend Platz für das Spiel haben, das du dumpen willst.
- Wenn du es auf deinen USB installieren möchtest, eine USB-Festplatte (+ ein Y-Kabel, wenn benötigt).
- Die neueste Version von [WUP Installer GX2](https://wiiu.cdn.fortheusers.org/zips/wup_installer_gx2_wuhb.zip).
- Die [wudd](https://wiiu.cdn.fortheusers.org/zips/wudd.zip) Homebrew-Anwendung.

### Anleitung

1. Kopiere den Inhalt der `wup_installer_gx2_wuhb.zip` Datei in das Stammverzeichnis deiner SD-Karte.
2. Kopiere den Inhalt der gerade heruntergeladenen wudd `.zip` Datei in das Stammverzeichnis deiner SD-Karte.
3. Entferne deine SD-Karte von deinem PC und stecke diese in deine Wii U ein.
4. Schalte deine Wii U ein und starte Aroma.
5. Starte in das Wii U-Menü und öffne die wudd App.
6. Wähle `Dump partition as .app` aus.
7. Wähle die `Game` Partition, um mit dem Dumpen zu beginnen.
8. Wenn fertig, beende wudd und gehe zurück in das Wii U-Menü.
9. Stecke die SD-Karte in deinen Computer.
10. Kopiere den `GMXXXXXXXXXXXXXXXXXXXX` Ordner von `sd:/wudump/WUP-X-XXXX` in den `install` Ordner im Stammverzeichnis deiner SD-Karte.
    - WUDD erstellt standardmäßig keinen Installationsordner. Du müsstest ihn erstellen.
11. Werfe die SD-Karte aus und stecke sie in deine Wii U.
12. Öffne das Wii U-Menü und dann die WUP Installer GX2 App.
13. Wähle dein Spiel (`GMXXXXXXXXXXXXXXXXXXXXXX`), drücke `Install` und bestätige es mit `Yes`.
14. Wähle 'USB', um auf USB zu installieren und 'NAND' um auf NAND zu installieren
15. Verlasse den WUP Installer GX2 in das Wii U-Menü.
16. Dein Spiel sollte nun installiert, und bereit zum Spielen sein.
17. Nimm deine SD-Karte aus deiner Wii U und stecke sie in deinen PC.
18. Lösche den `GMXXXXXXXXXXXXXXXXXXXXXX` Ordner im `install` Verzeichnis auf deiner SD-Karte, um Speicherplatz freizugeben.

## Spiele auf USB verschieben

::: tip

Wenn du das Spiel nicht auf NAND installiert lassen möchtest, kannst du die Datenverwaltung der Wii U verwenden, um das Spiel auf ein USB-Gerät zu verschieben.

:::

::: danger

Um dein Spiel auf ein USB-Gerät zu verschieben, muss es von der Wii U formatiert werden. Dies löscht alle Inhalte aus und kann nicht mehr auf einem anderen System verwendet werden, bis du es erneut formatierst.

:::

1. Schließe dein USB-Gerät an die Wii U an.
2. Schalte die Wii U ein.
3. Deine Wii U wird dich auffordern, dein USB-Gerät zu formatieren. Bestätige das mit "Ja".
4. Öffne die Wii U-Systemeinstellungen.
5. Navigiere zu `Datenverwaltung > Daten kopieren/verschieben/löschen > Speicher der Wii U-Konsole > Daten kopieren/verschieben (X)`
6. Wähle das Spiel aus und verschiebe alle Daten (einschließlich Updates und DLC, falls welche installiert sind) auf dein USB-Gerät.

## Updates auf USB verschieben

::: tip

Wenn dein Disc-Spiel DLC oder Updates installiert hatte, musst du die Dateien auf dein USB-Gerät übertragen. Du kannst dies über die Datenverwaltung der Wii U tun.

:::

1. Schalte deine Wii U ein
2. Öffne die Wii U-Systemeinstellungen.
3. Navigiere zu `Datenverwaltung > Daten kopieren/verschieben/löschen > Speicher der Wii U-Konsole > Daten kopieren/verschieben (X)`.
4. Wähle dein Spiel aus und verschiebe die Update- und DLC-Daten auf das USB-Gerät.
