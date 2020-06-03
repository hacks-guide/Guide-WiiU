# CBHC

## Preparación de la tarjeta SD {docsify-ignore}

Ahora colocaremos los archivos necesarios para el CFW y algunas funciones homebrew.

?> **Aviso** Será necesario formatear la tarjeta de memoria como FAT32. Si tu tarjeta no lo está, formatéala en FAT32, utiliza [GUIFormat](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) seleccionando 32k (32768) en ''Allocation unit size''.

### Lo que vas a necesitar:

- El archivo <a href="docs/files/config.txt" download>config</a> de Haxchi
- El último lanzamiento de [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/latest)
  - Necesitas descargar el archivo llamado `payload.zip`.
- La versión 1.4 de [The Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4)
  - Necesitaras descargar la version 1.4 con el nombre de `homebrew_launcher.v1.4.zip` de The Homebrew Launcher
- La última versión de [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- La última versión de [The homebrew Launcher Channel](https://github.com/GaryOderNichts/homebrew_launcher/releases/tag/v2.1_fix)
  - Necesitas descargar el archivo llamado `homebrew_launcher_channel.v2.1_fix.zip`
- La última versión de [Wii U NAND Dumper](https://github.com/koolkdev/wiiu-nanddumper/releases/latest)
- La última versión de [Homebrew App Store](https://github.com/vgmoose/hbas/releases/latest)
  - Necesitaras descargar el archivo `wiiu-extracttosd.zip`
- La última versión de [Haxchi y CBHC](https://github.com/FIX94/haxchi/releases/latest)
  - Descarga ambos archivos .zip, el de Haxchi y el de CBHC.
- La última versión de <a href="docs/files/savemii_mod.zip" download>SaveMii mod</a>

### Instrucciones

?> **Aviso:** Los archivos info.json y manifest.install no son necesarios para el proceso de modificación, y pueden ser eliminados.

1. Inserta la tarjeta de memoria de tu Wii U en tu PC.
1. Crea una carpeta llamada `install` en la raíz de la tarjeta.
1. Extrae el archivo `homebrew_launcher_channel.v2.1_fix.zip` dentro de la carpeta `install` que acabas de crear.
1. Extrae el archivo `Haxchi.zip` en la raiz de tu tarjeta SD.
1. Extrae el contenido de `CBHC.zip` en la raíz de la tarjeta SD.
1. Extrae el archivo `wup_installer_gx2.zip` en la raíz de la tarjeta SD.
1. Extrae el archivo `nanddumper.zip` a la raíz de tu tarjeta SD.
1. Extrae el archivo `wiiu-extracttosd.zip` a la raíz de tu tarjeta SD.
1. Extrae el archivo `homebrew_launcher.v.1.4.zip` en la raíz de la tarjeta SD.
1. Extrae el archivo `savemii_mod.zip` en la raíz de la tarjeta SD.
1. Copia el archivo `config.txt` en la carpeta `haxchi` dentro de la tarjeta SD. Reemplaza el archivo en caso de ser necesario.
1. Copia el archivo `payload.elf` que se encuentra dentro de `payload.zip` a la carpeta `wiiu` de la tarjeta SD.