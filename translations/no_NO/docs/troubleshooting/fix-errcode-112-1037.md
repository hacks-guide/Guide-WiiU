# Hvordan fikse Feilkode 112-1037
---
Denne siden vil hjelpe deg med å fikse feilkode 112-1037.

### Dette Trenger Du {docsify-ignore}

- En fungerende [Homebrew installasjon](introduction).
- [wupclient.py](https://raw.githubusercontent.com/Elpunical/mocha/master/ios_mcp/wupclient.py) **(Høyreklikk -> Lagre lenke som... -> Klikk Lagre).**
- Siste utgave av [Python](https://www.python.org/downloads/).

### Instruksjoner {docsify-ignore}

1. Installer Python på PC'en din.

### Fikse feilkoden

<!-- tabs:start -->

#### **Windows**

### Windows

1. Slå på Wii U konsollen.
1. Start Homebrew Launcher og kjør Mocha.
1. Gå tilbake til Wii U-menyen.
1. Åpne opp et Command Prompt vindu.
1. Skriv: `cd <directory>`.
  - Eksempel: <code>cd C:\Brukere\brukernavn<wbr>\Nedlastninger</code>.
1. Skriv: `py -3 -i wupclient.py`.
1. Skriv inn IP-adressen til Wii U konsollen.
 - Usikker på hvor du finner det? Les [dette](find-wiiu-ip-address).
1. Bruk riktig kommando avhengig av regionen til konsollen:
 - JPN: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001200a/content<wbr>/pages<wbr>/index.html", 0x644)</code>.
 - USA: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001210a/content<wbr>/pages<wbr>/index.html", 0x644)</code>.
 - EUR: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001220a/content<wbr>/pages<wbr>/index.html", 0x644)</code>.
1. Hvis kommandoen fungerte, vil du få følgende svar: `chmod returned 0x0`.
1. Feilkoden skal nå være borte.

#### **macOS & Linux**

### macOS & Linux

1. Slå på Wii U konsollen.
1. Start Homebrew Launcher og kjør Mocha.
1. Gå tilbake til Wii U-menyen.
1. Åpne opp et terminalvindu.
1. Skriv: `cd <directory>`.
 - På macOS er det vanligste stedet å finne nedlastede filer i <code>/Brukere/brukernavn<wbr>/Nedlastninger</code>.
 - På Linux er det vanligste stedet å finne nedlastede filer i <code>/home/username<wbr>/Downloads</code>.
1. Skriv: `py -3 -i wupclient.py`.
1. Skriv inn IP-adressen til Wii U konsollen.
 - Usikker på hvor du finner det? Les [dette](find-wiiu-ip-address).
1. Bruk riktig kommando avhengig av regionen til konsollen:
 - JPN: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001200a/content<wbr>/pages<wbr>/index.html", 0x644)</code>.
 - USA: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001210a/content<wbr>/pages<wbr>/index.html", 0x644)</code>.
 - EUR: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001220a/content<wbr>/pages<wbr>/index.html", 0x644)</code>.
1. Hvis kommandoen fungerte, vil du få følgende svar: `chmod returned 0x0`.
1. Feilkoden skal nå være borte.

<!-- tabs:end -->