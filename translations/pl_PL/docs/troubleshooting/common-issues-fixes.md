# Najczęstsze Błędy i Ich Naprawa {docsify-ignore-all}
---
### Najczęstsze błędy Haxchi

 - **-3:** "No SD Card detected." Nie wykryto karty SD. Spróbuj wyjąć i włożyć kartę ponownie. Upewnij się, że karta SD jest w formacie FAT32. Jeśli błąd będzie się powtarzał, spróbuj przedmuchać gniazdo na kartę SD, ponieważ może być zabrudzone.

 - **-4:**"SD detected but could not mount." Karta SD wykryta, ale nie można jej zamontować. Sprawdź, czy karta SD używa tablicy MBR, a nie GPT. Sprawdź też, czy istnieją inne partycje na karcie SD, jeżeli tak, połącz je w jedną główną partycję.

 - **-5:** "Missing files on the SD." Brakujące pliki na karcie SD. Sprawdź, czy na karcie SD jest Homebrew Launcher zlokalizowany w <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher<wbr>/homebrew_launcher.elf</code>.

### Błędy przeglądarki

 - **FSGetMountSource failed:** Tak samo jak -3 powyżej, oznacza że nie wykryto karty SD. Spróbuj wyjąć i włożyć kartę ponownie. This could also mean that the SD card is locked (Slider is down instead of up) or the SD card label is "WIIU", which is stated in the guide causes conflict. If it's not any of these issues, refer to the last suggestion from -3.

 - **FSOpenFile failed [...] payload.elf:** Brak pliku payload na karcie SD. Make sure you have payload.elf in the wiiu folder, and the wiiu folder on the root.

 - **FSOpenFile failed:** Brak `homebrew_launcher` na karcie SD. Upewnij się, że masz `homebrew_launcher.elf` w folderze <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher</code>.

 - **SD Mount Failed:** Similar to -4, the console recognizes the SD card but could not mount it. Make sure it is formatted properly, and it is not damaged. Also, your SD card is more compatible with reputable brands (i.e. SanDisk, Samsung, Lexar, etc.) and less likely to have issues.

### Data Management prosi o "delete unnecessary data", co to oznacza?

Tu chodzi o usunięcie plików pozostałych z instalacji które się nie powiodły. Zawsze wybieraj "Yes", aby usunąć te dane, ponieważ zajmują one miejsce niepotrzebnie. Jeśli kiedykolwiek Wii U zawiesi się na usuwaniu danych, możesz je usunąć ręcznie.  
Użyj FTPiiU Everywhere i przejdź do`/storage_mlc/usr/import` a następnie usuń wszystkie pliki z folderu, jeśli takie istnieją. W tym miejscu znajdują się pliki po niekompletnych instalacjach. Jeśli jednak instalowałeś gry/aplikacje na USB to pliki będą tu: `/storage_usb/usr/import`  
Folder `import` powinien być zawsze pusty.

### Mój dysk HDD nie działa lub wydaje dziwny dźwięk klikania, co powinienem zrobić?

Powodem takiego stanu rzeczy jest to, że Wii U nie zapewnia wystarczającej ilości zasilania przez jeden port USB, aby używać dysku twardego.

Możesz to naprawić za pomocą zewnętrznego zasilania dysku HDD lub za pomocą kabla Y do podłączenia dysku HDD do dwóch portów USB.

Jeśli twój HDD pracował przez jakiś czas poprawnie i przestał pracować w przypadku niektórych gier/wszystkich gier, jest to ten sam problem jak wyżej i można go rozwiązać tymi samymi metodami.

### Podczas pobierania niektórych plików powstają duplikaty niektórych z nich o nazwie "info.json" & "manifest.install", co mam z nimi zrobić?

Nic specjalnego, możesz je tam zostawić, usunąć lub zastąpić nowymi. Pliki te nie są używane, zatem nie jest ważne czy istnieją czy też nie.

### Moja konsola nagle straciła łączność online, a ja mam na konsoli położony dysk HDD, co powinienem zrobić?

Antena wewnętrzna mogła zostać zakłócona przez magnesy dyskowe.  
Możesz przesunąć HDD w inne miejsce na Wii U lub całkowicie zdjąć go z Wii U.
