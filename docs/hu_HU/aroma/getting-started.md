---
next: true
---

# Aroma

Az Aroma egy fejlesztés alatt álló környezet a Tiramisu utódja.

## Mi az Aroma?

Az Aroma egy környezet mint a Tiramisu, ami bootolható az Environment Loader-en keresztül.\
Az Aroma, akár a Tiramisu, ugyanazt Mocha verziót használja, támogatja a telepítő modulokat és az Autoboot Module-lal érkezik, ami tartalmazza a boot selector-t Quick Start támogatást.\
Az Aroma jópár további szolgáltatással érkezik, mint a plugin rendszer, a homebrew-ok indításának új módja, valamint számos beépített modul és plugin (pl. régió felszabadító patchek).

## Mit tudok az Aromával csinálni?

Részletesebb áttekintéshez tekintsd meg [ezt a blogpost-ot](https://maschell.github.io/homebrew/2022/09/05/aroma.html). Egy gyors összefoglaló alább.

### Modulok

Az Aroma támogatja a modulokat, amik a telepítő moduloktól eltérően folyamatosan futnak a háttérben.\
Ez lehetővé teszi a további bővítését a a konzol funkcionalitásának.

### Plugin-ek

A pluginek hasonlóak a modulokhoz, a háttérben futnak.\
Megváltoztathatják a konzol élményét azzal, hogy módosítanak meglévő vagy biztosítanak új szolgáltatásokat.\
A pluginek beállíthatók a konfigurációs menüben, ami megnyithat egy gomb kombinációval.

### Wii U Homebrew Bundle-ök

A Wii U Homebrew Bundles (WUHB) egy új módja a homebrew-ok indításának.\
Ezek a `.wuhb` fájlok tartalmazzák a fő futtatható állományt és közvetlenül tartalmazzhatják az ikon és banner képeket, és további tartalmakat.\
A `homebrew_on_menu` plugin-nel a WUHB fájlok közvetlenül indíthatók a Wii U menüből, mint a hivatalos csatornák.

## Mik a korlátozások?

Technikai korlátozások miatt jópár régi homebrew applikáció nem működik Aromával.\
Ebbe beleértendő minden `.elf` homebrew, de néhány `.rpx` homebrew is (pl. RetroArch), ami nem implementál szükséges funkcionalitást megfelelően.\
Ezeket a homebrew-okat frissíteni kell Aroma támogatással. Régi homebrew futtatásához be kell bootolnod a Tiramisu környezetbe.\
A homebrewok indítása a most már kiöregedett Homebrew Launcher-rel már nem lehetséges Aromával.

A fent említett korlátozások mellett, érdemes megjegyezni, hogy az Aroma még mindig csak béta kiadás. Nem mindent tesztelt még, és tovább problémák még előkerülhetnek. Ez nem jelenti azt, hogy az Aroma instabil, de van rá esély, hogy azt tapasztalod, hogy valami nem megfelelően működik.
