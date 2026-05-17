# Az Indexiine eltávolítása

Ez az oldal végigvezet a Indexiine Wii U-dról eltávolításán.

## Mire van szükséged

- A [Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/v1.5) legutolsó kiadása. (A `homebrew_launcher.v1.5.zip` fájl)
- A [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/latest) legutolsó kiadása. (A `payload.zip` fájl)
- Az [Indexiine Installer](https://github.com/GaryOderNichts/indexiine-installer/releases/latest). (Az `indexiine-installer.zip` fájl)
- Az alapértelmezett [index.html fájl](/files/backup-index.html){download}. (Egy `backup-index.html` navű fájlt kapsz.)

## Az SD kártya beállítása

Először is legyél biztos abban, hogy az SD kártyád FAT32-re formázott. Ezt meg tudod csinálni a [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm)-tal.

1. Csomagold ki a tartalmát a `homebrew_launcher.v1.5.zip`-nek az SD kártyád gyökerébe.
2. Csomagold ki a tartalmát a `indexiine-installer.zip`-nek az SD kártyád gyökerébe.
3. Csomagold ki a `payload.elf` fájlt a `payload.zip` fájlból a `wiiu` mappába az SD kártyádon.
4. Másold a `backup-index.html` fájlt az `SD > wiiu > apps > indexiine-installer` mappába az SD kártyádon.

Most már kiadhatod az SD kártyát és visszarakhatod a konzolodba.

## Lépések

1. Indítsd el a Homebrew Launcher-t az internet browser indításával és várj néhány másodpercet.
2. Indítsd el az Indexiine-Installer-t.
3. Nyomj B gombot az Indexiine eltávolításához.
4. Indítsd újra a konzolod és ellenőrizd, hogy a Wii U nem indítja automatikusan belépéskor a Homebrew Launcher-t ha megnyitod az Internet böngészőt.
