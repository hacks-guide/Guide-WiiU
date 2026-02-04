# Gyakori problémák & megoldásuk

## Haxchi gyakori hibák

- **-3:** SD kártya nem érzékelt. Csatlakoztad újra az SD kártyát és próbáld újra. Legyél biztos abban, hogy az SD kártya FAT32-re formázott. Ha a probléma tartós, próbálj belefújni sűrített levegővel az SD slotba, mert koszossá válhat. **Ne fúj az SD kártya slotba a száddal, mert az párát vihet rá, ami KÁROSÍTJA a slot-ot.**

- **-4:** Az SD kártya érzékelt, de nem csatolható. Ellenőrizd, hogy az SD kártya MBR-t használ-e nem GPT-t. Továbbá ellenőrizd, hogy vannak e más partíciók az SD kártyán és mergeld őket egy nagy elsődleges partícióvá.

- **-5:** Hiányzó fájlok az SD kártyán. Ellenőrizd, hogy az SD kártyád tartalmaz-e Homebrew Launcher-t itt: <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher<wbr>/homebrew_launcher.elf</code>.

## Böngésző hibák

- **FSGetMountSource failed:** Ugyanaz, mint fentebb a -3-as, azaz nem sikerült SD kártyát detektálni. Csatlakoztad újra az SD kártyát és próbáld újra. Ez jelentheti az is, hogy az SD kártya zárolt (a tolóka lent van a fenti állapot helyett) vagy az SD kártya neve (label) "WIIU" amit a korábban az útmutató is jelzett, hogy problémát okoz. Ha ezek egyike sem, akkor ppróbáld meg az utolsó javaslatot a -3-ból.

- **FSOpenFile failed [...] payload.elf:** Missing payload file on SD. Ellenőrizd, hogy a payload.elf megtalálható-e a wiiu mappában, és a wiuu mappa a gyökérben van.

- **FSOpenFile failed:** Az SD kártyáról hiányzik a `homebrew_launcher`. Ellenőrizd, hogy a `homebrew_launcher.elf` megtalálható-e a <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher</code> mappában.

- **SD Mount Failed:** Hasonló a -4-eshez, a konzol érzékeli az SD kártyád, de nem tudja csatolni azt. Legyél biztos abban, hogy megfelelően formázott és nem sérült. Továbbá az SD kártyád jobban kompatibilis megbízható márkákkal (pl. SanDisk, Samsung, Lexar, stb.) és kevésbé valószínű, hogy problémája lesz.

## A data management kéri, hogy töröljük a felesleges adatot, mit jelent ez?

Ez a befejezetlen telepítésekből visszamaradt fájlokra utal. Mindig válaszd a Yes lehetőséget ezen adatok törléséhez, mivel azok ok nélkül foglalják a helyet.
Ha megakad az adat törlésében egy végtelen ciklusban, kézzel is törölheted az adatokat magadnak.  
Használj FTPiiU Everywhere és tallóz a `/storage_mlc/usr/import` mappába, majd töröl minden fájlt ami a mappában van. Itt találhatók a részleges telepítések fájljai a sikertelen telepítések után. Ez a `/storage_usb/usr/import` könyvtár, ha USB-re volt telepítve.  
Az `import` mappát mindig ajánlott üresen tartani.

## A merevlemezem nem működik, vagy furcsa kattogó hangot ad ki, mit tegyek?

Ennek oka, hogy a Wii U nem ad elég energiát egy USB porton keresztül a merevlemez használatához.

Ezt úgy tudod orvosolni, hogy vagy egy külső tápellátású HDD-t használsz, vagy egy Y-kábellel csatlakoztatod a HDD-t a két USB-porthoz.

Ha a HDD egy ideig működött, majd egyes játékoknál/az összes játéknál leállt, ez ugyanaz a probléma, és ugyanazokkal a módszerekkel javítható.

## Amikor néhány fájlt kicsomagolok, néhány fájlnak van duplikáltja, amit "info.json" & "manifest.install"-nak hívnak, mit csináljak ezekkel?

Semmi különöset, hagy őket ott, töröld őket, vagy is felül az újakkal. Ezek a fájlok nem használtak a folyamatban, így nem számít, hogy ott vannak-e vagy sem.

## A konzolom elvesztette az online kapcsolatot és van egy HDD-m a tetején a konzolnak, mit tehetek?

A belső antennát lehet befolyásolta a merevelmez mágnese.  
Elmozgathatod a HDD-et egy másik helyre a Wii U tetején, vagy le is veheted a Wii U-ről teljesen.
