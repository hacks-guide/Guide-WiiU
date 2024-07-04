# vWii Modding útmutató {docsify-ignore-all}

---&#x20;

## SD kártya előkészítés

Ez az oldal végig vezet a vWii-d moddolásának folyamatán.

A szükséges Homebrew fájloknak az SD kártyára helyezésével kezdjük.

?> **Fontos**
Az SD kártyád FAT32-re kell legyen formázva. Ha az SD kártyád nem FAT32-re formázott, használd a [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm)-ot 32k (32768) allokációs egység mérettek a formázáshoz. **Ne** cimkézd az SD kártyát `wiiu`-nak, különben problémát okoz a homebrew-nak.

?> Ha korábban hackelted már a Wii U-t, akkor ugyanazt az SD-kártyát használhatod ehhez a folyamathoz.

?> A Wii U homebrew-val ellentétben a vWii alkalmazások egy külön alkalmazás mappába kerülnek a gyökérben. A Compat Installer az **egyetlen** Wii U alkalmazás itt.

### Mire van szükséged

- Az [Aroma for your café](https://aroma.foryour.cafe) oldalról a legutolsó fájlok.
  - Kattints a `Download Payloads` és a `Download Base Aroma` opciókra.
  - Olvasd el a lépéseket, és kattintsd be a jelölő négyzeteket.
  - Ha már telepítetted az Aroma-t, nem kell újra letöltened.
- A [Compat Title Installer](https://hbas-frontend.b-cdn.net/wiiu/CompatTitleInstaller) legutolsó verziója.
- A <a href="docs/files/Patched_IOS80_Installer_for_vWii.zip" download>Patchelt IOS 80 Installer for vWii</a>. ([Forrás](https://github.com/Lazr1026/Patched-IOS80-Installer-for-vWii))
- A <a href ="docs/files/d2x_cIOS_Installer.zip" download>d2x cIOS Installer</a>.

## Lépések

1. Helyezd be a Wii U-d SD kártyáját a PC-dbe.
2. Másold az `apps` mappát a `Patched_IOS80_Installer_for_vWii.zip` fájlből, az SD kártyád gyökerébe.
3. Másold a `d2x-cios-installer` fájlt a `d2x_cIOS_Installer.zip` fájlból az SD kártyád gyökeréből nyíló apps mappába.
4. Másold a letöltött Base Aroma és payloads.zip fájlok tartalmát az SD kártyád gyökerébe.
5. Másold a CompatTitleInstaller.zip fájl tartalmát az SD kártyád gyökerébe.
6. Vedd ki az SD kártyát a számítógépedből, és dubd be a Wii U konzolodba.
