# Wiederherstellen eines vWii IOS/Kanals

Diese Seite führt dich durch den Prozess der Wiederherstellung eines IOS oder Kanals auf deiner vWii, falls dieser aus irgendeinem Grund beschädigt oder gelöscht wurde.

::: danger

Dies kann dein vWii NAND zerstören, wenn du nicht vorsichtig bist! Bitte bedenke, deine SLCCMPT und OTP zu [sichern](aroma/nand-backup) falls du diese noch nicht gesichert hast!

:::

::: tip

Wenn du eine System-Update Blockiermethode verwendest, bitte [entferne sie](unblock-updates).

:::

::: tip

Aufgrund von Einbindungskonflikten mit dieser App muss du auch das FTPiiu-Plugin deaktivieren.

:::

## Was du brauchst

- Eine funktionierende [Homebrew Installation](index) auf der Wii U Seite.
- Die neueste Version von [vWii Decaffeinator](https://github.com/GaryOderNichts/vWii-Decaffeinator/releases).

## Anleitung

1. Kopiere den Inhalt der `decaffeinator.zip` Datei in das Stammverzeichnis deiner SD-Karte.
2. Nimm die SD-Karte aus deinem Computer und stecke sie in deine Wii U Konsole.
3. Schalte deine Wii U ein und starte Aroma.
4. Starte vWii Decaffeinator aus dem Wii U-Menü.

## Wiederherstellungsprozess

Dir werden verschiedene Optionen zur Verfügung gestellt. Es wird empfohlen, zuerst durch das Menü `Advanced options` zu versuchen, wenn du weißt, was du wiederherstellen solltest, oder `Light mode`, wenn du dir nicht sicher bist. In Extremfällen, in denen keine andere Option das Problem löst, sollte `Aggressive mode` ausgewählt werden.

<!-- tabs:start -->

::::: tabs

:::: tab default Advanced options

### Advanced options

::: tip

Dieser Modus löscht die angegebenen IOSes und Kanäle, um sie neu zu installieren. Alle anderen Daten (einschließlich cIOS) bleiben erhalten.

:::

:::details Klicke hier, um zu zeigen, was mit dieser Methode wiederhergestellt werden kann.

![Advanced options](/files/Advanced-options.jpg)
![Advanced options2](/files/Advanced-options2.jpg)
![Advanced options3](/files/Advanced-options3.jpg)

:::

1. Wähle `Advanced options` im Menü.
2. Verwende das Steuerkreuz, um umzuschalten, was du wiederherstellen möchtest.
3. Drücke Start, um den Wiederherstellungsprozess zu starten.
4. Wenn die Anwendung beendet ist, erlaube der Anwendung, die Systemeinstellungen zu starten.
5. Führe ein [System-Update](https://www.nintendo.com/de-de/Support/Wii-U/System-Updates/Schritt-fur-Schritt-Beschreibung/Schritt-fur-Schritt-Beschreibung-677452.html) aus, um den Wiederherstellungsprozess abzuschließen.

::: tip

Du kannst nun deine [System-Update Blockiermethode](block-updates) wieder aktivieren.

:::

::::

:::: tab Light mode

### Light mode

::: tip

Dieser Modus leert das Systemmenü, Wii-Pinnwand Speicherdaten, IOSes, und andere Systemtitel, um saubere Versionen neu zu installieren. Bitte beachte, dass dadurch auch alle cIOS entfernt werden und neu installiert werden müssen. Alle anderen Daten bleiben erhalten.

:::

1. Wähle `Light mode` im Menü.
2. Drücke Start, um den Wiederherstellungsprozess zu starten.
3. Wenn die Anwendung beendet ist, erlaube der Anwendung, die Systemeinstellungen zu starten.
4. Führe ein [System-Update](https://www.nintendo.com/de-de/Support/Wii-U/System-Updates/Schritt-fur-Schritt-Beschreibung/Schritt-fur-Schritt-Beschreibung-677452.html) aus, um den Wiederherstellungsprozess abzuschließen.

::: tip

Du kannst nun deine [System-Update Blockiermethode](block-updates) wieder aktivieren.

:::

::: info

Wenn du beim Hochfahren des Systems nach der Verwendung von vWii Decaffeinator den Fehlercode 160-0101 erhältst, nehme die eingelegte Disc heraus, trenne alle externen Laufwerke und starte das System neu.

:::

::::

:::: tab Aggressive mode

### Aggressive mode

::: danger

Dieser Modus wird **alles** löschen, um saubere Versionen der Standard-IOSes und Kanäle neu zu installieren. Bitte beachte, dass alle cIOS, Speicherdaten und Kanäle verloren gehen und der vWii-NAND wieder in seine Ursprungsform zurückgesetzt wird!

:::

1. Wähle den `Aggressive mode` im Menü.
2. Lies die Warnung vollständig durch. Wenn du fortfahren möchtest, drücke Start, um den Wiederherstellungsprozess zu starten.
3. Wenn die Anwendung beendet ist, erlaube der Anwendung, die Systemeinstellungen zu starten.
4. Führe ein [System-Update](https://www.nintendo.com/de-de/Support/Wii-U/System-Updates/Schritt-fur-Schritt-Beschreibung/Schritt-fur-Schritt-Beschreibung-677452.html) aus, um den Wiederherstellungsprozess abzuschließen.

::: tip

Du kannst nun deine [System-Update Blockiermethode](block-updates) wieder aktivieren.

:::

::: info

Wenn du beim Hochfahren des Systems nach der Verwendung von vWii Decaffeinator den Fehlercode 160-0101 erhältst, nehme die eingelegte Disc heraus, trenne alle externen Laufwerke und starte das System neu.

:::

::::

:::::

::: tip

Wenn du beim Ausführen des System-Updates den Fehlercode 105-3102 erhältst, starte deine Konsole neu und versuche das Update erneut.

:::
