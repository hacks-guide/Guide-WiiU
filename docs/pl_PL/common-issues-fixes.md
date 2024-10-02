# Common Issues & Fixes

## Najczęstsze błędy Haxchi

- **-3:** No SD Card detected. Spróbuj wyjąć i włożyć kartę ponownie. Upewnij się, że karta SD jest w formacie FAT32. Jeśli błąd będzie się powtarzał, spróbuj przedmuchać gniazdo na kartę SD, ponieważ może być zabrudzone.

- **-4:** SD detected but could not mount. Sprawdź, czy karta SD używa tablicy MBR, a nie GPT. Sprawdź też, czy istnieją inne partycje na karcie SD, jeżeli tak, połącz je w jedną główną partycję.

- **-5:** Missing files on the SD. Check to see if your SD has Homebrew Launcher located in <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher<wbr>/homebrew_launcher.elf</code>.

## Błędy przeglądarki

- **FSGetMountSource failed:** Same as -3 above, means no SD Card detected. Spróbuj wyjąć i włożyć kartę ponownie. This could also mean that the SD card is locked (Slider is down instead of up) or the SD card label is "WIIU", which is stated in the guide causes conflict. If it's not any of these issues, refer to the last suggestion from -3.

- **FSOpenFile failed [...] payload.elf:** Missing payload file on SD. Make sure you have payload.elf in the wiiu folder, and the wiiu folder on the root.

- **FSOpenFile failed:** Missing `homebrew_launcher` on SD. Make sure you have `homebrew_launcher.elf` in the <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher</code> folder.

- **SD Mount Failed:** Similar to -4, the console recognizes the SD card but could not mount it. Make sure it is formatted properly, and it is not damaged. Also, your SD card is more compatible with reputable brands (i.e. SanDisk, Samsung, Lexar, etc.) and less likely to have issues.

## Data Management prosi o "delete unnecessary data", co to oznacza?

Tu chodzi o usunięcie plików pozostałych z instalacji które się nie powiodły. Zawsze wybieraj "Yes", aby usunąć te dane, ponieważ zajmują one miejsce niepotrzebnie.
If it ever stays stuck on deleting the data in an infinite loop, you can manually delete the data yourself.\
Use FTPiiU Everywhere and browse to `/storage_mlc/usr/import` then delete any files in the folder if any exists. W tym miejscu znajdują się pliki po niekompletnych instalacjach. It'll be `/storage_usb/usr/import` if installed to a USB.\
The `import` folder should always be kept empty.

## Mój dysk HDD nie działa lub wydaje dziwny dźwięk klikania, co powinienem zrobić?

Powodem takiego stanu rzeczy jest to, że Wii U nie zapewnia wystarczającej ilości zasilania przez jeden port USB, aby używać dysku twardego.

Możesz to naprawić za pomocą zewnętrznego zasilania dysku HDD lub za pomocą kabla Y do podłączenia dysku HDD do dwóch portów USB.

Jeśli twój HDD pracował przez jakiś czas poprawnie i przestał pracować w przypadku niektórych gier/wszystkich gier, jest to ten sam problem jak wyżej i można go rozwiązać tymi samymi metodami.

## When extracting some of the files there are duplicates of certain ones called "info.json" & "manifest.install", what do I do with those?

Nic specjalnego, możesz je tam zostawić, usunąć lub zastąpić nowymi. Pliki te nie są używane, zatem nie jest ważne czy istnieją czy też nie.

## Moja konsola nagle straciła łączność online, a ja mam na konsoli położony dysk HDD, co powinienem zrobić?

The internal antenna may have been influenced by the hard drive magnet.\
You can move the HDD to a different position atop the Wii U, or move it off the Wii U entirely.
