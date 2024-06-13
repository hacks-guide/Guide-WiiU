# Konfigurálható Payload
---
A payload konfigurálható, hasonlóan a Haxchi konfigurációjához. Ez nagyon hasznos lehet a Mocha felhasználók számára, mivel egy kis időt takarít meg a Mocha elindításával a Homebrew Launcher-en keresztül.

### Amire szükséged van {docsify-ignore}

- A <a href="docs/files/Configurable_Payload.zip" download>konfigurálható payload</a>.
- A [The Homebrew Launcher Channel](https://github.com/GaryOderNichts/homebrew_launcher/releases/tag/v2.1_fix) legutolsó kiadása.

### Lépések {docsify-ignore}

1. Csomagold ki a `homebrew_launcher_channel.v2.1_fix.zip` fájlt az az SD-kártya gyökerében található `install` mappába.
1. Helyezd az SD kártyát a Wii U-ba, és indítsd el a [Homebrew Launcher](mocha/online-exploit/browser-exploit) programot.
1. Navigálj a Homebrew Launcherben és indítsd el a WUP Installer GX2 alkalmazást.
1. Válaszd ki a `Homebrew Launcher Channel` csatornát. Nyomd meg `Install` gombot, és telepítsd a NAND-ra, mint telepítési célra. Ez telepíti a Homebrew Launcher Channel-t a Wii U Menu-be.
1. Ha a folyamat befejeződött, nyomd a HOME gombot addig, amíg vissza nem térsz a Wii U Menu-be.
1. Ekkor még a csatorna nem fog elindulni, mivel ütközik az SD kártyán futó verzióval, amit az előbb használtál. Indítsd újra a Wii U-t.
1. Vedd ki az SD kártyát Wii U-dból és csatlakoztasd a számítógépedhez.
1. Csomagold ki a `Configurable_Payload.zip` fájlt az SD kártyád gyökerébe. Ha a program arra kér, hogy írd felül az SD-kártyán lévő fájlokat, akkor tedd meg.
1. Helyezd be az SD kártyát a Wii U-dba, indítsd el az internetböngészőt, és navigálj a `wiiuexploit.xyz` weboldalra.
1. Kattints a `Run Homebrew Launcher!` gombra. Ha mindent helyesen csináltál, akkor vissza kell térned a Wii U Menu-be. A Mocha most már engedélyezve van, és használhatod a korábban telepített Homebrew Launcher Channel csatornát.
    - Ha a Wii U-d megakad egy fehér vagy más módon lefagyott képernyőn, várj néhány másodpercet. Ha semmi sem történik, indítsd újra a konzolt, [állítsd alaphelyzetbe a böngésző mentési adatait](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1507/~/how-to-delete-the-internet-browser-history), és próbáld meg újra.
