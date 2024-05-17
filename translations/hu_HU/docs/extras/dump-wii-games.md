# Wii lemezek dumpolása
---
A lemezek dumpolása lehetővé teszi, hogy: lejátszd őket egy Wii emulátoron (nevezetesen a Dolphin-on), lejátszd őket egy USB/SD kártya betöltővel, például a Wiiflow-val, Virtual Console injektálásokat készíts, amelyeket egy Wii U formázott USB meghajtóra vagy a NAND-ra lehet telepíteni, és a Wii U menüjéből indítani.

?> A Wii-játékok dumpingolásához a vWii-n működő homebrew beállításokra van szükség, ezért előtte mindenképpen fejezd be a [vWii Modding útmutatót](vwii/sd-preparation).

!> Az ezzel az útmutatóval lementett fájlok megosztása **ILLEGÁLIS**.  
Ha ezt az útmutatót arra akarod használni, hogy megoszd a dumpolt játékaidat, ne tedd.

### Amire szükséged van {docsify-ignore}

1. A [CleanRip](https://github.com/emukidid/cleanrip/releases/download/2.1.1/CleanRip-v2.1.1.zip) legutolsó kiadása.
1. A [wii.dat](https://github.com/emukidid/cleanrip/releases/download/2.1.1/wii.dat) fájl.

### Lépések {docsify-ignore}

1. Helyezd be a Wii U-d SD kártyáját a PC-dbe.
1. Másold az `apps` mappát a `CleanRip-v2.1.1.zip` fájlból az SD kártyád gyökerébe.
1. Másold a `wii.dat` fájl tartalmát az SD kártyád gyökerébe.
1. Vedd ki az SD kártyát a számítógépedből, és dugd be a Wii U konzolodba.

### A lemez dumpolása

1. Kapcsold be a Wii U-dat, majd válaszd a Wii Menu ikont, hogy a vWii-be bootolj.
1. Indítsd el a Homebrew Channel-t.
1. Indítsd el CleanRip-et.
1. Olvasd el a felelősségi nyilatkozatot, majd nyomj A gombot.
1. Válaszolj Yes-t, hogy bekapcsolat a Checksum Calculations-t (ellenőrző összeg számítást).
1. Válasz vagy az USB-t vagy Front SD-t (első SD kártyát) attól függően, hogy melyik eszközt használnád a dumpolási folyamathoz.
    - Fontos, megjegyezni, hogy az eszköznek, amit kiválasztasz, FAT32 vagy NTFS fájlrendszerve kell formázva lennie.
1. Nyomj A gombot a folytatáshoz.
1. Válassz No-t azon a képernypn, ahol rákérdez redump.org DAT fájlok letöltésére.
1. Helyezd be a lemezed, majd nyomj A gombot.
1. Menj [erre az oldalra](https://wiki.dolphin-emu.org/index.php?title=Category:Dual_Layer_Disc_games), hogy megtudd kétrétegű-e a lemezed.
1. Állíts be mindent úgy, hogy egyezzen a következőkkel:
    - Dual Layer: `Yes/No` (Válaszd a `Yes`-t a a játéklemezed dual-layer-es)
    - Chunk Size: `Max`
    - New device per chunk: `No`
1. Ha több lemezt is szeretnél dumpolni válaszd a Yes-t, hogy megjegyeze a beállításaid. Ha nem, válassz No-t.

?> Készülj fel rá, hogy egy darabig várni kell. A dumpolási folyamat 30 és 1 óra közötti ideig tart, függően az SD kártyád sebességétől.

### Darabolt fájlok összefűzése

?> Ha lemezt egy FAT32 eszközre dumpoltad, legalább 2 fájlodnak kell lennie ami `.partX.iso`-ra végződik. Össze kell fűzni őket.

#### Windows {docsify-ignore}

1. Másold az összes egyező nevő és `.partX.iso` végű fájlt egy mappába számítőgépeden.
1. Kattints jobb gombbal a mappába a Shift nyomva tartása és válaszd `A PowerShell-ablak megnyitása itt` opciót.
1. A PowerShell ablakban futtasd a következő parancsot: `cmd.exe /c "copy /b *.part?.iso game.iso"`.

#### macOS/Linux {docsify-ignore}

1. Másold az összes egyező nevő és `.partX.iso` végű fájlt egy mappába számítőgépeden.
1. Nyisd meg a Terminal-t.
1. Használd a `cd <path>` parancsot, de cseréld ki benne az `<path>` útvonalat a saját útvonaladra a `.partX.iso` fájljaidhoz.
1. Használd a következő parancsot: `cat *.part?.iso > game.iso`.
