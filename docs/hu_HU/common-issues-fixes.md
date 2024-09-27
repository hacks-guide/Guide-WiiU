# Common Issues & Fixes

## Haxchi gyakori hibák

- **-3:** No SD Card detected. Csatlakoztad újra az SD kártyát és próbáld újra. Legyél biztos abban, hogy az SD kártya FAT32-re formázott. Ha a probléma tartós, próbálj belefújni az SD slotba, mert koszossá válhat.

- **-4:** SD detected but could not mount. Ellenőrizd, hogy az SD kártya MBR-t használ-e nem GPT-t. Továbbá ellenőrizd, hogy vannak e más partíciók az SD kártyán és mergeld őket egy nagy elsődleges partícióvá.

- **-5:** Missing files on the SD. Check to see if your SD has Homebrew Launcher located in <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher<wbr>/homebrew_launcher.elf</code>.

## Böngésző hibák

- **FSGetMountSource failed:** Same as -3 above, means no SD Card detected. Csatlakoztad újra az SD kártyát és próbáld újra. Ez jelentheti az is, hogy az SD kártya zárolt (a tolóka lent van a fenti állapot helyett) vagy az SD kártya neve (label) "WIIU" amit a korábban az útmutató is jelzett, hogy problémát okoz. Ha ezek egyike sem, akkor ppróbáld meg az utolsó javaslatot a -3-ból.

- **FSOpenFile failed [...] payload.elf:** Missing payload file on SD. Ellenőrizd, hogy a payload.elf megtalálható-e a wiiu mappában, és a wiuu mappa a gyökérben van.

- **FSOpenFile failed:** Missing `homebrew_launcher` on SD. Make sure you have `homebrew_launcher.elf` in the <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher</code> folder.

- **SD Mount Failed:** Similar to -4, the console recognizes the SD card but could not mount it. Legyél biztos abban, hogy megfelelően formázott és nem sérült. Továbbá az SD kártyád jobban kompatibilis megbízható márkákkal (pl. SanDisk, Samsung, Lexar, etc.) and less likely to have issues.

## A data management kéri, hogy töröljük a felesleges adatot, mit jelent ez?

Ez a befejezetlen telepítésekből visszamaradt fájlokra utal. Mindig válaszd a Yes lehetőséget ezen adatok törléséhez, mivel azok ok nélkül foglalják a helyet.
If it ever stays stuck on deleting the data in an infinite loop, you can manually delete the data yourself.\
Use FTPiiU Everywhere and browse to `/storage_mlc/usr/import` then delete any files in the folder if any exists. Itt találhatók a részleges telepítések fájljai a sikertelen telepítések után. It'll be `/storage_usb/usr/import` if installed to a USB.\
The `import` folder should always be kept empty.

## A merevlemezem nem működik, vagy furcsa kattogó hangot ad ki, mit tegyek?

Ennek oka, hogy a Wii U nem ad elég energiát egy USB porton keresztül a merevlemez használatához.

Ezt úgy tudod orvosolni, hogy vagy egy külső tápellátású HDD-t használsz, vagy egy Y-kábellel csatlakoztatod a HDD-t a két USB-porthoz.

Ha a HDD egy ideig működött, majd egyes játékoknál/az összes játéknál leállt, ez ugyanaz a probléma, és ugyanazokkal a módszerekkel javítható.

## When extracting some of the files there are duplicates of certain ones called "info.json" & "manifest.install", what do I do with those?

Semmi különöset, hagy őket ott, töröld őket, vagy is felül az újakkal. Ezek a fájlok nem használtak a folyamatban, így nem számít, hogy ott vannak-e vagy sem.

## A konzolom elvesztette az online kapcsolatot és van egy HDD-m a tetején a konzolnak, mit tehetek?

The internal antenna may have been influenced by the hard drive magnet.\
You can move the HDD to a different position atop the Wii U, or move it off the Wii U entirely.
