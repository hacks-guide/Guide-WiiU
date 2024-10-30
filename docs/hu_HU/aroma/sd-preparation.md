---
prev: true
next: true
---

# SD kártya előkészítés

Először az Aroma fájlokat az SD kártyára rakjuk.

::: warning

Az SD kártyád FAT32-re kell legyen formázva. Ha az SD kártyád nem FAT32-re formázott, használd a [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm)-ot 32k (32768) allokációs egység mérettel a formázáshoz.\
**Ne** cimkézd az SD kártyát `wiiu`-nak, különben problémát okoz a homebrew-nak.

:::

## Lépések

1. Az [Aroma](https://aroma.foryour.cafe) weboldalán gördíts le a **Download** szekcióig.
   - Olvasd el a lépéseket, és kattintsd be a jelölő négyzeteket.
     ![](/assets/img/guide/Aroma_Box.png)
   - Kattints a `Download Payloads` és a `Download Base Aroma` opciókra.
     ![](/assets/img/guide/Aroma_DL.png)
2. Helyezd be a Wii U-d SD kártyáját a PC-dbe.
3. **Csomagold ki** és másold a `wiiu` mappát a kettő frissen letöltött _`.zip`_ fájlból az SD kártyád gyökerébe.
   - A `wiiu` mappákat mergelni kell, ha nem történik meg automatikusan.

::: tip

Ha a számítógép rákérdezz, hogy felülírjuk-e a létező fájlokat az SD kártyán, akkor kattints a Igen-re.

:::

::: tip

Ha Mac számmítógépen vagy válaszd a `Merge` opciót a csere helyett. Ha a Merge opció nem jelenik meg azonnal, akkor tartsd nyomva az `Option` gombot, amíg mozgatod a gyökérbe a fájlokat.

:::

----------

A zip tartalmának gyökérbe kicsomagolása valahogy így kell kinézzen.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto;">
  <video style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" controls muted>
    <source src="/assets/img/guide/SD_Prep.mp4" type="video/mp4">
    A böngésződ nem támogatja ezt a videó tag-et.
  </video>
</div>

## SD kártya kiosztás

:::details Kattints ide a végső SD kártya kiosztás megtekintéséhez.

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

:::

::: tip

Ha már telepítetted a PayloadLoader-t, rögtön mehetsz tovább [A telepítés véglegesítésére](./finalizing-setup.md)

:::
