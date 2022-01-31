# Jak naprawić kod błędu 112-1037
---
Ta strona poprowadzi Cię przez proces naprawy błędu 112-1037.

### Czego Potrzebujesz {docsify-ignore}

- Działająca [instalacja homebrew](introduction).
- [wupclient.py](https://raw.githubusercontent.com/Elpunical/mocha/master/ios_mcp/wupclient.py) **(right-click -> Save link as... -> Click Save).**
- Najnowsza wersja [Python](https://www.python.org/downloads/).

### Instrukcje {docsify-ignore}

1. Zainstaluj Python na swoim komputerze.

### Naprawianie kodu błędu

<!-- tabs:start -->

#### **Windows**

### Windows

1. Włącz Wii U.
1. Uruchom Homebrew Launcher i uruchom aplikację MochaFAT32.
1. Wróć do menu Wii U.
1. Otwórz okno wiersza poleceń.
1. Użyj następującej komendy: `cd <directory>`.
    - Przykład: <code>cd C:\Users\username<wbr>\Downloads</code>.
1. Użyj następującej komendy: `py -3 -i wupclient.py`.
1. Wprowadź adres IP swojego Wii U.
    - Nie wiesz, jak go znaleźć? Przeczytaj [to](find-wiiu-ip-address).
1. Użyj odpowiedniego polecenia w zależności od regionu twojej konsoli:
    - JPN: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001200a/content<wbr>/pages<wbr>/index.html", 0x644)</code>.
    - USA: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001210a/content<wbr>/pages<wbr>/index.html", 0x644)</code>.
    - EUR: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001220a/content<wbr>/pages<wbr>/index.html", 0x644)</code>.
1. Jeśli komenda zadziała, otrzymasz następującą odpowiedź: `chmod returned 0x0`.
1. Błąd powinien zostać usunięty.

#### **macOS & Linux**

### macOS & Linux

1. Włącz Wii U.
1. Uruchom Homebrew Launcher i uruchom aplikację MochaFAT32.
1. Wróć do menu Wii U.
1. Otwórz terminal.
1. Użyj następującej komendy: `cd <directory>`.
    - Na macOS najczęstszym miejscem do znalezienia pobranych plików jest <code>/Users/username<wbr>/Downloads</code>.
    - Na Linuxie, najczęstszym miejscem do znalezienia pobranych plików jest <code>/home/username<wbr>/Downloads</code>.
1. Użyj następującej komendy: `python3 -i wupclient.py`.
1. Wprowadź adres IP swojego Wii U.
    - Nie wiesz, jak go znaleźć? Przeczytaj [to](find-wiiu-ip-address).
1. Użyj odpowiedniego polecenia w zależności od regionu twojej konsoli:
    - JPN: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001200a/content<wbr>/pages<wbr>/index.html", 0x644)</code>.
    - USA: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001210a/content<wbr>/pages<wbr>/index.html", 0x644)</code>.
    - EUR: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001220a/content<wbr>/pages<wbr>/index.html", 0x644)</code>.
1. Jeśli komenda zadziała, otrzymasz następującą odpowiedź: `chmod returned 0x0`.
1. Błąd powinien zostać usunięty.

<!-- tabs:end -->