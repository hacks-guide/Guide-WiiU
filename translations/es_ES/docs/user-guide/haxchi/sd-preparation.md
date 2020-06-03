# Haxchi

## Preparación de la tarjeta SD {docsify-ignore}

Ahora colocaremos los archivos necesarios para el CFW y algunas funciones homebrew.

?> **Aviso** Será necesario formatear la tarjeta de memoria como FAT32. Si tu tarjeta no lo está, formatéala en FAT32, utiliza [GUIFormat](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) seleccionando 32k (32768) en ''Allocation unit size''.

### What You Need

- El archivo <a href="docs/files/config.txt" download>config</a> de Haxchi
- El último lanzamiento de [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/latest)
  - Necesitas descargar el archivo llamado `payload.zip`.
- La versión 1.4 de [The Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4)
  - Necesitaras descargar la version 1.4 con el nombre de `homebrew_launcher.v1.4.zip` de The Homebrew Launcher
- The latest release of [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- La última versión de [The homebrew Launcher Channel](https://github.com/GaryOderNichts/homebrew_launcher/releases/tag/v2.1_fix)
  - Necesitas descargar el archivo llamado `homebrew_launcher_channel.v2.1_fix.zip`
- La última versión de [Wii U NAND Dumper](https://github.com/koolkdev/wiiu-nanddumper/releases/latest)
- La última versión de [Homebrew App Store](https://github.com/vgmoose/hbas/releases/latest)
  - Necesitaras descargar el archivo `wiiu-extracttosd.zip`
- The latest release of [Haxchi](https://github.com/FIX94/haxchi/releases/latest)
  - Download only the Haxchi `.zip` file.
- La última versión de <a href="docs/files/savemii_mod.zip" download>SaveMii mod</a>

### Instrucciones

?> **Aviso:** Los archivos info.json y manifest.install no son necesarios para el proceso de modificación, y pueden ser eliminados.

1. Inserta la tarjeta de memoria de tu Wii U en tu PC.
1. Crea una carpeta llamada `install` en la raíz de la tarjeta.
1. Extrae el archivo `homebrew_launcher_channel.v2.1_fix.zip` dentro de la carpeta `install` que acabas de crear.
1. Extrae el archivo `Haxchi.zip` en la raiz de tu tarjeta SD.
1. Extract the `wup_installer_gx2.zip` file to the root of your SD Card.
1. Extrae el archivo `nanddumper.zip` a la raíz de tu tarjeta SD.
1. Extrae el archivo `wiiu-extracttosd.zip` a la raíz de tu tarjeta SD.
1. Extract the `homebrew_launcher.v.1.4.zip` file to the root of your SD Card.
1. Extract the `savemii_mod.zip` file to the root of your SD Card.
1. Copia el archivo `config.txt` en la carpeta `haxchi` dentro de la tarjeta SD. Reemplaza el archivo en caso de ser necesario.
1. Copy the `payload.elf` from the `payload.zip` to the `wiiu` folder on your SD Card.