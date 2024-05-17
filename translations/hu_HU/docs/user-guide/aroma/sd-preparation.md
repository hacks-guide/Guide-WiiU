# Aroma {docsify-ignore-all}

## SD kártya előkészítés

Először az Aroma fájlokat az SD kártyára rakjuk.

> **Fontos** Az SD kártyád FAT32-re kell legyen formázva. Ha az SD-kártya nincs FAT32 formátumra formázva, használja a [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm)ot 32k (32768) kiosztási egységmérettel a formázáshoz.  
**Ne címkézd** fel az SD kártyát `wiiu`-ként, különben problémákat okoz a homebrew-val.

### Lépések

1. Az [Aroma](https://aroma.foryour.cafe) oldalán görgess le a **Download** részig.
    - Olvasd el a lépéseket, és kattintsd be a jelölő négyzeteket.
    - Kattints a `Download Payloads` és a `Download Base Aroma` opciókra.
1. Helyezd be a Wii U-d SD kártyáját a PC-dbe.
1. **Csomagold ki** és másold a `wiiu` mappát a kettő frissen letöltött *`.zip`* fájlból az SD kártyád gyökerébe.
    - A `wiiu` mappákat mergelni kell, ha nem történik meg automatikusan.

?> Ha a számítógép rákérdezz, hogy felülírjuk a létező fájlokat az SD kártyán, akkor kattints a Yes-re.

?> Ha Mac számmítógépen vagy válaszd a `Merge` opciót a csere helyett. Ha a Merge opció nem jelenik meg azonnal, akkor tartsd nyomva az `Option` gombot, amíg mozgatod a gyökérbe a fájlokat.

----------

### SD kártya kiosztás

<details>
<summary>Kattints ide a végső SD kártya kiosztás megtekintéséhez.</summary>

```
💾sd:
 ┗ 📂wiiu
   ┣ 📂apps
   ┃ ┣ 📂AromaUpdater
   ┃ ┃ ┗📜AromaUpdater.wuhb
   ┃ ┣ 📜PayloadLoaderInstaller.wuhb
   ┃ ┗ (Minden egyéb appnak is itt kell lennie)
   ┣ 📂environments
   ┃ ┗ 📂aroma
   ┃   ┣ 📂modules
   ┃   ┃ ┣ 📂setup
   ┃   ┃ ┃ ┣ 📜00_mocha.rpx
   ┃   ┃ ┃ ┣ 📜10_wums_loader.rpx
   ┃   ┃ ┃ ┗ 📜99_autoboot.rpx
   ┃   ┃ ┗ (Minden más .wms végű Aroma modulnak is itt kell lennie)
   ┃   ┣ 📂plugins
   ┃   ┃ ┣ 📜AromaBasePlugin.wps
   ┃   ┃ ┣ 📜drc_region_free.wps
   ┃   ┃ ┣ 📜homebrew_on_menu.wps
   ┃   ┃ ┣ 📜regionfree.wps
   ┃   ┃ ┗ (Minden más .wps végű Aroma modulnak is itt kell lennie)
   ┃   ┗ 📜root.rpx
   ┣ 📂payloads
   ┃ ┣ 📂default
   ┃ ┃ ┗ 📜payload.elf
   ┃ ┗ 📂nanddumper
   ┃   ┗ 📜payload.elf
   ┣ 📜payload.rpx
   ┗ 📜payload.elf
```

</details>

?> Ha már telepítetted a PayloadLoader-t, rögtön mehetsz tovább [A telepítés véglegesítésére](./finalizing-setup.md)
