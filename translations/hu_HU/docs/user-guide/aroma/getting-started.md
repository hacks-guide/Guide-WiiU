# Aroma {docsify-ignore-all}

Az Aroma egy fejlesztés alatt álló környezet a Tiramisu utódja.

### Mi az Aroma?

Az Aroma a Tiramisuhoz hasonló környezet, amely a Environment Loader segítségével indítható.  
Az Aroma, akárcsak a Tiramisu, ugyanazt a Mocha verziót használja, támogatja a telepítőmodulokat, és tartalmazza az Autoboot modult, amely tartalmazza a boot választó és a gyorsindítás támogatását.  
Az Aroma számos további funkcióval rendelkezik, beleértve a plugin rendszert és a homebrews-ok indításának új módját és sok beépített modult és plugint (pl. régió felszabadító patchek).

### Mit tudok az Aromával csinálni?

Részletesebb áttekintésért tekintsd meg [ezt a blogpostot](https://maschell.github.io/homebrew/2022/09/05/aroma.html). Egy gyors összefoglaló alább.

#### Modulok

Az Aroma támogatja a modulokat, amelyek a beállítási modulokkal ellentétben mindig a háttérben futnak.  
Ez lehetővé teszi a konzol funkcionalitásának további bővítését.

#### Plugin-ek

A pluginok a modulokhoz hasonlóan szintén a háttérben futnak.  
Ezek a konzol élményét növelhetik a konzol megváltoztatásával és további funkciók biztosításával.  
A pluginok egy konfigurációs menü segítségével konfigurálhatók, amely egy gombkombinációval nyitható meg.

#### Wii U Homebrew Bundle-ök

A Wii U Homebrew Bundles (WUHB) a homebrew indításának új módja.  
Ezek a `.wuhb` fájlok tartalmazzák a fő futtatható fájlt, és közvetlenül tartalmazhatnak ikon- és bannerképeket, valamint további tartalmakat.  
A `homebrew_on_menu` pluginnel a WUHB fájlok közvetlenül a Wii U menüjéből indíthatók, akárcsak a hivatalos csatornák.

### Mik a korlátozások?

Technikai korlátozások miatt sok régi homebrew alkalmazás már nem fog működni az Aromával.  
Ez vonatkozik az összes `.elf` homebrew-ra, de néhány `.rpx` homebrew-ra is (pl. RetroArch), amelyek nem valósítják meg megfelelően a szükséges funkciókat.  
Ezeket a homebrew programokat frissíteni kell az Aroma támogatásával. A régi homebrew-ok futtatásához a Tiramisu környezetet kell elindítani.  
A homebrew-ok indítása a már elavult Homebrew Launcher segítségével már nem lehetséges az Aroma segítségével.

A fent említett korlátozások mellett, érdemes megjegyezni, hogy az Aroma még mindig csak béta kiadás. Nem mindent tesztelt még, és tovább problémák még előkerülhetnek. Ez nem jelenti azt, hogy az Aroma instabil, de van rá esély, hogy azt tapasztalod, hogy valami nem megfelelően működik.
