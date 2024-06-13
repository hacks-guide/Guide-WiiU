# Gyakori hibák & javításuk {docsify-ignore-all}
---
### Haxchi gyakori hibák

 - **-3:** SD kártya nem érzékelt. Csatlakoztad újra az SD kártyát és próbáld újra. Legyél biztos abban, hogy az SD kártya FAT32-re formázott. Ha a probléma tartós, próbálj belefújni az SD slotba, mert koszossá válhat.

 - **-4:** Az SD kártya érzékelt, de nem csatolható. Ellenőrizd, hogy az SD kártya MBR-t használ-e nem GPT-t. Továbbá ellenőrizd, hogy vannak e más partíciók az SD kártyán és mergeld őket egy nagy elsődleges partícióvá.

 - **-5:** Hiányzó fájlok az SD kártyán. Ellenőrizd, hogy az SD kártyád tartalmaz-e Homebrew Launcher-t itt: <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher<wbr>/homebrew_launcher.elf</code>.

### Böngésző hibák

 - **FSGetMountSource failed:** Ugyanaz, mint fentebb a -3-as, azaz nem sikerült SD kártyát detektálni. Csatlakoztad újra az SD kártyát és próbáld újra. Ez jelentheti az is, hogy az SD kártya zárolt (a tolóka lent van a fenti állapot helyett) vagy az SD kártya neve (label) "WIIU" amit a korábban az útmutató is jelzett, hogy problémát okoz. Ha ezek egyike sem, akkor ppróbáld meg az utolsó javaslatot a -3-ból.

 - **FSOpenFile failed [...] payload.elf:** Az SD kártyáról hiányzik a payload fájl. Ellenőrizd, hogy a payload.elf megtalálható-e a wiiu mappában, és a wiuu mappa a gyökérben van.

 - **FSOpenFile failed:** Az SD kártyáról hiányzik a `homebrew_launcher`. Ellenőrizd, hogy a `homebrew_launcher.elf` megtalálható-e a <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher</code> mappában.

 - **SD Mount Failed:** Hasonló a -4-eshez, a konzol érzékeli az SD kártyád, de nem tudja csatolni azt. Legyél biztos abban, hogy megfelelően formázott és nem sérült. Továbbá az SD kártyád jobban kompatibilis megbízható márkákkal (pl. SanDisk, Samsung, Lexar, stb.) és kevésbé van problémájuk.

### A data management kéri, hogy töröljük a felesleges adatot, mit jelent ez?

Ez a befejezetlen telepítésekből visszamaradt fájlokra utal. Mindig válaszd a Yes lehetőséget ezen adatok törléséhez, mivel azok ok nélkül foglalják a helyet. Ha egyszer végtelen ciklusban megakadsz az adatok törlésénél, akkor kézzel is törölheted az adatokat.  
Használd az FTPiiU Everywhere-t, és keresd meg a `/storage_mlc/usr/import` mappát, majd töröld a mappában lévő fájlokat, ha vannak ilyenek. Itt találhatók a részleges telepítések fájljai a sikertelen telepítések után. Ez a `/storage_usb/usr/import` mappa, ha USB-re telepítetted.  
Az `import` mappát mindig üresen kell tartani.

### A merevlemezem nem működik, vagy furcsa kattogó hangot ad ki, mit tegyek?

Ennek oka, hogy a Wii U nem ad elég energiát egy USB porton keresztül a merevlemez használatához.

Ezt úgy tudod orvosolni, hogy vagy egy külső tápellátású HDD-t használsz, vagy egy Y-kábellel csatlakoztatod a HDD-t a két USB-porthoz.

Ha a HDD egy ideig működött, majd egyes játékoknál/az összes játéknál leállt, ez ugyanaz a probléma, és ugyanazokkal a módszerekkel javítható.

### Amikor néhány fájlt kicsomagolok, néhány fájlnak van duplikáltja ("info.json" & "manifest.install"), mit csináljak ezekkel?

Semmi különöset, hagy őket ott, töröld őket, vagy is felül az újakkal. Ezek a fájlok nem használtak a folyamatban, így nem számít, hogy ott vannak-e vagy sem.

### A konzolom elvesztette az online kapcsolatot és van egy HDD-m a tetején a konzolnak, mit tehetek?

A belső antennát befolyásolhatja a mervlemez mágnese.  
Máshova is mozgathatod a HDD-t mint a Wuii teteje, vagy mozgasd arréb a Wii U-tól teljesen.
