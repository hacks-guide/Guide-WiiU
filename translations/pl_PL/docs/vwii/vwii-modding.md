# vWii Modding Guide
---
This page will guide you through the process of modding your vWii.

We will now place the required Homebrew files on the SD Card.

?> **Notice** Your SD Card will need to be formatted as FAT32. If your SD Card is not formatted to FAT32, use [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) with 32k (32768) Allocation unit size to format it. **Do not** label the SD Card as `wiiu` or it will cause issues with homebrew.

?> If you have hacked your Wii U in the past, you can use the same SD Card for this process.



### Czego Potrzebujesz {docsify-ignore}

- The latest files from [Tiramisu for your café](https://tiramisu.foryour.cafe).
    - Select `Nanddumper` and `Base-Tiramisu`.
- The latest release of the [vwii-compat-installer](https://github.com/TheLordScruffy/vwii-compat-installer/releases).
- The <a href="docs/files/Patched_IOS80_Installer_for_vWii.zip" download>Patched IOS 80 Installer for vWii</a>.
- The <a href ="docs/files/d2x_cIOS_Installer.zip" download>d2x cIOS Installer</a>.

### Instrukcje {docsify-ignore}

1. Włóż kartę SD Wii U do komputera.
1. Copy the `apps` folder from the <code>Patched_<wbr>IOS80_<wbr>Installer_<wbr>for_<wbr>vWii<wbr>.zip</code> file to the root of your SD Card.
1. Copy the contents of the <code>d2x_<wbr>cIOS_<wbr>Installer<wbr>.zip</code> file to the root of your SD Card.
1. Copy the contents of the downloaded Tiramisu *`.zip`* file to the root of your SD Card.
1. Copy the `compat_installer.elf` file to the `wiiu/apps` folder on the root of your SD Card.
1. Wyjmij kartę SD ze swojego komputera i podłącz ją do konsoli Wii U.

### NAND Backup

In case anything goes wrong in the later process and your vWii ends up bricked, restoring a previously made NAND backup can fix it.

?> If you have recently made a NAND backup that includes SLCCMPT and OTP, feel free to skip this step.

1. Launch the [Wii U NAND Dumper](vwii/browser-exploit).
1. Użyj D-Pada na Wii U GamePad'zie, aby ustawić następującą konfigurację:
    - Dump SLC: **optional**
    - Dump SLCCMPT: **yes**
    - Dump MLC: **optional**
    - Dump OTP: **yes**
    - Dump SEEPROM: **optional**
1. Naciśnij przycisk A, aby rozpocząć proces zrzucania na kartę SD.
1. Po zakończeniu procesu, wyłącz Wii U, wyciągnij kartę SD z Wii U i podłącz ją do komputera.
1. To make sure you don't lose the files, copy the `slccmpt.bin`, `otp.bin` and if you chose to go with a full backup, `seeprom.bin`, `slc.bin`, and `every mlc.bin.part` file to your computer.
1. Usuń pliki z karty SD aby zwolnić miejsce.
1. Wyjmij kartę SD ze swojego komputera i podłącz ją do konsoli Wii U.

### Instalacja kanału Homebrew

1. Uruchom [Tiramisu](vwii/browser-exploit).
1. Uruchom Homebrew Launcher, otwierając Mii Maker.
1. Uruchom compat_installer.
1. Naciśnij `A`, aby zainstalować Kanał Homebrew i poczekaj aż zobaczysz komunikat `Install succeeded`. Następnie naciśnij przycisk HOME, aby powrócić do menu Wii U.
1. Uruchom vWii (ikonę Wii Menu).
   - Jeśli instalacja zakończyła się sukcesem, powinieneś zobaczyć Kanał Homebrew w Wii Menu.

### Instalacja cIOS

!> Upewnij się, że nie masz żadnych plików `.wad` gdziekolwiek indziej niż w folderze `aplikacji` na karcie SD.

?> **Wskazówka** Możesz przytrzymać przycisk `B` na GamePadzie podczas włączania Wii U, aby uruchomić bezpośrednio vWii.

1. Włącz Wii U i uruchom vWii.
1. Uruchom Kanał Homebrew Channel.
1. Uruchom instalator d2x cIOS.
1. Ustaw wszystko tak jak poniżej:
    - Select cIOS: `v10 beta52 d2x-v10-beta52-vWii`
    - Select cIOS base: `56`
    - Select cIOS slot: `249`
1. Naciśnij przycisk `A`, aby zainstalować.
1. Ustaw wszystko tak jak poniżej:
    - Select cIOS: `v10 beta52 d2x-v10-beta52-vWii`
    - Select cIOS base: `57`
    - Select cIOS slot: `250`
1. Naciśnij przycisk `A`, aby zainstalować.
1. Ustaw wszystko tak jak poniżej:
    - Select cIOS: `v10 beta52 d2x-v10-beta52-vWii`
    - Select cIOS base: `58`
    - Select cIOS slot: `251`
1. Naciśnij przycisk `A`, aby zainstalować.
1. Naciśnij przycisk `B`, aby wyjść.

### Patch'owanie IOS 80

!> Jeśli z jakiegoś powodu Wii U wyłączy się podczas patchowania IOS 80, vWii zostanie uszkodzone. Można to naprawić poprzez wyodrębnienie IOS 80 z poprzednio utworzonej kopii zapasowej NAND, a następnie zastąpienie jej przez FTP lub przez [ponowną instalację IOS 80](recover-vwii-ioses-channels).

1. Uruchom spatch'owany instalator IOS 80 dla vWii.
1. Przeczytaj ekran z ostrzeżeniem i poczekaj 30 sekund.
1. Naciśnij dowolny przycisk, aby zainstalować.
1. Poczekaj aż pojawi się komunikat <code>IOS80 <wbr>Installation <wbr>is <wbr>complete!</code>.
1. Naciśnij dowolne przyciski, aby wyjść.

!> Instalacja niestandardowego menu systemowego jest związana ryzykiem uszkodzenia vWii i zawsze powinieneś mieć aktualną kopię zapasową. Jeżeli jednak przeprowadzisz cały proces prawidłowo, nie masz się czego obawiać.

!> Instalacja dowolnego IOS (w tym TED IOS) lub plików WAD wykonanych dla oryginalnego Wii na twoim vWii spowoduje jego uszkodzenie.

!> Instalacja Priiloader uszkodzi twoje vWii.
