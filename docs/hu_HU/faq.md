# Gyakran isméltelt kérdések

## Van-e kockázata a homebrew-nak?

Jelenleg a homebrew használata Wii U-n nem jelent bannolási kockázatot, amíg nem csalsz az online játékokban és nem követsz el eShop csalást. Azonban mindig legyél elővigyázatos a letöltött homebrew-ok indításával, különösen ha nem bízol meg a forrásban, mert egy homebrew elronthatja a rendszered!

## Mik az exploit-ok?

Az exploit-ok olyan belépési pontok, amik lehetővé teszik továbi homebrew-ok futtatását. A fő útmutatóban olyan expliotokat fogsz használni, mint a böngésző exploit (http://wiiuexploit.xyz) és a PayloadLoader (Health & Safety exploit). Minden aktuális current exploits betölti az `SD:/wiiu/payload.elf` fájlt, ami átveszi a további betöltését a homebrew-nak.

## Mi a payload?

A `payload.elf` fájlnévvel általában megtalálható payload-ok azért léteznek, hogy megkönnyítsék azt, hogy a különböző exploitok ugyanazt a következő szakaszt töltsék be, ami megkönnyíti a frissíthetőséget. Nem számít, hogy milyen exploit tölti be a payload-ot, az eredmény mindig ugyanaz.

A PayloadLoaderPayload segítségével több payload között lehet váltani.

A fő útmutatóban használt payload a CustomRPXLoader, amely az `SD:/wiiu/payload.rpx`-et tölti be, az EnvironmentLoader útmutatóban pedig `payload.rpx` használt, ami lehetővé teszi a különböző környezetek betöltését.

## Mik azok a környezetek?

Egy környezet a "beállítási modulok" gyűjteménye, amelyek a környezet indításakor egy bizonyos sorrendben futnak le. Ilyen környezetek az Aroma és a Tiramisu.

A telepítőmodulok kis házi készítésű kódrészletek, amelyek egyszer kerülnek végrehajtásra a környezet beállításához.

## Hogyan lehet törölni a frissítési mappát a frissítések blokkolásához a Wii U-n

Ha a frissítések blokkolásához törölni szeretné a frissítési mappát, tekintse meg a [Frissítések blokkolása útmutatóban](block-updates) található fület.

## Milyen SD kártya méret ajánlott?

- **Játék mentések telepítésére:** 32GB (Kisebb méret használhat, azonban egyes címek mérete 20GB)
- **Játék mod-ok futtatása:** 8GB (FAT32 USB drive használható még a mod-okhoz)
- **Csak homebrew alkalmazások futtatása:** Bármilyen méret.

**Ajánlott márkák:** SanDisk, Samsung vagy PNY

::: tip

Megjegyzés: Óvakodj a class 4 SD kártyáktól és az eBay-től!

:::

## Tudok telepíteni homebrew-t Wii U-ra egy USB-vel az SD kártya helyett?

Nem, szükséged van egy SD kártyára az első beállításhoz. Az USB ezután használható játékmentések, Virtual Console injektálástok, stb. telepítéséhez, de nem arra, hogy olyan homebrew alkalmazásokat tároljanak, amit telepíteni kell.

## Amikor néhány fájlt kicsomagolok, néhány fájlnak van duplikáltja, amit "info.json" & "manifest.install"-nak hívnak, mit csináljak ezekkel?

Semmi különöset, hagy őket ott, töröld őket, vagy is felül az újakkal. Ezek a fájlok nem használtak a folyamatban, így nem számít, hogy ott vannak-e vagy sem.

## Milyen egy Wii U formázott USD drive?

Ez egy USB drive ami Wii U konzol saját formátumára formázott.

Egy Wii U formázott USB drive _**nem olvasható más eszközzel mind azzal a Wii U-val, amelyik eredetileg formázta azt.**_

Ha szeretnéd valamikor használni egy másik Wii U konzolban, vagy más eszközben, akkor újra kell formáznod.
