Come risolvere il codice errore 112-1037
---
Questa pagina ti guiderà nel processo di risolvimento del codice errore 112-1037.

### Cosa ti servirà {docsify-ignore}

- Un'installazione funzionante di [homebrew](introduction).
- [wupclient.py](https://raw.githubusercontent.com/Elpunical/mocha/master/ios_mcp/wupclient.py) **(tasto destro -> Salva il link come... -> Clicca salva).**
- L'ultima versione di [Python](https://www.python.org/downloads/).

### Istruzioni {docsify-ignore}

1. Installa Python sul computer.

### Risolvere l'errore

<!-- tabs:start -->

#### **Windows**

### Windows

1. Accendi il tuo Wii U.
1. Avvia l'Homebrew Launcher e avvia Mocha.
1. Torna al menu Wii U.
1. Apri una del finestra del Prompt dei Comandi sul PC.
1. Utilizzare il seguente comando: `cd <directory>`.
    - Esempio: <code>cd C:\Users\username<wbr>\Downloads</code>.
1. Usa il seguente comando: `py -3 -i wupclient.py`.
1. Inserisci l'indirizzo IP del tuo Wii U.
    - Non sai come trovarlo? Leggi [qui](find-wiiu-ip-address).
1. Usa il comando appropriato a seconda della regione della tua console:
    - JPN: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001200a/content<wbr>/pages<wbr>/index.html", 0x644)</code>.
    - USA: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001210a/content<wbr>/pages<wbr>/index.html", 0x644)</code>.
    - EUR: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001220a/content<wbr>/pages<wbr>/index.html", 0x644)</code>.
1. Se tutto è andato bene, otterrai la seguente risposta: `chmod returned 0x0`.
1. Il codice errore dovrebbe essere sparito.

#### **macOS & Linux**

### macOS & Linux

1. Accendi il tuo Wii U.
1. Avvia l'Homebrew Launcher e avvia Mocha.
1. Torna al menu Wii U.
1. Apri una finestra del Terminale.
1. Utilizzare il seguente comando: `cd <directory>`.
    - Su macOS, il luogo più comune per trovare i file scaricati è <code>/Users/username<wbr>/Downloads</code>.
    - Su Linux, il luogo più comune per trovare i file scaricati è <code>/home/username<wbr>/Downloads</code>.
1. Usa il seguente comando: `python3 -i wupclient.py`.
1. Inserisci l'indirizzo IP del tuo Wii U.
    - Non sai come trovarlo? Leggi [qui](find-wiiu-ip-address).
1. Usa il comando appropriato a seconda della regione della tua console:
    - JPN: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001200a/content<wbr>/pages<wbr>/index.html", 0x644)</code>.
    - USA: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001210a/content<wbr>/pages<wbr>/index.html", 0x644)</code>.
    - EUR: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001220a/content<wbr>/pages<wbr>/index.html", 0x644)</code>.
1. Se tutto è andato bene, otterrai la seguente risposta: `chmod returned 0x0`.
1. Il codice errore dovrebbe essere sparito.

<!-- tabs:end -->